"use client";

import Image from "next/image";
import { Play } from "lucide-react";
import { useState } from "react";

import { cn } from "@/lib/cn";

import {
  darkSection,
  eyebrow,
  filmChapter,
  filmChapterActive,
  filmChapters,
  filmPlay,
  filmPlayBtn,
  filmStage,
  sectionBody,
  sectionHeader,
  sectionHeading,
  sectionInner,
} from "./product.styles";

type BrandFilmProps = {
  chapters: readonly { id: string; label: string; imageSrc: string }[];
  productName: string;
};

export function BrandFilm({ chapters, productName }: BrandFilmProps) {
  const [activeId, setActiveId] = useState(chapters[0]?.id ?? "");
  const [playing, setPlaying] = useState(false);
  const active =
    chapters.find((chapter) => chapter.id === activeId) ?? chapters[0];

  return (
    <section
      aria-labelledby="product-film-heading"
      data-product="film"
      className={darkSection}
    >
      <div className={sectionInner}>
        <div className={sectionHeader}>
          <p className={eyebrow}>Editorial Brand Film</p>
          <h2 id="product-film-heading" className={sectionHeading}>
            A Campaign In Motion.
          </h2>
          <p className={sectionBody}>
            Cinematic chapters that reveal craftsmanship, lifestyle, and the
            quiet theatre of {productName}.
          </p>
        </div>

        <div className={filmStage}>
          {active ? (
            <Image
              src={active.imageSrc}
              alt={`${active.label} film chapter`}
              fill
              sizes="(max-width: 1024px) 100vw, 1200px"
              loading="lazy"
              className={cn(
                "object-cover transition-transform duration-[1200ms]",
                playing && "scale-[1.03]",
              )}
            />
          ) : null}
          <div
            className="absolute inset-0 z-[1] bg-[rgb(12_12_12/0.35)]"
            aria-hidden="true"
          />
          <div className={filmPlay}>
            <button
              type="button"
              className={filmPlayBtn}
              aria-label={playing ? "Pause film preview" : "Play film preview"}
              onClick={() => setPlaying((value) => !value)}
            >
              <Play className="h-6 w-6 fill-current stroke-none" />
            </button>
          </div>
          {playing ? (
            <p
              className="absolute bottom-5 left-1/2 z-[3] -translate-x-1/2 rounded-full border border-[rgb(248_247_244/0.14)] bg-[rgb(18_16_14/0.75)] px-4 py-2 font-sans text-[10px] uppercase tracking-[0.18em] text-[rgb(248_247_244/0.7)] backdrop-blur-md"
              role="status"
            >
              {active?.label} · Cinematic preview
            </p>
          ) : null}
        </div>

        <div className={filmChapters} role="tablist" aria-label="Film chapters">
          {chapters.map((chapter) => (
            <button
              key={chapter.id}
              type="button"
              role="tab"
              aria-selected={chapter.id === activeId}
              className={cn(
                filmChapter,
                chapter.id === activeId && filmChapterActive,
              )}
              onClick={() => {
                setActiveId(chapter.id);
                setPlaying(false);
              }}
            >
              {chapter.label}
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
