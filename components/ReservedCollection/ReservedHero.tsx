import {
  RESERVED_HERO,
} from "@/lib/reserved/constants";

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
} from "./reserved.styles";

type ReservedHeroProps = {
  count: number;
};

export function ReservedHero({ count }: ReservedHeroProps) {
  const counterLabel =
    count === 1
      ? "1 Reserved Piece"
      : `${count} ${RESERVED_HERO.counterSuffix}`;

  return (
    <section
      aria-labelledby="reserved-hero-heading"
      className={heroRoot}
    >
      <div data-reserved="hero-stage" className={heroStage}>
        <div data-reserved="hero-bg" className={heroBg} aria-hidden="true" />
        <div
          data-reserved="hero-noise"
          className={heroNoise}
          aria-hidden="true"
        />
        <div
          data-reserved="hero-spotlight"
          className={heroSpotlight}
          aria-hidden="true"
        />
        <div
          data-reserved="hero-grain"
          className={heroGrain}
          aria-hidden="true"
        />
        <div
          data-reserved="hero-particles"
          className={heroParticles}
          aria-hidden="true"
        />
        <div className={heroWatermark} aria-hidden="true">
          <span className={heroWatermarkText}>DANOVIX</span>
        </div>
      </div>

      <div className={heroContent}>
        <p data-reserved="hero-eyebrow" className={heroEyebrow}>
          {RESERVED_HERO.eyebrow}
        </p>

        <h1 id="reserved-hero-heading" className={heroHeadline}>
          {RESERVED_HERO.headline.map((line) => (
            <span key={line} className={heroHeadlineLine}>
              {line.split(" ").map((word, index, arr) => (
                <span key={`${line}-${word}-${index}`}>
                  <span data-reserved="hero-word" className={heroHeadlineWord}>
                    {word}
                  </span>
                  {index < arr.length - 1 ? " " : null}
                </span>
              ))}
            </span>
          ))}
        </h1>

        <p data-reserved="hero-description" className={heroDescription}>
          {RESERVED_HERO.description}
        </p>

        <p data-reserved="hero-counter" className={heroCounter}>
          {counterLabel}
        </p>
      </div>
    </section>
  );
}
