"use client";

import type { RefObject } from "react";
import type { Group, PointLight } from "three";
import { RoundedBox } from "@react-three/drei";
import { hex } from "@/lib/brand";

type Props = {
  lidRef: RefObject<Group | null>;
  innerLightRef: RefObject<PointLight | null>;
};

/**
 * Placeholder "vault" built from primitives (RoundedBox) until a real
 * vault.glb lands. Forest lacquered body + gold trim, a hinged lid that
 * swings open, and an inner light that brightens as it opens.
 * `lidRef` / `innerLightRef` are owned by the Scene so its GSAP timeline
 * can choreograph them.
 */
export default function Vault({ lidRef, innerLightRef }: Props) {
  return (
    <group position={[0, -1.2, 0]}>
      {/* Base body */}
      <RoundedBox args={[4.6, 2.4, 3.2]} radius={0.16} smoothness={4}>
        <meshPhysicalMaterial
          color={hex("forest")}
          metalness={0.15}
          roughness={0.35}
          clearcoat={0.6}
          clearcoatRoughness={0.2}
          sheen={0.4}
          sheenColor={hex("sage")}
          envMapIntensity={0.85}
        />
      </RoundedBox>

      {/* Gold rim around the opening */}
      <RoundedBox args={[4.74, 0.18, 3.34]} radius={0.08} smoothness={4} position={[0, 1.2, 0]}>
        <meshPhysicalMaterial
          color={hex("gold")}
          metalness={0.95}
          roughness={0.22}
          envMapIntensity={1.25}
        />
      </RoundedBox>

      {/* Inner glow — intensity tweened 0 → bright as the lid opens */}
      <pointLight
        ref={innerLightRef}
        position={[0, 1.05, 0]}
        intensity={0}
        color={hex("goldBright")}
        distance={7}
        decay={2}
      />

      {/* Lid — pivot at the back-top edge, child offset forward so it spans
          the opening when closed (rotation.x = 0). */}
      <group ref={lidRef} position={[0, 1.32, -1.6]}>
        <group position={[0, 0, 1.6]}>
          <RoundedBox args={[4.6, 0.3, 3.2]} radius={0.12} smoothness={4}>
            <meshPhysicalMaterial
              color={hex("forest")}
              metalness={0.15}
              roughness={0.32}
              clearcoat={0.6}
              clearcoatRoughness={0.2}
              sheen={0.4}
              sheenColor={hex("sage")}
              envMapIntensity={0.85}
            />
          </RoundedBox>
          {/* Gold inlay on the lid face */}
          <RoundedBox args={[4.7, 0.12, 3.3]} radius={0.06} smoothness={4} position={[0, 0.19, 0]}>
            <meshPhysicalMaterial
              color={hex("gold")}
              metalness={0.95}
              roughness={0.22}
              envMapIntensity={1.25}
            />
          </RoundedBox>
        </group>
      </group>
    </group>
  );
}
