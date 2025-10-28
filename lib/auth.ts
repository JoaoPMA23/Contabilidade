import { randomBytes } from "node:crypto";

import NextAuth, { getServerSession, type NextAuthOptions } from "next-auth";
import Credentials from "next-auth/providers/credentials";
import { compare } from "bcryptjs";
import type { Role } from "@/types/prisma";

import { prisma } from "@/lib/prisma";

const runningOnVercel = process.env.VERCEL === "1";
const isProdDeployment = process.env.NODE_ENV === "production" && runningOnVercel;

const authSecret =
  process.env.NEXTAUTH_SECRET ??
  process.env.AUTH_SECRET ??
  (!isProdDeployment ? randomBytes(32).toString("hex") : undefined);

if (!authSecret) {
  throw new Error(
    "NEXTAUTH_SECRET (or AUTH_SECRET) must be defined for production deployments."
  );
}

if (
  !process.env.NEXTAUTH_SECRET &&
  !process.env.AUTH_SECRET &&
  !isProdDeployment
) {
  // eslint-disable-next-line no-console
  console.warn(
    "NextAuth secret not set. Using a temporary value for local development."
  );
}

export const authOptions: NextAuthOptions = {
  secret: authSecret,
  session: {
    strategy: "jwt",
  },
  pages: {
    signIn: "/login",
  },
  providers: [
    Credentials({
      name: "Credenciais",
      credentials: {
        username: { label: "Usuario", type: "text" },
        password: { label: "Senha", type: "password" },
      },
      async authorize(credentials) {
        if (!credentials?.username || !credentials?.password) {
          return null;
        }

        const user = await prisma.user.findUnique({
          where: { username: credentials.username },
        });

        if (!user) {
          return null;
        }

        const isValid = await compare(credentials.password, user.passwordHash);
        if (!isValid) {
          return null;
        }

        return {
          id: user.id,
          name: user.name,
          email: user.email,
          role: user.role,
          username: user.username,
        };
      },
    }),
  ],
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        const typedUser = user as { id: string; role?: Role; username?: string };
        token.id = typedUser.id;
        if (typedUser.role) {
          token.role = typedUser.role;
        }
        if (typedUser.username) {
          token.username = typedUser.username;
        }
      }
      return token;
    },
    async session({ session, token }) {
      if (session.user) {
        if (typeof token.id === "string") {
          session.user.id = token.id;
        }
        if (typeof token.role === "string") {
          session.user.role = token.role;
        }
        if (typeof token.username === "string") {
          session.user.username = token.username;
        }
      }
      return session;
    },
  },
};

const handler = NextAuth(authOptions);

export const GET = handler;
export const POST = handler;

export function auth() {
  return getServerSession(authOptions);
}
