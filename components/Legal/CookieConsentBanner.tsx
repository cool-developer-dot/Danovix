"use client";

import Link from "next/link";
import { useState, useSyncExternalStore } from "react";

import {
  readCookieConsent,
  writeCookieConsent,
} from "@/lib/legal/consent";

function subscribe() {
  return () => undefined;
}

function getConsentNeeded() {
  return readCookieConsent() == null;
}

export function CookieConsentBanner() {
  const needsConsent = useSyncExternalStore(
    subscribe,
    getConsentNeeded,
    () => false,
  );
  const [dismissed, setDismissed] = useState(false);
  const visible = needsConsent && !dismissed;

  if (!visible) return null;

  return (
    <div
      role="dialog"
      aria-labelledby="cookie-consent-title"
      aria-describedby="cookie-consent-desc"
      className="fixed inset-x-4 bottom-4 z-[60] mx-auto w-[min(100%-2rem,640px)] rounded-[22px] border border-[rgb(248_247_244/0.14)] bg-[rgb(18_16_14/0.94)] p-5 shadow-[0_28px_64px_-24px_rgb(0_0_0/0.75)] backdrop-blur-xl sm:inset-x-auto sm:right-6 sm:bottom-6 sm:left-auto sm:w-[min(92vw,420px)]"
    >
      <p
        id="cookie-consent-title"
        className="font-serif text-[1.25rem] font-light text-[rgb(248_247_244)]"
      >
        Your privacy, considered.
      </p>
      <p
        id="cookie-consent-desc"
        className="mt-3 text-[13px] leading-relaxed text-[rgb(248_247_244/0.62)]"
      >
        We use essential local storage for browsing continuity and consent
        records. Analytics cookies are off unless you allow them.{" "}
        <Link
          href="/cookie-policy"
          className="text-[rgb(214_196_158)] underline-offset-2 hover:underline"
        >
          Cookie Policy
        </Link>
        .
      </p>
      <div className="mt-5 flex flex-wrap gap-2">
        <button
          type="button"
          className="inline-flex min-h-10 flex-1 items-center justify-center rounded-[14px] border border-[rgb(198_161_91/0.4)] bg-[linear-gradient(160deg,rgb(214_196_158),rgb(198_161_91))] px-4 font-sans text-[10px] font-medium uppercase tracking-[0.18em] text-[#111111]"
          onClick={() => {
            writeCookieConsent({ preferences: true, analytics: false });
            setDismissed(true);
          }}
        >
          Accept Essential
        </button>
        <button
          type="button"
          className="inline-flex min-h-10 flex-1 items-center justify-center rounded-[14px] border border-[rgb(248_247_244/0.14)] px-4 font-sans text-[10px] font-medium uppercase tracking-[0.18em] text-[rgb(248_247_244/0.8)]"
          onClick={() => {
            writeCookieConsent({ preferences: true, analytics: true });
            setDismissed(true);
          }}
        >
          Allow Analytics
        </button>
      </div>
    </div>
  );
}
