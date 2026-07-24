"use client";

import { useEffect, useId, useRef, useState, type FormEvent } from "react";

import { cn } from "@/lib/cn";

import { FORGOT_FORM } from "../auth.constants";
import { TrustStrip } from "../TrustStrip";
import {
  authCardHeader,
  authEyebrow,
  authHeading,
  authSubtitle,
  fieldGroup,
  fieldIcon,
  fieldInput,
  fieldLabel,
  fieldList,
  fieldShell,
  signInArrow,
  signInLink,
  signInRow,
  submitArrow,
  submitButton,
  submitSpinner,
} from "../signup.styles";

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

type ForgotFaceProps = {
  onGoLogin: () => void;
  onSent: () => void;
};

export function ForgotFace({ onGoLogin, onSent }: ForgotFaceProps) {
  const fieldPrefix = useId();
  const submitTimerRef = useRef<number | null>(null);
  const [email, setEmail] = useState("");
  const [error, setError] = useState<string | undefined>();
  const [submitting, setSubmitting] = useState(false);
  const [sent, setSent] = useState(false);

  const emailId = `${fieldPrefix}-email`;
  const EmailIcon = FORGOT_FORM.email.icon;

  useEffect(() => {
    return () => {
      if (submitTimerRef.current != null) {
        window.clearTimeout(submitTimerRef.current);
      }
    };
  }, []);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (submitting) return;

    if (!EMAIL_PATTERN.test(email.trim())) {
      setError("Please enter a valid email address.");
      return;
    }

    setSubmitting(true);
    if (submitTimerRef.current != null) {
      window.clearTimeout(submitTimerRef.current);
    }
    submitTimerRef.current = window.setTimeout(() => {
      submitTimerRef.current = null;
      setSubmitting(false);
      setSent(true);
      onSent();
    }, 1100);
  };

  return (
    <div data-auth-face="forgot">
      <div data-signup="card-header" className={authCardHeader}>
        <p className={authEyebrow}>{FORGOT_FORM.eyebrow}</p>
        <h2 className={authHeading}>{FORGOT_FORM.heading}</h2>
        <p className={authSubtitle}>
          {sent
            ? "If an account exists for this email, a secure reset link is on its way."
            : FORGOT_FORM.subtitle}
        </p>
      </div>

      {!sent ? (
        <form noValidate onSubmit={handleSubmit}>
          <div className={fieldList}>
            <div className={fieldGroup}>
              <div className={fieldShell}>
                <EmailIcon
                  className={fieldIcon}
                  strokeWidth={1.5}
                  aria-hidden="true"
                />
                <input
                  id={emailId}
                  name="email"
                  type="email"
                  value={email}
                  autoComplete={FORGOT_FORM.email.autoComplete}
                  placeholder=" "
                  aria-label={FORGOT_FORM.email.label}
                  aria-invalid={error ? true : undefined}
                  onChange={(event) => {
                    setEmail(event.target.value);
                    if (error) setError(undefined);
                  }}
                  className={fieldInput}
                />
                <label htmlFor={emailId} className={fieldLabel}>
                  {FORGOT_FORM.email.label}
                </label>
              </div>
              {error ? (
                <p
                  role="alert"
                  className="mt-2 text-[11.5px] leading-relaxed text-[rgb(197_138_120)]"
                >
                  {error}
                </p>
              ) : null}
            </div>
          </div>

          <button
            type="submit"
            disabled={submitting}
            className={submitButton}
            data-signup="submit"
          >
            {submitting ? (
              <>
                <span className={submitSpinner} aria-hidden="true" />
                Sending…
              </>
            ) : (
              <>
                {FORGOT_FORM.submit}
                <span className={submitArrow} aria-hidden="true">
                  →
                </span>
              </>
            )}
          </button>
        </form>
      ) : null}

      <p className={cn(signInRow, sent && "mt-8")} data-signup="signin">
        <button type="button" onClick={onGoLogin} className={signInLink}>
          {FORGOT_FORM.back}
          <span className={signInArrow} aria-hidden="true">
            →
          </span>
        </button>
      </p>

      <TrustStrip />
    </div>
  );
}
