import Link from "next/link";
import { X } from "lucide-react";
import {
  buildVehicleListQuery,
  formatMillions,
  vehicleListFilterOptions,
  type VehicleListFilters,
} from "@/features/vehicles/mocks";

// DESIGN.md Screen 2 active-filter chips row: removable chips in champagne
// tint with a "Reset all" link. Each chip is a link that rebuilds the query
// without its filter. Renders nothing when no filters are active.

type VehicleActiveFiltersProps = {
  filters: VehicleListFilters;
};

type FilterChip = {
  key: string;
  label: string;
  removeAriaLabel: string;
  remove: Partial<Record<string, string | number | string[] | undefined>>;
};

const optionLabel = (
  options: ReadonlyArray<{ value: string; label: string }>,
  value: string,
) => options.find((option) => option.value === value)?.label ?? value;

export function VehicleActiveFilters({ filters }: VehicleActiveFiltersProps) {
  const chips: FilterChip[] = [];

  if (filters.make) {
    chips.push({
      key: `make-${filters.make}`,
      label: `Make: ${filters.make}`,
      removeAriaLabel: `Remove ${filters.make} filter`,
      remove: { make: undefined, page: undefined },
    });
  }
  if (filters.model) {
    chips.push({
      key: `model-${filters.model}`,
      label: `Model: ${filters.model}`,
      removeAriaLabel: `Remove ${filters.model} filter`,
      remove: { model: undefined, page: undefined },
    });
  }
  for (const value of filters.body_type) {
    chips.push({
      key: `body-${value}`,
      label: `Body: ${optionLabel(vehicleListFilterOptions.bodyTypes, value)}`,
      removeAriaLabel: `Remove ${value} filter`,
      remove: { body_type: filters.body_type.filter((v) => v !== value), page: undefined },
    });
  }
  for (const value of filters.status) {
    chips.push({
      key: `status-${value}`,
      label: `Status: ${optionLabel(vehicleListFilterOptions.statuses, value)}`,
      removeAriaLabel: `Remove ${value} filter`,
      remove: { status: filters.status.filter((v) => v !== value), page: undefined },
    });
  }
  if (filters.min_price !== undefined || filters.max_price !== undefined) {
    const from = filters.min_price !== undefined ? formatMillions(filters.min_price) : null;
    const to = filters.max_price !== undefined ? formatMillions(filters.max_price) : null;
    chips.push({
      key: "price",
      label: `Price: ${from && to ? `${from} – ${to}` : (to ? `< ${to}` : `> ${from}`)}`,
      removeAriaLabel: "Remove price filter",
      remove: { min_price: undefined, max_price: undefined, page: undefined },
    });
  }
  if (filters.year_from !== undefined || filters.year_to !== undefined) {
    chips.push({
      key: "year",
      label: `Year: ${filters.year_from ?? "…"} – ${filters.year_to ?? "…"}`,
      removeAriaLabel: "Remove year filter",
      remove: { year_from: undefined, year_to: undefined, page: undefined },
    });
  }
  for (const value of filters.transmission) {
    chips.push({
      key: `transmission-${value}`,
      label: `Transmission: ${optionLabel(vehicleListFilterOptions.transmissions, value)}`,
      removeAriaLabel: `Remove ${value} filter`,
      remove: { transmission: filters.transmission.filter((v) => v !== value), page: undefined },
    });
  }
  for (const value of filters.fuel) {
    chips.push({
      key: `fuel-${value}`,
      label: `Fuel: ${optionLabel(vehicleListFilterOptions.fuelCategories, value)}`,
      removeAriaLabel: `Remove ${value} filter`,
      remove: { fuel: filters.fuel.filter((v) => v !== value), page: undefined },
    });
  }
  for (const value of filters.colour) {
    chips.push({
      key: `colour-${value}`,
      label: `Colour: ${optionLabel(vehicleListFilterOptions.colours, value)}`,
      removeAriaLabel: `Remove ${value} filter`,
      remove: { colour: filters.colour.filter((v) => v !== value), page: undefined },
    });
  }

  if (chips.length === 0) return null;

  return (
    <div className="flex flex-wrap items-center gap-2 rounded-md border border-stone bg-white px-4 py-3">
      <span className="mr-1 font-body text-small text-slate">Active filters:</span>
      {chips.map((chip) => (
        <Link
          key={chip.key}
          href={`/vehicles${buildVehicleListQuery(filters, chip.remove)}`}
          aria-label={chip.removeAriaLabel}
          className="inline-flex min-h-11 items-center gap-1.5 rounded-full border border-champagne/30 bg-champagne-tint/60 px-3 py-1 font-body text-small text-ink transition-colors hover:border-champagne sm:min-h-fit"
        >
          <span>{chip.label}</span>
          <X aria-hidden="true" className="size-4 shrink-0" strokeWidth={1.5} />
        </Link>
      ))}
      <Link
        href="/vehicles"
        className="ml-auto font-body text-small font-medium text-slate underline transition-colors hover:text-ink"
      >
        Reset all
      </Link>
    </div>
  );
}
