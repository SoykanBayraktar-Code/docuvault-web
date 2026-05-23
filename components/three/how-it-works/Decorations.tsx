"use client";

import { useRef } from "react";
import { MathUtils, type Group } from "three";
import { useFrame } from "@react-three/fiber";
import { hex } from "@/lib/brand";
import type { Progress } from "./PhoneStage";

/**
 * Per-step decorative accents that scale in when their step is active and
 * scale out otherwise. Primitive placeholders (paper / orbit / bubbles /
 * rings / shield) — cheap, on-brand, swapped for richer art later.
 */
export default function Decorations({
  progress,
  stepCount,
}: {
  progress: Progress;
  stepCount: number;
}) {
  const g0 = useRef<Group>(null);
  const g1 = useRef<Group>(null);
  const g2 = useRef<Group>(null);
  const g3 = useRef<Group>(null);
  const g4 = useRef<Group>(null);

  useFrame((state) => {
    const groups = [g0.current, g1.current, g2.current, g3.current, g4.current];
    const p = MathUtils.clamp(progress.current, 0, 1);
    const idx = Math.min(Math.floor(p * stepCount), stepCount - 1);
    const t = state.clock.elapsedTime;

    groups.forEach((g, i) => {
      if (!g) return;
      const s = MathUtils.lerp(g.scale.x, i === idx ? 1 : 0, 0.12);
      g.scale.setScalar(s);
      g.visible = s > 0.02;
      if (i === 1) g.rotation.y = t * 0.5; // orbiting labels
      if (i === 4) g.rotation.y = t * 0.3; // shield
      if (i === 0) g.rotation.z = Math.sin(t * 0.6) * 0.1; // papers sway
    });
  });

  return (
    <group position={[2.3, 0.2, -0.6]}>
      {/* 0 — scan: floating papers */}
      <group ref={g0} scale={0}>
        {[0, 1, 2].map((i) => (
          <mesh key={i} position={[i * 0.18 - 0.2, i * 0.22 - 0.2, -i * 0.15]} rotation={[0.1, 0.3, i * 0.2 - 0.2]}>
            <planeGeometry args={[0.9, 1.2]} />
            <meshStandardMaterial color={hex("creamWarm")} roughness={0.9} />
          </mesh>
        ))}
      </group>

      {/* 1 — organize: orbiting labels */}
      <group ref={g1} scale={0}>
        {[0, 1, 2, 3, 4, 5].map((i) => {
          const a = (i / 6) * Math.PI * 2;
          return (
            <mesh key={i} position={[Math.cos(a) * 1.1, Math.sin(a) * 1.1, 0]}>
              <boxGeometry args={[0.32, 0.18, 0.05]} />
              <meshStandardMaterial color={i % 2 ? hex("gold") : hex("sage")} metalness={0.4} roughness={0.5} />
            </mesh>
          );
        })}
      </group>

      {/* 2 — summary: gold bubbles */}
      <group ref={g2} scale={0}>
        {[0, 1, 2, 3].map((i) => (
          <mesh key={i} position={[Math.sin(i * 1.7) * 0.6, i * 0.5 - 0.6, Math.cos(i) * 0.3]}>
            <sphereGeometry args={[0.16 + (i % 2) * 0.06, 24, 24]} />
            <meshStandardMaterial color={hex("gold")} metalness={0.6} roughness={0.3} />
          </mesh>
        ))}
      </group>

      {/* 3 — search: concentric rings */}
      <group ref={g3} scale={0}>
        {[0.5, 0.85, 1.2].map((r, i) => (
          <mesh key={i}>
            <ringGeometry args={[r, r + 0.05, 48]} />
            <meshBasicMaterial color={hex("sage")} transparent opacity={0.7 - i * 0.18} />
          </mesh>
        ))}
      </group>

      {/* 4 — security: wireframe shield */}
      <group ref={g4} scale={0}>
        <mesh>
          <icosahedronGeometry args={[1, 1]} />
          <meshBasicMaterial color={hex("gold")} wireframe />
        </mesh>
      </group>
    </group>
  );
}
