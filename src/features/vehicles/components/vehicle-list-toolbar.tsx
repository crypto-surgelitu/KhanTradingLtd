import Link from "next/link";
import { ChevronDown, ChevronRight, LayoutGrid, List } from "lucide-react";
import { cn } from "@/lib/utils";
import {
  buildVehicleListQuery,
  vehicleSortOptions,
  type VehicleListFilters,
} from "@/features/vehicles/mocks";

// DESIGN.md Screen 2 page header: breadcrumb, H1 with result count pill,
// one-line description, sort dropdown and grid/list toggle. The sort is a
// zero-JS <details> disclosure styled like the design's select.

type VehicleListToolbarProps = {
  total: number;
  filters: VehicleListFilters;
};

const toggleClasses =
  "flex h-11 w-11 items-center justify-center rounded-sm transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ink lg:h-10 lg:w-10";

export function VehicleListToolbar({ total, filters }: VehicleListToolbarProps) {
  const sortLabel =
    vehicleSortOptions.find((option) => option.value === filters.sort)?.label ??
    vehicleSortOptions[0].label;

  return (
    <div className="flex flex-col gap-4 pb-8">
      <nav aria-label="Breadcrumb" className="flex items-center gap-1.5 font-body text-small text-slate">
        <Link href="/" className="transition-colors hover:text-ink">
          Home
        </Link>
        <ChevronRight aria-hidden="true" className="size-4 text-mist" strokeWidth={1.5} />
        <span className="font-medium text-ink">Vehicles</span>
      </nav>

      <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
        <div className="flex flex-col gap-2">
          <div className="flex items-baseline gap-4">
            <h1 className="font-heading text-h1 lg:text-h1-lg">Vehicles</h1>
            <span className="inline-flex items-center rounded-full bg-stone/40 px-2.5 py-0.5 font-body text-small font-medium text-slate">
              {total} available
            </span>
          </div>
          <p className="max-w-xl font-body text-body text-slate">
            Inspected, certified luxury and commercial vehicles available for
            immediate delivery in Nairobi.
          </p>
        </div>

        <div className="flex flex-none items-center gap-4">
          <details className="group relative">
            <summary className="flex h-12 cursor-pointer list-none items-center rounded-sm border border-stone bg-white pl-4 pr-10 font-body text-small font-medium text-ink shadow-sm transition-colors hover:border-slate/60">
              {sortLabel}
              <ChevronDown
                aria-hidden="true"
                className="absolute right-3 size-5 text-slate"
                strokeWidth={1.5}
              />
            </summary>
            <ul className="absolute right-0 z-10 mt-1 min-w-full rounded-sm border border-stone bg-white py-1 shadow-md">
              {vehicleSortOptions.map((option) => (
                <li key={option.value}>
                  <Link
                    href={`/vehicles${buildVehicleListQuery(filters, {
                      sort: option.value === "newest" ? undefined : option.value,
                      page: undefined,
                    })}`}
                    aria-current={option.value === filters.sort ? "true" : undefined}
                    className={cn(
                      "block whitespace-nowrap px-4 py-2 font-body text-small transition-colors hover:bg-champagne-tint",
                      option.value === filters.sort
                        ? "font-medium text-ink"
                        : "text-slate",
                    )}
                  >
                    {option.label}
                  </Link>
                </li>
              ))}
            </ul>
          </details>

          <div className="flex items-center border border-stone bg-white p-1 shadow-sm" role="group" aria-label="View style">
            <Link
              href={`/vehicles${buildVehicleListQuery(filters, {
                view: filters.view === "grid" ? undefined : "grid",
                page: undefined,
              })}`}
              aria-label="Grid view"
              aria-current={filters.view === "grid" ? "true" : undefined}
              className={cn(
                toggleClasses,
                filters.view === "grid"
                  ? "bg-ink text-white"
                  : "text-slate hover:text-ink",
              )}
            >
              <LayoutGrid aria-hidden="true" className="size-5" strokeWidth={1.5} />
            </Link>
            <Link
              href={`/vehicles${buildVehicleListQuery(filters, {
                view: "list",
                page: undefined,
              })}`}
              aria-label="List view"
              aria-current={filters.view === "list" ? "true" : undefined}
              className={cn(
                toggleClasses,
                filters.view === "list"
                  ? "bg-ink text-white"
                  : "text-slate hover:text-ink",
              )}
            >
              <List aria-hidden="true" className="size-5" strokeWidth={1.5} />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
