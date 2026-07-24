import { cn } from "@/lib/cn";

type MarqueeDividerProps = {
  className?: string;
};

export function MarqueeDivider({ className }: MarqueeDividerProps) {
  return (
    <span
      aria-hidden="true"
      className={cn(
        "mx-8 inline-flex shrink-0 items-center sm:mx-10 md:mx-12 lg:mx-14",
        className,
      )}
    >
      <span className="h-3 w-px bg-danovix-accent/35" />
    </span>
  );
}
