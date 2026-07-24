import { SOCIAL_PROVIDERS, type SocialProvider } from "./auth.constants";
import { socialButton, socialIcon, socialList } from "./signup.styles";

/* Monochrome brand glyphs — no colourful branding, luxury-consistent. */
function ProviderGlyph({ id }: { id: SocialProvider["id"] }) {
  if (id === "apple") {
    return (
      <svg
        className={socialIcon}
        viewBox="0 0 24 24"
        fill="currentColor"
        aria-hidden="true"
      >
        <path d="M16.365 1.43c0 1.14-.417 2.2-1.11 2.99-.75.86-1.99 1.53-3.02 1.45-.13-1.11.42-2.28 1.08-3.02.74-.83 2.05-1.45 3.05-1.42zM20.5 17.02c-.55 1.27-.82 1.84-1.53 2.97-.99 1.57-2.39 3.53-4.12 3.54-1.54.01-1.93-1-4.02-.99-2.09.01-2.52.99-4.06.98-1.73-.02-3.05-1.79-4.04-3.36-2.77-4.4-3.06-9.56-1.35-12.31 1.21-1.95 3.12-3.09 4.92-3.09 1.83 0 2.98 1.01 4.49 1.01 1.47 0 2.36-1.01 4.48-1.01 1.6 0 3.3.87 4.51 2.38-3.96 2.17-3.32 7.83.24 9.28z" />
      </svg>
    );
  }

  return (
    <svg
      className={socialIcon}
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M12 11v2.9h4.15c-.18 1.06-1.28 3.1-4.15 3.1-2.5 0-4.53-2.07-4.53-4.62S9.5 7.76 12 7.76c1.42 0 2.37.6 2.92 1.12l1.99-1.92C15.63 5.83 13.99 5.1 12 5.1 8.13 5.1 5 8.23 5 12.1s3.13 7 7 7c4.04 0 6.72-2.84 6.72-6.84 0-.46-.05-.81-.11-1.16H12z" />
    </svg>
  );
}

type SocialLoginProps = {
  onSelect?: (id: SocialProvider["id"]) => void;
};

export function SocialLogin({ onSelect }: SocialLoginProps) {
  return (
    <div data-signup="social" className={socialList}>
      {SOCIAL_PROVIDERS.map((provider) => (
        <button
          key={provider.id}
          type="button"
          onClick={() => onSelect?.(provider.id)}
          className={socialButton}
        >
          <ProviderGlyph id={provider.id} />
          {provider.label}
        </button>
      ))}
    </div>
  );
}
