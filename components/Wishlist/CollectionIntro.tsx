import { WISHLIST_INTRO } from "@/lib/wishlist/constants";

import {
  introDescription,
  introHeading,
  introInner,
  introRoot,
} from "./wishlist.styles";

export function CollectionIntro() {
  return (
    <section
      aria-labelledby="wishlist-intro-heading"
      className={introRoot}
    >
      <div className={introInner}>
        <h2 id="wishlist-intro-heading" className={introHeading}>
          {WISHLIST_INTRO.heading}
        </h2>
        <p className={introDescription}>{WISHLIST_INTRO.description}</p>
      </div>
    </section>
  );
}
