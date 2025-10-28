import { redirect } from "next/navigation";

import { LeadForm } from "@/components/admin/LeadForm";
import { auth } from "@/lib/auth";
import { prisma } from "@/lib/prisma";

export default async function NewLeadPage() {
  const session = await auth();

  if (!session?.user) {
    redirect("/login");
  }

  const user = session.user;

  const owners = await prisma.user.findMany({
    orderBy: { name: "asc" },
    select: { id: true, name: true },
  });

  const availableOwners =
    user.role === "ADMIN"
      ? owners
      : owners.filter(
          (owner: (typeof owners)[number]) => owner.id === user.id
        );

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-brand-primary">Novo lead</h1>
        <p className="text-sm text-slate-500">
          Cadastre manualmente um lead recebido por telefone, indicação ou evento.
        </p>
      </div>
      <LeadForm
        owners={availableOwners}
        currentRole={user.role === "ADMIN" ? "ADMIN" : "AGENT"}
      />
    </div>
  );
}
