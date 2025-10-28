import Link from "next/link";
import { redirect } from "next/navigation";

import { LeadFilters } from "@/components/admin/LeadFilters";
import { LeadsTable } from "@/components/admin/LeadsTable";
import { StatusBadge } from "@/components/admin/StatusBadge";
import { Button } from "@/components/ui/button";
import { auth } from "@/lib/auth";
import { listLeadsForSession, parseLeadFilters } from "@/lib/lead-service";
import { prisma } from "@/lib/prisma";

const STATUS_ORDER = ["LEAD", "PROPOSTA", "CONTRATO", "CLIENTE", "ARQUIVADO"] as const;

function normalizeParams(searchParams: Record<string, string | string[] | undefined>) {
  return parseLeadFilters({
    page: searchParams.page,
    perPage: searchParams.perPage,
    status: Array.isArray(searchParams.status)
      ? searchParams.status
      : searchParams.status
        ? [searchParams.status]
        : [],
    ownerId:
      typeof searchParams.ownerId === "string" && searchParams.ownerId.length > 0
        ? searchParams.ownerId
        : undefined,
    search: typeof searchParams.search === "string" ? searchParams.search : undefined,
    startDate: typeof searchParams.startDate === "string" ? searchParams.startDate : undefined,
    endDate: typeof searchParams.endDate === "string" ? searchParams.endDate : undefined,
    includeArchived: searchParams.includeArchived,
  });
}

type LeadsPageProps = {
  searchParams: Record<string, string | string[] | undefined>;
};

export default async function LeadsPage({ searchParams }: LeadsPageProps) {
  const session = await auth();

  if (!session?.user) {
    redirect("/login");
  }

  let filters;
  try {
    filters = normalizeParams(searchParams);
  } catch {
    filters = parseLeadFilters({});
  }

  const [{ leads, total, statusCounters }, owners] = await Promise.all([
    listLeadsForSession(session.user, filters),
    prisma.user.findMany({
      orderBy: { name: "asc" },
      select: { id: true, name: true },
    }),
  ]);

  const visibleOwners = session.user.role === "ADMIN"
    ? owners
    : owners.filter((owner) => owner.id === session.user.id);

  const totalPages = Math.max(1, Math.ceil(total / filters.perPage));

  const exportParams = new URLSearchParams();
  for (const key of Object.keys(searchParams)) {
    const value = searchParams[key];
    if (Array.isArray(value)) {
      value.forEach((item) => exportParams.append(key, item));
    } else if (typeof value === "string" && value.length > 0) {
      exportParams.set(key, value);
    }
  }
  const exportHref = `/api/leads/export?${exportParams.toString()}`;

  const statusSummary = STATUS_ORDER.map((status) => ({
    status,
    count: statusCounters[status] ?? 0,
  }));

  return (
    <div className="space-y-8">
      <div className="flex flex-wrap items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-brand-primary">Leads</h1>
          <p className="text-sm text-slate-500">
            Acompanhe e distribua os leads recebidos pelos canais digitais.
          </p>
        </div>
        <div className="flex flex-wrap items-center gap-2">
          <Link href="/admin/leads/new">
            <Button>Adicionar lead</Button>
          </Link>
          <a
            href={exportHref}
            className="text-sm font-semibold text-brand-primary underline-offset-4 hover:underline"
          >
            Exportar CSV
          </a>
        </div>
      </div>
      <div className="flex flex-wrap gap-3">
        {statusSummary.map((item) => (
          <div
            key={item.status}
            className="flex items-center gap-2 rounded-full bg-white px-3 py-1 shadow-sm"
          >
            <StatusBadge status={item.status} />
            <span className="text-sm font-medium text-slate-600">{item.count}</span>
          </div>
        ))}
      </div>
      <LeadFilters
        owners={visibleOwners}
        initialFilters={{
          status: filters.status ?? [],
          ownerId: filters.ownerId ?? null,
          search: filters.search ?? "",
          startDate: filters.startDate ? filters.startDate.toISOString() : null,
          endDate: filters.endDate ? filters.endDate.toISOString() : null,
        }}
        statusCounters={statusCounters}
        showOwnerFilter={session.user.role === "ADMIN"}
      />
      <LeadsTable
        leads={leads}
        page={filters.page}
        perPage={filters.perPage}
        total={total}
        totalPages={totalPages}
        currentRole={session.user.role === "ADMIN" ? "ADMIN" : "AGENT"}
      />
    </div>
  );
}
