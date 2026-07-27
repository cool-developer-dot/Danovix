import type { Metadata } from "next";
import { HeroNavbar } from "@/components/hero/HeroNavbar";
import { PaymentSuccessExperience } from "@/components/Experience/SuccessExperiences";
import { createPageMetadata } from "@/lib/seo/metadata";

export const metadata: Metadata = createPageMetadata({
  title: "Payment Received",
  description:
    "Payment successfully received — thank you for placing your trust in DANOVIX.",
});

export default function PaymentSuccessPage() {
  return (
    <>
      <HeroNavbar />
      <PaymentSuccessExperience />
    </>
  );
}
