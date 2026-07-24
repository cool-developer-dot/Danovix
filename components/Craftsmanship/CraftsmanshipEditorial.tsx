import {
  CRAFTSMANSHIP_CTA,
  CRAFTSMANSHIP_CTA_HREF,
  CRAFTSMANSHIP_DESCRIPTION,
  CRAFTSMANSHIP_HEADLINE,
  CRAFTSMANSHIP_LABEL,
} from "@/lib/craftsmanship/constants";

import {
  craftsmanshipCta,
  craftsmanshipCtaArrow,
  craftsmanshipDescription,
  craftsmanshipEditorial,
  craftsmanshipHeading,
  craftsmanshipHeadingLine,
  craftsmanshipLabel,
} from "./craftsmanship.styles";

export function CraftsmanshipEditorial() {
  return (
    <div data-craftsmanship="editorial" className={craftsmanshipEditorial}>
      <p data-craftsmanship="label" className={craftsmanshipLabel}>
        {CRAFTSMANSHIP_LABEL}
      </p>

      <h2
        id="craftsmanship-heading"
        data-craftsmanship="heading"
        className={craftsmanshipHeading}
      >
        {CRAFTSMANSHIP_HEADLINE.map((line) => (
          <span key={line} className="block overflow-hidden">
            <span
              data-craftsmanship="heading-line"
              className={craftsmanshipHeadingLine}
            >
              {line}
            </span>
          </span>
        ))}
      </h2>

      <p data-craftsmanship="description" className={craftsmanshipDescription}>
        {CRAFTSMANSHIP_DESCRIPTION}
      </p>

      <a
        href={CRAFTSMANSHIP_CTA_HREF}
        data-craftsmanship="cta"
        className={craftsmanshipCta}
      >
        {CRAFTSMANSHIP_CTA}
        <span className={craftsmanshipCtaArrow} aria-hidden="true">
          →
        </span>
      </a>
    </div>
  );
}
