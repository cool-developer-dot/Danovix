import type { Metadata } from "next";

import { AccountExperienceLazy } from "@/components/Account/AccountExperienceLazy";
import { BreadcrumbJsonLd } from "@/components/seo/json-ld";
import { createPageMetadata } from "@/lib/seo/metadata";

export const metadata: Metadata = createPageMetadata({
  title: "Private Member Lounge",
  description:
    "Your private DANOVIX space — orders, collection, addresses, and a personal luxury concierge reserved for members.",
  path: "/account",
});

export default function AccountPage() {
  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: "Home", path: "/" },
          { name: "Private Member Lounge", path: "/account" },
        ]}
      />
      <AccountExperienceLazy />
    </>
  );
}
