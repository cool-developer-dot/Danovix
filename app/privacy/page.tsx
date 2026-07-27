import { buildLegalMetadata, LegalRoutePage } from "@/lib/legal/LegalRoutePage";

export const metadata = buildLegalMetadata("privacy");

export default function Page() {
  return <LegalRoutePage slug="privacy" />;
}
