"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import toast from "react-hot-toast";
import { LeadStatus } from "@prisma/client";
import type { z } from "zod";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { leadCreateSchema } from "@/lib/zod-schemas";

const STATUS_OPTIONS: { value: LeadStatus; label: string }[] = [
  { value: "LEAD", label: "Lead" },
  { value: "PROPOSTA", label: "Proposta" },
  { value: "CONTRATO", label: "Contrato" },
  { value: "CLIENTE", label: "Cliente" },
  { value: "ARQUIVADO", label: "Arquivado" },
];

export type LeadFormValues = z.infer<typeof leadCreateSchema>;

export type LeadFormProps = {
  owners: { id: string; name: string }[];
  currentRole: "ADMIN" | "AGENT";
};

export function LeadForm({ owners, currentRole }: LeadFormProps) {
  const router = useRouter();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const form = useForm<LeadFormValues>({
    resolver: zodResolver(leadCreateSchema),
    defaultValues: {
      companyName: "",
      contactName: "",
      email: "",
      phone: "",
      cnpj: "",
      subject: "",
      message: "",
      source: "",
      utm: "",
      status: "LEAD",
      ownerId: undefined,
    },
  });

  useEffect(() => {
    form.register("ownerId");
  }, [form]);

  async function onSubmit(values: LeadFormValues) {
    setIsSubmitting(true);
    try {
      const payload = {
        ...values,
        ownerId:
          currentRole === "ADMIN"
            ? values.ownerId || undefined
            : undefined,
      };

      const response = await fetch("/api/leads", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (!response.ok) {
        const data = await response.json().catch(() => ({}));
        throw new Error(data.error ?? "Não foi possível criar o lead.");
      }

      const lead = await response.json();
      toast.success("Lead criado com sucesso.");
      router.push(`/admin/leads/${lead.id}`);
    } catch (error) {
      toast.error(error instanceof Error ? error.message : "Erro inesperado.");
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
      <div className="grid gap-4 md:grid-cols-2">
        <div className="space-y-2">
          <label className="text-xs font-semibold uppercase tracking-wide text-slate-500">
            Empresa
          </label>
          <Input placeholder="Nome da empresa" {...form.register("companyName")} />
        </div>
        <div className="space-y-2">
          <label className="text-xs font-semibold uppercase tracking-wide text-slate-500">
            CNPJ
          </label>
          <Input placeholder="00.000.000/0000-00" {...form.register("cnpj")} />
        </div>
      </div>
      <div className="grid gap-4 md:grid-cols-2">
        <div className="space-y-2">
          <label className="text-xs font-semibold uppercase tracking-wide text-slate-500">
            Contato *
          </label>
          <Input placeholder="Nome do contato" {...form.register("contactName")} />
          {form.formState.errors.contactName ? (
            <p className="text-xs text-red-600">
              {form.formState.errors.contactName.message}
            </p>
          ) : null}
        </div>
        <div className="space-y-2">
          <label className="text-xs font-semibold uppercase tracking-wide text-slate-500">
            E-mail *
          </label>
          <Input
            type="email"
            placeholder="contato@empresa.com"
            {...form.register("email")}
          />
          {form.formState.errors.email ? (
            <p className="text-xs text-red-600">
              {form.formState.errors.email.message}
            </p>
          ) : null}
        </div>
      </div>
      <div className="grid gap-4 md:grid-cols-2">
        <div className="space-y-2">
          <label className="text-xs font-semibold uppercase tracking-wide text-slate-500">
            Telefone
          </label>
          <Input placeholder="(11) 99999-9999" {...form.register("phone")} />
        </div>
        <div className="space-y-2">
          <label className="text-xs font-semibold uppercase tracking-wide text-slate-500">
            Status
          </label>
          <Select
            value={form.watch("status")}
            onChange={(event) => form.setValue("status", event.target.value as LeadStatus)}
          >
            {STATUS_OPTIONS.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </Select>
        </div>
      </div>
      {currentRole === "ADMIN" ? (
        <div className="space-y-2">
          <label className="text-xs font-semibold uppercase tracking-wide text-slate-500">
            Responsável
          </label>
          <Select
            value={form.watch("ownerId") ?? ""}
            onChange={(event) =>
              form.setValue(
                "ownerId",
                event.target.value ? event.target.value : undefined,
                { shouldValidate: true }
              )
            }
          >
            <option value="">Sem responsável</option>
            {owners.map((owner) => (
              <option key={owner.id} value={owner.id}>
                {owner.name}
              </option>
            ))}
          </Select>
        </div>
      ) : null}
      <div className="grid gap-4 md:grid-cols-2">
        <div className="space-y-2">
          <label className="text-xs font-semibold uppercase tracking-wide text-slate-500">
            Origem
          </label>
          <Input placeholder="site, indicação, evento..." {...form.register("source")} />
        </div>
        <div className="space-y-2">
          <label className="text-xs font-semibold uppercase tracking-wide text-slate-500">
            UTM
          </label>
          <Input placeholder="utm_campaign" {...form.register("utm")} />
        </div>
      </div>
      <div className="space-y-2">
        <label className="text-xs font-semibold uppercase tracking-wide text-slate-500">
          Assunto
        </label>
        <Input placeholder="Resumo do interesse" {...form.register("subject")} />
      </div>
      <div className="space-y-2">
        <label className="text-xs font-semibold uppercase tracking-wide text-slate-500">
          Mensagem
        </label>
        <Textarea
          rows={5}
          placeholder="Detalhes fornecidos pelo lead"
          {...form.register("message")}
        />
      </div>
      <div className="flex justify-end gap-3">
        <Button type="submit" disabled={isSubmitting}>
          {isSubmitting ? "Salvando..." : "Criar lead"}
        </Button>
      </div>
    </form>
  );
}
