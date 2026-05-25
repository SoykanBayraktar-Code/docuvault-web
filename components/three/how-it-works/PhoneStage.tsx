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

const STEP_IMAGES = [
  "02-scanner",
  "03-collections",
  "04-ai-summary",
  "05-ai-search",
  "06-security",
] as const;

const ROT_Y = [-0.08, 0, 0.06, 0, 0];
const LAST = STEP_IMAGES.length - 1;

/**
 * A single unlit phone plane (the framed screenshot). On step change the one
 * material dips opacity and swaps the texture — no second plane, so there's
 * no stray overlay/panel behind the device.
 */
export default function PhoneStage({
  locale,
  progress,
}: {
  locale: string;
  progress: Progress;
}) {
  const phoneRef = useRef<Group>(null);
  const mat = useRef<MeshBasicMaterial>(null);
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

    if (idx !== currentIdx.current && mat.current) {
      const m = mat.current;
      gsap.killTweensOf(m);
      gsap.to(m, {
        opacity: 0.12,
        duration: 0.16,
        ease: "power2.in",
        onComplete: () => {
          m.map = screens[idx];
        },
      });
      gsap.to(m, { opacity: 1, duration: 0.24, delay: 0.16, ease: "power2.out" });
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
      <mesh>
        <planeGeometry args={[1.5, 3.2]} />
        <meshBasicMaterial ref={mat} map={screens[0]} transparent toneMapped={false} />
      </mesh>
    </group>
  );
}
