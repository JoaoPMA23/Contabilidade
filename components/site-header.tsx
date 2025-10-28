'use client';

import Link from "next/link";
import { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";

type SiteHeaderProps = {
  variant?: "home" | "internal";
};

const brandName = "Spolaor Contabilidade";

export default function SiteHeader({ variant = "internal" }: SiteHeaderProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const isHome = variant === "home";

  const navItems = [
    { label: "Abertura", href: isHome ? "#abertura" : "/#abertura" },
    { label: "Trocar", href: isHome ? "#trocar" : "/#trocar" },
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

  const toggleMenu = () => setIsMenuOpen((open) => !open);
  const closeMenu = () => setIsMenuOpen(false);

  return (
    <header className="sticky top-0 z-50 border-b border-brand-primary/10 bg-white/95 text-brand-primary backdrop-blur">
      <div className="container flex h-[var(--header-height)] items-center justify-between gap-6">
        <Link
          href={logoHref}
          className="text-lg font-semibold text-brand-primary transition hover:text-brand-secondary focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-primary"
        >
          {brandName}
        </Link>
        <nav className="hidden items-center gap-8 text-sm font-medium text-brand-primary/80 lg:flex">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="transition hover:text-brand-primary focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-primary"
            >
              {item.label}
            </Link>
          ))}
        </nav>
        <div className="flex items-center gap-3">
          <Link
            href={ctaHref}
            className="inline-flex rounded-full bg-brand-primary px-5 py-2 text-sm font-semibold uppercase tracking-wide text-white shadow-lg shadow-brand-primary/20 transition hover:-translate-y-0.5 hover:shadow-xl focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-primary"
          >
            Dúvidas
          </Link>
          <button
            type="button"
            onClick={toggleMenu}
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-brand-primary/20 text-brand-primary transition hover:border-brand-secondary hover:text-brand-secondary focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-primary lg:hidden"
            aria-controls="site-mobile-menu"
            aria-expanded={isMenuOpen}
            aria-label={isMenuOpen ? "Fechar menu" : "Abrir menu"}
          >
            {isMenuOpen ? <FiX className="h-5 w-5" /> : <FiMenu className="h-5 w-5" />}
          </button>
        </div>
      </div>
      {isMenuOpen ? (
        <div
          id="site-mobile-menu"
          className="lg:hidden"
        >
          <div className="container">
            <div className="mb-3 mt-2 rounded-3xl border border-brand-primary/15 bg-white p-6 text-sm font-medium text-brand-primary shadow-lg shadow-brand-primary/10">
              <nav className="flex flex-col gap-4">
                {navItems.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={closeMenu}
                    className="rounded-full px-4 py-2 transition hover:bg-brand-primary/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-primary"
                  >
                    {item.label}
                  </Link>
                ))}
                <Link
                  href={ctaHref}
                  onClick={closeMenu}
                  className="inline-flex items-center justify-center rounded-full bg-brand-primary px-4 py-2 text-sm font-semibold uppercase tracking-wide text-white shadow-brand-primary/20 transition hover:-translate-y-0.5 hover:shadow-lg focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-primary"
                >
                  Dúvidas
                </Link>
              </nav>
            </div>
          </div>
        </div>
      ) : null}
    </header>
  );
}
