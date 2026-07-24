import { SEARCH_HERO } from "@/lib/search/constants";

import {
  heroBg,
  heroContent,
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
} from "./search.styles";

export function SearchHero() {
  return (
    <section aria-labelledby="search-hero-heading" className={heroRoot}>
      <div data-search="hero-stage" className={heroStage}>
        <div data-search="hero-bg" className={heroBg} aria-hidden="true" />
        <div data-search="hero-noise" className={heroNoise} aria-hidden="true" />
        <div
          data-search="hero-spotlight"
          className={heroSpotlight}
          aria-hidden="true"
        />
        <div data-search="hero-grain" className={heroGrain} aria-hidden="true" />
        <div
          data-search="hero-particles"
          className={heroParticles}
          aria-hidden="true"
        />
        <div className={heroWatermark} aria-hidden="true">
          <span className={heroWatermarkText}>DANOVIX</span>
        </div>
      </div>

      <div className={heroContent}>
        <p data-search="hero-eyebrow" className={heroEyebrow}>
          {SEARCH_HERO.eyebrow}
        </p>

        <h1 id="search-hero-heading" className={heroHeadline}>
          {SEARCH_HERO.headline.map((line) => (
            <span key={line} className={heroHeadlineLine}>
              {line.split(" ").map((word, index, arr) => (
                <span key={`${line}-${word}-${index}`}>
                  <span data-search="hero-word" className={heroHeadlineWord}>
                    {word}
                  </span>
                  {index < arr.length - 1 ? " " : null}
                </span>
              ))}
            </span>
          ))}
        </h1>

        <p data-search="hero-description" className={heroDescription}>
          {SEARCH_HERO.description}
        </p>
      </div>
    </section>
  );
}
