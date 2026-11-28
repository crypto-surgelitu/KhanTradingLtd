"use client";

import { useState } from "react";
import { Search } from "lucide-react";
import { cn } from "@/lib/utils";
import {
  costingOriginOptions,
  costingStatusOptions,
  costingYieldBands,
  type CostingYieldBand,
} from "@/features/admin/mocks";

// Client leaf for the costing filter bar (DESIGN.md Section 8, Admin Screen L):
// search, status and origin selects, and the yield-band pills with live
// selection state. Filtering is not wired yet (presentational); the ledger
// query contract will land in docs/TASKS.md from the backend agent.

const dotTones: Record<NonNullable<CostingYieldBand["dot"]>, string> = {
  success: "bg-success",
  warning: "bg-warning",
  danger: "bg-danger",
};

export function CostingFilters() {
  const [band, setBand] = useState<CostingYieldBand["id"]>("all");

  return (
    <section
      aria-label="Costing filters"
      className="flex flex-col gap-3 rounded-md border border-stone bg-white p-6 shadow-sm"
    >
      <div className="flex flex-col items-center gap-3 md:flex-row">
        <div className="relative w-full flex-1">
          <label htmlFor="costing-search" className="sr-only">
            Search costing ledger
          </label>
          <Search
            aria-hidden="true"
            className="pointer-events-none absolute left-3 top-1/2 size-5 -translate-y-1/2 text-mist"
            strokeWidth={1.5}
          />
          <input
            id="costing-search"
            type="search"
            placeholder="Search make, model, stock ref #KT-..., or chassis VIN..."
            className="h-11 w-full rounded-sm border border-stone bg-ivory pl-10 pr-4 font-body text-small text-ink placeholder:text-mist focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ink lg:h-12"
          />
        </div>

        <div className="w-full md:w-44">
          <label htmlFor="costing-status" className="sr-only">
            Status
          </label>
          <select
            id="costing-status"
            defaultValue={costingStatusOptions[0]}
            className="h-11 w-full cursor-pointer rounded-sm border border-stone bg-white px-3 font-body text-small text-ink focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ink lg:h-12"
          >
            {costingStatusOptions.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
        </div>

        <div className="w-full md:w-44">
          <label htmlFor="costing-origin" className="sr-only">
            Sourcing origin
          </label>
          <select
            id="costing-origin"
            defaultValue={costingOriginOptions[0]}
            className="h-11 w-full cursor-pointer rounded-sm border border-stone bg-white px-3 font-body text-small text-ink focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ink lg:h-12"
          >
            {costingOriginOptions.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div className="flex flex-wrap items-center justify-between gap-3 border-t border-stone/60 pt-3">
        <div role="group" aria-label="Yield band" className="flex items-center gap-1.5 overflow-x-auto">
          <span className="mr-1 font-body text-eyebrow uppercase text-mist">Yield band:</span>
          {costingYieldBands.map((bandOption) => (
            <button
              key={bandOption.id}
              type="button"
              aria-pressed={band === bandOption.id}
              onClick={() => setBand(bandOption.id)}
              className={cn(
                "inline-flex min-h-11 items-center gap-1 whitespace-nowrap rounded-sm px-2.5 font-body text-caption font-medium transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ink",
                band === bandOption.id
                  ? "bg-ink text-white"
                  : "bg-stone/40 text-slate hover:bg-stone/70",
              )}
            >
              {bandOption.dot ? (
                <span
                  aria-hidden="true"
                  className={cn("size-2 rounded-full", dotTones[bandOption.dot])}
                />
              ) : null}
              {bandOption.label}
            </button>
          ))}
        </div>
        <p className="hidden font-body text-caption text-mist sm:block">
          Sorted by: <span className="font-medium text-ink">Recency Added</span>
        </p>
      </div>
    </section>
  );
}
