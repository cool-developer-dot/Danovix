"use client";

import Image from "next/image";
import { useMemo, useState } from "react";

import { cn } from "@/lib/cn";
import type { ProductMediaCategory, ProductMediaItem } from "@/lib/product/constants";

import {
  darkSection,
  eyebrow,
  mediaCard,
  mediaCardImage,
  mediaCardLabel,
  mediaGrid,
  mediaTab,
  mediaTabActive,
  mediaTabIdle,
  mediaTabs,
  sectionBody,
  sectionHeader,
  sectionHeading,
  sectionInner,
} from "./product.styles";

const TABS: { id: ProductMediaCategory | "all"; label: string }[] = [
  { id: "all", label: "All Media" },
  { id: "studio", label: "Studio" },
  { id: "lifestyle", label: "Lifestyle" },
  { id: "macro", label: "Macro" },
  { id: "packaging", label: "Packaging" },
];

type ProductMediaExperienceProps = {
  media: readonly ProductMediaItem[];
  productName: string;
  onSelect: (item: ProductMediaItem) => void;
};

export function ProductMediaExperience({
  media,
  productName,
  onSelect,
}: ProductMediaExperienceProps) {
  const [tab, setTab] = useState<(typeof TABS)[number]["id"]>("all");

  const visible = useMemo(() => {
    const images = media.filter(
      (item) => item.kind === "image" || item.kind === "video",
    );
    if (tab === "all") return images;
    return images.filter((item) => item.category === tab);
  }, [media, tab]);

  return (
    <section
      aria-labelledby="product-media-heading"
      data-product="media"
      className={darkSection}
    >
      <div className={sectionInner}>
        <div className={sectionHeader}>
          <p className={eyebrow}>Media Experience</p>
          <h2 id="product-media-heading" className={sectionHeading}>
            Every Angle. Every Detail.
          </h2>
          <p className={sectionBody}>
            Explore {productName} through studio precision, lifestyle aspiration,
            and craftsmanship macro — as if the piece were presented privately
            before you.
          </p>
        </div>

        <div className={mediaTabs} role="tablist" aria-label="Media categories">
          {TABS.map((item) => (
            <button
              key={item.id}
              type="button"
              role="tab"
              aria-selected={tab === item.id}
              className={cn(
                mediaTab,
                tab === item.id ? mediaTabActive : mediaTabIdle,
              )}
              onClick={() => setTab(item.id)}
            >
              {item.label}
            </button>
          ))}
        </div>

        <div className={mediaGrid}>
          {visible.map((item) => (
            <button
              key={item.id}
              type="button"
              data-product="media-card"
              className={mediaCard}
              onClick={() => onSelect(item)}
              aria-label={`View ${item.label}`}
            >
              <Image
                src={item.poster ?? item.src}
                alt={item.alt}
                fill
                sizes="(max-width: 768px) 46vw, 25vw"
                loading="lazy"
                className={mediaCardImage}
              />
              <span className={mediaCardLabel}>{item.label}</span>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
