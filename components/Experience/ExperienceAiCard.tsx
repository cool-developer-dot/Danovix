import Link from "next/link";
import { Sparkles } from "lucide-react";
import { cn } from "@/lib/cn";
import {
  experienceBtnGhost,
  experienceCard,
} from "./experience.styles";

type ExperienceAiCardProps = {
  eyebrow: string;
  heading: string;
  description: string;
  cta: string;
  ctaHref: string;
  className?: string;
};

export function ExperienceAiCard({
  eyebrow,
  heading,
  description,
  cta,
  ctaHref,
  className,
}: ExperienceAiCardProps) {
  return (
    <aside
      className={cn(experienceCard, "mt-12 text-center", className)}
      data-exp-reveal
      aria-label="AI Concierge"
    >
      <div
        className="pointer-events-none absolute inset-0 opacity-70"
        aria-hidden
        style={{
          background:
            "radial-gradient(ellipse 70% 60% at 50% 0%, rgb(198 161 91 / 0.12), transparent 70%)",
        }}
      />
      <div className="relative">
        <p className="inline-flex items-center gap-2 font-sans text-[10px] font-medium uppercase tracking-[0.28em] text-[rgb(214_196_158)]">
          <Sparkles className="size-3.5 opacity-80" aria-hidden />
          {eyebrow}
        </p>
        <h2 className="mt-4 font-serif text-[clamp(1.35rem,3.5vw,1.75rem)] font-light leading-snug tracking-[-0.02em] text-[rgb(248_247_244)]">
          {heading}
        </h2>
        <p className="mx-auto mt-3 max-w-[420px] text-[14px] leading-[1.8] text-[rgb(248_247_244/0.58)]">
          {description}
        </p>
        <Link href={ctaHref} className={cn(experienceBtnGhost, "mt-6")} scroll>
          {cta}
        </Link>
      </div>
    </aside>
  );
}
