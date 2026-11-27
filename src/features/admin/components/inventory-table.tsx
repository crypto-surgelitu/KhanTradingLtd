import Image from "next/image";
import { MoreVertical } from "lucide-react";
import { cn } from "@/lib/utils";
import { StatusBadge } from "@/components/shared/status-badge";
import { inventoryRows } from "@/features/admin/mocks";

// DESIGN.md Screen C inventory table: checkbox, thumbnail, vehicle
// specification, price & duty, status, featured toggle, date added and the
// actions menu trigger. The table scrolls horizontally on small screens.

export function InventoryTable() {
  return (
    <form className="overflow-x-auto rounded-md border border-stone bg-white">
      {/* TODO(KHANS TRADING Ltd / backend): bulk actions (Mark as sold,
          Feature, Delete) submit here once the inventory actions land —
          see docs/TASKS.md. Row state is the designed SAMPLE selection. */}
      <table className="w-full min-w-4xl text-left">
        <thead>
          <tr className="border-b border-stone">
            <th scope="col" className="px-4 py-3 font-body text-small font-medium text-slate">
              Preview
            </th>
            <th scope="col" className="px-4 py-3 font-body text-small font-medium text-slate">
              Vehicle Specification
            </th>
            <th scope="col" className="px-4 py-3 font-body text-small font-medium text-slate">
              Price &amp; Duty
            </th>
            <th scope="col" className="px-4 py-3 font-body text-small font-medium text-slate">
              Status
            </th>
            <th scope="col" className="px-4 py-3 font-body text-small font-medium text-slate">
              Featured
            </th>
            <th scope="col" className="px-4 py-3 font-body text-small font-medium text-slate">
              Date Added
            </th>
            <th scope="col" className="px-4 py-3 font-body text-small font-medium text-slate">
              Actions
            </th>
          </tr>
        </thead>
        <tbody>
          {inventoryRows.map((row) => (
            <tr
              key={row.id}
              className={cn(
                "border-b border-stone last:border-0",
                row.selected ? "bg-champagne-tint/40" : undefined,
              )}
            >
              <td className="px-4 py-4">
                <div className="flex items-center gap-3">
                  <input
                    type="checkbox"
                    name="selected"
                    value={row.id}
                    defaultChecked={row.selected}
                    aria-label={`Select ${row.title}`}
                    className="size-4 rounded border-stone accent-ink"
                  />
                  <div className="relative h-16 w-24 shrink-0 overflow-hidden rounded-sm">
                    <Image
                      src={row.image}
                      alt={row.imageAlt}
                      fill
                      sizes="96px"
                      className="object-cover"
                    />
                  </div>
                  {row.selected ? (
                    <span className="font-body text-caption text-champagne-dark">
                      Selected
                    </span>
                  ) : null}
                </div>
              </td>
              <td className="px-4 py-4">
                <p className="font-body text-small font-medium text-ink">{row.title}</p>
                <p className="font-body text-caption text-slate">
                  {row.specs} <span aria-hidden="true">•</span> {row.reg}
                </p>
              </td>
              <td className="px-4 py-4">
                <p className="font-heading text-price tabular-nums text-ink">{row.price}</p>
                <p className="font-body text-caption text-mist">{row.dutyNote}</p>
              </td>
              <td className="px-4 py-4">
                <StatusBadge status={row.status} />
              </td>
              <td className="px-4 py-4">
                <input
                  type="checkbox"
                  role="switch"
                  name="featured"
                  value={row.id}
                  defaultChecked={row.featured}
                  aria-label={`Feature ${row.title}`}
                  className="size-5 rounded-full border-stone accent-ink"
                />
              </td>
              <td className="px-4 py-4">
                <p className="font-body text-small text-ink">{row.dateAdded}</p>
                <p className="font-body text-caption text-mist">{row.addedAgo}</p>
              </td>
              <td className="px-4 py-4">
                <button
                  type="button"
                  aria-label={`Actions for ${row.title}`}
                  className="flex size-11 items-center justify-center rounded-full text-slate transition-colors hover:bg-champagne-tint hover:text-ink"
                >
                  <MoreVertical aria-hidden="true" className="size-5" strokeWidth={1.5} />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </form>
  );
}
