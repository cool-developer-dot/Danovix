import type { Metadata } from "next";

import { ProfileExperienceLazy } from "@/components/Account/Profile/ProfileExperienceLazy";
import { BreadcrumbJsonLd } from "@/components/seo/json-ld";
import { createPageMetadata } from "@/lib/seo/metadata";

export const metadata: Metadata = createPageMetadata({
  title: "Profile",
  description:
    "Manage your DANOVIX private profile — personal details, security, and preferences.",
  path: "/account/profile",
});

export default function AccountProfilePage() {
  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: "Home", path: "/" },
          { name: "Private Member Lounge", path: "/account" },
          { name: "Profile", path: "/account/profile" },
        ]}
      />
      <ProfileExperienceLazy />
    </>
  );
}
