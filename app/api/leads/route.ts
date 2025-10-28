import { NextResponse } from "next/server";

import { requireSession, buildErrorResponse, ForbiddenError } from "@/lib/auth-helpers";
import { listLeadsForSession, parseLeadFiltersFromURL } from "@/lib/lead-service";
import { prisma } from "@/lib/prisma";
import { leadCreateSchema } from "@/lib/zod-schemas";

export async function GET(request: Request) {
  try {
    const session = await requireSession();
    const url = new URL(request.url);
    const filters = parseLeadFiltersFromURL(url);

    const result = await listLeadsForSession(session.user, filters);

    return NextResponse.json({
      data: result.leads,
      meta: {
        page: filters.page,
        perPage: filters.perPage,
        total: result.total,
        totalPages: Math.ceil(result.total / filters.perPage),
        statusCounters: result.statusCounters,
      },
    });
  } catch (error) {
    return buildErrorResponse(error);
  }
}

export async function POST(request: Request) {
  try {
    const session = await requireSession();
    const json = await request.json();
    const parsed = leadCreateSchema.safeParse(json);

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

    const lead = await prisma.lead.create({
      data: {
        ...parsed.data,
        ownerId:
          session.user.role === "ADMIN"
            ? parsed.data.ownerId
            : parsed.data.ownerId ?? session.user.id,
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

    return NextResponse.json(lead, { status: 201 });
  } catch (error) {
    return buildErrorResponse(error);
  }
}
