"use client";

import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";

import {
  getOrderById,
  ORDER_DETAIL_ACTIONS,
  ORDER_DETAIL_PAGE,
} from "@/lib/account/orders-data";

import {
  accountEyebrow,
  accountSectionInner,
  addressCard,
  addressCity,
  addressLabel,
  addressLines,
  darkSection,
  formCard,
  orderBtnGhost,
  orderBtnPrimary,
  paymentBrand,
  paymentDefault,
  paymentMeta,
  paymentNumber,
  sectionDescription,
  sectionHeading,
  warmBg,
  warmNoise,
  warmSection,
  warmSectionDescription,
  warmSectionHeading,
} from "../account.styles";
import { AccountSubpageHero } from "../shared/AccountSubpageHero";
import { AccountSubpageShell } from "../shared/AccountSubpageShell";
import { ShippingTimeline } from "../shared/ShippingTimeline";
import { useSubpageAnimations } from "../shared/useSubpageAnimations";

type OrderDetailExperienceProps = {
  orderId: string;
};

export function OrderDetailExperience({ orderId }: OrderDetailExperienceProps) {
  const rootRef = useRef<HTMLDivElement>(null);
  const order = getOrderById(orderId);
  useSubpageAnimations(rootRef);

  if (!order) {
    return (
      <AccountSubpageShell rootRef={rootRef} showQuickActions={false}>
        <AccountSubpageHero
          eyebrow={ORDER_DETAIL_PAGE.eyebrow}
          heading={ORDER_DETAIL_PAGE.heading}
          description="This order could not be found in your private lounge."
          headingId="order-detail-heading"
          backHref="/account/orders"
          backLabel={ORDER_DETAIL_PAGE.backLabel}
        />
      </AccountSubpageShell>
    );
  }

  return (
    <AccountSubpageShell rootRef={rootRef}>
      <AccountSubpageHero
        eyebrow={ORDER_DETAIL_PAGE.eyebrow}
        heading={ORDER_DETAIL_PAGE.heading}
        description={ORDER_DETAIL_PAGE.description}
        headingId="order-detail-heading"
        backHref="/account/orders"
        backLabel={ORDER_DETAIL_PAGE.backLabel}
      />

      <section className={darkSection} aria-labelledby="order-products-heading">
        <div className={accountSectionInner}>
          <div className="mx-auto max-w-[640px] text-center">
            <p className={accountEyebrow}>{order.orderNumber}</p>
            <h2
              id="order-products-heading"
              className={sectionHeading}
            >
              {ORDER_DETAIL_PAGE.productsHeading}
            </h2>
            <p className={sectionDescription}>
              {order.purchaseDateLabel} · {order.statusLabel}
            </p>
          </div>

          <div className="mt-10 grid grid-cols-1 gap-5">
            {order.items.map((item) => (
              <article
                key={item.id}
                data-account="product-card"
                className={formCard}
              >
                <div className="grid grid-cols-1 gap-6 sm:grid-cols-[180px_1fr] lg:grid-cols-[220px_1fr]">
                  <Link
                    href={item.href}
                    className="relative aspect-[4/5] overflow-hidden rounded-[18px]"
                  >
                    <Image
                      src={item.imageSrc}
                      alt={item.imageAlt}
                      fill
                      sizes="(max-width: 640px) 90vw, 220px"
                      className="object-cover"
                    />
                  </Link>
                  <div>
                    <div className="flex flex-wrap items-start justify-between gap-3">
                      <div>
                        <h3 className="font-serif text-[clamp(1.4rem,3vw,1.85rem)] font-light text-[rgb(248_247_244)]">
                          {item.name}
                        </h3>
                        <p className="mt-2 font-sans text-[10px] uppercase tracking-[0.2em] text-[rgb(198_161_91/0.85)]">
                          {item.collection}
                        </p>
                      </div>
                      <p className="font-serif text-[1.25rem] font-light text-[rgb(248_247_244)]">
                        {item.priceLabel}
                      </p>
                    </div>
                    <dl className="mt-6 grid grid-cols-2 gap-4 sm:grid-cols-4">
                      {[
                        ["Colour", item.color],
                        ["Material", item.material],
                        ["Quantity", String(item.quantity)],
                        [
                          "Personalization",
                          item.personalization ?? "None",
                        ],
                      ].map(([label, value]) => (
                        <div key={label}>
                          <dt className="font-sans text-[9px] uppercase tracking-[0.18em] text-[rgb(214_196_158/0.75)]">
                            {label}
                          </dt>
                          <dd className="mt-1.5 text-[14px] text-[rgb(248_247_244/0.72)]">
                            {value}
                          </dd>
                        </div>
                      ))}
                    </dl>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className={warmSection} aria-labelledby="order-shipping-heading">
        <div className={warmBg} aria-hidden="true" />
        <div className={warmNoise} aria-hidden="true" />
        <div className={accountSectionInner}>
          <div className="mx-auto max-w-[640px] text-center">
            <h2
              id="order-shipping-heading"
              className={warmSectionHeading}
            >
              {ORDER_DETAIL_PAGE.shippingHeading}
            </h2>
            <p className={warmSectionDescription}>
              Estimated delivery · {order.estimatedDelivery}
            </p>
          </div>

          <div className="mt-10 grid grid-cols-1 gap-6 lg:grid-cols-12">
            <article
              data-account="detail-card"
              className={`${addressCard} lg:col-span-7`}
            >
              <ShippingTimeline steps={order.timeline} tone="warm" />
            </article>
            <aside
              data-account="detail-card"
              className={`${addressCard} lg:col-span-5`}
            >
              <p className="font-sans text-[10px] uppercase tracking-[0.2em] text-[rgb(168_138_78)]">
                Live Status
              </p>
              <p className="mt-3 font-serif text-[1.35rem] font-light text-[#1a1a1a]">
                {order.liveStatus ?? order.statusLabel}
              </p>
              <dl className="mt-6 space-y-4 text-[14px] text-[rgb(26_26_26/0.65)]">
                <div>
                  <dt className="font-sans text-[9px] uppercase tracking-[0.18em] text-[rgb(168_138_78)]">
                    Courier
                  </dt>
                  <dd className="mt-1">{order.courier ?? "—"}</dd>
                </div>
                <div>
                  <dt className="font-sans text-[9px] uppercase tracking-[0.18em] text-[rgb(168_138_78)]">
                    Tracking Number
                  </dt>
                  <dd className="mt-1">{order.trackingNumber ?? "—"}</dd>
                </div>
              </dl>
            </aside>
          </div>
        </div>
      </section>

      <section className={darkSection} aria-label="Payment and packaging">
        <div className={accountSectionInner}>
          <div className="grid grid-cols-1 gap-5 lg:grid-cols-2">
            <article data-account="detail-card" className={formCard}>
              <p className={accountEyebrow}>
                {ORDER_DETAIL_PAGE.paymentHeading}
              </p>
              <p className={`${paymentBrand} mt-5`}>{order.payment.methodLabel}</p>
              <p className={paymentNumber}>
                {order.payment.lastFour
                  ? `•••• ${order.payment.lastFour}`
                  : "•••• Secure"}
              </p>
              <p className={paymentMeta}>
                {order.payment.status} · {order.payment.dateLabel}
              </p>
              <p className={`${paymentMeta} mt-2`}>
                Transaction · {order.payment.transactionId}
              </p>
              <span className={`${paymentDefault} mt-5 inline-flex`}>
                Invoice Ready
              </span>
              <button type="button" className={`${orderBtnGhost} mt-6`}>
                Download Invoice
              </button>
            </article>

            <article data-account="detail-card" className={formCard}>
              <p className={accountEyebrow}>
                {ORDER_DETAIL_PAGE.addressHeading}
              </p>
              <h3 className={`${addressLabel} mt-5 !text-[rgb(248_247_244)]`}>
                {order.shippingAddress.label}
              </h3>
              <p className={`${addressCity} !text-[rgb(214_196_158)]`}>
                {order.shippingAddress.city}
              </p>
              <p className={`${addressLines} !text-[rgb(248_247_244/0.62)]`}>
                {order.shippingAddress.line1}
                <br />
                {order.shippingAddress.city}, {order.shippingAddress.region}{" "}
                {order.shippingAddress.postal}
                <br />
                {order.shippingAddress.country}
              </p>
            </article>
          </div>

          <article
            data-account="detail-card"
            className={`${formCard} mt-5`}
          >
            <p className={accountEyebrow}>
              {ORDER_DETAIL_PAGE.packagingHeading}
            </p>
            <div className="mt-6 max-w-[520px]">
              <ShippingTimeline steps={order.packagingTimeline} />
            </div>
          </article>

          <div className="mt-10">
            <h2 className={`${sectionHeading} text-center`}>
              {ORDER_DETAIL_PAGE.actionsHeading}
            </h2>
            <div className="mt-8 flex flex-wrap justify-center gap-2.5">
              {ORDER_DETAIL_ACTIONS.map((action, index) => {
                const href =
                  action.id === "review"
                    ? "/success/review"
                    : action.id === "return"
                      ? "/success/return"
                      : action.id === "concierge"
                        ? "/contact"
                        : action.id === "reorder"
                          ? "/collection"
                          : null;
                const className =
                  index === 0 ? orderBtnPrimary : orderBtnGhost;

                if (href) {
                  return (
                    <Link key={action.id} href={href} className={className}>
                      {action.label}
                    </Link>
                  );
                }

                return (
                  <button
                    key={action.id}
                    type="button"
                    className={className}
                  >
                    {action.label}
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      </section>
    </AccountSubpageShell>
  );
}
