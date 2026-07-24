import type { FooterSocialLink } from "@/lib/footer/constants";
import { FOOTER_SOCIAL } from "@/lib/footer/constants";

import { footerSocial, footerSocialButton } from "./footer.styles";

function SocialGlyph({
  network,
}: {
  network: FooterSocialLink["network"];
}) {
  const className = "h-[18px] w-[18px] transition-transform duration-[450ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover/social:scale-110";

  switch (network) {
    case "instagram":
      return (
        <svg
          viewBox="0 0 24 24"
          className={className}
          fill="currentColor"
          aria-hidden="true"
        >
          <path d="M12 2.2c3.2 0 3.6 0 4.9.1 1.2.1 1.9.2 2.4.4.6.2 1 .5 1.5 1 .4.4.7.9 1 1.5.2.5.4 1.2.4 2.4.1 1.3.1 1.7.1 4.9s0 3.6-.1 4.9c-.1 1.2-.2 1.9-.4 2.4-.2.6-.5 1-1 1.5-.4.4-.9.7-1.5 1-.5.2-1.2.4-2.4.4-1.3.1-1.7.1-4.9.1s-3.6 0-4.9-.1c-1.2-.1-1.9-.2-2.4-.4-.6-.2-1-.5-1.5-1-.4-.4-.7-.9-1-1.5-.2-.5-.4-1.2-.4-2.4C2.2 15.6 2.2 15.2 2.2 12s0-3.6.1-4.9c.1-1.2.2-1.9.4-2.4.2-.6.5-1 1-1.5.4-.4.9-.7 1.5-1 .5-.2 1.2-.4 2.4-.4C8.4 2.2 8.8 2.2 12 2.2Zm0 1.8c-3.2 0-3.5 0-4.8.1-1.1 0-1.7.2-2.1.4-.5.2-.8.4-1.1.7-.3.3-.5.6-.7 1.1-.2.4-.3 1-.4 2.1 0 1.2-.1 1.6-.1 4.8s0 3.5.1 4.8c0 1.1.2 1.7.4 2.1.2.5.4.8.7 1.1.3.3.6.5 1.1.7.4.2 1 .3 2.1.4 1.2 0 1.6.1 4.8.1s3.5 0 4.8-.1c1.1 0 1.7-.2 2.1-.4.5-.2.8-.4 1.1-.7.3-.3.5-.6.7-1.1.2-.4.3-1 .4-2.1 0-1.2.1-1.6.1-4.8s0-3.5-.1-4.8c0-1.1-.2-1.7-.4-2.1-.2-.5-.4-.8-.7-1.1-.3-.3-.6-.5-1.1-.7-.4-.2-1-.3-2.1-.4-1.3-.1-1.6-.1-4.8-.1Zm0 3.1a4.9 4.9 0 1 1 0 9.8 4.9 4.9 0 0 1 0-9.8Zm0 1.8a3.1 3.1 0 1 0 0 6.2 3.1 3.1 0 0 0 0-6.2Zm6.2-.9a1.1 1.1 0 1 1-2.3 0 1.1 1.1 0 0 1 2.3 0Z" />
        </svg>
      );
    case "pinterest":
      return (
        <svg
          viewBox="0 0 24 24"
          className={className}
          fill="currentColor"
          aria-hidden="true"
        >
          <path d="M12 2C6.5 2 2 6.5 2 12c0 4.2 2.6 7.8 6.3 9.3-.1-.8-.2-2 0-2.9.2-.8 1.3-5.4 1.3-5.4s-.3-.7-.3-1.7c0-1.6.9-2.8 2.1-2.8 1 0 1.5.7 1.5 1.6 0 1-.6 2.4-.9 3.8-.3 1.1.5 2 1.6 2 2 0 3.4-2.5 3.4-5.5 0-2.3-1.5-4-4.3-4-3.1 0-5.1 2.3-5.1 4.9 0 .9.3 1.9.7 2.4.1.1.1.2.1.3l-.3 1.1c0 .2-.1.2-.3.1-1.3-.5-1.9-2-1.9-3.6 0-2.7 2.3-5.9 6.7-5.9 3.6 0 6 2.6 6 5.4 0 3.7-2.1 6.5-5.1 6.5-1 0-2-.6-2.3-1.2l-.6 2.4c-.2.9-.8 2-1.2 2.7.9.3 1.9.4 2.9.4 5.5 0 10-4.5 10-10S17.5 2 12 2Z" />
        </svg>
      );
    case "tiktok":
      return (
        <svg
          viewBox="0 0 24 24"
          className={className}
          fill="currentColor"
          aria-hidden="true"
        >
          <path d="M19.6 7.5A6.9 6.9 0 0 1 16 6.3V15a5.5 5.5 0 1 1-5.5-5.5c.3 0 .6 0 .9.1v2.7a2.8 2.8 0 1 0 2 2.7V2.5h2.7a4.3 4.3 0 0 0 4.1 4.1v2.9c-.5 0-1-.1-1.6-.1Z" />
        </svg>
      );
    case "facebook":
      return (
        <svg
          viewBox="0 0 24 24"
          className={className}
          fill="currentColor"
          aria-hidden="true"
        >
          <path d="M14.5 8.5V6.8c0-.7.1-1.1 1.2-1.1H17V3h-2.4C11.8 3 11 4.7 11 6.6v1.9H9v2.9h2V21h3.5v-9.6h2.3l.3-2.9h-2.6Z" />
        </svg>
      );
  }
}

export function FooterSocial() {
  return (
    <nav data-footer="social" className={footerSocial} aria-label="Social media">
      {FOOTER_SOCIAL.map((item) => (
        <a
          key={item.id}
          href={item.href}
          target="_blank"
          rel="noopener noreferrer"
          data-footer="social-btn"
          data-network={item.network}
          className={footerSocialButton}
          aria-label={`Follow DANOVIX on ${item.label}`}
        >
          <span className="site-footer-social-glow" aria-hidden="true" />
          <SocialGlyph network={item.network} />
        </a>
      ))}
    </nav>
  );
}
