"use client";

import { ContactShadows } from "@react-three/drei";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { Suspense, useEffect, useMemo, useRef, useSyncExternalStore } from "react";
import type { Group } from "three";

import {
  getPreferredDpr,
  prefersReducedData,
} from "@/lib/performance/device";
import { PRODUCT_JOURNEY } from "@/lib/product-journey/constants";
import {
  productJourneyState,
  subscribeProductJourney,
} from "@/lib/product-journey/store";

import { JourneyHandbag } from "./JourneyHandbag";
import { JourneyParticles } from "./JourneyParticles";
import { useJourneyInteraction } from "./useJourneyInteraction";

function useIsClient() {
  return useSyncExternalStore(
    () => () => {},
    () => true,
    () => false,
  );
}

function JourneyLights() {
  const keyRef = useRef<Group>(null);

  useFrame(() => {
    const light = keyRef.current;
    if (!light) return;
    const targetX = (productJourneyState.x - 0.5) * 3.2;
    light.position.x += (targetX - light.position.x) * 0.08;
  });

  return (
    <>
      <ambientLight intensity={0.55} />
      <group ref={keyRef} position={[1.4, 2.2, 2.4]}>
        <directionalLight intensity={1.45} color="#fff4e5" />
      </group>
      <directionalLight
        position={[-2.2, 1.4, 1.2]}
        intensity={0.4}
        color="#c9b8a0"
      />
      <pointLight
        position={[0.6, 1.8, 1.5]}
        intensity={0.65}
        color="#d6c49e"
        distance={8}
      />
    </>
  );
}

function JourneyShadow({ resolution }: { resolution: number }) {
  const ref = useRef<Group>(null);

  useFrame(({ camera, size }) => {
    const group = ref.current;
    if (!group) return;
    const state = productJourneyState;
    group.visible =
      state.canvasVisible && state.revealed && state.shadowOpacity > 0.05;

    const dist = camera.position.z;
    const vFov = 35 * (Math.PI / 180);
    const halfH = Math.tan(vFov / 2) * dist;
    const halfW = halfH * (size.width / Math.max(1, size.height));

    group.position.x = (state.x - 0.5) * 2 * halfW;
    group.position.y = (0.5 - state.y) * 2 * halfH - 0.52 * state.scale;
    group.scale.setScalar(0.85 + state.scale * 0.2);
  });

  return (
    <group ref={ref}>
      <ContactShadows
        opacity={0.5}
        scale={3.5}
        blur={2.6}
        far={2.5}
        resolution={resolution}
        color="#000000"
      />
    </group>
  );
}

/**
 * Keep the WebGL loop alive only while the journey canvas should paint.
 * GSAP mutates the store outside React — this gate reads store + page visibility.
 */
function JourneyFrameGate() {
  const setFrameloop = useThree((s) => s.setFrameloop);
  const invalidate = useThree((s) => s.invalidate);

  useEffect(() => {
    const sync = () => {
      const shouldRun =
        productJourneyState.canvasVisible &&
        document.visibilityState === "visible";
      setFrameloop(shouldRun ? "always" : "never");
      if (shouldRun) invalidate();
    };

    sync();
    const unsub = subscribeProductJourney(sync);
    document.addEventListener("visibilitychange", sync);
    return () => {
      unsub();
      document.removeEventListener("visibilitychange", sync);
      setFrameloop("never");
    };
  }, [setFrameloop, invalidate]);

  return null;
}

type ProductJourneyCanvasProps = {
  active: boolean;
};

export function ProductJourneyCanvas({ active }: ProductJourneyCanvasProps) {
  const canvasHostRef = useRef<HTMLDivElement>(null);
  const hitRef = useRef<HTMLDivElement>(null);
  useJourneyInteraction(hitRef, active);

  const dpr = useMemo(() => getPreferredDpr(1.5), []);
  const shadowResolution = useMemo(() => {
    if (typeof window === "undefined") return 128;
    const reduced = prefersReducedData();
    const isMobile = window.innerWidth < 768;
    const isCoarse = window.matchMedia("(pointer: coarse)").matches;
    if (reduced || (isMobile && isCoarse)) return 64;
    if (isMobile) return 96;
    return 160;
  }, []);

  const mounted = useIsClient();

  useEffect(() => {
    if (!active) return;
    document.documentElement.classList.add("product-journey-active");
    return () => {
      document.documentElement.classList.remove("product-journey-active");
    };
  }, [active]);

  if (!active) return null;

  return (
    <div
      ref={canvasHostRef}
      data-product-journey="canvas"
      className="product-journey-canvas pointer-events-none fixed inset-0 z-[30] transition-[opacity,visibility] duration-500 ease-out [clip-path:none]"
      aria-hidden="true"
      style={{ clipPath: "none", WebkitClipPath: "none" }}
    >
      {mounted && (
        <Canvas
          className="h-full w-full"
          dpr={dpr}
          frameloop="never"
          gl={{
            antialias: true,
            alpha: true,
            powerPreference: "high-performance",
            stencil: false,
            depth: true,
          }}
          camera={{ position: [0, 0, 5], fov: 35, near: 0.1, far: 40 }}
          style={{ pointerEvents: "none" }}
          onCreated={({ gl }) => {
            gl.setClearColor(0x000000, 0);
          }}
        >
          <JourneyFrameGate />
          <Suspense fallback={null}>
            <JourneyLights />
            <JourneyHandbag />
            <JourneyParticles
              maxOpacity={PRODUCT_JOURNEY.particles.maxOpacity}
            />
            <JourneyShadow resolution={shadowResolution} />
          </Suspense>
        </Canvas>
      )}

      {/* Compact grab zone around the bag only — editorial text stays selectable */}
      <div
        ref={hitRef}
        data-product-journey="interaction-hit"
        className="pointer-events-none absolute left-0 top-0 z-[31] touch-none will-change-transform"
        style={{ width: 0, height: 0 }}
        aria-hidden="true"
      />
    </div>
  );
}
