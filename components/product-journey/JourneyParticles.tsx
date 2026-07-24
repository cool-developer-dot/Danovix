"use client";

import { useFrame } from "@react-three/fiber";
import { useEffect, useMemo, useRef } from "react";
import { Color, BufferAttribute, BufferGeometry, type Points } from "three";

import { productJourneyState } from "@/lib/product-journey/store";

type JourneyParticlesProps = {
  maxOpacity: number;
};

const COUNT = 28;

/** Deterministic [0,1) — stable across renders, identical visual density. */
function particleRand(seed: number) {
  const x = Math.sin(seed * 12.9898 + 78.233) * 43758.5453;
  return x - Math.floor(x);
}

export function JourneyParticles({ maxOpacity }: JourneyParticlesProps) {
  const pointsRef = useRef<Points>(null);
  const { geometry, seeds, base } = useMemo(() => {
    const positions = new Float32Array(COUNT * 3);
    const seeds = new Float32Array(COUNT);
    const base = new Float32Array(COUNT * 3);

    for (let i = 0; i < COUNT; i++) {
      const x = (particleRand(i * 3.1 + 1.7) - 0.5) * 0.55;
      const y = -0.15 - particleRand(i * 5.3 + 2.9) * 0.35;
      const z = (particleRand(i * 7.7 + 4.1) - 0.5) * 0.2;
      positions[i * 3] = x;
      positions[i * 3 + 1] = y;
      positions[i * 3 + 2] = z;
      base[i * 3] = x;
      base[i * 3 + 1] = y;
      base[i * 3 + 2] = z;
      seeds[i] = particleRand(i * 9.1 + 0.4) * Math.PI * 2;
    }

    const geometry = new BufferGeometry();
    geometry.setAttribute("position", new BufferAttribute(positions, 3));
    return { geometry, seeds, base };
  }, []);

  useEffect(() => () => geometry.dispose(), [geometry]);

  const color = useMemo(() => new Color("#d6c49e"), []);

  useFrame(({ clock, camera, size }) => {
    const points = pointsRef.current;
    if (!points) return;

    const state = productJourneyState;
    const opacity = state.canvasVisible
      ? Math.min(maxOpacity, state.particlesOpacity)
      : 0;
    points.visible = opacity > 0.01;

    if (!points.visible) return;

    const mat = points.material as { opacity?: number };
    if (mat) mat.opacity = opacity;

    const dist = camera.position.z;
    const vFov = 35 * (Math.PI / 180);
    const halfH = Math.tan(vFov / 2) * dist;
    const halfW = halfH * (size.width / Math.max(1, size.height));

    points.position.x = (state.x - 0.5) * 2 * halfW;
    points.position.y = (0.5 - state.y) * 2 * halfH - 0.35 * state.scale;
    points.position.z = -0.05;

    const t = clock.elapsedTime;
    const arr = points.geometry.attributes.position.array as Float32Array;
    for (let i = 0; i < COUNT; i++) {
      const idx = i * 3;
      arr[idx + 1] = base[idx + 1] + Math.sin(t * 0.35 + seeds[i]) * 0.045;
      arr[idx] = base[idx] + Math.cos(t * 0.22 + seeds[i]) * 0.02;
    }
    points.geometry.attributes.position.needsUpdate = true;
  });

  return (
    <points ref={pointsRef} geometry={geometry}>
      <pointsMaterial
        size={0.028}
        color={color}
        transparent
        opacity={0}
        depthWrite={false}
        sizeAttenuation
      />
    </points>
  );
}
