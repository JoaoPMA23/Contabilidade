import { redirect } from "next/navigation";

import { UserForm } from "@/components/admin/UserForm";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { auth } from "@/lib/auth";
import { prisma } from "@/lib/prisma";

export default async function UsersPage() {
  const session = await auth();

  if (!session?.user) {
    redirect("/admin/leads");
  }

  const user = session.user;

  if (user.role !== "ADMIN") {
    redirect("/admin/leads");
  }

  const users = await prisma.user.findMany({
    orderBy: { createdAt: "desc" },
    select: {
      id: true,
      name: true,
      email: true,
      username: true,
      role: true,
      createdAt: true,
    },
  });

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-2xl font-bold text-brand-primary">Usuários</h1>
        <p className="text-sm text-slate-500">
          Gerencie as contas com acesso ao painel administrativo.
        </p>
      </div>
      <Card>
        <CardHeader>
          <h2 className="text-lg font-semibold text-slate-800">Adicionar usuário</h2>
          <p className="text-sm text-slate-500">
            Defina um usuário e senha temporária. O usuário pode alterá-la após o primeiro acesso.
          </p>
        </CardHeader>
        <CardContent>
          <UserForm />
        </CardContent>
      </Card>
      <Card>
        <CardHeader>
          <h2 className="text-lg font-semibold text-slate-800">Usuários ativos</h2>
        </CardHeader>
        <CardContent>
          <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
            <table className="min-w-full divide-y divide-slate-200 text-sm">
              <thead className="bg-slate-50">
                <tr>
                  <th className="px-4 py-3 text-left text-xs font-semibold uppercase tracking-wide text-slate-500">Nome</th>
                  <th className="px-4 py-3 text-left text-xs font-semibold uppercase tracking-wide text-slate-500">E-mail</th>
                  <th className="px-4 py-3 text-left text-xs font-semibold uppercase tracking-wide text-slate-500">Usuário</th>
                  <th className="px-4 py-3 text-left text-xs font-semibold uppercase tracking-wide text-slate-500">Perfil</th>
                  <th className="px-4 py-3 text-left text-xs font-semibold uppercase tracking-wide text-slate-500">Criado em</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {users.map((user: (typeof users)[number]) => (
                  <tr key={user.id}>
                    <td className="px-4 py-3 text-slate-700">{user.name}</td>
                    <td className="px-4 py-3 text-slate-500">{user.email}</td>
                    <td className="px-4 py-3 text-slate-500">{user.username}</td>
                    <td className="px-4 py-3 text-slate-500">{user.role}</td>
                    <td className="px-4 py-3 text-slate-500">
                      {user.createdAt.toLocaleDateString("pt-BR")}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
