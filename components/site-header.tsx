import Link from "next/link";

type SiteHeaderProps = {
  variant?: "home" | "internal";
};

const brandName = "Spolaor Contabilidade";

export default function SiteHeader({ variant = "internal" }: SiteHeaderProps) {
  const isHome = variant === "home";

  const navItems = [
    { label: "Abertura", href: "/abertura" },
    { label: "Trocar", href: "/trocar" },
    {
      label: "Área do cliente",
      href: isHome ? "#area-cliente" : "/#area-cliente",
    },
    {
      label: "Trabalhe",
      href: isHome ? "#trabalhe" : "/#trabalhe",
    },
  ];

  const ctaHref = isHome ? "#contato" : "/#contato";
  const logoHref = isHome ? "#hero" : "/";

  return (
    <header className="sticky top-0 z-40 border-b border-slate-200 bg-white/90 backdrop-blur">
      <div className="container flex h-[var(--header-height)] items-center justify-between gap-6">
        <Link href={logoHref} className="text-lg font-semibold text-slate-900">
          {brandName}
        </Link>
        <nav className="hidden items-center gap-8 text-sm font-medium text-slate-600 lg:flex">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="transition hover:text-brand-orange focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-orange"
            >
              {item.label}
            </Link>
          ))}
        </nav>
        <Link
          href={ctaHref}
          className="rounded-full bg-brand-orange px-6 py-2 text-sm font-semibold uppercase tracking-wide text-white shadow-lg shadow-brand-orange/30 transition hover:-translate-y-0.5 hover:shadow-xl focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-orange"
        >
          Dúvidas
        </Link>
      </div>
    </header>
  );
}
