import { randomUUID } from "node:crypto";
import { existsSync, mkdirSync } from "node:fs";
import { createReadStream } from "node:fs";
import { promises as fs } from "node:fs";
import { join, dirname } from "node:path";
import {
  S3Client,
  PutObjectCommand,
  GetObjectCommand,
  DeleteObjectCommand,
} from "@aws-sdk/client-s3";
import { Readable } from "node:stream";

const STORAGE_DRIVER = process.env.UPLOAD_DRIVER ?? "local";
const LOCAL_DIR = process.env.UPLOAD_LOCAL_DIR ?? "./storage/uploads";

const bucket = process.env.S3_BUCKET ?? "";

const s3Client =
  STORAGE_DRIVER === "s3"
    ? new S3Client({
        region: process.env.AWS_REGION ?? "us-east-1",
        endpoint: process.env.S3_ENDPOINT || undefined,
        forcePathStyle: process.env.S3_FORCE_PATH_STYLE === "true",
        credentials:
          process.env.AWS_ACCESS_KEY_ID && process.env.AWS_SECRET_ACCESS_KEY
            ? {
                accessKeyId: process.env.AWS_ACCESS_KEY_ID,
                secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
              }
            : undefined,
      })
    : null;

export type StoredFile = {
  key: string;
  url?: string;
};

export function generateFileKey(originalName: string) {
  const safeName = originalName.toLowerCase().replace(/\s+/g, "-");
  return `${new Date().toISOString().split("T")[0]}/${randomUUID()}-${safeName}`;
}

export async function storeFile(
  key: string,
  buffer: Buffer,
  contentType: string
): Promise<StoredFile> {
  if (STORAGE_DRIVER === "s3" && s3Client) {
    await s3Client.send(
      new PutObjectCommand({
        Bucket: bucket,
        Key: key,
        Body: buffer,
        ContentType: contentType,
      })
    );
    return {
      key,
      url: undefined,
    };
  }

  const absolutePath = join(process.cwd(), LOCAL_DIR, key);
  const dir = dirname(absolutePath);
  if (!existsSync(dir)) {
    mkdirSync(dir, { recursive: true });
  }
  await fs.writeFile(absolutePath, buffer);
  return {
    key,
    url: undefined,
  };
}

export async function getFileStream(key: string): Promise<Readable> {
  if (STORAGE_DRIVER === "s3" && s3Client) {
    const response = await s3Client.send(
      new GetObjectCommand({
        Bucket: bucket,
        Key: key,
      })
    );

    const body = response.Body;

    if (!body) {
      throw new Error("Arquivo não encontrado no bucket S3.");
    }

    if (body instanceof Readable) {
      return body;
    }

    // @ts-expect-error - Response body pode ser ReadableStream em runtimes edge.
    return Readable.fromWeb(body);
  }

  const absolutePath = join(process.cwd(), LOCAL_DIR, key);
  return createReadStream(absolutePath);
}

export async function deleteFile(key: string): Promise<void> {
  if (STORAGE_DRIVER === "s3" && s3Client) {
    await s3Client.send(
      new DeleteObjectCommand({
        Bucket: bucket,
        Key: key,
      })
    );
    return;
  }

  const absolutePath = join(process.cwd(), LOCAL_DIR, key);

  try {
    await fs.unlink(absolutePath);
  } catch (error) {
    // Ignora caso já não exista
    if ((error as NodeJS.ErrnoException).code !== "ENOENT") {
      throw error;
    }
  }
}

export function isS3() {
  return STORAGE_DRIVER === "s3";
}
