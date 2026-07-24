import Image from "next/image";
import Link from "next/link";

import {
  COMPLETE_COLLECTION_IDS,
  COMPLETE_YOUR_COLLECTION,
  getProductsByIds,
} from "@/lib/search/constants";

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
  searchEyebrow,
} from "./search.styles";

export function CompleteYourCollection() {
  const products = getProductsByIds(COMPLETE_COLLECTION_IDS);

  return (
    <section
      aria-labelledby="search-complete-heading"
      className={completeRoot}
    >
      <div className={completeHeader}>
        <p data-search="complete-eyebrow" className={searchEyebrow}>
          {COMPLETE_YOUR_COLLECTION.eyebrow}
        </p>
        <h2
          id="search-complete-heading"
          data-search="complete-heading"
          className={completeHeading}
        >
          {COMPLETE_YOUR_COLLECTION.heading}
        </h2>
        <p
          data-search="complete-description"
          className={completeDescription}
        >
          {COMPLETE_YOUR_COLLECTION.description}
        </p>
      </div>

      <div className={completeGrid}>
        {products.map((product) => (
          <article
            key={product.id}
            data-search="complete-card"
            className={completeCard}
          >
            <div className={completeImageWrap}>
              <Image
                src={product.imageSrc}
                alt={product.imageAlt}
                fill
                sizes="(max-width: 640px) 90vw, (max-width: 1024px) 45vw, 22vw"
                className={completeImage}
              />
            </div>
            <div className={completeInfo}>
              <h3 className={completeName}>{product.name}</h3>
              <p className={completeMeta}>{product.collection}</p>
              <p className={completePrice}>{product.priceLabel}</p>
              <Link href="/#collection" className={completeCta}>
                {COMPLETE_YOUR_COLLECTION.cta}
                <span aria-hidden="true">→</span>
              </Link>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
