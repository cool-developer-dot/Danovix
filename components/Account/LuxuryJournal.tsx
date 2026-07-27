import Image from "next/image";
import Link from "next/link";

import {
  ACCOUNT_JOURNAL,
  ACCOUNT_JOURNAL_COPY,
} from "@/lib/account/constants";

import {
  accountEyebrow,
  accountSectionInner,
  journalCard,
  journalCategory,
  journalCta,
  journalExcerpt,
  journalGrid,
  journalImage,
  journalImageWrap,
  journalInfo,
  journalTitle,
  sectionHeader,
  warmBg,
  warmNoise,
  warmSection,
  warmSectionDescription,
  warmSectionHeading,
} from "./account.styles";

export function LuxuryJournal() {
  return (
    <section
      id="journal"
      aria-labelledby="account-journal-heading"
      className={warmSection}
    >
      <div className={warmBg} aria-hidden="true" />
      <div className={warmNoise} aria-hidden="true" />

      <div className={accountSectionInner}>
        <div className={sectionHeader}>
          <p
            data-account="journal-eyebrow"
            className={`${accountEyebrow} !text-[rgb(168_138_78)]`}
          >
            {ACCOUNT_JOURNAL_COPY.eyebrow}
          </p>
          <h2
            id="account-journal-heading"
            data-account="journal-heading"
            className={warmSectionHeading}
          >
            {ACCOUNT_JOURNAL_COPY.heading}
          </h2>
          <p
            data-account="journal-description"
            className={warmSectionDescription}
          >
            {ACCOUNT_JOURNAL_COPY.description}
          </p>
        </div>
      </div>

      <div className={journalGrid}>
        {ACCOUNT_JOURNAL.map((article) => (
          <Link
            key={article.id}
            href={article.href}
            data-account="journal-card"
            className={journalCard}
          >
            <div className={journalImageWrap}>
              <Image
                src={article.imageSrc}
                alt={article.imageAlt}
                fill
                sizes="(max-width: 640px) 90vw, (max-width: 1024px) 45vw, 22vw"
                loading="lazy"
                className={journalImage}
              />
            </div>
            <div className={journalInfo}>
              <p className={journalCategory}>{article.category}</p>
              <h3 className={journalTitle}>{article.title}</h3>
              <p className={journalExcerpt}>{article.excerpt}</p>
              <span className={journalCta}>
                {ACCOUNT_JOURNAL_COPY.read}
                <span aria-hidden="true">→</span>
              </span>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
