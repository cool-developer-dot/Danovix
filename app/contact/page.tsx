import { redirect } from "next/navigation";

/** Standalone contact page retired — Concierge lives on the homepage. */
export default function ContactPage() {
  redirect("/#contact");
}
