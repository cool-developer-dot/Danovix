import type { Metadata } from "next";

import { BrandIdentityDeck } from "@/components/brand/brand-identity-deck";
import { BreadcrumbJsonLd } from "@/components/seo/json-ld";
import { createPageMetadata } from "@/lib/seo/metadata";

export const metadata: Metadata = createPageMetadata({
  title: "Brand Identity",
  description:
    "Visual identity system for DANOVIX premium fashion house — logo, typography, color palette, and brand guidelines.",
  path: "/brand",
});

export default function BrandPage() {
  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: "Home", path: "/" },
          { name: "Brand Identity", path: "/brand" },
        ]}
      />
      <BrandIdentityDeck />
    </>
  );
}
