import { NextResponse } from "next/server";

import { requireSession, buildErrorResponse } from "@/lib/auth-helpers";
import { createLeadCsvStream } from "@/lib/csv";
import {
  exportLeadsForSession,
  parseLeadFiltersFromURL,
} from "@/lib/lead-service";

export async function GET(request: Request) {
  try {
    const session = await requireSession();
    const filters = parseLeadFiltersFromURL(new URL(request.url));

    const leads = await exportLeadsForSession(session.user, filters);
    const stream = createLeadCsvStream(leads);

    return new NextResponse(stream, {
      headers: {
        "Content-Type": "text/csv; charset=utf-8",
        "Content-Disposition": `attachment; filename="leads-${Date.now()}.csv"`,
      },
    });
  } catch (error) {
    return buildErrorResponse(error);
  }
}
