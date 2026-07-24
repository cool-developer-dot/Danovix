import {
  CheckCircle2,
  ClipboardCheck,
  Gift,
  PackageCheck,
  Sparkles,
  Truck,
} from "lucide-react";

import { cn } from "@/lib/cn";
import { RESERVED_TIMELINE } from "@/lib/reserved/constants";

import {
  reservedEyebrow,
  timelineCopy,
  timelineDescription,
  timelineHeader,
  timelineHeading,
  timelineIconComplete,
  timelineIconCurrent,
  timelineIconUpcoming,
  timelineIconWrap,
  timelineItem,
  timelineLabel,
  timelineLine,
  timelineList,
  timelineMeta,
  timelineRoot,
  timelineTrack,
} from "./reserved.styles";

const ICONS = {
  reserved: Sparkles,
  preparing: PackageCheck,
  inspection: ClipboardCheck,
  packaging: Gift,
  ship: Truck,
  delivered: CheckCircle2,
} as const;

function statusClass(status: (typeof RESERVED_TIMELINE)[number]["status"]) {
  switch (status) {
    case "complete":
      return timelineIconComplete;
    case "current":
      return timelineIconCurrent;
    default:
      return timelineIconUpcoming;
  }
}

export function CraftsmanshipTimeline() {
  return (
    <section
      aria-labelledby="reserved-timeline-heading"
      className={timelineRoot}
      data-reserved="timeline-section"
    >
      <div className={timelineHeader}>
        <p data-reserved="timeline-eyebrow" className={reservedEyebrow}>
          Craftsmanship Journey
        </p>
        <h2
          id="reserved-timeline-heading"
          data-reserved="timeline-heading"
          className={timelineHeading}
        >
          From Reservation to Arrival
        </h2>
        <p
          data-reserved="timeline-description"
          className={timelineDescription}
        >
          Every reserved piece follows a deliberate atelier path — inspected,
          wrapped, and delivered with quiet ceremony.
        </p>
      </div>

      <div className={timelineTrack}>
        <div className={timelineLine} aria-hidden="true" />
        <ol className={timelineList}>
          {RESERVED_TIMELINE.map((step) => {
            const Icon = ICONS[step.id as keyof typeof ICONS] ?? Sparkles;
            return (
              <li
                key={step.id}
                data-reserved="timeline-item"
                className={timelineItem}
              >
                <span
                  className={cn(timelineIconWrap, statusClass(step.status))}
                  aria-hidden="true"
                >
                  <Icon className="h-4 w-4 stroke-[1.25] sm:h-[18px] sm:w-[18px]" />
                </span>
                <div className={timelineCopy}>
                  <h3 className={timelineLabel}>{step.label}</h3>
                  <p className={timelineMeta}>{step.description}</p>
                </div>
              </li>
            );
          })}
        </ol>
      </div>
    </section>
  );
}
