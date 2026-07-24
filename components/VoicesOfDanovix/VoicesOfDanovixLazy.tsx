"use client";

import dynamic from "next/dynamic";

import { DeferredSection } from "@/components/ui/DeferredSection";

const VoicesOfDanovix = dynamic(
  () =>
    import("@/components/VoicesOfDanovix/VoicesOfDanovix").then(
      (mod) => mod.VoicesOfDanovix,
    ),
  { ssr: false },
);

export function VoicesOfDanovixLazy() {
  return (
    <DeferredSection minHeight="100vh" rootMargin="280px 0px">
      <VoicesOfDanovix />
    </DeferredSection>
  );
}
