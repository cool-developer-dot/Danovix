"use client";

import { Check } from "lucide-react";
import { useRouter } from "next/navigation";
import { useLayoutEffect, useRef, useState } from "react";

import {
  AUTH_CONTEXT_SUBTITLES,
  LOGIN_SUCCESS,
  SIGNUP_SUCCESS,
  type AuthContext,
} from "./auth.constants";
import {
  successBg,
  successCta,
  successCtaArrow,
  successEyebrow,
  successGrain,
  successHeadline,
  successIcon,
  successIconRing,
  successInner,
  successOverlay,
  successParticles,
  successSubtitle,
  successWatermark,
  successWatermarkText,
} from "./signup.styles";

type SuccessExperienceProps = {
  mode?: "signup" | "login";
  /** Where the member is taken after the welcome moment. */
  destination?: string;
  context?: AuthContext;
};

export function SuccessExperience({
  mode = "signup",
  destination = SIGNUP_SUCCESS.ctaHref,
  context = "default",
}: SuccessExperienceProps) {
  const router = useRouter();
  const rootRef = useRef<HTMLDivElement>(null);
  const [leaving, setLeaving] = useState(false);

  const isLogin = mode === "login";
  const headline = isLogin ? LOGIN_SUCCESS.headline : SIGNUP_SUCCESS.headline;
  const subtitle = isLogin
    ? context === "default"
      ? LOGIN_SUCCESS.subtitle
      : AUTH_CONTEXT_SUBTITLES[context]
    : SIGNUP_SUCCESS.subtitle;
  const eyebrow = isLogin ? "Signed In" : "Membership Confirmed";

  useLayoutEffect(() => {
    const root = rootRef.current;
    if (!root) return;

    const reduce = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    const overlay = root;
    const icon = root.querySelector<HTMLElement>('[data-success="icon"]');
    const items = Array.from(
      root.querySelectorAll<HTMLElement>('[data-success="item"]'),
    );

    if (reduce) {
      overlay.style.opacity = "1";
      if (icon) {
        icon.style.opacity = "1";
        icon.style.transform = "none";
      }
      for (const item of items) {
        item.style.opacity = "1";
        item.style.transform = "none";
      }
      return;
    }

    overlay.style.opacity = "0";
    if (icon) {
      icon.style.opacity = "0";
      icon.style.transform = "scale(0.6)";
    }
    for (const item of items) {
      item.style.opacity = "0";
      item.style.transform = "translateY(24px)";
    }

    let ctx: { revert: () => void } | null = null;
    let cancelled = false;

    void import("@/lib/gsap/load")
      .then((mod) => mod.loadGsap())
      .then((gsap) => {
        if (cancelled || !rootRef.current) return;
        ctx = gsap.context(() => {
          const tl = gsap.timeline({ defaults: { force3D: true } });
          tl.to(overlay, { opacity: 1, duration: 0.7, ease: "power2.out" });
          if (icon) {
            tl.to(
              icon,
              {
                opacity: 1,
                scale: 1,
                duration: 1,
                ease: "elastic.out(1, 0.6)",
              },
              0.15,
            );
          }
          if (items.length) {
            tl.to(
              items,
              {
                opacity: 1,
                y: 0,
                duration: 0.9,
                stagger: 0.12,
                ease: "power3.out",
                clearProps: "transform",
              },
              0.4,
            );
          }
        }, root);
      });

    return () => {
      cancelled = true;
      ctx?.revert();
    };
  }, []);

  useLayoutEffect(() => {
    if (!isLogin || leaving) return;

    const timer = window.setTimeout(() => {
      setLeaving(true);
      const root = rootRef.current;
      const reduce = window.matchMedia(
        "(prefers-reduced-motion: reduce)",
      ).matches;

      if (!root || reduce) {
        router.push(destination);
        return;
      }

      void import("@/lib/gsap/load")
        .then((mod) => mod.loadGsap())
        .then((gsap) => {
          gsap.to(root, {
            opacity: 0,
            duration: 0.55,
            ease: "power2.inOut",
            onComplete: () => router.push(destination),
          });
        });
    }, LOGIN_SUCCESS.autoMs);

    return () => window.clearTimeout(timer);
  }, [isLogin, leaving, destination, router]);

  const handleExplore = () => {
    if (leaving) return;
    setLeaving(true);

    const root = rootRef.current;
    const reduce = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    if (!root || reduce) {
      router.push(destination);
      return;
    }

    void import("@/lib/gsap/load")
      .then((mod) => mod.loadGsap())
      .then((gsap) => {
        gsap.to(root, {
          opacity: 0,
          duration: 0.6,
          ease: "power2.inOut",
          onComplete: () => router.push(destination),
        });
      });
  };

  return (
    <div
      ref={rootRef}
      role="dialog"
      aria-modal="true"
      aria-labelledby="signup-success-heading"
      className={successOverlay}
    >
      <div className={successBg} aria-hidden="true" />
      <div className={successGrain} aria-hidden="true" />
      <div className={successParticles} aria-hidden="true" />
      <div className={successWatermark} aria-hidden="true">
        <span className={successWatermarkText}>DANOVIX</span>
      </div>

      <div className={successInner}>
        <div data-success="icon" className={successIconRing}>
          <Check className={successIcon} strokeWidth={1.5} aria-hidden="true" />
        </div>

        <p data-success="item" className={successEyebrow}>
          {eyebrow}
        </p>
        <h1
          id="signup-success-heading"
          data-success="item"
          className={successHeadline}
        >
          {headline}
        </h1>
        <p data-success="item" className={successSubtitle}>
          {subtitle}
        </p>

        {!isLogin ? (
          <>
            <button
              type="button"
              data-success="item"
              onClick={handleExplore}
              className={successCta}
            >
              {SIGNUP_SUCCESS.cta}
              <span className={successCtaArrow} aria-hidden="true">
                →
              </span>
            </button>
            <div
              data-success="item"
              className="mt-6 flex flex-wrap items-center justify-center gap-3"
            >
              {SIGNUP_SUCCESS.secondary.map((action) => (
                <button
                  key={action.id}
                  type="button"
                  onClick={() => {
                    if (leaving) return;
                    setLeaving(true);
                    router.push(action.href);
                  }}
                  className="rounded-[12px] border border-[rgb(248_247_244/0.14)] bg-[rgb(248_247_244/0.03)] px-4 py-2.5 font-sans text-[10px] font-medium uppercase tracking-[0.18em] text-[rgb(248_247_244/0.78)] transition-[border-color,background-color,color] duration-500 hover:border-[rgb(198_161_91/0.4)] hover:text-[rgb(248_247_244)]"
                >
                  {action.label}
                </button>
              ))}
            </div>
          </>
        ) : (
          <p
            data-success="item"
            className="mt-8 font-sans text-[10px] font-medium uppercase tracking-[0.28em] text-[rgb(214_196_158/0.75)]"
            role="status"
            aria-live="polite"
          >
            Preparing your experience
          </p>
        )}
      </div>
    </div>
  );
}
