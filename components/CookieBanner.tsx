"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Cookie, X } from "lucide-react";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";

const STORAGE_KEY = "docuvault-cookie-consent";

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
  }
}

export default function CookieBanner() {
  const t = useTranslations("cookieBanner");
  const [show, setShow] = useState(false);

  useEffect(() => {
    try {
      const v = window.localStorage.getItem(STORAGE_KEY);
      if (!v) setShow(true);
    } catch {
      // localStorage unavailable (e.g. private mode) — fail closed (don't show)
    }
  }, []);

  const decide = (accept: boolean) => {
    try {
      window.localStorage.setItem(
        STORAGE_KEY,
        JSON.stringify({ accept, at: new Date().toISOString() })
      );
    } catch {
      // ignore
    }

    // Update Google Analytics Consent Mode v2 in real time
    if (typeof window !== "undefined" && typeof window.gtag === "function") {
      window.gtag("consent", "update", {
        analytics_storage: accept ? "granted" : "denied",
      });
    }

    setShow(false);
  };

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 24 }}
          transition={{ duration: 0.25, ease: "easeOut" }}
          role="dialog"
          aria-live="polite"
          aria-label={t("ariaLabel")}
          className="fixed bottom-4 left-4 right-4 sm:left-6 sm:right-auto sm:max-w-md z-50"
        >
          <div className="relative rounded-2xl bg-surface ring-1 ring-border-warm shadow-warm-xl p-5">
            <button
              onClick={() => decide(false)}
              className="absolute top-3 right-3 inline-flex items-center justify-center w-7 h-7 rounded-full text-text-tertiary hover:text-text-primary hover:bg-primary-muted transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
              aria-label={t("dismiss")}
            >
              <X className="w-4 h-4" />
            </button>
            <div className="flex items-start gap-3 pr-6">
              <div className="shrink-0 w-9 h-9 rounded-xl bg-primary-muted text-primary flex items-center justify-center">
                <Cookie className="w-5 h-5" strokeWidth={1.75} />
              </div>
              <div className="min-w-0">
                <p className="text-sm font-semibold text-text-primary">
                  {t("title")}
                </p>
                <p className="mt-1 text-[13px] text-text-secondary leading-relaxed">
                  {t("body")}{" "}
                  <Link
                    href="/privacy"
                    className="text-primary hover:text-primary-dark underline underline-offset-2"
                  >
                    {t("privacyLink")}
                  </Link>
                  .
                </p>
              </div>
            </div>
            <div className="mt-4 flex items-center gap-2 justify-end">
              <button
                onClick={() => decide(false)}
                className="px-4 py-2 rounded-full text-sm font-medium text-text-secondary hover:bg-primary-muted hover:text-primary-dark transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
              >
                {t("reject")}
              </button>
              <button
                onClick={() => decide(true)}
                className="px-4 py-2 rounded-full text-sm font-semibold bg-primary text-white hover:bg-primary-dark transition-colors shadow-warm-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background"
              >
                {t("accept")}
              </button>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
