"use client";

import { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { PerspectiveCamera } from "@react-three/drei";
import PhoneStage, { type Progress } from "./PhoneStage";

/**
 * Pinned "how it works" canvas. The phone uses an unlit basic material (just
 * the screenshot texture), so NO lights/environment are needed — they're
 * removed to keep the canvas fully transparent (no stray light panel) and
 * cheap. `progress` is the shared ScrollTrigger ref read every frame.
 */
export default function HowItWorksCanvas({
  locale,
  progress,
  active = true,
}: {
  locale: string;
  progress: Progress;
  active?: boolean;
}) {
  return (
    <Canvas
      dpr={[1, 1.5]}
      frameloop={active ? "always" : "never"}
      gl={{ antialias: true, alpha: true }}
      onCreated={({ gl }) => gl.setClearAlpha(0)}
      style={{ background: "transparent" }}
    >
      <PerspectiveCamera makeDefault fov={34} position={[0, 0, 6.5]} />
      <Suspense fallback={null}>
        <PhoneStage locale={locale} progress={progress} />
      </Suspense>
    </Canvas>
  );
}
