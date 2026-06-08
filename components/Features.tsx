"use client";

import { motion } from "framer-motion";
import {
  ScanLine,
  FileText,
  Package,
  ShieldCheck,
  CalendarClock,
  Sparkles,
  Mic,
  Wand2,
  FolderOpen,
  type LucideIcon,
} from "lucide-react";
import { useTranslations } from "next-intl";

type FeatureKey =
  | "scanner"
  | "aiSummary"
  | "capsules"
  | "secureSharing"
  | "expiryReminder"
  | "naturalLanguage"
  | "voice"
  | "smartNaming"
  | "collections";

const FEATURE_META: { key: FeatureKey; icon: LucideIcon; hasBadge: boolean }[] = [
  { key: "scanner", icon: ScanLine, hasBadge: false },
  { key: "aiSummary", icon: FileText, hasBadge: false },
  { key: "capsules", icon: Package, hasBadge: true },
  { key: "secureSharing", icon: ShieldCheck, hasBadge: true },
  { key: "expiryReminder", icon: CalendarClock, hasBadge: true },
  { key: "naturalLanguage", icon: Sparkles, hasBadge: false },
  { key: "voice", icon: Mic, hasBadge: false },
  { key: "smartNaming", icon: Wand2, hasBadge: false },
  { key: "collections", icon: FolderOpen, hasBadge: false },
];

export default function Features() {
  const t = useTranslations("features");

  return (
    <section id="features" className="relative py-24 lg:py-32">
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
            {t("title1")}{" "}
            <span className="text-primary">{t("titleHighlight")}</span>
            {t("title2")}
          </h2>
          <p className="mt-4 text-lg text-text-secondary leading-relaxed">
            {t("subtitle")}
          </p>
        </motion.div>

        <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-6">
          {FEATURE_META.map((f, i) => {
            const Icon = f.icon;
            return (
              <motion.article
                key={f.key}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, delay: i * 0.05 }}
                className="group relative p-6 lg:p-7 rounded-2xl bg-surface ring-1 ring-border-warm shadow-warm-sm hover:shadow-warm-lg hover:-translate-y-0.5 transition-all duration-300"
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center justify-center w-11 h-11 rounded-xl bg-primary-muted text-primary ring-1 ring-primary/10">
                    <Icon className="w-5 h-5" strokeWidth={1.75} />
                  </div>
                  {f.hasBadge && (
                    <span className="px-2 py-0.5 rounded-full bg-secondary-muted text-secondary text-[10px] font-semibold tracking-wider uppercase ring-1 ring-secondary/20">
                      {t(`items.${f.key}.badge`)}
                    </span>
                  )}
                </div>
                <h3 className="mt-5 text-lg font-semibold tracking-tight text-text-primary">
                  {t(`items.${f.key}.title`)}
                </h3>
                <p className="mt-2 text-[15px] text-text-secondary leading-relaxed">
                  {t(`items.${f.key}.body`)}
                </p>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
