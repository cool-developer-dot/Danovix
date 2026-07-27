import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/cn";
import { experienceCard } from "./experience.styles";

type EditorialCard = {
  id: string;
  title: string;
  href: string;
  imageSrc: string;
};

type ExperienceEditorialGridProps = {
  title?: string;
  items: readonly EditorialCard[];
  className?: string;
};

export function ExperienceEditorialGrid({
  title,
  items,
  className,
}: ExperienceEditorialGridProps) {
  return (
    <section className={cn("mt-14", className)} data-exp-reveal>
      {title ? (
        <p className="mb-6 text-center font-sans text-[10px] font-medium uppercase tracking-[0.28em] text-[rgb(214_196_158/0.85)]">
          {title}
        </p>
      ) : null}
      <ul className="grid grid-cols-2 gap-3 sm:grid-cols-3 sm:gap-4">
        {items.map((item) => (
          <li key={item.id}>
            <Link
              href={item.href}
              className={cn(
                experienceCard,
                "group block p-0 transition-[transform,border-color] duration-500",
                "hover:-translate-y-0.5 hover:border-[rgb(198_161_91/0.35)]",
              )}
              scroll
            >
              <div className="relative aspect-[4/5] overflow-hidden">
                <Image
                  src={item.imageSrc}
                  alt=""
                  fill
                  sizes="(max-width: 640px) 45vw, 200px"
                  className="object-cover transition-transform duration-700 group-hover:scale-[1.04]"
                />
                <div
                  className="absolute inset-0 bg-[linear-gradient(180deg,transparent_40%,rgb(12_12_12/0.75)_100%)]"
                  aria-hidden
                />
                <p className="absolute inset-x-3 bottom-3 font-serif text-[15px] font-light tracking-[-0.01em] text-[rgb(248_247_244)] sm:text-[16px]">
                  {item.title}
                </p>
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
}
