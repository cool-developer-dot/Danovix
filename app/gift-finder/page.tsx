import type { Metadata } from "next";

import { GiftFinderExperienceLazy } from "@/components/Shopping/GiftFinder/GiftFinderExperienceLazy";
import { BreadcrumbJsonLd } from "@/components/seo/json-ld";
import { createPageMetadata } from "@/lib/seo/metadata";

export const metadata: Metadata = createPageMetadata({
  title: "Find The Perfect Gift",
  description:
    "DANOVIX Gift Finder — thoughtfully curated recommendations for every meaningful occasion.",
  path: "/gift-finder",
});

export default function GiftFinderPage() {
  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: "Home", path: "/" },
          { name: "Gift Finder", path: "/gift-finder" },
        ]}
      />
      <GiftFinderExperienceLazy />
    </>
  );
}
