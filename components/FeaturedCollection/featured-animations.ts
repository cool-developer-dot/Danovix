"use client";

import { useLayoutEffect, type RefObject } from "react";

import {
  FEATURED_CAMERA,
  FEATURED_ENTRANCE,
} from "@/lib/featured-collection/constants";

type FeaturedElements = {
  bg: HTMLElement | null;
  noise: HTMLElement | null;
  spotlight: HTMLElement | null;
  label: HTMLElement | null;
  headingLines: HTMLElement[];
  description: HTMLElement | null;
  card: HTMLElement | null;
  filmGate: HTMLElement | null;
  camera: HTMLElement | null;
  vignette: HTMLElement | null;
  lens: HTMLElement | null;
  imageReveal: HTMLElement | null;
  cta: HTMLElement | null;
  nav: HTMLElement | null;
};

function collectElements(root: HTMLElement): FeaturedElements {
  return {
    bg: root.querySelector('[data-featured="bg"]'),
    noise: root.querySelector('[data-featured="noise"]'),
    spotlight: root.querySelector('[data-featured="spotlight"]'),
    label: root.querySelector('[data-featured="label"]'),
    headingLines: Array.from(
      root.querySelectorAll<HTMLElement>('[data-featured="heading-line"]'),
    ),
    description: root.querySelector('[data-featured="description"]'),
    card: root.querySelector('[data-featured="card"]'),
    filmGate: root.querySelector('[data-featured="film-gate"]'),
    camera: root.querySelector('[data-featured="camera"]'),
    vignette: root.querySelector('[data-featured="vignette"]'),
    lens: root.querySelector('[data-featured="lens"]'),
    imageReveal: root.querySelector('[data-featured="image-reveal"]'),
    cta: root.querySelector('[data-featured="cta"]'),
    nav: root.querySelector('[data-featured="nav"]'),
  };
}

type Gsap = typeof import("gsap")["default"];

/** Slow dolly-in: camera advances toward the product, then breathes. */
export function playFeaturedCameraDolly(
  gsap: Gsap,
  camera: HTMLElement,
  options?: {
    vignette?: HTMLElement | null;
    lens?: HTMLElement | null;
    duration?: number;
    ease?: string;
    withBreathe?: boolean;
  },
) {
  const {
    startScale,
    startZ,
    startBlur,
    endScale,
    endZ,
    endBlur,
    approachDuration,
    approachEase,
    breatheScale,
    breatheDuration,
    breatheEase,
  } = FEATURED_CAMERA;

  const duration = options?.duration ?? approachDuration;
  const ease = options?.ease ?? approachEase;
  const withBreathe = options?.withBreathe ?? true;

  gsap.killTweensOf(camera);
  if (options?.vignette) gsap.killTweensOf(options.vignette);
  if (options?.lens) gsap.killTweensOf(options.lens);

  gsap.set(camera, {
    scale: startScale,
    z: startZ,
    filter: `blur(${startBlur}px)`,
    transformOrigin: "50% 45%",
    force3D: true,
  });

  if (options?.vignette) {
    gsap.set(options.vignette, { opacity: 0.92 });
  }
  if (options?.lens) {
    gsap.set(options.lens, { opacity: 0.35, scale: 1.08 });
  }

  const tl = gsap.timeline({ defaults: { force3D: true } });

  tl.to(
    camera,
    {
      scale: endScale,
      z: endZ,
      filter: `blur(${endBlur}px)`,
      duration,
      ease,
    },
    0,
  );

  if (options?.vignette) {
    tl.to(
      options.vignette,
      { opacity: 0.55, duration: duration * 0.85, ease: "power2.out" },
      0.15,
    );
  }

  if (options?.lens) {
    tl.to(
      options.lens,
      {
        opacity: 0.18,
        scale: 1,
        duration: duration * 0.9,
        ease: "power2.out",
      },
      0,
    );
  }

  if (withBreathe) {
    tl.to(
      camera,
      {
        scale: breatheScale,
        duration: breatheDuration,
        ease: breatheEase,
        yoyo: true,
        repeat: -1,
      },
      duration * 0.72,
    );
  }

  return tl;
}

export function useFeaturedEntrance(
  rootRef: RefObject<HTMLElement | null>,
  enabled = true,
) {
  useLayoutEffect(() => {
    if (!enabled) return;

    const root = rootRef.current;
    if (!root) return;

    const elements = collectElements(root);
    const { y } = FEATURED_ENTRANCE;
    const concealed = `translate3d(0, ${y}px, 0)`;

    const fadeTargets = [
      elements.label,
      elements.description,
      elements.card,
      elements.cta,
      elements.nav,
      ...elements.headingLines,
    ];

    for (const el of fadeTargets) {
      if (!el) continue;
      el.style.opacity = "0";
      el.style.transform = concealed;
    }

    if (elements.filmGate) {
      elements.filmGate.style.opacity = "0";
    }

    let ctx: { revert: () => void } | null = null;
    let cancelled = false;

    const run = async () => {
      const { gsap } = await import("@/lib/gsap/load").then((mod) =>
        mod.loadGsapWithScrollTrigger(),
      );
      if (cancelled || !rootRef.current) return;

      const prefersReducedMotion = window.matchMedia(
        "(prefers-reduced-motion: reduce)",
      ).matches;

      const revealStatic = () => {
        for (const el of [elements.bg, elements.noise, elements.spotlight]) {
          if (el) el.style.opacity = "1";
        }
        for (const el of fadeTargets) {
          if (!el) continue;
          el.style.opacity = "1";
          el.style.transform = "none";
        }
        if (elements.filmGate) elements.filmGate.style.opacity = "1";
        if (elements.camera) {
          elements.camera.style.transform = "none";
          elements.camera.style.filter = "none";
          elements.camera.style.opacity = "1";
        }
        if (elements.vignette) elements.vignette.style.opacity = "0.55";
        if (elements.lens) elements.lens.style.opacity = "0.18";
      };

      if (prefersReducedMotion) {
        revealStatic();
        return;
      }

      const { duration, stagger, ease } = FEATURED_ENTRANCE;
      const fadeUp = { opacity: 1, y: 0, duration, ease, force3D: true };

      ctx = gsap.context(() => {
        const atmosphere = gsap.timeline({
          scrollTrigger: { trigger: root, start: "top 88%", once: true },
        });
        for (const [i, el] of [
          elements.bg,
          elements.noise,
          elements.spotlight,
        ].entries()) {
          if (!el) continue;
          atmosphere.to(
            el,
            { opacity: 1, duration: 1, ease: "power4.out" },
            i * 0.08,
          );
        }

        const tl = gsap.timeline({
          scrollTrigger: { trigger: root, start: "top 76%", once: true },
        });

        let at = 0;

        if (elements.label) {
          gsap.set(elements.label, { opacity: 0, y, force3D: true });
          tl.to(elements.label, fadeUp, at);
          at += stagger;
        }

        if (elements.headingLines.length) {
          gsap.set(elements.headingLines, { opacity: 0, y, force3D: true });
          tl.to(elements.headingLines, { ...fadeUp, stagger }, at);
          at += stagger * elements.headingLines.length;
        }

        if (elements.description) {
          gsap.set(elements.description, { opacity: 0, y, force3D: true });
          tl.to(elements.description, fadeUp, at);
          at += stagger;
        }

        if (elements.card) {
          gsap.set(elements.card, { opacity: 0, y, force3D: true });
          tl.to(elements.card, { ...fadeUp, duration: duration + 0.15 }, at);
          at += stagger * 1.2;
        }

        /* ── Film gate opens, camera dollies in ── */
        if (elements.filmGate) {
          gsap.set(elements.filmGate, {
            opacity: 0,
            scale: 0.97,
            force3D: true,
          });
          tl.to(
            elements.filmGate,
            {
              opacity: 1,
              scale: 1,
              duration: 1.15,
              ease: "power3.out",
              force3D: true,
            },
            at,
          );
        }

        if (elements.camera) {
          tl.add(() => {
            playFeaturedCameraDolly(gsap, elements.camera!, {
              vignette: elements.vignette,
              lens: elements.lens,
              withBreathe: true,
            });
          }, at + 0.12);
          at += 0.55;
        }

        if (elements.cta) {
          gsap.set(elements.cta, { opacity: 0, y, force3D: true });
          tl.to(elements.cta, { ...fadeUp, clearProps: "transform" }, at + 0.35);
          at += stagger;
        }

        if (elements.nav) {
          gsap.set(elements.nav, { opacity: 0, y, force3D: true });
          tl.to(elements.nav, fadeUp, at + 0.45);
        }
      }, root);
    };

    void run();

    return () => {
      cancelled = true;
      ctx?.revert();
    };
  }, [rootRef, enabled]);
}
