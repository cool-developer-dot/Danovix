import { DanovixLogo } from "./danovix-logo";

type NavbarLogoProps = {
  className?: string;
};

export function NavbarLogo({ className }: NavbarLogoProps) {
  return (
    <DanovixLogo
      priority
      sizes="240px"
      className={className}
    />
  );
}
