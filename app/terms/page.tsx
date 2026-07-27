import { buildLegalMetadata, LegalRoutePage } from "@/lib/legal/LegalRoutePage";

export const metadata = buildLegalMetadata("terms");

export default function Page() {
  return <LegalRoutePage slug="terms" />;
}
