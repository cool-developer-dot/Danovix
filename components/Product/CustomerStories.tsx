"use client";

import Image from "next/image";
import { BadgeCheck, Play, Star, ThumbsUp } from "lucide-react";
import { useMemo, useState } from "react";

import { cn } from "@/lib/cn";
import {
  buildClientTestimonials,
  buildFeaturedStory,
  buildVideoTestimonials,
  CLIENT_STORIES_COPY,
  COMMUNITY_GALLERY,
  EDITORIAL_QUOTES,
  filterTestimonials,
  SOCIAL_PROOF,
  TESTIMONIAL_FILTERS,
  TRUST_METRICS,
  type TestimonialFilterId,
} from "@/lib/product/testimonials";

import {
  communityCard,
  communityGrid,
  communityImage,
  communityLabel,
  communityOverlay,
  communitySquare,
  communityTall,
  communityWide,
  darkSection,
  editorialQuoteAttr,
  editorialQuoteBlock,
  editorialQuoteText,
  eyebrow,
  featuredBadge,
  featuredBody,
  featuredCopy,
  featuredIdentity,
  featuredMedia,
  featuredMeta,
  featuredName,
  featuredPortrait,
  featuredQuote,
  featuredStory,
  mediaTab,
  mediaTabActive,
  mediaTabIdle,
  metricCard,
  metricDetail,
  metricLabel,
  metricsGrid,
  metricValue,
  sectionBody,
  sectionHeader,
  sectionHeading,
  sectionInner,
  socialProofChip,
  socialProofRow,
  storiesCta,
  storiesCtaWrap,
  storiesGrid,
  storiesToolbar,
  storyCard,
  storyCardBody,
  storyCardBodyWrap,
  storyCardImage,
  storyCardMeta,
  storyCardPortrait,
  storyCardTitle,
  storyStars,
  videoCard,
  videoGrid,
  videoImage,
  videoMeta,
  videoOverlay,
  videoPlay,
  videoSub,
  videoThumb,
  videoTitle,
} from "./product.styles";

type CustomerStoriesProps = {
  productName: string;
  rating: number;
  reviewCount: number;
  onReserve?: () => void;
};

function communitySpan(span: "wide" | "tall" | "square") {
  switch (span) {
    case "wide":
      return communityWide;
    case "tall":
      return communityTall;
    default:
      return communitySquare;
  }
}

export function CustomerStories({
  productName,
  rating,
  reviewCount,
  onReserve,
}: CustomerStoriesProps) {
  const [filter, setFilter] = useState<TestimonialFilterId>("helpful");
  const [playingId, setPlayingId] = useState<string | null>(null);

  const featured = useMemo(
    () => buildFeaturedStory(productName),
    [productName],
  );
  const testimonials = useMemo(
    () => buildClientTestimonials(productName),
    [productName],
  );
  const videos = useMemo(
    () => buildVideoTestimonials(productName),
    [productName],
  );

  const visible = useMemo(
    () => filterTestimonials(testimonials, filter),
    [testimonials, filter],
  );

  return (
    <section
      aria-labelledby="product-stories-heading"
      data-product="stories"
      className={darkSection}
    >
      <div className={sectionInner}>
        <div className={sectionHeader}>
          <p className={eyebrow}>{CLIENT_STORIES_COPY.eyebrow}</p>
          <h2 id="product-stories-heading" className={sectionHeading}>
            {CLIENT_STORIES_COPY.heading.map((line) => (
              <span key={line} className="block">
                {line}
              </span>
            ))}
          </h2>
          <p className={sectionBody}>{CLIENT_STORIES_COPY.description}</p>
          <p className="mt-4 font-sans text-[11px] uppercase tracking-[0.22em] text-[rgb(214_196_158/0.85)]">
            {rating.toFixed(1)} average · {reviewCount} client stories
          </p>
        </div>

        {/* Trust metrics */}
        <div
          data-product="story-metrics"
          className={metricsGrid}
          aria-label="Client trust indicators"
        >
          {TRUST_METRICS.map((metric) => (
            <article key={metric.id} className={metricCard}>
              <p className={metricValue}>
                {metric.id === "rating" ? (
                  <span className="inline-flex items-center gap-1.5">
                    <Star className="h-5 w-5 fill-[rgb(214_196_158)] stroke-[rgb(214_196_158)]" />
                    {metric.value}
                  </span>
                ) : (
                  metric.value
                )}
              </p>
              <p className={metricLabel}>{metric.label}</p>
              <p className={metricDetail}>{metric.detail}</p>
            </article>
          ))}
        </div>

        {/* Featured client story */}
        <article data-product="featured-story" className={featuredStory}>
          <div className={featuredMedia}>
            <Image
              src={featured.lifestyleSrc}
              alt={featured.lifestyleAlt}
              fill
              sizes="(max-width: 1024px) 100vw, 58vw"
              loading="lazy"
              className="object-cover"
            />
            <div
              className="absolute inset-0 bg-[linear-gradient(90deg,transparent_40%,rgb(12_12_12/0.55)_100%)] max-lg:bg-[linear-gradient(180deg,transparent_30%,rgb(12_12_12/0.7)_100%)]"
              aria-hidden="true"
            />
          </div>

          <div className={featuredCopy}>
            <p className={eyebrow}>{CLIENT_STORIES_COPY.featuredEyebrow}</p>
            <span className={cn(featuredBadge, "mt-4")}>
              <BadgeCheck className="h-3.5 w-3.5" aria-hidden="true" />
              {CLIENT_STORIES_COPY.verifiedBadge}
            </span>
            <blockquote className={featuredQuote}>
              &ldquo;{featured.quote}&rdquo;
            </blockquote>
            <p className={featuredBody}>{featured.body}</p>
            <div className={featuredIdentity}>
              <div className={featuredPortrait}>
                <Image
                  src={featured.portraitSrc}
                  alt={featured.portraitAlt}
                  fill
                  sizes="56px"
                  loading="lazy"
                  className="object-cover"
                />
              </div>
              <div>
                <p className={featuredName}>{featured.name}</p>
                <p className={featuredMeta}>
                  {featured.profession}
                  <br />
                  {featured.location}
                  <br />
                  Owns {featured.productOwned}
                </p>
              </div>
            </div>
          </div>
        </article>

        {/* Editorial quote break */}
        <blockquote
          data-product="editorial-quote"
          className={editorialQuoteBlock}
        >
          <p className={eyebrow}>{CLIENT_STORIES_COPY.quotesEyebrow}</p>
          <p className={cn(editorialQuoteText, "mt-5")}>
            &ldquo;{EDITORIAL_QUOTES[0].quote}&rdquo;
          </p>
          <footer className={editorialQuoteAttr}>
            {EDITORIAL_QUOTES[0].attribution}
          </footer>
        </blockquote>

        {/* Filters + grid */}
        <div className="text-center">
          <h3 className="font-serif text-[clamp(1.65rem,3.5vw,2.25rem)] font-light text-[rgb(248_247_244)]">
            {CLIENT_STORIES_COPY.gridHeading}
          </h3>
        </div>

        <div
          className={storiesToolbar}
          role="toolbar"
          aria-label="Filter client stories"
        >
          {TESTIMONIAL_FILTERS.map((item) => (
            <button
              key={item.id}
              type="button"
              className={cn(
                mediaTab,
                filter === item.id ? mediaTabActive : mediaTabIdle,
              )}
              aria-pressed={filter === item.id}
              onClick={() => setFilter(item.id)}
            >
              {item.label}
            </button>
          ))}
        </div>

        <div className={storiesGrid}>
          {visible.map((story) => (
            <article
              key={story.id}
              data-product="story-card"
              className={storyCard}
            >
              <div className={storyCardImage}>
                <Image
                  src={story.lifestyleSrc ?? story.portraitSrc}
                  alt={story.lifestyleAlt ?? story.portraitAlt}
                  fill
                  sizes="(max-width: 768px) 92vw, 33vw"
                  loading="lazy"
                  className="object-cover transition-transform duration-[900ms] group-hover/story:scale-[1.03]"
                />
                <div className={storyCardPortrait}>
                  <Image
                    src={story.portraitSrc}
                    alt=""
                    fill
                    sizes="48px"
                    loading="lazy"
                    className="object-cover"
                  />
                </div>
              </div>

              <div className={storyCardBodyWrap}>
                <div className={storyStars} aria-label={`${story.rating} stars`}>
                  {Array.from({ length: 5 }).map((_, index) => (
                    <Star
                      key={index}
                      className={cn(
                        "h-3.5 w-3.5",
                        index < story.rating
                          ? "fill-[rgb(214_196_158)] stroke-[rgb(214_196_158)]"
                          : "stroke-[rgb(248_247_244/0.25)]",
                      )}
                    />
                  ))}
                </div>
                <h3 className={storyCardTitle}>{story.title}</h3>
                <p className={storyCardBody}>{story.body}</p>
                <p className="mt-3 font-sans text-[10px] uppercase tracking-[0.16em] text-[rgb(198_161_91/0.85)]">
                  Owns {story.productOwned}
                </p>
                <div className={storyCardMeta}>
                  <span>{story.name}</span>
                  <span aria-hidden="true">·</span>
                  <span>{story.location}</span>
                  <span aria-hidden="true">·</span>
                  <span>{story.date}</span>
                  {story.verified ? (
                    <>
                      <span aria-hidden="true">·</span>
                      <span className="inline-flex items-center gap-1 text-[rgb(214_196_158)]">
                        <BadgeCheck className="h-3 w-3" />
                        {CLIENT_STORIES_COPY.verifiedPurchase}
                      </span>
                    </>
                  ) : null}
                  <span className="ml-auto inline-flex items-center gap-1">
                    <ThumbsUp className="h-3 w-3" aria-hidden="true" />
                    {story.helpful}
                  </span>
                </div>
              </div>
            </article>
          ))}
        </div>

        {visible.length === 0 ? (
          <p className="mt-10 text-center text-[14px] text-[rgb(248_247_244/0.5)]">
            No stories match this curation yet. Try another filter.
          </p>
        ) : null}

        {/* Second editorial quote */}
        <blockquote
          data-product="editorial-quote"
          className={editorialQuoteBlock}
        >
          <p className={cn(editorialQuoteText)}>
            &ldquo;{EDITORIAL_QUOTES[1].quote}&rdquo;
          </p>
          <footer className={editorialQuoteAttr}>
            {EDITORIAL_QUOTES[1].attribution}
          </footer>
        </blockquote>

        {/* Video testimonials */}
        <div className="text-center">
          <p className={eyebrow}>Video Testimonials</p>
          <h3 className="mt-4 font-serif text-[clamp(1.65rem,3.5vw,2.25rem)] font-light text-[rgb(248_247_244)]">
            {CLIENT_STORIES_COPY.videoHeading}
          </h3>
          <p className="mx-auto mt-4 max-w-[480px] text-[14px] leading-relaxed text-[rgb(248_247_244/0.55)]">
            {CLIENT_STORIES_COPY.videoDescription}
          </p>
        </div>

        <div className={videoGrid}>
          {videos.map((video) => {
            const playing = playingId === video.id;
            return (
              <button
                key={video.id}
                type="button"
                data-product="video-card"
                className={videoCard}
                aria-label={`Play ${video.title} by ${video.customer}`}
                onClick={() =>
                  setPlayingId((current) =>
                    current === video.id ? null : video.id,
                  )
                }
              >
                <div className={videoThumb}>
                  <Image
                    src={video.thumbnailSrc}
                    alt={video.thumbnailAlt}
                    fill
                    sizes="(max-width: 640px) 92vw, 25vw"
                    loading="lazy"
                    className={cn(
                      videoImage,
                      playing && "scale-[1.04]",
                    )}
                  />
                  <div className={videoOverlay} aria-hidden="true" />
                  <span className={videoPlay} aria-hidden="true">
                    <Play className="h-5 w-5 fill-current stroke-none" />
                  </span>
                  <div className={videoMeta}>
                    <p className={videoTitle}>{video.title}</p>
                    <p className={videoSub}>
                      <span>{video.customer}</span>
                      <span aria-hidden="true">·</span>
                      <span>{video.duration}</span>
                      {video.verified ? (
                        <>
                          <span aria-hidden="true">·</span>
                          <span className="inline-flex items-center gap-1 text-[rgb(214_196_158)]">
                            <BadgeCheck className="h-3 w-3" />
                            Verified
                          </span>
                        </>
                      ) : null}
                    </p>
                  </div>
                  {playing ? (
                    <span
                      className="absolute left-4 top-4 z-[3] rounded-full border border-[rgb(248_247_244/0.2)] bg-[rgb(12_12_12/0.65)] px-3 py-1 font-sans text-[9px] uppercase tracking-[0.16em] text-[rgb(248_247_244/0.8)] backdrop-blur-sm"
                      role="status"
                    >
                      Playing preview
                    </span>
                  ) : null}
                </div>
              </button>
            );
          })}
        </div>

        {/* Third quote */}
        <blockquote
          data-product="editorial-quote"
          className={editorialQuoteBlock}
        >
          <p className={cn(editorialQuoteText)}>
            &ldquo;{EDITORIAL_QUOTES[2].quote}&rdquo;
          </p>
          <footer className={editorialQuoteAttr}>
            {EDITORIAL_QUOTES[2].attribution}
          </footer>
        </blockquote>

        {/* Community lifestyle gallery */}
        <div className="text-center">
          <p className={eyebrow}>Lifestyle Customer Gallery</p>
          <h3 className="mt-4 font-serif text-[clamp(1.65rem,3.5vw,2.25rem)] font-light text-[rgb(248_247_244)]">
            {CLIENT_STORIES_COPY.galleryHeading}
          </h3>
          <p className="mx-auto mt-4 max-w-[480px] text-[14px] leading-relaxed text-[rgb(248_247_244/0.55)]">
            {CLIENT_STORIES_COPY.galleryDescription}
          </p>
        </div>

        <div className={communityGrid}>
          {COMMUNITY_GALLERY.map((shot) => (
            <article
              key={shot.id}
              data-product="community-card"
              className={cn(
                communityCard,
                communitySpan(shot.span),
                shot.span === "tall" && "min-h-[280px] lg:min-h-full",
              )}
            >
              <Image
                src={shot.imageSrc}
                alt={shot.imageAlt}
                fill
                sizes="(max-width: 1024px) 50vw, 40vw"
                loading="lazy"
                className={communityImage}
              />
              <div className={communityOverlay} aria-hidden="true" />
              <p className={communityLabel}>{shot.setting}</p>
            </article>
          ))}
        </div>

        {/* Social proof */}
        <div className="mt-14 text-center">
          <p className={eyebrow}>{CLIENT_STORIES_COPY.socialEyebrow}</p>
          <div className={socialProofRow}>
            {SOCIAL_PROOF.map((chip) => (
              <span key={chip.id} className={socialProofChip}>
                {chip.label}
              </span>
            ))}
          </div>
        </div>

        {/* CTA toward reserve */}
        <div className={storiesCtaWrap}>
          <p className="max-w-[420px] text-[15px] leading-relaxed text-[rgb(248_247_244/0.55)]">
            {CLIENT_STORIES_COPY.ctaHint}
          </p>
          <button type="button" className={storiesCta} onClick={onReserve}>
            {CLIENT_STORIES_COPY.cta}
            <span aria-hidden="true">→</span>
          </button>
        </div>
      </div>
    </section>
  );
}
