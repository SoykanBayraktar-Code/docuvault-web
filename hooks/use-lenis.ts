import { useEffect, useRef } from "react";
import Lenis from "lenis";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

/**
 * Smooth scroll via Lenis, driven by the GSAP ticker and synced to
 * ScrollTrigger. Pass `enabled = false` (reduced motion / SSR) to fall back
 * to native scrolling. Cleans up the ticker callback and Lenis on unmount.
 */
export function useLenis(enabled = true): React.RefObject<Lenis | null> {
  const lenisRef = useRef<Lenis | null>(null);

  useEffect(() => {
    if (!enabled) return;

    gsap.registerPlugin(ScrollTrigger);

    const lenis = new Lenis({
      duration: 1.1,
      smoothWheel: true,
      // gentle, "weighty archive" feel — not a slippery slide
      easing: (t: number) => 1 - Math.pow(1 - t, 3),
    });
    lenisRef.current = lenis;

    lenis.on("scroll", ScrollTrigger.update);
    const onTick = (time: number) => lenis.raf(time * 1000);
    gsap.ticker.add(onTick);
    gsap.ticker.lagSmoothing(0);

    return () => {
      gsap.ticker.remove(onTick);
      lenis.destroy();
      lenisRef.current = null;
    };
  }, [enabled]);

  return lenisRef;
}
