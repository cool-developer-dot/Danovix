import type { Metadata } from "next";

import { DiscoveriesExperienceLazy } from "@/components/Shopping/Discoveries/DiscoveriesExperienceLazy";
import { BreadcrumbJsonLd } from "@/components/seo/json-ld";
import { createPageMetadata } from "@/lib/seo/metadata";

export const metadata: Metadata = createPageMetadata({
  title: "Continue Your Journey",
  description:
    "Revisit the DANOVIX pieces you've explored — memorable discoveries waiting whenever inspiration returns.",
  path: "/discoveries",
});

export default function DiscoveriesPage() {
  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: "Home", path: "/" },
          { name: "Discoveries", path: "/discoveries" },
        ]}
      />
      <DiscoveriesExperienceLazy />
    </>
  );
}
