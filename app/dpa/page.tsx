import { buildLegalMetadata, LegalRoutePage } from "@/lib/legal/LegalRoutePage";

export const metadata = buildLegalMetadata("dpa");

export default function Page() {
  return <LegalRoutePage slug="dpa" />;
}
