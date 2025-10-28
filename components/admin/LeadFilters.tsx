"use client";

import { LeadStatus } from "@prisma/client";
import { useMemo, useState } from "react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

import { Button, buttonVariants } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select } from "@/components/ui/select";
import { cn } from "@/lib/utils";

const STATUS_OPTIONS: { value: LeadStatus; label: string }[] = [
  { value: "LEAD", label: "Lead" },
  { value: "PROPOSTA", label: "Proposta" },
  { value: "CONTRATO", label: "Contrato" },
  { value: "CLIENTE", label: "Cliente" },
  { value: "ARQUIVADO", label: "Arquivado" },
];

export type LeadFiltersInitial = {
  status: LeadStatus[];
  ownerId?: string | null;
  search?: string | null;
  startDate?: string | null;
  endDate?: string | null;
};

export type LeadFiltersProps = {
  owners: { id: string; name: string }[];
  initialFilters: LeadFiltersInitial;
  statusCounters: Record<string, number>;
  showOwnerFilter: boolean;
};

export function LeadFilters({
  owners,
  initialFilters,
  statusCounters,
  showOwnerFilter,
}: LeadFiltersProps) {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const [statusSet, setStatusSet] = useState<Set<LeadStatus>>(
    () => new Set(initialFilters.status)
  );
  const [ownerId, setOwnerId] = useState(initialFilters.ownerId ?? "");
  const [search, setSearch] = useState(initialFilters.search ?? "");
  const [startDate, setStartDate] = useState(
    initialFilters.startDate?.slice(0, 10) ?? ""
  );
  const [endDate, setEndDate] = useState(
    initialFilters.endDate?.slice(0, 10) ?? ""
  );

  const selectedStatus = useMemo(() => Array.from(statusSet), [statusSet]);

  function toggleStatus(value: LeadStatus) {
    setStatusSet((prev) => {
      const next = new Set(prev);
      if (next.has(value)) {
        next.delete(value);
      } else {
        next.add(value);
      }
      return next;
    });
  }

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const params = new URLSearchParams();

    if (search.trim()) {
      params.set("search", search.trim());
    }

    if (showOwnerFilter && ownerId) {
      params.set("ownerId", ownerId);
    }

    if (startDate) {
      params.set("startDate", startDate);
    }
    if (endDate) {
      params.set("endDate", endDate);
    }

    selectedStatus.forEach((status) => params.append("status", status));

    if (selectedStatus.includes("ARQUIVADO")) {
      params.set("includeArchived", "true");
    }

    const perPageExisting = searchParams.get("perPage");
    if (perPageExisting) {
      params.set("perPage", perPageExisting);
    }

    params.set("page", "1");

    const query = params.toString();
    router.push(query ? `${pathname}?${query}` : pathname);
  }

  function handleReset() {
    router.push(pathname);
    setStatusSet(new Set());
    setOwnerId("");
    setSearch("");
    setStartDate("");
    setEndDate("");
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-5 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm"
    >
      <div className="flex flex-wrap gap-2">
        {STATUS_OPTIONS.map((option) => {
          const isActive = statusSet.has(option.value);
          return (
            <button
              key={option.value}
              type="button"
              onClick={() => toggleStatus(option.value)}
              className={cn(
                "rounded-full border px-3 py-1 text-xs font-semibold uppercase tracking-wide transition",
                isActive
                  ? "border-brand-primary bg-brand-primary text-white"
                  : "border-slate-300 bg-white text-slate-600 hover:border-brand-primary hover:text-brand-primary"
              )}
            >
              {option.label}
              <span className="ml-1 text-[0.65rem] font-normal">
                {statusCounters[option.value] ?? 0}
              </span>
            </button>
          );
        })}
      </div>
      <div className="grid gap-3 md:grid-cols-4">
        <div className="md:col-span-2 space-y-2">
          <label
            htmlFor="search"
            className="text-xs font-semibold uppercase tracking-wide text-slate-500"
          >
            Busca
          </label>
          <Input
            id="search"
            name="search"
            value={search}
            onChange={(event) => setSearch(event.target.value)}
            placeholder="Empresa, contato, e-mail, CNPJ..."
          />
        </div>
        {showOwnerFilter ? (
          <div className="space-y-2">
            <label
              htmlFor="ownerId"
              className="text-xs font-semibold uppercase tracking-wide text-slate-500"
            >
              Responsável
            </label>
            <Select
              id="ownerId"
              name="ownerId"
              value={ownerId}
              onChange={(event) => setOwnerId(event.target.value)}
            >
              <option value="">Todos</option>
              {owners.map((owner) => (
                <option key={owner.id} value={owner.id}>
                  {owner.name}
                </option>
              ))}
            </Select>
          </div>
        ) : null}
        <div className="space-y-2">
          <label
            htmlFor="startDate"
            className="text-xs font-semibold uppercase tracking-wide text-slate-500"
          >
            Início
          </label>
          <Input
            id="startDate"
            type="date"
            value={startDate}
            onChange={(event) => setStartDate(event.target.value)}
          />
        </div>
        <div className="space-y-2">
          <label
            htmlFor="endDate"
            className="text-xs font-semibold uppercase tracking-wide text-slate-500"
          >
            Fim
          </label>
          <Input
            id="endDate"
            type="date"
            value={endDate}
            onChange={(event) => setEndDate(event.target.value)}
          />
        </div>
      </div>
      <div className="flex flex-wrap items-center gap-2">
        <Button type="submit">Aplicar filtros</Button>
        <button
          type="button"
          onClick={handleReset}
          className={cn(buttonVariants({ variant: "ghost" }), "text-slate-500")}
        >
          Limpar filtros
        </button>
      </div>
    </form>
  );
}
