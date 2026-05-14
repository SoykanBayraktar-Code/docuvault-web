"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useLocale, useTranslations } from "next-intl";

const STEP_KEYS = ["scan", "organize", "summary", "find", "secure"] as const;
const STEP_IMAGES: Record<(typeof STEP_KEYS)[number], string> = {
  scan: "02-scanner.webp",
  organize: "03-collections.webp",
  summary: "04-ai-summary.webp",
  find: "05-ai-search.webp",
  secure: "06-security.webp",
};

const STEP_NUMS = ["01", "02", "03", "04", "05"];

export default function HowItWorks() {
  const t = useTranslations("howItWorks");
  const locale = useLocale();

  return (
    <section
      id="how"
      className="relative py-24 lg:py-32 bg-surface-elevated border-y border-border-warm"
    >
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
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
          <p className="mt-4 text-lg text-text-secondary leading-relaxed">
            {t("subtitle")}
          </p>
        </motion.div>

        <div className="mt-16 space-y-20 lg:space-y-28">
          {STEP_KEYS.map((key, i) => {
            const flipped = i % 2 === 1;
            return (
              <motion.div
                key={key}
                initial={{ opacity: 0, y: 32 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.6 }}
                className={`grid grid-cols-1 lg:grid-cols-12 gap-10 items-center ${
                  flipped ? "lg:[&>*:first-child]:order-2" : ""
                }`}
              >
                <div className="lg:col-span-6">
                  <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-secondary text-white font-mono text-lg font-semibold tracking-tight shadow-warm-md">
                    {STEP_NUMS[i]}
                  </div>
                  <h3 className="mt-5 text-2xl lg:text-3xl font-semibold tracking-tight text-text-primary">
                    {t(`steps.${key}.title`)}
                  </h3>
                  <p className="mt-4 text-lg text-text-secondary leading-relaxed max-w-lg">
                    {t(`steps.${key}.body`)}
                  </p>
                </div>

                <div className="lg:col-span-6 flex justify-center">
                  <div className="relative w-full max-w-sm aspect-9/16">
                    <div
                      className="absolute inset-4 rounded-[40px] bg-primary/10 blur-2xl"
                      aria-hidden
                    />
                    <Image
                      src={`/screenshots-v1.1/${locale}/${STEP_IMAGES[key]}`}
                      alt={t(`steps.${key}.alt`)}
                      fill
                      sizes="(min-width: 1024px) 360px, 80vw"
                      className="object-contain drop-shadow-[0_20px_40px_rgba(74,92,63,0.2)]"
                    />
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
