import Image from "next/image";
import { ImagePlus, RefreshCw, X } from "lucide-react";
import { ShipmentCosts } from "@/features/admin/components/shipment-costs";
import { ShipmentDocuments } from "@/features/admin/components/shipment-documents";
import { ShipmentMilestones } from "@/features/admin/components/shipment-milestones";
import { shipmentDetail } from "@/features/admin/mocks";

// Persistent shipment detail drawer (DESIGN.md Section 8, Admin Screen M):
// audit strip, vehicle summary, logistics milestones, documents, cost lines
// and the stage actions. Sticky beside the board on desktop, stacked below it
// on mobile. Data is the labelled SAMPLE mock in features/admin/mocks.ts.

export function ShipmentDetailDrawer() {
  return (
    <aside
      aria-label="Shipment detail"
      className="flex w-full shrink-0 flex-col self-start overflow-hidden rounded-md border border-stone bg-white shadow-md xl:sticky xl:top-24 xl:max-w-md"
    >
      <div className="border-b border-stone bg-stone/20 p-6">
        <div className="mb-2 flex items-center justify-between gap-2">
          <div className="flex flex-wrap items-center gap-2">
            <span className="font-body text-eyebrow font-semibold text-champagne-dark">
              {shipmentDetail.ref}
            </span>
            <span className="rounded-full bg-champagne-tint px-2 py-0.5 font-body text-caption font-semibold text-champagne-dark">
              {shipmentDetail.stageChip}
            </span>
          </div>
          {/* TODO(KHANS TRADING Ltd / backend): collapse the drawer when shipment selection lands (docs/TASKS.md). */}
          <button
            type="button"
            aria-label="Close shipment detail"
            className="flex size-11 shrink-0 items-center justify-center rounded-full text-slate transition-colors hover:bg-stone/40 hover:text-ink focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ink lg:size-10"
          >
            <X aria-hidden="true" className="size-5" strokeWidth={1.5} />
          </button>
        </div>
        <h2 className="font-heading text-h3 leading-tight text-ink">{shipmentDetail.title}</h2>
        <p className="mt-0.5 font-body text-caption text-mist">{shipmentDetail.lotVin}</p>
      </div>

      <div className="flex flex-col gap-8 p-6">
        <div className="flex items-center gap-3 rounded-md bg-ivory p-3">
          <Image
            src={shipmentDetail.image}
            alt={shipmentDetail.imageAlt}
            width={shipmentDetail.imageW}
            height={shipmentDetail.imageH}
            sizes="96px"
            className="h-20 w-24 shrink-0 rounded-sm object-cover"
          />
          <div className="min-w-0 flex-1">
            <div className="flex items-center justify-between gap-2">
              <span className="font-body text-eyebrow uppercase text-slate">
                {shipmentDetail.stockUnit}
              </span>
              <span className="shrink-0 font-body text-caption font-semibold text-success">
                {shipmentDetail.kraChip}
              </span>
            </div>
            <h3 className="mt-0.5 truncate font-heading text-body font-semibold text-ink">
              {shipmentDetail.vehicleTitle}
            </h3>
            <p className="font-body text-caption text-slate">{shipmentDetail.vehicleSub}</p>
            <p className="mt-1 font-heading text-body font-semibold tabular-nums text-ink">
              {shipmentDetail.asking}
            </p>
          </div>
        </div>

        <ShipmentMilestones />
        <ShipmentDocuments />
        <ShipmentCosts />
      </div>

      {/* TODO(KHANS TRADING Ltd / backend): mark-arrived and stage actions land with the shipment mutations (docs/TASKS.md). */}
      <div className="flex flex-col gap-2 border-t border-stone p-6">
        <button
          type="button"
          className="inline-flex h-11 items-center justify-center gap-2 rounded-sm bg-ink px-4 font-body text-button text-white shadow-sm transition-colors hover:bg-graphite focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ink"
        >
          <ImagePlus aria-hidden="true" className="size-5 text-champagne" strokeWidth={1.5} />
          {shipmentDetail.primaryAction}
        </button>
        <button
          type="button"
          className="inline-flex h-11 items-center justify-center gap-2 rounded-sm bg-stone/40 px-4 font-body text-small text-ink transition-colors hover:bg-stone/70 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ink"
        >
          <RefreshCw aria-hidden="true" className="size-4 text-slate" strokeWidth={1.5} />
          {shipmentDetail.secondaryAction}
        </button>
      </div>
    </aside>
  );
}
