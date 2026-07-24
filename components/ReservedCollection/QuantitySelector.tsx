"use client";

import { Minus, Plus } from "lucide-react";

import { qtyButton, qtyRoot, qtyValue } from "./reserved.styles";

type QuantitySelectorProps = {
  value: number;
  min?: number;
  max?: number;
  onChange: (next: number) => void;
  label: string;
};

export function QuantitySelector({
  value,
  min = 1,
  max = 9,
  onChange,
  label,
}: QuantitySelectorProps) {
  return (
    <div
      className={qtyRoot}
      role="group"
      aria-label={`Quantity for ${label}`}
    >
      <button
        type="button"
        className={qtyButton}
        aria-label={`Decrease quantity of ${label}`}
        disabled={value <= min}
        onClick={() => onChange(Math.max(min, value - 1))}
      >
        <Minus className="h-3.5 w-3.5 stroke-[1.5]" aria-hidden="true" />
      </button>
      <span className={qtyValue} aria-live="polite" aria-atomic="true">
        {value}
      </span>
      <button
        type="button"
        className={qtyButton}
        aria-label={`Increase quantity of ${label}`}
        disabled={value >= max}
        onClick={() => onChange(Math.min(max, value + 1))}
      >
        <Plus className="h-3.5 w-3.5 stroke-[1.5]" aria-hidden="true" />
      </button>
    </div>
  );
}
