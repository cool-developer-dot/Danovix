import Image from "next/image";
import type { CSSProperties, SVGProps } from "react";

import { cn } from "@/lib/cn";

export const LOGO_SRC = "/logo.webp";
export const LOGO_WIDTH = 1536;
export const LOGO_HEIGHT = 1024;

type DanovixLogoProps = {
  className?: string;
  priority?: boolean;
  sizes?: string;
  style?: CSSProperties;
};

export function DanovixLogo({
  className,
  priority = false,
  sizes = "400px",
  style,
}: DanovixLogoProps) {
  return (
    <Image
      src={LOGO_SRC}
      alt="DANOVIX"
      width={LOGO_WIDTH}
      height={LOGO_HEIGHT}
      priority={priority}
      sizes={sizes}
      style={style}
      className={cn("h-auto w-auto object-contain", className)}
    />
  );
}

const WORDMARK_PATHS = {
  d: "M32 18h14c44 0 62 24 62 62s-18 62-62 62H32V18zm14 20v84c28 0 40-16 40-42s-12-42-40-42z",
  a: "M158 142 198 18h16l40 124h-17l-9.5-31h-43.5l-9.5 31h-17zm28.5-49h31l-15.5-50.5L186.5 93z",
  n: "M278 18h15v79l58-79h15v124h-15V63l-58 79h-15V18z",
  o: "M398 18c48 0 78 30 78 62s-30 62-78 62-78-30-78-62 30-62 78-62zm0 18c-34 0-56 20-56 44s22 44 56 44 56-20 56-44-22-44-56-44z",
  v: "M528 18 598 142h-16L522 42 462 142h-16l70-124h12z",
  i: "M628 18h15v124h-15V18z",
  x: "M698 18l52 56 52-56h18l-60 64 62 60h-18l-54-58-54 58h-18l62-60-60-64h18z",
} as const;

const MONOGRAM_PATHS = {
  d: "M32 30h20c56 0 78 30 78 70s-22 70-78 70H32V30zm20 26v88c34 0 48-19 48-44s-14-44-48-44z",
  v: "M138 30 198 170h-22L152 58 106 170H84l54-140h16z",
} as const;

type LogoVariant = "black" | "white" | "gold" | "inherit";

const variantColors: Record<LogoVariant, string> = {
  black: "#111111",
  white: "#F8F7F4",
  gold: "#C6A15B",
  inherit: "currentColor",
};

type DanovixWordmarkProps = SVGProps<SVGSVGElement> & {
  variant?: LogoVariant;
};

export function DanovixWordmark({
  variant = "inherit",
  className,
  ...props
}: DanovixWordmarkProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 1280 160"
      fill={variantColors[variant]}
      aria-label="DANOVIX"
      role="img"
      className={cn("block h-auto w-full", className)}
      {...props}
    >
      <path fillRule="evenodd" d={WORDMARK_PATHS.d} />
      <path d={WORDMARK_PATHS.a} />
      <path d={WORDMARK_PATHS.n} />
      <path fillRule="evenodd" d={WORDMARK_PATHS.o} />
      <path d={WORDMARK_PATHS.v} />
      <path d={WORDMARK_PATHS.i} />
      <path d={WORDMARK_PATHS.x} />
    </svg>
  );
}

type DanovixMonogramProps = SVGProps<SVGSVGElement> & {
  variant?: LogoVariant;
};

export function DanovixMonogram({
  variant = "inherit",
  className,
  ...props
}: DanovixMonogramProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 200 200"
      fill={variantColors[variant]}
      aria-label="DANOVIX monogram"
      role="img"
      className={cn("block h-auto w-full", className)}
      {...props}
    >
      <path fillRule="evenodd" d={MONOGRAM_PATHS.d} />
      <path d={MONOGRAM_PATHS.v} />
    </svg>
  );
}
