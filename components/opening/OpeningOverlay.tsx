"use client";

import { forwardRef, useEffect, useRef, type CSSProperties, type ReactNode } from "react";

import { OPENING_PARTICLE_COUNT } from "@/lib/opening/constants";
import { prefersReducedMotion } from "@/lib/opening/storage";
import { cn } from "@/lib/cn";

import {
  createOpeningTimeline,
  createReducedMotionOpening,
} from "./OpeningTimeline";

const PARTICLES = Array.from({ length: OPENING_PARTICLE_COUNT }, (_, id) => ({
  id,
  left: `${(id * 17 + 13) % 96 + 2}%`,
  top: `${(id * 21 + 19) % 94 + 3}%`,
  size: 0.75 + (id % 3) * 0.35,
  driftDuration: 14 + (id % 5) * 2.5,
  driftDelay: (id * 0.7) % 6,
}));

type OpeningOverlayProps = {
  children?: ReactNode;
  className?: string;
  introActive?: boolean;
  onIntroComplete?: () => void;
};

function collectIntroElements(overlay: HTMLElement) {
  return {
    overlay,
    backdrop: overlay.querySelector(
      '[data-opening="backdrop"]',
    ) as HTMLElement,
    ambientGlow: overlay.querySelector(
      '[data-opening="ambient-glow"]',
    ) as HTMLElement,
    textWrap: overlay.querySelector(
      '[data-opening="text-wrap"]',
    ) as HTMLElement,
    inkChars: Array.from(
      overlay.querySelectorAll('[data-opening="ink-char"]'),
    ) as HTMLElement[],
    particles: Array.from(
      overlay.querySelectorAll('[data-opening="particle"]'),
    ) as HTMLElement[],
  };
}

export const OpeningOverlay = forwardRef<HTMLDivElement, OpeningOverlayProps>(
  function OpeningOverlay(
    { children, className, introActive = false, onIntroComplete },
    ref,
  ) {
    const localRef = useRef<HTMLDivElement | null>(null);
    const introStartedRef = useRef(false);

    const setRef = (node: HTMLDivElement | null) => {
      localRef.current = node;

      if (typeof ref === "function") {
        ref(node);
      } else if (ref) {
        ref.current = node;
      }
    };

    useEffect(() => {
      if (!introActive || !onIntroComplete) return;

      const overlay = localRef.current;
      if (!overlay || introStartedRef.current) return;

      let timeline: { kill: () => void } | null = null;
      let cancelled = false;
      let raf = 0;
      let attempts = 0;

      const run = async () => {
        if (cancelled || !localRef.current) return;

        /*
         * Wait until OpeningText has mounted the final compact/editorial
         * ink characters (resolved in useLayoutEffect). Animating too early
         * binds detached nodes and leaves mobile text stuck at ivoryMuted.
         */
        const elements = collectIntroElements(localRef.current);
        if (
          !elements.backdrop ||
          !elements.ambientGlow ||
          !elements.textWrap ||
          elements.inkChars.length === 0
        ) {
          if (attempts++ < 90) {
            raf = requestAnimationFrame(() => {
              void run();
            });
            return;
          }
          onIntroComplete();
          return;
        }

        if (introStartedRef.current) return;
        introStartedRef.current = true;

        const { default: gsap } = await import("gsap");
        if (cancelled || !localRef.current) return;

        const live = collectIntroElements(localRef.current);
        if (live.inkChars.length === 0) {
          onIntroComplete();
          return;
        }

        timeline = prefersReducedMotion()
          ? createReducedMotionOpening(gsap, live, onIntroComplete)
          : createOpeningTimeline(gsap, live, onIntroComplete);
      };

      void run();

      return () => {
        cancelled = true;
        if (raf) cancelAnimationFrame(raf);
        timeline?.kill();
        introStartedRef.current = false;
      };
    }, [introActive, onIntroComplete]);

    return (
      <div
        ref={setRef}
        data-opening="overlay"
        className={cn(
          "opening-overlay fixed inset-0 z-[9999] flex items-center justify-center",
          className,
        )}
        aria-hidden={false}
        role="presentation"
      >
        <div
          data-opening="backdrop"
          className="opening-backdrop pointer-events-none absolute inset-0"
          aria-hidden="true"
        />

        <div
          data-opening="ambient-glow"
          className="opening-ambient-glow pointer-events-none absolute inset-0"
          aria-hidden="true"
        />

        <div
          className="opening-vignette pointer-events-none absolute inset-0"
          aria-hidden="true"
        />

        <div
          className="opening-grain pointer-events-none absolute inset-0"
          aria-hidden="true"
        />

        {PARTICLES.map((particle) => (
          <span
            key={particle.id}
            data-opening="particle"
            className="opening-particle pointer-events-none absolute rounded-full"
            style={
              {
                left: particle.left,
                top: particle.top,
                width: particle.size,
                height: particle.size,
                "--dust-duration": `${particle.driftDuration}s`,
                "--dust-delay": `${particle.driftDelay}s`,
              } as CSSProperties
            }
            aria-hidden="true"
          />
        ))}

        {children}
      </div>
    );
  },
);
