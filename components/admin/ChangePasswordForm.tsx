"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import toast from "react-hot-toast";
import { z } from "zod";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { passwordUpdateSchema } from "@/lib/zod-schemas";

const passwordFormSchema = passwordUpdateSchema
  .extend({
    confirmPassword: z.string().min(8, "Confirme a nova senha"),
  })
  .refine((data) => data.newPassword === data.confirmPassword, {
    message: "As senhas não conferem.",
    path: ["confirmPassword"],
  });

type PasswordFormValues = z.infer<typeof passwordFormSchema>;

export function ChangePasswordForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const form = useForm<PasswordFormValues>({
    resolver: zodResolver(passwordFormSchema),
    defaultValues: {
      currentPassword: "",
      newPassword: "",
      confirmPassword: "",
    },
  });

  async function onSubmit(values: PasswordFormValues) {
    setIsSubmitting(true);
    try {
      const response = await fetch("/api/users/password", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          currentPassword: values.currentPassword,
          newPassword: values.newPassword,
        }),
      });

      if (!response.ok) {
        const data = await response.json().catch(() => ({}));
        throw new Error(data.error ?? "Não foi possível atualizar a senha.");
      }

      toast.success("Senha atualizada com sucesso.");
      form.reset({
        currentPassword: "",
        newPassword: "",
        confirmPassword: "",
      });
    } catch (error) {
      toast.error(error instanceof Error ? error.message : "Erro inesperado.");
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
      <div className="space-y-2">
        <label className="text-xs font-semibold uppercase tracking-wide text-slate-500">
          Senha atual
        </label>
        <Input
          type="password"
          autoComplete="current-password"
          {...form.register("currentPassword")}
        />
        {form.formState.errors.currentPassword ? (
          <p className="text-xs text-red-600">
            {form.formState.errors.currentPassword.message}
          </p>
        ) : null}
      </div>
      <div className="grid gap-4 md:grid-cols-2">
        <div className="space-y-2">
          <label className="text-xs font-semibold uppercase tracking-wide text-slate-500">
            Nova senha
          </label>
          <Input
            type="password"
            autoComplete="new-password"
            {...form.register("newPassword")}
          />
          {form.formState.errors.newPassword ? (
            <p className="text-xs text-red-600">
              {form.formState.errors.newPassword.message}
            </p>
          ) : null}
        </div>
        <div className="space-y-2">
          <label className="text-xs font-semibold uppercase tracking-wide text-slate-500">
            Confirmar nova senha
          </label>
          <Input
            type="password"
            autoComplete="new-password"
            {...form.register("confirmPassword")}
          />
          {form.formState.errors.confirmPassword ? (
            <p className="text-xs text-red-600">
              {form.formState.errors.confirmPassword.message}
            </p>
          ) : null}
        </div>
      </div>
      <div className="flex justify-end">
        <Button type="submit" disabled={isSubmitting}>
          {isSubmitting ? "Salvando..." : "Atualizar senha"}
        </Button>
      </div>
    </form>
  );
}
