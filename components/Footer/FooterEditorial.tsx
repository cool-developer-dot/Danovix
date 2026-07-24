import { FOOTER_EDITORIAL } from "@/lib/footer/constants";

import {
  footerEditorial,
  footerEditorialAccent,
  footerEditorialHeading,
  footerEditorialLine,
  footerEditorialRule,
} from "./footer.styles";

export function FooterEditorial() {
  return (
    <div data-footer="editorial" className={footerEditorial}>
      <p data-footer="editorial-accent" className={footerEditorialAccent}>
        {FOOTER_EDITORIAL.accent}
      </p>

      <h2
        id="footer-editorial-heading"
        data-footer="editorial-heading"
        className={footerEditorialHeading}
      >
        {FOOTER_EDITORIAL.lines.map((line) => (
          <span key={line} className="block overflow-hidden">
            <span
              data-footer="editorial-line"
              className={footerEditorialLine}
            >
              {line}
            </span>
          </span>
        ))}
      </h2>

      <div
        data-footer="editorial-rule"
        className={footerEditorialRule}
        aria-hidden="true"
      />
    </div>
  );
}
