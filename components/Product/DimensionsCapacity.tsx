import Image from "next/image";
import { Check, X } from "lucide-react";

import { cn } from "@/lib/cn";
import type { CapacityItem, ProductDimension } from "@/lib/product/constants";

import {
  capacityChip,
  capacityFit,
  capacityGrid,
  capacityMiss,
  darkSection,
  dimDiagram,
  dimLabel,
  dimLayout,
  dimSpec,
  dimSpecs,
  dimValue,
  eyebrow,
  sectionBody,
  sectionHeader,
  sectionHeading,
  sectionInner,
} from "./product.styles";

type DimensionsCapacityProps = {
  dimensions: readonly ProductDimension[];
  capacity: readonly CapacityItem[];
  imageSrc: string;
  imageAlt: string;
};

export function DimensionsCapacity({
  dimensions,
  capacity,
  imageSrc,
  imageAlt,
}: DimensionsCapacityProps) {
  return (
    <section
      aria-labelledby="product-dimensions-heading"
      data-product="dimensions"
      className={darkSection}
    >
      <div className={sectionInner}>
        <div className={sectionHeader}>
          <p className={eyebrow}>Dimensions & Capacity</p>
          <h2 id="product-dimensions-heading" className={sectionHeading}>
            Proportion, Made Visible.
          </h2>
          <p className={sectionBody}>
            Understand scale at a glance — then see what belongs inside for the
            days you actually live.
          </p>
        </div>

        <div className={dimLayout}>
          <div className={dimDiagram}>
            <Image
              src={imageSrc}
              alt={imageAlt}
              fill
              sizes="(max-width: 1024px) 92vw, 40vw"
              loading="lazy"
              className="object-contain p-10"
            />
          </div>

          <div className={dimSpecs}>
            {dimensions.map((item) => (
              <article key={item.id} className={dimSpec}>
                <p className={dimLabel}>{item.label}</p>
                <p className={dimValue}>{item.value}</p>
              </article>
            ))}
          </div>
        </div>

        <div className="mt-14">
          <h3 className="text-center font-serif text-[clamp(1.55rem,3.5vw,2.15rem)] font-light text-[rgb(248_247_244)]">
            What&apos;s Inside
          </h3>
          <p className="mx-auto mt-3 max-w-[420px] text-center text-[14px] leading-relaxed text-[rgb(248_247_244/0.55)]">
            A considered capacity map for everyday essentials.
          </p>
          <ul className={capacityGrid} role="list">
            {capacity.map((item) => (
              <li
                key={item.id}
                className={cn(
                  capacityChip,
                  item.fits ? capacityFit : capacityMiss,
                )}
              >
                {item.fits ? (
                  <Check className="h-3.5 w-3.5 stroke-[1.5]" aria-hidden="true" />
                ) : (
                  <X className="h-3.5 w-3.5 stroke-[1.5]" aria-hidden="true" />
                )}
                <span>{item.label}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
