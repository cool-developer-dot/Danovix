"use client";

import { useCallback, useEffect, useLayoutEffect, useRef, useState } from "react";

import {
  FEATURED_CAMERA,
  FEATURED_PRODUCTS,
  FEATURED_TRANSITION,
} from "@/lib/featured-collection/constants";

import {
  playFeaturedCameraDolly,
  useFeaturedEntrance,
} from "./featured-animations";
import { FeaturedCollectionAmbient } from "./FeaturedCollectionAmbient";
import { FeaturedCollectionCard } from "./FeaturedCollectionCard";
import { FeaturedCollectionHeader } from "./FeaturedCollectionHeader";
import { FeaturedCollectionNav } from "./FeaturedCollectionNav";
import { featuredInner, featuredRoot, featuredStage } from "./featured.styles";

type Gsap = typeof import("gsap")["default"];

const TOTAL = FEATURED_PRODUCTS.length;

export function FeaturedCollection() {
  const sectionRef = useRef<HTMLElement>(null);
  const infoRef = useRef<HTMLDivElement>(null);

  const gsapRef = useRef<Gsap | null>(null);
  const animatingRef = useRef(false);
  const directionRef = useRef(1);
  const firstRenderRef = useRef(true);
  const infoTweenRef = useRef<{ kill: () => void } | null>(null);
  const cameraTweenRef = useRef<{ kill: () => void } | null>(null);

  const [activeIndex, setActiveIndex] = useState(0);
  const active = FEATURED_PRODUCTS[activeIndex];

  useFeaturedEntrance(sectionRef);

  useEffect(() => {
    let mounted = true;
    const infoEl = infoRef.current;
    void import("gsap").then((mod) => {
      if (mounted) gsapRef.current = mod.default;
    });
    return () => {
      mounted = false;
      infoTweenRef.current?.kill();
      infoTweenRef.current = null;
      cameraTweenRef.current?.kill();
      cameraTweenRef.current = null;
      const gsap = gsapRef.current;
      if (gsap && infoEl) gsap.killTweensOf(infoEl);
    };
  }, []);

  const change = useCallback(
    (direction: number) => {
      if (animatingRef.current) return;

      const gsap = gsapRef.current;
      const info = infoRef.current;
      const next = (activeIndex + direction + TOTAL) % TOTAL;
      if (next === activeIndex) return;

      directionRef.current = direction;

      const commit = () => {
        setActiveIndex(next);
      };

      if (!gsap || !info) {
        commit();
        return;
      }

      animatingRef.current = true;
      const { outDuration, outEase, slide } = FEATURED_TRANSITION;
      const root = sectionRef.current;
      const camera = root?.querySelector<HTMLElement>('[data-featured="camera"]');
      const filmGate = root?.querySelector<HTMLElement>(
        '[data-featured="film-gate"]',
      );

      infoTweenRef.current?.kill();
      cameraTweenRef.current?.kill();

      const outTl = gsap.timeline({
        onComplete: commit,
      });

      outTl.to(
        info,
        {
          opacity: 0,
          x: -direction * slide,
          duration: outDuration,
          ease: outEase,
          force3D: true,
        },
        0,
      );

      if (camera) {
        outTl.to(
          camera,
          {
            scale: FEATURED_CAMERA.endScale * 1.06,
            opacity: 0.35,
            filter: "blur(6px)",
            duration: outDuration,
            ease: outEase,
            force3D: true,
          },
          0,
        );
      }

      if (filmGate) {
        outTl.to(
          filmGate,
          {
            opacity: 0.55,
            duration: outDuration,
            ease: outEase,
          },
          0,
        );
      }

      infoTweenRef.current = outTl;
    },
    [activeIndex],
  );

  useLayoutEffect(() => {
    if (firstRenderRef.current) {
      firstRenderRef.current = false;
      return;
    }

    const gsap = gsapRef.current;
    const info = infoRef.current;
    const root = sectionRef.current;
    if (!gsap || !info || !root) return;

    const { inDuration, inEase, slide } = FEATURED_TRANSITION;
    const camera = root.querySelector<HTMLElement>('[data-featured="camera"]');
    const vignette = root.querySelector<HTMLElement>(
      '[data-featured="vignette"]',
    );
    const lens = root.querySelector<HTMLElement>('[data-featured="lens"]');
    const filmGate = root.querySelector<HTMLElement>(
      '[data-featured="film-gate"]',
    );

    infoTweenRef.current?.kill();
    cameraTweenRef.current?.kill();

    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    infoTweenRef.current = gsap.fromTo(
      info,
      { opacity: 0, x: directionRef.current * slide },
      {
        opacity: 1,
        x: 0,
        duration: inDuration,
        ease: inEase,
        force3D: true,
        onComplete: () => {
          animatingRef.current = false;
          infoTweenRef.current = null;
        },
      },
    );

    if (filmGate) {
      gsap.fromTo(
        filmGate,
        { opacity: 0.55 },
        { opacity: 1, duration: inDuration, ease: inEase },
      );
    }

    if (camera && !prefersReducedMotion) {
      gsap.set(camera, { opacity: 1 });
      cameraTweenRef.current = playFeaturedCameraDolly(gsap, camera, {
        vignette,
        lens,
        duration: FEATURED_CAMERA.swapDuration,
        ease: FEATURED_CAMERA.swapEase,
        withBreathe: true,
      });
    } else if (camera) {
      gsap.set(camera, {
        opacity: 1,
        scale: FEATURED_CAMERA.endScale,
        filter: "none",
        z: 0,
      });
      animatingRef.current = false;
    }

    return () => {
      infoTweenRef.current?.kill();
      infoTweenRef.current = null;
      cameraTweenRef.current?.kill();
      cameraTweenRef.current = null;
    };
  }, [activeIndex]);

  const handlePrev = useCallback(() => change(-1), [change]);
  const handleNext = useCallback(() => change(1), [change]);

  return (
    <section
      ref={sectionRef}
      aria-labelledby="featured-collection-heading"
      aria-roledescription="carousel"
      className={featuredRoot}
    >
      <div className={featuredStage}>
        <FeaturedCollectionAmbient />

        <div className={featuredInner}>
          <FeaturedCollectionHeader />

          <FeaturedCollectionCard product={active} infoRef={infoRef} />

          <FeaturedCollectionNav
            current={activeIndex}
            total={TOTAL}
            onPrev={handlePrev}
            onNext={handleNext}
          />
        </div>
      </div>
    </section>
  );
}
