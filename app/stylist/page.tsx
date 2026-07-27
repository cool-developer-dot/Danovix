import type { Metadata } from "next";

import { StylistExperienceLazy } from "@/components/Shopping/Stylist/StylistExperienceLazy";
import { BreadcrumbJsonLd } from "@/components/seo/json-ld";
import { createPageMetadata } from "@/lib/seo/metadata";

export const metadata: Metadata = createPageMetadata({
  title: "Curated For Your Style",
  description:
    "Your DANOVIX AI Luxury Stylist — complete looks and lifestyle collections inspired by your taste.",
  path: "/stylist",
});

export default function StylistPage() {
  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: "Home", path: "/" },
          { name: "Stylist", path: "/stylist" },
        ]}
      />
      <StylistExperienceLazy />
    </>
  );
}
