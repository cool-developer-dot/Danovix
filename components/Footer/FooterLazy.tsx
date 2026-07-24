"use client";

import dynamic from "next/dynamic";

import { DeferredSection } from "@/components/ui/DeferredSection";

const Footer = dynamic(
  () => import("@/components/Footer/Footer").then((mod) => mod.Footer),
  { ssr: false },
);

export function FooterLazy() {
  return (
    <DeferredSection id="journal" minHeight="80vh" rootMargin="720px 0px">
      <Footer />
    </DeferredSection>
  );
}
