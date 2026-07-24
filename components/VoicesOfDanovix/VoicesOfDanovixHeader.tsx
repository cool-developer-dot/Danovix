import {
  VOICES_DESCRIPTION,
  VOICES_HEADLINE,
  VOICES_LABEL,
} from "@/lib/voices-of-danovix/constants";

import {
  voicesDescription,
  voicesHeader,
  voicesHeading,
  voicesHeadingLine,
  voicesLabel,
} from "./voices-of-danovix.styles";

export function VoicesOfDanovixHeader() {
  return (
    <header data-voices="header" className={voicesHeader}>
      <p data-voices="label" className={voicesLabel}>
        {VOICES_LABEL}
      </p>

      <h2
        id="voices-heading"
        data-voices="heading"
        className={voicesHeading}
      >
        {VOICES_HEADLINE.map((line) => (
          <span key={line} className="block overflow-hidden">
            <span
              data-voices="heading-line"
              className={voicesHeadingLine}
            >
              {line}
            </span>
          </span>
        ))}
      </h2>

      <p data-voices="description" className={voicesDescription}>
        {VOICES_DESCRIPTION}
      </p>
    </header>
  );
}
