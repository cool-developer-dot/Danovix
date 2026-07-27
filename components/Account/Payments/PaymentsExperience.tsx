"use client";

import { CreditCard, ShieldCheck } from "lucide-react";
import { useCallback, useRef, useState } from "react";

import {
  PAYMENTS_PAGE,
  WALLET_METHODS,
  type WalletMethod,
} from "@/lib/account/profile-data";

import {
  accountEyebrow,
  accountSectionInner,
  darkSection,
  formCard,
  orderBtnGhost,
  orderBtnPrimary,
  paymentBrand,
  paymentCard,
  paymentDefault,
  paymentGrid,
  paymentMeta,
  paymentNumber,
  sectionDescription,
  sectionHeading,
  trustChip,
  trustGrid,
} from "../account.styles";
import { AccountSubpageHero } from "../shared/AccountSubpageHero";
import { AccountSubpageShell } from "../shared/AccountSubpageShell";
import { useSubpageAnimations } from "../shared/useSubpageAnimations";

function masked(lastFour?: string) {
  if (!lastFour) return "•••• Secure";
  return `•••• ${lastFour}`;
}

export function PaymentsExperience() {
  const rootRef = useRef<HTMLDivElement>(null);
  useSubpageAnimations(rootRef);

  const [methods, setMethods] = useState<WalletMethod[]>(() => [
    ...WALLET_METHODS,
  ]);
  const [notice, setNotice] = useState<string | null>(null);

  const setDefault = useCallback((id: string) => {
    setMethods((current) =>
      current.map((method) => ({
        ...method,
        isDefault: method.id === id,
      })),
    );
    setNotice("Default payment method updated.");
  }, []);

  const remove = useCallback((id: string) => {
    setMethods((current) => current.filter((method) => method.id !== id));
    setNotice("Payment method removed.");
  }, []);

  return (
    <AccountSubpageShell rootRef={rootRef}>
      <AccountSubpageHero
        eyebrow={PAYMENTS_PAGE.eyebrow}
        heading={PAYMENTS_PAGE.heading}
        description={PAYMENTS_PAGE.description}
        headingId="payments-page-heading"
        backHref="/account"
        backLabel="Back to Lounge"
      />

      <section className={darkSection} aria-label="Saved payment methods">
        <div className={paymentGrid}>
          {methods.map((method) => (
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
              <p className={paymentNumber}>{masked(method.lastFour)}</p>
              <p className={paymentMeta}>
                {method.expiry ? `Expires ${method.expiry}` : "Tokenized wallet"}
              </p>
              {method.isDefault ? (
                <span className={paymentDefault}>
                  {PAYMENTS_PAGE.defaultLabel}
                </span>
              ) : null}
              <div className="mt-5 flex flex-wrap gap-2">
                <button
                  type="button"
                  className={orderBtnGhost}
                  onClick={() => setNotice(`Editing ${method.label}`)}
                >
                  {PAYMENTS_PAGE.edit}
                </button>
                {!method.isDefault ? (
                  <button
                    type="button"
                    className={orderBtnGhost}
                    onClick={() => setDefault(method.id)}
                  >
                    {PAYMENTS_PAGE.setDefault}
                  </button>
                ) : null}
                <button
                  type="button"
                  className={orderBtnGhost}
                  onClick={() => remove(method.id)}
                >
                  {PAYMENTS_PAGE.remove}
                </button>
              </div>
            </article>
          ))}
        </div>

        <div className={`${accountSectionInner} mt-8 text-center`}>
          <button
            type="button"
            className={orderBtnPrimary}
            onClick={() => setNotice("Add payment method")}
          >
            {PAYMENTS_PAGE.addNew}
          </button>
        </div>
      </section>

      <section
        className={darkSection}
        aria-labelledby="payments-security-heading"
      >
        <div className={accountSectionInner}>
          <article data-account="form-card" className={formCard}>
            <div className="flex flex-col items-start gap-5 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <p className={accountEyebrow}>
                  {PAYMENTS_PAGE.securityEyebrow}
                </p>
                <h2
                  id="payments-security-heading"
                  className={`${sectionHeading} mt-4 text-left`}
                >
                  {PAYMENTS_PAGE.securityHeading}
                </h2>
                <p className={`${sectionDescription} text-left`}>
                  {PAYMENTS_PAGE.securityDescription}
                </p>
              </div>
              <span
                className="inline-flex h-14 w-14 shrink-0 items-center justify-center rounded-full border border-[rgb(198_161_91/0.4)] bg-[rgb(198_161_91/0.1)] text-[rgb(214_196_158)]"
                aria-hidden="true"
              >
                <ShieldCheck className="h-6 w-6 stroke-[1.2]" />
              </span>
            </div>

            <div className={trustGrid}>
              {PAYMENTS_PAGE.trustChips.map((chip) => (
                <span key={chip} className={trustChip}>
                  {chip}
                </span>
              ))}
            </div>
          </article>
        </div>
      </section>

      {notice ? (
        <p className="sr-only" role="status" aria-live="polite">
          {notice}
        </p>
      ) : null}
    </AccountSubpageShell>
  );
}
