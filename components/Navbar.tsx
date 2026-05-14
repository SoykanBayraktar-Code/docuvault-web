"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import LanguageSwitcher from "./LanguageSwitcher";

export default function Navbar() {
  const t = useTranslations("nav");
  const tc = useTranslations("common");
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const navLinks: { href: string; label: string }[] = [
    { href: "#features", label: t("features") },
    { href: "#how", label: t("howItWorks") },
    { href: "#pricing", label: t("pricing") },
    { href: "#support", label: t("support") },
  ];

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "glass border-b border-border-warm/60"
          : "bg-transparent border-b border-transparent"
      }`}
    >
      <nav className="mx-auto max-w-7xl px-5 lg:px-8 h-16 lg:h-18 flex items-center justify-between">
        <Link
          href="/"
          className="flex items-center gap-2.5 group"
          aria-label={t("homeAriaLabel")}
        >
          <div className="relative w-9 h-9 rounded-lg overflow-hidden ring-1 ring-border-warm bg-surface">
            <Image
              src="/logo.webp"
              alt="DocuVault logo"
              fill
              className="object-contain"
              sizes="36px"
              priority
            />
          </div>
          <span className="font-semibold tracking-tight text-[17px] text-text-primary">
            DocuVault
          </span>
        </Link>

        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm text-text-secondary hover:text-primary transition-colors"
            >
              {l.label}
            </a>
          ))}
        </div>

        <div className="hidden md:flex items-center gap-3">
          <LanguageSwitcher variant="navbar" />
          <a
            href="#download"
            className="inline-flex items-center h-10 px-5 rounded-full bg-secondary hover:bg-secondary-light text-white text-sm font-medium shadow-warm-sm transition-colors"
          >
            {tc("downloadCta")}
          </a>
        </div>

        <button
          onClick={() => setOpen((v) => !v)}
          className="md:hidden inline-flex items-center justify-center w-10 h-10 rounded-lg text-text-primary hover:bg-primary-muted transition-colors"
          aria-label={open ? t("closeMenu") : t("openMenu")}
        >
          {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </nav>

      {open && (
        <div className="md:hidden glass border-t border-border-warm/60">
          <div className="mx-auto max-w-7xl px-5 py-4 flex flex-col gap-1">
            {navLinks.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="py-3 px-2 text-base text-text-primary hover:text-primary"
              >
                {l.label}
              </a>
            ))}
            <div className="pt-3 pb-1 px-2">
              <LanguageSwitcher variant="menu" />
            </div>
            <a
              href="#download"
              onClick={() => setOpen(false)}
              className="mt-2 inline-flex items-center justify-center h-11 rounded-full bg-secondary text-white font-medium"
            >
              {tc("downloadCta")}
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
