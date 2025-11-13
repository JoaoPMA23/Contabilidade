import { redirect } from "next/navigation";

import { ChangePasswordForm } from "@/components/admin/ChangePasswordForm";
import { auth } from "@/lib/auth";

export default async function AccountPage() {
  const session = await auth();

  if (!session?.user) {
    redirect("/login");
  }

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-2xl font-bold text-brand-primary">Minha conta</h1>
        <p className="text-sm text-slate-500">
          Atualize sua senha para manter o acesso seguro.
        </p>
      </div>
      <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
        <div className="space-y-1">
          <h2 className="text-lg font-semibold text-slate-800">
            Alterar senha
          </h2>
          <p className="text-sm text-slate-500">
            Informe sua senha atual e defina uma nova combinação com pelo menos
            8 caracteres, letras e números.
          </p>
        </div>
        <div className="mt-6">
          <ChangePasswordForm />
        </div>
      </div>
    </div>
  );
}
