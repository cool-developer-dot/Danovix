import type { Metadata, Viewport } from "next";
import { Cormorant_Garamond, Inter } from "next/font/google";

import { OpeningExperience } from "@/components/opening/OpeningExperience";
import {
  OrganizationJsonLd,
  WebSiteJsonLd,
} from "@/components/seo/json-ld";
import { createPageMetadata } from "@/lib/seo/metadata";

import "./globals.css";

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["300", "500"],
  display: "swap",
  preload: true,
  adjustFontFallback: true,
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500"],
  display: "swap",
  /* Body font — defer preload so brand display font wins the critical path */
  preload: false,
  adjustFontFallback: true,
});

export const metadata: Metadata = createPageMetadata();

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#111111",
  colorScheme: "light",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${cormorant.variable} ${inter.variable} h-full antialiased`}
    >
      <body className="min-h-full font-sans">
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[100] focus:rounded-md focus:bg-danovix-background focus:px-4 focus:py-2 focus:text-danovix-primary"
        >
          Skip to main content
        </a>
        <OrganizationJsonLd />
        <WebSiteJsonLd />
        <OpeningExperience>{children}</OpeningExperience>
      </body>
    </html>
  );
}
