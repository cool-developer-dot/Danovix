import type { Metadata } from "next";

import { OrdersExperienceLazy } from "@/components/Account/Orders/OrdersExperienceLazy";
import { BreadcrumbJsonLd } from "@/components/seo/json-ld";
import { createPageMetadata } from "@/lib/seo/metadata";

export const metadata: Metadata = createPageMetadata({
  title: "Your Orders",
  description:
    "Track every DANOVIX journey from reservation to delivery — editorial order history for private members.",
  path: "/account/orders",
});

export default function AccountOrdersPage() {
  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: "Home", path: "/" },
          { name: "Private Member Lounge", path: "/account" },
          { name: "Your Orders", path: "/account/orders" },
        ]}
      />
      <OrdersExperienceLazy />
    </>
  );
}
