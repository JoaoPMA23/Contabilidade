import type { Prisma } from "@prisma/client";
import { z } from "zod";

import { prisma } from "@/lib/prisma";
import { leadFiltersSchema } from "@/lib/zod-schemas";

export type LeadFilters = z.infer<typeof leadFiltersSchema>;

const leadInclude = {
  owner: {
    select: {
      id: true,
      name: true,
      email: true,
    },
  },
} satisfies Prisma.LeadInclude;

export type LeadWithOwner = Prisma.LeadGetPayload<{
  include: typeof leadInclude;
}>;

export function parseLeadFiltersFromURL(url: URL) {
  const params = url.searchParams;
  return parseLeadFilters({
    page: params.get("page") ?? undefined,
    perPage: params.get("perPage") ?? undefined,
    status: params.getAll("status"),
    ownerId: params.get("ownerId") ?? undefined,
    search: params.get("search") ?? undefined,
    startDate: params.get("startDate") ?? undefined,
    endDate: params.get("endDate") ?? undefined,
    includeArchived: params.get("includeArchived") ?? undefined,
  });
}

export function parseLeadFilters(input: Record<string, unknown>) {
  const parsed = leadFiltersSchema.safeParse(input);
  if (!parsed.success) {
    throw parsed.error;
  }
  return parsed.data;
}

type SessionUser = {
  id: string;
  role?: string;
};

function buildWhere(
  sessionUser: SessionUser,
  filters: LeadFilters
): { listWhere: Prisma.LeadWhereInput; counterWhere: Prisma.LeadWhereInput } {
  const { status, ownerId, search, startDate, endDate, includeArchived } =
    filters;

  const baseWhere: Prisma.LeadWhereInput = {};

  if (sessionUser.role !== "ADMIN") {
    baseWhere.OR = [
      { ownerId: sessionUser.id },
      { ownerId: null },
    ];
  } else if (ownerId) {
    baseWhere.ownerId = ownerId;
  }

  if (search) {
    baseWhere.OR = [
      ...(Array.isArray(baseWhere.OR) ? baseWhere.OR : []),
      { companyName: { contains: search, mode: "insensitive" } },
      { contactName: { contains: search, mode: "insensitive" } },
      { email: { contains: search, mode: "insensitive" } },
      { cnpj: { contains: search, mode: "insensitive" } },
      { phone: { contains: search, mode: "insensitive" } },
    ];
  }

  if (startDate || endDate) {
    const createdFilter: Prisma.DateTimeFilter = {};
    if (startDate) {
      createdFilter.gte = startDate;
    }
    if (endDate) {
      createdFilter.lte = endDate;
    }
    baseWhere.createdAt = createdFilter;
  }

  const shouldIncludeArchived =
    includeArchived === true || status?.includes("ARQUIVADO");

  const counterWhere: Prisma.LeadWhereInput = { ...baseWhere };

  if (!shouldIncludeArchived) {
    baseWhere.archivedAt = null;
    counterWhere.archivedAt = null;
  }

  const listWhere: Prisma.LeadWhereInput =
    status && status.length > 0
      ? { ...baseWhere, status: { in: status } }
      : baseWhere;

  return { listWhere, counterWhere };
}

export async function listLeadsForSession(
  sessionUser: SessionUser,
  filters: LeadFilters
): Promise<{
  leads: LeadWithOwner[];
  total: number;
  statusCounters: Record<string, number>;
  filters: LeadFilters;
}> {
  const { listWhere, counterWhere } = buildWhere(sessionUser, filters);
  const skip = (filters.page - 1) * filters.perPage;

  const [total, leads, counters] = await Promise.all([
    prisma.lead.count({ where: listWhere }),
    prisma.lead.findMany({
      where: listWhere,
      skip,
      take: filters.perPage,
      orderBy: { createdAt: "desc" },
      include: leadInclude,
    }),
    prisma.lead.groupBy({
      by: ["status"],
      _count: { status: true },
      where: counterWhere,
    }),
  ]);

  const statusCounters = counters.reduce<Record<string, number>>(
    (acc, item) => {
      acc[item.status] = item._count.status;
      return acc;
    },
    {}
  );

  return {
    leads,
    total,
    statusCounters,
    filters,
  };
}

export async function exportLeadsForSession(
  sessionUser: SessionUser,
  filters: LeadFilters
): Promise<LeadWithOwner[]> {
  const { listWhere } = buildWhere(sessionUser, filters);

  return prisma.lead.findMany({
    where: listWhere,
    orderBy: { createdAt: "desc" },
    include: leadInclude,
  });
}
