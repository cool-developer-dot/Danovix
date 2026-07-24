"use client";

import { useEffect, useRef, type RefObject } from "react";

import { ANIMATION } from "./constants";

const SELECTORS = {
  navbar: '[data-hero-animate="navbar"]',
  logo: '[data-hero-animate="logo"]',
  navLinks: '[data-hero-animate="nav-links"]',
  actions: '[data-hero-animate="actions"]',
  description: '[data-hero-animate="description"]',
  buttons: '[data-hero-animate="buttons"]',
  featureItem: ".hero-feature-item",
  trust: '[data-hero-animate="trust"]',
  scrollIndicator: '[data-hero-animate="scroll-indicator"]',
} as const;

function queryScope(
  scope: HTMLElement,
  selector: string,
): HTMLElement | null {
  return scope.querySelector(selector);
}

function queryAllScope(
  scope: HTMLElement,
  selector: string,
): NodeListOf<HTMLElement> {
  return scope.querySelectorAll(selector);
}

export function useHeroAnimation(
  scopeRef: RefObject<HTMLElement | null>,
  enabled = true,
  onEntranceComplete?: () => void,
) {
  const timelineRef = useRef<{ kill: () => void } | null>(null);
  const onEntranceCompleteRef = useRef(onEntranceComplete);

  useEffect(() => {
    onEntranceCompleteRef.current = onEntranceComplete;
  }, [onEntranceComplete]);

  useEffect(() => {
    if (!enabled) return;

    const scope = scopeRef.current;
    if (!scope) return;

    let cancelled = false;
    let revert: (() => void) | undefined;

    const run = async () => {
      const { default: gsap } = await import("gsap");
      if (cancelled || !scopeRef.current) return;

      const root = scopeRef.current;
      const prefersReducedMotion = window.matchMedia(
        "(prefers-reduced-motion: reduce)",
      ).matches;

      const setVisible = (targets: (HTMLElement | null)[]) => {
        gsap.set(targets.filter(Boolean), {
          opacity: 1,
          y: 0,
          clearProps: "all",
        });
      };

      const description = queryScope(root, SELECTORS.description);
      const buttons = queryScope(root, SELECTORS.buttons);
      const trust = queryScope(root, SELECTORS.trust);
      const scrollIndicator = queryScope(root, SELECTORS.scrollIndicator);
      const featureItems = queryAllScope(root, SELECTORS.featureItem);

      if (prefersReducedMotion) {
        setVisible([description, buttons, trust, scrollIndicator]);
        if (featureItems.length) {
          gsap.set(featureItems, { opacity: 1, y: 0 });
        }
        root.classList.add("hero-scope-ready");
        onEntranceCompleteRef.current?.();
        return;
      }

      gsap.set(description, { opacity: 0, y: 20 });
      gsap.set(buttons, { opacity: 0, y: 18 });
      gsap.set(trust, { opacity: 0, y: 14 });
      gsap.set(scrollIndicator, { opacity: 0, y: 8 });

      if (featureItems.length) {
        gsap.set(featureItems, { opacity: 0, y: 14 });
      }

      const ctx = gsap.context(() => {
        const tl = gsap.timeline({
          defaults: { ease: ANIMATION.easeLuxury },
          onComplete: () => {
            root.classList.add("hero-scope-ready");
            onEntranceCompleteRef.current?.();
          },
        });

        tl.to(
          description,
          { opacity: 1, y: 0, duration: ANIMATION.duration.description },
          ANIMATION.delay.description,
        ).to(
          buttons,
          { opacity: 1, y: 0, duration: ANIMATION.duration.buttons },
          ANIMATION.delay.buttons,
        );

        if (featureItems.length) {
          tl.to(
            featureItems,
            {
              opacity: 1,
              y: 0,
              duration: ANIMATION.duration.features,
              stagger: ANIMATION.duration.featureStagger,
            },
            ANIMATION.delay.features,
          );
        }

        tl.to(
          trust,
          { opacity: 1, y: 0, duration: ANIMATION.duration.trust },
          ANIMATION.delay.trust,
        ).to(
          scrollIndicator,
          {
            opacity: 1,
            y: 0,
            duration: ANIMATION.duration.scrollIndicator,
          },
          ANIMATION.delay.scrollIndicator,
        );

        timelineRef.current = tl;
      }, root);

      revert = () => ctx.revert();
    };

    const schedule =
      typeof window.requestIdleCallback === "function"
        ? (callback: () => void) => {
            const idleId = window.requestIdleCallback(callback, { timeout: 1200 });
            return () => window.cancelIdleCallback(idleId);
          }
        : (callback: () => void) => {
            const timeoutId = window.setTimeout(callback, 0);
            return () => window.clearTimeout(timeoutId);
          };

    const cancelSchedule = schedule(run);

    return () => {
      cancelled = true;
      cancelSchedule();
      revert?.();
      timelineRef.current?.kill();
      scope.classList.remove("hero-scope-ready");
    };
  }, [scopeRef, enabled]);
}

export function useNavbarEntrance(
  scopeRef: RefObject<HTMLElement | null>,
  enabled = true,
) {
  const timelineRef = useRef<{ kill: () => void } | null>(null);

  useEffect(() => {
    if (!enabled) return;

    const scope = scopeRef.current;
    if (!scope) return;

    let cancelled = false;
    let revert: (() => void) | undefined;

    const run = async () => {
      const { default: gsap } = await import("gsap");
      if (cancelled || !scopeRef.current) return;

      const root = scopeRef.current;
      const prefersReducedMotion = window.matchMedia(
        "(prefers-reduced-motion: reduce)",
      ).matches;

      const navbar = root.matches(SELECTORS.navbar)
        ? root
        : queryScope(root, SELECTORS.navbar);
      const logo = queryScope(root, SELECTORS.logo);
      const navLinks = queryScope(root, SELECTORS.navLinks);
      const actions = queryScope(root, SELECTORS.actions);

      const setVisible = (targets: (HTMLElement | null)[]) => {
        gsap.set(targets.filter(Boolean), {
          opacity: 1,
          y: 0,
          clearProps: "all",
        });
      };

      if (prefersReducedMotion) {
        setVisible([navbar, logo, navLinks, actions]);
        root.classList.add("navbar-entrance-ready");
        return;
      }

      gsap.set(navbar, { y: -28, opacity: 0 });
      gsap.set(logo, { opacity: 0, y: -8 });
      gsap.set(navLinks, { opacity: 0, y: -6 });
      gsap.set(actions, { opacity: 0, y: -6 });

      const ctx = gsap.context(() => {
        const tl = gsap.timeline({
          defaults: { ease: ANIMATION.easeLuxury },
          onComplete: () => {
            root.classList.add("navbar-entrance-ready");
          },
        });

        tl.to(navbar, {
          y: 0,
          opacity: 1,
          duration: ANIMATION.duration.navbar,
          delay: ANIMATION.delay.navbar,
        })
          .to(
            logo,
            { opacity: 1, y: 0, duration: ANIMATION.duration.logo },
            ANIMATION.delay.logo,
          )
          .to(
            [navLinks, actions],
            {
              opacity: 1,
              y: 0,
              duration: ANIMATION.duration.nav,
              stagger: 0.08,
            },
            ANIMATION.delay.nav,
          );

        timelineRef.current = tl;
      }, root);

      revert = () => ctx.revert();
    };

    const schedule =
      typeof window.requestIdleCallback === "function"
        ? (callback: () => void) => {
            const idleId = window.requestIdleCallback(callback, { timeout: 1200 });
            return () => window.cancelIdleCallback(idleId);
          }
        : (callback: () => void) => {
            const timeoutId = window.setTimeout(callback, 0);
            return () => window.clearTimeout(timeoutId);
          };

    const cancelSchedule = schedule(run);

    return () => {
      cancelled = true;
      cancelSchedule();
      revert?.();
      timelineRef.current?.kill();
      scope.classList.remove("navbar-entrance-ready");
    };
  }, [scopeRef, enabled]);
}
