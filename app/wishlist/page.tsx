import type { Metadata } from "next";

import { BreadcrumbJsonLd } from "@/components/seo/json-ld";
import { WishlistExperienceLazy } from "@/components/Wishlist/WishlistExperienceLazy";
import { createPageMetadata } from "@/lib/seo/metadata";

export const metadata: Metadata = createPageMetadata({
  title: "Private Collection",
  description:
    "Your DANOVIX Private Luxury Collection — a curated showroom of handbags you've chosen to revisit, admire, and make part of your journey.",
  path: "/wishlist",
});

export default function WishlistPage() {
  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: "Home", path: "/" },
          { name: "Private Collection", path: "/wishlist" },
        ]}
      />
      <WishlistExperienceLazy />
    </>
  );
}
