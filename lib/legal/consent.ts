import { COOKIE_CONSENT_KEY, TERMS_VERSION_KEY } from "./types";
import { POLICY_VERSION } from "./types";

export type CookieConsentRecord = {
  essential: true;
  preferences: boolean;
  analytics: boolean;
  version: string;
  timestamp: string;
};

export type TermsAcceptanceRecord = {
  accepted: true;
  termsVersion: string;
  privacyVersion: string;
  timestamp: string;
  source: "signup" | "banner" | "settings";
};

export function readCookieConsent(): CookieConsentRecord | null {
  if (typeof window === "undefined") return null;
  try {
    const raw = window.localStorage.getItem(COOKIE_CONSENT_KEY);
    if (!raw) return null;
    return JSON.parse(raw) as CookieConsentRecord;
  } catch {
    return null;
  }
}

export function writeCookieConsent(
  partial: Omit<CookieConsentRecord, "essential" | "version" | "timestamp"> & {
    analytics?: boolean;
    preferences?: boolean;
  },
): CookieConsentRecord {
  const record: CookieConsentRecord = {
    essential: true,
    preferences: partial.preferences ?? true,
    analytics: partial.analytics ?? false,
    version: POLICY_VERSION,
    timestamp: new Date().toISOString(),
  };
  window.localStorage.setItem(COOKIE_CONSENT_KEY, JSON.stringify(record));
  return record;
}

export function writeTermsAcceptance(
  source: TermsAcceptanceRecord["source"],
): TermsAcceptanceRecord {
  const record: TermsAcceptanceRecord = {
    accepted: true,
    termsVersion: POLICY_VERSION,
    privacyVersion: POLICY_VERSION,
    timestamp: new Date().toISOString(),
    source,
  };
  window.localStorage.setItem(TERMS_VERSION_KEY, JSON.stringify(record));
  return record;
}

export function readTermsAcceptance(): TermsAcceptanceRecord | null {
  if (typeof window === "undefined") return null;
  try {
    const raw = window.localStorage.getItem(TERMS_VERSION_KEY);
    if (!raw) return null;
    return JSON.parse(raw) as TermsAcceptanceRecord;
  } catch {
    return null;
  }
}
