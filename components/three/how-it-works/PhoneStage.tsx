"use client";

import { useRef } from "react";
import {
  MathUtils,
  SRGBColorSpace,
  type Group,
  type MeshBasicMaterial,
} from "three";
import { useFrame } from "@react-three/fiber";
import { RoundedBox, useTexture } from "@react-three/drei";
import { hex } from "@/lib/brand";
import { usePageVisibility } from "@/hooks/use-page-visibility";
import Decorations from "./Decorations";

export type Progress = { current: number };

// The 5 "how it works" steps and their screenshots.
const STEP_IMAGES = [
  "02-scanner",
  "03-collections",
  "04-ai-summary",
  "05-ai-search",
  "06-security",
] as const;

// Slight phone rotation per step for life.
const ROT_Y = [-0.14, 0, 0.09, 0, 0];
const LAST = STEP_IMAGES.length - 1;

export default function PhoneStage({
  locale,
  progress,
}: {
  locale: string;
  progress: Progress;
}) {
  const phoneRef = useRef<Group>(null);
  const matA = useRef<MeshBasicMaterial>(null);
  const matB = useRef<MeshBasicMaterial>(null);
  const visible = usePageVisibility();

  const screens = useTexture(
    STEP_IMAGES.map((id) => `/phone/${locale}/${id}.webp`),
    (texs) => {
      const arr = Array.isArray(texs) ? texs : [texs];
      for (const tex of arr) tex.colorSpace = SRGBColorSpace;
    },
  );

  useFrame((state) => {
    if (!visible) return;
    const p = MathUtils.clamp(progress.current, 0, 1);
    const step = p * STEP_IMAGES.length;
    const idx = Math.min(Math.floor(step), LAST);
    const frac = Math.min(step - idx, 1);
    const next = Math.min(idx + 1, LAST);

    if (matA.current && matB.current) {
      matA.current.map = screens[idx];
      matB.current.map = screens[next];
      matB.current.opacity = idx === next ? 0 : frac;
    }

    if (phoneRef.current) {
      const targetRot = ROT_Y[idx] ?? 0;
      phoneRef.current.rotation.y = MathUtils.lerp(
        phoneRef.current.rotation.y,
        targetRot,
        0.08,
      );
      phoneRef.current.position.y = Math.sin(state.clock.elapsedTime * 0.8) * 0.05;
    }
  });

  return (
    <>
      <group ref={phoneRef}>
        <RoundedBox args={[1.82, 3.18, 0.18]} radius={0.18} smoothness={6}>
          <meshPhysicalMaterial color={hex("ink")} metalness={0.6} roughness={0.38} clearcoat={0.5} />
        </RoundedBox>
        {/* base screen */}
        <mesh position={[0, 0, 0.1]}>
          <planeGeometry args={[1.62, 2.99]} />
          <meshBasicMaterial ref={matA} map={screens[0]} toneMapped={false} />
        </mesh>
        {/* crossfade overlay */}
        <mesh position={[0, 0, 0.102]}>
          <planeGeometry args={[1.62, 2.99]} />
          <meshBasicMaterial ref={matB} map={screens[1]} transparent opacity={0} toneMapped={false} />
        </mesh>
      </group>

      <Decorations progress={progress} stepCount={STEP_IMAGES.length} />
    </>
  );
}
