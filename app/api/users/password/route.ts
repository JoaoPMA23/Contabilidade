import { NextResponse } from "next/server";
import { compare, hash } from "bcryptjs";

import {
  buildErrorResponse,
  requireSession,
} from "@/lib/auth-helpers";
import { prisma } from "@/lib/prisma";
import { passwordUpdateSchema } from "@/lib/zod-schemas";

export async function POST(request: Request) {
  try {
    const session = await requireSession();
    const body = await request.json();
    const parsed = passwordUpdateSchema.safeParse(body);

    if (!parsed.success) {
      return NextResponse.json(
        { error: parsed.error.flatten() },
        { status: 400 }
      );
    }

    const user = await prisma.user.findUnique({
      where: { id: session.user.id },
      select: { passwordHash: true },
    });

    if (!user) {
      return NextResponse.json(
        { error: "Usuário não encontrado." },
        { status: 404 }
      );
    }

    const isCurrentValid = await compare(
      parsed.data.currentPassword,
      user.passwordHash
    );

    if (!isCurrentValid) {
      return NextResponse.json(
        { error: "Senha atual incorreta." },
        { status: 400 }
      );
    }

    if (parsed.data.currentPassword === parsed.data.newPassword) {
      return NextResponse.json(
        { error: "A nova senha deve ser diferente da atual." },
        { status: 400 }
      );
    }

    const newHash = await hash(parsed.data.newPassword, 12);

    await prisma.user.update({
      where: { id: session.user.id },
      data: { passwordHash: newHash, mustChangePassword: false },
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    return buildErrorResponse(error);
  }
}
