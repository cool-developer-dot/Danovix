import { buildLegalMetadata, LegalRoutePage } from "@/lib/legal/LegalRoutePage";

export const metadata = buildLegalMetadata("refund-policy");

export default function Page() {
  return <LegalRoutePage slug="refund-policy" />;
}
