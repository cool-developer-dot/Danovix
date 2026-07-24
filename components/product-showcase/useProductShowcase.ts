"use client";

import { useLayoutEffect, useRef, type RefObject } from "react";

import {
  SHOWCASE_ANIMATION,
  SHOWCASE_CURSOR,
} from "@/lib/product-showcase/constants";
import type { ShowcaseFrame } from "@/lib/product-showcase/types";

import { preloadShowcaseImages } from "./preload-showcase-images";

type Gsap = typeof import("gsap")["default"];

type PlaybackTimeline = {
  kill: () => void;
  pause: () => void;
  play: () => void;
};

const clamp = (value: number, min: number, max: number) =>
  Math.min(max, Math.max(min, value));

type UseProductShowcaseOptions = {
  frames: readonly ShowcaseFrame[];
  productKey: string;
  layerRefs: RefObject<(HTMLDivElement | null)[]>;
  tiltRef: RefObject<HTMLDivElement | null>;
  pointerAreaRef: RefObject<HTMLDivElement | null>;
  onReady?: () => void;
};

function buildRotationTimeline(
  gsap: Gsap,
  layers: HTMLElement[],
  config: typeof SHOWCASE_ANIMATION,
) {
  const {
    frameHold,
    crossfade,
    pauseFrameIndex,
    pauseExtraHold,
    scalePeak,
    crossfadeEase,
  } = config;

  gsap.set(layers, { opacity: 0, scale: 1, force3D: true });
  gsap.set(layers[0], { opacity: 1, scale: 1 });

  const tl = gsap.timeline({ repeat: -1, paused: true });
  const count = layers.length;

  for (let i = 0; i < count; i++) {
    const next = (i + 1) % count;
    const current = layers[i];
    const incoming = layers[next];
    const hold =
      i === pauseFrameIndex ? frameHold + pauseExtraHold : frameHold;

    tl.to({}, { duration: hold });

    tl.to(
      current,
      {
        opacity: 0,
        scale: 1,
        duration: crossfade,
        ease: crossfadeEase,
        force3D: true,
      },
      ">",
    );

    tl.fromTo(
      incoming,
      { opacity: 0, scale: scalePeak, force3D: true },
      {
        opacity: 1,
        scale: 1,
        duration: crossfade,
        ease: crossfadeEase,
        force3D: true,
      },
      "<",
    );
  }

  return tl;
}

/**
 * GSAP crossfade rotation across PNG frames + desktop cursor tilt.
 * Preloads every frame before the timeline starts — no flicker, no blank frames.
 */
export function useProductShowcase({
  frames,
  productKey,
  layerRefs,
  tiltRef,
  pointerAreaRef,
  onReady,
}: UseProductShowcaseOptions) {
  const timelineRef = useRef<PlaybackTimeline | null>(null);

  useLayoutEffect(() => {
    const tiltEl = tiltRef.current;
    const area = pointerAreaRef.current;
    const layers = layerRefs.current?.filter(Boolean) as HTMLElement[] | undefined;

    if (!tiltEl || !layers?.length) return;

    let cancelled = false;
    const cleanups: Array<() => void> = [];

    const run = async () => {
      const { default: gsap } = await import("gsap");
      if (cancelled) return;

      timelineRef.current?.kill();
      gsap.killTweensOf([...layers, tiltEl]);

      try {
        await preloadShowcaseImages(frames.map((f) => f.src));
      } catch {
        /* Still render first frame if a preload fails */
      }
      if (cancelled) return;

      gsap.set(tiltEl, { rotationX: 0, rotationY: 0, force3D: true });
      gsap.set(layers, { opacity: 0, scale: 1, force3D: true });
      gsap.set(layers[0], { opacity: 1, scale: 1 });

      onReady?.();

      const prefersReducedMotion = window.matchMedia(
        "(prefers-reduced-motion: reduce)",
      ).matches;

      if (prefersReducedMotion) return;

      /* Single editorial frame — no rotation loop */
      const canRotate = layers.length > 1;
      let timeline: PlaybackTimeline | null = null;

      if (canRotate) {
        timeline = buildRotationTimeline(gsap, layers, SHOWCASE_ANIMATION);
        timelineRef.current = timeline;
        timeline.play();
      }

      const isDesktop = window.matchMedia("(min-width: 1024px)").matches;
      const hasFinePointer = window.matchMedia("(pointer: fine)").matches;

      if (!area || !isDesktop || !hasFinePointer) return;

      const { maxYaw, maxPitch, followDuration, followEase, returnDuration, returnEase } =
        SHOWCASE_CURSOR;

      const yawTo = gsap.quickTo(tiltEl, "rotationY", {
        duration: followDuration,
        ease: followEase,
      });
      const pitchTo = gsap.quickTo(tiltEl, "rotationX", {
        duration: followDuration,
        ease: followEase,
      });

      let raf: number | null = null;
      let px = 0;
      let py = 0;
      let hovering = false;

      const applyTilt = () => {
        raf = null;
        if (!hovering) return;
        yawTo(px * maxYaw * (canRotate ? 1 : 0.55));
        pitchTo(-py * maxPitch * (canRotate ? 1 : 0.55));
      };

      const onMove = (event: PointerEvent) => {
        if (event.pointerType && event.pointerType !== "mouse") return;
        const rect = area.getBoundingClientRect();
        px = clamp(((event.clientX - rect.left) / rect.width - 0.5) * 2, -1, 1);
        py = clamp(((event.clientY - rect.top) / rect.height - 0.5) * 2, -1, 1);
        if (raf === null) raf = window.requestAnimationFrame(applyTilt);
      };

      const onEnter = (event: PointerEvent) => {
        if (event.pointerType && event.pointerType !== "mouse") return;
        hovering = true;
        timeline?.pause();
      };

      const onLeave = (event: PointerEvent) => {
        if (event.pointerType && event.pointerType !== "mouse") return;
        hovering = false;
        gsap.to(tiltEl, {
          rotationX: 0,
          rotationY: 0,
          duration: returnDuration,
          ease: returnEase,
          force3D: true,
          onComplete: () => {
            timeline?.play();
          },
        });
      };

      area.addEventListener("pointerenter", onEnter);
      area.addEventListener("pointerleave", onLeave);
      area.addEventListener("pointermove", onMove);

      cleanups.push(() => {
        area.removeEventListener("pointerenter", onEnter);
        area.removeEventListener("pointerleave", onLeave);
        area.removeEventListener("pointermove", onMove);
        if (raf !== null) window.cancelAnimationFrame(raf);
      });
    };

    void run();

    return () => {
      cancelled = true;
      timelineRef.current?.kill();
      timelineRef.current = null;
      cleanups.forEach((fn) => fn());
    };
  }, [frames, productKey, layerRefs, tiltRef, pointerAreaRef, onReady]);
}
