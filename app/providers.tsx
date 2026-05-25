"use client";

import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { useReducedMotion } from "@/hooks/use-reduced-motion";
import { useLenis } from "@/hooks/use-lenis";
import CustomCursor from "@/components/ui/CustomCursor";
import Loader from "@/components/ui/Loader";

/**
 * Client providers for the whole app: Lenis smooth scroll wired to the GSAP
 * ticker, GSAP plugin registration, and a ScrollTrigger refresh once layout
 * settles. Reduced-motion users get native scroll (Lenis disabled).
 *
 * Mounted inside the (server) locale layout so it doesn't disturb
 * NextIntlClientProvider, SEO, or the static fallback.
 */
export default function Providers({ children }: { children: React.ReactNode }) {
  const reduced = useReducedMotion();
  useLenis(!reduced);

  useEffect(() => {
    gsap.registerPlugin(useGSAP, ScrollTrigger);
    // Re-measure triggers once layout truly settles: after fonts load, after
    // the window load event (images/3D chunks), and a safety tick. Without
    // this, lazily-mounted canvases shift positions and ScrollTriggers fire
    // at the wrong scroll offsets.
    const refresh = () => ScrollTrigger.refresh();
    const id = window.setTimeout(refresh, 800);
    window.addEventListener("load", refresh);
    if (typeof document !== "undefined" && "fonts" in document) {
      document.fonts.ready.then(refresh).catch(() => {});
    }
    return () => {
      window.clearTimeout(id);
      window.removeEventListener("load", refresh);
    };
  }, []);

  return (
    <>
      <Loader />
      {children}
      <CustomCursor />
    </>
  );
}
