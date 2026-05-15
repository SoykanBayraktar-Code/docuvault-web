"use client";

import { useTranslations } from "next-intl";

type Props = {
  size?: "md" | "lg";
  className?: string;
  /**
   * Where the button is mounted — passed as a GA4 event parameter so we can
   * tell which section drives downloads (hero, finalCTA, pricing, etc.).
   */
  location?: "hero" | "final_cta" | "pricing" | "navbar" | "other";
};

function AppleLogo({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 814 1000"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path d="M788.1 340.9c-5.8 4.5-108.2 62.2-108.2 190.5 0 148.4 130.3 200.9 134.2 202.2-.6 3.2-20.7 71.9-68.7 141.9-42.8 61.6-87.5 123.1-155.5 123.1s-85.5-39.5-164-39.5c-76 0-103.7 40.8-165.9 40.8s-105-57.8-155.5-127.4C46.7 790.7 0 663 0 541.8c0-207.8 135.3-317.5 267.8-317.5 70.1 0 128.4 46.4 172.1 46.4 41.8 0 106.9-49.3 185.5-49.3zM620 132.4C654.4 94 679.5 40.9 679.5 0c0-6.4-.3-12.8-1.2-19.2-47.9 2.9-104.5 32.2-138.5 75.2C514.1 93.8 486.8 147.9 486.8 200c0 6.9.6 13.8 1.2 15.7 3.2.6 7.7 1.2 12.2 1.2 43.2 0 96.8-28.5 120-84.5z" />
    </svg>
  );
}

const APP_STORE_URL =
  "https://apps.apple.com/tr/app/docuvault-belge-kasas%C4%B1/id6762083376?l=tr";

export default function AppStoreButtons({
  size = "md",
  className = "",
  location = "other",
}: Props) {
  const t = useTranslations("appStore");
  const isLg = size === "lg";
  const h = isLg ? "h-16" : "h-14";
  const px = isLg ? "px-6" : "px-5";
  const topText = isLg ? "text-[11px]" : "text-[10px]";
  const brandText = isLg ? "text-lg" : "text-base";

  const handleClick = () => {
    if (typeof window !== "undefined" && typeof window.gtag === "function") {
      window.gtag("event", "app_store_click", {
        location,
        outbound: true,
        link_url: APP_STORE_URL,
      });
    }
  };

  return (
    <div className={`flex flex-col sm:flex-row gap-3 ${className}`}>
      <a
        href={APP_STORE_URL}
        target="_blank"
        rel="noopener noreferrer"
        onClick={handleClick}
        className={`group flex items-center gap-3 ${h} ${px} rounded-xl bg-[#1C1C1E] text-white hover:bg-black transition-colors shadow-warm-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-secondary focus-visible:ring-offset-2 focus-visible:ring-offset-background`}
        aria-label={t("ariaLabel")}
        data-location={location}
      >
        <AppleLogo className={isLg ? "w-7 h-7" : "w-6 h-6"} />
        <div className="flex flex-col leading-tight">
          <span className={`${topText} text-white/70`}>{t("topLine")}</span>
          <span className={`${brandText} font-semibold tracking-tight`}>
            {t("brand")}
          </span>
        </div>
      </a>
    </div>
  );
}
