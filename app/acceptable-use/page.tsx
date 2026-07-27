import { buildLegalMetadata, LegalRoutePage } from "@/lib/legal/LegalRoutePage";

export const metadata = buildLegalMetadata("acceptable-use");

export default function Page() {
  return <LegalRoutePage slug="acceptable-use" />;
}
