import { buildLegalMetadata, LegalRoutePage } from "@/lib/legal/LegalRoutePage";

export const metadata = buildLegalMetadata("security");

export default function Page() {
  return <LegalRoutePage slug="security" />;
}
