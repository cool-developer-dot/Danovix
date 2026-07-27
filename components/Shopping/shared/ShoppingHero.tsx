import {
  heroBg,
  heroContent,
  heroDescription,
  heroGrain,
  heroHeadline,
  heroHeadlineLine,
  heroHeadlineWord,
  heroNoise,
  heroRoot,
  heroSpotlight,
  heroStage,
  shoppingEyebrow,
} from "../shopping.styles";

type ShoppingHeroProps = {
  eyebrow: string;
  heading: string;
  description: string;
  headingId: string;
};

export function ShoppingHero({
  eyebrow,
  heading,
  description,
  headingId,
}: ShoppingHeroProps) {
  return (
    <section aria-labelledby={headingId} className={heroRoot}>
      <div data-shopping="hero-stage" className={heroStage}>
        <div data-shopping="hero-bg" className={heroBg} aria-hidden="true" />
        <div
          data-shopping="hero-noise"
          className={heroNoise}
          aria-hidden="true"
        />
        <div
          data-shopping="hero-spotlight"
          className={heroSpotlight}
          aria-hidden="true"
        />
        <div
          data-shopping="hero-grain"
          className={heroGrain}
          aria-hidden="true"
        />
      </div>

      <div className={heroContent}>
        <p data-shopping="hero-eyebrow" className={shoppingEyebrow}>
          {eyebrow}
        </p>
        <h1 id={headingId} className={heroHeadline}>
          <span className={heroHeadlineLine}>
            {heading.split(" ").map((word, index, arr) => (
              <span key={`${word}-${index}`}>
                <span data-shopping="hero-word" className={heroHeadlineWord}>
                  {word}
                </span>
                {index < arr.length - 1 ? " " : null}
              </span>
            ))}
          </span>
        </h1>
        <p data-shopping="hero-description" className={heroDescription}>
          {description}
        </p>
      </div>
    </section>
  );
}
