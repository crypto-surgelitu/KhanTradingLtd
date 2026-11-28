import { AlertTriangle, LayoutGrid, List, Search } from "lucide-react";
import { cn } from "@/lib/utils";
import { shipmentFilterOptions } from "@/features/admin/mocks";

// Filter strip for the shipments workspace (DESIGN.md Section 8, Admin Screen
// M): search, origin and carrier selects, the "Delayed Only" quick filter and
// the Board / List view switcher. Rendered inside the ShipmentExplorer client
// leaf, so the interactive state lives there.

type ShipmentToolbarProps = {
  view: "board" | "list";
  onViewChange: (view: "board" | "list") => void;
  delayedOnly: boolean;
  onDelayedToggle: () => void;
};

const controlClass =
  "h-11 rounded-sm border border-stone bg-ivory px-3 font-body text-small text-ink placeholder:text-mist focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ink lg:h-10";

export function ShipmentToolbar({
  view,
  onViewChange,
  delayedOnly,
  onDelayedToggle,
}: ShipmentToolbarProps) {
  return (
    <section
      aria-label="Shipment filters"
      className="flex flex-col gap-4 rounded-md border border-stone bg-white p-3 shadow-sm lg:flex-row lg:items-center lg:justify-between"
    >
      <div className="flex w-full flex-wrap items-center gap-2.5 lg:w-auto">
        <div className="relative flex w-full items-center sm:w-72">
          <label htmlFor="shipment-search" className="sr-only">
            Filter shipments
          </label>
          <Search
            aria-hidden="true"
            className="pointer-events-none absolute left-3 size-5 text-mist"
            strokeWidth={1.5}
          />
          <input
            id="shipment-search"
            type="search"
            placeholder={shipmentFilterOptions.searchPlaceholder}
            className={cn(controlClass, "w-full pl-9")}
          />
        </div>

        <div>
          <label htmlFor="shipment-origin" className="sr-only">
            Sourcing origin
          </label>
          <select id="shipment-origin" defaultValue={shipmentFilterOptions.origins[0]} className={controlClass}>
            {shipmentFilterOptions.origins.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label htmlFor="shipment-carrier" className="sr-only">
            Carrier or shipping line
          </label>
          <select id="shipment-carrier" defaultValue={shipmentFilterOptions.carriers[0]} className={controlClass}>
            {shipmentFilterOptions.carriers.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
        </div>

        <button
          type="button"
          aria-pressed={delayedOnly}
          onClick={onDelayedToggle}
          className={cn(
            "inline-flex h-11 items-center gap-1.5 rounded-sm px-3 font-body text-small transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ink lg:h-10",
            delayedOnly ? "bg-warning/10 text-warning" : "bg-stone/30 text-slate hover:bg-stone/60",
          )}
        >
          <AlertTriangle aria-hidden="true" className="size-4" strokeWidth={1.5} />
          {shipmentFilterOptions.delayedLabel}
        </button>
      </div>

      <div className="flex w-full items-center justify-between gap-4 lg:w-auto">
        <p className="hidden font-body text-caption text-mist xl:inline-block">
          Showing <span className="font-semibold text-ink">{shipmentFilterOptions.showingCount}</span>{" "}
          {shipmentFilterOptions.showingNote}
        </p>
        <div
          role="group"
          aria-label="Shipment view"
          className="flex items-center rounded-sm bg-stone/40 p-1"
        >
          <button
            type="button"
            aria-pressed={view === "board"}
            onClick={() => onViewChange("board")}
            className={cn(
              "inline-flex items-center gap-1.5 rounded-sm px-3.5 py-1.5 font-body text-caption font-semibold transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ink",
              view === "board" ? "bg-ink text-white" : "text-slate hover:text-ink",
            )}
          >
            <LayoutGrid aria-hidden="true" className="size-4" strokeWidth={1.5} />
            Board
          </button>
          <button
            type="button"
            aria-pressed={view === "list"}
            onClick={() => onViewChange("list")}
            className={cn(
              "inline-flex items-center gap-1.5 rounded-sm px-3.5 py-1.5 font-body text-caption font-semibold transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ink",
              view === "list" ? "bg-ink text-white" : "text-slate hover:text-ink",
            )}
          >
            <List aria-hidden="true" className="size-4" strokeWidth={1.5} />
            List
          </button>
        </div>
      </div>
    </section>
  );
}
