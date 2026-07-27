import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { OrderDetailExperienceLazy } from "@/components/Account/Orders/OrderDetailExperienceLazy";
import { BreadcrumbJsonLd } from "@/components/seo/json-ld";
import {
  getOrderById,
  getOrderDetailIds,
} from "@/lib/account/orders-data";
import { createPageMetadata } from "@/lib/seo/metadata";

type OrderDetailPageProps = {
  params: Promise<{ orderId: string }>;
};

export function generateStaticParams() {
  return getOrderDetailIds().map((orderId) => ({ orderId }));
}

export async function generateMetadata({
  params,
}: OrderDetailPageProps): Promise<Metadata> {
  const { orderId } = await params;
  const order = getOrderById(orderId);
  if (!order) {
    return createPageMetadata({
      title: "Order Details",
      description: "DANOVIX order details.",
      path: `/account/orders/${orderId}`,
    });
  }

  return createPageMetadata({
    title: `${order.productName} · ${order.orderNumber}`,
    description: `Follow ${order.productName} from reservation to delivery in your private DANOVIX lounge.`,
    path: `/account/orders/${orderId}`,
  });
}

export default async function OrderDetailPage({
  params,
}: OrderDetailPageProps) {
  const { orderId } = await params;
  const order = getOrderById(orderId);
  if (!order) notFound();

  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: "Home", path: "/" },
          { name: "Private Member Lounge", path: "/account" },
          { name: "Your Orders", path: "/account/orders" },
          {
            name: order.orderNumber,
            path: `/account/orders/${orderId}`,
          },
        ]}
      />
      <OrderDetailExperienceLazy orderId={orderId} />
    </>
  );
}
