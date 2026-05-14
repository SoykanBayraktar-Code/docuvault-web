"use client";

import { motion } from "framer-motion";
import { Mail, MessageCircle, Clock } from "lucide-react";
import { useTranslations } from "next-intl";

const ITEM_META = [
  { key: "fast", icon: MessageCircle },
  { key: "hours", icon: Clock },
  { key: "email", icon: Mail },
] as const;

export default function Support() {
  const t = useTranslations("support");
  const tc = useTranslations("common");

  return (
    <section
      id="support"
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

        <div className="mt-14 grid grid-cols-1 md:grid-cols-3 gap-6">
          {ITEM_META.map((item, i) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.key}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, delay: i * 0.06 }}
                className="p-7 rounded-2xl bg-surface ring-1 ring-border-warm shadow-warm-sm"
              >
                <div className="flex items-center justify-center w-11 h-11 rounded-xl bg-primary-muted text-primary ring-1 ring-primary/10">
                  <Icon className="w-5 h-5" strokeWidth={1.75} />
                </div>
                <h3 className="mt-5 text-lg font-semibold tracking-tight text-text-primary">
                  {t(`items.${item.key}.title`)}
                </h3>
                <p className="mt-2 text-[15px] text-text-secondary leading-relaxed">
                  {t(`items.${item.key}.body`)}
                </p>
              </motion.div>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-12 flex flex-col sm:flex-row items-start sm:items-center gap-4 p-7 rounded-2xl bg-primary-muted ring-1 ring-primary/15"
        >
          <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-primary text-white shrink-0">
            <Mail className="w-5 h-5" strokeWidth={1.75} />
          </div>
          <div>
            <p className="text-sm font-medium text-text-primary">
              {t("emailLabel")}
            </p>
            <a
              href={`mailto:${tc("supportEmail")}`}
              className="mt-1 text-lg font-semibold text-primary hover:text-primary-dark transition-colors"
            >
              {tc("supportEmail")}
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
