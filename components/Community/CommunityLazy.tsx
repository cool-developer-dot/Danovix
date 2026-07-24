"use client";

import dynamic from "next/dynamic";

import { DeferredSection } from "@/components/ui/DeferredSection";

const Community = dynamic(
  () =>
    import("@/components/Community/Community").then((mod) => mod.Community),
  { ssr: false },
);

export function CommunityLazy() {
  return (
    <DeferredSection id="community" minHeight="120vh" rootMargin="280px 0px">
      <Community />
    </DeferredSection>
  );
}
