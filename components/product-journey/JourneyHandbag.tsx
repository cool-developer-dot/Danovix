"use client";

import { useTexture } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useEffect, useMemo, useRef } from "react";
import {
  DoubleSide,
  Group,
  MeshStandardMaterial,
  PlaneGeometry,
  SRGBColorSpace,
} from "three";

import { HERO_PRODUCT_ASPECT } from "@/lib/hero-product/constants";
import { PRODUCT_JOURNEY_ASSET } from "@/lib/product-journey/constants";
import { productJourneyState } from "@/lib/product-journey/store";

const DEG = Math.PI / 180;
const POS_EPS = 1e-5;
const ROT_EPS = 1e-5;
const SCALE_EPS = 1e-5;

/**
 * ONE handbag for the entire page journey.
 * Shared texture + material + geometry — never duplicated.
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
  const geometry = useMemo(() => new PlaneGeometry(1, 1), []);

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

  useEffect(() => () => geometry.dispose(), [geometry]);

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

  useFrame(({ camera, size, invalidate }, delta) => {
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

    const screenW = Math.max(48, state.screenWidthPx) * state.scale;
    const planeWorldW = (screenW / size.width) * halfW * 2;
    const planeH = planeWorldW / HERO_PRODUCT_ASPECT;

    const snap =
      state.phase === "emerging" ||
      state.phase === "concealed" ||
      state.phase === "travelling" ||
      state.phase === "landing" ||
      state.phase === "interactive"
        ? 1
        : Math.min(1, delta * 16);

    const targetX = worldX;
    const targetY = worldY + state.floatY * 0.004;
    const targetZ = state.depth;

    const nextX = group.position.x + (targetX - group.position.x) * snap;
    const nextY = group.position.y + (targetY - group.position.y) * snap;
    const nextZ = group.position.z + (targetZ - group.position.z) * snap;

    if (
      Math.abs(nextX - group.position.x) > POS_EPS ||
      Math.abs(nextY - group.position.y) > POS_EPS ||
      Math.abs(nextZ - group.position.z) > POS_EPS
    ) {
      group.position.x = nextX;
      group.position.y = nextY;
      group.position.z = nextZ;
    }

    const sx = planeWorldW;
    const sy = planeH * state.compressY;
    if (
      Math.abs(group.scale.x - sx) > SCALE_EPS ||
      Math.abs(group.scale.y - sy) > SCALE_EPS
    ) {
      group.scale.set(sx, sy, 1);
    }

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

    const nextYaw = group.rotation.y + (yaw - group.rotation.y) * rotEase;
    const nextPitch = group.rotation.x + (pitch - group.rotation.x) * rotEase;
    if (
      Math.abs(nextYaw - group.rotation.y) > ROT_EPS ||
      Math.abs(nextPitch - group.rotation.x) > ROT_EPS
    ) {
      group.rotation.y = nextYaw;
      group.rotation.x = nextPitch;
    }

    /* Keep demand-loop alive while easing toward idle targets */
    if (snap < 1 || rotEase < 1) {
      if (
        Math.abs(targetX - group.position.x) > 1e-4 ||
        Math.abs(targetY - group.position.y) > 1e-4 ||
        Math.abs(yaw - group.rotation.y) > 1e-4 ||
        Math.abs(pitch - group.rotation.x) > 1e-4
      ) {
        invalidate();
      }
    }
  });

  return (
    <group ref={groupRef}>
      <mesh material={material} geometry={geometry} position={[0, 0, 0.01]} />
      <mesh
        position={[0, 0, -0.012]}
        scale={[-1, 1, 1]}
        material={material}
        geometry={geometry}
      />
    </group>
  );
}
