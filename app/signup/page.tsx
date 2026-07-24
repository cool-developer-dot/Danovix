import type { Metadata } from "next";
import { Suspense } from "react";

import { SignupPage } from "@/components/Auth/Signup/SignupPage";
import { SIGNUP_PAGE_META } from "@/components/Auth/Signup/auth.constants";
import { BreadcrumbJsonLd } from "@/components/seo/json-ld";
import { createPageMetadata } from "@/lib/seo/metadata";

export const metadata: Metadata = createPageMetadata({
  title: SIGNUP_PAGE_META.title,
  description: SIGNUP_PAGE_META.description,
  path: "/signup",
});

export default function MembershipSignupPage() {
  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: "Home", path: "/" },
          { name: "Membership", path: "/signup" },
        ]}
      />
      <Suspense fallback={null}>
        <SignupPage />
      </Suspense>
    </>
  );
}
