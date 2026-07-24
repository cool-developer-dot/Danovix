"use client";

import { useLayoutEffect, type RefObject } from "react";

import { FOOTER_ENTRANCE } from "@/lib/footer/constants";
import {
  addCurtainReveal,
  clipRevealVars,
  concealWithCurtain,
  labelRevealVars,
  setClipConcealed,
  setLabelConcealed,
} from "@/lib/animations/cinematic-reveal";

type FooterElements = {
  stage: HTMLElement | null;
  bg: HTMLElement | null;
  noise: HTMLElement | null;
  spotlight: HTMLElement | null;
  watermark: HTMLElement | null;
  editorialAccent: HTMLElement | null;
  editorialLines: HTMLElement[];
  editorialRule: HTMLElement | null;
  newsletterHeading: HTMLElement | null;
  newsletterCopy: HTMLElement | null;
  newsletterForm: HTMLElement | null;
  dividers: HTMLElement[];
  brandCol: HTMLElement | null;
  navCols: HTMLElement[];
  trustChips: HTMLElement[];
  payments: HTMLElement | null;
  journey: HTMLElement | null;
  signature: HTMLElement | null;
};

function collectElements(root: HTMLElement): FooterElements {
  return {
    stage: root.querySelector('[data-footer="stage"]'),
    bg: root.querySelector('[data-footer="bg"]'),
    noise: root.querySelector('[data-footer="noise"]'),
    spotlight: root.querySelector('[data-footer="spotlight"]'),
    watermark: root.querySelector('[data-footer="watermark"]'),
    editorialAccent: root.querySelector('[data-footer="editorial-accent"]'),
    editorialLines: Array.from(
      root.querySelectorAll<HTMLElement>('[data-footer="editorial-line"]'),
    ),
    editorialRule: root.querySelector('[data-footer="editorial-rule"]'),
    newsletterHeading: root.querySelector('[data-footer="newsletter-heading"]'),
    newsletterCopy: root.querySelector('[data-footer="newsletter-copy"]'),
    newsletterForm: root.querySelector('[data-footer="newsletter-form"]'),
    dividers: Array.from(
      root.querySelectorAll<HTMLElement>('[data-footer="divider"]'),
    ),
    brandCol: root.querySelector('[data-footer="brand-col"]'),
    navCols: Array.from(
      root.querySelectorAll<HTMLElement>('[data-footer="nav-col"]'),
    ),
    trustChips: Array.from(
      root.querySelectorAll<HTMLElement>('[data-footer="trust-chip"]'),
    ),
    payments: root.querySelector('[data-footer="payments"]'),
    journey: root.querySelector('[data-footer="journey"]'),
    signature: root.querySelector('[data-footer="signature"]'),
  };
}

function concealTargets(elements: FooterElements, y: number) {
  const fade = [
    elements.editorialAccent,
    elements.editorialRule,
    elements.newsletterHeading,
    elements.newsletterCopy,
    elements.newsletterForm,
    elements.brandCol,
    elements.payments,
    elements.journey,
    elements.signature,
    ...elements.navCols,
    ...elements.trustChips,
  ];

  for (const el of fade) {
    if (!el) continue;
    el.style.opacity = "0";
    el.style.transform = `translate3d(0, ${y}px, 0)`;
  }

  for (const line of elements.editorialLines) {
    line.style.opacity = "1";
    line.style.transform = "translate3d(0, 110%, 0)";
  }

  for (const divider of elements.dividers) {
    divider.style.opacity = "0";
    divider.style.transform = "scaleX(0.2)";
  }
}

function revealStatic(elements: FooterElements) {
  if (elements.stage) {
    elements.stage.style.clipPath = "none";
    elements.stage.style.removeProperty("-webkit-clip-path");
  }

  for (const el of [
    elements.bg,
    elements.noise,
    elements.spotlight,
    elements.watermark,
  ]) {
    if (el) el.style.opacity = "1";
  }

  const all = [
    elements.editorialAccent,
    elements.editorialRule,
    elements.newsletterHeading,
    elements.newsletterCopy,
    elements.newsletterForm,
    elements.brandCol,
    elements.payments,
    elements.journey,
    elements.signature,
    ...elements.editorialLines,
    ...elements.navCols,
    ...elements.trustChips,
    ...elements.dividers,
  ];

  for (const el of all) {
    if (!el) continue;
    el.style.opacity = "1";
    el.style.transform = "none";
  }
}

export function useFooterAnimations(
  rootRef: RefObject<HTMLElement | null>,
  enabled = true,
) {
  useLayoutEffect(() => {
    if (!enabled) return;

    const root = rootRef.current;
    if (!root) return;

    const elements = collectElements(root);
    const { y, duration, stagger, ease, clipY } = FOOTER_ENTRANCE;
    concealTargets(elements, y);

    if (elements.stage) concealWithCurtain(elements.stage);
    if (elements.bg) elements.bg.style.opacity = "0";
    if (elements.noise) elements.noise.style.opacity = "0";
    if (elements.spotlight) elements.spotlight.style.opacity = "0";
    if (elements.watermark) elements.watermark.style.opacity = "0";

    let ctx: { revert: () => void } | null = null;
    let cancelled = false;

    const run = async () => {
      const { gsap } = await import("@/lib/gsap/load").then((mod) =>
        mod.loadGsapWithScrollTrigger(),
      );
      if (cancelled || !rootRef.current) return;

      if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
        revealStatic(elements);
        return;
      }

      const fadeUp = { opacity: 1, y: 0, duration, ease, force3D: true };

      ctx = gsap.context(() => {
        /* Atmosphere */
        const atmosphere = gsap.timeline({
          scrollTrigger: {
            trigger: root,
            start: "top 90%",
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
          elements.watermark,
        ].entries()) {
          if (!el) continue;
          atmosphere.to(
            el,
            { opacity: 1, duration: 1.2, ease: "power4.out" },
            0.1 + i * 0.1,
          );
        }

        /* Master choreography */
        const master = gsap.timeline({
          scrollTrigger: {
            trigger: root,
            start: "top 78%",
            once: true,
          },
        });

        let at = 0.08;

        if (elements.editorialAccent) {
          setLabelConcealed(gsap, elements.editorialAccent, y);
          master.to(
            elements.editorialAccent,
            labelRevealVars(duration, ease),
            at,
          );
          at += stagger;
        }

        if (elements.editorialLines.length) {
          setClipConcealed(gsap, elements.editorialLines, clipY);
          master.to(
            elements.editorialLines,
            clipRevealVars({ y: clipY, duration: duration + 0.1, ease, stagger }),
            at,
          );
          at += stagger * elements.editorialLines.length;
        }

        if (elements.editorialRule) {
          gsap.set(elements.editorialRule, {
            opacity: 0,
            scaleX: 0.2,
            transformOrigin: "50% 50%",
          });
          master.to(
            elements.editorialRule,
            {
              opacity: 1,
              scaleX: 1,
              duration: 0.9,
              ease: "power3.out",
            },
            at,
          );
          at += 0.2;
        }

        /* Newsletter */
        for (const el of [
          elements.newsletterHeading,
          elements.newsletterCopy,
          elements.newsletterForm,
        ]) {
          if (!el) continue;
          gsap.set(el, { opacity: 0, y, force3D: true });
          master.to(el, fadeUp, at);
          at += stagger * 0.85;
        }

        /* First divider */
        if (elements.dividers[0]) {
          gsap.set(elements.dividers[0], {
            opacity: 0,
            scaleX: 0.15,
            transformOrigin: "50% 50%",
          });
          master.to(
            elements.dividers[0],
            { opacity: 1, scaleX: 1, duration: 1, ease: "power3.out" },
            at,
          );
          at += 0.18;
        }

        /* Columns — one by one */
        if (elements.brandCol) {
          gsap.set(elements.brandCol, { opacity: 0, y, force3D: true });
          master.to(elements.brandCol, fadeUp, at);
          at += stagger;
        }

        for (const col of elements.navCols) {
          gsap.set(col, { opacity: 0, y: y + 8, force3D: true });
          master.to(col, fadeUp, at);
          at += stagger * 0.75;
        }

        /* Second divider */
        if (elements.dividers[1]) {
          gsap.set(elements.dividers[1], {
            opacity: 0,
            scaleX: 0.15,
            transformOrigin: "50% 50%",
          });
          master.to(
            elements.dividers[1],
            { opacity: 1, scaleX: 1, duration: 1, ease: "power3.out" },
            at,
          );
          at += 0.16;
        }

        /* Trust chips */
        if (elements.trustChips.length) {
          gsap.set(elements.trustChips, { opacity: 0, y: 20, force3D: true });
          master.to(
            elements.trustChips,
            {
              opacity: 1,
              y: 0,
              duration: 0.85,
              stagger: 0.08,
              ease,
              force3D: true,
            },
            at,
          );
          at += 0.35;
        }

        /* Payments */
        if (elements.payments) {
          gsap.set(elements.payments, { opacity: 0, y: 16, force3D: true });
          master.to(elements.payments, { ...fadeUp, duration: 0.9 }, at);
          at += 0.2;
        }

        /* Third divider */
        if (elements.dividers[2]) {
          gsap.set(elements.dividers[2], {
            opacity: 0,
            scaleX: 0.15,
            transformOrigin: "50% 50%",
          });
          master.to(
            elements.dividers[2],
            { opacity: 1, scaleX: 1, duration: 1, ease: "power3.out" },
            at,
          );
          at += 0.16;
        }

        /* Journey + signature */
        if (elements.journey) {
          gsap.set(elements.journey, { opacity: 0, y, force3D: true });
          master.to(elements.journey, fadeUp, at);
          at += stagger;
        }

        if (elements.signature) {
          gsap.set(elements.signature, { opacity: 0, y: 20, force3D: true });
          master.to(
            elements.signature,
            { ...fadeUp, duration: 1.1 },
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
