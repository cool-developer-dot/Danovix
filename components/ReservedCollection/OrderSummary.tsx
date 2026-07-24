"use client";

import {
  formatCurrency,
  getEstimatedTax,
  getSubtotal,
  getTotal,
  RESERVED_SUMMARY,
  type ReservedItem,
} from "@/lib/reserved/constants";

import { CheckoutButton } from "./CheckoutButton";
import {
  summaryCard,
  summaryDivider,
  summaryEyebrow,
  summaryGlow,
  summaryHeading,
  summaryLabel,
  summaryRow,
  summaryRows,
  summaryTotalLabel,
  summaryTotalRow,
  summaryTotalValue,
  summaryTrust,
  summaryValue,
  summaryValueAccent,
} from "./reserved.styles";

type OrderSummaryProps = {
  items: readonly ReservedItem[];
  checkingOut: boolean;
  onCheckout: () => void;
  showCheckout?: boolean;
};

export function OrderSummary({
  items,
  checkingOut,
  onCheckout,
  showCheckout = true,
}: OrderSummaryProps) {
  const subtotal = getSubtotal(items);
  const tax = getEstimatedTax(items);
  const total = getTotal(items);

  return (
    <aside
      data-reserved="summary"
      className={summaryCard}
      aria-labelledby="reserved-summary-heading"
    >
      <div className={summaryGlow} aria-hidden="true" />

      <p className={summaryEyebrow}>{RESERVED_SUMMARY.eyebrow}</p>
      <h2 id="reserved-summary-heading" className={summaryHeading}>
        {RESERVED_SUMMARY.heading}
      </h2>

      <div className={summaryRows}>
        <div className={summaryRow}>
          <span className={summaryLabel}>{RESERVED_SUMMARY.subtotal}</span>
          <span className={summaryValue}>{formatCurrency(subtotal)}</span>
        </div>
        <div className={summaryRow}>
          <span className={summaryLabel}>{RESERVED_SUMMARY.shipping}</span>
          <span className={summaryValueAccent}>
            {RESERVED_SUMMARY.shippingValue}
          </span>
        </div>
        <div className={summaryRow}>
          <span className={summaryLabel}>{RESERVED_SUMMARY.tax}</span>
          <span className={summaryValue}>{formatCurrency(tax)}</span>
        </div>
        <div className={summaryRow}>
          <span className={summaryLabel}>{RESERVED_SUMMARY.delivery}</span>
          <span className={summaryValueAccent}>
            {RESERVED_SUMMARY.deliveryValue}
          </span>
        </div>
      </div>

      <div className={summaryDivider} aria-hidden="true" />

      <div className={summaryTotalRow}>
        <span className={summaryTotalLabel}>{RESERVED_SUMMARY.total}</span>
        <span className={summaryTotalValue}>{formatCurrency(total)}</span>
      </div>

      <p className={summaryTrust}>{RESERVED_SUMMARY.trustNote}</p>

      {showCheckout ? (
        <div className="hidden lg:block">
          <CheckoutButton checkingOut={checkingOut} onCheckout={onCheckout} />
        </div>
      ) : null}
    </aside>
  );
}
