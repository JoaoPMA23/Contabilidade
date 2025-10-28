"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { format } from "date-fns";
import toast from "react-hot-toast";
import type { NoteType } from "@/types/prisma";
import { z } from "zod";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";

const NOTE_OPTIONS: { value: NoteType; label: string }[] = [
  { value: "NOTE", label: "Nota" },
  { value: "CALL", label: "Ligação" },
  { value: "EMAIL", label: "E-mail" },
  { value: "WHATSAPP", label: "WhatsApp" },
  { value: "MEETING", label: "Reunião" },
];

const noteFormSchema = z.object({
  type: z.enum(["NOTE", "CALL", "EMAIL", "WHATSAPP", "MEETING"] as const),
  content: z.string().min(1, "Descreva a atividade."),
  nextActionAt: z.string().optional().nullable(),
});

type NoteFormValues = z.infer<typeof noteFormSchema>;

type LeadNoteEntry = {
  id: string;
  type: NoteType;
  content: string;
  nextActionAt: string | null;
  createdAt: string;
  user: { id: string; name: string | null };
};

export type LeadNotesProps = {
  leadId: string;
  notes: LeadNoteEntry[];
  canAdd: boolean;
};

export function LeadNotes({ leadId, notes, canAdd }: LeadNotesProps) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const router = useRouter();

  const form = useForm<NoteFormValues>({
    resolver: zodResolver(noteFormSchema),
    defaultValues: {
      type: "NOTE",
      content: "",
      nextActionAt: null,
    },
  });

  async function onSubmit(values: NoteFormValues) {
    setIsSubmitting(true);
    try {
      const payload = {
        type: values.type,
        content: values.content,
        nextActionAt: values.nextActionAt ? new Date(values.nextActionAt) : undefined,
      };

      const response = await fetch(`/api/leads/${leadId}/notes`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (!response.ok) {
        const data = await response.json().catch(() => ({}));
        throw new Error(data.error ?? "Não foi possível registrar a nota.");
      }

      toast.success("Atividade registrada.");
      form.reset({ type: "NOTE", content: "", nextActionAt: null });
      router.refresh();
    } catch (error) {
      toast.error(error instanceof Error ? error.message : "Erro inesperado.");
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <div className="space-y-6">
      {canAdd ? (
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="space-y-3 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm"
        >
          <div className="grid gap-3 md:grid-cols-2">
            <div className="space-y-1">
              <label className="text-xs font-semibold uppercase tracking-wide text-slate-500">
                Tipo
              </label>
              <Select
                value={form.watch("type")}
                onChange={(event) => form.setValue("type", event.target.value as NoteType)}
              >
                {NOTE_OPTIONS.map((option) => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </Select>
            </div>
            <div className="space-y-1">
              <label className="text-xs font-semibold uppercase tracking-wide text-slate-500">
                Próxima ação (opcional)
              </label>
              <Input
                type="datetime-local"
                value={form.watch("nextActionAt") ?? ""}
                onChange={(event) => form.setValue("nextActionAt", event.target.value || null)}
              />
            </div>
          </div>
          <div className="space-y-1">
            <label className="text-xs font-semibold uppercase tracking-wide text-slate-500">
              Conteúdo
            </label>
            <Textarea
              rows={4}
              placeholder="Descreva o que aconteceu..."
              {...form.register("content")}
            />
            {form.formState.errors.content ? (
              <p className="text-xs text-red-600">
                {form.formState.errors.content.message}
              </p>
            ) : null}
          </div>
          <div className="flex justify-end">
            <Button type="submit" disabled={isSubmitting}>
              {isSubmitting ? "Registrando..." : "Registrar atividade"}
            </Button>
          </div>
        </form>
      ) : null}
      <div className="space-y-4">
        {notes.length === 0 ? (
          <p className="text-sm text-slate-500">
            Nenhuma atividade registrada até o momento.
          </p>
        ) : (
          notes.map((note) => (
            <div
              key={note.id}
              className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm"
            >
              <div className="flex flex-wrap items-center justify-between gap-2">
                <div className="flex items-center gap-2 text-sm font-semibold text-slate-700">
                  <span>{NOTE_OPTIONS.find((item) => item.value === note.type)?.label ?? note.type}</span>
                  <span className="text-xs text-slate-400">
                    {format(new Date(note.createdAt), "dd/MM/yyyy HH:mm")}
                  </span>
                </div>
                <span className="text-xs uppercase tracking-wide text-slate-400">
                  {note.user?.name ?? "Equipe"}
                </span>
              </div>
              <p className="mt-3 whitespace-pre-wrap text-sm text-slate-600">
                {note.content}
              </p>
              {note.nextActionAt ? (
                <p className="mt-2 text-xs font-medium text-brand-primary">
                  Próxima ação: {format(new Date(note.nextActionAt), "dd/MM/yyyy HH:mm")}
                </p>
              ) : null}
            </div>
          ))
        )}
      </div>
    </div>
  );
}
