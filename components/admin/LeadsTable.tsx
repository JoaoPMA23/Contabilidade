"use client";

import {
  ColumnDef,
  flexRender,
  getCoreRowModel,
  useReactTable,
} from "@tanstack/react-table";
import { format } from "date-fns";
import Link from "next/link";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useMemo, useState } from "react";
import toast from "react-hot-toast";

import { StatusBadge } from "@/components/admin/StatusBadge";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { cn } from "@/lib/utils";
import type { LeadWithOwner } from "@/lib/lead-service";

type LeadsTableProps = {
  leads: LeadWithOwner[];
  page: number;
  perPage: number;
  total: number;
  totalPages: number;
  currentRole: "ADMIN" | "AGENT";
};

export function LeadsTable({
  leads,
  page,
  perPage,
  total,
  totalPages,
  currentRole,
}: LeadsTableProps) {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const [rowSelection, setRowSelection] = useState({});
  const [isArchiving, setIsArchiving] = useState(false);
  const canBulk = currentRole === "ADMIN";

  const columns = useMemo<ColumnDef<LeadWithOwner>[]>(
    () => [
      {
        id: "select",
        header: ({ table }) => (
          <Checkbox
            checked={table.getIsAllRowsSelected()}
            onChange={(event) => table.toggleAllRowsSelected(event.target.checked)}
            aria-label="Selecionar todos os leads"
          />
        ),
        cell: ({ row }) => (
          <Checkbox
            checked={row.getIsSelected()}
            onChange={(event) => row.toggleSelected(event.target.checked)}
            aria-label={`Selecionar lead ${row.original.contactName}`}
          />
        ),
        enableSorting: false,
        size: 32,
      },
      {
        header: "Lead",
        accessorKey: "companyName",
        cell: ({ row }) => {
          const lead = row.original;
          return (
            <div className="space-y-1">
              <Link
                href={`/admin/leads/${lead.id}`}
                className="font-semibold text-brand-primary underline-offset-4 transition hover:underline"
              >
                {lead.companyName ?? lead.contactName}
              </Link>
              <p className="text-xs text-slate-500">{lead.contactName}</p>
            </div>
          );
        },
      },
      {
        header: "Contato",
        accessorKey: "email",
        cell: ({ row }) => {
          const lead = row.original;
          return (
            <div className="text-xs text-slate-600">
              <p>{lead.email}</p>
              {lead.phone ? <p className="text-slate-400">{lead.phone}</p> : null}
            </div>
          );
        },
      },
      {
        header: "Status",
        accessorKey: "status",
        cell: ({ row }) => <StatusBadge status={row.original.status} />,
      },
      {
        header: "Responsável",
        accessorKey: "owner",
        cell: ({ row }) => (
          <span className="text-sm text-slate-600">
            {row.original.owner?.name ?? "—"}
          </span>
        ),
      },
      {
        header: "Criado em",
        accessorKey: "createdAt",
        cell: ({ row }) => (
          <span className="text-sm text-slate-600">
            {format(new Date(row.original.createdAt), "dd/MM/yyyy HH:mm")}
          </span>
        ),
      },
    ],
    []
  );

  const table = useReactTable({
    data: leads,
    columns,
    state: {
      rowSelection,
    },
    onRowSelectionChange: setRowSelection,
    getCoreRowModel: getCoreRowModel(),
  });

  const selectedRows = table.getSelectedRowModel().rows;
  const selectedIds = selectedRows.map((row) => row.original.id);

  async function handleBulk(action: "archive" | "unarchive") {
    if (selectedIds.length === 0 || !canBulk) return;
    setIsArchiving(true);

    try {
      const endpoint =
        action === "archive"
          ? "/api/leads/bulk-archive"
          : "/api/leads/bulk-unarchive";

      const response = await fetch(endpoint, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ids: selectedIds }),
      });

      if (!response.ok) {
        const data = await response.json().catch(() => ({}));
        throw new Error(data.error ?? "Não foi possível concluir a ação.");
      }

      toast.success(
        action === "archive"
          ? "Leads arquivados com sucesso."
          : "Leads reabertos com sucesso."
      );
      setRowSelection({});
      router.refresh();
    } catch (error) {
      toast.error(error instanceof Error ? error.message : "Erro inesperado.");
    } finally {
      setIsArchiving(false);
    }
  }

  function updatePage(newPage: number) {
    const params = new URLSearchParams(searchParams.toString());
    params.set("page", String(newPage));
    router.push(`${pathname}?${params.toString()}`);
  }

  return (
    <div className="space-y-4">
      <div className="flex flex-wrap items-center justify-between gap-3 text-sm text-slate-500">
        <span>
          Página {page} de {Math.max(totalPages, 1)} • {total} leads no total (até {perPage} por página)
        </span>
        {selectedIds.length > 0 ? (
          <span className="font-medium text-brand-primary">
            {selectedIds.length} selecionado(s)
          </span>
        ) : null}
      </div>
      <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
        <table className="min-w-full divide-y divide-slate-200 text-sm">
          <thead className="bg-slate-50">
            {table.getHeaderGroups().map((headerGroup) => (
              <tr key={headerGroup.id}>
                {headerGroup.headers.map((header) => (
                  <th
                    key={header.id}
                    scope="col"
                    className={cn(
                      "px-4 py-3 text-left text-xs font-semibold uppercase tracking-wide text-slate-500",
                      header.column.id === "select" ? "w-10" : ""
                    )}
                  >
                    {header.isPlaceholder
                      ? null
                      : flexRender(header.column.columnDef.header, header.getContext())}
                  </th>
                ))}
              </tr>
            ))}
          </thead>
          <tbody className="divide-y divide-slate-100">
            {table.getRowModel().rows.length === 0 ? (
              <tr>
                <td colSpan={columns.length} className="px-4 py-10 text-center text-sm text-slate-500">
                  Nenhum lead encontrado com os filtros atuais.
                </td>
              </tr>
            ) : (
              table.getRowModel().rows.map((row) => (
                <tr key={row.id} className="hover:bg-slate-50/60">
                  {row.getVisibleCells().map((cell) => (
                    <td
                      key={cell.id}
                      className={cn(
                        "px-4 py-3 align-top",
                        cell.column.id === "select" ? "w-10" : ""
                      )}
                    >
                      {flexRender(cell.column.columnDef.cell, cell.getContext())}
                    </td>
                  ))}
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
      <div className="flex flex-wrap items-center justify-between gap-3">
        <div className="flex flex-wrap gap-2">
          <Button
            type="button"
            variant="outline"
            disabled={!canBulk || selectedIds.length === 0 || isArchiving}
            onClick={() => handleBulk("archive")}
          >
            Arquivar selecionados
          </Button>
          <Button
            type="button"
            variant="outline"
            disabled={!canBulk || selectedIds.length === 0 || isArchiving}
            onClick={() => handleBulk("unarchive")}
          >
            Reabrir selecionados
          </Button>
        </div>
        <div className="flex items-center gap-2 text-sm">
          <Button
            type="button"
            variant="ghost"
            disabled={page <= 1}
            onClick={() => updatePage(page - 1)}
          >
            Anterior
          </Button>
          <span>
            Página {page} de {Math.max(totalPages, 1)}
          </span>
          <Button
            type="button"
            variant="ghost"
            disabled={page >= totalPages}
            onClick={() => updatePage(page + 1)}
          >
            Próxima
          </Button>
        </div>
      </div>
    </div>
  );
}
