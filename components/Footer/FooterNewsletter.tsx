"use client";

import { useState, type FormEvent } from "react";

import { FOOTER_NEWSLETTER } from "@/lib/footer/constants";

import {
  footerNewsletter,
  footerNewsletterArrow,
  footerNewsletterButton,
  footerNewsletterCopy,
  footerNewsletterEyebrow,
  footerNewsletterForm,
  footerNewsletterHeading,
  footerNewsletterInput,
  footerNewsletterShell,
  footerNewsletterStatus,
} from "./footer.styles";

export function FooterNewsletter() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "success">("idle");

  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!email.trim()) return;
    setStatus("success");
    setEmail("");
  };

  return (
    <div data-footer="newsletter" className={footerNewsletter}>
      <p data-footer="newsletter-eyebrow" className={footerNewsletterEyebrow}>
        The Journal
      </p>
      <h3 data-footer="newsletter-heading" className={footerNewsletterHeading}>
        {FOOTER_NEWSLETTER.heading}
      </h3>
      <p data-footer="newsletter-copy" className={footerNewsletterCopy}>
        <span className="sm:hidden">
          Early access, editorials, and craftsmanship stories.
        </span>
        <span className="hidden sm:inline">
          {FOOTER_NEWSLETTER.description}
        </span>
      </p>

      <form
        data-footer="newsletter-form"
        className={footerNewsletterForm}
        onSubmit={onSubmit}
        noValidate
      >
        <div className={footerNewsletterShell}>
          <label htmlFor="danovix-journal-email" className="sr-only">
            Email address
          </label>
          <input
            id="danovix-journal-email"
            type="email"
            name="email"
            autoComplete="email"
            required
            value={email}
            onChange={(event) => {
              setEmail(event.target.value);
              if (status === "success") setStatus("idle");
            }}
            placeholder={FOOTER_NEWSLETTER.placeholder}
            className={footerNewsletterInput}
          />
          <button
            type="submit"
            className={footerNewsletterButton}
            aria-label={FOOTER_NEWSLETTER.button}
          >
            <span className="hidden sm:inline">{FOOTER_NEWSLETTER.button}</span>
            <span className="sm:hidden font-serif text-[1.15rem] font-light normal-case tracking-normal">
              Join
            </span>
            <span className={footerNewsletterArrow} aria-hidden="true">
              →
            </span>
          </button>
        </div>
      </form>

      <p
        data-footer="newsletter-status"
        className={footerNewsletterStatus}
        role="status"
        aria-live="polite"
      >
        {status === "success" ? FOOTER_NEWSLETTER.success : "\u00A0"}
      </p>
    </div>
  );
}
