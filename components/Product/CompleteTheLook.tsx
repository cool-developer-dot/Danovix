import Image from "next/image";
import Link from "next/link";

import type { LookItem } from "@/lib/product/constants";

import {
  darkSection,
  eyebrow,
  lookCard,
  lookGrid,
  lookImage,
  lookImageWrap,
  lookInfo,
  lookMeta,
  lookName,
  sectionBody,
  sectionHeader,
  sectionHeading,
  sectionInner,
} from "./product.styles";

type CompleteTheLookProps = {
  items: readonly LookItem[];
};

export function CompleteTheLook({ items }: CompleteTheLookProps) {
  return (
    <section
      aria-labelledby="product-look-heading"
      data-product="look"
      className={darkSection}
    >
      <div className={sectionInner}>
        <div className={sectionHeader}>
          <p className={eyebrow}>Complete The Look</p>
          <h2 id="product-look-heading" className={sectionHeading}>
            Styled With Intention.
          </h2>
          <p className={sectionBody}>
            Companion pieces chosen to extend the silhouette — never to compete
            with it.
          </p>
        </div>

        <div className={lookGrid}>
          {items.map((item) => (
            <Link
              key={item.id}
              href={item.href}
              data-product="look-card"
              className={lookCard}
            >
              <div className={lookImageWrap}>
                <Image
                  src={item.imageSrc}
                  alt={item.imageAlt}
                  fill
                  sizes="(max-width: 768px) 46vw, 22vw"
                  loading="lazy"
                  className={lookImage}
                />
              </div>
              <div className={lookInfo}>
                <h3 className={lookName}>{item.name}</h3>
                <p className={lookMeta}>
                  {item.category} · {item.priceLabel}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
