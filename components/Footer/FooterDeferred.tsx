"use client";

import dynamic from "next/dynamic";

import { DeferredSection } from "@/components/ui/DeferredSection";

/** Deferred footer for secondary routes (no home journal anchor). */
const Footer = dynamic(
  () => import("@/components/Footer/Footer").then((mod) => mod.Footer),
  { ssr: false },
);

export function FooterDeferred() {
  return (
    <DeferredSection minHeight="70vh" rootMargin="240px 0px">
      <Footer />
    </DeferredSection>
  );
}
