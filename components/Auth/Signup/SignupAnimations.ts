"use client";

import { useLayoutEffect, type RefObject } from "react";

import {
  clipRevealVars,
  setClipConcealed,
} from "@/lib/animations/cinematic-reveal";
import { SIGNUP_ENTRANCE } from "./auth.constants";

type SignupElements = {
  bgLayers: HTMLElement[];
  brand: HTMLElement | null;
  asideBg: HTMLElement | null;
  eyebrow: HTMLElement | null;
  words: HTMLElement[];
  description: HTMLElement | null;
  rule: HTMLElement | null;
  featureCards: HTMLElement[];
  card: HTMLElement | null;
  cardHeader: HTMLElement | null;
  fields: HTMLElement[];
  submit: HTMLElement | null;
  divider: HTMLElement | null;
  social: HTMLElement | null;
  signin: HTMLElement | null;
  trust: HTMLElement | null;
};

function q<T extends HTMLElement>(root: HTMLElement, selector: string) {
  return Array.from(root.querySelectorAll<T>(selector));
}

function collect(root: HTMLElement): SignupElements {
  return {
    bgLayers: q(
      root,
      '[data-signup="editorial-image"],[data-signup="editorial-scrim"],[data-signup="editorial-glow"]',
    ),
    brand: root.querySelector('[data-signup="brand"]'),
    asideBg: root.querySelector('[data-signup="aside-bg"]'),
    eyebrow: root.querySelector('[data-signup="eyebrow"]'),
    words: q(root, '[data-signup="headline-word"]'),
    description: root.querySelector('[data-signup="description"]'),
    rule: root.querySelector('[data-signup="rule"]'),
    featureCards: q(root, '[data-signup="feature-card"]'),
    card: root.querySelector('[data-signup="card"]'),
    cardHeader: root.querySelector('[data-signup="card-header"]'),
    fields: q(root, ".signup-field"),
    submit: root.querySelector('[data-signup="submit"]'),
    divider: root.querySelector('[data-signup="divider"]'),
    social: root.querySelector('[data-signup="social"]'),
    signin: root.querySelector('[data-signup="signin"]'),
    trust: root.querySelector('[data-signup="trust"]'),
  };
}

function revealStatic(elements: SignupElements) {
  const all: (HTMLElement | null)[] = [
    ...elements.bgLayers,
    elements.brand,
    elements.asideBg,
    elements.eyebrow,
    ...elements.words,
    elements.description,
    elements.rule,
    ...elements.featureCards,
    elements.card,
    elements.cardHeader,
    ...elements.fields,
    elements.submit,
    elements.divider,
    elements.social,
    elements.signin,
    elements.trust,
  ];
  for (const el of all) {
    if (!el) continue;
    el.style.opacity = "1";
    el.style.transform = "none";
    el.style.filter = "none";
  }
}

export function useSignupAnimations(rootRef: RefObject<HTMLElement | null>) {
  useLayoutEffect(() => {
    const root = rootRef.current;
    if (!root) return;

    const elements = collect(root);
    const { ease, softEase, y, clipY, cardStagger, fieldStagger } =
      SIGNUP_ENTRANCE;

    /* Conceal synchronously (before paint) so no-JS renders visible. */
    const hide = (nodes: (HTMLElement | null)[], offset: number = y) => {
      for (const el of nodes) {
        if (!el) continue;
        el.style.opacity = "0";
        el.style.transform = `translate3d(0, ${offset}px, 0)`;
      }
    };

    for (const el of [...elements.bgLayers, elements.asideBg]) {
      if (el) el.style.opacity = "0";
    }
    hide([elements.brand, elements.eyebrow], 12);
    for (const word of elements.words) {
      word.style.opacity = "1";
      word.style.transform = `translate3d(0, ${clipY}, 0)`;
    }
    hide([elements.description, elements.rule], 24);
    hide(elements.featureCards, 30);
    /* Card starts deeper + slightly scaled so the lift feels deliberate */
    if (elements.card) {
      elements.card.style.opacity = "0";
      elements.card.style.transform = "translate3d(0, 72px, 0) scale(0.96)";
      elements.card.style.filter = "blur(8px)";
    }
    hide(
      [
        elements.cardHeader,
        ...elements.fields,
        elements.submit,
        elements.divider,
        elements.social,
        elements.signin,
        elements.trust,
      ],
      22,
    );

    let ctx: { revert: () => void } | null = null;
    let cancelled = false;

    const run = async () => {
      let gsap: typeof import("gsap").default;
      try {
        gsap = await import("@/lib/gsap/load").then((mod) => mod.loadGsap());
      } catch {
        revealStatic(elements);
        return;
      }

      if (cancelled || !rootRef.current) return;

      if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
        revealStatic(elements);
        return;
      }

      ctx = gsap.context(() => {
        const tl = gsap.timeline({ defaults: { force3D: true } });

        /* 1 — Background atmosphere fades in */
        if (elements.bgLayers.length) {
          tl.to(
            elements.bgLayers,
            { opacity: 1, duration: 1.2, stagger: 0.1, ease: "power2.out" },
            0,
          );
        }
        if (elements.asideBg) {
          tl.to(
            elements.asideBg,
            { opacity: 1, duration: 1.2, ease: "power2.out" },
            0.1,
          );
        }

        /* 2 — Logo appears */
        if (elements.brand) {
          tl.to(
            elements.brand,
            { opacity: 1, y: 0, duration: 0.9, ease: softEase },
            0.45,
          );
        }

        /* 3 — Eyebrow + headline reveal word by word */
        if (elements.eyebrow) {
          tl.to(
            elements.eyebrow,
            { opacity: 1, y: 0, duration: 0.8, ease: softEase },
            0.6,
          );
        }
        if (elements.words.length) {
          setClipConcealed(gsap, elements.words, clipY);
          tl.to(
            elements.words,
            clipRevealVars({ y: clipY, duration: 1.05, ease, stagger: 0.09 }),
            0.72,
          );
        }

        /* 4 — Supporting text fades upward */
        if (elements.description) {
          tl.to(
            elements.description,
            { opacity: 1, y: 0, duration: 0.95, ease: softEase },
            1.25,
          );
        }
        if (elements.rule) {
          tl.to(
            elements.rule,
            { opacity: 1, y: 0, duration: 0.85, ease: softEase },
            1.42,
          );
        }

        /* 5 — Floating cards stagger into view */
        if (elements.featureCards.length) {
          tl.to(
            elements.featureCards,
            {
              opacity: 1,
              y: 0,
              duration: 1.05,
              stagger: cardStagger,
              ease,
              clearProps: "transform",
            },
            1.1,
          );
        }

        /* 6 — Glass membership panel floats up into view (eye-catching lift) */
        if (elements.card) {
          gsap.set(elements.card, {
            opacity: 0,
            y: 72,
            scale: 0.96,
            filter: "blur(8px)",
            force3D: true,
          });
          tl.to(
            elements.card,
            {
              opacity: 1,
              y: -8,
              scale: 1,
              filter: "blur(0px)",
              duration: 1.25,
              ease: "power4.out",
            },
            0.9,
          );
          tl.to(
            elements.card,
            {
              y: 0,
              duration: 0.55,
              ease: "power2.inOut",
              clearProps: "transform,filter",
            },
            2.05,
          );
        }

        /* 7 — Header + fields appear sequentially */
        if (elements.cardHeader) {
          tl.to(
            elements.cardHeader,
            { opacity: 1, y: 0, duration: 0.85, ease: softEase },
            1.35,
          );
        }
        if (elements.fields.length) {
          tl.to(
            elements.fields,
            {
              opacity: 1,
              y: 0,
              duration: 0.85,
              stagger: fieldStagger,
              ease: softEase,
              clearProps: "transform",
            },
            1.5,
          );
        }

        /* 8 — Primary button fades */
        if (elements.submit) {
          tl.to(
            elements.submit,
            {
              opacity: 1,
              y: 0,
              duration: 0.85,
              ease,
              clearProps: "transform",
            },
            2.02,
          );
        }

        /* 9 — Divider + social buttons appear */
        for (const [i, el] of [elements.divider, elements.social].entries()) {
          if (!el) continue;
          tl.to(
            el,
            {
              opacity: 1,
              y: 0,
              duration: 0.8,
              ease: softEase,
              clearProps: "transform",
            },
            2.16 + i * 0.12,
          );
        }

        /* 10 — Bottom links fade in */
        for (const [i, el] of [elements.signin, elements.trust].entries()) {
          if (!el) continue;
          tl.to(
            el,
            {
              opacity: 1,
              y: 0,
              duration: 0.8,
              ease: softEase,
              clearProps: "transform",
            },
            2.4 + i * 0.12,
          );
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
