import {
  SIGNATURE_CTA,
  SIGNATURE_DESCRIPTION,
  SIGNATURE_FEATURES,
  SIGNATURE_HEADING,
  SIGNATURE_LABEL,
} from "@/lib/signature-collection/constants";

import {
  signatureCta,
  signatureDescription,
  signatureDetailItem,
  signatureDetails,
  signatureEditorial,
  signatureFeatureBullet,
  signatureHeading,
  signatureHeadingWord,
  signatureLabel,
  signatureSentence,
} from "./signature.styles";

export function SignatureCollectionEditorial() {
  const headingWords = SIGNATURE_HEADING.split(" ");

  return (
    <div data-signature="editorial" className={signatureEditorial}>
      <p data-signature="label" className={signatureLabel}>
        {SIGNATURE_LABEL}
      </p>

      <h2 className={signatureHeading}>
        {headingWords.map((word) => (
          <span key={word} className="mr-[0.2em] inline-block overflow-hidden">
            <span
              data-signature="heading-word"
              data-heading={word === "Piece" ? "piece" : "lead"}
              className={signatureHeadingWord}
            >
              {word}
            </span>
          </span>
        ))}
      </h2>

      <div className={signatureDescription}>
        {SIGNATURE_DESCRIPTION.map((line, index) => (
          <p
            key={line}
            data-signature="sentence"
            data-sentence={index + 1}
            className={signatureSentence}
          >
            {line}
          </p>
        ))}
      </div>

      <a href="/collection" data-signature="cta" className={signatureCta}>
        {SIGNATURE_CTA}
      </a>

      <ul className={signatureDetails}>
        {SIGNATURE_FEATURES.map((feature) => (
          <li
            key={feature}
            data-signature="feature"
            className={signatureDetailItem}
          >
            <span aria-hidden="true" className={signatureFeatureBullet}>
              •
            </span>
            {feature}
          </li>
        ))}
      </ul>
    </div>
  );
}
