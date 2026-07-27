import { cn } from "@/lib/cn";
import { pedestal, pedestalCore, pedestalRing } from "./experience.styles";

type MarblePedestalProps = {
  className?: string;
  variant?: "empty" | "offline" | "error";
};

export function MarblePedestal({
  className,
  variant = "empty",
}: MarblePedestalProps) {
  return (
    <div
      className={cn(pedestal, className)}
      data-exp-reveal
      aria-hidden
    >
      <div className={pedestalRing} />
      <div className={pedestalCore}>
        <div
          className={cn(
            "absolute inset-[18%] rounded-full",
            variant === "offline" &&
              "border border-[rgb(248_247_244/0.1)] bg-[rgb(248_247_244/0.04)]",
            variant === "error" &&
              "bg-[radial-gradient(circle_at_40%_30%,rgb(214_196_158/0.35),transparent_70%)]",
            variant === "empty" &&
              "bg-[radial-gradient(circle_at_40%_30%,rgb(248_247_244/0.2),transparent_70%)]",
          )}
        />
      </div>
      <div
        className="absolute -bottom-2 left-1/2 h-2 w-20 -translate-x-1/2 rounded-full bg-[rgb(0_0_0/0.35)] blur-md"
        aria-hidden
      />
    </div>
  );
}
