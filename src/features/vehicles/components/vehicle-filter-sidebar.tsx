import Link from "next/link";
import { ChevronDown, SlidersHorizontal } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { FilterCheckboxGroup } from "@/features/vehicles/components/filter-checkbox-group";
import {
  formatMillions,
  vehicleListBounds,
  vehicleListFilterOptions,
  type VehicleColourFamily,
  type VehicleListFilters,
} from "@/features/vehicles/mocks";

// DESIGN.md Screen 2 filter sidebar (280px sticky on desktop). A zero-JS GET
// form: every control submits into the /vehicles search-param contract.
// "Show N vehicles" is the spec'd apply button (Section 4 mobile sheet); it is
// visible at all sizes here because the page is a Server Component.

type VehicleFilterSidebarProps = {
  filters: VehicleListFilters;
  resultCount: number;
};

// Swatch paints are tokenised stand-ins for the design's paint chips; the
// Navy/Wine paints have no DESIGN.md token (see SUMMARY — token proposal open).
const colourSwatchStyles: Record<VehicleColourFamily, string> = {
  black: "bg-ink",
  white: "border border-stone bg-white",
  silver: "bg-stone",
  grey: "bg-slate",
  navy: "bg-info",
  red: "bg-danger",
  green: "bg-success",
};

const selectClasses =
  "h-12 w-full appearance-none rounded-sm border border-stone bg-white pl-4 pr-10 font-body text-body text-ink shadow-sm transition-colors hover:border-slate/60 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ink";

export function VehicleFilterSidebar({
  filters,
  resultCount,
}: VehicleFilterSidebarProps) {
  const { priceMin, priceMax, priceStep, yearMin, yearMax } = vehicleListBounds;
  const priceFrom = filters.min_price ?? priceMin;
  const priceTo = filters.max_price ?? priceMax;
  const yearFrom = filters.year_from ?? yearMin;
  const yearTo = filters.year_to ?? yearMax;

  return (
    <aside aria-label="Vehicle filters" className="lg:sticky lg:top-28">
      <details open className="rounded-md border border-stone bg-white lg:border-0 lg:bg-transparent">
        <summary className="flex min-h-11 cursor-pointer list-none items-center gap-2 px-4 py-3 font-body text-button text-ink lg:hidden">
          <SlidersHorizontal aria-hidden="true" className="size-5" strokeWidth={1.5} />
          Filter vehicles
          <ChevronDown aria-hidden="true" className="accordion-chevron ml-auto size-5 text-slate" strokeWidth={1.5} />
        </summary>

        <div className="px-4 pb-4 lg:px-0 lg:pb-0">
          <div className="flex items-center justify-between gap-4">
            <h2 className="font-heading text-h3 lg:text-h3-lg">Filters</h2>
            <Link
              href="/vehicles"
              className="font-body text-small font-medium text-slate underline underline-offset-4 transition-colors hover:text-ink"
            >
              Clear all
            </Link>
          </div>

          <form method="get" action="/vehicles" className="mt-6 flex flex-col gap-6">
            {filters.sort !== "newest" && (
              <input type="hidden" name="sort" value={filters.sort} />
            )}
            {filters.view !== "grid" && (
              <input type="hidden" name="view" value={filters.view} />
            )}

            <div className="flex flex-col gap-3">
              <label htmlFor="filter-make" className="font-body text-small font-medium text-ink">
                Make
              </label>
              <div className="relative">
                <select
                  id="filter-make"
                  name="make"
                  defaultValue={filters.make ?? ""}
                  className={selectClasses}
                >
                  <option value="">All Makes</option>
                  {vehicleListFilterOptions.makes.map((make) => (
                    <option key={make} value={make}>
                      {make}
                    </option>
                  ))}
                </select>
                <ChevronDown aria-hidden="true" className="pointer-events-none absolute right-3 top-1/2 size-5 -translate-y-1/2 text-slate" strokeWidth={1.5} />
              </div>
            </div>

            <div className="flex flex-col gap-3">
              <label htmlFor="filter-model" className="font-body text-small font-medium text-ink">
                Model
              </label>
              <div className="relative">
                <select
                  id="filter-model"
                  name="model"
                  defaultValue={filters.model ?? ""}
                  className={selectClasses}
                >
                  <option value="">All Models</option>
                  {vehicleListFilterOptions.models.map((model) => (
                    <option key={model} value={model}>
                      {model}
                    </option>
                  ))}
                </select>
                <ChevronDown aria-hidden="true" className="pointer-events-none absolute right-3 top-1/2 size-5 -translate-y-1/2 text-slate" strokeWidth={1.5} />
              </div>
            </div>

            <fieldset className="flex flex-col gap-3">
              <legend className="font-body text-eyebrow uppercase text-slate">
                Body Type
              </legend>
              <div className="flex flex-wrap gap-1.5">
                {vehicleListFilterOptions.bodyTypes.map((body) => (
                  <label key={body.value} className="inline-flex min-h-11 cursor-pointer items-center sm:min-h-fit">
                    <input
                      type="checkbox"
                      name="body_type"
                      value={body.value}
                      defaultChecked={filters.body_type.includes(body.value)}
                      className="peer sr-only"
                    />
                    <span className="rounded-full bg-stone/50 px-3 py-1.5 font-body text-caption font-medium text-slate transition-colors peer-checked:bg-ink peer-checked:text-white peer-focus-visible:outline-2 peer-focus-visible:outline-offset-2 peer-focus-visible:outline-ink">
                      {body.label}
                    </span>
                  </label>
                ))}
              </div>
            </fieldset>

            <fieldset className="flex flex-col gap-3">
              <legend className="font-body text-eyebrow uppercase text-slate">
                Price Range (KSh)
              </legend>
              <div className="grid grid-cols-2 gap-2">
                <div className="rounded-sm border border-stone bg-ivory p-2">
                  <span className="block font-body text-caption text-mist">Min</span>
                  <span className="font-body text-small font-medium text-ink">
                    {formatMillions(priceFrom)}
                  </span>
                </div>
                <div className="rounded-sm border border-stone bg-ivory p-2">
                  <span className="block font-body text-caption text-mist">Max</span>
                  <span className="font-body text-small font-medium text-ink">
                    {formatMillions(priceTo)}
                  </span>
                </div>
              </div>
              <input
                type="range"
                name="min_price"
                min={priceMin}
                max={priceMax}
                step={priceStep}
                defaultValue={priceFrom}
                aria-label="Minimum price in KSh"
                className="h-11 w-full accent-ink"
              />
              <input
                type="range"
                name="max_price"
                min={priceMin}
                max={priceMax}
                step={priceStep}
                defaultValue={priceTo}
                aria-label="Maximum price in KSh"
                className="h-11 w-full accent-ink"
              />
            </fieldset>

            <fieldset className="flex flex-col gap-3">
              <legend className="flex w-full items-center justify-between">
                <span className="font-body text-eyebrow uppercase text-slate">
                  Year
                </span>
                <span className="font-body text-small font-medium text-ink">
                  {yearFrom} – {yearTo}
                </span>
              </legend>
              <input
                type="range"
                name="year_from"
                min={yearMin}
                max={yearMax}
                defaultValue={yearFrom}
                aria-label="Year from"
                className="h-11 w-full accent-ink"
              />
              <input
                type="range"
                name="year_to"
                min={yearMin}
                max={yearMax}
                defaultValue={yearTo}
                aria-label="Year to"
                className="h-11 w-full accent-ink"
              />
            </fieldset>

            <FilterCheckboxGroup
              legend="Transmission"
              name="transmission"
              options={vehicleListFilterOptions.transmissions}
              selected={filters.transmission}
            />
            <FilterCheckboxGroup
              legend="Fuel Type"
              name="fuel"
              options={vehicleListFilterOptions.fuelCategories}
              selected={filters.fuel}
            />

            <fieldset className="flex flex-col gap-3">
              <legend className="font-body text-eyebrow uppercase text-slate">
                Exterior Colour
              </legend>
              <div className="flex flex-wrap items-center gap-2.5">
                {vehicleListFilterOptions.colours.map((colour) => (
                  <label
                    key={colour.value}
                    className="flex min-h-11 min-w-11 cursor-pointer items-center justify-center"
                  >
                    <input
                      type="checkbox"
                      name="colour"
                      value={colour.value}
                      defaultChecked={filters.colour.includes(colour.value)}
                      className="peer sr-only"
                    />
                    <span
                      aria-hidden="true"
                      className={cn(
                        "size-6 rounded-full peer-focus-visible:outline-2 peer-focus-visible:outline-offset-2 peer-focus-visible:outline-ink peer-checked:ring-2 peer-checked:ring-ink peer-checked:ring-offset-2",
                        colourSwatchStyles[colour.value as VehicleColourFamily],
                      )}
                    />
                    <span className="sr-only">{colour.label}</span>
                  </label>
                ))}
              </div>
            </fieldset>

            <FilterCheckboxGroup
              legend="Showroom Status"
              name="status"
              options={vehicleListFilterOptions.statuses}
              selected={filters.status}
            />

            <Button type="submit" variant="primary" className="w-full">
              Show {resultCount} vehicles
            </Button>
          </form>
        </div>
      </details>
    </aside>
  );
}
