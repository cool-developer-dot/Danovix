import type { Metadata } from "next";

import { AddressesExperienceLazy } from "@/components/Account/Addresses/AddressesExperienceLazy";
import { BreadcrumbJsonLd } from "@/components/seo/json-ld";
import { createPageMetadata } from "@/lib/seo/metadata";

export const metadata: Metadata = createPageMetadata({
  title: "Address Book",
  description:
    "Your DANOVIX destinations — home, office, and private delivery addresses.",
  path: "/account/addresses",
});

export default function AccountAddressesPage() {
  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: "Home", path: "/" },
          { name: "Private Member Lounge", path: "/account" },
          { name: "Address Book", path: "/account/addresses" },
        ]}
      />
      <AddressesExperienceLazy />
    </>
  );
}
