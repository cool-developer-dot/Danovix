import type { Metadata } from "next";
import { HeroNavbar } from "@/components/hero/HeroNavbar";
import { PasswordSuccessExperience } from "@/components/Experience/SuccessExperiences";
import { createPageMetadata } from "@/lib/seo/metadata";

export const metadata: Metadata = createPageMetadata({
  title: "Password Updated",
  description:
    "Your password has been updated — continue your private DANOVIX experience.",
});

export default function PasswordSuccessPage() {
  return (
    <>
      <HeroNavbar />
      <PasswordSuccessExperience />
    </>
  );
}
