import { ChevronLeft, ChevronRight } from "lucide-react";
import { inventoryPageSizeOptions } from "@/features/admin/mocks";

// DESIGN.md Screen C pagination: result range, page-size selector and the
// previous / numbered / next controls.

export function InventoryPagination() {
  return (
    <div className="flex flex-wrap items-center justify-between gap-4 pt-6">
      <div className="flex flex-wrap items-center gap-3">
        <p className="font-body text-small text-slate">
          Showing <span className="font-medium text-ink">1 to 8</span> of{" "}
          <span className="font-medium text-ink">128</span> vehicles
        </p>
        <label htmlFor="inventory-page-size" className="font-body text-small text-slate">
          Show
        </label>
        <select
          id="inventory-page-size"
          defaultValue={inventoryPageSizeOptions[0]}
          className="h-11 rounded-sm border border-stone bg-white px-3 font-body text-small text-ink shadow-sm focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ink"
        >
          {inventoryPageSizeOptions.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
      </div>

      <nav aria-label="Pagination" className="flex items-center gap-1.5">
        <button
          type="button"
          disabled
          className="flex h-11 items-center gap-2 rounded-sm border border-stone bg-white px-4 font-body text-small font-medium text-mist"
        >
          <ChevronLeft aria-hidden="true" className="size-5" strokeWidth={1.5} />
          Previous
        </button>
        <button
          type="button"
          aria-current="page"
          className="flex h-11 w-11 items-center justify-center rounded-sm border border-ink bg-ink font-body text-small font-semibold text-white shadow-sm"
        >
          1
        </button>
        {[2, 3].map((page) => (
          <button
            key={page}
            type="button"
            className="flex h-11 w-11 items-center justify-center rounded-sm border border-stone bg-white font-body text-small font-medium text-ink transition-colors hover:bg-stone/30"
          >
            {page}
          </button>
        ))}
        <span className="flex h-11 w-8 items-center justify-center font-body text-small text-slate">
          ...
        </span>
        <button
          type="button"
          className="flex h-11 w-11 items-center justify-center rounded-sm border border-stone bg-white font-body text-small font-medium text-ink transition-colors hover:bg-stone/30"
        >
          16
        </button>
        <button
          type="button"
          className="flex h-11 items-center gap-2 rounded-sm border border-stone bg-white px-4 font-body text-small font-medium text-ink transition-colors hover:bg-stone/30"
        >
          Next
          <ChevronRight aria-hidden="true" className="size-5" strokeWidth={1.5} />
        </button>
      </nav>
    </div>
  );
}
