import { buildLegalMetadata, LegalRoutePage } from "@/lib/legal/LegalRoutePage";

export const metadata = buildLegalMetadata("support");

export default function Page() {
  return <LegalRoutePage slug="support" />;
}
