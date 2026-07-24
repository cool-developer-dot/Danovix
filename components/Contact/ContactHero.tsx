import { CONTACT_HERO } from "@/lib/contact/constants";

import {
  heroArch,
  heroBg,
  heroContent,
  heroCta,
  heroCtaArrow,
  heroDescription,
  heroEyebrow,
  heroHeadline,
  heroHeadlineLine,
  heroHeadlineWord,
  heroNoise,
  heroRoot,
  heroScroll,
  heroScrollLabel,
  heroScrollLine,
  heroSpotlight,
  heroStage,
  heroWatermark,
  heroWatermarkText,
} from "./contact.styles";

export function ContactHero() {
  return (
    <section
      aria-labelledby="contact-hero-heading"
      className={heroRoot}
    >
      <div data-contact="hero-stage" className={heroStage}>
        <div data-contact="hero-bg" className={heroBg} aria-hidden="true" />
        <div
          data-contact="hero-noise"
          className={heroNoise}
          aria-hidden="true"
        />
        <div
          data-contact="hero-spotlight"
          className={heroSpotlight}
          aria-hidden="true"
        />
        <div
          data-contact="hero-arch"
          className={heroArch}
          aria-hidden="true"
        />
        <div className={heroWatermark} aria-hidden="true">
          <span className={heroWatermarkText}>DANOVIX</span>
        </div>
      </div>

      <div className={heroContent}>
        <p data-contact="hero-eyebrow" className={heroEyebrow}>
          {CONTACT_HERO.eyebrow}
        </p>

        <h1 id="contact-hero-heading" className={heroHeadline}>
          {CONTACT_HERO.headline.map((line) => (
            <span key={line} className={heroHeadlineLine}>
              {line.split(" ").map((word, index, arr) => (
                <span key={`${line}-${word}-${index}`}>
                  <span data-contact="hero-word" className={heroHeadlineWord}>
                    {word}
                  </span>
                  {index < arr.length - 1 ? " " : null}
                </span>
              ))}
            </span>
          ))}
        </h1>

        <p data-contact="hero-description" className={heroDescription}>
          {CONTACT_HERO.description}
        </p>

        <a
          data-contact="hero-cta"
          href={CONTACT_HERO.ctaHref}
          className={heroCta}
        >
          {CONTACT_HERO.cta}
          <span className={heroCtaArrow} aria-hidden="true">
            →
          </span>
        </a>
      </div>

      <div data-contact="hero-scroll" className={heroScroll} aria-hidden="true">
        <div className="flex flex-col items-center">
          <span className={heroScrollLabel}>{CONTACT_HERO.scrollLabel}</span>
          <span className={heroScrollLine} />
        </div>
      </div>
    </section>
  );
}
