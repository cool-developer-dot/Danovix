import Link from "next/link";

import {
  FOOTER_JOURNEY,
  FOOTER_LEGAL_LINKS,
  FOOTER_SIGNATURE,
} from "@/lib/footer/constants";

import { FooterPayments } from "./FooterPayments";
import {
  footerJourney,
  footerJourneyArrow,
  footerJourneyButton,
  footerJourneyHandle,
  footerJourneyLabel,
  footerSignature,
  footerSignatureCopy,
  footerSignatureLead,
  footerSignatureMeta,
  footerSignatureTrail,
} from "./footer.styles";

export function FooterSignature() {
  return (
    <div className="site-footer-closing relative mx-auto w-full max-w-[720px]">
      <div data-footer="journey" className={footerJourney}>
        <p data-footer="journey-label" className={footerJourneyLabel}>
          {FOOTER_JOURNEY.label}
        </p>

        <a
          href={FOOTER_JOURNEY.href}
          target="_blank"
          rel="noopener noreferrer"
          data-footer="journey-handle"
          className={footerJourneyHandle}
          aria-label={`${FOOTER_JOURNEY.handle} on Instagram`}
        >
          {FOOTER_JOURNEY.handle}
        </a>

        <a
          href={FOOTER_JOURNEY.href}
          target="_blank"
          rel="noopener noreferrer"
          data-footer="journey-btn"
          className={footerJourneyButton}
        >
          {FOOTER_JOURNEY.button}
          <span className={footerJourneyArrow} aria-hidden="true">
            →
          </span>
        </a>
      </div>

      <FooterPayments />

      <nav
        aria-label="Legal"
        className="mt-10 flex flex-wrap items-center justify-center gap-x-4 gap-y-2"
      >
        {FOOTER_LEGAL_LINKS.map((link) => (
          <Link
            key={link.id}
            href={link.href}
            className="font-sans text-[10px] font-medium uppercase tracking-[0.18em] text-[rgb(248_247_244/0.45)] transition-colors duration-300 hover:text-[rgb(214_196_158)] focus-visible:outline-none focus-visible:text-[rgb(214_196_158)]"
          >
            {link.label}
          </Link>
        ))}
      </nav>

      <div data-footer="signature" className={footerSignature}>
        <p data-footer="signature-lead" className={footerSignatureLead}>
          {FOOTER_SIGNATURE.lead}
        </p>
        <div className={footerSignatureMeta}>
          <p data-footer="signature-copy" className={footerSignatureCopy}>
            {FOOTER_SIGNATURE.copyright}
          </p>
          <span aria-hidden="true" className="text-[rgb(198_161_91/0.45)]">
            ·
          </span>
          <p data-footer="signature-trail" className={footerSignatureTrail}>
            {FOOTER_SIGNATURE.trail}
          </p>
        </div>
      </div>
    </div>
  );
}
