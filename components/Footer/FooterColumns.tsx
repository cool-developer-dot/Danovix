"use client";

import { useState, useEffect, useRef, type MouseEvent } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ChevronDown } from "lucide-react";

import {
  FOOTER_BRAND,
  FOOTER_COLUMNS,
  type FooterNavColumn,
} from "@/lib/footer/constants";
import { cn } from "@/lib/cn";
import {
  requestHomeHash,
  scrollToHomeSection,
} from "@/lib/navigation/home-hash";

import { FooterSocial } from "./FooterSocial";
import {
  footerAccordion,
  footerAccordionPanel,
  footerAccordionTrigger,
  footerBrandCol,
  footerBrandCopy,
  footerColumns,
  footerNavCol,
  footerNavLink,
  footerNavList,
  footerNavTitle,
  footerNavUnderline,
  footerWordmark,
} from "./footer.styles";

function normalizeHref(href: string) {
  if (href.startsWith("#")) return `/${href}`;
  return href;
}

function FooterNavAnchor({
  href,
  label,
}: {
  href: string;
  label: string;
}) {
  const pathname = usePathname();
  const pollRef = useRef<number | null>(null);
  const normalized = normalizeHref(href);
  const hash = normalized.includes("#")
    ? normalized.split("#")[1] || null
    : null;
  const targetPath = normalized.split("#")[0] || "/";

  useEffect(() => {
    return () => {
      if (pollRef.current != null) {
        window.clearInterval(pollRef.current);
        pollRef.current = null;
      }
    };
  }, []);

  const handleClick = (event: MouseEvent<HTMLAnchorElement>) => {
    if (!hash) return;

    requestHomeHash(hash);

    const onHome = pathname === "/" || pathname === "";
    if (targetPath === "/" && onHome) {
      event.preventDefault();
      window.history.pushState(null, "", `/#${hash}`);
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
    }
  };

  return (
    <Link
      href={normalized}
      onClick={handleClick}
      scroll={!hash}
      className={footerNavLink}
    >
      {label}
      <span className={footerNavUnderline} aria-hidden="true" />
    </Link>
  );
}

function NavLinks({ column }: { column: FooterNavColumn }) {
  return (
    <ul className={footerNavList}>
      {column.links.map((link) => (
        <li key={link.id}>
          <FooterNavAnchor href={link.href} label={link.label} />
        </li>
      ))}
    </ul>
  );
}

function AccordionColumn({ column }: { column: FooterNavColumn }) {
  const [open, setOpen] = useState(false);

  return (
    <div
      data-footer="nav-col"
      className={cn(footerNavCol, footerAccordion, "lg:border-0")}
    >
      <button
        type="button"
        className={cn(footerAccordionTrigger, "lg:hidden")}
        aria-expanded={open}
        aria-controls={`footer-panel-${column.id}`}
        onClick={() => setOpen((value) => !value)}
      >
        {column.title}
        <ChevronDown
          className={cn(
            "h-4 w-4 transition-transform duration-300",
            open && "rotate-180",
          )}
          strokeWidth={1.5}
          aria-hidden="true"
        />
      </button>

      <p className={cn(footerNavTitle, "hidden lg:block")}>{column.title}</p>

      <div
        id={`footer-panel-${column.id}`}
        className={cn(
          footerAccordionPanel,
          "lg:mt-0",
          open
            ? "max-h-[min(70vh,36rem)] opacity-100 pb-4"
            : "max-h-0 opacity-0 lg:max-h-none lg:opacity-100 lg:pb-0",
          "overflow-hidden transition-[max-height,opacity,padding] duration-[400ms] ease-[cubic-bezier(0.22,1,0.36,1)]",
          open && "overflow-y-auto",
        )}
      >
        <NavLinks column={column} />
      </div>
    </div>
  );
}

export function FooterColumns() {
  return (
    <div data-footer="columns" className={footerColumns}>
      <div data-footer="brand-col" className={footerBrandCol}>
        <p data-footer="wordmark" className={footerWordmark}>
          {FOOTER_BRAND.wordmark}
        </p>
        <p data-footer="brand-copy" className={footerBrandCopy}>
          {FOOTER_BRAND.paragraph.map((line) => (
            <span key={line} className="block">
              {line}
            </span>
          ))}
        </p>
        <FooterSocial />
      </div>

      {FOOTER_COLUMNS.map((column) => (
        <AccordionColumn key={column.id} column={column} />
      ))}
    </div>
  );
}
