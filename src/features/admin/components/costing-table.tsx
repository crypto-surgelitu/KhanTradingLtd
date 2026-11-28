import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { AdminStatusPill } from "@/features/admin/components/admin-status-pill";
import {
  costingPagination,
  costingRows,
  type CostingMarginTone,
} from "@/features/admin/mocks";

// DESIGN.md Section 8 Admin Screen L master costing table (SAMPLE rows, Section
// 0.7). Semantic table markup per AGENTS.md Section 6; the financial columns
// scroll horizontally on narrow screens and never shrink the page.

const marginChipTones: Record<CostingMarginTone, string> = {
  success: "bg-success/10 text-success",
  warning: "bg-warning/10 text-warning",
  danger: "bg-danger/10 text-danger",
};

const marginValueTones: Record<CostingMarginTone, string> = {
  success: "text-success",
  warning: "text-warning",
  danger: "text-danger",
};

const pageButtonBase =
  "inline-flex size-11 items-center justify-center rounded-sm font-body text-small font-medium transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ink lg:size-10";

export function CostingTable() {
  return (
    <section
      aria-label="Vehicle costing ledger"
      className="overflow-hidden rounded-md border border-stone bg-white shadow-sm"
    >
      <div className="overflow-x-auto">
        <table className="w-full text-left">
          <caption className="sr-only">
            Vehicle costing ledger with landed cost, asking price and margin per stock unit (SAMPLE
            data)
          </caption>
          <thead>
            <tr className="border-b border-stone">
              <th scope="col" className="px-4 py-3 font-body text-small font-semibold text-slate">
                Vehicle &amp; Stock ID
              </th>
              <th scope="col" className="px-3 py-3 text-center font-body text-small font-semibold text-slate">
                Days
              </th>
              <th scope="col" className="px-3 py-3 text-right font-body text-small font-semibold text-slate">
                Landed Cost
              </th>
              <th scope="col" className="px-3 py-3 text-right font-body text-small font-semibold text-slate">
                Asking Price
              </th>
              <th scope="col" className="px-3 py-3 text-right font-body text-small font-semibold text-slate">
                Margin / Yield
              </th>
              <th scope="col" className="px-3 py-3 text-center font-body text-small font-semibold text-slate">
                Status
              </th>
              <th scope="col" className="px-4 py-3 text-right font-body text-small font-semibold text-slate">
                Action
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-stone">
            {costingRows.map((row) => (
              <tr
                key={row.stockRef}
                className={cn(
                  "transition-colors hover:bg-stone/20",
                  row.active && "border-l-4 border-l-champagne bg-champagne-tint/30",
                )}
              >
                <td className="px-4 py-3.5">
                  <div className="flex items-center gap-3">
                    <Image
                      src={row.image}
                      alt={row.imageAlt}
                      width={512}
                      height={279}
                      sizes="48px"
                      className="h-9 w-12 shrink-0 rounded-sm border border-stone object-cover"
                    />
                    <div className="min-w-0">
                      <p className="truncate font-heading text-small font-medium text-ink">
                        {row.title}
                      </p>
                      <p className="flex items-center gap-2 font-body text-caption text-slate">
                        <span className="font-semibold text-champagne-dark">{row.stockRef}</span>
                        <span aria-hidden="true">·</span>
                        <span className="truncate">{row.origin}</span>
                      </p>
                    </div>
                  </div>
                </td>
                <td className="px-3 py-3.5 text-center">
                  <span className="inline-block rounded-sm bg-stone/60 px-2 py-0.5 font-body text-caption font-medium text-slate">
                    {row.days}
                  </span>
                </td>
                <td className="whitespace-nowrap px-3 py-3.5 text-right font-heading text-small tabular-nums text-ink">
                  {row.landed}
                </td>
                <td className="whitespace-nowrap px-3 py-3.5 text-right font-heading text-small font-medium tabular-nums text-ink">
                  {row.asking}
                </td>
                <td className="whitespace-nowrap px-3 py-3.5 text-right">
                  <div
                    className={cn(
                      "font-heading text-small font-medium tabular-nums",
                      marginValueTones[row.marginTone],
                    )}
                  >
                    {row.profit}
                  </div>
                  <span
                    className={cn(
                      "mt-1 inline-flex rounded-sm px-1.5 py-0.5 font-body text-caption font-semibold",
                      marginChipTones[row.marginTone],
                    )}
                  >
                    {row.margin}
                  </span>
                </td>
                <td className="px-3 py-3.5 text-center">
                  <AdminStatusPill label={row.status} tone={row.statusTone} />
                </td>
                <td className="px-4 py-3.5 text-right">
                  {/* TODO(KHANS TRADING Ltd / backend): open the live cost sheet when the costing query lands (docs/TASKS.md). */}
                  <button
                    type="button"
                    className="rounded-sm bg-ink px-2.5 py-1.5 font-body text-caption font-medium text-white transition-colors hover:bg-graphite focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ink"
                  >
                    {row.action}
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="flex flex-wrap items-center justify-between gap-3 border-t border-stone px-4 py-3">
        <p className="font-body text-caption text-slate">
          Showing{" "}
          <span className="font-medium text-ink">
            {costingPagination.from} to {costingPagination.to}
          </span>{" "}
          of <span className="font-medium text-ink">{costingPagination.total}</span> total vehicles
        </p>
        <nav aria-label="Costing ledger pages" className="flex items-center gap-1">
          <button type="button" aria-label="Previous page" className={cn(pageButtonBase, "border border-stone bg-white text-slate hover:bg-stone/40")}>
            <ChevronLeft aria-hidden="true" className="size-5" strokeWidth={1.5} />
          </button>
          {costingPagination.pages.map((page) => (
            <button
              key={page}
              type="button"
              aria-current={page === costingPagination.current ? "page" : undefined}
              className={cn(
                pageButtonBase,
                page === costingPagination.current
                  ? "bg-ink text-white"
                  : "border border-stone bg-white text-slate hover:bg-stone/40",
              )}
            >
              {page}
            </button>
          ))}
          <button type="button" aria-label="Next page" className={cn(pageButtonBase, "border border-stone bg-white text-slate hover:bg-stone/40")}>
            <ChevronRight aria-hidden="true" className="size-5" strokeWidth={1.5} />
          </button>
        </nav>
      </div>
    </section>
  );
}
