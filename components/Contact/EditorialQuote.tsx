import { EDITORIAL_QUOTE } from "@/lib/contact/constants";

import {
  quoteInner,
  quoteLine,
  quoteRoot,
  quoteSupporting,
  quoteText,
} from "./contact.styles";

export function EditorialQuote() {
  return (
    <section
      aria-label="Editorial reflection"
      className={quoteRoot}
    >
      <div className={quoteInner}>
        <blockquote className={quoteText}>
          {EDITORIAL_QUOTE.lines.map((line) => (
            <span key={line} className={quoteLine}>
              <span data-contact="quote-line" className="block">
                {line}
              </span>
            </span>
          ))}
        </blockquote>
        <p data-contact="quote-supporting" className={quoteSupporting}>
          {EDITORIAL_QUOTE.supporting}
        </p>
      </div>
    </section>
  );
}
