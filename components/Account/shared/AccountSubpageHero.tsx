import Link from "next/link";

import {
  heroBg,
  heroGrain,
  heroNoise,
  heroSpotlight,
  heroStage,
  subpageBack,
  subpageHeroContent,
  subpageHeroDescription,
  subpageHeroHeadline,
  subpageHeroRoot,
  accountEyebrow,
  heroHeadlineLine,
  heroHeadlineWord,
} from "../account.styles";

type AccountSubpageHeroProps = {
  eyebrow: string;
  heading: string;
  description: string;
  headingId: string;
  backHref?: string;
  backLabel?: string;
};

export function AccountSubpageHero({
  eyebrow,
  heading,
  description,
  headingId,
  backHref,
  backLabel,
}: AccountSubpageHeroProps) {
  return (
    <section
      aria-labelledby={headingId}
      className={subpageHeroRoot}
    >
      <div data-account="hero-stage" className={heroStage}>
        <div data-account="hero-bg" className={heroBg} aria-hidden="true" />
        <div
          data-account="hero-noise"
          className={heroNoise}
          aria-hidden="true"
        />
        <div
          data-account="hero-spotlight"
          className={heroSpotlight}
          aria-hidden="true"
        />
        <div
          data-account="hero-grain"
          className={heroGrain}
          aria-hidden="true"
        />
      </div>

      <div className={subpageHeroContent}>
        {backHref && backLabel ? (
          <Link href={backHref} className={subpageBack} data-account="hero-back">
            <span aria-hidden="true">←</span>
            {backLabel}
          </Link>
        ) : null}

        <p data-account="hero-eyebrow" className={accountEyebrow}>
          {eyebrow}
        </p>

        <h1 id={headingId} className={subpageHeroHeadline}>
          <span className={heroHeadlineLine}>
            {heading.split(" ").map((word, index, arr) => (
              <span key={`${word}-${index}`}>
                <span data-account="hero-word" className={heroHeadlineWord}>
                  {word}
                </span>
                {index < arr.length - 1 ? " " : null}
              </span>
            ))}
          </span>
        </h1>

        <p data-account="hero-description" className={subpageHeroDescription}>
          {description}
        </p>
      </div>
    </section>
  );
}
