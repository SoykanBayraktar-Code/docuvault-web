"use client";

import { SRGBColorSpace } from "three";
import { RoundedBox, useTexture } from "@react-three/drei";
import { hex } from "@/lib/brand";

type Props = { locale: string };

/**
 * Placeholder phone: a dark body with the localized app screenshot
 * (01-vault.webp) as an emissive (toneMapped:false) screen. Swapped for a
 * real iphone.glb with a frameless screen texture in a later pass.
 * Positioning/animation is handled by the parent group in Scene.
 */
export default function Phone({ locale }: Props) {
  const screen = useTexture(`/phone/${locale}/01-vault.webp`);

  return (
    <>
      <RoundedBox args={[1.82, 3.18, 0.18]} radius={0.18} smoothness={6}>
        <meshPhysicalMaterial color={hex("ink")} metalness={0.6} roughness={0.38} clearcoat={0.5} />
      </RoundedBox>
      <mesh position={[0, 0, 0.1]}>
        <planeGeometry args={[1.62, 2.99]} />
        {/* set texture colorSpace declaratively (pierced prop) to satisfy
            the React Compiler immutability rule */}
        <meshBasicMaterial map={screen} map-colorSpace={SRGBColorSpace} toneMapped={false} />
      </mesh>
    </>
  );
}
