import { NextResponse } from "next/server";
import type { Prisma } from "@prisma/client";

import { requireSession, buildErrorResponse } from "@/lib/auth-helpers";
import { prisma } from "@/lib/prisma";
import { bulkArchiveSchema } from "@/lib/zod-schemas";

export async function POST(request: Request) {
  try {
    const session = await requireSession();
    const parsed = bulkArchiveSchema.safeParse(await request.json());
    if (!parsed.success) {
      return NextResponse.json(
        { error: parsed.error.flatten() },
        { status: 400 }
      );
    }

    const where: Prisma.LeadWhereInput = {
      id: { in: parsed.data.ids },
    };

    if (session.user.role !== "ADMIN") {
      where.ownerId = session.user.id;
    }

    const result = await prisma.lead.updateMany({
      where,
      data: {
        status: "ARQUIVADO",
        archivedAt: new Date(),
      },
    });

    return NextResponse.json({ updated: result.count });
  } catch (error) {
    return buildErrorResponse(error);
  }
}
