import type { Metadata } from "next";

import { BreadcrumbJsonLd } from "@/components/seo/json-ld";
import { ReservedExperienceLazy } from "@/components/ReservedCollection/ReservedExperienceLazy";
import { createPageMetadata } from "@/lib/seo/metadata";

export const metadata: Metadata = createPageMetadata({
  title: "Reserved Collection",
  description:
    "Your DANOVIX Reserved Collection — a private luxury showroom where every selected piece has been carefully reserved exclusively for you.",
  path: "/reserved",
});

export default function ReservedPage() {
  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: "Home", path: "/" },
          { name: "Reserved Collection", path: "/reserved" },
        ]}
      />
      <ReservedExperienceLazy />
    </>
  );
}
