"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import type { ReactNode } from "react";
import { ShieldCheck, Cloud, Fingerprint, Sparkles } from "lucide-react";
import { useLocale, useTranslations } from "next-intl";
import AppStoreButtons from "./AppStoreButtons";

type Props = {
  ratingBadge?: ReactNode;
};

export default function Hero({ ratingBadge }: Props) {
  const t = useTranslations("hero");
  const locale = useLocale();

  return (
    <section className="relative overflow-hidden pt-10 lg:pt-16 pb-20 lg:pb-28">
      <div
        className="absolute inset-0 paper-grain opacity-60 pointer-events-none"
        aria-hidden
      />
      <div
        className="absolute -top-24 -left-24 w-140 h-140 hero-blob pointer-events-none"
        aria-hidden
      />
      <div
        className="absolute top-24 -right-32 w-130 h-130 hero-blob pointer-events-none opacity-80"
        aria-hidden
      />

      <div className="relative mx-auto max-w-7xl px-5 lg:px-8 grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="lg:col-span-6 text-center lg:text-left"
        >
          <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-secondary-muted text-secondary text-xs font-semibold tracking-wide uppercase ring-1 ring-secondary/20">
            <Sparkles className="w-3.5 h-3.5" />
            {t("badge")}
          </span>

          <h1 className="mt-5 text-4xl sm:text-5xl lg:text-[64px] lg:leading-[1.05] font-semibold tracking-tight text-text-primary">
            {t("title1")}
            <br />
            <span className="text-primary">{t("title2Highlight")}</span>
            {/^[.,;!?]/.test(t("title2Rest")) ? "" : " "}
            {t("title2Rest")}
          </h1>

          <p className="mt-6 text-lg lg:text-xl text-text-secondary leading-relaxed max-w-xl mx-auto lg:mx-0">
            {t("subtitle")}
          </p>

          <div className="mt-8 flex justify-center lg:justify-start">
            <AppStoreButtons size="lg" location="hero" />
          </div>

          {ratingBadge}

          <ul className="mt-8 flex flex-wrap justify-center lg:justify-start items-center gap-x-6 gap-y-3 text-sm text-text-secondary">
            <li className="flex items-center gap-2">
              <Fingerprint className="w-4 h-4 text-primary" />
              {t("trustFaceId")}
            </li>
            <li className="flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-primary" />
              {t("trustEncrypted")}
            </li>
            <li className="flex items-center gap-2">
              <Cloud className="w-4 h-4 text-primary" />
              {t("trustCloud")}
            </li>
          </ul>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 32 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1, ease: "easeOut" }}
          className="lg:col-span-6 relative flex items-center justify-center"
        >
          <div className="relative w-full max-w-[420px] lg:max-w-[480px] aspect-[720/1328]">
            <div
              className="absolute inset-6 rounded-[56px] bg-primary/12 blur-3xl"
              aria-hidden
            />
            <Image
              src={`/phone/${locale}/01-vault.webp`}
              alt={t("imageAlt")}
              fill
              priority
              fetchPriority="high"
              sizes="(min-width: 1024px) 480px, 90vw"
              className="object-contain drop-shadow-[0_30px_60px_rgba(74,92,63,0.22)]"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
