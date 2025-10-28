"use server";

import { AuthError } from "next-auth";
import { redirect } from "next/navigation";

import { signIn } from "@/lib/auth";
import { loginSchema } from "@/lib/zod-schemas";

export type LoginActionState = {
  error?: string;
};

export async function loginAction(
  _prevState: LoginActionState | undefined,
  formData: FormData
): Promise<LoginActionState | void> {
  const raw = Object.fromEntries(formData.entries());
  const parsed = loginSchema.safeParse(raw);

  const callbackUrl =
    typeof raw.callbackUrl === "string" && raw.callbackUrl.length > 0
      ? raw.callbackUrl
      : "/admin/leads";

  if (!parsed.success) {
    return { error: parsed.error.errors[0]?.message ?? "Dados inválidos." };
  }

  try {
    await signIn("credentials", {
      username: parsed.data.username,
      password: parsed.data.password,
      redirectTo: callbackUrl,
    });
  } catch (error) {
    if (error instanceof AuthError) {
      switch (error.type) {
        case "CredentialsSignin":
          return { error: "Credenciais inválidas." };
        case "CallbackRouteError":
          return { error: "Falha ao processar o login." };
        default:
          return { error: "Não foi possível autenticar." };
      }
    }
    throw error;
  }

  redirect(callbackUrl);
}
