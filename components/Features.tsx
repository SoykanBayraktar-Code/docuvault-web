"use client";

import { useRef } from "react";
import { motion } from "framer-motion";
import {
  ScanLine,
  FileText,
  Sparkles,
  Mic,
  Wand2,
  FolderOpen,
  type LucideIcon,
} from "lucide-react";
import { useTranslations } from "next-intl";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { useReducedMotion } from "@/hooks/use-reduced-motion";
import { useIsMobile } from "@/hooks/use-is-mobile";

gsap.registerPlugin(useGSAP, ScrollTrigger);

type FeatureKey =
  | "scanner"
  | "aiSummary"
  | "naturalLanguage"
  | "voice"
  | "smartNaming"
  | "collections";

const FEATURE_META: { key: FeatureKey; icon: LucideIcon; hasBadge: boolean }[] = [
  { key: "scanner", icon: ScanLine, hasBadge: true },
  { key: "aiSummary", icon: FileText, hasBadge: true },
  { key: "naturalLanguage", icon: Sparkles, hasBadge: false },
  { key: "voice", icon: Mic, hasBadge: false },
  { key: "smartNaming", icon: Wand2, hasBadge: false },
  { key: "collections", icon: FolderOpen, hasBadge: false },
];

// Deterministic "scattered" start for each card — assembles into the grid as
// the section scrolls in. (x/y in px, z translateZ in px, rotations in deg.)
const SCATTER = [
  { x: -130, y: 70, z: -240, rX: 10, rY: 26, rZ: -14 },
  { x: 150, y: -50, z: -150, rX: -8, rY: -22, rZ: 11 },
  { x: -90, y: -80, z: -320, rX: 12, rY: 18, rZ: 9 },
  { x: 100, y: 90, z: -120, rX: -10, rY: -28, rZ: -12 },
  { x: -160, y: -25, z: -270, rX: -6, rY: 32, rZ: 16 },
  { x: 130, y: 45, z: -200, rX: 8, rY: -16, rZ: -9 },
] as const;

export default function Features() {
  const t = useTranslations("features");
  const containerRef = useRef<HTMLDivElement>(null);
  const reduced = useReducedMotion();
  const isMobile = useIsMobile();

  useGSAP(
    () => {
      const cards = gsap.utils.toArray<HTMLElement>(".feature-card");
      if (cards.length === 0) return;

      // Reduced motion or mobile: no chaos — render the clean grid directly.
      if (reduced || isMobile) {
        gsap.set(cards, { clearProps: "all" });
        return;
      }

      cards.forEach((card, i) => {
        const s = SCATTER[i % SCATTER.length];
        gsap.fromTo(
          card,
          { x: s.x, y: s.y, z: s.z, rotateX: s.rX, rotateY: s.rY, rotateZ: s.rZ, opacity: 0 },
          {
            x: 0,
            y: 0,
            z: 0,
            rotateX: 0,
            rotateY: 0,
            rotateZ: 0,
            opacity: 1,
            ease: "power2.out",
            scrollTrigger: {
              trigger: containerRef.current,
              start: "top 82%",
              end: "top 30%",
              scrub: 1,
            },
          },
        );
      });
    },
    // revertOnUpdate kills the previous ScrollTriggers when reduced/isMobile
    // flip (e.g. the SSR=false → client=true hydration step), otherwise a
    // stale scatter trigger keeps the cards invisible for reduced-motion users.
    { dependencies: [reduced, isMobile], scope: containerRef, revertOnUpdate: true },
  );

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

        {/* perspective wrapper enables the CSS-3D assemble */}
        <div
          ref={containerRef}
          className="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-6"
          style={{ perspective: "1200px", transformStyle: "preserve-3d" }}
        >
          {FEATURE_META.map((f) => {
            const Icon = f.icon;
            return (
              <article
                key={f.key}
                className="feature-card group relative p-6 lg:p-7 rounded-2xl bg-surface ring-1 ring-border-warm shadow-warm-sm hover:shadow-warm-lg transition-shadow duration-300"
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
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
