"use client";

import { Menu, Search, Heart, ShoppingBag, User, X } from "lucide-react";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";

import { NavbarLogo } from "@/components/brand/navbar-logo";
import { cn } from "@/lib/cn";
import {
  productJourneyState,
  subscribeProductJourney,
} from "@/lib/product-journey/store";

import { useNavbarEntrance } from "./HeroAnimations";
import { NAV_LINKS } from "./constants";
import { IconButton } from "./icon-button";
import { NavLink } from "./nav-link";

type HeroNavbarProps = {
  className?: string;
  animate?: boolean;
};

/**
 * Frosted navbar without sampling the live WebGL layer through backdrop-filter.
 * When the journey canvas is compositing under the header, use an equivalent
 * translucent fill (slightly higher opacity) — identical luxury read, far
 * cheaper on Safari. Backdrop-blur returns once the canvas is hidden.
 */
function useJourneyCanvasUnderNav() {
  const [underNav, setUnderNav] = useState(false);

  useEffect(() => {
    const sync = () => {
      setUnderNav(
        productJourneyState.canvasVisible &&
          document.documentElement.classList.contains("product-journey-active"),
      );
    };
    sync();
    const unsub = subscribeProductJourney(sync);
    return () => {
      unsub();
    };
  }, []);

  return underNav;
}

export function HeroNavbar({ className, animate = true }: HeroNavbarProps) {
  const navbarRef = useRef<HTMLElement>(null);
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const journeyUnderNav = useJourneyCanvasUnderNav();

  useNavbarEntrance(navbarRef, animate);

  useEffect(() => {
    let ticking = false;

    const onScroll = () => {
      if (ticking) return;
      ticking = true;

      requestAnimationFrame(() => {
        setScrolled(window.scrollY > 24);
        ticking = false;
      });
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  const scrolledOverWebgl = scrolled && journeyUnderNav;
  const scrolledOverDom = scrolled && !journeyUnderNav;

  return (
    <>
      <header
        ref={navbarRef}
        data-hero-animate="navbar"
        className={cn(
          "fixed inset-x-0 top-0 z-50 transform-gpu hero-fade-target transition-[background-color,border-color,box-shadow] duration-300 ease-out",
          scrolledOverWebgl &&
            "border-b border-danovix-background/10 bg-danovix-primary/[0.88] shadow-[0_8px_32px_rgba(17,17,17,0.18)]",
          scrolledOverDom &&
            "border-b border-danovix-background/10 bg-danovix-primary/72 shadow-[0_8px_32px_rgba(17,17,17,0.18)] backdrop-blur-xl",
          !scrolled && "border-b border-transparent bg-transparent shadow-none",
          className,
        )}
      >
        <div className="mx-auto flex h-[112px] max-w-[1600px] items-center justify-between px-5 sm:px-8 lg:px-12 xl:px-16">
          <Link
            href="/"
            data-hero-animate="logo"
            aria-label="DANOVIX Home"
            className="hero-fade-target block shrink-0 transform-gpu transition-opacity duration-300 ease-out hover:opacity-80 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-danovix-accent/60 focus-visible:ring-offset-2 focus-visible:ring-offset-transparent"
          >
            <NavbarLogo className="h-[88px] w-auto sm:h-[96px]" />
          </Link>

          <nav
            data-hero-animate="nav-links"
            aria-label="Primary"
            className="hero-fade-target hidden transform-gpu items-center gap-8 lg:flex xl:gap-10"
          >
            {NAV_LINKS.map((link) => (
              <NavLink key={link.href} href={link.href} label={link.label} />
            ))}
          </nav>

          <div
            data-hero-animate="actions"
            className="hero-fade-target flex transform-gpu items-center sm:-mr-1"
          >
            <div className="hidden items-center sm:flex">
              <IconButton icon={Search} label="Search" href="/search" />
              <IconButton icon={Heart} label="Private Collection" href="/wishlist" />
              <IconButton icon={User} label="Account" href="/signup" />
              <IconButton
                icon={ShoppingBag}
                label="Reserved Collection"
                href="/reserved"
              />
            </div>

            <button
              type="button"
              aria-label={mobileOpen ? "Close menu" : "Open menu"}
              aria-expanded={mobileOpen}
              onClick={() => setMobileOpen((open) => !open)}
              className="group relative inline-flex h-12 w-12 items-center justify-center text-danovix-background/70 transition-[color,transform] duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] hover:-translate-y-0.5 hover:text-danovix-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-danovix-accent/50 lg:hidden"
            >
              <span
                aria-hidden="true"
                className="pointer-events-none absolute inset-1 rounded-full bg-danovix-accent/0 opacity-0 transition-[background-color,opacity] duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:bg-danovix-accent/12 group-hover:opacity-100"
              />
              {mobileOpen ? (
                <X className="relative z-[1] h-[18px] w-[18px] stroke-[1.15]" />
              ) : (
                <Menu className="relative z-[1] h-[18px] w-[18px] stroke-[1.15]" />
              )}
            </button>
          </div>
        </div>
      </header>

      <div
        className={cn(
          "fixed inset-0 z-40 bg-danovix-primary/40 backdrop-blur-2xl transition-opacity duration-300 ease-out lg:hidden",
          mobileOpen
            ? "pointer-events-auto opacity-100"
            : "pointer-events-none opacity-0",
        )}
        aria-hidden={!mobileOpen}
      >
        <nav
          aria-label="Mobile"
          className="flex h-full flex-col items-center justify-center gap-8 px-8"
        >
          {NAV_LINKS.map((link) => (
            <NavLink
              key={link.href}
              href={link.href}
              label={link.label}
              className="text-sm tracking-[0.28em]"
              onClick={() => setMobileOpen(false)}
            />
          ))}
          <div className="mt-8 flex items-center">
            <IconButton icon={Search} label="Search" href="/search" />
            <IconButton icon={Heart} label="Private Collection" href="/wishlist" />
            <IconButton icon={User} label="Account" href="/signup" />
            <IconButton
              icon={ShoppingBag}
              label="Reserved Collection"
              href="/reserved"
            />
          </div>
        </nav>
      </div>
    </>
  );
}
