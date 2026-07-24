"use client";

import { useCallback, useEffect, useRef, useState } from "react";

import {
  AUTH_CONTEXT_SUBTITLES,
  type AuthContext,
  type AuthFace,
} from "./auth.constants";
import { ForgotFace } from "./faces/ForgotFace";
import { LoginFace } from "./faces/LoginFace";
import { SignupFace } from "./faces/SignupFace";
import {
  authCard,
  authCardFace,
  authCardFlipper,
  authCardGlow,
  authCardReflection,
  authCardStage,
} from "./signup.styles";
import { useAuthCardFlip } from "./useAuthCardFlip";

type AuthCardProps = {
  face: AuthFace;
  context: AuthContext;
  onFaceChange: (face: AuthFace) => void;
  onSignupSuccess: () => void;
  onLoginSuccess: () => void;
};

const ASIDE_LABELS: Record<AuthFace, string> = {
  signup: "Create your account",
  login: "Sign in to your account",
  forgot: "Reset your password",
};

export function AuthCard({
  face,
  context,
  onFaceChange,
  onSignupSuccess,
  onLoginSuccess,
}: AuthCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const flipperRef = useRef<HTMLDivElement>(null);
  const reflectionRef = useRef<HTMLSpanElement>(null);
  const [displayFace, setDisplayFace] = useState<AuthFace>(face);
  const { flip, isBusy } = useAuthCardFlip();

  useEffect(() => {
    if (face === displayFace) return;

    void flip({
      cardRef,
      flipperRef,
      reflectionRef,
      onMidpoint: () => setDisplayFace(face),
      onComplete: () => {
        const firstField = flipperRef.current?.querySelector<HTMLElement>(
          "input, button[type='submit']",
        );
        firstField?.focus();
      },
    });
  }, [face, displayFace, flip]);

  const requestFace = useCallback(
    (next: AuthFace) => {
      if (next === face || isBusy()) return;
      onFaceChange(next);
    },
    [face, onFaceChange, isBusy],
  );

  const loginSubtitle =
    context === "default"
      ? undefined
      : AUTH_CONTEXT_SUBTITLES[context];

  return (
    <div
      ref={cardRef}
      data-signup="card"
      data-auth-face={displayFace}
      aria-label={ASIDE_LABELS[displayFace]}
      className={authCard}
    >
      <span className={authCardGlow} aria-hidden="true" />
      <span
        ref={reflectionRef}
        className={authCardReflection}
        aria-hidden="true"
      />

      <div className={authCardStage}>
        <div ref={flipperRef} className={authCardFlipper}>
          <div className={authCardFace} aria-live="polite">
            {displayFace === "signup" ? (
              <SignupFace
                onSuccess={onSignupSuccess}
                onGoLogin={() => requestFace("login")}
              />
            ) : null}

            {displayFace === "login" ? (
              <LoginFace
                contextualSubtitle={loginSubtitle}
                onSuccess={onLoginSuccess}
                onGoSignup={() => requestFace("signup")}
                onGoForgot={() => requestFace("forgot")}
              />
            ) : null}

            {displayFace === "forgot" ? (
              <ForgotFace
                onGoLogin={() => requestFace("login")}
                onSent={() => undefined}
              />
            ) : null}
          </div>
        </div>
      </div>
    </div>
  );
}
