"use client";

import { Briefcase, Home, MapPin, Plus } from "lucide-react";
import { useCallback, useMemo, useRef, useState } from "react";

import {
  ADDRESSES_PAGE,
  ADDRESS_BOOK,
  type AddressBookEntry,
} from "@/lib/account/profile-data";

import {
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
  emptyDescription,
  emptyHeading,
  emptyState,
  orderBtnPrimary,
  warmBg,
  warmNoise,
  warmSection,
} from "../account.styles";
import { AccountSubpageHero } from "../shared/AccountSubpageHero";
import { AccountSubpageShell } from "../shared/AccountSubpageShell";
import { useSubpageAnimations } from "../shared/useSubpageAnimations";

const TYPE_ICONS = {
  home: Home,
  office: Briefcase,
  other: MapPin,
} as const;

export function AddressesExperience() {
  const rootRef = useRef<HTMLDivElement>(null);
  useSubpageAnimations(rootRef);

  const [addresses, setAddresses] = useState<AddressBookEntry[]>(() => [
    ...ADDRESS_BOOK,
  ]);
  const [notice, setNotice] = useState<string | null>(null);

  const setDefault = useCallback((id: string) => {
    setAddresses((current) =>
      current.map((address) => ({
        ...address,
        isDefault: address.id === id,
      })),
    );
    setNotice("Default address updated.");
  }, []);

  const remove = useCallback((id: string) => {
    setAddresses((current) => current.filter((address) => address.id !== id));
    setNotice("Address removed.");
  }, []);

  const duplicate = useCallback((id: string) => {
    setAddresses((current) => {
      const source = current.find((address) => address.id === id);
      if (!source) return current;
      return [
        ...current,
        {
          ...source,
          id: `${source.id}-copy-${Date.now()}`,
          label: `${source.label} Copy`,
          isDefault: false,
        },
      ];
    });
    setNotice("Address duplicated.");
  }, []);

  const empty = useMemo(() => addresses.length === 0, [addresses.length]);

  return (
    <AccountSubpageShell rootRef={rootRef}>
      <AccountSubpageHero
        eyebrow={ADDRESSES_PAGE.eyebrow}
        heading={ADDRESSES_PAGE.heading}
        description={ADDRESSES_PAGE.description}
        headingId="addresses-page-heading"
        backHref="/account"
        backLabel="Back to Lounge"
      />

      <section className={warmSection} aria-label="Saved addresses">
        <div className={warmBg} aria-hidden="true" />
        <div className={warmNoise} aria-hidden="true" />

        {empty ? (
          <div className={accountSectionInner}>
            <div className={emptyState}>
              <h2 className={`${emptyHeading} !text-[#1a1a1a]`}>
                {ADDRESSES_PAGE.emptyHeading}
              </h2>
              <p className={`${emptyDescription} !text-[rgb(26_26_26/0.55)]`}>
                {ADDRESSES_PAGE.emptyDescription}
              </p>
              <button
                type="button"
                className={`${orderBtnPrimary} mt-8`}
                onClick={() => setNotice("Add address ready.")}
              >
                {ADDRESSES_PAGE.addNew}
              </button>
            </div>
          </div>
        ) : (
          <div className={addressGrid}>
            {addresses.map((address) => {
              const Icon = TYPE_ICONS[address.type];
              return (
                <article
                  key={address.id}
                  data-account="address-card"
                  className={addressCard}
                >
                  <span className={addressIcon} aria-hidden="true">
                    <Icon className="h-[18px] w-[18px] stroke-[1.25]" />
                  </span>
                  <h3 className={addressLabel}>{address.label}</h3>
                  <p className={addressCity}>
                    {address.type === "home"
                      ? "Home"
                      : address.type === "office"
                        ? "Office"
                        : "Other"}{" "}
                    · {address.city}
                  </p>
                  <p className={addressLines}>
                    {address.line1}
                    <br />
                    {address.city}, {address.region} {address.postal}
                    <br />
                    {address.country}
                  </p>
                  {address.isDefault ? (
                    <span className={addressDefault}>
                      {ADDRESSES_PAGE.defaultLabel}
                    </span>
                  ) : null}
                  <div className={addressActions}>
                    <button
                      type="button"
                      className={addressBtn}
                      onClick={() => setNotice(`Editing ${address.label}`)}
                    >
                      {ADDRESSES_PAGE.edit}
                    </button>
                    <button
                      type="button"
                      className={addressBtn}
                      onClick={() => duplicate(address.id)}
                    >
                      {ADDRESSES_PAGE.duplicate}
                    </button>
                    {!address.isDefault ? (
                      <button
                        type="button"
                        className={addressBtn}
                        onClick={() => setDefault(address.id)}
                      >
                        {ADDRESSES_PAGE.setDefault}
                      </button>
                    ) : null}
                    <button
                      type="button"
                      className={addressBtn}
                      onClick={() => remove(address.id)}
                    >
                      {ADDRESSES_PAGE.remove}
                    </button>
                  </div>
                </article>
              );
            })}

            <button
              type="button"
              data-account="address-card"
              className={addressAddCard}
              onClick={() => setNotice("Add new address")}
            >
              <span className={addressIcon} aria-hidden="true">
                <Plus className="h-[18px] w-[18px] stroke-[1.25]" />
              </span>
              <span className={addressLabel}>{ADDRESSES_PAGE.addNew}</span>
            </button>
          </div>
        )}
      </section>

      {notice ? (
        <p className="sr-only" role="status" aria-live="polite">
          {notice}
        </p>
      ) : null}
    </AccountSubpageShell>
  );
}
