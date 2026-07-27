import { buildLegalMetadata, LegalRoutePage } from "@/lib/legal/LegalRoutePage";

export const metadata = buildLegalMetadata("accessibility");

export default function Page() {
  return <LegalRoutePage slug="accessibility" />;
}
