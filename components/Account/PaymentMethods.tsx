import { CreditCard } from "lucide-react";
import Link from "next/link";

import {
  ACCOUNT_PAYMENTS,
  ACCOUNT_PAYMENTS_COPY,
} from "@/lib/account/constants";

import {
  accountEyebrow,
  accountSectionInner,
  darkSection,
  paymentBrand,
  paymentCard,
  paymentDefault,
  paymentGrid,
  paymentMeta,
  paymentNumber,
  sectionDescription,
  sectionHeader,
  sectionHeading,
  sectionViewAll,
} from "./account.styles";

function maskedNumber(lastFour?: string) {
  if (!lastFour) return "•••• Secure";
  return `•••• ${lastFour}`;
}

export function PaymentMethods() {
  return (
    <section
      id="payments"
      aria-labelledby="account-payments-heading"
      className={darkSection}
    >
      <div className={accountSectionInner}>
        <div className={sectionHeader}>
          <p data-account="payments-eyebrow" className={accountEyebrow}>
            {ACCOUNT_PAYMENTS_COPY.eyebrow}
          </p>
          <h2
            id="account-payments-heading"
            data-account="payments-heading"
            className={sectionHeading}
          >
            {ACCOUNT_PAYMENTS_COPY.heading}
          </h2>
          <p
            data-account="payments-description"
            className={sectionDescription}
          >
            {ACCOUNT_PAYMENTS_COPY.description}
          </p>
          <Link
            href={ACCOUNT_PAYMENTS_COPY.manageHref}
            className={sectionViewAll}
          >
            {ACCOUNT_PAYMENTS_COPY.manage}
            <span aria-hidden="true">→</span>
          </Link>
        </div>
      </div>

      <div className={paymentGrid}>
        {ACCOUNT_PAYMENTS.map((method) => (
          <article
            key={method.id}
            data-account="payment-card"
            className={paymentCard}
          >
            <div className="flex items-center justify-between gap-3">
              <p className={paymentBrand}>{method.label}</p>
              <CreditCard
                className="h-4 w-4 text-[rgb(214_196_158/0.75)]"
                strokeWidth={1.25}
                aria-hidden="true"
              />
            </div>
            <p className={paymentNumber}>{maskedNumber(method.lastFour)}</p>
            <p className={paymentMeta}>
              {method.expiry ? `Expires ${method.expiry}` : "Tokenized wallet"}
            </p>
            {method.isDefault ? (
              <span className={paymentDefault}>
                {ACCOUNT_PAYMENTS_COPY.defaultLabel}
              </span>
            ) : null}
          </article>
        ))}
      </div>
    </section>
  );
}
