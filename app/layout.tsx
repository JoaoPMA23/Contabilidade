import type { Metadata } from "next";
import "./globals.css";

const siteName = "Spolaor Contabilidade";
const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ??
  "https://www.spolaorcontabilidade.com.br";

const metadataBase = (() => {
  try {
    return new URL(siteUrl);
  } catch {
    return undefined;
  }
})();

const title =
  "Spolaor Contabilidade | Consultoria contábil estratégica para empresas modernas";
const description =
  "Spolaor Contabilidade: abertura de empresas, migração assistida e gestão fiscal, contábil e trabalhista completa.";

export const metadata: Metadata = {
  metadataBase,
  title: {
    default: title,
    template: `%s | ${siteName}`,
  },
  description,
  keywords: [
    "contabilidade",
    "contador",
    "abertura de empresa",
    "trocar de contador",
    "gestão financeira",
    "BPO financeiro",
  ],
  openGraph: {
    title,
    description,
    url: siteUrl,
    siteName,
    locale: "pt_BR",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: siteUrl,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className="antialiased">{children}</body>
    </html>
  );
}
