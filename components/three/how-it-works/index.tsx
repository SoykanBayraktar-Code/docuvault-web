"use client";

import { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { ACESFilmicToneMapping } from "three";
import { Environment, Lightformer, PerspectiveCamera } from "@react-three/drei";
import { hex } from "@/lib/brand";
import PhoneStage, { type Progress } from "./PhoneStage";

/**
 * Pinned "how it works" canvas. `progress` is a shared ref written by the
 * ScrollTrigger in HowItWorksPinned and read by the scene every frame.
 * ssr:false dynamic import; transparent over the paper background.
 */
export default function HowItWorksCanvas({
  locale,
  progress,
}: {
  locale: string;
  progress: Progress;
}) {
  return (
    <Canvas
      dpr={[1, 2]}
      gl={{ antialias: true, alpha: true, toneMapping: ACESFilmicToneMapping }}
      style={{ background: "transparent" }}
    >
      <PerspectiveCamera makeDefault fov={34} position={[0, 0, 6.5]} />
      <hemisphereLight color={hex("creamWarm")} groundColor={hex("forest")} intensity={0.5} />
      <directionalLight position={[3, 5, 4]} intensity={1.4} color={hex("creamWarm")} />
      <directionalLight position={[-3, 1, 3]} intensity={0.4} color={hex("gold")} />
      <Environment resolution={256} frames={1}>
        <Lightformer form="rect" intensity={2} color={hex("creamWarm")} position={[4, 4, 4]} scale={[6, 6, 1]} />
        <Lightformer form="rect" intensity={0.7} color={hex("gold")} position={[-4, 1, 3]} scale={[5, 5, 1]} />
      </Environment>
      <Suspense fallback={null}>
        <PhoneStage locale={locale} progress={progress} />
      </Suspense>
    </Canvas>
  );
}
