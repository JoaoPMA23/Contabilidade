import NextAuth from "next-auth";

declare module "next-auth" {
  interface Session {
    user?: {
      id: string;
      name?: string | null;
      email?: string | null;
      role?: string;
      username?: string;
      mustChangePassword?: boolean;
    };
  }

  interface User {
    role: string;
    username: string;
    mustChangePassword?: boolean;
  }
}

declare module "next-auth/jwt" {
  interface JWT {
    id?: string;
    role?: string;
    username?: string;
    mustChangePassword?: boolean;
  }
}
