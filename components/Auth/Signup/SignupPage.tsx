"use client";

import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { useEffect, useMemo, useRef, useState } from "react";

import {
  resolveAuthContext,
  SIGNUP_SUCCESS,
  type AuthFace,
} from "./auth.constants";
import { AuthCard } from "./AuthCard";
import { EditorialPanel } from "./EditorialPanel";
import { useSignupAnimations } from "./SignupAnimations";
import { SuccessExperience } from "./SuccessExperience";
import {
  authAside,
  authAsideBg,
  authAsideGrain,
  brandMark,
  brandMarkText,
  signupGrid,
  signupPage,
} from "./signup.styles";

function parseFace(value: string | null): AuthFace {
  if (value === "login" || value === "forgot" || value === "signup") {
    return value;
  }
  return "signup";
}

const ASIDE_LABELS: Record<AuthFace, string> = {
  signup: "Create your account",
  login: "Sign in to your account",
  forgot: "Reset your password",
};

export function SignupPage() {
  const rootRef = useRef<HTMLDivElement>(null);
  const searchParams = useSearchParams();
  const [face, setFace] = useState<AuthFace>(() =>
    parseFace(searchParams.get("face")),
  );
  const [successMode, setSuccessMode] = useState<"signup" | "login" | null>(
    null,
  );

  const destination = searchParams.get("redirect") || SIGNUP_SUCCESS.ctaHref;
  const context = useMemo(
    () => resolveAuthContext(searchParams.get("from")),
    [searchParams],
  );

  useSignupAnimations(rootRef);

  useEffect(() => {
    if (!successMode) return;
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = previous;
    };
  }, [successMode]);

  return (
    <div ref={rootRef} className={signupPage}>
      <Link
        href="/"
        data-signup="brand"
        aria-label="DANOVIX home"
        className={brandMark}
      >
        <span className={brandMarkText}>DANOVIX</span>
      </Link>

      <main
        id="main-content"
        className={signupGrid}
        aria-hidden={successMode ? true : undefined}
      >
        <EditorialPanel face={face} />

        <section aria-label={ASIDE_LABELS[face]} className={authAside}>
          <div data-signup="aside-bg" className={authAsideBg} aria-hidden="true" />
          <div className={authAsideGrain} aria-hidden="true" />
          <AuthCard
            face={face}
            context={context}
            onFaceChange={setFace}
            onSignupSuccess={() => setSuccessMode("signup")}
            onLoginSuccess={() => setSuccessMode("login")}
          />
        </section>
      </main>

      {successMode ? (
        <SuccessExperience
          mode={successMode}
          destination={destination}
          context={context}
        />
      ) : null}
    </div>
  );
}
