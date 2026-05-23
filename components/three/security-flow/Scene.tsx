"use client";

import { useMemo } from "react";
import { CanvasTexture, SRGBColorSpace } from "three";
import { RoundedBox } from "@react-three/drei";
import { hex } from "@/lib/brand";
import EncryptedStream from "./EncryptedStream";

// "AES-256" gold engraving drawn to a canvas (avoids any web-font dependency).
function useEngravingTexture(): CanvasTexture | null {
  return useMemo(() => {
    if (typeof document === "undefined") return null;
    const c = document.createElement("canvas");
    c.width = 512;
    c.height = 256;
    const ctx = c.getContext("2d");
    if (!ctx) return null;
    ctx.clearRect(0, 0, c.width, c.height);
    ctx.fillStyle = "#E0C282";
    ctx.font = "700 92px ui-monospace, 'SF Mono', Menlo, monospace";
    ctx.textAlign = "center";
    ctx.textBaseline = "middle";
    ctx.fillText("AES-256", c.width / 2, c.height / 2);
    const tex = new CanvasTexture(c);
    tex.colorSpace = SRGBColorSpace;
    return tex;
  }, []);
}

export default function Scene() {
  const engraving = useEngravingTexture();

  return (
    <>
      <hemisphereLight color={hex("creamWarm")} groundColor={hex("forestDark")} intensity={0.5} />
      <directionalLight position={[3, 5, 4]} intensity={1.2} color={hex("creamWarm")} />
      <directionalLight position={[-4, 1, 3]} intensity={0.5} color={hex("gold")} />

      {/* Left — document stack */}
      <group position={[-4.2, -0.4, 0]} rotation={[0, 0.3, 0]}>
        {[0, 1, 2, 3, 4].map((i) => (
          <RoundedBox
            key={i}
            args={[1.5, 2, 0.06]}
            radius={0.05}
            smoothness={3}
            position={[i * 0.05, i * 0.12 - 0.3, -i * 0.08]}
            rotation={[0, 0, (i - 2) * 0.04]}
          >
            <meshStandardMaterial color={hex("creamWarm")} roughness={0.85} />
          </RoundedBox>
        ))}
      </group>

      {/* Middle — encrypted stream */}
      <EncryptedStream />

      {/* Right — AES-256 shield/vault */}
      <group position={[4.2, 0.1, 0]} rotation={[0, -0.3, 0]}>
        <RoundedBox args={[2.5, 2.9, 0.4]} radius={0.18} smoothness={4}>
          <meshPhysicalMaterial
            color={hex("forest")}
            metalness={0.2}
            roughness={0.35}
            clearcoat={0.5}
            sheen={0.4}
            sheenColor={hex("sage")}
            envMapIntensity={0.8}
          />
        </RoundedBox>
        {/* gold border */}
        <RoundedBox args={[2.66, 3.06, 0.32]} radius={0.2} smoothness={4} position={[0, 0, -0.06]}>
          <meshPhysicalMaterial color={hex("gold")} metalness={0.95} roughness={0.24} envMapIntensity={1.2} />
        </RoundedBox>
        {/* AES-256 engraving */}
        {engraving && (
          <mesh position={[0, 0, 0.22]}>
            <planeGeometry args={[2, 1]} />
            <meshBasicMaterial map={engraving} transparent toneMapped={false} />
          </mesh>
        )}
      </group>
    </>
  );
}
