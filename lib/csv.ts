import type { LeadStatus } from "@/types/prisma";

import type { LeadWithOwner } from "@/lib/lead-service";

const HEADERS = [
  "ID",
  "Empresa",
  "CNPJ",
  "Contato",
  "E-mail",
  "Telefone",
  "Assunto",
  "Mensagem",
  "Origem",
  "UTM",
  "Status",
  "Responsável",
  "Criado em",
  "Atualizado em",
];

function mapStatus(status: LeadStatus) {
  switch (status) {
    case "LEAD":
      return "Lead";
    case "PROPOSTA":
      return "Proposta";
    case "CONTRATO":
      return "Contrato";
    case "CLIENTE":
      return "Cliente";
    case "ARQUIVADO":
      return "Arquivado";
    default:
      return status;
  }
}

function escapeCsv(value: unknown) {
  if (value === null || value === undefined) {
    return "";
  }
  const str = String(value).replace(/\r?\n|\r/g, " ");
  if (str.includes(",") || str.includes('"')) {
    return `"${str.replace(/"/g, '""')}"`;
  }
  return str;
}

export function createLeadCsvStream(leads: LeadWithOwner[]) {
  const encoder = new TextEncoder();
  let index = 0;

  return new ReadableStream<Uint8Array>({
    start(controller) {
      controller.enqueue(encoder.encode(`${HEADERS.join(",")}\n`));
    },
    pull(controller) {
      if (index >= leads.length) {
        controller.close();
        return;
      }
      const lead = leads[index++];
      const row = [
        lead.id,
        lead.companyName ?? "",
        lead.cnpj ?? "",
        lead.contactName,
        lead.email,
        lead.phone ?? "",
        lead.subject ?? "",
        lead.message ?? "",
        lead.source ?? "",
        lead.utm ?? "",
        mapStatus(lead.status),
        lead.owner?.name ?? "",
        lead.createdAt.toISOString(),
        lead.updatedAt.toISOString(),
      ];

      controller.enqueue(encoder.encode(`${row.map(escapeCsv).join(",")}\n`));
    },
  });
}
