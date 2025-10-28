import { NextResponse } from "next/server";
import { Readable } from "node:stream";

import { requireSession, buildErrorResponse } from "@/lib/auth-helpers";
import { prisma } from "@/lib/prisma";
import { getFileStream } from "@/lib/s3";

type RouteParams = {
  params: {
    id: string;
    fileId: string;
  };
};

export async function GET(_request: Request, { params }: RouteParams) {
  try {
    const session = await requireSession();

    const file = await prisma.leadFile.findUnique({
      where: { id: params.fileId },
      include: {
        lead: {
          select: {
            id: true,
            ownerId: true,
          },
        },
      },
    });

    if (!file || file.leadId !== params.id) {
      return NextResponse.json({ error: "Arquivo não encontrado." }, { status: 404 });
    }

    if (
      session.user.role !== "ADMIN" &&
      file.lead.ownerId !== session.user.id
    ) {
      return NextResponse.json(
        { error: "Acesso negado." },
        { status: 403 }
      );
    }

    const nodeStream = await getFileStream(file.key);
    const webStream = Readable.toWeb(nodeStream) as unknown as ReadableStream;

    return new NextResponse(webStream, {
      headers: {
        "Content-Type": file.mime,
        "Content-Length": file.size.toString(),
        "Content-Disposition": `attachment; filename="${encodeURIComponent(
          file.originalName
        )}"`,
      },
    });
  } catch (error) {
    return buildErrorResponse(error);
  }
}
