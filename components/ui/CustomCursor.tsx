"use client";

import { useRef, useSyncExternalStore } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { useReducedMotion } from "@/hooks/use-reduced-motion";

gsap.registerPlugin(useGSAP);

const FINE = "(pointer: fine)";
function subscribe(cb: () => void): () => void {
  const m = window.matchMedia(FINE);
  m.addEventListener("change", cb);
  return () => m.removeEventListener("change", cb);
}
function useFinePointer(): boolean {
  return useSyncExternalStore(
    subscribe,
    () => window.matchMedia(FINE).matches,
    () => false,
  );
}

const INTERACTIVE = "a, button, [role='button'], input, textarea, select, label";

/**
 * Gold dot + trailing ring that replaces the native cursor on desktop with a
 * fine pointer and motion allowed. Ring expands over interactive elements.
 * Renders nothing (and leaves the native cursor) on touch / reduced motion.
 */
export default function CustomCursor() {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);
  const fine = useFinePointer();
  const reduced = useReducedMotion();
  const active = fine && !reduced;

  useGSAP(
    () => {
      if (!active) return;
      const dot = dotRef.current;
      const ring = ringRef.current;
      if (!dot || !ring) return;

      gsap.set([dot, ring], { xPercent: -50, yPercent: -50 });
      document.documentElement.classList.add("cursor-none");

      const dx = gsap.quickTo(dot, "x", { duration: 0.08, ease: "power2.out" });
      const dy = gsap.quickTo(dot, "y", { duration: 0.08, ease: "power2.out" });
      const rx = gsap.quickTo(ring, "x", { duration: 0.32, ease: "power2.out" });
      const ry = gsap.quickTo(ring, "y", { duration: 0.32, ease: "power2.out" });

      const onMove = (e: PointerEvent) => {
        dx(e.clientX);
        dy(e.clientY);
        rx(e.clientX);
        ry(e.clientY);
      };
      const onOver = (e: PointerEvent) => {
        if ((e.target as Element)?.closest?.(INTERACTIVE)) {
          gsap.to(ring, { scale: 1.7, borderColor: "rgba(224,194,130,0.9)", duration: 0.3 });
        }
      };
      const onOut = (e: PointerEvent) => {
        if ((e.target as Element)?.closest?.(INTERACTIVE)) {
          gsap.to(ring, { scale: 1, duration: 0.3 });
        }
      };

      window.addEventListener("pointermove", onMove);
      document.addEventListener("pointerover", onOver);
      document.addEventListener("pointerout", onOut);

      return () => {
        document.documentElement.classList.remove("cursor-none");
        window.removeEventListener("pointermove", onMove);
        document.removeEventListener("pointerover", onOver);
        document.removeEventListener("pointerout", onOut);
      };
    },
    { dependencies: [active] },
  );

  if (!active) return null;

  return (
    <>
      <div ref={dotRef} className="cursor-dot" aria-hidden />
      <div ref={ringRef} className="cursor-ring" aria-hidden />
    </>
  );
}
