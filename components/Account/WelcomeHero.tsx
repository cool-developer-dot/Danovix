import {
  ACCOUNT_HERO,
  ACCOUNT_MEMBER,
} from "@/lib/account/constants";
import Link from "next/link";

import {
  heroAside,
  heroBg,
  heroContent,
  heroCopy,
  heroDescription,
  heroEyebrow,
  heroGrain,
  heroHeadline,
  heroHeadlineLine,
  heroHeadlineWord,
  heroMeta,
  heroMetaItem,
  heroMetaLabel,
  heroMetaRule,
  heroMetaValue,
  heroNoise,
  heroRoot,
  heroSpotlight,
  heroStage,
  profileAvatar,
  profileCard,
  profileCardGlow,
  profileEditBtn,
  profileName,
  profileProgressFill,
  profileProgressLabel,
  profileProgressTrack,
  profileProgressWrap,
  profileTier,
} from "./account.styles";

export function WelcomeHero() {
  return (
    <section
      id="welcome"
      aria-labelledby="account-hero-heading"
      className={heroRoot}
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

      <div className={heroContent}>
        <div className={heroCopy}>
          <p data-account="hero-eyebrow" className={heroEyebrow}>
            {ACCOUNT_HERO.eyebrow}
          </p>

          <h1 id="account-hero-heading" className={heroHeadline}>
            <span className={heroHeadlineLine}>
              {ACCOUNT_HERO.welcomePrefix.split(" ").map((word, index, arr) => (
                <span key={`welcome-${word}-${index}`}>
                  <span data-account="hero-word" className={heroHeadlineWord}>
                    {word}
                  </span>
                  {index < arr.length - 1 ? " " : null}
                </span>
              ))}
            </span>
            <span className={heroHeadlineLine}>
              <span data-account="hero-word" className={heroHeadlineWord}>
                {ACCOUNT_MEMBER.firstName}.
              </span>
            </span>
          </h1>

          <p data-account="hero-description" className={heroDescription}>
            {ACCOUNT_HERO.subheading}
          </p>

          <div data-account="hero-meta" className={heroMeta}>
            {ACCOUNT_HERO.meta.map((item) => (
              <div key={item.label} className={heroMetaItem}>
                <p className={heroMetaLabel}>{item.label}</p>
                <p className={heroMetaValue}>{item.value}</p>
                <div className={heroMetaRule} aria-hidden="true" />
              </div>
            ))}
          </div>
        </div>

        <div className={heroAside}>
          <article data-account="profile-card" className={profileCard}>
            <div className={profileCardGlow} aria-hidden="true" />
            <div className={profileAvatar} aria-hidden="true">
              {ACCOUNT_MEMBER.avatarInitials}
            </div>
            <h2 className={profileName}>{ACCOUNT_MEMBER.fullName}</h2>
            <p className={profileTier}>{ACCOUNT_MEMBER.tier}</p>

            <div className={profileProgressWrap}>
              <div className={profileProgressLabel}>
                <span>{ACCOUNT_HERO.profileComplete}</span>
                <span>{ACCOUNT_MEMBER.profileCompletion}%</span>
              </div>
              <div
                className={profileProgressTrack}
                role="progressbar"
                aria-valuenow={ACCOUNT_MEMBER.profileCompletion}
                aria-valuemin={0}
                aria-valuemax={100}
                aria-label="Profile completion"
              >
                <div
                  className={profileProgressFill}
                  style={{ width: `${ACCOUNT_MEMBER.profileCompletion}%` }}
                />
              </div>
            </div>

            <Link href="/account/profile" className={profileEditBtn}>
              {ACCOUNT_HERO.editProfile}
            </Link>
          </article>
        </div>
      </div>
    </section>
  );
}
