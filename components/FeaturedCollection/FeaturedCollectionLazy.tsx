"use client";

import dynamic from "next/dynamic";

import { DeferredSection } from "@/components/ui/DeferredSection";

const FeaturedCollection = dynamic(
  () =>
    import("@/components/FeaturedCollection/FeaturedCollection").then(
      (mod) => mod.FeaturedCollection,
    ),
  { ssr: false },
);

export function FeaturedCollectionLazy() {
  return (
    <DeferredSection id="about" minHeight="100vh" rootMargin="360px 0px">
      <FeaturedCollection />
    </DeferredSection>
  );
}
