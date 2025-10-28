import { z } from "zod";

export const loginSchema = z.object({
  username: z.string().min(1, "Informe o usuário"),
  password: z.string().min(1, "Informe a senha"),
});

export const leadFiltersSchema = z.object({
  page: z.coerce.number().int().min(1).default(1),
  perPage: z.coerce.number().int().min(1).max(100).default(20),
  status: z
    .array(z.enum(["LEAD", "PROPOSTA", "CONTRATO", "CLIENTE", "ARQUIVADO"]))
    .optional(),
  ownerId: z.string().cuid().optional(),
  search: z.string().optional(),
  startDate: z.coerce.date().optional(),
  endDate: z.coerce.date().optional(),
  includeArchived: z.coerce.boolean().optional(),
});

export const leadCreateSchema = z.object({
  companyName: z.string().optional(),
  cnpj: z.string().optional(),
  contactName: z.string().min(1, "Informe o nome do contato"),
  email: z.string().email("E-mail inválido"),
  phone: z.string().optional(),
  subject: z.string().optional(),
  message: z.string().optional(),
  source: z.string().optional(),
  utm: z.string().optional(),
  status: z
    .enum(["LEAD", "PROPOSTA", "CONTRATO", "CLIENTE", "ARQUIVADO"])
    .default("LEAD"),
  ownerId: z.string().cuid().optional(),
});

export const leadUpdateSchema = leadCreateSchema.partial();

export const leadStatusSchema = z.object({
  status: z.enum(["LEAD", "PROPOSTA", "CONTRATO", "CLIENTE", "ARQUIVADO"]),
});

export const leadAssignSchema = z.object({
  ownerId: z.string().cuid().nullable(),
});

export const bulkArchiveSchema = z.object({
  ids: z.array(z.string().cuid()).min(1),
});

export const noteCreateSchema = z.object({
  type: z.enum(["NOTE", "CALL", "EMAIL", "WHATSAPP", "MEETING"]).default("NOTE"),
  content: z.string().min(1, "Descreva o conteúdo"),
  nextActionAt: z.coerce.date().optional().nullable(),
});

export const fileUploadSchema = z.object({
  leadId: z.string().cuid(),
  userId: z.string().cuid(),
  originalName: z.string(),
  mime: z.string(),
  size: z.number().int().nonnegative().max(10 * 1024 * 1024),
  buffer: z.instanceof(Uint8Array),
});

export const userCreateSchema = z.object({
  name: z.string().min(1),
  email: z.string().email(),
  username: z.string().min(3),
  password: z.string().min(6),
  role: z.enum(["ADMIN", "AGENT"]).default("AGENT"),
});
