import {
  BadgeCheck,
  Droplets,
  Gem,
  Infinity,
  Layers,
  Magnet,
  Package,
  PenTool,
  Shield,
  Sparkles,
} from "lucide-react";

import type { MaterialFeature } from "@/lib/product/constants";

import {
  featureCard,
  featureDesc,
  featureGrid,
  featureIcon,
  featureTitle,
  ivorySection,
  sectionInner,
} from "./product.styles";

const ICONS = {
  leather: Layers,
  shield: Shield,
  droplets: Droplets,
  gem: Gem,
  stitch: PenTool,
  interior: Sparkles,
  magnet: Magnet,
  infinity: Infinity,
  package: Package,
  badge: BadgeCheck,
} as const;

type MaterialsFeaturesProps = {
  features: readonly MaterialFeature[];
};

export function MaterialsFeatures({ features }: MaterialsFeaturesProps) {
  return (
    <section
      id="materials"
      aria-labelledby="product-materials-heading"
      data-product="materials"
      className={ivorySection}
    >
      <div className={sectionInner}>
        <div className="mx-auto max-w-[680px] text-center">
          <p className="font-sans text-[clamp(9px,2.4vw,11px)] font-medium uppercase tracking-[0.34em] text-[rgb(168_138_78)]">
            Materials & Features
          </p>
          <h2
            id="product-materials-heading"
            className="mt-4 font-serif text-[clamp(2rem,5vw,3.25rem)] font-light tracking-[-0.028em] leading-[1.1] text-[#1a1a1a]"
          >
            Crafted Without Compromise.
          </h2>
          <p className="mx-auto mt-5 max-w-[520px] text-[15px] leading-[1.85] text-[rgb(26_26_26/0.58)]">
            Every detail exists to serve longevity, presence, and the quiet
            confidence of pieces made to accompany a life.
          </p>
        </div>

        <div className={featureGrid}>
          {features.map((feature) => {
            const Icon = ICONS[feature.icon];
            return (
              <article
                key={feature.id}
                data-product="feature-card"
                className={featureCard}
              >
                <span className={featureIcon} aria-hidden="true">
                  <Icon className="h-[18px] w-[18px] stroke-[1.25]" />
                </span>
                <h3 className={featureTitle}>{feature.title}</h3>
                <p className={featureDesc}>{feature.description}</p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
