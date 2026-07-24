import { FOOTER_JOURNEY, FOOTER_SIGNATURE } from "@/lib/footer/constants";

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
