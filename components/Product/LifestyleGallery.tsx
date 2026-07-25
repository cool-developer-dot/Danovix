import Image from "next/image";

import { cn } from "@/lib/cn";
import type { LifestyleShot } from "@/lib/product/constants";

import {
  darkSection,
  eyebrow,
  lifeCard,
  lifeContent,
  lifeImage,
  lifeOverlay,
  lifeSetting,
  lifeSquare,
  lifestyleGrid,
  lifeTall,
  lifeTitle,
  lifeWide,
  sectionBody,
  sectionHeader,
  sectionHeading,
  sectionInner,
} from "./product.styles";

type LifestyleGalleryProps = {
  shots: readonly LifestyleShot[];
};

function spanClass(span: LifestyleShot["span"]) {
  switch (span) {
    case "wide":
      return lifeWide;
    case "tall":
      return lifeTall;
    default:
      return lifeSquare;
  }
}

export function LifestyleGallery({ shots }: LifestyleGalleryProps) {
  return (
    <section
      aria-labelledby="product-lifestyle-heading"
      data-product="lifestyle"
      className={darkSection}
    >
      <div className={sectionInner}>
        <div className={sectionHeader}>
          <p className={eyebrow}>Lifestyle Gallery</p>
          <h2 id="product-lifestyle-heading" className={sectionHeading}>
            Imagine It In Your Life.
          </h2>
          <p className={sectionBody}>
            Editorial moments that place the piece where ambition, travel, and
            quiet evenings meet.
          </p>
        </div>

        <div className={lifestyleGrid}>
          {shots.map((shot) => (
            <article
              key={shot.id}
              data-product="life-card"
              className={cn(lifeCard, spanClass(shot.span), "min-h-[220px]")}
            >
              <Image
                src={shot.imageSrc}
                alt={shot.imageAlt}
                fill
                sizes="(max-width: 1024px) 50vw, 40vw"
                loading="lazy"
                className={lifeImage}
              />
              <div className={lifeOverlay} aria-hidden="true" />
              <div className={lifeContent}>
                <h3 className={lifeTitle}>{shot.title}</h3>
                <p className={lifeSetting}>{shot.setting}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
