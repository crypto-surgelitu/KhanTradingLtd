import type { Metadata } from "next";
import { SectionHeader } from "@/components/shared/section-header";
import { VehicleCard } from "@/components/shared/vehicle-card";
import { BodyTypeTiles } from "@/features/home/components/body-type-tiles";
import { BrowseByMake } from "@/features/home/components/browse-by-make";
import { CollectionPanels } from "@/features/home/components/collection-panels";
import { FaqSection } from "@/features/home/components/faq-section";
import { HeroSection } from "@/features/home/components/hero-section";
import { HowBuyingWorks } from "@/features/home/components/how-buying-works";
import { SellTradeBand } from "@/features/home/components/sell-trade-band";
import { TrustStrip } from "@/features/home/components/trust-strip";
import { VisitUsSection } from "@/features/home/components/visit-us-section";
import { WhyChooseUs } from "@/features/home/components/why-choose-us";
import { featuredVehicles, newArrivals } from "@/features/vehicles/mocks";

export const metadata: Metadata = {
  description: "Premium vehicles. Honest dealing. Curated for Kenyan roads.",
};

// DESIGN.md Screen 1 — Home. Sections in the specified order, server-rendered
// (ARCHITECTURE.md Section 4). Sample vehicle data comes from the labelled
// mock (features/vehicles/mocks.ts) until the backend query contract exists.
export default function HomePage() {
  return (
    <>
      <HeroSection />
      <TrustStrip />
      <BodyTypeTiles />

      <section className="bg-ivory py-14 sm:py-18 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeader
            eyebrow="Curated Selection"
            title="Featured vehicles"
            viewAllHref="/vehicles"
          />
          <ul className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {featuredVehicles.map((vehicle) => (
              <li key={vehicle.slug}>
                <VehicleCard vehicle={vehicle} />
              </li>
            ))}
          </ul>
        </div>
      </section>

      <CollectionPanels />
      <BrowseByMake />
      <HowBuyingWorks />
      <SellTradeBand />

      <section className="bg-ivory py-14 sm:py-18 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeader
            eyebrow="Just Landed"
            title="New arrivals"
            viewAllHref="/vehicles"
          />
          <ul className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {newArrivals.map((vehicle) => (
              <li key={vehicle.slug}>
                <VehicleCard vehicle={vehicle} />
              </li>
            ))}
          </ul>
        </div>
      </section>

      <WhyChooseUs />
      <FaqSection />
      <VisitUsSection />
    </>
  );
}
