"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import toast from "react-hot-toast";
import type { z } from "zod";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select } from "@/components/ui/select";
import { userCreateSchema } from "@/lib/zod-schemas";

const ROLE_OPTIONS = [
  { value: "ADMIN", label: "Administrador" },
  { value: "AGENT", label: "Agente" },
];

type UserFormValues = z.infer<typeof userCreateSchema>;

export function UserForm() {
  const router = useRouter();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const form = useForm<UserFormValues>({
    resolver: zodResolver(userCreateSchema),
    defaultValues: {
      name: "",
      email: "",
      username: "",
      password: "",
      role: "AGENT",
    },
  });

  async function onSubmit(values: UserFormValues) {
    setIsSubmitting(true);
    try {
      const response = await fetch("/api/users", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      });

      if (!response.ok) {
        const data = await response.json().catch(() => ({}));
        throw new Error(data.error ?? "Não foi possível criar o usuário.");
      }

      toast.success("Usuário criado com sucesso.");
      form.reset({ name: "", email: "", username: "", password: "", role: "AGENT" });
      router.refresh();
    } catch (error) {
      toast.error(error instanceof Error ? error.message : "Erro inesperado.");
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
      <div className="grid gap-4 md:grid-cols-2">
        <div className="space-y-1">
          <label className="text-xs font-semibold uppercase tracking-wide text-slate-500">
            Nome
          </label>
          <Input placeholder="Nome completo" {...form.register("name")} />
          {form.formState.errors.name ? (
            <p className="text-xs text-red-600">{form.formState.errors.name.message}</p>
          ) : null}
        </div>
        <div className="space-y-1">
          <label className="text-xs font-semibold uppercase tracking-wide text-slate-500">
            E-mail
          </label>
          <Input type="email" placeholder="usuario@empresa.com" {...form.register("email")} />
          {form.formState.errors.email ? (
            <p className="text-xs text-red-600">{form.formState.errors.email.message}</p>
          ) : null}
        </div>
      </div>
      <div className="grid gap-4 md:grid-cols-2">
        <div className="space-y-1">
          <label className="text-xs font-semibold uppercase tracking-wide text-slate-500">
            Usuário
          </label>
          <Input placeholder="usuario" {...form.register("username")} />
          {form.formState.errors.username ? (
            <p className="text-xs text-red-600">{form.formState.errors.username.message}</p>
          ) : null}
        </div>
        <div className="space-y-1">
          <label className="text-xs font-semibold uppercase tracking-wide text-slate-500">
            Senha
          </label>
          <Input type="password" placeholder="Senha temporária" {...form.register("password")} />
          {form.formState.errors.password ? (
            <p className="text-xs text-red-600">{form.formState.errors.password.message}</p>
          ) : null}
        </div>
      </div>
      <div className="space-y-1">
        <label className="text-xs font-semibold uppercase tracking-wide text-slate-500">
          Perfil
        </label>
        <Select
          value={form.watch("role")}
          onChange={(event) => form.setValue("role", event.target.value as UserFormValues["role"])}
        >
          {ROLE_OPTIONS.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </Select>
      </div>
      <div className="flex justify-end">
        <Button type="submit" disabled={isSubmitting}>
          {isSubmitting ? "Salvando..." : "Criar usuário"}
        </Button>
      </div>
    </form>
  );
}
