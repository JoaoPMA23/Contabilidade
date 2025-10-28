import { NextResponse } from "next/server";

import { requireSession, buildErrorResponse, ForbiddenError } from "@/lib/auth-helpers";
import { prisma } from "@/lib/prisma";
import { leadAssignSchema } from "@/lib/zod-schemas";

type RouteParams = {
  params: {
    id: string;
  };
};

export async function POST(request: Request, { params }: RouteParams) {
  try {
    const session = await requireSession();

    if (session.user.role !== "ADMIN") {
      throw new ForbiddenError("Apenas administradores podem reatribuir leads.");
    }

    const lead = await prisma.lead.findUnique({
      where: { id: params.id },
    });

    if (!lead) {
      return NextResponse.json({ error: "Lead não encontrado." }, { status: 404 });
    }

    const parsed = leadAssignSchema.safeParse(await request.json());
    if (!parsed.success) {
      return NextResponse.json(
        { error: parsed.error.flatten() },
        { status: 400 }
      );
    }

    const updated = await prisma.lead.update({
      where: { id: lead.id },
      data: {
        ownerId: parsed.data.ownerId ?? null,
      },
    });

    return NextResponse.json(updated);
  } catch (error) {
    return buildErrorResponse(error);
  }
}
