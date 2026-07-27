import { buildLegalMetadata, LegalRoutePage } from "@/lib/legal/LegalRoutePage";

export const metadata = buildLegalMetadata("subprocessors");

export default function Page() {
  return <LegalRoutePage slug="subprocessors" />;
}
