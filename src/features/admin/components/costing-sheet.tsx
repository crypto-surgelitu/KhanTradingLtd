import { BadgeCheck, Paperclip, Shield, X } from "lucide-react";
import { AdminStatusPill } from "@/features/admin/components/admin-status-pill";
import { CostingAuditLock } from "@/features/admin/components/costing-audit-lock";
import { CostingLineItemForm } from "@/features/admin/components/costing-line-item-form";
import { costingLineItems, costingSheet } from "@/features/admin/mocks";

// DESIGN.md Section 8 Admin Screen L persistent cost-sheet drawer (SAMPLE
// content, Section 0.7): audit strip, unit financial yield card, FX lock,
// the itemized cost structure, the add-line-item actions and the audit lock.

export function CostingSheet() {
  return (
    <section
      aria-label="Cost sheet"
      className="flex flex-col gap-6 rounded-md border border-stone bg-white p-6 shadow-md xl:sticky xl:top-24"
    >
      <div className="flex items-start justify-between gap-4 border-b border-stone pb-4">
        <div className="min-w-0">
          <div className="flex flex-wrap items-center gap-2">
            <span className="rounded-sm bg-ink px-2 py-0.5 font-body text-caption font-semibold uppercase text-white">
              {costingSheet.ref}
            </span>
            <AdminStatusPill label={costingSheet.status} tone={costingSheet.statusTone} />
            <span className="font-body text-caption text-slate">{costingSheet.days}</span>
          </div>
          <h2 className="mt-1 truncate font-heading text-h3">{costingSheet.title}</h2>
          <p className="mt-0.5 flex flex-wrap items-center gap-2 font-body text-caption text-slate">
            <span>{costingSheet.source}</span>
            <span aria-hidden="true">·</span>
            <span className="font-medium text-ink">{costingSheet.vin}</span>
          </p>
        </div>
        {/* TODO(KHANS TRADING Ltd / backend): collapse the drawer when sheet selection lands (docs/TASKS.md). */}
        <button
          type="button"
          aria-label="Close cost sheet panel"
          className="flex size-11 shrink-0 items-center justify-center rounded-sm border border-stone text-slate transition-colors hover:bg-stone/40 hover:text-ink focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ink lg:size-10"
        >
          <X aria-hidden="true" className="size-5" strokeWidth={1.5} />
        </button>
      </div>

      <div className="relative overflow-hidden rounded-md border border-graphite bg-graphite p-4 text-white">
        <div className="flex items-center justify-between gap-2 border-b border-white/10 pb-3">
          <p className="font-body text-eyebrow uppercase text-champagne">Unit Financial Yield</p>
          <p className="flex items-center gap-1 font-body text-caption text-mist">
            <span aria-hidden="true" className="size-1.5 rounded-full bg-success" />
            {costingSheet.audited}
          </p>
        </div>
        <div className="mt-4 grid grid-cols-2 gap-4">
          <div>
            <p className="font-body text-caption text-mist">Total Landed Cost</p>
            <p className="mt-0.5 font-heading text-price font-semibold tabular-nums text-white">
              {costingSheet.yield.landed}
            </p>
          </div>
          <div>
            <p className="font-body text-caption text-mist">Showroom Asking Price</p>
            <p className="mt-0.5 font-heading text-price font-semibold tabular-nums text-champagne">
              {costingSheet.yield.asking}
            </p>
          </div>
          <div>
            <p className="font-body text-caption text-mist">Target Margin Yield</p>
            <p className="mt-0.5 flex items-center gap-1.5">
              <span className="font-heading text-price font-semibold tabular-nums text-success">
                {costingSheet.yield.margin}
              </span>
              <span className="rounded-sm bg-success/20 px-1.5 py-0.5 font-body text-caption font-semibold uppercase text-success">
                {costingSheet.yield.marginChip}
              </span>
            </p>
          </div>
          <div>
            <p className="font-body text-caption text-mist">Projected Gross Profit</p>
            <p className="mt-0.5 font-heading text-price font-semibold tabular-nums text-success">
              {costingSheet.yield.profit}
            </p>
          </div>
        </div>
        <div className="mt-4 flex items-center justify-between gap-2 border-t border-white/10 pt-3 font-body text-caption">
          <span className="flex items-center gap-1 text-mist">
            <Shield aria-hidden="true" className="size-4 text-champagne" strokeWidth={1.5} />
            {costingSheet.yield.breakevenLabel}
          </span>
          <span className="whitespace-nowrap font-medium text-champagne">
            {costingSheet.yield.breakeven}
          </span>
        </div>
      </div>

      <div className="flex items-center justify-between gap-3 rounded-md border border-stone/80 bg-stone/30 p-3 font-body text-caption">
        <div className="flex items-center gap-2">
          <span
            aria-hidden="true"
            className="flex size-6 shrink-0 items-center justify-center rounded-sm border border-stone bg-white font-semibold text-ink"
          >
            {costingSheet.fx.symbol}
          </span>
          <div>
            <p className="font-medium text-ink">{costingSheet.fx.title}</p>
            <p className="text-slate">{costingSheet.fx.detail}</p>
          </div>
        </div>
        <span className="whitespace-nowrap rounded-sm border border-stone bg-white px-2 py-0.5 font-medium text-ink">
          {costingSheet.fx.locked}
        </span>
      </div>

      <div className="flex flex-col">
        <div className="flex flex-wrap items-center justify-between gap-2 pb-2">
          <p className="font-body text-eyebrow uppercase text-slate">
            Itemized Cost Structure ({costingSheet.itemCount} Items)
          </p>
          <p className="font-body text-caption text-mist">{costingSheet.itemsNote}</p>
        </div>
        <ol className="flex max-h-96 flex-col gap-2 overflow-y-auto pr-1">
          {costingLineItems.map((item) => (
            <li
              key={item.index}
              className="flex flex-col gap-1 rounded-sm border border-stone/70 bg-white p-3 transition-colors hover:bg-stone/20"
            >
              <div className="flex items-start justify-between gap-3">
                <div className="min-w-0">
                  <p className="flex items-center gap-1 font-body text-caption font-semibold text-ink">
                    <span>
                      {item.index}. {item.title}
                    </span>
                    {item.verified ? (
                      <>
                        <BadgeCheck aria-hidden="true" className="size-4 shrink-0 text-success" strokeWidth={1.5} />
                        <span className="sr-only">Verified</span>
                      </>
                    ) : null}
                  </p>
                  <p className="font-body text-caption text-slate">{item.note}</p>
                </div>
                <div className="shrink-0 text-right">
                  <p className="font-heading text-small font-semibold tabular-nums text-ink">
                    {item.amount}
                  </p>
                  <p className="font-body text-caption text-mist">{item.date}</p>
                </div>
              </div>
              <div className="flex items-center justify-between gap-2 border-t border-stone/40 pt-1 font-body text-caption">
                {/* TODO(KHANS TRADING Ltd / backend): attachment download once private document storage lands (docs/TASKS.md). */}
                <span className="inline-flex min-w-0 items-center gap-1 text-champagne-dark">
                  <Paperclip aria-hidden="true" className="size-3.5 shrink-0" strokeWidth={1.5} />
                  <span className="truncate">{item.attachment}</span>
                </span>
                <span className="shrink-0 truncate text-mist">{item.reference}</span>
              </div>
            </li>
          ))}
        </ol>
      </div>

      <CostingLineItemForm />
      <CostingAuditLock />
    </section>
  );
}
