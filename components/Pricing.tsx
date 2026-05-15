"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Check, Star, ArrowRight } from "lucide-react";
import { useTranslations } from "next-intl";
import { track } from "@/lib/analytics";

const COMPARISON_KEYS = [
  "storage",
  "ocr",
  "aiSummary",
  "naturalLanguage",
  "voice",
  "collections",
] as const;

export default function Pricing() {
  const t = useTranslations("pricing");
  const [isYearly, setIsYearly] = useState(false);
  const freeFeatures = t.raw("freeFeatures") as string[];

  return (
    <section id="pricing" className="relative py-24 lg:py-32">
      <div className="mx-auto max-w-5xl px-5 lg:px-8">
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

        <div className="mt-14 grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Free Plan */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5, delay: 0 }}
            className="relative flex flex-col p-7 rounded-2xl bg-surface ring-2 ring-primary shadow-warm-sm"
          >
            <div className="flex items-start justify-between">
              <div>
                <h3 className="text-xl font-semibold tracking-tight text-text-primary">
                  {t("freeTitle")}
                </h3>
                <p className="mt-1 text-2xl font-semibold text-text-primary">
                  {t("freePrice")}
                </p>
              </div>
              <span className="px-3 py-1 rounded-full bg-primary-muted text-primary-dark text-[11px] font-semibold tracking-wider uppercase">
                {t("freeCurrentBadge")}
              </span>
            </div>

            <ul className="mt-6 space-y-3 flex-1">
              {freeFeatures.map((f) => (
                <li
                  key={f}
                  className="flex items-start gap-2.5 text-[15px] text-text-secondary"
                >
                  <Check
                    className="w-4 h-4 mt-0.5 shrink-0 text-primary"
                    strokeWidth={2.5}
                  />
                  <span>{f}</span>
                </li>
              ))}
            </ul>

            <a
              href="#download"
              className="mt-7 inline-flex items-center justify-center h-11 rounded-full text-sm font-medium bg-primary-muted text-primary-dark hover:bg-primary hover:text-white transition-colors"
            >
              {t("freeCta")}
            </a>
          </motion.div>

          {/* Gold Plan */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5, delay: 0.08 }}
            className="relative flex flex-col p-7 rounded-2xl ring-2 ring-secondary shadow-warm-lg"
            style={{ background: "#fffbf3" }}
          >
            <span className="absolute -top-3 right-6 px-3 py-1 rounded-full bg-secondary text-white text-[11px] font-semibold tracking-wider uppercase shadow-warm-sm">
              {t("popularBadge")}
            </span>

            <div className="flex items-center gap-2">
              <Star className="w-5 h-5 text-secondary fill-secondary" />
              <h3 className="text-xl font-semibold tracking-tight text-secondary">
                {t("goldTitle")}
              </h3>
            </div>

            <div className="mt-4 flex items-center gap-1 p-1 rounded-full bg-white ring-1 ring-border-warm self-start">
              <button
                onClick={() => {
                  setIsYearly(false);
                  track.togglePricingBilling("monthly");
                }}
                className={`px-4 py-1.5 rounded-full text-sm font-medium transition-all duration-200 ${
                  !isYearly
                    ? "bg-secondary text-white shadow-warm-sm"
                    : "text-text-secondary hover:text-text-primary"
                }`}
              >
                {t("monthly")}
              </button>
              <button
                onClick={() => {
                  setIsYearly(true);
                  track.togglePricingBilling("yearly");
                }}
                className={`px-4 py-1.5 rounded-full text-sm font-medium transition-all duration-200 flex items-center gap-1.5 ${
                  isYearly
                    ? "bg-secondary text-white shadow-warm-sm"
                    : "text-text-secondary hover:text-text-primary"
                }`}
              >
                {t("yearly")}
                <span
                  className={`text-[11px] font-semibold ${
                    isYearly ? "text-white/80" : "text-secondary"
                  }`}
                >
                  {t("yearlyDiscount")}
                </span>
              </button>
            </div>

            <div className="mt-5">
              {isYearly ? (
                <>
                  <div className="flex items-baseline gap-1">
                    <span className="text-4xl font-bold tracking-tight text-secondary">
                      {t("yearlyPrice")}
                    </span>
                    <span className="text-text-tertiary text-sm">
                      {t("yearlyPerUnit")}
                    </span>
                  </div>
                  <p className="mt-1 text-sm text-text-secondary">
                    {t("yearlyNote")}
                  </p>
                </>
              ) : (
                <>
                  <div className="flex items-baseline gap-1">
                    <span className="text-4xl font-bold tracking-tight text-secondary">
                      {t("monthlyPrice")}
                    </span>
                    <span className="text-text-tertiary text-sm">
                      {t("monthlyPerUnit")}
                    </span>
                  </div>
                  <p className="mt-1 text-sm text-text-secondary">
                    {t("monthlyNote")}
                  </p>
                </>
              )}
            </div>

            <ul className="mt-6 space-y-3 flex-1">
              {COMPARISON_KEYS.map((key) => (
                <li
                  key={key}
                  className="flex items-center justify-between text-[14px]"
                >
                  <span className="text-text-secondary font-medium">
                    {t(`goldComparisons.${key}.label`)}
                  </span>
                  <div className="flex items-center gap-1.5">
                    <span className="text-text-tertiary line-through">
                      {t(`goldComparisons.${key}.from`)}
                    </span>
                    <ArrowRight className="w-3 h-3 text-text-tertiary shrink-0" />
                    <span className="font-semibold text-secondary">
                      {t(`goldComparisons.${key}.to`)}
                    </span>
                  </div>
                </li>
              ))}
            </ul>

            <a
              href="#download"
              className="mt-7 inline-flex items-center justify-center h-11 rounded-full text-sm font-semibold bg-secondary hover:bg-secondary-light text-white transition-colors shadow-warm-md"
            >
              {t("goldCta")}
            </a>
          </motion.div>
        </div>

        <p className="mt-8 text-center text-xs text-text-tertiary">
          {t("footnote")}
        </p>
      </div>
    </section>
  );
}
