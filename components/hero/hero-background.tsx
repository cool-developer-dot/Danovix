import Image from "next/image";
import type { ReactNode } from "react";

import { cn } from "@/lib/cn";

import { HeroOverlay } from "./hero-overlay";

const HERO_BLUR_DATA_URL =
  "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAABAAEDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAn/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwCwAA8A/9k=";

type HeroBackgroundProps = {
  children?: ReactNode;
  awaitingOpening?: boolean;
};

export function HeroBackground({
  children,
  awaitingOpening = false,
}: HeroBackgroundProps) {
  return (
    <section
      data-journey-section="hero"
      className={cn(
        "relative min-h-dvh w-full overflow-x-hidden",
        "lg:h-dvh lg:min-h-screen lg:overflow-hidden",
        awaitingOpening && "hero-awaiting-opening",
      )}
    >
      <div data-hero-reveal="background" className="absolute inset-0">
        <Image
          src="/bg.webp"
          alt="DANOVIX luxury leather handbag in an architectural interior"
          fill
          priority
          fetchPriority="high"
          quality={85}
          sizes="100vw"
          placeholder="blur"
          blurDataURL={HERO_BLUR_DATA_URL}
          className="hero-bg-image"
        />
      </div>
      <div
        data-hero-reveal="tone"
        className="hero-bg-tone absolute inset-0 z-[1]"
        aria-hidden="true"
      />
      <div data-hero-reveal="hero-overlay" className="absolute inset-0 z-10">
        <HeroOverlay />
      </div>
      {children}
    </section>
  );
}
