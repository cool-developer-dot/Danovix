import { buildLegalMetadata, LegalRoutePage } from "@/lib/legal/LegalRoutePage";

export const metadata = buildLegalMetadata("ai-disclosure");

export default function Page() {
  return <LegalRoutePage slug="ai-disclosure" />;
}
