import { useSyncExternalStore } from "react";

function subscribe(callback: () => void): () => void {
  window.addEventListener("resize", callback, { passive: true });
  return () => window.removeEventListener("resize", callback);
}

function getSnapshot(): boolean {
  const lowCores =
    typeof navigator.hardwareConcurrency === "number" &&
    navigator.hardwareConcurrency < 4;
  return window.innerWidth < 768 || lowCores;
}

function getServerSnapshot(): boolean {
  return false;
}

/**
 * True when the device is too small / underpowered for the 3D experience
 * (narrow viewport OR < 4 logical cores). On such devices we skip Canvas and
 * serve the static fallback. SSR-safe (server = false).
 */
export function useIsMobile(): boolean {
  return useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);
}
