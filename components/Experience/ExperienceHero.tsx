import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/cn";
import type { ExperienceAction } from "@/lib/experience/constants";
import {
  experienceActions,
  experienceBtnGhost,
  experienceBtnPrimary,
  experienceDescription,
  experienceEyebrow,
  experienceHeading,
} from "./experience.styles";

type ExperienceHeroCopyProps = {
  eyebrow?: string;
  heading: string;
  description: string;
  className?: string;
};

export function ExperienceHeroCopy({
  eyebrow,
  heading,
  description,
  className,
}: ExperienceHeroCopyProps) {
  return (
    <div className={cn("text-center", className)} data-exp-reveal>
      {eyebrow ? <p className={experienceEyebrow}>{eyebrow}</p> : null}
      <h1 className={experienceHeading}>{heading}</h1>
      <p className={experienceDescription}>{description}</p>
    </div>
  );
}

type ExperienceActionsProps = {
  actions: readonly ExperienceAction[];
  onAction?: (id: string) => void;
  className?: string;
};

export function ExperienceActions({
  actions,
  onAction,
  className,
}: ExperienceActionsProps) {
  return (
    <div className={cn(experienceActions, className)} data-exp-reveal>
      {actions.map((action) => {
        const classNameBtn = action.primary
          ? experienceBtnPrimary
          : experienceBtnGhost;

        if (action.href) {
          return (
            <Link
              key={action.id}
              href={action.href}
              className={classNameBtn}
              scroll
            >
              {action.label}
              {action.primary ? (
                <ArrowUpRight className="size-3.5 opacity-80" aria-hidden />
              ) : null}
            </Link>
          );
        }

        return (
          <button
            key={action.id}
            type="button"
            className={classNameBtn}
            onClick={() => onAction?.(action.id)}
          >
            {action.label}
          </button>
        );
      })}
    </div>
  );
}
