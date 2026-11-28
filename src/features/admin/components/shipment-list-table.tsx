import { Fragment, useState } from "react";
import { ChevronDown, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { shipmentListRows, type StatusTone } from "@/features/admin/mocks";

// The List view of the shipments workspace (DESIGN.md Section 8, Admin Screen
// M): a semantic table of the pipeline with expandable shipment rows. The
// financial-style columns scroll horizontally on narrow screens; the status
// pill always carries text, never colour alone (DESIGN.md Section 11).

const statusTones: Record<StatusTone, string> = {
  success: "bg-success/10 text-success",
  warning: "bg-warning/10 text-warning",
  info: "bg-info/10 text-info",
  ink: "bg-ink text-white",
  muted: "bg-stone text-slate",
};

export function ShipmentListTable() {
  const [expandedId, setExpandedId] = useState<string | null>(null);

  return (
    <section aria-label="Shipments list" className="overflow-hidden rounded-md border border-stone bg-white shadow-sm">
      <div className="overflow-x-auto">
        <table className="w-full text-left">
          <caption className="sr-only">
            Shipments pipeline list with reference, vehicle, carrier, origin, ETA and stage (SAMPLE
            data)
          </caption>
          <thead>
            <tr className="border-b border-stone">
              <th scope="col" className="px-4 py-3 font-body text-small font-semibold text-slate">
                Reference
              </th>
              <th scope="col" className="px-3 py-3 font-body text-small font-semibold text-slate">
                Vehicle
              </th>
              <th scope="col" className="px-3 py-3 font-body text-small font-semibold text-slate">
                Carrier / Vessel
              </th>
              <th scope="col" className="px-3 py-3 font-body text-small font-semibold text-slate">
                Origin
              </th>
              <th scope="col" className="px-3 py-3 font-body text-small font-semibold text-slate">
                ETA / Milestone
              </th>
              <th scope="col" className="px-3 py-3 font-body text-small font-semibold text-slate">
                Status
              </th>
              <th scope="col" className="px-4 py-3 text-right font-body text-small font-semibold text-slate">
                <span className="sr-only">Expand row</span>
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-stone">
            {shipmentListRows.map((row) => {
              const expanded = expandedId === row.id;
              return (
                <Fragment key={row.id}>
                  <tr className={cn("transition-colors hover:bg-stone/20", expanded && "bg-champagne-tint/20")}>
                    <td className="whitespace-nowrap px-4 py-3.5 font-body text-caption font-semibold text-ink">
                      {row.reference}
                    </td>
                    <td className="px-3 py-3.5">
                      <span className="block truncate font-body text-small font-medium text-ink">
                        {row.vehicle}
                      </span>
                      <span className="block truncate font-body text-caption text-mist">{row.sub}</span>
                    </td>
                    <td className="whitespace-nowrap px-3 py-3.5 font-body text-caption text-slate">
                      {row.carrier}
                    </td>
                    <td className="whitespace-nowrap px-3 py-3.5 font-body text-caption text-slate">
                      {row.origin}
                    </td>
                    <td className="whitespace-nowrap px-3 py-3.5 font-body text-caption text-slate">
                      {row.eta}
                    </td>
                    <td className="px-3 py-3.5">
                      <span
                        aria-label={`Status: ${row.stage}`}
                        className={cn(
                          "inline-flex items-center rounded-full px-2.5 py-1 font-body text-caption",
                          statusTones[row.statusTone],
                        )}
                      >
                        {row.stage}
                      </span>
                    </td>
                    <td className="px-4 py-3.5 text-right">
                      <button
                        type="button"
                        aria-expanded={expanded}
                        aria-controls={`shipment-row-${row.id}`}
                        aria-label={`${expanded ? "Collapse" : "Expand"} ${row.vehicle}`}
                        onClick={() => setExpandedId(expanded ? null : row.id)}
                        className="inline-flex size-11 items-center justify-center rounded-sm text-slate transition-colors hover:bg-stone/40 hover:text-ink focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ink lg:size-10"
                      >
                        {expanded ? (
                          <ChevronDown aria-hidden="true" className="size-5" strokeWidth={1.5} />
                        ) : (
                          <ChevronRight aria-hidden="true" className="size-5" strokeWidth={1.5} />
                        )}
                      </button>
                    </td>
                  </tr>
                  {expanded ? (
                    <tr id={`shipment-row-${row.id}`} className="bg-ivory">
                      <td colSpan={7} className="px-4 py-3 font-body text-small text-slate">
                        {row.note}
                      </td>
                    </tr>
                  ) : null}
                </Fragment>
              );
            })}
          </tbody>
        </table>
      </div>
    </section>
  );
}
