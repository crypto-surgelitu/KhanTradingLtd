import Link from "next/link";
import { ArrowUpDown, Download, LayoutGrid, Plus, Rows3, Search } from "lucide-react";
import { buttonVariants } from "@/components/ui/button";
import {
  inventoryMakeOptions,
  inventorySortOptions,
  inventoryStatusOptions,
  inventorySummary,
} from "@/features/admin/mocks";

// DESIGN.md Screen C inventory header and filter toolbar. Filters are
// presentational form controls for now — TODO(KHANS TRADING Ltd / backend):
// wire to the inventory list query contract in docs/TASKS.md.

const selectClasses =
  "h-11 w-full appearance-none rounded-sm border border-stone bg-white px-3 font-body text-small text-ink shadow-sm transition-colors hover:border-slate/60 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ink";

export function InventoryToolbar() {
  return (
    <div className="flex flex-col gap-6 pb-8">
      <div className="flex flex-wrap items-end justify-between gap-4">
        <div className="flex flex-col gap-2">
          <p className="font-body text-eyebrow uppercase text-champagne-dark">
            Stock Management <span aria-hidden="true">/</span> Dealership Fleet
          </p>
          <h1 className="font-heading text-h1 lg:text-h1-lg">Inventory</h1>
          <p className="flex flex-wrap items-center gap-2 font-body text-small text-slate">
            <span>{inventorySummary.total}</span>
            <span aria-hidden="true">•</span>
            <span>{inventorySummary.inStock}</span>
            <span aria-hidden="true">•</span>
            <span>{inventorySummary.reserved}</span>
            <span aria-hidden="true">•</span>
            <span>{inventorySummary.soldThisMonth}</span>
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-3">
          <button type="button" className={buttonVariants({ variant: "secondary" })}>
            <Download aria-hidden="true" className="mr-2 size-5" strokeWidth={1.5} />
            Export CSV
          </button>
          <Link
            href="/admin/add-vehicle"
            className={buttonVariants({ variant: "primary" })}
          >
            <Plus aria-hidden="true" className="mr-2 size-5" strokeWidth={1.5} />
            Add vehicle
          </Link>
        </div>
      </div>

      <div className="flex flex-wrap items-center gap-3 rounded-md border border-stone bg-white p-4">
        <div className="relative flex min-w-0 flex-1 items-center">
          <label htmlFor="inventory-search" className="sr-only">
            Search inventory
          </label>
          <Search
            aria-hidden="true"
            className="pointer-events-none absolute left-3 size-5 text-mist"
            strokeWidth={1.5}
          />
          <input
            id="inventory-search"
            type="search"
            className={`${selectClasses} pl-10`}
          />
          <span className="ml-3 whitespace-nowrap font-body text-caption text-slate">
            {inventorySummary.searchHint}
          </span>
        </div>

        <label htmlFor="inventory-status" className="sr-only">
          Status
        </label>
        <select id="inventory-status" defaultValue="" className={`${selectClasses} w-auto`}>
          {inventoryStatusOptions.map((option) => (
            <option key={option.label} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>

        <label htmlFor="inventory-make" className="sr-only">
          Make
        </label>
        <select id="inventory-make" defaultValue="" className={`${selectClasses} w-auto`}>
          {inventoryMakeOptions.map((option) => (
            <option key={option.label} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>

        <span className="font-body text-small text-slate">Sort by:</span>
        <label htmlFor="inventory-sort" className="sr-only">
          Sort inventory
        </label>
        <select
          id="inventory-sort"
          defaultValue="date-desc"
          className={`${selectClasses} w-auto`}
        >
          {inventorySortOptions.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>

        <button
          type="button"
          aria-label="Reverse sort direction"
          className="flex size-11 items-center justify-center rounded-full border border-stone bg-white text-ink transition-colors hover:bg-champagne-tint"
        >
          <ArrowUpDown aria-hidden="true" className="size-5" strokeWidth={1.5} />
        </button>

        <div className="flex items-center border border-stone bg-white p-1 shadow-sm" role="group" aria-label="View style">
          <button
            type="button"
            aria-label="Table view"
            aria-current="true"
            className="flex size-11 items-center justify-center rounded-sm bg-ink text-white lg:size-10"
          >
            <Rows3 aria-hidden="true" className="size-5" strokeWidth={1.5} />
          </button>
          <button
            type="button"
            aria-label="Grid view"
            className="flex size-11 items-center justify-center rounded-sm text-slate transition-colors hover:text-ink lg:size-10"
          >
            <LayoutGrid aria-hidden="true" className="size-5" strokeWidth={1.5} />
          </button>
        </div>
      </div>
    </div>
  );
}
