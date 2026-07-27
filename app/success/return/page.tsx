import type { Metadata } from "next";
import { HeroNavbar } from "@/components/hero/HeroNavbar";
import { ReturnSuccessExperience } from "@/components/Experience/SuccessExperiences";
import { createPageMetadata } from "@/lib/seo/metadata";

export const metadata: Metadata = createPageMetadata({
  title: "Return Requested",
  description:
    "Your return request has been received — we'll guide you through every step.",
});

export default function ReturnSuccessPage() {
  return (
    <>
      <HeroNavbar />
      <ReturnSuccessExperience />
    </>
  );
}
