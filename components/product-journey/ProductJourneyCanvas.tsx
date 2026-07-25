"use client";

import { Canvas, useFrame, useThree } from "@react-three/fiber";
import {
  Suspense,
  useEffect,
  useMemo,
  useRef,
  useSyncExternalStore,
  type RefObject,
} from "react";
import type { Group } from "three";

import {
  getPreferredDpr,
  prefersReducedData,
} from "@/lib/performance/device";
import { PRODUCT_JOURNEY } from "@/lib/product-journey/constants";
import {
  applyJourneyHostBounds,
  computeJourneyHostBounds,
  fullViewportBounds,
} from "@/lib/product-journey/compositor-bounds";
import {
  bindJourneyInvalidate,
  requestJourneyRender,
  setJourneyRenderEnabled,
} from "@/lib/product-journey/render-scheduler";
import {
  productJourneyState,
  subscribeProductJourney,
} from "@/lib/product-journey/store";
import { isoIs } from "@/lib/diagnostics/iso";

import { JourneyContactShadows } from "./JourneyContactShadows";
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

  useFrame(({ invalidate }) => {
    const light = keyRef.current;
    if (!light) return;
    const targetX = (productJourneyState.x - 0.5) * 3.2;
    const delta = targetX - light.position.x;
    if (Math.abs(delta) < 1e-4) return;
    light.position.x += delta * 0.08;
    if (Math.abs(targetX - light.position.x) > 1e-3) {
      invalidate();
    }
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
  const viewportDimsRef = useRef<{
    width: number;
    height: number;
    z: number;
    halfH: number;
    halfW: number;
  } | null>(null);
  const lastPoseRef = useRef({ x: Number.NaN, y: Number.NaN, scale: Number.NaN });

  useFrame(({ camera, size }) => {
    const group = ref.current;
    if (!group) return;
    const state = productJourneyState;
    const visible =
      state.canvasVisible && state.revealed && state.shadowOpacity > 0.05;
    group.visible = visible;
    if (!visible) return;

    let dims = viewportDimsRef.current;
    if (
      !dims ||
      dims.width !== size.width ||
      dims.height !== size.height ||
      dims.z !== camera.position.z
    ) {
      const dist = camera.position.z;
      const vFov = 35 * (Math.PI / 180);
      const halfH = Math.tan(vFov / 2) * dist;
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

    const nextX = (state.x - 0.5) * 2 * dims.halfW;
    const nextY = (0.5 - state.y) * 2 * dims.halfH - 0.52 * state.scale;
    const nextScale = 0.85 + state.scale * 0.2;
    const last = lastPoseRef.current;

    if (
      last.x === nextX &&
      last.y === nextY &&
      last.scale === nextScale
    ) {
      return;
    }

    last.x = nextX;
    last.y = nextY;
    last.scale = nextScale;
    group.position.x = nextX;
    group.position.y = nextY;
    group.scale.setScalar(nextScale);
  });

  return (
    <group ref={ref}>
      {isoIs("shadows") ? null : (
        <JourneyContactShadows resolution={resolution} />
      )}
    </group>
  );
}

/**
 * Demand-mode WebGL: invalidate at most once per frame when the journey store
 * reports a visual change. Avoids duplicate renders from multi-fire scrub ticks.
 */
function JourneyFrameGate() {
  const setFrameloop = useThree((s) => s.setFrameloop);
  const invalidate = useThree((s) => s.invalidate);

  useEffect(() => {
    bindJourneyInvalidate(() => {
      invalidate();
    });

    const sync = () => {
      const shouldPaint =
        productJourneyState.canvasVisible &&
        document.visibilityState === "visible";
      setJourneyRenderEnabled(shouldPaint);
      if (!shouldPaint) {
        setFrameloop("never");
        return;
      }
      setFrameloop("demand");
      requestJourneyRender();
    };

    sync();
    const unsub = subscribeProductJourney(sync);
    document.addEventListener("visibilitychange", sync);
    return () => {
      unsub();
      document.removeEventListener("visibilitychange", sync);
      bindJourneyInvalidate(null);
      setJourneyRenderEnabled(false);
      setFrameloop("never");
    };
  }, [setFrameloop, invalidate]);

  return null;
}

/**
 * Keep the fixed host clipped to the bag footprint so Safari composites a
 * small layer. Inner viewport stays full window size — projection unchanged.
 */
function useJourneyCompositorBounds(
  hostRef: RefObject<HTMLDivElement | null>,
  viewportRef: RefObject<HTMLDivElement | null>,
  active: boolean,
) {
  useEffect(() => {
    if (!active) return;

    let raf = 0;
    const sync = () => {
      raf = 0;
      const host = hostRef.current;
      const viewport = viewportRef.current;
      if (!host || !viewport) return;

      const bounds = computeJourneyHostBounds() ?? fullViewportBounds();
      applyJourneyHostBounds(host, viewport, bounds);
    };

    const schedule = () => {
      if (raf) return;
      raf = requestAnimationFrame(sync);
    };

    sync();
    const unsub = subscribeProductJourney(schedule);
    window.addEventListener("resize", schedule, { passive: true });
    return () => {
      unsub();
      window.removeEventListener("resize", schedule);
      if (raf) cancelAnimationFrame(raf);
    };
  }, [hostRef, viewportRef, active]);
}

type ProductJourneyCanvasProps = {
  active: boolean;
};

export function ProductJourneyCanvas({ active }: ProductJourneyCanvasProps) {
  const canvasHostRef = useRef<HTMLDivElement>(null);
  const viewportRef = useRef<HTMLDivElement>(null);
  const hitRef = useRef<HTMLDivElement>(null);
  useJourneyInteraction(hitRef, active);
  useJourneyCompositorBounds(canvasHostRef, viewportRef, active);

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
    const root = document.documentElement;
    root.classList.add("product-journey-active");
    root.dataset.journeyCanvas = "visible";
    return () => {
      root.classList.remove("product-journey-active");
      delete root.dataset.journeyCanvas;
    };
  }, [active]);

  if (!active) return null;

  return (
    <>
      <div
        ref={canvasHostRef}
        data-product-journey="canvas"
        className="product-journey-canvas pointer-events-none fixed left-0 top-0 z-[30] overflow-hidden"
        style={{ width: "100vw", height: "100vh" }}
        aria-hidden="true"
      >
        {/* Full-viewport WebGL child — positioned so bag math stays viewport-space */}
        <div
          ref={viewportRef}
          className="product-journey-viewport absolute left-0 top-0"
          style={{ width: "100vw", height: "100vh" }}
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
        </div>
      </div>

      {/* Hit target stays full-viewport fixed — not clipped with the canvas host */}
      <div
        ref={hitRef}
        data-product-journey="interaction-hit"
        className="pointer-events-none fixed left-0 top-0 z-[31] touch-none"
        style={{ width: 0, height: 0 }}
        aria-hidden="true"
      />
    </>
  );
}
