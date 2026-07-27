"use client";

import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";

import {
  LIFESTYLE_COLLECTIONS,
  STYLIST_LOOKS,
  STYLIST_PAGE,
} from "@/lib/shopping/experiences";

import {
  btnGhost,
  darkSection,
  glassCard,
  sectionDescription,
  sectionHeader,
  sectionHeading,
  shoppingEyebrow,
  shoppingInner,
  softChip,
  warmBg,
  warmDescription,
  warmGlassCard,
  warmHeading,
  warmNoise,
  warmSection,
} from "../shopping.styles";
import { ShoppingHero } from "../shared/ShoppingHero";
import { ShoppingShell } from "../shared/ShoppingShell";
import { useShoppingAnimations } from "../shared/useShoppingAnimations";

export function StylistExperience() {
  const rootRef = useRef<HTMLDivElement>(null);
  useShoppingAnimations(rootRef);

  return (
    <ShoppingShell rootRef={rootRef}>
      <ShoppingHero
        eyebrow={STYLIST_PAGE.eyebrow}
        heading={STYLIST_PAGE.heading}
        description={STYLIST_PAGE.description}
        headingId="stylist-heading"
      />

      <section className={warmSection} aria-labelledby="understands-heading">
        <div className={warmBg} aria-hidden="true" />
        <div className={warmNoise} aria-hidden="true" />
        <div className={shoppingInner}>
          <article
            data-shopping="card"
            className={`${warmGlassCard} mx-auto max-w-[720px] p-6 text-center sm:p-10`}
          >
            <p className={`${shoppingEyebrow} !text-[rgb(168_138_78)]`}>
              {STYLIST_PAGE.understandsHeading}
            </p>
            <h2 id="understands-heading" className={warmHeading}>
              Understood quietly
            </h2>
            <p className={warmDescription}>{STYLIST_PAGE.understands}</p>
          </article>
        </div>
      </section>

      <section className={darkSection} aria-labelledby="looks-heading">
        <div className={shoppingInner}>
          <div className={sectionHeader}>
            <h2 id="looks-heading" className={sectionHeading}>
              {STYLIST_PAGE.looksHeading}
            </h2>
            <p className={sectionDescription}>
              {STYLIST_PAGE.looksDescription}
            </p>
          </div>

          <div className="mt-12 space-y-12">
            {STYLIST_LOOKS.map((look) => (
              <article
                key={look.id}
                data-shopping="card"
                className={`${glassCard} p-5 sm:p-7 lg:p-8`}
              >
                <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
                  <div>
                    <p className={shoppingEyebrow}>Complete Look</p>
                    <h3 className="mt-3 font-serif text-[clamp(1.6rem,3.5vw,2.2rem)] font-light text-[rgb(248_247_244)]">
                      {look.title}
                    </h3>
                  </div>
                  <Link href="/collection" className={btnGhost}>
                    Explore Look
                  </Link>
                </div>

                <div className="mt-8 flex gap-4 overflow-x-auto pb-2 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
                  {look.items.map((item, index) => (
                    <Link
                      key={item.id}
                      href={item.href}
                      className="w-[min(70vw,220px)] shrink-0"
                    >
                      <div className="relative aspect-[4/5] overflow-hidden rounded-[18px]">
                        <Image
                          src={item.imageSrc}
                          alt={item.name}
                          fill
                          sizes="220px"
                          loading="lazy"
                          className="object-cover"
                        />
                      </div>
                      <p className="mt-3 font-serif text-[1.1rem] font-light text-[rgb(248_247_244)]">
                        {item.name}
                      </p>
                      <p className="mt-1 font-sans text-[10px] uppercase tracking-[0.18em] text-[rgb(198_161_91/0.85)]">
                        {item.role}
                      </p>
                      {index < look.items.length - 1 ? (
                        <span className="sr-only">then</span>
                      ) : null}
                    </Link>
                  ))}
                </div>

                <p className="mt-8 max-w-[640px] text-[15px] leading-[1.85] text-[rgb(248_247_244/0.6)]">
                  {look.note}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className={darkSection} aria-labelledby="lifestyle-heading">
        <div className={shoppingInner}>
          <div className={sectionHeader}>
            <h2 id="lifestyle-heading" className={sectionHeading}>
              {STYLIST_PAGE.lifestyleHeading}
            </h2>
            <p className={sectionDescription}>
              {STYLIST_PAGE.lifestyleDescription}
            </p>
          </div>

          <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {LIFESTYLE_COLLECTIONS.map((collection) => (
              <Link
                key={collection.id}
                href={collection.href}
                data-shopping="card"
                className={`${glassCard} overflow-hidden`}
              >
                <div className="relative aspect-[4/5] overflow-hidden">
                  <Image
                    src={collection.imageSrc}
                    alt={collection.title}
                    fill
                    sizes="(max-width: 640px) 90vw, 25vw"
                    loading="lazy"
                    className="object-cover transition-transform duration-[900ms] hover:scale-[1.04]"
                  />
                </div>
                <div className="p-5">
                  <h3 className="font-serif text-[1.25rem] font-light text-[rgb(248_247_244)]">
                    {collection.title}
                  </h3>
                  <p className="mt-2 text-[13px] text-[rgb(248_247_244/0.55)]">
                    {collection.subtitle}
                  </p>
                  <span className={`${softChip} mt-4`}>View Edit</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </ShoppingShell>
  );
}
