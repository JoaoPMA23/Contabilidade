import { NextResponse } from "next/server";
import { hash } from "bcryptjs";

import {
  requireSession,
  assertAdmin,
  buildErrorResponse,
} from "@/lib/auth-helpers";
import { prisma } from "@/lib/prisma";
import { userCreateSchema } from "@/lib/zod-schemas";

export async function GET() {
  try {
    const session = await requireSession();
    assertAdmin(session);

    const users = await prisma.user.findMany({
      orderBy: { createdAt: "desc" },
      select: {
        id: true,
        name: true,
        email: true,
        username: true,
        role: true,
        createdAt: true,
      },
    });

    return NextResponse.json(users);
  } catch (error) {
    return buildErrorResponse(error);
  }
}

export async function POST(request: Request) {
  try {
    const session = await requireSession();
    assertAdmin(session);

    const body = await request.json();
    const parsed = userCreateSchema.safeParse(body);
    if (!parsed.success) {
      return NextResponse.json(
        { error: parsed.error.flatten() },
        { status: 400 }
      );
    }

    const passwordHash = await hash(parsed.data.password, 12);

    const user = await prisma.user.create({
      data: {
        name: parsed.data.name,
        email: parsed.data.email,
        username: parsed.data.username,
        passwordHash,
        role: parsed.data.role,
      },
      select: {
        id: true,
        name: true,
        email: true,
        username: true,
        role: true,
        createdAt: true,
      },
    });

    return NextResponse.json(user, { status: 201 });
  } catch (error) {
    if (
      error instanceof Error &&
      error.message.includes("Unique constraint")
    ) {
      return NextResponse.json(
        { error: "Email ou usuário já cadastrado." },
        { status: 400 }
      );
    }
    return buildErrorResponse(error);
  }
}
