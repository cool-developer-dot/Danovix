"use client";

import dynamic from "next/dynamic";
import { useRef } from "react";

import { FooterDeferred } from "@/components/Footer/FooterDeferred";
import { HeroNavbar } from "@/components/hero/HeroNavbar";

import { useAccountAnimations } from "./AccountAnimations";
import { accountMain, accountPage } from "./account.styles";
import { DashboardSummary } from "./DashboardSummary";
import { QuickActions } from "./QuickActions";
import { WelcomeHero } from "./WelcomeHero";

const RecentOrders = dynamic(
  () =>
    import("./RecentOrders").then((mod) => mod.RecentOrders),
  { ssr: true },
);

const PrivateCollectionPreview = dynamic(
  () =>
    import("./PrivateCollectionPreview").then(
      (mod) => mod.PrivateCollectionPreview,
    ),
  { ssr: true },
);

const SavedAddresses = dynamic(
  () =>
    import("./SavedAddresses").then((mod) => mod.SavedAddresses),
  { ssr: true },
);

const PaymentMethods = dynamic(
  () =>
    import("./PaymentMethods").then((mod) => mod.PaymentMethods),
  { ssr: true },
);

const PrivateMembership = dynamic(
  () =>
    import("./PrivateMembership").then((mod) => mod.PrivateMembership),
  { ssr: true },
);

const AILuxuryConcierge = dynamic(
  () =>
    import("./AILuxuryConcierge").then((mod) => mod.AILuxuryConcierge),
  { ssr: true },
);

const RecentlyViewedGallery = dynamic(
  () =>
    import("./RecentlyViewedGallery").then(
      (mod) => mod.RecentlyViewedGallery,
    ),
  { ssr: true },
);

const CuratedForYou = dynamic(
  () => import("./CuratedForYou").then((mod) => mod.CuratedForYou),
  { ssr: true },
);

const LuxuryJournal = dynamic(
  () => import("./LuxuryJournal").then((mod) => mod.LuxuryJournal),
  { ssr: true },
);

export function AccountExperience() {
  const rootRef = useRef<HTMLDivElement>(null);
  useAccountAnimations(rootRef);

  return (
    <div ref={rootRef} className={accountPage}>
      <HeroNavbar />

      <main id="main-content" className={accountMain}>
        <WelcomeHero />
        <DashboardSummary />
        <RecentOrders />
        <PrivateCollectionPreview />
        <SavedAddresses />
        <PaymentMethods />
        <PrivateMembership />
        <AILuxuryConcierge />
        <RecentlyViewedGallery />
        <CuratedForYou />
        <LuxuryJournal />
        <FooterDeferred />
      </main>

      <QuickActions />
    </div>
  );
}
