"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { forwardRef, useEffect, useRef, type MouseEvent } from "react";

import { cn } from "@/lib/cn";
import {
  requestHomeHash,
  scrollToHomeSection,
} from "@/lib/navigation/home-hash";

type NavLinkProps = {
  href: string;
  label: string;
  className?: string;
  onClick?: () => void;
};

function parseHashTarget(href: string): { pathname: string; hash: string | null } {
  if (href.startsWith("#")) {
    return { pathname: "/", hash: href.slice(1) || null };
  }

  const [pathPart, hashPart] = href.split("#");
  return {
    pathname: pathPart || "/",
    hash: hashPart || null,
  };
}

function ensureHashInUrl(hash: string) {
  const next = `/#${hash}`;
  if (window.location.pathname === "/" && window.location.hash === `#${hash}`) {
    return;
  }
  window.history.pushState(null, "", next);
}

export const NavLink = forwardRef<HTMLAnchorElement, NavLinkProps>(
  function NavLink({ href, label, className, onClick }, ref) {
    const pathname = usePathname();
    const pollRef = useRef<number | null>(null);
    const { pathname: targetPath, hash } = parseHashTarget(href);
    const normalizedHref =
      hash != null ? `${targetPath === "" ? "/" : targetPath}#${hash}` : href;

    useEffect(() => {
      return () => {
        if (pollRef.current != null) {
          window.clearInterval(pollRef.current);
          pollRef.current = null;
        }
      };
    }, []);

    const handleClick = (event: MouseEvent<HTMLAnchorElement>) => {
      onClick?.();

      if (!hash) return;

      // Always record the destination — App Router may drop the URL hash.
      requestHomeHash(hash);

      const alreadyOnHome = pathname === "/" || pathname === "";

      if (alreadyOnHome && targetPath === "/") {
        event.preventDefault();
        ensureHashInUrl(hash);

        if (scrollToHomeSection(hash)) return;

        if (pollRef.current != null) {
          window.clearInterval(pollRef.current);
        }

        let attempts = 0;
        pollRef.current = window.setInterval(() => {
          attempts += 1;
          if (scrollToHomeSection(hash) || attempts >= 80) {
            if (pollRef.current != null) {
              window.clearInterval(pollRef.current);
              pollRef.current = null;
            }
          }
        }, 50);
        return;
      }

      // Cross-route: let Link soft-navigate; HomePageContent scrolls on mount.
    };

    return (
      <Link
        ref={ref}
        href={normalizedHref}
        onClick={handleClick}
        scroll={false}
        className={cn(
          "group relative inline-flex items-center py-1 text-[11px] font-medium uppercase tracking-[0.22em] text-danovix-background/85 transition-[color,transform] duration-500 ease-out hover:text-danovix-background hover:scale-[1.02] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-danovix-accent/60 focus-visible:ring-offset-2 focus-visible:ring-offset-transparent",
          className,
        )}
      >
        {label}
        <span
          aria-hidden="true"
          className="absolute -bottom-0.5 left-0 h-px w-full origin-left scale-x-0 bg-danovix-accent transition-transform duration-500 ease-out group-hover:scale-x-100"
        />
      </Link>
    );
  },
);
