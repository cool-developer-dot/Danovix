import type { QuoteItem } from "@/lib/community/constants";
import { cn } from "@/lib/cn";

import {
  quoteCard,
  quoteLine,
  quoteMark,
  quoteRule,
  quoteText,
} from "./community.styles";

type QuoteCardProps = {
  item: QuoteItem;
  className?: string;
};

export function QuoteCard({ item, className }: QuoteCardProps) {
  return (
    <blockquote
      data-community="card"
      data-reveal={item.reveal}
      className={cn(quoteCard, className)}
    >
      <span className={quoteMark} aria-hidden="true">
        “
      </span>
      <p className={quoteText}>
        {item.lines.map((line) => (
          <span key={line} className={quoteLine}>
            {line}
          </span>
        ))}
      </p>
      <div className={quoteRule} aria-hidden="true" />
    </blockquote>
  );
}
