import { NextResponse } from "next/server";
import { Prisma } from "@prisma/client";

import { requireSession, buildErrorResponse, ForbiddenError } from "@/lib/auth-helpers";
import { prisma } from "@/lib/prisma";
import { leadUpdateSchema } from "@/lib/zod-schemas";

type RouteParams = {
  params: {
    id: string;
  };
};

async function getLeadOrThrow(id: string, sessionUser: { id: string; role?: string }) {
  const where: Prisma.LeadWhereInput = { id };
  if (sessionUser.role !== "ADMIN") {
    where.OR = [{ ownerId: sessionUser.id }, { ownerId: null }];
  }

  const lead = await prisma.lead.findFirst({
    where,
    include: {
      owner: {
        select: {
          id: true,
          name: true,
          email: true,
        },
      },
      notes: {
        include: {
          user: {
            select: {
              id: true,
              name: true,
            },
          },
        },
        orderBy: {
          createdAt: "desc",
        },
      },
      files: {
        include: {
          user: {
            select: {
              id: true,
              name: true,
            },
          },
        },
        orderBy: {
          createdAt: "desc",
        },
      },
    },
  });

  if (!lead) {
    throw new ForbiddenError("Lead não encontrado ou acesso negado.");
  }

  return lead;
}

export async function GET(_request: Request, { params }: RouteParams) {
  try {
    const session = await requireSession();
    const lead = await getLeadOrThrow(params.id, session.user);
    return NextResponse.json(lead);
  } catch (error) {
    return buildErrorResponse(error);
  }
}

export async function PUT(request: Request, { params }: RouteParams) {
  try {
    const session = await requireSession();
    const lead = await getLeadOrThrow(params.id, session.user);

    const json = await request.json();
    const parsed = leadUpdateSchema.safeParse(json);

    if (!parsed.success) {
      return NextResponse.json(
        { error: parsed.error.flatten() },
        { status: 400 }
      );
    }

    if (
      session.user.role !== "ADMIN" &&
      parsed.data.ownerId &&
      parsed.data.ownerId !== session.user.id
    ) {
      throw new ForbiddenError("Você não pode atribuir leads a outros usuários.");
    }

    const updated = await prisma.lead.update({
      where: { id: lead.id },
      data: {
        ...parsed.data,
        ownerId:
          session.user.role === "ADMIN"
            ? parsed.data.ownerId ?? lead.ownerId
            : parsed.data.ownerId ?? lead.ownerId ?? session.user.id,
      },
      include: {
        owner: {
          select: {
            id: true,
            name: true,
            email: true,
          },
        },
      },
    });

    return NextResponse.json(updated);
  } catch (error) {
    return buildErrorResponse(error);
  }
}
