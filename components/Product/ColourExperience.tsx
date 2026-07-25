"use client";

import Image from "next/image";
import Link from "next/link";

import { cn } from "@/lib/cn";
import type { ProductColour } from "@/lib/product/constants";

import {
  colourCard,
  colourCardActive,
  colourCardImage,
  colourCardMeta,
  colourExperienceGrid,
  darkSection,
  eyebrow,
  sectionBody,
  sectionHeader,
  sectionHeading,
  sectionInner,
} from "./product.styles";

type ColourExperienceProps = {
  colours: readonly ProductColour[];
  activeId: string;
  onSelect: (colour: ProductColour) => void;
};

export function ColourExperience({
  colours,
  activeId,
  onSelect,
}: ColourExperienceProps) {
  return (
    <section
      aria-labelledby="product-colour-heading"
      data-product="colour"
      className={darkSection}
    >
      <div className={sectionInner}>
        <div className={sectionHeader}>
          <p className={eyebrow}>Colour Experience</p>
          <h2 id="product-colour-heading" className={sectionHeading}>
            Choose Your Expression.
          </h2>
          <p className={sectionBody}>
            Switch tones instantly — imagery updates with the composure of a
            boutique appointment, never a page reload.
          </p>
        </div>

        <div className={colourExperienceGrid}>
          {colours.map((colour) => {
            const active = colour.id === activeId;
            return (
              <button
                key={colour.id}
                type="button"
                data-product="colour-card"
                className={cn(colourCard, active && colourCardActive)}
                onClick={() => onSelect(colour)}
                aria-pressed={active}
              >
                <Image
                  src={colour.imageSrc}
                  alt={`${colour.name} colourway`}
                  fill
                  sizes="(max-width: 768px) 46vw, 25vw"
                  loading="lazy"
                  className={colourCardImage}
                />
                <div className={colourCardMeta}>
                  <p className="font-serif text-[1.35rem] font-light text-[rgb(248_247_244)]">
                    {colour.name}
                  </p>
                  <p className="mt-1 font-sans text-[10px] uppercase tracking-[0.18em] text-[rgb(214_196_158/0.85)]">
                    {colour.available ? "Available" : "Waitlist"}
                    {active ? " · Selected" : ""}
                  </p>
                </div>
              </button>
            );
          })}
        </div>

        <p className="mt-8 text-center text-[13px] text-[rgb(248_247_244/0.45)]">
          Prefer another silhouette in this tone?{" "}
          <Link
            href="/collection"
            className="text-[rgb(214_196_158)] underline-offset-4 hover:underline"
          >
            Explore the showroom
          </Link>
        </p>
      </div>
    </section>
  );
}
