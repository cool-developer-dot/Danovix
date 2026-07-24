"use client";

import { useTexture } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useEffect, useMemo, useRef } from "react";
import {
  DoubleSide,
  Group,
  MeshStandardMaterial,
  SRGBColorSpace,
} from "three";

import { HERO_PRODUCT_ASPECT } from "@/lib/hero-product/constants";
import { PRODUCT_JOURNEY_ASSET } from "@/lib/product-journey/constants";
import { productJourneyState } from "@/lib/product-journey/store";

const DEG = Math.PI / 180;

/**
 * ONE handbag for the entire page journey.
 * Shared texture + material — never duplicated.
 * Transform driven by the mutable journey store (no React re-renders).
 */
export function JourneyHandbag() {
  const groupRef = useRef<Group>(null);
  const viewportDimsRef = useRef<{
    width: number;
    height: number;
    z: number;
    halfH: number;
    halfW: number;
  } | null>(null);
  const texture = useTexture(PRODUCT_JOURNEY_ASSET);

  useEffect(() => {
    // Three.js textures are intentionally mutable after load.
    // eslint-disable-next-line react-hooks/immutability -- GPU texture setup
    texture.colorSpace = SRGBColorSpace;
    const isCoarse =
      typeof window !== "undefined" &&
      (window.matchMedia("(pointer: coarse)").matches ||
        window.innerWidth < 768);
    texture.anisotropy = isCoarse ? 4 : 8;
    texture.needsUpdate = true;

    return () => {
      texture.dispose();
    };
  }, [texture]);

  const material = useMemo(
    () =>
      new MeshStandardMaterial({
        map: texture,
        transparent: true,
        alphaTest: 0.08,
        side: DoubleSide,
        metalness: 0.22,
        roughness: 0.38,
        envMapIntensity: 0.9,
        depthWrite: false,
      }),
    [texture],
  );

  useEffect(() => () => material.dispose(), [material]);

  useFrame(({ camera, size }, delta) => {
    const group = groupRef.current;
    if (!group) return;

    const state = productJourneyState;
    if (!state.canvasVisible || (!state.revealed && state.phase === "concealed")) {
      group.visible = false;
      return;
    }

    group.visible = true;

    let dims = viewportDimsRef.current;
    if (
      !dims ||
      dims.width !== size.width ||
      dims.height !== size.height ||
      dims.z !== camera.position.z
    ) {
      const dist = camera.position.z;
      const vFov = (camera as typeof camera & { fov: number }).fov ?? 35;
      const halfH = Math.tan((vFov * DEG) / 2) * dist;
      const halfW = halfH * (size.width / Math.max(1, size.height));
      dims = {
        width: size.width,
        height: size.height,
        z: dist,
        halfH,
        halfW,
      };
      viewportDimsRef.current = dims;
    }

    const { halfH, halfW } = dims;

    const worldX = (state.x - 0.5) * 2 * halfW;
    const worldY = (0.5 - state.y) * 2 * halfH;

    /* Exact pedestal-matched width — no arbitrary 28vw guess */
    const screenW = Math.max(48, state.screenWidthPx) * state.scale;
    const planeWorldW = (screenW / size.width) * halfW * 2;
    const planeH = planeWorldW / HERO_PRODUCT_ASPECT;

    /*
     * Scrubbed travel + docked interactive must track 1:1 — no lerp lag
     * (lerp while docking was the bag sinking below the marble then catching up).
     */
    const snap =
      state.phase === "emerging" ||
      state.phase === "concealed" ||
      state.phase === "travelling" ||
      state.phase === "landing" ||
      state.phase === "interactive"
        ? 1
        : Math.min(1, delta * 16);

    group.position.x += (worldX - group.position.x) * snap;
    group.position.y +=
      (worldY + state.floatY * 0.004 - group.position.y) * snap;
    group.position.z += (state.depth - group.position.z) * snap;

    group.scale.set(planeWorldW, planeH * state.compressY, 1);

    const yaw =
      (state.rotateY + state.idleRotateY) * DEG +
      (state.interactiveEnabled ? state.interactiveYaw : 0);
    const pitch =
      state.rotateX * DEG +
      (state.interactiveEnabled ? state.interactivePitch : 0);

    const rotEase =
      state.phase === "emerging" ||
      state.phase === "travelling" ||
      state.phase === "landing"
        ? 1
        : Math.min(1, delta * 10);
    group.rotation.y += (yaw - group.rotation.y) * rotEase;
    group.rotation.x += (pitch - group.rotation.x) * rotEase;
  });

  return (
    <group ref={groupRef}>
      <mesh material={material} position={[0, 0, 0.01]}>
        <planeGeometry args={[1, 1]} />
      </mesh>
      <mesh position={[0, 0, -0.012]} scale={[-1, 1, 1]} material={material}>
        <planeGeometry args={[1, 1]} />
      </mesh>
    </group>
  );
}
