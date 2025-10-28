import { notFound, redirect } from "next/navigation";

import { LeadFiles } from "@/components/admin/LeadFiles";
import { LeadNotes } from "@/components/admin/LeadNotes";
import { LeadOwnerForm } from "@/components/admin/LeadOwnerForm";
import { LeadStatusForm } from "@/components/admin/LeadStatusForm";
import { StatusBadge } from "@/components/admin/StatusBadge";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { auth } from "@/lib/auth";
import { prisma } from "@/lib/prisma";

const STATUS_LABELS: Record<string, string> = {
  LEAD: "Lead",
  PROPOSTA: "Proposta",
  CONTRATO: "Contrato",
  CLIENTE: "Cliente",
  ARQUIVADO: "Arquivado",
};

type LeadDetailPageProps = {
  params: { id: string };
};

export default async function LeadDetailPage({ params }: LeadDetailPageProps) {
  const session = await auth();

  if (!session?.user) {
    redirect("/login");
  }

  const user = session.user;

  const lead = await prisma.lead.findUnique({
    where: { id: params.id },
    include: {
      owner: {
        select: { id: true, name: true, email: true },
      },
      notes: {
        include: {
          user: { select: { id: true, name: true } },
        },
        orderBy: { createdAt: "desc" },
      },
      files: {
        include: {
          user: { select: { id: true, name: true } },
        },
        orderBy: { createdAt: "desc" },
      },
    },
  });

  if (!lead) {
    notFound();
  }

  if (
    user.role !== "ADMIN" &&
    lead.ownerId !== user.id &&
    lead.ownerId !== null
  ) {
    redirect("/admin/leads");
  }

  const owners = await prisma.user.findMany({
    orderBy: { name: "asc" },
    select: { id: true, name: true },
  });

  const noteEntries = lead.notes.map((note: typeof lead.notes[number]) => ({
    id: note.id,
    type: note.type,
    content: note.content,
    nextActionAt: note.nextActionAt ? note.nextActionAt.toISOString() : null,
    createdAt: note.createdAt.toISOString(),
    user: note.user,
  }));

  const fileEntries = lead.files.map((file: typeof lead.files[number]) => ({
    id: file.id,
    originalName: file.originalName,
    mime: file.mime,
    size: file.size,
    createdAt: file.createdAt.toISOString(),
    user: file.user,
  }));

  return (
    <div className="space-y-8">
      <div className="flex flex-wrap items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-brand-primary">
            {lead.companyName ?? lead.contactName}
          </h1>
          <p className="text-sm text-slate-500">
            Status atual: {STATUS_LABELS[lead.status] ?? lead.status}
          </p>
        </div>
        <StatusBadge status={lead.status} />
      </div>

      <Card>
        <CardHeader className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <div className="space-y-1">
            <h2 className="text-lg font-semibold text-slate-800">Informações principais</h2>
            <p className="text-sm text-slate-500">
              Dados cadastrais do lead e responsável atual.
            </p>
          </div>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="grid gap-4 md:grid-cols-2">
            <div className="space-y-1 text-sm text-slate-600">
              <p><span className="font-semibold">Contato:</span> {lead.contactName}</p>
              <p><span className="font-semibold">E-mail:</span> {lead.email}</p>
              {lead.phone ? (
                <p><span className="font-semibold">Telefone:</span> {lead.phone}</p>
              ) : null}
              {lead.cnpj ? (
                <p><span className="font-semibold">CNPJ:</span> {lead.cnpj}</p>
              ) : null}
            </div>
            <div className="space-y-1 text-sm text-slate-600">
              {lead.source ? (
                <p><span className="font-semibold">Origem:</span> {lead.source}</p>
              ) : null}
              {lead.utm ? (
                <p><span className="font-semibold">UTM:</span> {lead.utm}</p>
              ) : null}
              <div className="space-y-1">
                <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">
                  Status
                </p>
                <LeadStatusForm
                  leadId={lead.id}
                  status={lead.status}
                  disabled={lead.ownerId !== user.id && user.role !== "ADMIN"}
                />
              </div>
              {user.role === "ADMIN" ? (
                <div className="space-y-1">
                  <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">
                    Responsável
                  </p>
                  <LeadOwnerForm
                    leadId={lead.id}
                    owners={owners}
                    ownerId={lead.ownerId}
                  />
                </div>
              ) : null}
            </div>
          </div>
          {lead.subject ? (
            <div className="space-y-1 text-sm text-slate-600">
              <p className="font-semibold">Assunto</p>
              <p>{lead.subject}</p>
            </div>
          ) : null}
          {lead.message ? (
            <div className="space-y-1 text-sm text-slate-600">
              <p className="font-semibold">Mensagem</p>
              <p className="whitespace-pre-wrap">{lead.message}</p>
            </div>
          ) : null}
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <h2 className="text-lg font-semibold text-slate-800">Atividades</h2>
          <p className="text-sm text-slate-500">
            Registre ligações, reuniões e próximos passos.
          </p>
        </CardHeader>
        <CardContent>
          <LeadNotes
            leadId={lead.id}
            notes={noteEntries}
            canAdd={lead.ownerId === user.id || user.role === "ADMIN"}
          />
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <h2 className="text-lg font-semibold text-slate-800">Arquivos</h2>
          <p className="text-sm text-slate-500">
            Documentos enviados pelo lead ou pela equipe.
          </p>
        </CardHeader>
        <CardContent>
          <LeadFiles
            leadId={lead.id}
            files={fileEntries}
            canUpload={lead.ownerId === user.id || user.role === "ADMIN"}
          />
        </CardContent>
      </Card>
    </div>
  );
}
