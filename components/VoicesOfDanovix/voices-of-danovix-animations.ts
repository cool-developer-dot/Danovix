"use client";

import { useLayoutEffect, type RefObject } from "react";

import { VOICES_ENTRANCE } from "@/lib/voices-of-danovix/constants";
import {
  addCurtainReveal,
  clipRevealVars,
  concealWithCurtain,
  labelRevealVars,
  perspectiveRevealVars,
  setClipConcealed,
  setLabelConcealed,
  setPerspectiveConcealed,
} from "@/lib/animations/cinematic-reveal";

type VoicesElements = {
  stage: HTMLElement | null;
  bg: HTMLElement | null;
  noise: HTMLElement | null;
  spotlight: HTMLElement | null;
  ambient: HTMLElement | null;
  label: HTMLElement | null;
  headingLines: HTMLElement[];
  description: HTMLElement | null;
  carousel: HTMLElement | null;
  nav: HTMLElement | null;
  trustItems: HTMLElement[];
};

function collectElements(root: HTMLElement): VoicesElements {
  return {
    stage: root.querySelector('[data-voices="stage"]'),
    bg: root.querySelector('[data-voices="bg"]'),
    noise: root.querySelector('[data-voices="noise"]'),
    spotlight: root.querySelector('[data-voices="spotlight"]'),
    ambient: root.querySelector('[data-voices="ambient"]'),
    label: root.querySelector('[data-voices="label"]'),
    headingLines: Array.from(
      root.querySelectorAll<HTMLElement>('[data-voices="heading-line"]'),
    ),
    description: root.querySelector('[data-voices="description"]'),
    carousel: root.querySelector('[data-voices="carousel"]'),
    nav: root.querySelector('[data-voices="nav"]'),
    trustItems: Array.from(
      root.querySelectorAll<HTMLElement>('[data-voices="trust-item"]'),
    ),
  };
}

function concealTargets(elements: VoicesElements, y: number) {
  const concealed = `translate3d(0, ${y}px, 0)`;
  const fadeTargets = [
    elements.label,
    elements.description,
    elements.carousel,
    elements.nav,
    ...elements.trustItems,
  ];

  for (const el of fadeTargets) {
    if (!el) continue;
    el.style.opacity = "0";
    el.style.transform = concealed;
  }

  for (const line of elements.headingLines) {
    line.style.opacity = "1";
    line.style.transform = "translate3d(0, 110%, 0)";
  }
}

function revealStatic(elements: VoicesElements) {
  if (elements.stage) {
    elements.stage.style.clipPath = "none";
    elements.stage.style.removeProperty("-webkit-clip-path");
  }

  for (const el of [
    elements.bg,
    elements.noise,
    elements.spotlight,
    elements.ambient,
  ]) {
    if (el) el.style.opacity = "1";
  }

  const all = [
    elements.label,
    elements.description,
    elements.carousel,
    elements.nav,
    ...elements.headingLines,
    ...elements.trustItems,
  ];

  for (const el of all) {
    if (!el) continue;
    el.style.opacity = "1";
    el.style.transform = "none";
  }
}

export function useVoicesOfDanovixAnimations(
  rootRef: RefObject<HTMLElement | null>,
  enabled = true,
) {
  useLayoutEffect(() => {
    if (!enabled) return;

    const root = rootRef.current;
    if (!root) return;

    const elements = collectElements(root);
    const { y } = VOICES_ENTRANCE;
    concealTargets(elements, y);

    if (elements.stage) concealWithCurtain(elements.stage);

    if (elements.bg) elements.bg.style.opacity = "0";
    if (elements.noise) elements.noise.style.opacity = "0";
    if (elements.spotlight) elements.spotlight.style.opacity = "0";
    if (elements.ambient) elements.ambient.style.opacity = "0";

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

      if (prefersReducedMotion) {
        revealStatic(elements);
        return;
      }

      const { duration, stagger, ease, clipY, bookRotateY, trustScale } =
        VOICES_ENTRANCE;
      const fadeUp = { opacity: 1, y: 0, duration, ease, force3D: true };

      ctx = gsap.context(() => {
        const atmosphere = gsap.timeline({
          scrollTrigger: {
            trigger: root,
            start: "top 88%",
            once: true,
          },
        });

        if (elements.stage) {
          addCurtainReveal(gsap, atmosphere, {
            stage: elements.stage,
            spotlight: elements.spotlight,
          });
        }

        for (const [i, el] of [
          elements.bg,
          elements.noise,
          elements.ambient,
        ].entries()) {
          if (!el) continue;
          atmosphere.to(
            el,
            { opacity: 1, duration: 1.05, ease: "power4.out" },
            0.14 + i * 0.08,
          );
        }

        const entrance = gsap.timeline({
          scrollTrigger: {
            trigger: root,
            start: "top 74%",
            once: true,
          },
        });

        let at = 0.1;

        if (elements.label) {
          setLabelConcealed(gsap, elements.label, y);
          entrance.to(elements.label, labelRevealVars(duration, ease), at);
          at += stagger;
        }

        if (elements.headingLines.length) {
          setClipConcealed(gsap, elements.headingLines, clipY);
          entrance.to(
            elements.headingLines,
            clipRevealVars({ y: clipY, duration, ease, stagger }),
            at,
          );
          at += stagger * elements.headingLines.length;
        }

        if (elements.description) {
          gsap.set(elements.description, { opacity: 0, y, force3D: true });
          entrance.to(elements.description, fadeUp, at);
          at += stagger;
        }

        if (elements.carousel) {
          setPerspectiveConcealed(gsap, elements.carousel, {
            rotateY: bookRotateY,
            scale: 0.78,
            y: y + 32,
            blur: 18,
          });
          entrance.to(
            elements.carousel,
            perspectiveRevealVars({
              rotateY: bookRotateY,
              scale: 0.78,
              duration: duration + 0.35,
            }),
            at,
          );
          at += stagger * 2;
        }

        if (elements.nav) {
          gsap.set(elements.nav, { opacity: 0, y: y * 0.6, force3D: true });
          entrance.to(elements.nav, fadeUp, at);
          at += stagger;
        }

        if (elements.trustItems.length) {
          gsap.set(elements.trustItems, {
            opacity: 0,
            scale: trustScale,
            y: 16,
            force3D: true,
          });
          entrance.to(
            elements.trustItems,
            {
              opacity: 1,
              scale: 1,
              y: 0,
              duration: duration + 0.1,
              stagger: stagger * 0.7,
              ease,
              force3D: true,
            },
            at,
          );
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
