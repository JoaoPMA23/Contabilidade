"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { format } from "date-fns";
import toast from "react-hot-toast";

const ALLOWED_TYPES = ["application/pdf", "image/png", "image/jpeg"];

function formatSize(size: number) {
  if (size > 1024 * 1024) {
    return `${(size / (1024 * 1024)).toFixed(1)} MB`;
  }
  if (size > 1024) {
    return `${(size / 1024).toFixed(1)} KB`;
  }
  return `${size} B`;
}

type LeadFileEntry = {
  id: string;
  originalName: string;
  mime: string;
  size: number;
  createdAt: string;
  user: { id: string; name: string | null };
};

export type LeadFilesProps = {
  leadId: string;
  files: LeadFileEntry[];
  canUpload: boolean;
};

export function LeadFiles({ leadId, files, canUpload }: LeadFilesProps) {
  const [isUploading, setIsUploading] = useState(false);
  const router = useRouter();

  async function handleUpload(event: React.ChangeEvent<HTMLInputElement>) {
    const file = event.target.files?.[0];
    if (!file) return;

    if (!ALLOWED_TYPES.includes(file.type)) {
      toast.error("Formato não suportado. Use PDF ou imagem.");
      return;
    }

    if (file.size > 10 * 1024 * 1024) {
      toast.error("Arquivo maior que 10MB.");
      return;
    }

    const formData = new FormData();
    formData.append("file", file);

    setIsUploading(true);
    try {
      const response = await fetch(`/api/leads/${leadId}/files`, {
        method: "POST",
        body: formData,
      });

      if (!response.ok) {
        const data = await response.json().catch(() => ({}));
        throw new Error(data.error ?? "Não foi possível enviar o arquivo.");
      }

      toast.success("Arquivo enviado.");
      router.refresh();
    } catch (error) {
      toast.error(error instanceof Error ? error.message : "Erro inesperado.");
    } finally {
      setIsUploading(false);
      event.target.value = "";
    }
  }

  return (
    <div className="space-y-4">
      {canUpload ? (
        <div className="rounded-2xl border border-dashed border-slate-300 bg-slate-50 p-4 text-sm text-slate-600">
          <p className="font-semibold">Enviar arquivo</p>
          <p className="text-xs text-slate-500">
            Formatos permitidos: PDF, PNG, JPG. Máximo 10MB.
          </p>
          <div className="mt-3">
            <input
              type="file"
              accept=".pdf,.png,.jpg,.jpeg"
              onChange={handleUpload}
              disabled={isUploading}
            />
          </div>
        </div>
      ) : null}
      <div className="space-y-3">
        {files.length === 0 ? (
          <p className="text-sm text-slate-500">Nenhum arquivo enviado.</p>
        ) : (
          files.map((file) => (
            <div
              key={file.id}
              className="flex flex-wrap items-center justify-between gap-3 rounded-2xl border border-slate-200 bg-white p-4 shadow-sm"
            >
              <div>
                <p className="text-sm font-semibold text-slate-700">
                  {file.originalName}
                </p>
                <p className="text-xs text-slate-400">
                  {formatSize(file.size)} • {format(new Date(file.createdAt), "dd/MM/yyyy HH:mm")}
                </p>
                <p className="text-xs text-slate-400">
                  Enviado por {file.user?.name ?? "Equipe"}
                </p>
              </div>
              <a
                href={`/api/leads/${leadId}/files/${file.id}`}
                className="text-sm font-semibold text-brand-primary underline-offset-4 hover:underline"
              >
                Download
              </a>
            </div>
          ))
        )}
      </div>
    </div>
  );
}
