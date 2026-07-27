"use client";

import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/cn";
import type { ExperienceAction } from "@/lib/experience/constants";
import {
  SUCCESS_ORDER,
  SUCCESS_PAYMENT,
  SUCCESS_PASSWORD,
  SUCCESS_REVIEW,
  SUCCESS_RETURN,
  SUCCESS_SIGNUP,
} from "@/lib/experience/constants";
import { ExperienceActions, ExperienceHeroCopy } from "./ExperienceHero";
import { ExperienceShell } from "./ExperienceShell";
import {
  experienceBtnGhost,
  experienceBtnPrimary,
  experienceCard,
} from "./experience.styles";
import { MarblePedestal } from "./MarblePedestal";

type SuccessMeta = {
  label: string;
  value: string;
};

function SuccessMetaRow({ items }: { items: SuccessMeta[] }) {
  return (
    <dl
      className={cn(experienceCard, "mt-10 grid gap-6 sm:grid-cols-3")}
      data-exp-reveal
    >
      {items.map((item) => (
        <div key={item.label} className="text-center sm:text-left">
          <dt className="font-sans text-[10px] font-medium uppercase tracking-[0.24em] text-[rgb(214_196_158/0.8)]">
            {item.label}
          </dt>
          <dd className="mt-2 font-serif text-[18px] font-light text-[rgb(248_247_244)]">
            {item.value}
          </dd>
        </div>
      ))}
    </dl>
  );
}

function SuccessTimeline({
  steps,
}: {
  steps: readonly { id: string; label: string; current: boolean }[];
}) {
  return (
    <ol
      className="mt-12 flex flex-col gap-0 sm:flex-row sm:items-start sm:justify-between sm:gap-2"
      data-exp-reveal
      aria-label="Order timeline"
    >
      {steps.map((step, i) => (
        <li
          key={step.id}
          className="relative flex flex-1 items-start gap-3 pb-6 sm:flex-col sm:items-center sm:pb-0 sm:text-center"
        >
          {i < steps.length - 1 ? (
            <span
              className="absolute left-[11px] top-6 h-[calc(100%-1.25rem)] w-px bg-[rgb(248_247_244/0.12)] sm:left-1/2 sm:top-3 sm:h-px sm:w-[calc(100%-0.5rem)] sm:translate-x-0"
              aria-hidden
            />
          ) : null}
          <span
            className={cn(
              "relative z-[1] mt-0.5 size-6 shrink-0 rounded-full border",
              step.current
                ? "border-[rgb(198_161_91)] bg-[rgb(198_161_91)] shadow-[0_0_20px_rgb(198_161_91/0.45)]"
                : "border-[rgb(248_247_244/0.2)] bg-[rgb(248_247_244/0.04)]",
            )}
            aria-hidden
          />
          <span
            className={cn(
              "font-sans text-[11px] uppercase tracking-[0.16em]",
              step.current
                ? "text-[rgb(248_247_244)]"
                : "text-[rgb(248_247_244/0.45)]",
            )}
          >
            {step.label}
          </span>
        </li>
      ))}
    </ol>
  );
}

export function OrderSuccessExperience({
  orderNumber = "DX-28471",
  estimatedDelivery = "3–5 business days",
}: {
  orderNumber?: string;
  estimatedDelivery?: string;
}) {
  return (
    <ExperienceShell>
      <MarblePedestal variant="empty" />
      <ExperienceHeroCopy
        eyebrow={SUCCESS_ORDER.eyebrow}
        heading={SUCCESS_ORDER.heading}
        description={SUCCESS_ORDER.description}
      />
      <SuccessMetaRow
        items={[
          { label: SUCCESS_ORDER.orderLabel, value: orderNumber },
          { label: SUCCESS_ORDER.deliveryLabel, value: estimatedDelivery },
          {
            label: SUCCESS_ORDER.packagingLabel,
            value: SUCCESS_ORDER.packagingValue,
          },
        ]}
      />
      <SuccessTimeline steps={SUCCESS_ORDER.timeline} />
      <ExperienceActions actions={[...SUCCESS_ORDER.actions]} />
    </ExperienceShell>
  );
}

export function PaymentSuccessExperience() {
  return (
    <ExperienceShell>
      <MarblePedestal variant="empty" />
      <ExperienceHeroCopy
        eyebrow={SUCCESS_PAYMENT.eyebrow}
        heading={SUCCESS_PAYMENT.heading}
        description={SUCCESS_PAYMENT.description}
      />
      <div className={cn(experienceCard, "mt-10 text-center")} data-exp-reveal>
        <p className="font-sans text-[10px] uppercase tracking-[0.24em] text-[rgb(214_196_158)]">
          Payment Confirmation
        </p>
        <p className="mt-3 font-serif text-[22px] font-light text-[rgb(248_247_244)]">
          Securely received
        </p>
      </div>
      <ExperienceActions actions={[...SUCCESS_PAYMENT.actions]} />
    </ExperienceShell>
  );
}

export function PasswordSuccessExperience() {
  return (
    <ExperienceShell compact>
      <ExperienceHeroCopy
        eyebrow={SUCCESS_PASSWORD.eyebrow}
        heading={SUCCESS_PASSWORD.heading}
        description={SUCCESS_PASSWORD.description}
      />
      <ExperienceActions actions={[...SUCCESS_PASSWORD.actions]} />
    </ExperienceShell>
  );
}

export function SignupSuccessExperience({ name }: { name?: string }) {
  const greeting = name
    ? `Welcome, ${name}.`
    : "Your private membership is ready.";
  return (
    <ExperienceShell>
      <MarblePedestal variant="empty" />
      <ExperienceHeroCopy
        eyebrow={SUCCESS_SIGNUP.eyebrow}
        heading={SUCCESS_SIGNUP.heading}
        description={SUCCESS_SIGNUP.description}
      />
      <p
        className="mt-8 text-center font-serif text-[clamp(1.25rem,3vw,1.6rem)] font-light text-[rgb(214_196_158)]"
        data-exp-reveal
      >
        {greeting}
      </p>
      <ExperienceActions actions={[...SUCCESS_SIGNUP.actions]} />
    </ExperienceShell>
  );
}

export function ReviewSuccessExperience() {
  return (
    <ExperienceShell compact>
      <ExperienceHeroCopy
        eyebrow={SUCCESS_REVIEW.eyebrow}
        heading={SUCCESS_REVIEW.heading}
        description={SUCCESS_REVIEW.description}
      />
      <ExperienceActions actions={[...SUCCESS_REVIEW.actions]} />
    </ExperienceShell>
  );
}

export function ReturnSuccessExperience({
  timeline = "5–10 business days",
}: {
  timeline?: string;
}) {
  return (
    <ExperienceShell>
      <MarblePedestal variant="empty" />
      <ExperienceHeroCopy
        eyebrow={SUCCESS_RETURN.eyebrow}
        heading={SUCCESS_RETURN.heading}
        description={SUCCESS_RETURN.description}
      />
      <div className={cn(experienceCard, "mt-10")} data-exp-reveal>
        <div className="grid gap-6 sm:grid-cols-2">
          <div>
            <p className="font-sans text-[10px] uppercase tracking-[0.24em] text-[rgb(214_196_158)]">
              Return Status
            </p>
            <p className="mt-2 font-serif text-[20px] font-light text-[rgb(248_247_244)]">
              {SUCCESS_RETURN.status}
            </p>
          </div>
          <div>
            <p className="font-sans text-[10px] uppercase tracking-[0.24em] text-[rgb(214_196_158)]">
              Estimated Timeline
            </p>
            <p className="mt-2 font-serif text-[20px] font-light text-[rgb(248_247_244)]">
              {timeline}
            </p>
          </div>
        </div>
        <p className="mt-8 font-sans text-[10px] uppercase tracking-[0.24em] text-[rgb(214_196_158)]">
          Next Steps
        </p>
        <ol className="mt-4 space-y-3">
          {SUCCESS_RETURN.nextSteps.map((step, i) => (
            <li
              key={step}
              className="flex gap-3 text-[14px] leading-relaxed text-[rgb(248_247_244/0.7)]"
            >
              <span className="font-sans text-[11px] text-[rgb(198_161_91)]">
                {String(i + 1).padStart(2, "0")}
              </span>
              {step}
            </li>
          ))}
        </ol>
        <p className="mt-6 text-[13px] text-[rgb(248_247_244/0.5)]">
          Shipping label will arrive by email within one business day.
        </p>
      </div>
      <ExperienceActions actions={[...SUCCESS_RETURN.actions]} />
    </ExperienceShell>
  );
}

/** Compact inline success panel for overlays / modals */
export function InlineSuccessPanel({
  eyebrow,
  heading,
  description,
  actions,
}: {
  eyebrow: string;
  heading: string;
  description: string;
  actions: readonly ExperienceAction[];
}) {
  return (
    <div className="px-2 py-6 text-center">
      <p className="font-sans text-[10px] font-medium uppercase tracking-[0.28em] text-[rgb(214_196_158)]">
        {eyebrow}
      </p>
      <h2 className="mt-4 font-serif text-[clamp(1.6rem,4vw,2.2rem)] font-light leading-snug text-[rgb(248_247_244)]">
        {heading}
      </h2>
      <p className="mx-auto mt-4 max-w-[400px] text-[14px] leading-[1.8] text-[rgb(248_247_244/0.58)]">
        {description}
      </p>
      <div className="mt-8 flex flex-wrap justify-center gap-3">
        {actions.map((action) =>
          action.href ? (
            <Link
              key={action.id}
              href={action.href}
              className={
                action.primary ? experienceBtnPrimary : experienceBtnGhost
              }
              scroll
            >
              {action.label}
              {action.primary ? (
                <ArrowUpRight className="size-3.5 opacity-80" aria-hidden />
              ) : null}
            </Link>
          ) : null,
        )}
      </div>
    </div>
  );
}
