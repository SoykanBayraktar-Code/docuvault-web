"use client";

import dynamic from "next/dynamic";
import { motion } from "framer-motion";
import { Lock, ShieldCheck, Fingerprint, ArrowRight } from "lucide-react";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import { useIsMobile } from "@/hooks/use-is-mobile";
import { useInView } from "@/hooks/use-in-view";

const SecurityFlowCanvas = dynamic(
  () => import("@/components/three/security-flow"),
  { ssr: false },
);

const PILLAR_META = [
  { key: "encryption", icon: Lock },
  { key: "residency", icon: ShieldCheck },
  { key: "biometric", icon: Fingerprint },
] as const;

export default function Security() {
  const t = useTranslations("security");
  const isMobile = useIsMobile();
  const [vpRef, inView] = useInView<HTMLDivElement>();
  // 3D backdrop renders on desktop regardless of reduced motion; the stream
  // falls back to a static scatter (no flow) under reduced motion.
  const enable3D = !isMobile;

  return (
    <section
      id="security"
      className="relative py-24 lg:py-32 bg-primary-dark text-white overflow-hidden"
    >
      <div
        className="absolute inset-0 opacity-30 mix-blend-overlay paper-grain pointer-events-none"
        aria-hidden
      />
      <div
        className="absolute -top-40 right-0 w-150 h-150 rounded-full bg-secondary/20 blur-3xl pointer-events-none"
        aria-hidden
      />
      {enable3D && (
        <div ref={vpRef} className="absolute inset-0 z-[1] pointer-events-none" aria-hidden>
          <SecurityFlowCanvas active={inView} />
        </div>
      )}

      <div className="relative z-10 mx-auto max-w-7xl px-5 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
          className="max-w-3xl"
        >
          <span className="text-xs font-semibold tracking-[0.14em] uppercase text-secondary-light">
            {t("eyebrow")}
          </span>
          <h2 className="mt-3 text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight">
            {t("title")}
          </h2>
          <p className="mt-4 text-lg text-white/70 leading-relaxed">
            {t("subtitle")}
          </p>
        </motion.div>

        <div className="mt-14 grid grid-cols-1 md:grid-cols-3 gap-6">
          {PILLAR_META.map((p, i) => {
            const Icon = p.icon;
            return (
              <motion.div
                key={p.key}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, delay: i * 0.06 }}
                className="p-7 rounded-2xl bg-white/5 ring-1 ring-white/10 backdrop-blur-sm"
              >
                <div className="flex items-center justify-center w-11 h-11 rounded-xl bg-secondary/20 text-secondary-light ring-1 ring-secondary/30">
                  <Icon className="w-5 h-5" strokeWidth={1.75} />
                </div>
                <h3 className="mt-5 text-lg font-semibold tracking-tight">
                  {t(`pillars.${p.key}.title`)}
                </h3>
                <p className="mt-2 text-[15px] text-white/70 leading-relaxed">
                  {t(`pillars.${p.key}.body`)}
                </p>
              </motion.div>
            );
          })}
        </div>

        <div className="mt-12">
          <Link
            href="/privacy"
            className="inline-flex items-center gap-2 text-sm text-secondary-light hover:text-white transition-colors"
          >
            {t("privacyLinkLabel")}
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
