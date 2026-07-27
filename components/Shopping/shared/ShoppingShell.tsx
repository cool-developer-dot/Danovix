"use client";

import type { ReactNode, RefObject } from "react";

import { FooterDeferred } from "@/components/Footer/FooterDeferred";
import { HeroNavbar } from "@/components/hero/HeroNavbar";

import { shoppingMain, shoppingPage } from "../shopping.styles";

type ShoppingShellProps = {
  rootRef?: RefObject<HTMLDivElement | null>;
  children: ReactNode;
};

export function ShoppingShell({ rootRef, children }: ShoppingShellProps) {
  return (
    <div ref={rootRef} className={shoppingPage}>
      <HeroNavbar />
      <main id="main-content" className={shoppingMain}>
        {children}
        <FooterDeferred />
      </main>
    </div>
  );
}
