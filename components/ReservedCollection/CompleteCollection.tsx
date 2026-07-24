import Image from "next/image";
import Link from "next/link";

import {
  COMPLETE_COLLECTION,
  COMPLETE_COLLECTION_ITEMS,
} from "@/lib/reserved/constants";

import {
  completeCard,
  completeCta,
  completeDescription,
  completeGrid,
  completeHeader,
  completeHeading,
  completeImage,
  completeImageWrap,
  completeInfo,
  completeMeta,
  completeName,
  completePrice,
  completeRoot,
  reservedEyebrow,
} from "./reserved.styles";

export function CompleteCollection() {
  return (
    <section
      aria-labelledby="reserved-complete-heading"
      className={completeRoot}
    >
      <div className={completeHeader}>
        <p data-reserved="complete-eyebrow" className={reservedEyebrow}>
          {COMPLETE_COLLECTION.eyebrow}
        </p>
        <h2
          id="reserved-complete-heading"
          data-reserved="complete-heading"
          className={completeHeading}
        >
          {COMPLETE_COLLECTION.heading}
        </h2>
        <p
          data-reserved="complete-description"
          className={completeDescription}
        >
          {COMPLETE_COLLECTION.description}
        </p>
      </div>

      <div className={completeGrid}>
        {COMPLETE_COLLECTION_ITEMS.map((item) => (
          <article
            key={item.id}
            data-reserved="complete-card"
            className={completeCard}
          >
            <div className={completeImageWrap}>
              <Image
                src={item.imageSrc}
                alt={item.imageAlt}
                fill
                sizes="(max-width: 640px) 90vw, (max-width: 1024px) 45vw, 22vw"
                className={completeImage}
              />
            </div>
            <div className={completeInfo}>
              <h3 className={completeName}>{item.name}</h3>
              <p className={completeMeta}>{item.category}</p>
              <p className={completePrice}>{item.priceLabel}</p>
              <Link href={item.href} className={completeCta}>
                {COMPLETE_COLLECTION.cta}
                <span aria-hidden="true">→</span>
              </Link>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
