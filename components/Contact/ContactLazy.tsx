"use client";

import dynamic from "next/dynamic";

import { DeferredSection } from "@/components/ui/DeferredSection";

const ContactExperience = dynamic(
  () =>
    import("@/components/Contact/ContactExperience").then(
      (mod) => mod.ContactExperience,
    ),
  { ssr: false },
);

export function ContactLazy() {
  return (
    <DeferredSection id="contact" minHeight="200vh" rootMargin="280px 0px">
      <ContactExperience embedded />
    </DeferredSection>
  );
}
