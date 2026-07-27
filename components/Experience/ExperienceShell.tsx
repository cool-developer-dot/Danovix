"use client";

import { useLayoutEffect, useRef, type ReactNode } from "react";
import { cn } from "@/lib/cn";
import {
  experienceBg,
  experienceGrain,
  experienceHero,
  experienceMain,
  experienceNoise,
  experiencePage,
  experienceSpotlight,
  experienceStage,
} from "./experience.styles";

type ExperienceShellProps = {
  children: ReactNode;
  className?: string;
  compact?: boolean;
};

export function ExperienceShell({
  children,
  className,
  compact = false,
}: ExperienceShellProps) {
  const rootRef = useRef<HTMLElement>(null);

  useLayoutEffect(() => {
    const root = rootRef.current;
    if (!root) return;

    const reduce = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    const bg = root.querySelector("[data-exp-bg]");
    const layers = root.querySelectorAll("[data-exp-layer]");
    const content = root.querySelectorAll("[data-exp-reveal]");

    if (reduce) {
      if (bg instanceof HTMLElement) {
        bg.style.opacity = "1";
        bg.style.transform = "none";
      }
      layers.forEach((el) => {
        if (el instanceof HTMLElement) el.style.opacity = "1";
      });
      content.forEach((el) => {
        if (el instanceof HTMLElement) {
          el.style.opacity = "1";
          el.style.transform = "none";
        }
      });
      return;
    }

    let ctx: { revert: () => void } | null = null;
    let cancelled = false;

    void import("@/lib/gsap/load")
      .then((mod) => mod.loadGsap())
      .then((gsap) => {
        if (cancelled || !rootRef.current) return;
        ctx = gsap.context(() => {
          const tl = gsap.timeline({ defaults: { ease: "power2.out" } });
          if (bg) {
            tl.fromTo(bg, { scale: 1.04 }, { scale: 1, duration: 1.1 }, 0);
          }
          if (layers.length) {
            tl.fromTo(
              layers,
              { opacity: 0 },
              { opacity: 1, duration: 1.05, stagger: 0.04 },
              0,
            );
          }
          tl.fromTo(
            content,
            { opacity: 0, y: 18 },
            { opacity: 1, y: 0, duration: 0.7, stagger: 0.08 },
            0.22,
          );
        }, root);
      });

    return () => {
      cancelled = true;
      ctx?.revert();
    };
  }, []);

  return (
    <main
      ref={rootRef}
      className={cn(experiencePage, className)}
      data-experience-shell
    >
      <div className={experienceMain}>
        <section
          className={cn(
            experienceHero,
            compact && "pb-[clamp(3rem,8vh,5rem)] pt-[clamp(6rem,12vh,8.5rem)]",
          )}
          aria-label="Experience"
        >
          <div className={experienceStage} data-exp-bg aria-hidden>
            <div className={experienceBg} data-exp-layer />
            <div className={experienceNoise} data-exp-layer />
            <div className={experienceSpotlight} data-exp-layer />
            <div className={experienceGrain} data-exp-layer />
          </div>
          <div className="relative z-[2] mx-auto w-full max-w-[920px] px-5 sm:px-8">
            {children}
          </div>
        </section>
      </div>
    </main>
  );
}
