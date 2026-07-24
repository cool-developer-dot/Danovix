import {
  COMMUNITY_DESCRIPTION,
  COMMUNITY_HEADLINE,
  COMMUNITY_LABEL,
} from "@/lib/community/constants";

import {
  communityDescription,
  communityHeader,
  communityHeading,
  communityHeadingLine,
  communityLabel,
} from "./community.styles";

export function CommunityHeader() {
  return (
    <header data-community="header" className={communityHeader}>
      <p data-community="label" className={communityLabel}>
        {COMMUNITY_LABEL}
      </p>

      <h2
        id="community-heading"
        data-community="heading"
        className={communityHeading}
      >
        {COMMUNITY_HEADLINE.map((line) => (
          <span key={line} className="block overflow-hidden">
            <span
              data-community="heading-line"
              className={communityHeadingLine}
            >
              {line}
            </span>
          </span>
        ))}
      </h2>

      <p data-community="description" className={communityDescription}>
        {COMMUNITY_DESCRIPTION}
      </p>
    </header>
  );
}
