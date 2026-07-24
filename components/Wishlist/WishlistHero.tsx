import {
  WISHLIST_HERO,
  type WishlistItem,
} from "@/lib/wishlist/constants";

import {
  heroBg,
  heroContent,
  heroCounter,
  heroDescription,
  heroEyebrow,
  heroGrain,
  heroHeadline,
  heroHeadlineLine,
  heroHeadlineWord,
  heroNoise,
  heroParticles,
  heroRoot,
  heroSpotlight,
  heroStage,
  heroWatermark,
  heroWatermarkText,
} from "./wishlist.styles";

type WishlistHeroProps = {
  count: number;
  items?: readonly WishlistItem[];
};

export function WishlistHero({ count }: WishlistHeroProps) {
  return (
    <section
      aria-labelledby="wishlist-hero-heading"
      className={heroRoot}
    >
      <div data-wishlist="hero-stage" className={heroStage}>
        <div data-wishlist="hero-bg" className={heroBg} aria-hidden="true" />
        <div
          data-wishlist="hero-noise"
          className={heroNoise}
          aria-hidden="true"
        />
        <div
          data-wishlist="hero-spotlight"
          className={heroSpotlight}
          aria-hidden="true"
        />
        <div
          data-wishlist="hero-grain"
          className={heroGrain}
          aria-hidden="true"
        />
        <div
          data-wishlist="hero-particles"
          className={heroParticles}
          aria-hidden="true"
        />
        <div className={heroWatermark} aria-hidden="true">
          <span className={heroWatermarkText}>DANOVIX</span>
        </div>
      </div>

      <div className={heroContent}>
        <p data-wishlist="hero-eyebrow" className={heroEyebrow}>
          {WISHLIST_HERO.eyebrow}
        </p>

        <h1 id="wishlist-hero-heading" className={heroHeadline}>
          {WISHLIST_HERO.headline.map((line) => (
            <span key={line} className={heroHeadlineLine}>
              {line.split(" ").map((word, index, arr) => (
                <span key={`${line}-${word}-${index}`}>
                  <span data-wishlist="hero-word" className={heroHeadlineWord}>
                    {word}
                  </span>
                  {index < arr.length - 1 ? " " : null}
                </span>
              ))}
            </span>
          ))}
        </h1>

        <p data-wishlist="hero-description" className={heroDescription}>
          {WISHLIST_HERO.description}
        </p>

        <p data-wishlist="hero-counter" className={heroCounter}>
          <span data-wishlist="hero-count">{count}</span>{" "}
          {WISHLIST_HERO.counterSuffix}
        </p>
      </div>
    </section>
  );
}
