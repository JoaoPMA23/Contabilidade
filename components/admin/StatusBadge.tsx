import { LeadStatus } from "@prisma/client";

import { Badge } from "@/components/ui/badge";

const STATUS_LABEL: Record<LeadStatus, string> = {
  LEAD: "Lead",
  PROPOSTA: "Proposta",
  CONTRATO: "Contrato",
  CLIENTE: "Cliente",
  ARQUIVADO: "Arquivado",
};

const STATUS_VARIANT: Record<LeadStatus, "lead" | "proposta" | "contrato" | "cliente" | "arquivado"> = {
  LEAD: "lead",
  PROPOSTA: "proposta",
  CONTRATO: "contrato",
  CLIENTE: "cliente",
  ARQUIVADO: "arquivado",
};

type StatusBadgeProps = {
  status: LeadStatus;
};

export function StatusBadge({ status }: StatusBadgeProps) {
  return (
    <Badge variant={STATUS_VARIANT[status]} aria-label={`Status ${STATUS_LABEL[status]}`}>
      {STATUS_LABEL[status]}
    </Badge>
  );
}
