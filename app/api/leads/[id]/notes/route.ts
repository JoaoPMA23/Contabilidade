import { NextResponse } from "next/server";

import { requireSession, buildErrorResponse } from "@/lib/auth-helpers";
import { prisma } from "@/lib/prisma";
import { noteCreateSchema } from "@/lib/zod-schemas";

type RouteParams = {
  params: {
    id: string;
  };
};

export async function POST(request: Request, { params }: RouteParams) {
  try {
    const session = await requireSession();

    const lead = await prisma.lead.findUnique({
      where: { id: params.id },
      select: {
        id: true,
        ownerId: true,
      },
    });

    if (!lead) {
      return NextResponse.json({ error: "Lead não encontrado." }, { status: 404 });
    }

    if (
      session.user.role !== "ADMIN" &&
      lead.ownerId !== session.user.id
    ) {
      return NextResponse.json(
        { error: "Acesso negado." },
        { status: 403 }
      );
    }

    const body = await request.json();
    const parsed = noteCreateSchema.safeParse(body);
    if (!parsed.success) {
      return NextResponse.json(
        { error: parsed.error.flatten() },
        { status: 400 }
      );
    }

    const note = await prisma.leadNote.create({
      data: {
        leadId: lead.id,
        userId: session.user.id,
        type: parsed.data.type,
        content: parsed.data.content,
        nextActionAt: parsed.data.nextActionAt ?? null,
      },
      include: {
        user: {
          select: {
            id: true,
            name: true,
          },
        },
      },
    });

    return NextResponse.json(note, { status: 201 });
  } catch (error) {
    return buildErrorResponse(error);
  }
}
