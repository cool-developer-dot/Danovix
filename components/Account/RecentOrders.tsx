"use client";

import Image from "next/image";
import Link from "next/link";
import { memo } from "react";

import {
  ACCOUNT_ORDERS,
  ACCOUNT_ORDERS_COPY,
  ORDER_STATUS_STEPS,
  orderStepIndex,
  type AccountOrder,
} from "@/lib/account/constants";
import { cn } from "@/lib/cn";

import {
  accountEyebrow,
  accountSectionInner,
  darkSection,
  orderActions,
  orderBody,
  orderBtnGhost,
  orderBtnPrimary,
  orderCard,
  orderImage,
  orderLayout,
  orderMedia,
  orderMeta,
  orderName,
  orderProgressEta,
  orderProgressFill,
  orderProgressHeader,
  orderProgressLabel,
  orderProgressTrack,
  orderProgressWrap,
  ordersList,
  orderStatusBadge,
  orderStep,
  orderStepActive,
  orderSteps,
  orderTop,
  sectionDescription,
  sectionHeader,
  sectionHeading,
  sectionViewAll,
} from "./account.styles";

const STEP_LABELS: Record<(typeof ORDER_STATUS_STEPS)[number], string> = {
  reserved: "Reserved",
  preparing: "Preparing",
  shipped: "Shipped",
  delivered: "Delivered",
};

const OrderCard = memo(function OrderCard({ order }: { order: AccountOrder }) {
  const activeIndex = orderStepIndex(order.status);
  const detailHref = `/account/orders/${order.id}`;

  return (
    <article data-account="order-card" className={orderCard}>
      <div className={orderLayout}>
        <div className={orderMedia}>
          <Image
            src={order.imageSrc}
            alt={order.imageAlt}
            fill
            sizes="(max-width: 1024px) 90vw, 22vw"
            loading="lazy"
            className={orderImage}
          />
        </div>

        <div className={orderBody}>
          <div className={orderTop}>
            <div>
              <h3 className={orderName}>{order.productName}</h3>
              <p className={orderMeta}>
                {order.collection} · {order.orderNumber}
              </p>
            </div>
            <span className={orderStatusBadge}>{order.statusLabel}</span>
          </div>

          <div className={orderProgressWrap}>
            <div className={orderProgressHeader}>
              <p className={orderProgressLabel}>{order.statusLabel}</p>
              <p className={orderProgressEta}>
                Estimated Delivery · {order.estimatedDelivery}
              </p>
            </div>
            <div
              className={orderProgressTrack}
              role="progressbar"
              aria-valuenow={order.progress}
              aria-valuemin={0}
              aria-valuemax={100}
              aria-label={`${order.productName} order progress`}
            >
              <div
                className={orderProgressFill}
                style={{ width: `${order.progress}%` }}
              />
            </div>
            <div className={orderSteps} aria-hidden="true">
              {ORDER_STATUS_STEPS.map((step, index) => (
                <span
                  key={step}
                  className={cn(
                    orderStep,
                    index <= activeIndex && orderStepActive,
                  )}
                >
                  {STEP_LABELS[step]}
                </span>
              ))}
            </div>
          </div>

          <div className={orderActions}>
            <Link href={detailHref} className={orderBtnPrimary}>
              {ACCOUNT_ORDERS_COPY.track}
            </Link>
            <Link href={detailHref} className={orderBtnGhost}>
              {ACCOUNT_ORDERS_COPY.details}
            </Link>
            <button type="button" className={orderBtnGhost}>
              {ACCOUNT_ORDERS_COPY.invoice}
            </button>
          </div>
        </div>
      </div>
    </article>
  );
});

export function RecentOrders() {
  return (
    <section
      id="recent-orders"
      aria-labelledby="account-orders-heading"
      className={darkSection}
    >
      <div className={accountSectionInner}>
        <div className={sectionHeader}>
          <p data-account="orders-eyebrow" className={accountEyebrow}>
            {ACCOUNT_ORDERS_COPY.eyebrow}
          </p>
          <h2
            id="account-orders-heading"
            data-account="orders-heading"
            className={sectionHeading}
          >
            {ACCOUNT_ORDERS_COPY.heading}
          </h2>
          <p
            data-account="orders-description"
            className={sectionDescription}
          >
            {ACCOUNT_ORDERS_COPY.description}
          </p>
          <Link
            href={ACCOUNT_ORDERS_COPY.viewAllHref}
            className={sectionViewAll}
          >
            {ACCOUNT_ORDERS_COPY.viewAll}
            <span aria-hidden="true">→</span>
          </Link>
        </div>
      </div>

      <div className={ordersList}>
        {ACCOUNT_ORDERS.map((order) => (
          <OrderCard key={order.id} order={order} />
        ))}
      </div>
    </section>
  );
}
