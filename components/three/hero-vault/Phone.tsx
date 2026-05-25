"use client";

import { LinearFilter, SRGBColorSpace } from "three";
import { useTexture } from "@react-three/drei";

type Props = { locale: string };

// The webp is the phone on a now-transparent margin, so we just map it onto a
// plane at the image's aspect (720×1356). No 3D body, no crop math.
export default function Phone({ locale }: Props) {
  const screen = useTexture(`/phone/${locale}/01-vault.webp`, (tex) => {
    const t = Array.isArray(tex) ? tex[0] : tex;
    t.colorSpace = SRGBColorSpace;
    // Kill the pale fringe that haloes the phone on dark backgrounds: the
    // browser's WebP decoder leaves light RGB in the fully-transparent margin,
    // and mipmap averaging bleeds it into the edges. Premultiplied alpha +
    // no mipmaps stops the bleed.
    t.premultiplyAlpha = true;
    t.generateMipmaps = false;
    t.minFilter = LinearFilter;
    t.magFilter = LinearFilter;
    t.needsUpdate = true;
  });

  return (
    <mesh>
      <planeGeometry args={[1.5, 3.2]} />
      <meshBasicMaterial
        map={screen}
        transparent
        toneMapped={false}
        alphaTest={0.5}
        depthWrite={false}
      />
    </mesh>
  );
}
