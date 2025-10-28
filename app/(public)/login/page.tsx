import Link from "next/link";

import { LoginForm } from "@/components/auth/login-form";

type LoginPageProps = {
  searchParams: {
    callbackUrl?: string;
  };
};

export default function LoginPage({ searchParams }: LoginPageProps) {
  const callbackUrl = searchParams?.callbackUrl;

  return (
    <div className="min-h-screen bg-slate-50">
      <div className="mx-auto flex min-h-screen max-w-5xl flex-col items-center justify-center px-4 py-12">
        <div className="w-full max-w-md rounded-3xl border border-slate-200 bg-white p-10 shadow-xl shadow-slate-200/60">
          <div className="mb-8 space-y-2 text-center">
            <Link
              href="/"
              className="text-sm font-semibold uppercase tracking-[0.35em] text-brand-primary"
            >
              Spolaor Contabilidade
            </Link>
            <h1 className="text-2xl font-bold text-brand-primary">
              Área Administrativa
            </h1>
            <p className="text-sm text-slate-500">
              Informe suas credenciais para acessar o painel de leads.
            </p>
          </div>
          <LoginForm callbackUrl={callbackUrl} />
        </div>
        <p className="mt-8 text-xs text-slate-400">
          © {new Date().getFullYear()} Spolaor Contabilidade
        </p>
      </div>
    </div>
  );
}
