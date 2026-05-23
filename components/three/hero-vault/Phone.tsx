"use client";

import { SRGBColorSpace } from "three";
import { useTexture } from "@react-three/drei";

type Props = { locale: string };

// The webp is the phone on a now-transparent margin, so we just map it onto a
// plane at the image's aspect (720×1356). No 3D body, no crop math.
export default function Phone({ locale }: Props) {
  const screen = useTexture(`/phone/${locale}/01-vault.webp`, (tex) => {
    const t = Array.isArray(tex) ? tex[0] : tex;
    t.colorSpace = SRGBColorSpace;
  });

  return (
    <mesh>
      <planeGeometry args={[1.7, 3.2]} />
      <meshBasicMaterial map={screen} transparent toneMapped={false} />
    </mesh>
  );
}
