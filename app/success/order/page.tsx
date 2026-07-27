import type { Metadata } from "next";
import { HeroNavbar } from "@/components/hero/HeroNavbar";
import { OrderSuccessExperience } from "@/components/Experience/SuccessExperiences";
import { createPageMetadata } from "@/lib/seo/metadata";

export const metadata: Metadata = createPageMetadata({
  title: "Order Confirmed",
  description:
    "Your journey begins — your DANOVIX order has been confirmed with exceptional care.",
});

export default function OrderSuccessPage() {
  return (
    <>
      <HeroNavbar />
      <OrderSuccessExperience />
    </>
  );
}
