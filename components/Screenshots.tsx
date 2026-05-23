"use client";

import Image from "next/image";
import { useState } from "react";
import { motion } from "framer-motion";
import { useLocale, useTranslations } from "next-intl";
import Lightbox, { type LightboxImage } from "./Lightbox";

const SHOT_KEYS = [
  "vault",
  "scanner",
  "collections",
  "aiSummary",
  "aiSearch",
  "security",
] as const;

const SHOT_IMAGES: Record<(typeof SHOT_KEYS)[number], string> = {
  vault: "01-vault",
  scanner: "02-scanner",
  collections: "03-collections",
  aiSummary: "04-ai-summary",
  aiSearch: "05-ai-search",
  security: "06-security",
};

export default function Screenshots() {
  const t = useTranslations("screenshots");
  const locale = useLocale();
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const lightboxImages: LightboxImage[] = SHOT_KEYS.map((key) => ({
    src: `/phone/${locale}/${SHOT_IMAGES[key]}.webp`,
    alt: t(`items.${key}.alt`),
  }));

  return (
    <section className="relative py-24 lg:py-32 overflow-hidden">
      <div className="mx-auto max-w-7xl px-5 lg:px-8 mb-14">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
          className="max-w-2xl"
        >
          <span className="text-xs font-semibold tracking-[0.14em] uppercase text-secondary">
            {t("eyebrow")}
          </span>
          <h2 className="mt-3 text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight text-text-primary">
            {t("title")}
          </h2>
        </motion.div>
      </div>

      <div className="relative">
        <div
          className="absolute left-0 top-0 bottom-0 w-16 lg:w-32 bg-linear-to-r from-background to-transparent z-10 pointer-events-none"
          aria-hidden
        />
        <div
          className="absolute right-0 top-0 bottom-0 w-16 lg:w-32 bg-linear-to-l from-background to-transparent z-10 pointer-events-none"
          aria-hidden
        />

        <div className="overflow-x-auto scrollbar-none snap-x snap-mandatory">
          <ul className="flex items-stretch gap-6 lg:gap-8 px-5 lg:px-8 pb-6 min-w-max">
            {SHOT_KEYS.map((key, i) => (
              <motion.li
                key={key}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.5, delay: i * 0.05 }}
                className="snap-center shrink-0"
              >
                <button
                  onClick={() => setOpenIndex(i)}
                  className="group block w-60 sm:w-72 lg:w-80 cursor-zoom-in rounded-[1.9rem] bg-surface-elevated ring-1 ring-border-warm shadow-warm-lg p-3 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-warm-xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-4 focus-visible:ring-offset-background"
                  aria-label={t(`items.${key}.alt`)}
                >
                  <div className="relative w-full aspect-[720/1356] overflow-hidden rounded-[1.4rem]">
                    <Image
                      src={`/phone/${locale}/${SHOT_IMAGES[key]}.webp`}
                      alt={t(`items.${key}.alt`)}
                      fill
                      sizes="(min-width: 1024px) 320px, 280px"
                      className="object-contain"
                    />
                  </div>
                  <figcaption className="mt-3 pb-1 text-center text-sm font-medium text-text-secondary tracking-wide">
                    {t(`items.${key}.label`)}
                  </figcaption>
                </button>
              </motion.li>
            ))}
          </ul>
        </div>
      </div>

      <Lightbox
        images={lightboxImages}
        openIndex={openIndex}
        onClose={() => setOpenIndex(null)}
        onNavigate={setOpenIndex}
      />
    </section>
  );
}
