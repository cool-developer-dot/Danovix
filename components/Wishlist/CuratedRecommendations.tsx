import Image from "next/image";
import Link from "next/link";

import {
  CURATED_RECOMMENDATIONS,
  WISHLIST_CURATED,
} from "@/lib/wishlist/constants";

import {
  curatedCard,
  curatedCta,
  curatedCtaUnderline,
  curatedDescription,
  curatedGrid,
  curatedHeader,
  curatedHeading,
  curatedImage,
  curatedImageWrap,
  curatedInfo,
  curatedMeta,
  curatedName,
  curatedPrice,
  curatedRoot,
  wishlistEyebrow,
} from "./wishlist.styles";

export function CuratedRecommendations() {
  return (
    <section
      aria-labelledby="wishlist-curated-heading"
      className={curatedRoot}
    >
      <div className={curatedHeader}>
        <p data-wishlist="curated-eyebrow" className={wishlistEyebrow}>
          {WISHLIST_CURATED.eyebrow}
        </p>
        <h2
          id="wishlist-curated-heading"
          data-wishlist="curated-heading"
          className={curatedHeading}
        >
          {WISHLIST_CURATED.heading}
        </h2>
        <p
          data-wishlist="curated-description"
          className={curatedDescription}
        >
          {WISHLIST_CURATED.description}
        </p>
      </div>

      <div className={curatedGrid}>
        {CURATED_RECOMMENDATIONS.map((item) => (
          <article
            key={item.id}
            data-wishlist="curated-card"
            className={curatedCard}
          >
            <div className={curatedImageWrap}>
              <Image
                src={item.imageSrc}
                alt={item.imageAlt}
                fill
                sizes="(max-width: 768px) 90vw, 30vw"
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
                {WISHLIST_CURATED.cta}
                <span aria-hidden="true">→</span>
              </Link>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
