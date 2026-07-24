"use client";

import { useRef } from "react";

import { FooterAmbient } from "./FooterAmbient";
import { FooterColumns } from "./FooterColumns";
import { FooterEditorial } from "./FooterEditorial";
import { FooterNewsletter } from "./FooterNewsletter";
import { FooterSignature } from "./FooterSignature";
import { FooterTrust } from "./FooterTrust";
import { useFooterAnimations } from "./footer-animations";
import {
  footerDivider,
  footerInner,
  footerRoot,
  footerStage,
} from "./footer.styles";

export function Footer() {
  const sectionRef = useRef<HTMLElement>(null);

  useFooterAnimations(sectionRef);

  return (
    <footer
      ref={sectionRef}
      id="site-footer"
      aria-labelledby="footer-editorial-heading"
      className={footerRoot}
    >
      <div data-footer="stage" className={footerStage}>
        <FooterAmbient />

        <div className={footerInner}>
          <FooterEditorial />
          <FooterNewsletter />

          <div
            data-footer="divider"
            className={footerDivider}
            aria-hidden="true"
          />

          <FooterColumns />

          <div
            data-footer="divider"
            className={footerDivider}
            aria-hidden="true"
          />

          <FooterTrust />

          <div
            data-footer="divider"
            className={footerDivider}
            aria-hidden="true"
          />

          <FooterSignature />
        </div>
      </div>
    </footer>
  );
}
