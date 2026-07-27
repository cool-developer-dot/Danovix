import { buildLegalMetadata, LegalRoutePage } from "@/lib/legal/LegalRoutePage";

export const metadata = buildLegalMetadata("cookie-policy");

export default function Page() {
  return <LegalRoutePage slug="cookie-policy" />;
}
