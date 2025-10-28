import { NextResponse } from "next/server";
import { ZodError } from "zod";

import { auth } from "@/lib/auth";

type AuthSession = NonNullable<Awaited<ReturnType<typeof auth>>>;
type SessionWithUser = AuthSession & {
  user: NonNullable<AuthSession["user"]>;
};

export async function requireSession(): Promise<SessionWithUser> {
  const session = await auth();
  if (!session?.user) {
    throw new UnauthorizedError();
  }
  const sessionWithUser: SessionWithUser = { ...session, user: session.user };
  return sessionWithUser;
}

export class UnauthorizedError extends Error {
  constructor(message = "Nao autorizado") {
    super(message);
    this.name = "UnauthorizedError";
  }
}

export class ForbiddenError extends Error {
  constructor(message = "Acesso negado") {
    super(message);
    this.name = "ForbiddenError";
  }
}

export function buildErrorResponse(error: unknown) {
  if (error instanceof UnauthorizedError) {
    return NextResponse.json({ error: error.message }, { status: 401 });
  }
  if (error instanceof ForbiddenError) {
    return NextResponse.json({ error: error.message }, { status: 403 });
  }
  if (error instanceof ZodError) {
    return NextResponse.json({ error: error.flatten() }, { status: 400 });
  }
  if (error instanceof Error) {
    return NextResponse.json({ error: error.message }, { status: 400 });
  }
  return NextResponse.json(
    { error: "Erro interno inesperado" },
    { status: 500 }
  );
}

export function assertAdmin(session: SessionWithUser) {
  if (session.user.role !== "ADMIN") {
    throw new ForbiddenError("Funcionalidade restrita para administradores.");
  }
}
