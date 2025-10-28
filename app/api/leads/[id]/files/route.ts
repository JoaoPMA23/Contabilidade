import { Buffer } from "node:buffer";
import { NextResponse } from "next/server";

import { requireSession, buildErrorResponse } from "@/lib/auth-helpers";
import { prisma } from "@/lib/prisma";
import { generateFileKey, storeFile } from "@/lib/s3";

const ALLOWED_MIMES = ["application/pdf", "image/png", "image/jpeg"];

type RouteParams = {
  params: {
    id: string;
  };
};

export async function POST(request: Request, { params }: RouteParams) {
  try {
    const session = await requireSession();

    const lead = await prisma.lead.findUnique({
      where: { id: params.id },
      select: { id: true, ownerId: true },
    });

    if (!lead) {
      return NextResponse.json({ error: "Lead não encontrado." }, { status: 404 });
    }

    if (session.user.role !== "ADMIN" && lead.ownerId !== session.user.id) {
      return NextResponse.json({ error: "Acesso negado." }, { status: 403 });
    }

    const formData = await request.formData();
    const file = formData.get("file");

    if (!(file instanceof File)) {
      return NextResponse.json(
        { error: "Arquivo obrigatório." },
        { status: 400 }
      );
    }

    if (!ALLOWED_MIMES.includes(file.type)) {
      return NextResponse.json(
        { error: "Formato de arquivo não suportado." },
        { status: 400 }
      );
    }

    if (file.size > 10 * 1024 * 1024) {
      return NextResponse.json(
        { error: "Arquivo excede o limite de 10MB." },
        { status: 400 }
      );
    }

    const arrayBuffer = await file.arrayBuffer();
    const buffer = Buffer.from(arrayBuffer);
    const key = generateFileKey(file.name);

    await storeFile(key, buffer, file.type);

    const created = await prisma.leadFile.create({
      data: {
        leadId: lead.id,
        userId: session.user.id,
        key,
        originalName: file.name,
        mime: file.type,
        size: file.size,
      },
      include: {
        user: {
          select: {
            id: true,
            name: true,
          },
        },
      },
    });

    return NextResponse.json(created, { status: 201 });
  } catch (error) {
    return buildErrorResponse(error);
  }
}
