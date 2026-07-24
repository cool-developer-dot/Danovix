"use client";

import dynamic from "next/dynamic";

import { DeferredSection } from "@/components/ui/DeferredSection";

const Craftsmanship = dynamic(
  () =>
    import("@/components/Craftsmanship/Craftsmanship").then(
      (mod) => mod.Craftsmanship,
    ),
  { ssr: false },
);

export function CraftsmanshipLazy() {
  return (
    <DeferredSection
      id="craftsmanship"
      minHeight="110vh"
      rootMargin="360px 0px"
    >
      <Craftsmanship />
    </DeferredSection>
  );
}
