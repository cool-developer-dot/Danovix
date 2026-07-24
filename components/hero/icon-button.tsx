"use client";

import type { LucideIcon } from "lucide-react";
import Link from "next/link";
import { forwardRef } from "react";

import { cn } from "@/lib/cn";

type IconButtonProps = {
  icon: LucideIcon;
  label: string;
  className?: string;
  onClick?: () => void;
  href?: string;
};

const iconButtonClassName = cn(
  "group relative inline-flex h-12 w-12 items-center justify-center",
  "text-danovix-background/70 transition-[color,transform] duration-700 ease-[cubic-bezier(0.22,1,0.36,1)]",
  "hover:-translate-y-0.5 hover:text-danovix-background",
  "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-danovix-accent/50 focus-visible:ring-offset-2 focus-visible:ring-offset-transparent",
);

export const IconButton = forwardRef<HTMLButtonElement, IconButtonProps>(
  function IconButton({ icon: Icon, label, className, onClick, href }, ref) {
    const content = (
      <>
        <span
          aria-hidden="true"
          className="pointer-events-none absolute inset-1 rounded-full bg-danovix-accent/0 blur-md transition-[background-color,opacity] duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:bg-danovix-accent/12 group-hover:opacity-100 opacity-0"
        />
        <Icon
          className="relative z-[1] h-[18px] w-[18px] stroke-[1.15] transition-[transform,opacity] duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.03] group-hover:opacity-100 opacity-90"
          aria-hidden="true"
        />
      </>
    );

    if (href) {
      return (
        <Link
          href={href}
          aria-label={label}
          className={cn(iconButtonClassName, className)}
        >
          {content}
        </Link>
      );
    }

    return (
      <button
        ref={ref}
        type="button"
        aria-label={label}
        onClick={onClick}
        className={cn(iconButtonClassName, className)}
      >
        {content}
      </button>
    );
  },
);
