import type { Metadata } from "next";
import { VehicleCard } from "@/components/shared/vehicle-card";
import { VehicleActiveFilters } from "@/features/vehicles/components/vehicle-active-filters";
import { VehicleFilterSidebar } from "@/features/vehicles/components/vehicle-filter-sidebar";
import { VehicleListEmpty } from "@/features/vehicles/components/vehicle-list-empty";
import { VehicleListPagination } from "@/features/vehicles/components/vehicle-list-pagination";
import { VehicleListToolbar } from "@/features/vehicles/components/vehicle-list-toolbar";
import { parseVehicleListSearch, searchVehicleList } from "@/features/vehicles/mocks";

export const metadata: Metadata = {
  title: "Vehicles",
  description:
    "Inspected, certified luxury and commercial vehicles available for immediate delivery in Nairobi.",
};

// DESIGN.md Screen 2 — Vehicles. Server Component: filters and sorting run
// through the Zod-validated search-param boundary and the typed mock query
// (features/vehicles/mocks.ts) until the backend query contract lands.

type VehiclesPageProps = {
  searchParams?: Record<string, string | string[] | undefined>;
};

export default function VehiclesPage({ searchParams }: VehiclesPageProps) {
  const filters = parseVehicleListSearch(searchParams ?? {});
  const result = searchVehicleList(filters);

  return (
    <div className="mx-auto max-w-7xl px-4 pb-14 pt-8 sm:px-6 sm:pb-18 lg:px-8 lg:pb-24">
      <VehicleListToolbar total={result.total} filters={filters} />

      <div className="grid gap-6 lg:grid-cols-12">
        <div className="lg:col-span-3">
          <VehicleFilterSidebar filters={filters} resultCount={result.total} />
        </div>

        <section
          aria-label="Vehicles"
          className="flex min-w-0 flex-col gap-6 lg:col-span-9"
        >
          <VehicleActiveFilters filters={filters} />

          {result.items.length === 0 ? (
            <VehicleListEmpty />
          ) : (
            <ul
              className={
                filters.view === "list"
                  ? "grid grid-cols-1 gap-6"
                  : "grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3"
              }
            >
              {result.items.map((vehicle) => (
                <li key={vehicle.slug}>
                  <VehicleCard vehicle={vehicle} />
                </li>
              ))}
            </ul>
          )}

          <VehicleListPagination
            filters={filters}
            page={result.page}
            pageCount={result.pageCount}
            total={result.total}
            rangeStart={result.rangeStart}
            rangeEnd={result.rangeEnd}
          />
        </section>
      </div>
    </div>
  );
}
