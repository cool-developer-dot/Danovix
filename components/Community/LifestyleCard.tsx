"use client";

import Image from "next/image";
import { Bookmark, Heart, MessageCircle } from "lucide-react";

import type { LifestyleItem } from "@/lib/community/constants";
import { cn } from "@/lib/cn";

import {
  lifestyleAspect,
  lifestyleCaption,
  lifestyleCard,
  lifestyleGlass,
  lifestyleImage,
  lifestyleLightSweep,
  lifestyleMedia,
  lifestyleMeta,
  lifestyleMetaItem,
  lifestylePhoto,
} from "./community.styles";

type LifestyleCardProps = {
  item: LifestyleItem;
  className?: string;
  priority?: boolean;
};

function formatCount(value: number) {
  if (value >= 1000) {
    return `${(value / 1000).toFixed(value >= 10000 ? 0 : 1).replace(/\.0$/, "")}k`;
  }
  return String(value);
}

function InstagramGlyph({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="0.8" fill="currentColor" stroke="none" />
    </svg>
  );
}

export function LifestyleCard({
  item,
  className,
  priority = false,
}: LifestyleCardProps) {
  const isProduct = item.fit === "contain";

  return (
    <a
      href="https://instagram.com/danovix"
      target="_blank"
      rel="noopener noreferrer"
      data-community="card"
      data-reveal={item.reveal}
      data-parallax={item.parallax}
      className={cn(lifestyleCard, className)}
      aria-label={`${item.caption}. ${item.likes} likes, ${item.comments} comments. View on Instagram.`}
    >
      <div
        data-community="media"
        className={cn(
          lifestyleMedia,
          lifestyleAspect[item.size],
          isProduct && "bg-[rgb(232_227_218)]",
        )}
      >
        <div
          data-community="cursor-layer"
          className={cn(
            "absolute inset-0",
            isProduct
              ? "flex items-center justify-center p-[10%] sm:p-[12%]"
              : "inset-[-4%] h-[108%] w-[108%]",
          )}
        >
          <div
            data-community="photo"
            className={cn(
              lifestylePhoto,
              isProduct
                ? "flex items-center justify-center"
                : "absolute inset-0",
            )}
          >
            <Image
              src={item.src}
              alt={item.alt}
              width={item.width}
              height={item.height}
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 55vw, 48vw"
              quality={80}
              className={cn(
                lifestyleImage,
                isProduct
                  ? "!static relative !h-auto !w-full max-h-full object-contain"
                  : "absolute inset-0 object-cover",
              )}
              loading={priority ? "eager" : "lazy"}
              priority={priority}
            />
          </div>
        </div>

        <div
          data-community="light-sweep"
          className={lifestyleLightSweep}
          aria-hidden="true"
        />

        <div className={lifestyleGlass} aria-hidden="true">
          <p className={lifestyleCaption}>{item.caption}</p>
          <div className={lifestyleMeta}>
            <span className={lifestyleMetaItem}>
              <InstagramGlyph className="h-3.5 w-3.5" />
            </span>
            <span className={lifestyleMetaItem}>
              <Heart className="h-3.5 w-3.5" strokeWidth={1.5} />
              {formatCount(item.likes)}
            </span>
            <span className={lifestyleMetaItem}>
              <MessageCircle className="h-3.5 w-3.5" strokeWidth={1.5} />
              {formatCount(item.comments)}
            </span>
            <span className={cn(lifestyleMetaItem, "ml-auto")}>
              <Bookmark className="h-3.5 w-3.5" strokeWidth={1.5} />
            </span>
          </div>
        </div>
      </div>
    </a>
  );
}
