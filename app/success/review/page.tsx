import type { Metadata } from "next";
import { HeroNavbar } from "@/components/hero/HeroNavbar";
import { ReviewSuccessExperience } from "@/components/Experience/SuccessExperiences";
import { createPageMetadata } from "@/lib/seo/metadata";

export const metadata: Metadata = createPageMetadata({
  title: "Review Received",
  description:
    "Thank you for sharing your experience with DANOVIX craftsmanship.",
});

export default function ReviewSuccessPage() {
  return (
    <>
      <HeroNavbar />
      <ReviewSuccessExperience />
    </>
  );
}
