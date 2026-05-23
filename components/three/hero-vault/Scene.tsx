"use client";

import { useRef } from "react";
import {
  MathUtils,
  type Group,
  type PointLight,
  type PerspectiveCamera as ThreePerspectiveCamera,
} from "three";
import { useFrame } from "@react-three/fiber";
import { Environment, Lightformer, PerspectiveCamera } from "@react-three/drei";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { hex } from "@/lib/brand";
import { useReducedMotion } from "@/hooks/use-reduced-motion";
import { usePageVisibility } from "@/hooks/use-page-visibility";
import Vault from "./Vault";
import Phone from "./Phone";

// Resting (final) transform values — the reduced-motion target and the
// end-state of the intro choreography.
const PHONE_REST_Y = 1.5;
const LID_OPEN_X = -2.1;
const INNER_LIGHT_MAX = 2.2;

export default function Scene({ locale }: { locale: string }) {
  const groupRef = useRef<Group>(null);
  const lidRef = useRef<Group>(null);
  const phoneRef = useRef<Group>(null);
  const innerLightRef = useRef<PointLight>(null);
  const cameraRef = useRef<ThreePerspectiveCamera>(null);

  const reduced = useReducedMotion();
  const visible = usePageVisibility();

  useGSAP(
    () => {
      const lid = lidRef.current;
      const phone = phoneRef.current;
      const light = innerLightRef.current;
      const cam = cameraRef.current;
      if (!lid || !phone || !light || !cam) return;

      if (reduced) {
        // Jump straight to the composed final state — no animation.
        lid.rotation.x = LID_OPEN_X;
        phone.position.y = PHONE_REST_Y;
        light.intensity = INNER_LIGHT_MAX;
        cam.position.z = 14;
        return;
      }

      phone.position.y = PHONE_REST_Y;
      const tl = gsap.timeline({ defaults: { ease: "expo.inOut" } });

      // 0.0–1.4s — camera dollies in
      tl.from(cam.position, { z: 20, duration: 1.4, ease: "power3.out" }, 0);
      // 0.6–1.6s — lid swings open (starts closed at x = 0)
      tl.to(lid.rotation, { x: LID_OPEN_X, duration: 1.0 }, 0.6);
      // 0.8–1.6s — inner light blooms
      tl.fromTo(light, { intensity: 0 }, { intensity: INNER_LIGHT_MAX, duration: 0.8 }, 0.8);
      // 1.7s — phone emerges AFTER the lid is fully open. It's scaled to 0
      // (invisible) until then, so it can never poke through the closed lid.
      tl.from(phone.scale, { x: 0, y: 0, z: 0, duration: 0.9, ease: "back.out(1.5)" }, 1.7);
      tl.from(phone.position, { y: PHONE_REST_Y - 0.7, duration: 0.9, ease: "power3.out" }, 1.7);
      // idle float
      tl.to(
        phone.position,
        { y: `+=0.12`, duration: 4, ease: "sine.inOut", yoyo: true, repeat: -1 },
        2.8,
      );
    },
    // revertOnUpdate so the reduced-motion hydration flip can't leave the
    // phone stuck at scale 0 (invisible).
    { dependencies: [reduced], revertOnUpdate: true },
  );

  // Subtle mouse head-tracking + battery-friendly pause when hidden.
  useFrame((state) => {
    if (!visible || reduced) return;
    const g = groupRef.current;
    if (!g) return;
    const ty = state.pointer.x * 0.18;
    const tx = -state.pointer.y * 0.1;
    g.rotation.y = MathUtils.lerp(g.rotation.y, ty, 0.05);
    g.rotation.x = MathUtils.lerp(g.rotation.x, tx, 0.05);
  });

  return (
    <>
      <PerspectiveCamera makeDefault ref={cameraRef} fov={32} position={[0, 0, 14]} />
      <fog attach="fog" args={[hex("straw"), 14, 30]} />

      {/* 3-point studio lighting */}
      <hemisphereLight color={hex("creamWarm")} groundColor={hex("forest")} intensity={0.45} />
      <directionalLight position={[4, 6, 5]} intensity={1.5} color={hex("creamWarm")} />
      <directionalLight position={[-3, 2, 4]} intensity={0.45} color={hex("gold")} />
      <directionalLight position={[0, 3, -5]} intensity={0.7} color={hex("sage")} />

      {/* Reflections for the metals — built from Lightformers, no HDR file */}
      <Environment resolution={256} frames={1}>
        <Lightformer form="rect" intensity={2} color={hex("creamWarm")} position={[4, 4, 4]} scale={[6, 6, 1]} />
        <Lightformer form="rect" intensity={0.7} color={hex("gold")} position={[-4, 1, 3]} scale={[5, 5, 1]} />
        <Lightformer form="ring" intensity={1} color={hex("sage")} position={[0, 3, -5]} scale={[4, 4, 1]} />
      </Environment>

      <group ref={groupRef}>
        <Vault lidRef={lidRef} innerLightRef={innerLightRef} />
        <group ref={phoneRef} position={[0, PHONE_REST_Y, 0.4]}>
          <Phone locale={locale} />
        </group>
      </group>
    </>
  );
}
