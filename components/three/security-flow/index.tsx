"use client";

import { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { ACESFilmicToneMapping } from "three";
import { Environment, Lightformer, PerspectiveCamera } from "@react-three/drei";
import { hex } from "@/lib/brand";
import Scene from "./Scene";

/**
 * Decorative encryption-flow backdrop for the dark Security section.
 * ssr:false dynamic import; transparent over the forest background.
 */
export default function SecurityFlowCanvas() {
  return (
    <Canvas
      dpr={[1, 2]}
      gl={{ antialias: true, alpha: true, toneMapping: ACESFilmicToneMapping }}
      style={{ background: "transparent" }}
    >
      <PerspectiveCamera makeDefault fov={40} position={[0, 0, 12]} />
      <Environment resolution={256} frames={1}>
        <Lightformer form="rect" intensity={1.6} color={hex("creamWarm")} position={[4, 4, 4]} scale={[6, 6, 1]} />
        <Lightformer form="rect" intensity={0.8} color={hex("gold")} position={[-4, 2, 3]} scale={[5, 5, 1]} />
      </Environment>
      <Suspense fallback={null}>
        <Scene />
      </Suspense>
    </Canvas>
  );
}
