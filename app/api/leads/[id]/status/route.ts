import { NextResponse } from "next/server";

import { requireSession, buildErrorResponse } from "@/lib/auth-helpers";
import { prisma } from "@/lib/prisma";
import { leadStatusSchema } from "@/lib/zod-schemas";

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
      select: { id: true, ownerId: true },
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
    const parsed = leadStatusSchema.safeParse(body);

    if (!parsed.success) {
      return NextResponse.json(
        { error: parsed.error.flatten() },
        { status: 400 }
      );
    }

    const isArchived = parsed.data.status === "ARQUIVADO";

    const updated = await prisma.lead.update({
      where: { id: lead.id },
      data: {
        status: parsed.data.status,
        archivedAt: isArchived ? new Date() : null,
      },
    });

    return NextResponse.json(updated);
  } catch (error) {
    return buildErrorResponse(error);
  }
}
