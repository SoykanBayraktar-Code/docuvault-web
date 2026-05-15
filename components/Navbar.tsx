"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
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

  useEffect(() => {
    if (open) {
      document.documentElement.style.overflow = "hidden";
    } else {
      document.documentElement.style.overflow = "";
    }
    return () => {
      document.documentElement.style.overflow = "";
    };
  }, [open]);

  const navLinks: { href: string; label: string; external?: boolean }[] = [
    { href: "#features", label: t("features") },
    { href: "#how", label: t("howItWorks") },
    { href: "#pricing", label: t("pricing") },
    { href: "/blog", label: t("blog"), external: true },
    { href: "#faq", label: t("faq") },
    { href: "#support", label: t("support") },
  ];

  return (
    <header
      className={`sticky top-0 z-40 transition-all duration-300 ${
        scrolled
          ? "glass border-b border-border-warm/60"
          : "bg-transparent border-b border-transparent"
      }`}
    >
      <a
        href="#content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-2 focus:left-2 focus:z-50 focus:px-3 focus:py-2 focus:rounded-md focus:bg-primary focus:text-white focus:text-sm focus:shadow-warm-md"
      >
        {tc("skipToContent")}
      </a>

      <nav className="mx-auto max-w-7xl px-5 lg:px-8 h-16 lg:h-18 flex items-center justify-between">
        <Link
          href="/"
          className="flex items-center gap-2.5 group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded-md"
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

        <div className="hidden md:flex items-center gap-7">
          {navLinks.map((l) =>
            l.external ? (
              <Link
                key={l.href}
                href={l.href}
                className="text-sm text-text-secondary hover:text-primary transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded px-1"
              >
                {l.label}
              </Link>
            ) : (
              <a
                key={l.href}
                href={l.href}
                className="text-sm text-text-secondary hover:text-primary transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded px-1"
              >
                {l.label}
              </a>
            )
          )}
        </div>

        <div className="hidden md:flex items-center gap-3">
          <LanguageSwitcher variant="navbar" />
          <a
            href="#download"
            className="inline-flex items-center h-10 px-5 rounded-full bg-secondary hover:bg-secondary-light text-white text-sm font-medium shadow-warm-sm transition-all hover:-translate-y-px focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-secondary focus-visible:ring-offset-2 focus-visible:ring-offset-background"
          >
            {tc("downloadCta")}
          </a>
        </div>

        <button
          onClick={() => setOpen((v) => !v)}
          className="md:hidden inline-flex items-center justify-center w-10 h-10 rounded-lg text-text-primary hover:bg-primary-muted transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
          aria-label={open ? t("closeMenu") : t("openMenu")}
          aria-expanded={open}
        >
          {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </nav>

      <AnimatePresence>
        {open && (
          <>
            <motion.div
              key="backdrop"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              onClick={() => setOpen(false)}
              className="md:hidden fixed inset-0 z-30 bg-text-primary/40 backdrop-blur-sm"
              aria-hidden
            />
            <motion.aside
              key="drawer"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 28, stiffness: 280 }}
              role="dialog"
              aria-modal="true"
              aria-label={t("openMenu")}
              className="md:hidden fixed top-0 right-0 bottom-0 z-40 w-[85%] max-w-sm bg-background shadow-warm-xl border-l border-border-warm"
            >
              <div className="h-16 flex items-center justify-end px-5 border-b border-border-warm">
                <button
                  onClick={() => setOpen(false)}
                  aria-label={t("closeMenu")}
                  className="inline-flex items-center justify-center w-10 h-10 rounded-lg text-text-primary hover:bg-primary-muted transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
              <div className="px-5 py-6 flex flex-col gap-1">
                {navLinks.map((l) =>
                  l.external ? (
                    <Link
                      key={l.href}
                      href={l.href}
                      onClick={() => setOpen(false)}
                      className="py-3 px-2 text-base text-text-primary hover:text-primary border-b border-border-light"
                    >
                      {l.label}
                    </Link>
                  ) : (
                    <a
                      key={l.href}
                      href={l.href}
                      onClick={() => setOpen(false)}
                      className="py-3 px-2 text-base text-text-primary hover:text-primary border-b border-border-light"
                    >
                      {l.label}
                    </a>
                  )
                )}
                <div className="pt-4 pb-1 px-2">
                  <LanguageSwitcher variant="menu" />
                </div>
                <a
                  href="#download"
                  onClick={() => setOpen(false)}
                  className="mt-4 inline-flex items-center justify-center h-12 rounded-full bg-secondary text-white font-semibold shadow-warm-md"
                >
                  {tc("downloadCta")}
                </a>
              </div>
            </motion.aside>
          </>
        )}
      </AnimatePresence>
    </header>
  );
}
