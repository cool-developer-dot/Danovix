import type { Metadata } from "next";

import { HomePageContent } from "@/app/home-page-content";
import { BreadcrumbJsonLd } from "@/components/seo/json-ld";
import { createPageMetadata } from "@/lib/seo/metadata";
import { SITE_DESCRIPTION } from "@/lib/seo/site";

export const metadata: Metadata = createPageMetadata({
  description: SITE_DESCRIPTION,
  path: "/",
});

/**
 * Server Component page — home shell streams with HTML.
 * OpeningExperience lives in the root layout so the brand intro runs once
 * per fresh document load, not on client-side navigations.
 */
export default function Home() {
  return (
    <>
      <BreadcrumbJsonLd items={[{ name: "Home", path: "/" }]} />
      <HomePageContent />
    </>
  );
}
