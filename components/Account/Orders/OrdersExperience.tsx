"use client";

import Image from "next/image";
import Link from "next/link";
import { memo, useMemo, useRef, useState } from "react";

import {
  ACCOUNT_ORDERS_COPY,
  ORDER_STATUS_STEPS,
  orderStepIndex,
} from "@/lib/account/constants";
import {
  filterOrders,
  FULL_ACCOUNT_ORDERS,
  ORDER_CARD_ACTIONS,
  ORDER_FILTERS,
  ORDERS_PAGE,
  type OrderDetailRecord,
  type OrderFilterId,
} from "@/lib/account/orders-data";
import { cn } from "@/lib/cn";

import {
  accountSectionInner,
  darkSection,
  emptyDescription,
  emptyHeading,
  emptyState,
  filterChip,
  filterChipActive,
  filterChipIdle,
  filtersBar,
  filtersRoot,
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
} from "../account.styles";
import { AccountSubpageHero } from "../shared/AccountSubpageHero";
import { AccountSubpageShell } from "../shared/AccountSubpageShell";
import { ShippingTimeline } from "../shared/ShippingTimeline";
import { useSubpageAnimations } from "../shared/useSubpageAnimations";

const STEP_LABELS: Record<(typeof ORDER_STATUS_STEPS)[number], string> = {
  reserved: "Reserved",
  preparing: "Preparing",
  shipped: "Shipped",
  delivered: "Delivered",
};

const FullOrderCard = memo(function FullOrderCard({
  order,
}: {
  order: OrderDetailRecord;
}) {
  const activeIndex = orderStepIndex(order.status);

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
                {order.collection} · {order.orderNumber} ·{" "}
                {order.purchaseDateLabel}
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

          <div className="mt-7 grid grid-cols-1 gap-6 lg:grid-cols-2">
            <ShippingTimeline steps={order.timeline} />
            <div>
              <div className={orderActions}>
                <Link
                  href={`/account/orders/${order.id}`}
                  className={orderBtnPrimary}
                >
                  {ORDER_CARD_ACTIONS.track}
                </Link>
                <Link
                  href={`/account/orders/${order.id}`}
                  className={orderBtnGhost}
                >
                  {ORDER_CARD_ACTIONS.details}
                </Link>
                <button type="button" className={orderBtnGhost}>
                  {ORDER_CARD_ACTIONS.invoice}
                </button>
                <Link href="/success/return" className={orderBtnGhost}>
                  {ORDER_CARD_ACTIONS.returnRequest}
                </Link>
                <button type="button" className={orderBtnGhost}>
                  {ORDER_CARD_ACTIONS.reorder}
                </button>
                <Link href="/contact" className={orderBtnGhost}>
                  {ORDER_CARD_ACTIONS.support}
                </Link>
                <Link href="/success/review" className={orderBtnGhost}>
                  {ORDER_CARD_ACTIONS.review}
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </article>
  );
});

export function OrdersExperience() {
  const rootRef = useRef<HTMLDivElement>(null);
  const [filter, setFilter] = useState<OrderFilterId>("all");
  useSubpageAnimations(rootRef);

  const visible = useMemo(
    () => filterOrders(FULL_ACCOUNT_ORDERS, filter),
    [filter],
  );

  return (
    <AccountSubpageShell rootRef={rootRef}>
      <AccountSubpageHero
        eyebrow={ORDERS_PAGE.eyebrow}
        heading={ORDERS_PAGE.heading}
        description={ORDERS_PAGE.description}
        headingId="orders-page-heading"
        backHref="/account"
        backLabel="Back to Lounge"
      />

      <div data-account="filters" className={filtersRoot}>
        <div className={filtersBar} role="tablist" aria-label="Order filters">
          {ORDER_FILTERS.map((item) => {
            const active = filter === item.id;
            return (
              <button
                key={item.id}
                type="button"
                role="tab"
                aria-selected={active}
                className={cn(
                  filterChip,
                  active ? filterChipActive : filterChipIdle,
                )}
                onClick={() => setFilter(item.id)}
              >
                {item.label}
              </button>
            );
          })}
        </div>
      </div>

      <section className={darkSection} aria-label="Order history">
        {visible.length === 0 ? (
          <div className={accountSectionInner}>
            <div className={emptyState}>
              <h2 className={emptyHeading}>{ORDERS_PAGE.empty}</h2>
              <p className={emptyDescription}>
                {ACCOUNT_ORDERS_COPY.empty}
              </p>
            </div>
          </div>
        ) : (
          <div className={ordersList}>
            {visible.map((order) => (
              <FullOrderCard key={order.id} order={order} />
            ))}
          </div>
        )}
      </section>
    </AccountSubpageShell>
  );
}
