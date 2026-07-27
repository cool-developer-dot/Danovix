import Image from "next/image";
import Link from "next/link";

import {
  ACCOUNT_RECENT,
  ACCOUNT_RECENT_COPY,
} from "@/lib/account/constants";

import {
  accountEyebrow,
  accountSectionInner,
  darkSection,
  galleryCard,
  galleryImage,
  galleryImageWrap,
  galleryInfo,
  galleryMeta,
  galleryName,
  galleryScroller,
  sectionDescription,
  sectionHeader,
  sectionHeading,
} from "./account.styles";

export function RecentlyViewedGallery() {
  return (
    <section
      id="recently-viewed"
      aria-labelledby="account-recent-heading"
      className={darkSection}
    >
      <div className={accountSectionInner}>
        <div className={sectionHeader}>
          <p data-account="recent-eyebrow" className={accountEyebrow}>
            {ACCOUNT_RECENT_COPY.eyebrow}
          </p>
          <h2
            id="account-recent-heading"
            data-account="recent-heading"
            className={sectionHeading}
          >
            {ACCOUNT_RECENT_COPY.heading}
          </h2>
          <p data-account="recent-description" className={sectionDescription}>
            {ACCOUNT_RECENT_COPY.description}
          </p>
        </div>
      </div>

      <div className={galleryScroller}>
        {ACCOUNT_RECENT.map((item) => (
          <Link
            key={item.id}
            href={item.href}
            data-account="gallery-card"
            className={galleryCard}
          >
            <div className={galleryImageWrap}>
              <Image
                src={item.imageSrc}
                alt={item.imageAlt}
                fill
                sizes="280px"
                loading="lazy"
                className={galleryImage}
              />
            </div>
            <div className={galleryInfo}>
              <h3 className={galleryName}>{item.name}</h3>
              <p className={galleryMeta}>
                {item.collection} · {item.priceLabel}
              </p>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
