"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";

import { Select } from "@/components/ui/select";

export type LeadOwnerFormProps = {
  leadId: string;
  owners: { id: string; name: string }[];
  ownerId?: string | null;
  disabled?: boolean;
};

export function LeadOwnerForm({ leadId, owners, ownerId, disabled }: LeadOwnerFormProps) {
  const router = useRouter();
  const [currentOwner, setCurrentOwner] = useState(ownerId ?? "");
  const [isUpdating, setIsUpdating] = useState(false);

  async function handleChange(event: React.ChangeEvent<HTMLSelectElement>) {
    const nextOwner = event.target.value;
    setCurrentOwner(nextOwner);
    setIsUpdating(true);

    try {
      const response = await fetch(`/api/leads/${leadId}/assign`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ownerId: nextOwner || null }),
      });

      if (!response.ok) {
        const data = await response.json().catch(() => ({}));
        throw new Error(data.error ?? "Não foi possível atualizar o responsável.");
      }

      toast.success("Responsável atualizado.");
      router.refresh();
    } catch (error) {
      toast.error(error instanceof Error ? error.message : "Erro inesperado.");
      setCurrentOwner(ownerId ?? "");
    } finally {
      setIsUpdating(false);
    }
  }

  return (
    <Select
      value={currentOwner}
      onChange={handleChange}
      disabled={disabled || isUpdating}
    >
      <option value="">Sem responsável</option>
      {owners.map((owner) => (
        <option key={owner.id} value={owner.id}>
          {owner.name}
        </option>
      ))}
    </Select>
  );
}
