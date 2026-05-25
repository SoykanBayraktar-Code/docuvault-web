"use client";

import { useSyncExternalStore } from "react";
import { useIsMobile } from "@/hooks/use-is-mobile";
import { useReducedMotion } from "@/hooks/use-reduced-motion";
import HowItWorksStatic from "./HowItWorksStatic";
import HowItWorksPinned from "./HowItWorksPinned";

// false on the server / first paint, true once hydrated — lint-safe (no
// setState-in-effect). Keeps SSR output = the static, fully-readable variant.
const emptySubscribe = () => () => {};
function useIsClient(): boolean {
  return useSyncExternalStore(
    emptySubscribe,
    () => true,
    () => false,
  );
}

/**
 * Desktop + motion gets the pinned 3D phone scroll-story; the server, mobile,
 * and reduced-motion users get the static sequential steps (all copy in DOM).
 */
export default function HowItWorks() {
  const isClient = useIsClient();
  const isMobile = useIsMobile();
  const reduced = useReducedMotion();

  const enable3D = isClient && !isMobile && !reduced;
  return enable3D ? <HowItWorksPinned /> : <HowItWorksStatic />;
}
