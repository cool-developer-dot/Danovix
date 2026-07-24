import { WISHLIST_QUOTE } from "@/lib/wishlist/constants";

import {
  quoteInner,
  quoteLine,
  quoteRoot,
  quoteText,
} from "./wishlist.styles";

export function EditorialQuote() {
  return (
    <section aria-label="Editorial reflection" className={quoteRoot}>
      <div className={quoteInner}>
        <blockquote className={quoteText}>
          {WISHLIST_QUOTE.lines.map((line) => (
            <span key={line} className={quoteLine}>
              <span data-wishlist="quote-line" className="block">
                {line}
              </span>
            </span>
          ))}
        </blockquote>
      </div>
    </section>
  );
}
