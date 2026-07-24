import type { CSSProperties } from "react";

import { evaluatePasswordTier } from "./auth.constants";
import {
  strengthFill,
  strengthHint,
  strengthLabel,
  strengthMeta,
  strengthSegment,
  strengthTrack,
  strengthWrap,
} from "./signup.styles";

type PasswordStrengthProps = {
  password: string;
  describedById?: string;
};

const SEGMENT_COUNT = 4;

export function PasswordStrength({
  password,
  describedById,
}: PasswordStrengthProps) {
  const tier = evaluatePasswordTier(password);
  const active = password.length > 0;

  return (
    <div className={strengthWrap} aria-hidden={!active}>
      <div className={strengthTrack}>
        {Array.from({ length: SEGMENT_COUNT }).map((_, index) => {
          const filled = index < tier.segments;
          return (
            <span key={index} className={strengthSegment}>
              <span
                className={strengthFill}
                style={
                  {
                    backgroundColor: filled ? tier.color : "transparent",
                    transform: filled ? "scaleX(1)" : "scaleX(0)",
                  } as CSSProperties
                }
              />
            </span>
          );
        })}
      </div>

      <div className={strengthMeta} aria-live="polite" id={describedById}>
        <span
          className={strengthLabel}
          style={{ color: active ? tier.color : "rgb(248 247 244 / 0.36)" }}
        >
          {active ? tier.label : "Password strength"}
        </span>
        <span className={strengthHint}>
          {active ? "8+ characters recommended" : ""}
        </span>
      </div>
    </div>
  );
}
