"use client";

import { Check, Eye, EyeOff } from "lucide-react";
import { useEffect, useId, useRef, useState, type FormEvent } from "react";

import { cn } from "@/lib/cn";

import { LOGIN_FORM } from "../auth.constants";
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
  forgotLink,
  loginMetaRow,
  passwordToggle,
  rememberLabel,
  rememberRow,
  signInArrow,
  signInLink,
  signInRow,
  submitArrow,
  submitButton,
  submitSpinner,
  termsCheckIcon,
  termsCheckbox,
} from "../signup.styles";

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

type LoginFaceProps = {
  contextualSubtitle?: string;
  onSuccess: () => void;
  onGoSignup: () => void;
  onGoForgot: () => void;
};

export function LoginFace({
  contextualSubtitle,
  onSuccess,
  onGoSignup,
  onGoForgot,
}: LoginFaceProps) {
  const fieldPrefix = useId();
  const submitTimerRef = useRef<number | null>(null);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [remember, setRemember] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [errors, setErrors] = useState<{ email?: string; password?: string }>(
    {},
  );
  const [submitting, setSubmitting] = useState(false);

  const emailId = `${fieldPrefix}-email`;
  const passwordId = `${fieldPrefix}-password`;
  const EmailIcon = LOGIN_FORM.email.icon;
  const PasswordIcon = LOGIN_FORM.password.icon;

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

    const next: typeof errors = {};
    if (!EMAIL_PATTERN.test(email.trim()))
      next.email = "Please enter a valid email address.";
    if (!password) next.password = "Please enter your password.";
    setErrors(next);
    if (Object.values(next).some(Boolean)) return;

    setSubmitting(true);
    if (submitTimerRef.current != null) {
      window.clearTimeout(submitTimerRef.current);
    }
    submitTimerRef.current = window.setTimeout(() => {
      submitTimerRef.current = null;
      setSubmitting(false);
      onSuccess();
    }, 1200);
  };

  return (
    <div data-auth-face="login">
      <div data-signup="card-header" className={authCardHeader}>
        <p className={authEyebrow}>{LOGIN_FORM.eyebrow}</p>
        <h2 className={authHeading}>{LOGIN_FORM.heading}</h2>
        <p className={authSubtitle}>
          {contextualSubtitle ?? LOGIN_FORM.subtitle}
        </p>
      </div>

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
                autoComplete={LOGIN_FORM.email.autoComplete}
                placeholder=" "
                aria-label={LOGIN_FORM.email.label}
                aria-invalid={errors.email ? true : undefined}
                onChange={(event) => {
                  setEmail(event.target.value);
                  if (errors.email)
                    setErrors((current) => ({ ...current, email: undefined }));
                }}
                className={fieldInput}
              />
              <label htmlFor={emailId} className={fieldLabel}>
                {LOGIN_FORM.email.label}
              </label>
            </div>
            {errors.email ? (
              <p
                role="alert"
                className="mt-2 text-[11.5px] leading-relaxed text-[rgb(197_138_120)]"
              >
                {errors.email}
              </p>
            ) : null}
          </div>

          <div className={fieldGroup}>
            <div className={fieldShell}>
              <PasswordIcon
                className={fieldIcon}
                strokeWidth={1.5}
                aria-hidden="true"
              />
              <input
                id={passwordId}
                name="password"
                type={showPassword ? "text" : "password"}
                value={password}
                autoComplete={LOGIN_FORM.password.autoComplete}
                placeholder=" "
                aria-label={LOGIN_FORM.password.label}
                aria-invalid={errors.password ? true : undefined}
                onChange={(event) => {
                  setPassword(event.target.value);
                  if (errors.password)
                    setErrors((current) => ({
                      ...current,
                      password: undefined,
                    }));
                }}
                className={fieldInputWithToggle}
              />
              <label htmlFor={passwordId} className={fieldLabel}>
                {LOGIN_FORM.password.label}
              </label>
              <button
                type="button"
                className={passwordToggle}
                aria-label={showPassword ? "Hide password" : "Show password"}
                aria-pressed={showPassword}
                onClick={() => setShowPassword((current) => !current)}
              >
                {showPassword ? (
                  <EyeOff className="h-[18px] w-[18px]" strokeWidth={1.5} />
                ) : (
                  <Eye className="h-[18px] w-[18px]" strokeWidth={1.5} />
                )}
              </button>
            </div>
            {errors.password ? (
              <p
                role="alert"
                className="mt-2 text-[11.5px] leading-relaxed text-[rgb(197_138_120)]"
              >
                {errors.password}
              </p>
            ) : null}
          </div>
        </div>

        <div className={loginMetaRow}>
          <div className={rememberRow}>
            <button
              type="button"
              role="checkbox"
              aria-checked={remember}
              aria-label={LOGIN_FORM.remember}
              data-checked={remember}
              onClick={() => setRemember((current) => !current)}
              className={termsCheckbox}
            >
              <Check
                className={cn(termsCheckIcon, "h-3.5 w-3.5")}
                strokeWidth={2.5}
                aria-hidden="true"
              />
            </button>
            <span className={rememberLabel}>{LOGIN_FORM.remember}</span>
          </div>

          <button type="button" onClick={onGoForgot} className={forgotLink}>
            {LOGIN_FORM.forgot}
          </button>
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
              Signing in…
            </>
          ) : (
            <>
              {LOGIN_FORM.submit}
              <span className={submitArrow} aria-hidden="true">
                →
              </span>
            </>
          )}
        </button>
      </form>

      <div className={divider} data-signup="divider">
        <span className={dividerLine} aria-hidden="true" />
        <span className={dividerText}>{LOGIN_FORM.divider}</span>
        <span className={dividerLine} aria-hidden="true" />
      </div>

      <SocialLogin />

      <p className={signInRow} data-signup="signin">
        {LOGIN_FORM.create.lead}
        <button type="button" onClick={onGoSignup} className={signInLink}>
          {LOGIN_FORM.create.label}
          <span className={signInArrow} aria-hidden="true">
            →
          </span>
        </button>
      </p>

      <TrustStrip />
    </div>
  );
}
