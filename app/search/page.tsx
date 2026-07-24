import type { Metadata } from "next";

import { BreadcrumbJsonLd } from "@/components/seo/json-ld";
import { SearchExperienceLazy } from "@/components/Search/SearchExperienceLazy";
import { createPageMetadata } from "@/lib/seo/metadata";

export const metadata: Metadata = createPageMetadata({
  title: "Discover",
  description:
    "Enter the DANOVIX Luxury Discovery Experience — a private showroom where an expert stylist helps you find your next signature piece.",
  path: "/search",
});

export default function SearchPage() {
  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: "Home", path: "/" },
          { name: "Discover", path: "/search" },
        ]}
      />
      <SearchExperienceLazy />
    </>
  );
}
