"use client";

import { useLocale, useTranslations } from "next-intl";
import { useTransition } from "react";
import { useRouter, usePathname } from "@/i18n/navigation";
import { routing, type Locale } from "@/i18n/routing";
import { Languages } from "lucide-react";
import { track } from "@/lib/analytics";

type Props = {
  variant?: "navbar" | "menu";
};

export default function LanguageSwitcher({ variant = "navbar" }: Props) {
  const t = useTranslations("common");
  const router = useRouter();
  const pathname = usePathname();
  const locale = useLocale();
  const [isPending, startTransition] = useTransition();

  const switchTo = (next: Locale) => {
    if (next === locale) return;
    track.changeLanguage(locale, next);
    startTransition(() => {
      router.replace(pathname, { locale: next });
    });
  };

  if (variant === "menu") {
    return (
      <div className="flex items-center gap-1 p-1 rounded-full bg-surface ring-1 ring-border-warm self-start">
        {routing.locales.map((l) => (
          <button
            key={l}
            onClick={() => switchTo(l)}
            disabled={isPending}
            className={`px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider transition-colors disabled:opacity-60 ${
              l === locale
                ? "bg-primary text-white"
                : "text-text-secondary hover:text-text-primary"
            }`}
            aria-label={l === "tr" ? t("languageTr") : t("languageEn")}
            aria-current={l === locale ? "true" : "false"}
          >
            {l}
          </button>
        ))}
      </div>
    );
  }

  return (
    <div className="hidden md:flex items-center gap-1 p-1 rounded-full bg-surface ring-1 ring-border-warm">
      <Languages
        className="w-3.5 h-3.5 ml-2 mr-1 text-text-tertiary"
        aria-hidden
      />
      {routing.locales.map((l) => (
        <button
          key={l}
          onClick={() => switchTo(l)}
          disabled={isPending}
          className={`px-2.5 py-1 rounded-full text-xs font-semibold uppercase tracking-wider transition-colors disabled:opacity-60 ${
            l === locale
              ? "bg-primary text-white"
              : "text-text-secondary hover:text-text-primary"
          }`}
          aria-label={l === "tr" ? t("languageTr") : t("languageEn")}
          aria-current={l === locale ? "true" : "false"}
        >
          {l}
        </button>
      ))}
    </div>
  );
}
