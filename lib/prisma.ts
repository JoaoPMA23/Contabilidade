import path from "node:path";
import { PrismaClient } from "@prisma/client";

declare global {
  // eslint-disable-next-line no-var
  var prisma: PrismaClient | undefined;
}

function normalizeSqliteUrl(url: string): string {
  if (!url.startsWith("file:")) {
    return url;
  }

  const withoutScheme = url.slice("file:".length);
  const [rawPath, query] = withoutScheme.split("?");

  if (!rawPath.startsWith("./") && !rawPath.startsWith("../")) {
    return url;
  }

  const absolutePath = path.resolve(process.cwd(), rawPath);
  const normalizedPath = absolutePath.replace(/\\/g, "/");
  const normalizedQuery = query ? `?${query}` : "";

  return `file:${normalizedPath}${normalizedQuery}`;
}

if (typeof process.env.DATABASE_URL === "string") {
  process.env.DATABASE_URL = normalizeSqliteUrl(process.env.DATABASE_URL);
}

export const prisma =
  globalThis.prisma ??
  new PrismaClient({
    log: process.env.NODE_ENV === "development" ? ["error", "warn"] : ["error"],
  });

if (process.env.NODE_ENV !== "production") {
  globalThis.prisma = prisma;
}
