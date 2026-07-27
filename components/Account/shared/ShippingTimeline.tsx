"use client";

import { Check } from "lucide-react";
import { memo } from "react";

import type { TimelineStep } from "@/lib/account/orders-data";
import { cn } from "@/lib/cn";

import {
  timelineAt,
  timelineCopy,
  timelineDesc,
  timelineDot,
  timelineDotActive,
  timelineDotDone,
  timelineDotInner,
  timelineDotInnerActive,
  timelineDotInnerDone,
  timelineItem,
  timelineLabel,
  timelineLabelMuted,
  timelineRail,
  timelineRoot,
} from "../account.styles";

type ShippingTimelineProps = {
  steps: readonly TimelineStep[];
  tone?: "dark" | "warm";
};

export const ShippingTimeline = memo(function ShippingTimeline({
  steps,
  tone = "dark",
}: ShippingTimelineProps) {
  const warm = tone === "warm";

  return (
    <ol className={timelineRoot} role="list">
      {steps.map((step, index) => {
        const isLast = index === steps.length - 1;
        return (
          <li
            key={step.id}
            data-account="timeline-step"
            className={timelineItem}
          >
            {!isLast ? (
              <span
                className={cn(
                  timelineRail,
                  warm &&
                    "bg-[linear-gradient(180deg,rgb(198_161_91/0.4)_0%,rgb(17_17_17/0.08)_100%)]",
                )}
                aria-hidden="true"
              />
            ) : null}

            <span
              className={cn(
                timelineDot,
                warm && "border-[rgb(17_17_17/0.12)] bg-[rgb(248_247_244)]",
                step.current && timelineDotActive,
                step.completed && timelineDotDone,
              )}
              aria-hidden="true"
            >
              {step.completed ? (
                <Check
                  className={cn(
                    "h-3 w-3",
                    warm ? "text-[rgb(168_138_78)]" : "text-[rgb(214_196_158)]",
                  )}
                  strokeWidth={2}
                />
              ) : (
                <span
                  className={cn(
                    timelineDotInner,
                    step.current && timelineDotInnerActive,
                    step.completed && timelineDotInnerDone,
                    warm && !step.current && "bg-[rgb(17_17_17/0.2)]",
                  )}
                />
              )}
            </span>

            <div className={timelineCopy}>
              <p
                className={cn(
                  timelineLabel,
                  warm && "text-[#1a1a1a]",
                  !step.current &&
                    !step.completed &&
                    (warm
                      ? "text-[rgb(26_26_26/0.35)]"
                      : timelineLabelMuted),
                )}
              >
                {step.label}
              </p>
              {step.description ? (
                <p
                  className={cn(
                    timelineDesc,
                    warm && "text-[rgb(26_26_26/0.55)]",
                  )}
                >
                  {step.description}
                </p>
              ) : null}
              {step.at ? (
                <p
                  className={cn(
                    timelineAt,
                    warm && "text-[rgb(168_138_78)]",
                  )}
                >
                  {step.at}
                </p>
              ) : null}
            </div>
          </li>
        );
      })}
    </ol>
  );
});
