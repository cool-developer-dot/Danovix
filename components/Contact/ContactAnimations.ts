"use client";

import { useLayoutEffect, type RefObject } from "react";

import { CONTACT_ENTRANCE } from "@/lib/contact/constants";
import {
  addCurtainReveal,
  clipRevealVars,
  concealWithCurtain,
  labelRevealVars,
  setClipConcealed,
  setLabelConcealed,
} from "@/lib/animations/cinematic-reveal";

type ContactElements = {
  heroStage: HTMLElement | null;
  heroBg: HTMLElement | null;
  heroNoise: HTMLElement | null;
  heroSpotlight: HTMLElement | null;
  heroArch: HTMLElement | null;
  heroEyebrow: HTMLElement | null;
  heroWords: HTMLElement[];
  heroDescription: HTMLElement | null;
  heroCta: HTMLElement | null;
  heroScroll: HTMLElement | null;
  quickCards: HTMLElement[];
  helpHeader: HTMLElement | null;
  helpCards: HTMLElement[];
  formBlock: HTMLElement | null;
  aiBlock: HTMLElement | null;
  shoppingAiBlock: HTMLElement | null;
  meetBlock: HTMLElement | null;
  promiseLines: HTMLElement[];
  promiseSupporting: HTMLElement | null;
  faqHeader: HTMLElement | null;
  faqItems: HTMLElement[];
  quoteLines: HTMLElement[];
  quoteSupporting: HTMLElement | null;
  socialBlock: HTMLElement | null;
};

function collect(root: HTMLElement): ContactElements {
  return {
    heroStage: root.querySelector('[data-contact="hero-stage"]'),
    heroBg: root.querySelector('[data-contact="hero-bg"]'),
    heroNoise: root.querySelector('[data-contact="hero-noise"]'),
    heroSpotlight: root.querySelector('[data-contact="hero-spotlight"]'),
    heroArch: root.querySelector('[data-contact="hero-arch"]'),
    heroEyebrow: root.querySelector('[data-contact="hero-eyebrow"]'),
    heroWords: Array.from(
      root.querySelectorAll<HTMLElement>('[data-contact="hero-word"]'),
    ),
    heroDescription: root.querySelector('[data-contact="hero-description"]'),
    heroCta: root.querySelector('[data-contact="hero-cta"]'),
    heroScroll: root.querySelector('[data-contact="hero-scroll"]'),
    quickCards: Array.from(
      root.querySelectorAll<HTMLElement>('[data-contact="quick-card"]'),
    ),
    helpHeader: root.querySelector('[data-contact="help-header"]'),
    helpCards: Array.from(
      root.querySelectorAll<HTMLElement>('[data-contact="help-card"]'),
    ),
    formBlock: root.querySelector('[data-contact="form"]'),
    aiBlock: root.querySelector('[data-contact="ai"]'),
    shoppingAiBlock: root.querySelector('[data-contact="shopping-ai"]'),
    meetBlock: root.querySelector('[data-contact="meet"]'),
    promiseLines: Array.from(
      root.querySelectorAll<HTMLElement>('[data-contact="promise-line"]'),
    ),
    promiseSupporting: root.querySelector('[data-contact="promise-supporting"]'),
    faqHeader: root.querySelector('[data-contact="faq-header"]'),
    faqItems: Array.from(
      root.querySelectorAll<HTMLElement>('[data-contact="faq-item"]'),
    ),
    quoteLines: Array.from(
      root.querySelectorAll<HTMLElement>('[data-contact="quote-line"]'),
    ),
    quoteSupporting: root.querySelector('[data-contact="quote-supporting"]'),
    socialBlock: root.querySelector('[data-contact="social"]'),
  };
}

function revealStatic(elements: ContactElements) {
  if (elements.heroStage) {
    elements.heroStage.style.clipPath = "none";
    elements.heroStage.style.removeProperty("-webkit-clip-path");
  }

  const all = [
    elements.heroBg,
    elements.heroNoise,
    elements.heroSpotlight,
    elements.heroArch,
    elements.heroEyebrow,
    elements.heroDescription,
    elements.heroCta,
    elements.heroScroll,
    elements.helpHeader,
    elements.formBlock,
    elements.aiBlock,
    elements.shoppingAiBlock,
    elements.meetBlock,
    elements.promiseSupporting,
    elements.faqHeader,
    elements.quoteSupporting,
    elements.socialBlock,
    ...elements.heroWords,
    ...elements.quickCards,
    ...elements.helpCards,
    ...elements.promiseLines,
    ...elements.faqItems,
    ...elements.quoteLines,
  ];

  for (const el of all) {
    if (!el) continue;
    el.style.opacity = "1";
    el.style.transform = "none";
    el.style.filter = "none";
  }
}

function fadeUpIn(
  gsap: typeof import("gsap").default,
  targets: gsap.TweenTarget,
  trigger: Element | null,
  extras: gsap.TweenVars = {},
) {
  if (!trigger) return;

  const nodes = gsap.utils.toArray<HTMLElement>(targets);
  if (!nodes.length) return;

  gsap.set(nodes, { opacity: 0, y: CONTACT_ENTRANCE.y, force3D: true });

  gsap.to(nodes, {
    opacity: 1,
    y: 0,
    duration: CONTACT_ENTRANCE.duration,
    stagger: CONTACT_ENTRANCE.cardStagger,
    ease: CONTACT_ENTRANCE.ease,
    force3D: true,
    clearProps: "transform",
    scrollTrigger: {
      trigger,
      start: "top 86%",
      once: true,
    },
    ...extras,
  });
}

export function useContactAnimations(rootRef: RefObject<HTMLElement | null>) {
  useLayoutEffect(() => {
    const root = rootRef.current;
    if (!root) return;

    const elements = collect(root);
    let ctx: { revert: () => void } | null = null;
    let cancelled = false;

    if (elements.heroStage) concealWithCurtain(elements.heroStage);
    for (const el of [
      elements.heroBg,
      elements.heroNoise,
      elements.heroSpotlight,
      elements.heroArch,
      elements.heroEyebrow,
      elements.heroDescription,
      elements.heroCta,
      elements.heroScroll,
    ]) {
      if (el) el.style.opacity = "0";
    }
    for (const word of elements.heroWords) {
      word.style.opacity = "1";
      word.style.transform = "translate3d(0, 110%, 0)";
    }

    const run = async () => {
      const { gsap } = await import("@/lib/gsap/load").then((mod) =>
        mod.loadGsapWithScrollTrigger(),
      );
      if (cancelled || !rootRef.current) return;

      if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
        revealStatic(elements);
        return;
      }

      const { duration, stagger, ease, y, clipY } = CONTACT_ENTRANCE;

      ctx = gsap.context(() => {
        /* ── Hero atmosphere ── */
        const heroTl = gsap.timeline({ defaults: { force3D: true } });

        if (elements.heroStage) {
          addCurtainReveal(gsap, heroTl, {
            stage: elements.heroStage,
            spotlight: elements.heroSpotlight,
            duration: 1.25,
          });
        }

        for (const [i, el] of [
          elements.heroBg,
          elements.heroNoise,
          elements.heroArch,
        ].entries()) {
          if (!el) continue;
          heroTl.to(
            el,
            { opacity: 1, duration: 1.2, ease: "power4.out" },
            0.1 + i * 0.08,
          );
        }

        let at = 0.45;

        if (elements.heroEyebrow) {
          setLabelConcealed(gsap, elements.heroEyebrow, y);
          heroTl.to(elements.heroEyebrow, labelRevealVars(duration, ease), at);
          at += 0.18;
        }

        if (elements.heroWords.length) {
          setClipConcealed(gsap, elements.heroWords, clipY);
          heroTl.to(
            elements.heroWords,
            clipRevealVars({
              y: clipY,
              duration: 1.05,
              ease,
              stagger: 0.09,
            }),
            at,
          );
          at += 0.09 * elements.heroWords.length + 0.2;
        }

        if (elements.heroDescription) {
          gsap.set(elements.heroDescription, { opacity: 0, y: 28 });
          heroTl.to(
            elements.heroDescription,
            { opacity: 1, y: 0, duration: 0.95, ease: "power3.out" },
            at,
          );
          at += 0.22;
        }

        if (elements.heroCta) {
          gsap.set(elements.heroCta, { opacity: 0, y: 24 });
          heroTl.to(
            elements.heroCta,
            { opacity: 1, y: 0, duration: 0.85, ease },
            at,
          );
          at += 0.18;
        }

        if (elements.heroScroll) {
          gsap.set(elements.heroScroll, { opacity: 0, y: 12 });
          heroTl.to(
            elements.heroScroll,
            { opacity: 1, y: 0, duration: 0.8, ease: "power3.out" },
            at,
          );
        }

        /* ── Quick cards ── */
        fadeUpIn(gsap, elements.quickCards, elements.quickCards[0] ?? null);

        /* ── Help ── */
        if (elements.helpHeader) {
          gsap.set(elements.helpHeader, { opacity: 0, y });
          gsap.to(elements.helpHeader, {
            opacity: 1,
            y: 0,
            duration,
            ease,
            scrollTrigger: {
              trigger: elements.helpHeader,
              start: "top 88%",
              once: true,
            },
          });
        }
        fadeUpIn(gsap, elements.helpCards, elements.helpCards[0] ?? null);

        /* ── Form + AI ── */
        if (elements.formBlock) {
          gsap.set(elements.formBlock, { opacity: 0, y: 44 });
          gsap.to(elements.formBlock, {
            opacity: 1,
            y: 0,
            duration: 1.1,
            ease,
            clearProps: "transform",
            scrollTrigger: {
              trigger: elements.formBlock,
              start: "top 85%",
              once: true,
            },
          });
        }

        if (elements.aiBlock) {
          gsap.set(elements.aiBlock, { opacity: 0, y: 44 });
          gsap.to(elements.aiBlock, {
            opacity: 1,
            y: 0,
            duration: 1.1,
            delay: 0.12,
            ease,
            clearProps: "transform",
            scrollTrigger: {
              trigger: elements.aiBlock,
              start: "top 85%",
              once: true,
            },
          });
        }

        /* ── AI Shopping Concierge ── */
        if (elements.shoppingAiBlock) {
          gsap.set(elements.shoppingAiBlock, { opacity: 0, y: 40 });
          gsap.to(elements.shoppingAiBlock, {
            opacity: 1,
            y: 0,
            duration: 1.05,
            ease,
            clearProps: "transform",
            scrollTrigger: {
              trigger: elements.shoppingAiBlock,
              start: "top 86%",
              once: true,
            },
          });
        }

        /* ── Meet ── */
        if (elements.meetBlock) {
          gsap.set(elements.meetBlock, { opacity: 0, y: 40 });
          gsap.to(elements.meetBlock, {
            opacity: 1,
            y: 0,
            duration: 1.05,
            ease,
            clearProps: "transform",
            scrollTrigger: {
              trigger: elements.meetBlock,
              start: "top 86%",
              once: true,
            },
          });
        }

        /* ── Promise ── */
        if (elements.promiseLines.length) {
          setClipConcealed(gsap, elements.promiseLines, clipY);
          gsap.to(elements.promiseLines, {
            ...clipRevealVars({ y: clipY, duration: 1.05, ease, stagger }),
            scrollTrigger: {
              trigger: elements.promiseLines[0],
              start: "top 82%",
              once: true,
            },
          });
        }

        if (elements.promiseSupporting) {
          gsap.set(elements.promiseSupporting, { opacity: 0, y: 24 });
          gsap.to(elements.promiseSupporting, {
            opacity: 1,
            y: 0,
            duration: 0.95,
            ease: "power3.out",
            scrollTrigger: {
              trigger: elements.promiseSupporting,
              start: "top 90%",
              once: true,
            },
          });
        }

        /* ── FAQ ── */
        if (elements.faqHeader) {
          gsap.set(elements.faqHeader, { opacity: 0, y });
          gsap.to(elements.faqHeader, {
            opacity: 1,
            y: 0,
            duration,
            ease,
            scrollTrigger: {
              trigger: elements.faqHeader,
              start: "top 88%",
              once: true,
            },
          });
        }
        fadeUpIn(gsap, elements.faqItems, elements.faqItems[0] ?? null, {
          stagger: 0.08,
          y: 24,
        });

        /* ── Quote ── */
        if (elements.quoteLines.length) {
          setClipConcealed(gsap, elements.quoteLines, clipY);
          gsap.to(elements.quoteLines, {
            ...clipRevealVars({
              y: clipY,
              duration: 1.15,
              ease,
              stagger: 0.14,
            }),
            scrollTrigger: {
              trigger: elements.quoteLines[0],
              start: "top 80%",
              once: true,
            },
          });
        }

        if (elements.quoteSupporting) {
          gsap.set(elements.quoteSupporting, {
            opacity: 0,
            y: 20,
            filter: "blur(6px)",
          });
          gsap.to(elements.quoteSupporting, {
            opacity: 1,
            y: 0,
            filter: "blur(0px)",
            duration: 1.1,
            ease: "power3.out",
            scrollTrigger: {
              trigger: elements.quoteSupporting,
              start: "top 88%",
              once: true,
            },
          });
        }

        /* ── Social ── */
        if (elements.socialBlock) {
          gsap.set(elements.socialBlock, { opacity: 0, y: 36 });
          gsap.to(elements.socialBlock, {
            opacity: 1,
            y: 0,
            duration: 1.05,
            ease,
            clearProps: "transform",
            scrollTrigger: {
              trigger: elements.socialBlock,
              start: "top 86%",
              once: true,
            },
          });
        }
      }, root);
    };

    void run();

    return () => {
      cancelled = true;
      ctx?.revert();
    };
  }, [rootRef]);
}
