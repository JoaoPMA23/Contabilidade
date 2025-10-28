export const RoleEnum = {
  ADMIN: "ADMIN",
  AGENT: "AGENT",
} as const;
export type Role = (typeof RoleEnum)[keyof typeof RoleEnum];

export const LeadStatusEnum = {
  LEAD: "LEAD",
  PROPOSTA: "PROPOSTA",
  CONTRATO: "CONTRATO",
  CLIENTE: "CLIENTE",
  ARQUIVADO: "ARQUIVADO",
} as const;
export type LeadStatus = (typeof LeadStatusEnum)[keyof typeof LeadStatusEnum];

export const NoteTypeEnum = {
  NOTE: "NOTE",
  CALL: "CALL",
  EMAIL: "EMAIL",
  WHATSAPP: "WHATSAPP",
  MEETING: "MEETING",
} as const;
export type NoteType = (typeof NoteTypeEnum)[keyof typeof NoteTypeEnum];
