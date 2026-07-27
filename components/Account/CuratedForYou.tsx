import Image from "next/image";
import Link from "next/link";

import {
  ACCOUNT_CURATED,
  ACCOUNT_CURATED_COPY,
} from "@/lib/account/constants";

import {
  accountEyebrow,
  accountSectionInner,
  curatedCard,
  curatedCta,
  curatedCtaUnderline,
  curatedGrid,
  curatedImage,
  curatedImageWrap,
  curatedInfo,
  curatedMeta,
  curatedName,
  curatedPrice,
  darkSection,
  sectionDescription,
  sectionHeader,
  sectionHeading,
} from "./account.styles";

export function CuratedForYou() {
  return (
    <section
      id="curated"
      aria-labelledby="account-curated-heading"
      className={darkSection}
    >
      <div className={accountSectionInner}>
        <div className={sectionHeader}>
          <p data-account="curated-eyebrow" className={accountEyebrow}>
            {ACCOUNT_CURATED_COPY.eyebrow}
          </p>
          <h2
            id="account-curated-heading"
            data-account="curated-heading"
            className={sectionHeading}
          >
            {ACCOUNT_CURATED_COPY.heading}
          </h2>
          <p
            data-account="curated-description"
            className={sectionDescription}
          >
            {ACCOUNT_CURATED_COPY.description}
          </p>
        </div>
      </div>

      <div className={curatedGrid}>
        {ACCOUNT_CURATED.map((item) => (
          <article
            key={item.id}
            data-account="curated-card"
            className={curatedCard}
          >
            <div className={curatedImageWrap}>
              <Image
                src={item.imageSrc}
                alt={item.imageAlt}
                fill
                sizes="(max-width: 768px) 90vw, 30vw"
                loading="lazy"
                className={curatedImage}
              />
            </div>
            <div className={curatedInfo}>
              <h3 className={curatedName}>{item.name}</h3>
              <p className={curatedMeta}>{item.collection}</p>
              <p className={curatedPrice}>{item.priceLabel}</p>
              <Link
                href={item.href}
                className={`${curatedCta} ${curatedCtaUnderline}`}
              >
                {ACCOUNT_CURATED_COPY.cta}
                <span aria-hidden="true">→</span>
              </Link>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
