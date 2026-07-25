import Image from "next/image";
import Link from "next/link";

import { getProductsByIds } from "@/lib/product/constants";

import {
  darkSection,
  eyebrow,
  recentCard,
  recentGrid,
  recentImage,
  recentImageWrap,
  recentInfo,
  recentMeta,
  recentName,
  sectionBody,
  sectionHeader,
  sectionHeading,
  sectionInner,
} from "./product.styles";

type RecentlyViewedProps = {
  ids: readonly string[];
};

export function RecentlyViewed({ ids }: RecentlyViewedProps) {
  const products = getProductsByIds(ids);
  if (products.length === 0) return null;

  return (
    <section
      aria-labelledby="product-recent-heading"
      data-product="recent"
      className={darkSection}
    >
      <div className={sectionInner}>
        <div className={sectionHeader}>
          <p className={eyebrow}>Continue Your Journey</p>
          <h2 id="product-recent-heading" className={sectionHeading}>
            Recently Viewed.
          </h2>
          <p className={sectionBody}>
            Pieces you lingered with — revisited with the same quiet attention.
          </p>
        </div>

        <div className={recentGrid}>
          {products.map((product) => (
            <Link
              key={product.id}
              href={`/product/${product.id}`}
              data-product="recent-card"
              className={recentCard}
            >
              <div className={recentImageWrap}>
                <Image
                  src={product.imageSrc}
                  alt={product.imageAlt}
                  fill
                  sizes="260px"
                  loading="lazy"
                  className={recentImage}
                />
              </div>
              <div className={recentInfo}>
                <h3 className={recentName}>{product.name}</h3>
                <p className={recentMeta}>
                  {product.collection} · {product.priceLabel}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
