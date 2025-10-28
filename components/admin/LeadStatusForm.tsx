"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";
import { LeadStatus } from "@prisma/client";

import { Select } from "@/components/ui/select";

const STATUS_OPTIONS: { value: LeadStatus; label: string }[] = [
  { value: "LEAD", label: "Lead" },
  { value: "PROPOSTA", label: "Proposta" },
  { value: "CONTRATO", label: "Contrato" },
  { value: "CLIENTE", label: "Cliente" },
  { value: "ARQUIVADO", label: "Arquivado" },
];

export type LeadStatusFormProps = {
  leadId: string;
  status: LeadStatus;
  disabled?: boolean;
};

export function LeadStatusForm({ leadId, status, disabled }: LeadStatusFormProps) {
  const router = useRouter();
  const [isUpdating, setIsUpdating] = useState(false);
  const [currentStatus, setCurrentStatus] = useState<LeadStatus>(status);

  async function handleChange(event: React.ChangeEvent<HTMLSelectElement>) {
    const nextStatus = event.target.value as LeadStatus;
    setCurrentStatus(nextStatus);
    setIsUpdating(true);

    try {
      const response = await fetch(`/api/leads/${leadId}/status`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ status: nextStatus }),
      });

      if (!response.ok) {
        const data = await response.json().catch(() => ({}));
        throw new Error(data.error ?? "Não foi possível atualizar o status.");
      }

      toast.success("Status atualizado.");
      router.refresh();
    } catch (error) {
      toast.error(error instanceof Error ? error.message : "Erro inesperado.");
      setCurrentStatus(status);
    } finally {
      setIsUpdating(false);
    }
  }

  return (
    <Select
      value={currentStatus}
      onChange={handleChange}
      disabled={disabled || isUpdating}
    >
      {STATUS_OPTIONS.map((option) => (
        <option key={option.value} value={option.value}>
          {option.label}
        </option>
      ))}
    </Select>
  );
}
