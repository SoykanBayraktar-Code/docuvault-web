"use client";

import { useMemo, useRef } from "react";
import {
  AdditiveBlending,
  CatmullRomCurve3,
  Object3D,
  Vector3,
  type InstancedMesh,
} from "three";
import { useFrame } from "@react-three/fiber";
import { hex } from "@/lib/brand";
import { useReducedMotion } from "@/hooks/use-reduced-motion";
import { usePageVisibility } from "@/hooks/use-page-visibility";

const COUNT = 480;

// Deterministic pseudo-random (pure — no Math.random, so it's render-safe and
// stable across SSR/hydration). Returns 0..1 for a given index + salt.
function rand(i: number, salt: number): number {
  const x = Math.sin((i + 1) * 12.9898 + salt * 78.233) * 43758.5453;
  return x - Math.floor(x);
}

/**
 * Glowing gold "encrypted" dashes streaming along a Bezier-ish curve from the
 * document stack into the AES-256 shield — additive on the dark forest
 * background. Placeholder for literal hex glyphs (a sprite-atlas swap once it
 * can be visually tuned). Reduced motion → static scatter; paused when hidden.
 */
export default function EncryptedStream() {
  const meshRef = useRef<InstancedMesh>(null);
  const dummyRef = useRef(new Object3D());
  const initedRef = useRef(false);
  const reduced = useReducedMotion();
  const visible = usePageVisibility();

  const curve = useMemo(
    () =>
      new CatmullRomCurve3([
        new Vector3(-4.2, -0.6, 0),
        new Vector3(-2, 0.9, 0.6),
        new Vector3(0.4, -0.8, -0.4),
        new Vector3(2.4, 0.7, 0.4),
        new Vector3(4.2, 0.1, 0),
      ]),
    [],
  );

  const state = useRef(
    Array.from({ length: COUNT }, (_, i) => ({
      t: rand(i, 1),
      speed: 0.0006 + rand(i, 2) * 0.0012,
      scale: 0.6 + rand(i, 3) * 0.9,
    })),
  );

  useFrame(() => {
    const mesh = meshRef.current;
    if (!mesh || !visible) return;
    if (reduced && initedRef.current) return;

    const dummy = dummyRef.current;
    const advance = !reduced;
    const items = state.current;

    for (let i = 0; i < COUNT; i++) {
      const c = items[i];
      if (advance) {
        c.t += c.speed;
        if (c.t > 1) c.t -= 1;
      }
      const p = curve.getPointAt(c.t);
      const tan = curve.getTangentAt(c.t);
      dummy.position.copy(p);
      dummy.rotation.set(0, 0, Math.atan2(tan.y, tan.x));
      dummy.scale.set(c.scale * 0.2, c.scale * 0.045, 1);
      dummy.updateMatrix();
      mesh.setMatrixAt(i, dummy.matrix);
    }
    mesh.instanceMatrix.needsUpdate = true;
    initedRef.current = true;
  });

  return (
    <instancedMesh ref={meshRef} args={[undefined, undefined, COUNT]} frustumCulled={false}>
      <planeGeometry args={[1, 1]} />
      <meshBasicMaterial
        color={hex("goldBright")}
        transparent
        opacity={0.85}
        blending={AdditiveBlending}
        depthWrite={false}
        toneMapped={false}
      />
    </instancedMesh>
  );
}
