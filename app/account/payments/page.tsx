import type { Metadata } from "next";

import { PaymentsExperienceLazy } from "@/components/Account/Payments/PaymentsExperienceLazy";
import { BreadcrumbJsonLd } from "@/components/seo/json-ld";
import { createPageMetadata } from "@/lib/seo/metadata";

export const metadata: Metadata = createPageMetadata({
  title: "Payment Methods",
  description:
    "Your encrypted DANOVIX wallet — Visa, Mastercard, Apple Pay, and more.",
  path: "/account/payments",
});

export default function AccountPaymentsPage() {
  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: "Home", path: "/" },
          { name: "Private Member Lounge", path: "/account" },
          { name: "Payment Methods", path: "/account/payments" },
        ]}
      />
      <PaymentsExperienceLazy />
    </>
  );
}
