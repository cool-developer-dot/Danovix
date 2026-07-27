import {
  Lock,
  Package,
  RotateCcw,
  ShieldCheck,
  Truck,
} from "lucide-react";
import Link from "next/link";

import { ExperienceAiCard } from "@/components/Experience/ExperienceAiCard";
import { ExperienceEditorialGrid } from "@/components/Experience/ExperienceEditorialGrid";
import { EXPERIENCE_RESERVED_EMPTY } from "@/lib/experience/constants";
import {
  RESERVED_EMPTY,
  TRUST_CHIPS,
  type TrustChip,
} from "@/lib/reserved/constants";

import {
  emptyArch,
  emptyCta,
  emptyDescription,
  emptyHeading,
  emptyRoot,
  trustChip,
  trustIcon,
  trustLabel,
  trustList,
  trustRoot,
} from "./reserved.styles";

const TRUST_ICONS: Record<TrustChip["icon"], typeof Lock> = {
  lock: Lock,
  shield: ShieldCheck,
  truck: Truck,
  rotate: RotateCcw,
  package: Package,
};

export function TrustExperience() {
  return (
    <section
      aria-label="Secure checkout assurances"
      className={trustRoot}
      data-reserved="trust-section"
    >
      <ul className={trustList} role="list">
        {TRUST_CHIPS.map((chip) => {
          const Icon = TRUST_ICONS[chip.icon];
          return (
            <li key={chip.id} data-reserved="trust-chip" className={trustChip}>
              <span className={trustIcon} aria-hidden="true">
                <Icon className="h-3.5 w-3.5 stroke-[1.25]" />
              </span>
              <span className={trustLabel}>{chip.label}</span>
            </li>
          );
        })}
      </ul>
    </section>
  );
}

export function ReservedEmptyState() {
  return (
    <div data-reserved="empty" className={emptyRoot}>
      <div className={emptyArch} aria-hidden="true">
        <svg
          viewBox="0 0 96 96"
          className="h-14 w-14"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M18 78V42c0-16.569 13.431-30 30-30s30 13.431 30 30v36"
            stroke="currentColor"
            strokeWidth="1.25"
            strokeLinecap="round"
          />
          <path
            d="M28 78V46c0-11.046 8.954-20 20-20s20 8.954 20 20v32"
            stroke="currentColor"
            strokeWidth="1.25"
            strokeLinecap="round"
            opacity="0.55"
          />
          <path
            d="M12 78h72"
            stroke="currentColor"
            strokeWidth="1.25"
            strokeLinecap="round"
            opacity="0.4"
          />
        </svg>
      </div>
      <h2 className={emptyHeading}>{RESERVED_EMPTY.heading}</h2>
      <p className={emptyDescription}>{RESERVED_EMPTY.description}</p>
      <Link href={RESERVED_EMPTY.ctaHref} className={emptyCta}>
        {RESERVED_EMPTY.cta}
        <span aria-hidden="true">→</span>
      </Link>
      <ExperienceEditorialGrid
        title="Begin With"
        items={EXPERIENCE_RESERVED_EMPTY.featured}
        className="mt-12 w-full max-w-[720px]"
      />
      <ExperienceAiCard
        eyebrow={EXPERIENCE_RESERVED_EMPTY.ai.eyebrow}
        heading={EXPERIENCE_RESERVED_EMPTY.ai.heading}
        description={EXPERIENCE_RESERVED_EMPTY.ai.description}
        cta={EXPERIENCE_RESERVED_EMPTY.ai.cta}
        ctaHref={EXPERIENCE_RESERVED_EMPTY.ai.ctaHref}
        className="mx-auto mt-10 w-full max-w-[520px]"
      />
    </div>
  );
}
