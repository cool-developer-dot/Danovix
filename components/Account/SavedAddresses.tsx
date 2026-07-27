"use client";

import { MapPin, Plus } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

import {
  ACCOUNT_ADDRESSES,
  ACCOUNT_ADDRESSES_COPY,
} from "@/lib/account/constants";

import {
  accountEyebrow,
  accountSectionInner,
  addressActions,
  addressAddCard,
  addressBtn,
  addressCard,
  addressCity,
  addressDefault,
  addressGrid,
  addressIcon,
  addressLabel,
  addressLines,
  sectionHeader,
  sectionViewAll,
  warmBg,
  warmNoise,
  warmSection,
  warmSectionDescription,
  warmSectionHeading,
} from "./account.styles";

export function SavedAddresses() {
  const [notice, setNotice] = useState<string | null>(null);

  return (
    <section
      id="addresses"
      aria-labelledby="account-addresses-heading"
      className={warmSection}
    >
      <div className={warmBg} aria-hidden="true" />
      <div className={warmNoise} aria-hidden="true" />

      <div className={accountSectionInner}>
        <div className={sectionHeader}>
          <p
            data-account="addresses-eyebrow"
            className={`${accountEyebrow} !text-[rgb(168_138_78)]`}
          >
            {ACCOUNT_ADDRESSES_COPY.eyebrow}
          </p>
          <h2
            id="account-addresses-heading"
            data-account="addresses-heading"
            className={warmSectionHeading}
          >
            {ACCOUNT_ADDRESSES_COPY.heading}
          </h2>
          <p
            data-account="addresses-description"
            className={warmSectionDescription}
          >
            {ACCOUNT_ADDRESSES_COPY.description}
          </p>
          <Link
            href={ACCOUNT_ADDRESSES_COPY.manageHref}
            className={`${sectionViewAll} !text-[rgb(168_138_78)]`}
          >
            {ACCOUNT_ADDRESSES_COPY.manage}
            <span aria-hidden="true">→</span>
          </Link>
        </div>
      </div>

      <div className={addressGrid}>
        {ACCOUNT_ADDRESSES.map((address) => (
          <article
            key={address.id}
            data-account="address-card"
            className={addressCard}
          >
            <span className={addressIcon} aria-hidden="true">
              <MapPin className="h-[18px] w-[18px] stroke-[1.25]" />
            </span>
            <h3 className={addressLabel}>{address.label}</h3>
            <p className={addressCity}>{address.city}</p>
            <p className={addressLines}>
              {address.line1}
              <br />
              {address.city}, {address.region} {address.postal}
              <br />
              {address.country}
            </p>
            {address.isDefault ? (
              <span className={addressDefault}>
                {ACCOUNT_ADDRESSES_COPY.defaultLabel}
              </span>
            ) : null}
            <div className={addressActions}>
              <button
                type="button"
                className={addressBtn}
                onClick={() => setNotice(`Editing ${address.label}`)}
              >
                {ACCOUNT_ADDRESSES_COPY.edit}
              </button>
              <button
                type="button"
                className={addressBtn}
                onClick={() => setNotice(`Changing ${address.label}`)}
              >
                {ACCOUNT_ADDRESSES_COPY.change}
              </button>
            </div>
          </article>
        ))}

        <button
          type="button"
          data-account="address-card"
          className={addressAddCard}
          onClick={() => setNotice("Add new address")}
        >
          <span className={addressIcon} aria-hidden="true">
            <Plus className="h-[18px] w-[18px] stroke-[1.25]" />
          </span>
          <span className={addressLabel}>{ACCOUNT_ADDRESSES_COPY.addNew}</span>
        </button>
      </div>

      {notice ? (
        <p className="sr-only" role="status" aria-live="polite">
          {notice}
        </p>
      ) : null}
    </section>
  );
}
