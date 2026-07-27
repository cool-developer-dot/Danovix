import { buildLegalMetadata, LegalRoutePage } from "@/lib/legal/LegalRoutePage";

export const metadata = buildLegalMetadata("responsible-disclosure");

export default function Page() {
  return <LegalRoutePage slug="responsible-disclosure" />;
}
