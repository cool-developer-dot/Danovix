"use client";

import { useMediaQuery } from "@react-hook/media-query";
import { Star } from "lucide-react";
import Image from "next/image";
import React, { useCallback, useEffect, useRef, useState } from "react";
import HTMLFlipBook from "react-pageflip";

export interface Testimonial {
  image?: string;
  text: string;
  name: string;
  jobtitle: string;
  rating: number;
}

interface PageFlipApi {
  flipNext: (corner?: "top" | "bottom") => void;
  flipPrev: (corner?: "top" | "bottom") => void;
  flip: (page: number, corner?: "top" | "bottom") => void;
  getPageCount: () => number;
  getCurrentPageIndex: () => number;
}

interface FlipBookRef {
  pageFlip: () => PageFlipApi;
}

export interface ComponentProps {
  testimonials: Testimonial[];
  /** Small uppercase eyebrow shown on the cover. */
  eyebrow?: string;
  /** Large wordmark shown on the cover. */
  brand?: string;
  /** Italic line under the cover wordmark. */
  coverNote?: string;
}

const GOLD = "rgb(198, 161, 91)";
const GOLD_SOFT = "rgba(198, 161, 91, 0.35)";

function Rating({ rating }: { rating: number }) {
  return (
    <div
      className="flex items-center justify-center gap-1"
      role="img"
      aria-label={`Rated ${rating} out of 5`}
    >
      {Array.from({ length: 5 }).map((_, i) => (
        <Star
          key={i}
          className="h-4 w-4"
          strokeWidth={1}
          fill={i < rating ? GOLD : "transparent"}
          color={i < rating ? GOLD : GOLD_SOFT}
          aria-hidden="true"
        />
      ))}
    </div>
  );
}

function PageNumber({ value }: { value: number }) {
  return (
    <span className="absolute right-7 top-7 font-sans text-[10px] tracking-[0.3em] text-[rgb(198_161_91/0.7)]">
      {String(value).padStart(2, "0")}
    </span>
  );
}

export const Component = ({
  testimonials,
  eyebrow = "Voices of Danovix",
  brand = "DANOVIX",
  coverNote = "A collection of voices from women who value timeless craftsmanship.",
}: ComponentProps) => {
  const book = useRef<FlipBookRef | null>(null);

  const isWide = useMediaQuery("(min-width: 640px)");
  const usePortrait = !isWide;

  const [size, setSize] = useState({ width: 380, height: 516 });
  const [page, setPage] = useState(0);

  const totalPages = testimonials.length + 3; // cover + index + entries + closing

  useEffect(() => {
    const compute = () => {
      const vw = window.innerWidth;
      let width = 380;
      if (vw < 400) width = vw - 56;
      else if (vw < 640) width = 320;
      else if (vw < 1024) width = 344;
      width = Math.max(240, Math.min(width, 388));
      setSize({ width, height: Math.round(width * 1.36) });
    };

    compute();
    window.addEventListener("resize", compute);
    return () => window.removeEventListener("resize", compute);
  }, []);

  const flipTo = useCallback((pageNum: number) => {
    book.current?.pageFlip()?.flip(pageNum);
  }, []);

  const next = useCallback(() => {
    book.current?.pageFlip()?.flipNext();
  }, []);

  const prev = useCallback(() => {
    book.current?.pageFlip()?.flipPrev();
  }, []);

  const handleKeyDown = (event: React.KeyboardEvent<HTMLDivElement>) => {
    if (event.key === "ArrowRight") {
      event.preventDefault();
      next();
    } else if (event.key === "ArrowLeft") {
      event.preventDefault();
      prev();
    }
  };

  return (
    <div className="flex w-full flex-col items-center">
      <div
        className="flex w-full justify-center outline-none"
        role="group"
        aria-roledescription="flip book"
        aria-label="Customer testimonials book"
        tabIndex={0}
        onKeyDown={handleKeyDown}
      >
        <HTMLFlipBook
          ref={book}
          key={`${size.width}-${usePortrait ? "p" : "l"}`}
          width={size.width}
          height={size.height}
          size="fixed"
          minWidth={240}
          maxWidth={420}
          minHeight={300}
          maxHeight={600}
          showCover
          usePortrait={usePortrait}
          startPage={0}
          startZIndex={0}
          autoSize={false}
          drawShadow
          flippingTime={950}
          maxShadowOpacity={0.5}
          mobileScrollSupport
          clickEventForward
          useMouseEvents
          swipeDistance={30}
          showPageCorners
          disableFlipByClick
          className="danovix-flip-book"
          style={{}}
          onFlip={(event: { data: number }) => setPage(event.data)}
        >
          {/* ── Cover (hard) ── */}
          <div
            data-density="hard"
            className="relative flex h-full w-full flex-col overflow-hidden bg-[#111111] text-[#f8f7f4]"
          >
            {/* double luxury frame */}
            <div className="pointer-events-none absolute inset-[12px] rounded-[3px] border border-[rgb(198_161_91/0.4)]" />
            <div className="pointer-events-none absolute inset-[17px] rounded-[2px] border border-[rgb(198_161_91/0.14)]" />

            <div className="relative z-[1] flex h-full w-full flex-col items-center justify-between px-7 py-[clamp(2.75rem,9%,4rem)] text-center">
              {/* top */}
              <span className="max-w-full font-sans text-[9px] uppercase leading-none tracking-[0.3em] text-[rgb(214_196_158)]">
                {eyebrow}
              </span>

              {/* center */}
              <div className="flex flex-col items-center">
                <h2 className="font-serif text-[clamp(1.7rem,8vw,2.15rem)] font-light leading-none tracking-[0.16em] text-[#f8f7f4]">
                  {brand}
                </h2>
                <div className="mt-5 h-px w-14 bg-[rgb(198_161_91/0.6)]" />
                <div className="mt-5">
                  <Rating rating={5} />
                </div>
                <p className="mt-6 max-w-[210px] font-serif text-[0.95rem] italic leading-relaxed text-[rgb(248_247_244/0.72)]">
                  {coverNote}
                </p>
              </div>

              {/* bottom */}
              <span className="max-w-full font-sans text-[9px] uppercase leading-none tracking-[0.28em] text-[rgb(248_247_244/0.4)]">
                The Maison Journal
              </span>
            </div>
          </div>

          {/* ── Index ── */}
          <div className="relative flex h-full w-full flex-col overflow-hidden bg-[#f6f3ec] p-8 text-[#1c1c1c]">
            <div className="pointer-events-none absolute inset-[10px] rounded-[2px] border border-[rgb(28_28_28/0.08)]" />
            <PageNumber value={1} />
            <span className="font-sans text-[10px] uppercase tracking-[0.34em] text-[rgb(198_161_91)]">
              Contents
            </span>
            <h3 className="mt-2 font-serif text-[1.8rem] font-light leading-tight">
              The Voices
            </h3>
            <div className="mt-3 h-px w-12 bg-[rgb(198_161_91/0.55)]" />

            <ol className="mt-6 flex flex-col gap-3">
              {testimonials.map((testimonial, index) => (
                <li key={index}>
                  <button
                    type="button"
                    onClick={() => flipTo(index + 2)}
                    className="group flex w-full items-center gap-3 text-left"
                    aria-label={`Read ${testimonial.name}'s story`}
                  >
                    <span className="relative h-8 w-8 shrink-0 overflow-hidden rounded-full border border-[rgb(198_161_91/0.4)]">
                      {testimonial.image ? (
                        <Image
                          src={testimonial.image}
                          alt=""
                          fill
                          sizes="32px"
                          className="object-cover"
                        />
                      ) : null}
                    </span>
                    <span className="min-w-0 flex-1 truncate font-serif text-[0.95rem] text-[#26241f] transition-colors group-hover:text-[rgb(160_120_50)]">
                      {testimonial.name}
                    </span>
                    <span
                      className="mx-2 h-px flex-1 border-b border-dotted border-[rgb(28_28_28/0.2)]"
                      aria-hidden="true"
                    />
                    <span className="font-sans text-[11px] tracking-[0.15em] text-[rgb(28_28_28/0.5)]">
                      {String(index + 2).padStart(2, "0")}
                    </span>
                  </button>
                </li>
              ))}
            </ol>

            <span className="mt-auto font-sans text-[9px] uppercase tracking-[0.3em] text-[rgb(28_28_28/0.35)]">
              Turn the page — or select a name
            </span>
          </div>

          {/* ── Testimonial pages ── */}
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="relative flex h-full w-full flex-col items-center justify-center overflow-hidden bg-[#f6f3ec] px-8 py-10 text-center text-[#1c1c1c]"
            >
              <div className="pointer-events-none absolute inset-[10px] rounded-[2px] border border-[rgb(28_28_28/0.08)]" />
              <PageNumber value={index + 2} />

              <div className="relative h-[92px] w-[92px] shrink-0 overflow-hidden rounded-full border border-[rgb(198_161_91/0.55)] shadow-[0_10px_30px_-12px_rgb(0_0_0/0.4)]">
                {testimonial.image ? (
                  <Image
                    src={testimonial.image}
                    alt={testimonial.name}
                    fill
                    sizes="92px"
                    className="object-cover"
                  />
                ) : null}
              </div>

              <p className="mt-4 font-serif text-[1.3rem] font-light leading-tight">
                {testimonial.name}
              </p>
              <p className="mt-1 font-sans text-[10px] uppercase tracking-[0.24em] text-[rgb(28_28_28/0.5)]">
                {testimonial.jobtitle}
              </p>

              <div className="mt-3">
                <Rating rating={testimonial.rating} />
              </div>

              <div className="my-5 h-px w-10 bg-[rgb(198_161_91/0.5)]" />

              <blockquote className="max-w-[260px] font-serif text-[1.02rem] italic leading-relaxed text-[#2a2822]">
                {testimonial.text}
              </blockquote>

              <span className="absolute bottom-7 font-sans text-[9px] uppercase tracking-[0.3em] text-[rgb(198_161_91/0.7)]">
                Verified Customer
              </span>
            </div>
          ))}

          {/* ── Closing (hard) ── */}
          <div
            data-density="hard"
            className="relative flex h-full w-full flex-col overflow-hidden bg-[#111111] text-[#f8f7f4]"
          >
            <div className="pointer-events-none absolute inset-[12px] rounded-[3px] border border-[rgb(198_161_91/0.4)]" />
            <div className="pointer-events-none absolute inset-[17px] rounded-[2px] border border-[rgb(198_161_91/0.14)]" />

            <div className="relative z-[1] flex h-full w-full flex-col items-center justify-between px-7 py-[clamp(2.75rem,9%,4rem)] text-center">
              <span className="max-w-full font-sans text-[9px] uppercase leading-none tracking-[0.3em] text-[rgb(214_196_158)]">
                {eyebrow}
              </span>

              <div className="flex flex-col items-center">
                <h2 className="font-serif text-[clamp(1.6rem,7vw,2rem)] font-light leading-none tracking-[0.14em]">
                  Thank You
                </h2>
                <div className="mt-5 h-px w-14 bg-[rgb(198_161_91/0.6)]" />
                <p className="mt-6 max-w-[220px] font-serif text-[0.95rem] italic leading-relaxed text-[rgb(248_247_244/0.72)]">
                  For being part of the Danovix story.
                </p>
              </div>

              <span className="max-w-full font-sans text-[9px] uppercase leading-none tracking-[0.28em] text-[rgb(214_196_158/0.7)]">
                {brand}
              </span>
            </div>
          </div>
        </HTMLFlipBook>
      </div>

      {/* ── Controls ── */}
      <div
        data-voices="nav"
        className="mt-[clamp(2rem,5vh,3rem)] flex items-center justify-center gap-[clamp(1.5rem,5vw,3rem)]"
      >
        <button
          type="button"
          onClick={prev}
          disabled={page <= 0}
          aria-label="Previous page"
          className="group/nav inline-flex items-center gap-2 font-sans text-[clamp(10px,2.6vw,11px)] font-medium uppercase tracking-[0.24em] text-[rgb(248_247_244/0.7)] transition-colors duration-300 hover:text-[rgb(248_247_244)] disabled:pointer-events-none disabled:opacity-30"
        >
          <span aria-hidden="true">←</span>
          <span className="relative after:absolute after:-bottom-1 after:left-0 after:h-px after:w-full after:origin-right after:scale-x-0 after:bg-[rgb(198_161_91/0.7)] after:transition-transform after:duration-[400ms] after:ease-[cubic-bezier(0.22,1,0.36,1)] group-hover/nav:after:origin-left group-hover/nav:after:scale-x-100">
            Previous
          </span>
        </button>

        <p
          className="inline-flex items-center gap-1.5 font-sans text-[clamp(11px,2.8vw,12px)] tabular-nums tracking-[0.22em]"
          aria-live="polite"
        >
          <span className="text-[rgb(214_196_158)]">
            {String(Math.min(page + 1, totalPages)).padStart(2, "0")}
          </span>
          <span className="text-[rgb(248_247_244/0.3)]" aria-hidden="true">
            /
          </span>
          <span className="text-[rgb(248_247_244/0.45)]">
            {String(totalPages).padStart(2, "0")}
          </span>
        </p>

        <button
          type="button"
          onClick={next}
          disabled={page >= totalPages - 1}
          aria-label="Next page"
          className="group/nav inline-flex items-center gap-2 font-sans text-[clamp(10px,2.6vw,11px)] font-medium uppercase tracking-[0.24em] text-[rgb(248_247_244/0.7)] transition-colors duration-300 hover:text-[rgb(248_247_244)] disabled:pointer-events-none disabled:opacity-30"
        >
          <span className="relative after:absolute after:-bottom-1 after:left-0 after:h-px after:w-full after:origin-right after:scale-x-0 after:bg-[rgb(198_161_91/0.7)] after:transition-transform after:duration-[400ms] after:ease-[cubic-bezier(0.22,1,0.36,1)] group-hover/nav:after:origin-left group-hover/nav:after:scale-x-100">
            Next
          </span>
          <span aria-hidden="true">→</span>
        </button>
      </div>
    </div>
  );
};
