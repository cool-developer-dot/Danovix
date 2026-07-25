import type { Metadata } from "next";

import { CollectionExperienceLazy } from "@/components/Collection/CollectionExperienceLazy";
import { BreadcrumbJsonLd } from "@/components/seo/json-ld";
import { createPageMetadata } from "@/lib/seo/metadata";

export const metadata: Metadata = createPageMetadata({
  title: "The Collection",
  description:
    "Enter the DANOVIX private showroom — a curated collection of handcrafted handbags for modern women who appreciate timeless craftsmanship.",
  path: "/collection",
});

export default function CollectionPage() {
  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: "Home", path: "/" },
          { name: "Collection", path: "/collection" },
        ]}
      />
      <CollectionExperienceLazy />
    </>
  );
}
