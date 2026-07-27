import type { Metadata } from "next";

import { CompareExperienceLazy } from "@/components/Shopping/Compare/CompareExperienceLazy";
import { BreadcrumbJsonLd } from "@/components/seo/json-ld";
import { createPageMetadata } from "@/lib/seo/metadata";

export const metadata: Metadata = createPageMetadata({
  title: "Choose Your Signature Piece",
  description:
    "Compare DANOVIX handbags on a private marble consultation table — craftsmanship, capacity, and lifestyle side by side.",
  path: "/compare",
});

export default function ComparePage() {
  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: "Home", path: "/" },
          { name: "Compare", path: "/compare" },
        ]}
      />
      <CompareExperienceLazy />
    </>
  );
}
