"use client";

import type { ReactNode, RefObject } from "react";

import { QuickActions } from "@/components/Account/QuickActions";
import { FooterDeferred } from "@/components/Footer/FooterDeferred";
import { HeroNavbar } from "@/components/hero/HeroNavbar";

import { accountMain, accountPage } from "../account.styles";

type AccountSubpageShellProps = {
  rootRef?: RefObject<HTMLDivElement | null>;
  children: ReactNode;
  showQuickActions?: boolean;
};

export function AccountSubpageShell({
  rootRef,
  children,
  showQuickActions = true,
}: AccountSubpageShellProps) {
  return (
    <div ref={rootRef} className={accountPage}>
      <HeroNavbar />
      <main id="main-content" className={accountMain}>
        {children}
        <FooterDeferred />
      </main>
      {showQuickActions ? <QuickActions /> : null}
    </div>
  );
}
