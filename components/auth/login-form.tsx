"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { signIn } from "next-auth/react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";

type LoginFormProps = {
  callbackUrl?: string;
  className?: string;
};

export function LoginForm({ callbackUrl, className }: LoginFormProps) {
  const router = useRouter();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const username = formData.get("username");
    const password = formData.get("password");
    const targetUrl = callbackUrl ?? "/admin/leads";

    if (typeof username !== "string" || typeof password !== "string") {
      setError("Dados invalidos.");
      return;
    }

    setIsSubmitting(true);
    setError(null);

    try {
      const result = await signIn("credentials", {
        redirect: false,
        username,
        password,
        callbackUrl: targetUrl,
      });

      if (result?.error) {
        if (result.error === "CredentialsSignin") {
          setError("Credenciais invalidas.");
        } else {
          setError("Nao foi possivel autenticar.");
        }
        return;
      }

      router.push(result?.url ?? targetUrl);
      router.refresh();
    } catch (submitError) {
      setError(
        submitError instanceof Error
          ? submitError.message
          : "Erro inesperado."
      );
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <form onSubmit={handleSubmit} className={cn("space-y-5", className)}>
      <input type="hidden" name="callbackUrl" value={callbackUrl} />
      <div className="space-y-2">
        <label htmlFor="username" className="text-sm font-medium text-slate-700">
          Usuario
        </label>
        <Input
          id="username"
          name="username"
          placeholder="seu.usuario"
          autoComplete="username"
          required
        />
      </div>
      <div className="space-y-2">
        <label htmlFor="password" className="text-sm font-medium text-slate-700">
          Senha
        </label>
        <Input
          id="password"
          name="password"
          type="password"
          placeholder="********"
          autoComplete="current-password"
          required
        />
      </div>
      {error ? (
        <p className="text-sm font-medium text-red-600" role="alert">
          {error}
        </p>
      ) : null}
      <Button type="submit" className="w-full" disabled={isSubmitting}>
        {isSubmitting ? "Entrando..." : "Entrar"}
      </Button>
      <p className="text-center text-xs text-slate-500">
        Precisa de acesso? Contate um administrador.
      </p>
    </form>
  );
}
