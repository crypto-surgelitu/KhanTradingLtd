import { AlertTriangle, List, Plus, Search, Table2 } from "lucide-react";
import { buttonVariants } from "@/components/ui/button";
import { dealsConciergeOptions, dealsStageOptions } from "@/features/admin/mocks";

// DESIGN.md Screen G board toolbar: search, stage and concierge filters, the
// overdue toggle, Board/List view switch and the New Deal action. Controls
// are presentational native form elements — TODO(KHANS TRADING Ltd / backend):
// wire to the deals list query contract in docs/TASKS.md.

const selectClasses =
  "h-11 w-full appearance-none rounded-sm border border-stone bg-white px-3 font-body text-small text-ink shadow-sm transition-colors hover:border-slate/60 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ink";

export function DealsToolbar() {
  return (
    <div className="flex flex-wrap items-center gap-3 pb-8">
      <div className="relative flex min-w-0 flex-1 items-center">
        <label htmlFor="deals-search" className="sr-only">
          Search deals
        </label>
        <Search
          aria-hidden="true"
          className="pointer-events-none absolute left-3 size-5 text-mist"
          strokeWidth={1.5}
        />
        <input
          id="deals-search"
          type="search"
          className={`${selectClasses} pl-10`}
        />
      </div>

      <label htmlFor="deals-stage" className="sr-only">
        Stage
      </label>
      <select id="deals-stage" defaultValue={dealsStageOptions[0]} className={`${selectClasses} w-auto`}>
        {dealsStageOptions.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>

      <label htmlFor="deals-concierge" className="sr-only">
        Concierge
      </label>
      <select id="deals-concierge" defaultValue={dealsConciergeOptions[0]} className={`${selectClasses} w-auto`}>
        {dealsConciergeOptions.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>

      <label
        htmlFor="deals-overdue"
        className="flex min-h-11 cursor-pointer select-none items-center gap-2 rounded-sm border border-stone bg-white px-3 font-body text-small text-ink"
      >
        <input
          id="deals-overdue"
          name="overdue"
          type="checkbox"
          className="size-4 rounded border-stone accent-ink"
        />
        <AlertTriangle aria-hidden="true" className="size-4 text-warning" strokeWidth={1.5} />
        Overdue Only
        <span className="inline-flex items-center rounded-full bg-warning/10 px-2 py-0.5 font-body text-caption font-medium text-warning">
          2
        </span>
      </label>

      <div className="flex items-center border border-stone bg-white p-1 shadow-sm" role="group" aria-label="View style">
        <button
          type="button"
          aria-label="Board view"
          aria-current="true"
          className="flex size-11 items-center justify-center rounded-sm bg-ink text-white lg:size-10"
        >
          <Table2 aria-hidden="true" className="size-5" strokeWidth={1.5} />
        </button>
        <button
          type="button"
          aria-label="List view"
          className="flex size-11 items-center justify-center rounded-sm text-slate transition-colors hover:text-ink lg:size-10"
        >
          <List aria-hidden="true" className="size-5" strokeWidth={1.5} />
        </button>
      </div>

      <button type="button" className={buttonVariants({ variant: "primary" })}>
        <Plus aria-hidden="true" className="mr-2 size-5" strokeWidth={1.5} />
        New Deal
      </button>
    </div>
  );
}
