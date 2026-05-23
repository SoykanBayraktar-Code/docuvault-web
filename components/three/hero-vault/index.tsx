"use client";

import { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { ACESFilmicToneMapping } from "three";
import Scene from "./Scene";

/**
 * Public API for the hero vault scene. Imported with
 * `dynamic(() => import(...), { ssr: false })` from Hero — Three.js must not
 * run on the server. Transparent canvas so the aged-paper page shows behind.
 */
export default function HeroVaultCanvas({
  locale,
  active = true,
}: {
  locale: string;
  active?: boolean;
}) {
  return (
    <Canvas
      dpr={[1, 1.5]}
      frameloop={active ? "always" : "never"}
      gl={{ antialias: true, alpha: true, toneMapping: ACESFilmicToneMapping }}
      style={{ background: "transparent" }}
    >
      <Suspense fallback={null}>
        <Scene locale={locale} />
      </Suspense>
    </Canvas>
  );
}
