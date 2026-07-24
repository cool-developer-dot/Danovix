import { COMMUNITY_CTA } from "@/lib/community/constants";

import {
  instagramButton,
  instagramButtonArrow,
  instagramCopy,
  instagramCta,
  instagramHandle,
} from "./community.styles";

export function InstagramCTA() {
  return (
    <div data-community="cta" className={instagramCta}>
      <p data-community="handle" className={instagramHandle}>
        {COMMUNITY_CTA.handle}
      </p>
      <p data-community="cta-copy" className={instagramCopy}>
        {COMMUNITY_CTA.copy}
      </p>
      <a
        href={COMMUNITY_CTA.href}
        target="_blank"
        rel="noopener noreferrer"
        data-community="cta-button"
        className={instagramButton}
      >
        {COMMUNITY_CTA.button}
        <span className={instagramButtonArrow} aria-hidden="true">
          →
        </span>
      </a>
    </div>
  );
}
