"use client";

import { Cormorant_Garamond, Inter } from "next/font/google";
import {
  ExperienceActions,
  ExperienceHeroCopy,
} from "@/components/Experience/ExperienceHero";
import { ExperienceShell } from "@/components/Experience/ExperienceShell";
import { MarblePedestal } from "@/components/Experience/MarblePedestal";
import { EXPERIENCE_ERROR } from "@/lib/experience/constants";

import "./globals.css";

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["300", "500"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500"],
  display: "swap",
});

export default function GlobalError({
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <html
      lang="en"
      className={`${cormorant.variable} ${inter.variable} h-full antialiased`}
    >
      <body className="min-h-full bg-[#0c0c0c] font-sans">
        <ExperienceShell>
          <MarblePedestal variant="error" />
          <ExperienceHeroCopy
            eyebrow={EXPERIENCE_ERROR.eyebrow}
            heading={EXPERIENCE_ERROR.heading}
            description={EXPERIENCE_ERROR.description}
          />
          <ExperienceActions
            actions={[...EXPERIENCE_ERROR.actions]}
            onAction={(id) => {
              if (id === "retry") reset();
            }}
          />
        </ExperienceShell>
      </body>
    </html>
  );
}
