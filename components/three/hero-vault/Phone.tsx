"use client";

import { SRGBColorSpace } from "three";
import { useTexture } from "@react-three/drei";

type Props = { locale: string };

// The webp already IS a phone (titanium frame + UI) on a cream margin, so we
// add NO 3D body (that produced an ugly double black frame). We just show the
// image on a plane and crop the cream margin away via texture repeat/offset so
// only the device shows.
const CROP_REPEAT: [number, number] = [0.85, 0.95];
const CROP_OFFSET: [number, number] = [0.075, 0.025];

export default function Phone({ locale }: Props) {
  const screen = useTexture(`/phone/${locale}/01-vault.webp`, (tex) => {
    const t = Array.isArray(tex) ? tex[0] : tex;
    t.colorSpace = SRGBColorSpace;
    t.repeat.set(...CROP_REPEAT);
    t.offset.set(...CROP_OFFSET);
  });

  return (
    <mesh>
      <planeGeometry args={[1.55, 3.2]} />
      <meshBasicMaterial map={screen} toneMapped={false} transparent />
    </mesh>
  );
}
