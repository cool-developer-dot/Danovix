import { COLLECTION_HERO } from "@/lib/collection/constants";

import {
  heroBg,
  heroContent,
  heroDescription,
  heroEyebrow,
  heroGrain,
  heroHeadline,
  heroHeadlineLine,
  heroHeadlineWord,
  heroMarble,
  heroNoise,
  heroRoot,
  heroSpotlight,
  heroStage,
  heroStatChip,
  heroStats,
  heroWatermark,
  heroWatermarkText,
} from "./collection.styles";

export function CollectionHero() {
  return (
    <section aria-labelledby="collection-hero-heading" className={heroRoot}>
      <div data-collection="hero-stage" className={heroStage}>
        <div data-collection="hero-bg" className={heroBg} aria-hidden="true" />
        <div
          data-collection="hero-marble"
          className={heroMarble}
          aria-hidden="true"
        />
        <div
          data-collection="hero-noise"
          className={heroNoise}
          aria-hidden="true"
        />
        <div
          data-collection="hero-spotlight"
          className={heroSpotlight}
          aria-hidden="true"
        />
        <div
          data-collection="hero-grain"
          className={heroGrain}
          aria-hidden="true"
        />
        <div className={heroWatermark} aria-hidden="true">
          <span className={heroWatermarkText}>DANOVIX</span>
        </div>
      </div>

      <div className={heroContent}>
        <p data-collection="hero-eyebrow" className={heroEyebrow}>
          {COLLECTION_HERO.eyebrow}
        </p>

        <h1 id="collection-hero-heading" className={heroHeadline}>
          {COLLECTION_HERO.headline.map((line) => (
            <span key={line} className={heroHeadlineLine}>
              {line.split(" ").map((word, index, arr) => (
                <span key={`${line}-${word}-${index}`}>
                  <span
                    data-collection="hero-word"
                    className={heroHeadlineWord}
                  >
                    {word}
                  </span>
                  {index < arr.length - 1 ? " " : null}
                </span>
              ))}
            </span>
          ))}
        </h1>

        <p data-collection="hero-description" className={heroDescription}>
          {COLLECTION_HERO.description}
        </p>

        <ul data-collection="hero-stats" className={heroStats} role="list">
          {COLLECTION_HERO.stats.map((stat) => (
            <li key={stat.id} data-collection="stat-chip" className={heroStatChip}>
              {stat.label}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
