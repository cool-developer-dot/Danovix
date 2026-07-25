import Image from "next/image";

import type { CraftStep } from "@/lib/product/constants";

import {
  craftBody,
  craftCard,
  craftDesc,
  craftImage,
  craftImageWrap,
  craftIndex,
  craftTitle,
  craftTrack,
  darkSection,
  eyebrow,
  sectionBody,
  sectionHeader,
  sectionHeading,
  sectionInner,
} from "./product.styles";

type CraftsmanshipJourneyProps = {
  steps: readonly CraftStep[];
};

export function CraftsmanshipJourney({ steps }: CraftsmanshipJourneyProps) {
  return (
    <section
      aria-labelledby="product-craft-heading"
      data-product="craft"
      className={darkSection}
    >
      <div className={sectionInner}>
        <div className={sectionHeader}>
          <p className={eyebrow}>Craftsmanship Journey</p>
          <h2 id="product-craft-heading" className={sectionHeading}>
            From Hide To Signature.
          </h2>
          <p className={sectionBody}>
            A considered path through the atelier — each stage revealing why
            this piece endures beyond a single season.
          </p>
        </div>

        <ol className={craftTrack}>
          {steps.map((step, index) => (
            <li key={step.id} data-product="craft-card" className={craftCard}>
              <div className={craftImageWrap}>
                <Image
                  src={step.imageSrc}
                  alt={step.imageAlt}
                  fill
                  sizes="320px"
                  loading="lazy"
                  className={craftImage}
                />
              </div>
              <div className={craftBody}>
                <p className={craftIndex}>
                  {String(index + 1).padStart(2, "0")}
                </p>
                <h3 className={craftTitle}>{step.title}</h3>
                <p className={craftDesc}>{step.description}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
