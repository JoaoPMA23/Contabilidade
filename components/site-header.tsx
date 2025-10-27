﻿﻿ [Text.Encoding]::UTF8.GetString([Text.Encoding]::Default.GetBytes(import Link from "next/link";

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
)) mport L [Text.Encoding]::UTF8.GetString([Text.Encoding]::Default.GetBytes(import Link from "next/link";

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
)) nk from "next/l [Text.Encoding]::UTF8.GetString([Text.Encoding]::Default.GetBytes(import Link from "next/link";

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
)) nk";

type S [Text.Encoding]::UTF8.GetString([Text.Encoding]::Default.GetBytes(import Link from "next/link";

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
)) teHeaderProps = {
  var [Text.Encoding]::UTF8.GetString([Text.Encoding]::Default.GetBytes(import Link from "next/link";

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
)) ant?: "home" | " [Text.Encoding]::UTF8.GetString([Text.Encoding]::Default.GetBytes(import Link from "next/link";

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
)) nternal";
};

const brandName = "Spolaor Contab [Text.Encoding]::UTF8.GetString([Text.Encoding]::Default.GetBytes(import Link from "next/link";

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
)) l [Text.Encoding]::UTF8.GetString([Text.Encoding]::Default.GetBytes(import Link from "next/link";

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
)) dade";

export default funct [Text.Encoding]::UTF8.GetString([Text.Encoding]::Default.GetBytes(import Link from "next/link";

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
)) on S [Text.Encoding]::UTF8.GetString([Text.Encoding]::Default.GetBytes(import Link from "next/link";

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
)) teHeader({ var [Text.Encoding]::UTF8.GetString([Text.Encoding]::Default.GetBytes(import Link from "next/link";

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
)) ant = " [Text.Encoding]::UTF8.GetString([Text.Encoding]::Default.GetBytes(import Link from "next/link";

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
)) nternal" }: S [Text.Encoding]::UTF8.GetString([Text.Encoding]::Default.GetBytes(import Link from "next/link";

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
)) teHeaderProps) {
  const  [Text.Encoding]::UTF8.GetString([Text.Encoding]::Default.GetBytes(import Link from "next/link";

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
)) sHome = var [Text.Encoding]::UTF8.GetString([Text.Encoding]::Default.GetBytes(import Link from "next/link";

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
)) ant === "home";

  const nav [Text.Encoding]::UTF8.GetString([Text.Encoding]::Default.GetBytes(import Link from "next/link";

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
)) tems = [
    { label: "Abertura", href: "/abertura" },
    { label: "Trocar", href: "/trocar" },
    {
      label: " [Text.Encoding]::UTF8.GetString([Text.Encoding]::Default.GetBytes(import Link from "next/link";

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
)) rea do cl [Text.Encoding]::UTF8.GetString([Text.Encoding]::Default.GetBytes(import Link from "next/link";

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
)) ente",
      href:  [Text.Encoding]::UTF8.GetString([Text.Encoding]::Default.GetBytes(import Link from "next/link";

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
)) sHome ? "#area-cl [Text.Encoding]::UTF8.GetString([Text.Encoding]::Default.GetBytes(import Link from "next/link";

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
)) ente" : "/#area-cl [Text.Encoding]::UTF8.GetString([Text.Encoding]::Default.GetBytes(import Link from "next/link";

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
)) ente",
    },
    {
      label: "Trabalhe",
      href:  [Text.Encoding]::UTF8.GetString([Text.Encoding]::Default.GetBytes(import Link from "next/link";

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
)) sHome ? "#trabalhe" : "/#trabalhe",
    },
  ];

  const ctaHref =  [Text.Encoding]::UTF8.GetString([Text.Encoding]::Default.GetBytes(import Link from "next/link";

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
)) sHome ? "#contato" : "/#contato";
  const logoHref =  [Text.Encoding]::UTF8.GetString([Text.Encoding]::Default.GetBytes(import Link from "next/link";

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
)) sHome ? "#hero" : "/";

  return (
    <header className="st [Text.Encoding]::UTF8.GetString([Text.Encoding]::Default.GetBytes(import Link from "next/link";

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
)) cky top-0 z-40 border-b border-slate-200 bg-wh [Text.Encoding]::UTF8.GetString([Text.Encoding]::Default.GetBytes(import Link from "next/link";

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
)) te/90 backdrop-blur">
      <d [Text.Encoding]::UTF8.GetString([Text.Encoding]::Default.GetBytes(import Link from "next/link";

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
)) v className="conta [Text.Encoding]::UTF8.GetString([Text.Encoding]::Default.GetBytes(import Link from "next/link";

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
)) ner flex h-[var(--header-he [Text.Encoding]::UTF8.GetString([Text.Encoding]::Default.GetBytes(import Link from "next/link";

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
)) ght)]  [Text.Encoding]::UTF8.GetString([Text.Encoding]::Default.GetBytes(import Link from "next/link";

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
)) tems-center just [Text.Encoding]::UTF8.GetString([Text.Encoding]::Default.GetBytes(import Link from "next/link";

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
)) fy-between gap-6">
        <L [Text.Encoding]::UTF8.GetString([Text.Encoding]::Default.GetBytes(import Link from "next/link";

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
)) nk href={logoHref} className="text-lg font-sem [Text.Encoding]::UTF8.GetString([Text.Encoding]::Default.GetBytes(import Link from "next/link";

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
)) bold text-slate-900">
          {brandName}
        </L [Text.Encoding]::UTF8.GetString([Text.Encoding]::Default.GetBytes(import Link from "next/link";

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
)) nk>
        <nav className="h [Text.Encoding]::UTF8.GetString([Text.Encoding]::Default.GetBytes(import Link from "next/link";

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
)) dden  [Text.Encoding]::UTF8.GetString([Text.Encoding]::Default.GetBytes(import Link from "next/link";

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
)) tems-center gap-8 text-sm font-med [Text.Encoding]::UTF8.GetString([Text.Encoding]::Default.GetBytes(import Link from "next/link";

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
)) um text-slate-600 lg:flex">
          {nav [Text.Encoding]::UTF8.GetString([Text.Encoding]::Default.GetBytes(import Link from "next/link";

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
)) tems.map(( [Text.Encoding]::UTF8.GetString([Text.Encoding]::Default.GetBytes(import Link from "next/link";

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
)) tem) => (
            <L [Text.Encoding]::UTF8.GetString([Text.Encoding]::Default.GetBytes(import Link from "next/link";

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
)) nk
              key={ [Text.Encoding]::UTF8.GetString([Text.Encoding]::Default.GetBytes(import Link from "next/link";

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
)) tem.href}
              href={ [Text.Encoding]::UTF8.GetString([Text.Encoding]::Default.GetBytes(import Link from "next/link";

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
)) tem.href}
              className="trans [Text.Encoding]::UTF8.GetString([Text.Encoding]::Default.GetBytes(import Link from "next/link";

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
)) t [Text.Encoding]::UTF8.GetString([Text.Encoding]::Default.GetBytes(import Link from "next/link";

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
)) on hover:text-brand-orange focus-v [Text.Encoding]::UTF8.GetString([Text.Encoding]::Default.GetBytes(import Link from "next/link";

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
)) s [Text.Encoding]::UTF8.GetString([Text.Encoding]::Default.GetBytes(import Link from "next/link";

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
)) ble:outl [Text.Encoding]::UTF8.GetString([Text.Encoding]::Default.GetBytes(import Link from "next/link";

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
)) ne focus-v [Text.Encoding]::UTF8.GetString([Text.Encoding]::Default.GetBytes(import Link from "next/link";

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
)) s [Text.Encoding]::UTF8.GetString([Text.Encoding]::Default.GetBytes(import Link from "next/link";

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
)) ble:outl [Text.Encoding]::UTF8.GetString([Text.Encoding]::Default.GetBytes(import Link from "next/link";

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
)) ne-2 focus-v [Text.Encoding]::UTF8.GetString([Text.Encoding]::Default.GetBytes(import Link from "next/link";

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
)) s [Text.Encoding]::UTF8.GetString([Text.Encoding]::Default.GetBytes(import Link from "next/link";

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
)) ble:outl [Text.Encoding]::UTF8.GetString([Text.Encoding]::Default.GetBytes(import Link from "next/link";

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
)) ne-offset-2 focus-v [Text.Encoding]::UTF8.GetString([Text.Encoding]::Default.GetBytes(import Link from "next/link";

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
)) s [Text.Encoding]::UTF8.GetString([Text.Encoding]::Default.GetBytes(import Link from "next/link";

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
)) ble:outl [Text.Encoding]::UTF8.GetString([Text.Encoding]::Default.GetBytes(import Link from "next/link";

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
)) ne-brand-orange"
            >
              { [Text.Encoding]::UTF8.GetString([Text.Encoding]::Default.GetBytes(import Link from "next/link";

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
)) tem.label}
            </L [Text.Encoding]::UTF8.GetString([Text.Encoding]::Default.GetBytes(import Link from "next/link";

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
)) nk>
          ))}
        </nav>
        <L [Text.Encoding]::UTF8.GetString([Text.Encoding]::Default.GetBytes(import Link from "next/link";

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
)) nk
          href={ctaHref}
          className="rounded-full bg-brand-orange px-6 py-2 text-sm font-sem [Text.Encoding]::UTF8.GetString([Text.Encoding]::Default.GetBytes(import Link from "next/link";

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
)) bold uppercase track [Text.Encoding]::UTF8.GetString([Text.Encoding]::Default.GetBytes(import Link from "next/link";

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
)) ng-w [Text.Encoding]::UTF8.GetString([Text.Encoding]::Default.GetBytes(import Link from "next/link";

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
)) de text-wh [Text.Encoding]::UTF8.GetString([Text.Encoding]::Default.GetBytes(import Link from "next/link";

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
)) te shadow-lg shadow-brand-orange/30 trans [Text.Encoding]::UTF8.GetString([Text.Encoding]::Default.GetBytes(import Link from "next/link";

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
)) t [Text.Encoding]::UTF8.GetString([Text.Encoding]::Default.GetBytes(import Link from "next/link";

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
)) on hover:-translate-y-0.5 hover:shadow-xl focus-v [Text.Encoding]::UTF8.GetString([Text.Encoding]::Default.GetBytes(import Link from "next/link";

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
)) s [Text.Encoding]::UTF8.GetString([Text.Encoding]::Default.GetBytes(import Link from "next/link";

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
)) ble:outl [Text.Encoding]::UTF8.GetString([Text.Encoding]::Default.GetBytes(import Link from "next/link";

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
)) ne focus-v [Text.Encoding]::UTF8.GetString([Text.Encoding]::Default.GetBytes(import Link from "next/link";

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
)) s [Text.Encoding]::UTF8.GetString([Text.Encoding]::Default.GetBytes(import Link from "next/link";

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
)) ble:outl [Text.Encoding]::UTF8.GetString([Text.Encoding]::Default.GetBytes(import Link from "next/link";

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
)) ne-2 focus-v [Text.Encoding]::UTF8.GetString([Text.Encoding]::Default.GetBytes(import Link from "next/link";

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
)) s [Text.Encoding]::UTF8.GetString([Text.Encoding]::Default.GetBytes(import Link from "next/link";

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
)) ble:outl [Text.Encoding]::UTF8.GetString([Text.Encoding]::Default.GetBytes(import Link from "next/link";

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
)) ne-offset-2 focus-v [Text.Encoding]::UTF8.GetString([Text.Encoding]::Default.GetBytes(import Link from "next/link";

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
)) s [Text.Encoding]::UTF8.GetString([Text.Encoding]::Default.GetBytes(import Link from "next/link";

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
)) ble:outl [Text.Encoding]::UTF8.GetString([Text.Encoding]::Default.GetBytes(import Link from "next/link";

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
)) ne-brand-orange"
        >
          D [Text.Encoding]::UTF8.GetString([Text.Encoding]::Default.GetBytes(import Link from "next/link";

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
)) v [Text.Encoding]::UTF8.GetString([Text.Encoding]::Default.GetBytes(import Link from "next/link";

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
)) das
        </L [Text.Encoding]::UTF8.GetString([Text.Encoding]::Default.GetBytes(import Link from "next/link";

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
)) nk>
      </d [Text.Encoding]::UTF8.GetString([Text.Encoding]::Default.GetBytes(import Link from "next/link";

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
)) v>
    </header>
  );
}





