"use client";

import { useRef } from "react";

import { cn } from "@/lib/cn";

import { useHeroPedestalReveal } from "./useHeroPedestalReveal";

const WELL_PARTICLES = [
  { id: 0, left: "28%", bottom: "10%", size: 1.4 },
  { id: 1, left: "48%", bottom: "8%", size: 1.1 },
  { id: 2, left: "62%", bottom: "12%", size: 0.9 },
  { id: 3, left: "38%", bottom: "14%", size: 1.0 },
  { id: 4, left: "54%", bottom: "9%", size: 0.8 },
] as const;

type HeroProductProps = {
  animate?: boolean;
  className?: string;
};

/**
 * Hero marble pedestal + lighting only.
 * The handbag itself lives in ProductJourney (single R3F instance).
 */
export function HeroProduct({ animate = true, className }: HeroProductProps) {
  const stageRef = useRef<HTMLDivElement>(null);
  useHeroPedestalReveal(stageRef, animate);

  return (
    <div
      ref={stageRef}
      data-hero-product="stage"
      data-journey-anchor="hero"
      className={cn(
        "hero-product-stage pointer-events-none",
        !animate && "opacity-0",
        className,
      )}
      aria-hidden="true"
    >
      <div data-hero-product="spotlight" className="hero-product-spotlight" />

      <div className="hero-product-frame">
        <div
          data-hero-product="pedestal-glow"
          className="hero-product-pedestal-glow"
        />

        <div data-hero-product="shadow" className="hero-product-shadow" />

        <div className="hero-product-well">
          <div data-hero-product="well" className="hero-product-portal">
            {/* Exact geometric center of the marble cavity opening */}
            <div
              data-journey-anchor="hero-cavity"
              className="hero-product-cavity-anchor"
              aria-hidden="true"
            />

            <div
              data-hero-product="mist"
              className="hero-product-mist"
              aria-hidden="true"
            />

            {WELL_PARTICLES.map((particle) => (
              <span
                key={particle.id}
                data-hero-product="particle"
                className="hero-product-particle"
                style={{
                  left: particle.left,
                  bottom: particle.bottom,
                  width: particle.size,
                  height: particle.size,
                }}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
