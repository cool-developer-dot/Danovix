import { HERO_3D_ENABLED } from "@/lib/hero-3d";
import { HERO_PRODUCT_ASSET } from "@/lib/hero-product/constants";
import { SIGNATURE_PRODUCT_ASSET } from "@/lib/signature-collection/constants";

const CRITICAL_ASSETS = [
  "/bg.webp",
  "/logo.webp",
  HERO_PRODUCT_ASSET,
  SIGNATURE_PRODUCT_ASSET,
] as const;

function preloadImage(src: string) {
  const image = new window.Image();
  image.decoding = "async";
  image.src = src;
}

function preloadViaLink(href: string, as: string) {
  if (document.querySelector(`link[rel="preload"][href="${href}"]`)) return;

  const link = document.createElement("link");
  link.rel = "preload";
  link.as = as;
  link.href = href;
  document.head.appendChild(link);
}

export function preloadCriticalAssets() {
  CRITICAL_ASSETS.forEach((asset) => {
    preloadViaLink(asset, "image");
    preloadImage(asset);
  });
}

export function preloadFutureAssets() {
  void import("@/components/hero/product/HeroProduct");

  if (HERO_3D_ENABLED) {
    void import("@/components/hero/three/Hero3DCanvas");
    void import("@/components/hero/three/Hero3DScene");
  }
}
