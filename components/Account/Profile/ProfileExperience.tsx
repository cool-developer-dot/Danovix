"use client";

import { useCallback, useRef, useState } from "react";

import { ACCOUNT_MEMBER } from "@/lib/account/constants";
import {
  PROFILE_DEFAULTS,
  PROFILE_FIELDS,
  PROFILE_PAGE,
  PROFILE_PHOTO,
  PROFILE_PREFERENCES,
  PROFILE_SECURITY,
} from "@/lib/account/profile-data";
import { cn } from "@/lib/cn";

import {
  accountEyebrow,
  accountSectionInner,
  darkSection,
  formCard,
  formField,
  formFullWidth,
  formGrid,
  formInput,
  formLabel,
  orderBtnGhost,
  orderBtnPrimary,
  photoInitials,
  photoUpload,
  preferenceCopy,
  preferenceDesc,
  preferenceLabel,
  preferenceRow,
  profileTier,
  sectionDescription,
  sectionHeading,
  switchThumb,
  switchThumbOn,
  switchTrack,
  switchTrackOn,
} from "../account.styles";
import { AccountSubpageHero } from "../shared/AccountSubpageHero";
import { AccountSubpageShell } from "../shared/AccountSubpageShell";
import { useSubpageAnimations } from "../shared/useSubpageAnimations";

export function ProfileExperience() {
  const rootRef = useRef<HTMLDivElement>(null);
  useSubpageAnimations(rootRef);

  const [form, setForm] = useState({ ...PROFILE_DEFAULTS });
  const [prefs, setPrefs] = useState(() =>
    Object.fromEntries(
      PROFILE_PREFERENCES.items.map((item) => [item.id, item.defaultOn]),
    ),
  );
  const [status, setStatus] = useState<string | null>(null);

  const onChange = useCallback(
    (key: keyof typeof PROFILE_DEFAULTS, value: string) => {
      setForm((current) => ({ ...current, [key]: value }));
    },
    [],
  );

  const togglePref = useCallback((id: string) => {
    setPrefs((current) => ({ ...current, [id]: !current[id] }));
  }, []);

  return (
    <AccountSubpageShell rootRef={rootRef}>
      <AccountSubpageHero
        eyebrow={PROFILE_PAGE.eyebrow}
        heading={PROFILE_PAGE.heading}
        description={PROFILE_PAGE.description}
        headingId="profile-page-heading"
        backHref="/account"
        backLabel="Back to Lounge"
      />

      <section className={darkSection} aria-labelledby="profile-photo-heading">
        <div className={accountSectionInner}>
          <article data-account="form-card" className={formCard}>
            <div className="mx-auto max-w-[420px] text-center">
              <p className={accountEyebrow}>{PROFILE_PHOTO.eyebrow}</p>
              <h2
                id="profile-photo-heading"
                className={`${sectionHeading} mt-4`}
              >
                {PROFILE_PHOTO.heading}
              </h2>
              <p className={sectionDescription}>{PROFILE_PHOTO.description}</p>

              <button
                type="button"
                className={`${photoUpload} mt-8`}
                aria-label={PROFILE_PHOTO.upload}
              >
                <span className={photoInitials}>
                  {ACCOUNT_MEMBER.avatarInitials}
                </span>
              </button>

              <p className={`${profileTier} mt-5`}>
                {ACCOUNT_MEMBER.tier} · Since {ACCOUNT_MEMBER.memberSince}
              </p>
              <button type="button" className={`${orderBtnGhost} mt-6`}>
                {PROFILE_PHOTO.upload}
              </button>
              <p className="mt-3 text-[12px] text-[rgb(248_247_244/0.4)]">
                {PROFILE_PHOTO.cropHint}
              </p>
            </div>
          </article>
        </div>
      </section>

      <section className={darkSection} aria-labelledby="profile-info-heading">
        <div className={accountSectionInner}>
          <article data-account="form-card" className={formCard}>
            <p className={accountEyebrow}>Personal Information</p>
            <h2
              id="profile-info-heading"
              className={`${sectionHeading} mt-4 text-left`}
            >
              Your Details
            </h2>

            <form
              className={formGrid}
              onSubmit={(event) => {
                event.preventDefault();
                setStatus(PROFILE_PAGE.saved);
              }}
            >
              {(
                [
                  ["fullName", PROFILE_FIELDS.fullName],
                  ["email", PROFILE_FIELDS.email],
                  ["phone", PROFILE_FIELDS.phone],
                  ["birthday", PROFILE_FIELDS.birthday],
                  ["gender", PROFILE_FIELDS.gender],
                  ["language", PROFILE_FIELDS.language],
                  ["country", PROFILE_FIELDS.country],
                ] as const
              ).map(([key, label]) => (
                <div
                  key={key}
                  className={cn(
                    formField,
                    (key === "email" || key === "fullName") && formFullWidth,
                  )}
                >
                  <input
                    id={`profile-${key}`}
                    className={formInput}
                    placeholder=" "
                    value={form[key]}
                    onChange={(event) => onChange(key, event.target.value)}
                    autoComplete={
                      key === "email"
                        ? "email"
                        : key === "fullName"
                          ? "name"
                          : key === "phone"
                            ? "tel"
                            : "off"
                    }
                  />
                  <label htmlFor={`profile-${key}`} className={formLabel}>
                    {label}
                  </label>
                </div>
              ))}

              <div className={`${formFullWidth} mt-2`}>
                <button type="submit" className={orderBtnPrimary}>
                  {PROFILE_PAGE.save}
                </button>
              </div>
            </form>

            {status ? (
              <p
                className="mt-5 text-[13px] text-[rgb(214_196_158)]"
                role="status"
                aria-live="polite"
              >
                {status}
              </p>
            ) : null}
          </article>
        </div>
      </section>

      <section className={darkSection} aria-labelledby="profile-security-heading">
        <div className={accountSectionInner}>
          <div className="mx-auto max-w-[640px] text-center">
            <p className={accountEyebrow}>{PROFILE_SECURITY.eyebrow}</p>
            <h2
              id="profile-security-heading"
              className={sectionHeading}
            >
              {PROFILE_SECURITY.heading}
            </h2>
            <p className={sectionDescription}>
              {PROFILE_SECURITY.description}
            </p>
          </div>

          <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2">
            {PROFILE_SECURITY.cards.map((card) => (
              <article
                key={card.id}
                data-account="security-card"
                className={formCard}
              >
                <h3 className="font-serif text-[1.35rem] font-light text-[rgb(248_247_244)]">
                  {card.title}
                </h3>
                <p className="mt-3 text-[14px] leading-relaxed text-[rgb(248_247_244/0.55)]">
                  {card.body}
                </p>
                <button
                  type="button"
                  className={`${orderBtnGhost} mt-6`}
                  disabled={card.future}
                  aria-disabled={card.future}
                >
                  {card.action}
                </button>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section
        className={darkSection}
        aria-labelledby="profile-preferences-heading"
      >
        <div className={accountSectionInner}>
          <article data-account="form-card" className={formCard}>
            <p className={accountEyebrow}>{PROFILE_PREFERENCES.eyebrow}</p>
            <h2
              id="profile-preferences-heading"
              className={`${sectionHeading} mt-4 text-left`}
            >
              {PROFILE_PREFERENCES.heading}
            </h2>
            <p className={`${sectionDescription} text-left`}>
              {PROFILE_PREFERENCES.description}
            </p>

            <div className="mt-4">
              {PROFILE_PREFERENCES.items.map((item) => {
                const on = Boolean(prefs[item.id]);
                return (
                  <div key={item.id} className={preferenceRow}>
                    <div className={preferenceCopy}>
                      <p className={preferenceLabel}>{item.label}</p>
                      <p className={preferenceDesc}>{item.description}</p>
                    </div>
                    <button
                      type="button"
                      role="switch"
                      aria-checked={on}
                      aria-label={item.label}
                      className={cn(switchTrack, on && switchTrackOn)}
                      onClick={() => togglePref(item.id)}
                    >
                      <span
                        className={cn(switchThumb, on && switchThumbOn)}
                        aria-hidden="true"
                      />
                    </button>
                  </div>
                );
              })}
            </div>
          </article>
        </div>
      </section>
    </AccountSubpageShell>
  );
}
