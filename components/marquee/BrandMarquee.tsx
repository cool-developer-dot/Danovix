import type { CSSProperties } from "react";

import { MARQUEE_DURATION, MARQUEE_ITEMS } from "./constants";
import { MarqueeItem } from "./MarqueeItem";

function MarqueeTrack({ ariaHidden = false }: { ariaHidden?: boolean }) {
  return (
    <div
      className="flex shrink-0 items-center"
      aria-hidden={ariaHidden || undefined}
    >
      {MARQUEE_ITEMS.map((item, index) => (
        <MarqueeItem
          key={`${item.label}-${index}`}
          label={item.label}
          showDivider
        />
      ))}
    </div>
  );
}

/** CSS-only marquee — no client hooks required. */
export function BrandMarquee() {
  return (
    <section
      aria-label="DANOVIX brand values"
      className="brand-marquee group relative w-full overflow-hidden border-y border-danovix-accent/[0.12] bg-danovix-primary"
    >
      <div className="flex h-20 items-center sm:h-[88px] md:h-[92px]">
        <div className="brand-marquee-viewport w-full overflow-hidden">
          <div
            className="brand-marquee-track flex w-max items-center"
            style={
              {
                "--marquee-duration": `${MARQUEE_DURATION}s`,
              } as CSSProperties
            }
          >
            <MarqueeTrack />
            <MarqueeTrack ariaHidden />
          </div>
        </div>
      </div>
    </section>
  );
}
