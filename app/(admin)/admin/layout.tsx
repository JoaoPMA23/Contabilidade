import Link from "next/link";
import { redirect } from "next/navigation";

import { SignOutButton } from "@/components/admin/SignOutButton";
import { auth } from "@/lib/auth";

const navigation = [
  {
    label: "Leads",
    href: "/admin/leads",
  },
  {
    label: "Novo Lead",
    href: "/admin/leads/new",
  },
];

type AdminLayoutProps = {
  children: React.ReactNode;
};

export default async function AdminLayout({ children }: AdminLayoutProps) {
  const session = await auth();

  if (!session?.user) {
    redirect("/login");
  }

  const isAdmin = session.user.role === "ADMIN";

  return (
    <div className="flex min-h-screen bg-slate-50">
      <aside className="hidden w-64 flex-col border-r border-slate-200 bg-white/95 px-6 py-10 lg:flex">
        <Link
          href="/admin/leads"
          className="text-sm font-semibold uppercase tracking-[0.35em] text-brand-primary"
        >
          Spolaor Admin
        </Link>
        <nav className="mt-10 flex flex-1 flex-col gap-2 text-sm font-medium text-slate-600">
          {navigation.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="rounded-lg px-3 py-2 transition hover:bg-brand-primary/10 hover:text-brand-primary"
            >
              {item.label}
            </Link>
          ))}
          {isAdmin ? (
            <Link
              href="/admin/users"
              className="rounded-lg px-3 py-2 transition hover:bg-brand-primary/10 hover:text-brand-primary"
            >
              Usuários
            </Link>
          ) : null}
        </nav>
        <div className="mt-auto space-y-2 text-xs text-slate-500">
          <p className="font-semibold text-slate-700">{session.user.name}</p>
          <p>{session.user.email}</p>
          <SignOutButton className="mt-3 w-full" />
        </div>
      </aside>
      <div className="flex flex-1 flex-col">
        <header className="border-b border-slate-200 bg-white/95 px-4 py-3 backdrop-blur">
          <div className="flex items-center justify-between">
            <button
              type="button"
              className="lg:hidden"
              aria-label="Menu"
              // Mobile drawer can be implemented posteriormente
              disabled
            >
              ☰
            </button>
            <div className="hidden text-sm font-semibold text-slate-500 lg:block">
              {session.user.role === "ADMIN" ? "Administrador" : "Agente"}
            </div>
            <div className="flex items-center gap-3 text-sm text-slate-600">
              <span className="hidden sm:inline-flex">
                {session.user.name}
              </span>
              <span className="text-xs uppercase tracking-wide text-brand-primary">
                {session.user.role}
              </span>
            </div>
          </div>
        </header>
        <main className="flex-1 px-4 py-6 lg:px-10 lg:py-8">{children}</main>
      </div>
    </div>
  );
}
