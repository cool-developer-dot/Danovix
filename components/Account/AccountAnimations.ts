"use client";

import { useLayoutEffect, type RefObject } from "react";

import {
  addCurtainReveal,
  clipRevealVars,
  concealWithCurtain,
  labelRevealVars,
  setClipConcealed,
  setLabelConcealed,
} from "@/lib/animations/cinematic-reveal";
import { ACCOUNT_ENTRANCE } from "@/lib/account/constants";
import { loadGsapWithScrollTrigger } from "@/lib/gsap/load";

type AccountElements = {
  heroStage: HTMLElement | null;
  heroBg: HTMLElement | null;
  heroNoise: HTMLElement | null;
  heroSpotlight: HTMLElement | null;
  heroGrain: HTMLElement | null;
  heroEyebrow: HTMLElement | null;
  heroWords: HTMLElement[];
  heroDescription: HTMLElement | null;
  heroMeta: HTMLElement | null;
  profileCard: HTMLElement | null;
  statCards: HTMLElement[];
  orderCards: HTMLElement[];
  collectionCards: HTMLElement[];
  addressCards: HTMLElement[];
  paymentCards: HTMLElement[];
  membership: HTMLElement | null;
  concierge: HTMLElement | null;
  galleryCards: HTMLElement[];
  curatedCards: HTMLElement[];
  journalCards: HTMLElement[];
  sectionHeaders: HTMLElement[];
};

function collect(root: HTMLElement): AccountElements {
  return {
    heroStage: root.querySelector('[data-account="hero-stage"]'),
    heroBg: root.querySelector('[data-account="hero-bg"]'),
    heroNoise: root.querySelector('[data-account="hero-noise"]'),
    heroSpotlight: root.querySelector('[data-account="hero-spotlight"]'),
    heroGrain: root.querySelector('[data-account="hero-grain"]'),
    heroEyebrow: root.querySelector('[data-account="hero-eyebrow"]'),
    heroWords: Array.from(
      root.querySelectorAll<HTMLElement>('[data-account="hero-word"]'),
    ),
    heroDescription: root.querySelector('[data-account="hero-description"]'),
    heroMeta: root.querySelector('[data-account="hero-meta"]'),
    profileCard: root.querySelector('[data-account="profile-card"]'),
    statCards: Array.from(
      root.querySelectorAll<HTMLElement>('[data-account="stat-card"]'),
    ),
    orderCards: Array.from(
      root.querySelectorAll<HTMLElement>('[data-account="order-card"]'),
    ),
    collectionCards: Array.from(
      root.querySelectorAll<HTMLElement>('[data-account="collection-card"]'),
    ),
    addressCards: Array.from(
      root.querySelectorAll<HTMLElement>('[data-account="address-card"]'),
    ),
    paymentCards: Array.from(
      root.querySelectorAll<HTMLElement>('[data-account="payment-card"]'),
    ),
    membership: root.querySelector('[data-account="membership"]'),
    concierge: root.querySelector('[data-account="concierge"]'),
    galleryCards: Array.from(
      root.querySelectorAll<HTMLElement>('[data-account="gallery-card"]'),
    ),
    curatedCards: Array.from(
      root.querySelectorAll<HTMLElement>('[data-account="curated-card"]'),
    ),
    journalCards: Array.from(
      root.querySelectorAll<HTMLElement>('[data-account="journal-card"]'),
    ),
    sectionHeaders: Array.from(
      root.querySelectorAll<HTMLElement>(
        "[data-account$='-eyebrow'], [data-account$='-heading'], [data-account$='-description']",
      ),
    ).filter(
      (el) =>
        !el.matches(
          '[data-account="hero-eyebrow"], [data-account="hero-description"]',
        ),
    ),
  };
}

function revealStatic(elements: AccountElements) {
  if (elements.heroStage) {
    elements.heroStage.style.clipPath = "none";
    elements.heroStage.style.removeProperty("-webkit-clip-path");
  }

  const all = [
    elements.heroBg,
    elements.heroNoise,
    elements.heroSpotlight,
    elements.heroGrain,
    elements.heroEyebrow,
    elements.heroDescription,
    elements.heroMeta,
    elements.profileCard,
    elements.membership,
    elements.concierge,
    ...elements.heroWords,
    ...elements.statCards,
    ...elements.orderCards,
    ...elements.collectionCards,
    ...elements.addressCards,
    ...elements.paymentCards,
    ...elements.galleryCards,
    ...elements.curatedCards,
    ...elements.journalCards,
    ...elements.sectionHeaders,
  ];

  for (const el of all) {
    if (!el) continue;
    el.style.opacity = "1";
    el.style.transform = "none";
    el.style.filter = "none";
  }
}

function revealOnScroll(
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  gsap: any,
  targets: HTMLElement[],
  ease: string,
  options?: { y?: number; stagger?: number; duration?: number },
) {
  if (!targets.length) return;
  const y = options?.y ?? 28;
  const stagger = options?.stagger ?? 0.1;
  const duration = options?.duration ?? 0.85;

  gsap.set(targets, { opacity: 0, y });
  gsap.to(targets, {
    opacity: 1,
    y: 0,
    duration,
    stagger,
    ease,
    scrollTrigger: {
      trigger: targets[0],
      start: "top 88%",
      once: true,
    },
  });
}

export function useAccountAnimations(rootRef: RefObject<HTMLElement | null>) {
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
      elements.heroGrain,
      elements.heroEyebrow,
      elements.heroDescription,
      elements.heroMeta,
      elements.profileCard,
    ]) {
      if (el) el.style.opacity = "0";
    }

    for (const word of elements.heroWords) {
      word.style.opacity = "1";
      word.style.transform = "translate3d(0, 110%, 0)";
    }

    const run = async () => {
      const { gsap } = await loadGsapWithScrollTrigger();
      if (cancelled || !rootRef.current) return;

      if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
        revealStatic(elements);
        return;
      }

      const { duration, stagger, ease } = ACCOUNT_ENTRANCE;
      const clipY = "110%";

      ctx = gsap.context(() => {
        const heroTl = gsap.timeline({ defaults: { force3D: true } });

        if (elements.heroStage) {
          addCurtainReveal(gsap, heroTl, {
            stage: elements.heroStage,
            spotlight: elements.heroSpotlight,
            duration: 1.2,
          });
        }

        for (const [i, el] of [
          elements.heroBg,
          elements.heroNoise,
          elements.heroGrain,
        ].entries()) {
          if (!el) continue;
          heroTl.to(
            el,
            { opacity: 1, duration: 1.15, ease: "power4.out" },
            0.1 + i * 0.08,
          );
        }

        let at = 0.42;

        if (elements.heroEyebrow) {
          setLabelConcealed(gsap, elements.heroEyebrow, 24);
          heroTl.to(elements.heroEyebrow, labelRevealVars(duration, ease), at);
          at += 0.16;
        }

        if (elements.heroWords.length) {
          setClipConcealed(gsap, elements.heroWords, clipY);
          heroTl.to(
            elements.heroWords,
            clipRevealVars({
              y: clipY,
              duration: 1.0,
              ease,
              stagger: 0.1,
            }),
            at,
          );
          at += 0.1 * elements.heroWords.length + 0.18;
        }

        if (elements.heroDescription) {
          gsap.set(elements.heroDescription, { opacity: 0, y: 22 });
          heroTl.to(
            elements.heroDescription,
            { opacity: 1, y: 0, duration: 0.85, ease: "power3.out" },
            at,
          );
          at += 0.16;
        }

        if (elements.heroMeta) {
          gsap.set(elements.heroMeta, { opacity: 0, y: 18 });
          heroTl.to(
            elements.heroMeta,
            { opacity: 1, y: 0, duration: 0.75, ease },
            at,
          );
          at += 0.12;
        }

        if (elements.profileCard) {
          gsap.set(elements.profileCard, { opacity: 0, y: 32 });
          heroTl.to(
            elements.profileCard,
            {
              opacity: 1,
              y: 0,
              duration: 0.95,
              ease,
              onComplete: () => {
                if (elements.profileCard) {
                  gsap.set(elements.profileCard, { clearProps: "transform" });
                }
              },
            },
            at - 0.2,
          );
        }

        if (elements.statCards.length) {
          gsap.set(elements.statCards, { opacity: 0, y: 28 });
          heroTl.to(
            elements.statCards,
            {
              opacity: 1,
              y: 0,
              duration: 0.8,
              stagger: 0.1,
              ease,
            },
            "-=0.35",
          );
        }

        revealOnScroll(gsap, elements.orderCards, ease, { stagger: 0.14 });
        revealOnScroll(gsap, elements.collectionCards, ease, {
          stagger: 0.12,
        });
        revealOnScroll(gsap, elements.addressCards, ease);
        revealOnScroll(gsap, elements.paymentCards, ease);
        revealOnScroll(gsap, elements.galleryCards, ease, { stagger: 0.08 });
        revealOnScroll(gsap, elements.curatedCards, ease, { stagger: 0.12 });
        revealOnScroll(gsap, elements.journalCards, ease);

        if (elements.membership) {
          revealOnScroll(gsap, [elements.membership], ease, { y: 32 });
        }

        if (elements.concierge) {
          revealOnScroll(gsap, [elements.concierge], ease, {
            y: 32,
            duration: 0.95,
          });
        }

        if (elements.sectionHeaders.length) {
          gsap.set(elements.sectionHeaders, { opacity: 0, y: 20 });
          const groups = new Map<Element, HTMLElement[]>();
          for (const el of elements.sectionHeaders) {
            const section = el.closest("section") ?? el.parentElement;
            if (!section) continue;
            const list = groups.get(section) ?? [];
            list.push(el);
            groups.set(section, list);
          }
          for (const [, group] of groups) {
            gsap.to(group, {
              opacity: 1,
              y: 0,
              duration: 0.8,
              stagger: 0.08,
              ease,
              scrollTrigger: {
                trigger: group[0],
                start: "top 88%",
                once: true,
              },
            });
          }
        }

        const sweeps = Array.from(
          root.querySelectorAll<HTMLElement>(
            '[data-account="collection-sweep"]',
          ),
        );
        if (sweeps.length && elements.collectionCards[0]) {
          gsap.to(elements.collectionCards[0], {
            scrollTrigger: {
              trigger: elements.collectionCards[0],
              start: "top 86%",
              once: true,
              onEnter: () => {
                sweeps.forEach((sweep, index) => {
                  gsap.fromTo(
                    sweep,
                    { opacity: 0, xPercent: -120 },
                    {
                      opacity: 1,
                      xPercent: 120,
                      duration: 1.05,
                      delay: 0.3 + index * stagger,
                      ease: "power2.inOut",
                      onComplete: () => {
                        gsap.set(sweep, { opacity: 0 });
                      },
                    },
                  );
                });
              },
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
