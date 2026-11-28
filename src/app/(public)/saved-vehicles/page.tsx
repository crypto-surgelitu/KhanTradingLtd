import type { Metadata } from "next";
import Link from "next/link";
import { CheckCircle2, ChevronRight, Home } from "lucide-react";
import { ClearSavedButton } from "@/features/saved-vehicles/components/clear-saved-button";
import { SavedCompareDock } from "@/features/saved-vehicles/components/saved-compare-dock";
import { SavedEmptyState } from "@/features/saved-vehicles/components/saved-empty-state";
import { SavedSelectAll } from "@/features/saved-vehicles/components/saved-select-all";
import { SavedSortMenu } from "@/features/saved-vehicles/components/saved-sort-menu";
import { SavedVehicleCard } from "@/features/saved-vehicles/components/saved-vehicle-card";
import { ShareShortlistButton } from "@/features/saved-vehicles/components/share-shortlist-button";
import { savedVehicles } from "@/features/saved-vehicles/mocks";

export const metadata: Metadata = {
  title: "Saved Vehicles",
  description:
    "Review your saved shortlist, compare key specifications side-by-side, or proceed to enquiry with our automotive advisors.",
};

// DESIGN.md Section 6, Screen 7 — Saved Vehicles. Server Component (the <main>
// landmark comes from the (public) layout); interactive leaves live in
// features/saved-vehicles/components. SAMPLE saved-list data comes from
// features/saved-vehicles/mocks.ts until the backend contract lands.
export default function SavedVehiclesPage() {
  const savedCount = savedVehicles.length;
  const inStockCount = savedVehicles.filter((vehicle) => vehicle.status === "in_stock").length;
  const reservedCount = savedVehicles.filter((vehicle) => vehicle.status === "reserved").length;
  const compared = savedVehicles.filter((vehicle) => vehicle.isCompareSelected);

  return (
    <div className="w-full">
      <div className="mx-auto max-w-7xl px-4 pt-8 pb-4 sm:px-6 lg:px-8">
        <nav aria-label="Breadcrumb" className="flex flex-wrap items-center gap-2 font-body text-small text-slate">
          <Link href="/" className="flex items-center gap-1.5 transition-colors hover:text-ink">
            <Home aria-hidden="true" className="size-4" strokeWidth={1.5} />
            <span>Home</span>
          </Link>
          <ChevronRight aria-hidden="true" className="size-4 text-mist" strokeWidth={1.5} />
          <span className="font-medium text-ink">Saved vehicles</span>
        </nav>
      </div>

      <section aria-labelledby="saved-heading" className="pb-8">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col gap-6 border-b border-stone pb-8 md:flex-row md:items-end md:justify-between">
            <div className="max-w-2xl space-y-3">
              <div className="flex flex-wrap items-center gap-3">
                <h1 id="saved-heading" className="font-heading text-h1 text-ink lg:text-h1-lg">
                  Saved Vehicles
                </h1>
                <span className="inline-flex items-center rounded-full bg-champagne-tint px-3 py-1 font-body text-caption font-semibold text-champagne-dark">
                  {savedCount} {savedCount === 1 ? "vehicle" : "vehicles"} saved
                </span>
              </div>
              <p className="font-body text-body-l text-slate lg:text-body-l-lg">
                Review your saved shortlist, compare key specifications
                side-by-side, or proceed to enquiry with our automotive advisors.
              </p>
            </div>
            <div className="flex flex-wrap items-center gap-3">
              <ClearSavedButton />
              <ShareShortlistButton />
            </div>
          </div>

          <div className="flex flex-wrap items-center justify-between gap-4 pt-6">
            <div className="flex flex-wrap items-center gap-4 sm:gap-6">
              <SavedSelectAll />
              <span aria-hidden="true" className="hidden h-4 w-px bg-stone sm:inline-block" />
              <span className="inline-flex items-center gap-1.5 rounded-full bg-white px-3 py-1.5 font-body text-caption font-medium text-ink shadow-sm">
                <CheckCircle2 aria-hidden="true" className="size-4 text-champagne-dark" strokeWidth={1.5} />
                Filter: In Stock ({inStockCount}) · Reserved ({reservedCount})
              </span>
            </div>
            <div className="flex items-center gap-2">
              <span className="font-body text-caption font-semibold tracking-wider text-slate uppercase">
                Sort by:
              </span>
              <SavedSortMenu />
            </div>
          </div>
        </div>
      </section>

      <section aria-labelledby="saved-list-heading" className="pb-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 id="saved-list-heading" className="sr-only">
            Your saved vehicles
          </h2>
          <ul className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {savedVehicles.map((vehicle) => (
              <li key={vehicle.id} className="flex">
                <SavedVehicleCard vehicle={vehicle} />
              </li>
            ))}
          </ul>
        </div>
      </section>

      <SavedCompareDock compared={compared} maxCompare={3} />

      <section aria-label="Empty state preview" className="py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="relative flex items-center justify-center">
            <div className="h-px w-full bg-stone" />
            <span className="absolute bg-ivory px-4 font-body text-eyebrow text-mist uppercase">
              Preview: Empty State Appearance (/saved when empty)
            </span>
          </div>
        </div>
      </section>

      <section className="pb-24">
        <div className="mx-auto flex max-w-7xl justify-center px-4 sm:px-6 lg:px-8">
          <SavedEmptyState />
        </div>
      </section>
    </div>
  );
}
