"use client";

import { useRef } from "react";
import dynamic from "next/dynamic";
import { useLocale, useTranslations } from "next-intl";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP, ScrollTrigger);

const HowItWorksCanvas = dynamic(() => import("@/components/three/how-it-works"), {
  ssr: false,
});

const STEP_KEYS = ["scan", "organize", "summary", "find", "secure"] as const;
const STEP_NUMS = ["01", "02", "03", "04", "05"];

/**
 * Desktop + motion variant: a pinned 3D phone whose screen crossfades through
 * the 5 steps as you scroll, with synced DOM step copy (kept in the DOM for
 * a11y/SEO). A shared `progress` ref bridges ScrollTrigger → the R3F scene.
 */
export default function HowItWorksPinned() {
  const t = useTranslations("howItWorks");
  const locale = useLocale();
  const stageRef = useRef<HTMLDivElement>(null);
  const progress = useRef(0);

  useGSAP(
    () => {
      const stage = stageRef.current;
      if (!stage) return;
      const steps = gsap.utils.toArray<HTMLElement>(".hiw-step");
      const dots = gsap.utils.toArray<HTMLElement>(".hiw-dot");
      let last = -1;

      const st = ScrollTrigger.create({
        trigger: stage,
        start: "top top",
        end: "+=4000",
        pin: true,
        scrub: 1,
        anticipatePin: 1,
        invalidateOnRefresh: true,
        onUpdate: (self) => {
          progress.current = self.progress;
          const idx = Math.min(Math.floor(self.progress * STEP_KEYS.length), STEP_KEYS.length - 1);
          if (idx === last) return;
          last = idx;
          steps.forEach((el, i) => {
            el.style.opacity = i === idx ? "1" : "0";
            el.style.transform = i === idx ? "translateY(0)" : "translateY(14px)";
          });
          dots.forEach((d, i) => {
            d.style.opacity = i === idx ? "1" : "0.3";
            d.style.width = i === idx ? "28px" : "10px";
          });
        },
      });
      return () => st.kill();
    },
    { scope: stageRef },
  );

  return (
    <section id="how" className="relative bg-surface-elevated border-y border-border-warm">
      <div ref={stageRef} className="hiw-stage h-screen flex items-center overflow-hidden">
        <div className="mx-auto max-w-7xl w-full px-5 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          {/* Left — heading + synced step copy */}
          <div className="relative order-2 lg:order-1">
            <span className="text-xs font-semibold tracking-[0.14em] uppercase text-secondary">
              {t("eyebrow")}
            </span>
            <h2 className="mt-3 text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight text-text-primary">
              {t("title")}
            </h2>
            <p className="mt-4 text-lg text-text-secondary leading-relaxed max-w-md">
              {t("subtitle")}
            </p>

            <div className="relative mt-10 h-[230px]">
              {STEP_KEYS.map((key, i) => (
                <div
                  key={key}
                  className="hiw-step absolute inset-0"
                  style={{
                    opacity: i === 0 ? 1 : 0,
                    transform: i === 0 ? "translateY(0)" : "translateY(14px)",
                    transition: "opacity .45s ease, transform .45s ease",
                  }}
                >
                  <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-secondary text-white font-mono text-lg font-semibold shadow-warm-md">
                    {STEP_NUMS[i]}
                  </div>
                  <h3 className="mt-5 text-2xl lg:text-3xl font-semibold tracking-tight text-text-primary">
                    {t(`steps.${key}.title`)}
                  </h3>
                  <p className="mt-4 text-lg text-text-secondary leading-relaxed max-w-lg">
                    {t(`steps.${key}.body`)}
                  </p>
                </div>
              ))}
            </div>

            <div className="mt-8 flex items-center gap-2" aria-hidden>
              {STEP_KEYS.map((key, i) => (
                <span
                  key={key}
                  className="hiw-dot h-2.5 rounded-full bg-secondary"
                  style={{
                    width: i === 0 ? "28px" : "10px",
                    opacity: i === 0 ? 1 : 0.3,
                    transition: "width .4s ease, opacity .4s ease",
                  }}
                />
              ))}
            </div>
          </div>

          {/* Right — pinned 3D phone */}
          <div className="relative h-[58vh] lg:h-[78vh] order-1 lg:order-2">
            <HowItWorksCanvas locale={locale} progress={progress} />
          </div>
        </div>
      </div>
    </section>
  );
}
