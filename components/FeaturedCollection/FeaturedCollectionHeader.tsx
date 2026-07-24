import {
  FEATURED_DESCRIPTION,
  FEATURED_HEADING,
  FEATURED_LABEL,
} from "@/lib/featured-collection/constants";

import {
  featuredDescription,
  featuredHeader,
  featuredHeading,
  featuredHeadingLead,
  featuredHeadingLine,
  featuredLabel,
} from "./featured.styles";
import { cn } from "@/lib/cn";

export function FeaturedCollectionHeader() {
  return (
    <header className={featuredHeader}>
      <p data-featured="label" className={featuredLabel}>
        {FEATURED_LABEL}
      </p>

      <h2 id="featured-collection-heading" className={featuredHeading}>
        {FEATURED_HEADING.map((line, index) => (
          <span
            key={line}
            data-featured="heading-line"
            className={cn(featuredHeadingLine, index === 0 && featuredHeadingLead)}
          >
            {line}
          </span>
        ))}
      </h2>

      <p data-featured="description" className={featuredDescription}>
        {FEATURED_DESCRIPTION}
      </p>
    </header>
  );
}
