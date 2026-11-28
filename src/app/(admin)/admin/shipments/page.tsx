import type { Metadata } from "next";
import Link from "next/link";
import { ChevronRight, Download, Plus } from "lucide-react";
import { AdminShell } from "@/components/layout/admin-shell";
import { ShipmentDetailDrawer } from "@/features/admin/components/shipment-detail-drawer";
import { ShipmentExplorer } from "@/features/admin/components/shipment-explorer";
import { ShipmentStats } from "@/features/admin/components/shipment-stats";
import { shipmentFilterOptions } from "@/features/admin/mocks";

export const metadata: Metadata = {
  title: "Shipments",
  description:
    "Inbound vehicle logistics, shipping vessels, customs clearance and shipment costing for KHANS TRADING Ltd staff.",
  robots: { index: false, follow: false },
};

// DESIGN.md Section 8 Admin Screen M — Shipments. Server Component with the
// shared admin shell: breadcrumb + live-feed strip, the Maritime Pipeline
// header with manifest actions, the KPI strip, then the interactive board /
// list workspace beside the sticky shipment detail drawer. Board stage names
// follow DESIGN.md Section 7.2. Data is the labelled SAMPLE mock in
// features/admin/mocks.ts; stage actions land with the backend (docs/TASKS.md).

export default function AdminShipmentsPage() {
  return (
    <AdminShell current="/admin/shipments">
      <div className="flex flex-col gap-2 pb-6">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <nav
            aria-label="Breadcrumb"
            className="flex flex-wrap items-center gap-1.5 font-body text-small text-slate"
          >
            <Link href="/admin/dashboard" className="transition-colors hover:text-ink">
              Admin
            </Link>
            <ChevronRight aria-hidden="true" className="size-4 text-mist" strokeWidth={1.5} />
            <span className="text-ink">Stock</span>
            <ChevronRight aria-hidden="true" className="size-4 text-mist" strokeWidth={1.5} />
            <span className="font-medium text-ink">Import Logistics &amp; Shipments</span>
          </nav>
          <p className="flex flex-wrap items-center gap-2 font-body text-caption text-mist">
            <span className="inline-flex items-center gap-1.5 rounded-sm bg-stone/60 px-2.5 py-1 text-slate">
              <span
                aria-hidden="true"
                className="size-1.5 rounded-full bg-success motion-safe:animate-pulse"
              />
              {shipmentFilterOptions.feedLabel}
            </span>
            <span aria-hidden="true" className="text-stone">
              |
            </span>
            <span>{shipmentFilterOptions.feedUpdated}</span>
          </p>
        </div>

        <div className="flex flex-col gap-4 pt-1 xl:flex-row xl:items-end xl:justify-between">
          <div className="max-w-3xl">
            <p className="mb-1 flex flex-wrap items-center gap-3">
              <span className="rounded-sm bg-champagne-tint px-2 py-0.5 font-body text-eyebrow uppercase text-champagne-dark">
                Maritime Pipeline
              </span>
              <span className="font-body text-caption font-medium text-mist">
                {shipmentFilterOptions.batchLabel}
              </span>
            </p>
            <h1 className="font-heading text-h1 lg:text-h1-lg">Shipments &amp; Inbound Logistics</h1>
            <p className="mt-1 max-w-2xl font-body text-small text-slate">
              Track overseas vehicle acquisitions across shipping vessels, customs clearance at
              Mombasa Port, and inland transport to Nairobi.
            </p>
          </div>
          {/* TODO(KHANS TRADING Ltd / backend): manifest export and shipment creation are wired when the shipment actions land (docs/TASKS.md). */}
          <div className="flex flex-wrap items-center gap-3">
            <button
              type="button"
              className="inline-flex h-11 items-center gap-2 rounded-sm border border-stone bg-white px-4 font-body text-button text-ink shadow-sm transition-colors hover:bg-stone/40 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ink lg:h-10"
            >
              <Download aria-hidden="true" className="size-5 text-slate" strokeWidth={1.5} />
              Export Manifest
            </button>
            <button
              type="button"
              className="inline-flex h-11 items-center gap-2 rounded-sm bg-ink px-5 font-body text-button text-white shadow-sm transition-colors hover:bg-graphite focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ink lg:h-10"
            >
              <Plus aria-hidden="true" className="size-5" strokeWidth={1.5} />
              + New Shipment
            </button>
          </div>
        </div>
      </div>

      <ShipmentStats />

      <div className="flex flex-col gap-8 pb-14 sm:pb-18 lg:pb-24 xl:flex-row">
        <ShipmentExplorer />
        <ShipmentDetailDrawer />
      </div>
    </AdminShell>
  );
}
