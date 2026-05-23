"use client";

import { useRef } from "react";
import {
  MathUtils,
  SRGBColorSpace,
  type Group,
  type MeshBasicMaterial,
} from "three";
import { useFrame } from "@react-three/fiber";
import { useTexture } from "@react-three/drei";
import gsap from "gsap";
import { usePageVisibility } from "@/hooks/use-page-visibility";

export type Progress = { current: number };

// The 5 "how it works" steps and their screenshots.
const STEP_IMAGES = [
  "02-scanner",
  "03-collections",
  "04-ai-summary",
  "05-ai-search",
  "06-security",
] as const;

// Subtle phone rotation per step.
const ROT_Y = [-0.1, 0, 0.07, 0, 0];
const LAST = STEP_IMAGES.length - 1;

export default function PhoneStage({
  locale,
  progress,
}: {
  locale: string;
  progress: Progress;
}) {
  const phoneRef = useRef<Group>(null);
  const matA = useRef<MeshBasicMaterial>(null); // settled (opaque) screen
  const matB = useRef<MeshBasicMaterial>(null); // incoming screen (fades in)
  const currentIdx = useRef(0);
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
    const idx = Math.min(Math.floor(p * STEP_IMAGES.length), LAST);

    // Discrete, quick snap-fade between steps — no persistent two-screen
    // ghosting (a slow crossfade of text-heavy screenshots looks broken).
    if (idx !== currentIdx.current) {
      const a = matA.current;
      const b = matB.current;
      if (a && b) {
        b.map = screens[idx];
        b.opacity = 0;
        gsap.killTweensOf(b);
        gsap.to(b, {
          opacity: 1,
          duration: 0.4,
          ease: "power2.inOut",
          onComplete: () => {
            a.map = screens[idx];
            b.opacity = 0;
          },
        });
      }
      currentIdx.current = idx;
    }

    if (phoneRef.current) {
      phoneRef.current.rotation.y = MathUtils.lerp(
        phoneRef.current.rotation.y,
        ROT_Y[idx] ?? 0,
        0.08,
      );
      phoneRef.current.position.y = Math.sin(state.clock.elapsedTime * 0.8) * 0.04;
    }
  });

  return (
    <group ref={phoneRef}>
      {/* settled screen — the webp is the phone; no extra 3D body/frame */}
      <mesh position={[0, 0, 0]}>
        <planeGeometry args={[1.7, 3.2]} />
        <meshBasicMaterial ref={matA} map={screens[0]} toneMapped={false} transparent />
      </mesh>
      {/* incoming screen (quick fade) */}
      <mesh position={[0, 0, 0.01]}>
        <planeGeometry args={[1.7, 3.2]} />
        <meshBasicMaterial ref={matB} map={screens[1]} transparent opacity={0} toneMapped={false} />
      </mesh>
    </group>
  );
}
