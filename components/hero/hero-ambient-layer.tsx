"use client";

import dynamic from "next/dynamic";

const HeroGlobalAmbient = dynamic(
  () =>
    import("./hero-global-ambient").then((mod) => mod.HeroGlobalAmbient),
  { ssr: false },
);

export function HeroAmbientLayer() {
  return (
    <div
      data-hero-reveal="ambient"
      className="pointer-events-none absolute inset-0 z-[15] overflow-hidden"
      aria-hidden="true"
    >
      <HeroGlobalAmbient />
    </div>
  );
}
