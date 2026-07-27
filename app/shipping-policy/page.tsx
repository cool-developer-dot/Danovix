import { buildLegalMetadata, LegalRoutePage } from "@/lib/legal/LegalRoutePage";

export const metadata = buildLegalMetadata("shipping-policy");

export default function Page() {
  return <LegalRoutePage slug="shipping-policy" />;
}
