"use client";

import { useFormState, useFormStatus } from "react-dom";

import { loginAction, type LoginActionState } from "@/app/(public)/login/actions";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";

const initialState: LoginActionState = {};

type LoginFormProps = {
  callbackUrl?: string;
  className?: string;
};

function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <Button
      type="submit"
      className="w-full"
      disabled={pending}
    >
      {pending ? "Entrando..." : "Entrar"}
    </Button>
  );
}

export function LoginForm({ callbackUrl, className }: LoginFormProps) {
  const [state, formAction] = useFormState(loginAction, initialState);

  return (
    <form
      action={formAction}
      className={cn("space-y-5", className)}
    >
      <input type="hidden" name="callbackUrl" value={callbackUrl} />
      <div className="space-y-2">
        <label
          htmlFor="username"
          className="text-sm font-medium text-slate-700"
        >
          Usuário
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
        <label
          htmlFor="password"
          className="text-sm font-medium text-slate-700"
        >
          Senha
        </label>
        <Input
          id="password"
          name="password"
          type="password"
          placeholder="••••••••"
          autoComplete="current-password"
          required
        />
      </div>
      {state?.error ? (
        <p className="text-sm font-medium text-red-600" role="alert">
          {state.error}
        </p>
      ) : null}
      <SubmitButton />
      <p className="text-center text-xs text-slate-500">
        Precisa de acesso? Contate um administrador.
      </p>
    </form>
  );
}
