"use client";

import { Check, Eye, EyeOff } from "lucide-react";
import Link from "next/link";
import { useEffect, useId, useRef, useState, type FormEvent } from "react";

import { cn } from "@/lib/cn";

import { SIGNUP_FORM, type SignupFieldId } from "../auth.constants";
import { PasswordStrength } from "../PasswordStrength";
import { SocialLogin } from "../SocialLogin";
import { TrustStrip } from "../TrustStrip";
import {
  authCardHeader,
  authEyebrow,
  authHeading,
  authSubtitle,
  divider,
  dividerLine,
  dividerText,
  fieldGroup,
  fieldIcon,
  fieldInput,
  fieldInputWithToggle,
  fieldLabel,
  fieldList,
  fieldShell,
  passwordToggle,
  signInArrow,
  signInLink,
  signInRow,
  submitArrow,
  submitButton,
  submitSpinner,
  termsCheckIcon,
  termsCheckbox,
  termsLink,
  termsRow,
  termsText,
} from "../signup.styles";

type FormValues = Record<SignupFieldId, string>;
type FormErrors = Partial<Record<SignupFieldId | "terms", string>>;

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

type SignupFaceProps = {
  onSuccess: () => void;
  onGoLogin: () => void;
};

export function SignupFace({ onSuccess, onGoLogin }: SignupFaceProps) {
  const fieldPrefix = useId();
  const submitTimerRef = useRef<number | null>(null);
  const [values, setValues] = useState<FormValues>({
    fullName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [visible, setVisible] = useState<Record<string, boolean>>({});
  const [agreed, setAgreed] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  const strengthId = `${fieldPrefix}-strength`;

  useEffect(() => {
    return () => {
      if (submitTimerRef.current != null) {
        window.clearTimeout(submitTimerRef.current);
      }
    };
  }, []);

  const setField = (id: SignupFieldId, value: string) => {
    setValues((current) => ({ ...current, [id]: value }));
    if (errors[id]) {
      setErrors((current) => ({ ...current, [id]: undefined }));
    }
  };

  const validate = (): FormErrors => {
    const next: FormErrors = {};
    if (!values.fullName.trim()) next.fullName = "Please enter your name.";
    if (!EMAIL_PATTERN.test(values.email.trim()))
      next.email = "Please enter a valid email address.";
    if (values.password.length < 8)
      next.password = "Use at least 8 characters.";
    if (values.confirmPassword !== values.password)
      next.confirmPassword = "Passwords do not match.";
    if (!agreed) next.terms = "Please accept the terms to continue.";
    return next;
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (submitting) return;

    const nextErrors = validate();
    setErrors(nextErrors);
    if (Object.values(nextErrors).some(Boolean)) return;

    setSubmitting(true);
    if (submitTimerRef.current != null) {
      window.clearTimeout(submitTimerRef.current);
    }
    submitTimerRef.current = window.setTimeout(() => {
      submitTimerRef.current = null;
      setSubmitting(false);
      onSuccess();
    }, 1400);
  };

  return (
    <div data-auth-face="signup">
      <div data-signup="card-header" className={authCardHeader}>
        <p className={authEyebrow}>{SIGNUP_FORM.eyebrow}</p>
        <h2 className={authHeading}>{SIGNUP_FORM.heading}</h2>
        <p className={authSubtitle}>{SIGNUP_FORM.subtitle}</p>
      </div>

      <form noValidate onSubmit={handleSubmit}>
        <div className={fieldList}>
          {SIGNUP_FORM.fields.map((field) => {
            const Icon = field.icon;
            const inputId = `${fieldPrefix}-${field.id}`;
            const errorId = `${inputId}-error`;
            const isPassword = field.type === "password";
            const isVisible = visible[field.id] ?? false;
            const error = errors[field.id];
            const describedBy = cn(
              error ? errorId : undefined,
              field.id === "password" ? strengthId : undefined,
            );

            return (
              <div key={field.id} className={fieldGroup}>
                <div className={fieldShell}>
                  <Icon
                    className={fieldIcon}
                    strokeWidth={1.5}
                    aria-hidden="true"
                  />
                  <input
                    id={inputId}
                    name={field.id}
                    type={isPassword && isVisible ? "text" : field.type}
                    value={values[field.id]}
                    autoComplete={field.autoComplete}
                    placeholder=" "
                    aria-label={field.label}
                    aria-invalid={error ? true : undefined}
                    aria-describedby={describedBy || undefined}
                    onChange={(event) => setField(field.id, event.target.value)}
                    className={isPassword ? fieldInputWithToggle : fieldInput}
                  />
                  <label htmlFor={inputId} className={fieldLabel}>
                    {field.label}
                  </label>

                  {isPassword ? (
                    <button
                      type="button"
                      className={passwordToggle}
                      aria-label={
                        isVisible ? "Hide password" : "Show password"
                      }
                      aria-pressed={isVisible}
                      onClick={() =>
                        setVisible((current) => ({
                          ...current,
                          [field.id]: !current[field.id],
                        }))
                      }
                    >
                      {isVisible ? (
                        <EyeOff className="h-[18px] w-[18px]" strokeWidth={1.5} />
                      ) : (
                        <Eye className="h-[18px] w-[18px]" strokeWidth={1.5} />
                      )}
                    </button>
                  ) : null}
                </div>

                {field.id === "password" ? (
                  <PasswordStrength
                    password={values.password}
                    describedById={strengthId}
                  />
                ) : null}

                {error ? (
                  <p
                    id={errorId}
                    role="alert"
                    className="mt-2 text-[11.5px] leading-relaxed text-[rgb(197_138_120)]"
                  >
                    {error}
                  </p>
                ) : null}
              </div>
            );
          })}
        </div>

        <div className={termsRow}>
          <button
            type="button"
            role="checkbox"
            aria-checked={agreed}
            aria-label={`${SIGNUP_FORM.terms.lead} ${SIGNUP_FORM.terms.termsLabel} ${SIGNUP_FORM.terms.and} ${SIGNUP_FORM.terms.privacyLabel}`}
            data-checked={agreed}
            onClick={() => {
              setAgreed((current) => !current);
              if (errors.terms)
                setErrors((current) => ({ ...current, terms: undefined }));
            }}
            className={termsCheckbox}
          >
            <Check
              className={cn(termsCheckIcon, "h-3.5 w-3.5")}
              strokeWidth={2.5}
              aria-hidden="true"
            />
          </button>

          <p className={termsText}>
            {SIGNUP_FORM.terms.lead}{" "}
            <Link href={SIGNUP_FORM.terms.termsHref} className={termsLink}>
              {SIGNUP_FORM.terms.termsLabel}
            </Link>{" "}
            {SIGNUP_FORM.terms.and}{" "}
            <Link href={SIGNUP_FORM.terms.privacyHref} className={termsLink}>
              {SIGNUP_FORM.terms.privacyLabel}
            </Link>
            .
            {errors.terms ? (
              <span
                role="alert"
                className="mt-1 block text-[11.5px] text-[rgb(197_138_120)]"
              >
                {errors.terms}
              </span>
            ) : null}
          </p>
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
              Creating…
            </>
          ) : (
            <>
              {SIGNUP_FORM.submit}
              <span className={submitArrow} aria-hidden="true">
                →
              </span>
            </>
          )}
        </button>
      </form>

      <div className={divider} data-signup="divider">
        <span className={dividerLine} aria-hidden="true" />
        <span className={dividerText}>{SIGNUP_FORM.divider}</span>
        <span className={dividerLine} aria-hidden="true" />
      </div>

      <SocialLogin />

      <p className={signInRow} data-signup="signin">
        {SIGNUP_FORM.signIn.lead}
        <button type="button" onClick={onGoLogin} className={signInLink}>
          {SIGNUP_FORM.signIn.label}
          <span className={signInArrow} aria-hidden="true">
            →
          </span>
        </button>
      </p>

      <TrustStrip />
    </div>
  );
}
