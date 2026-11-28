import type { Metadata } from "next";
import Link from "next/link";
import { ChevronRight, Download, Lock, PlusCircle, SlidersHorizontal } from "lucide-react";
import { AdminShell } from "@/components/layout/admin-shell";
import { CostingFilters } from "@/features/admin/components/costing-filters";
import { CostingSheet } from "@/features/admin/components/costing-sheet";
import { CostingStats } from "@/features/admin/components/costing-stats";
import { CostingTable } from "@/features/admin/components/costing-table";

export const metadata: Metadata = {
  title: "Vehicle Costing & Profit",
  description:
    "Vehicle costing, landed CIF costs, import duties and profit margins for KHANS TRADING Ltd staff.",
  robots: { index: false, follow: false },
};

// DESIGN.md Section 8 Admin Screen L — Vehicle Costing and Profit. Server
// Component with the shared admin shell: breadcrumb + restricted badge, the
// KPI ribbon, the 62% ledger panel and the 38% persistent cost-sheet drawer
// (docs/design/admin-costing.json). Data is the labelled SAMPLE mock in
// features/admin/mocks.ts. Costing is restricted to Owner, Manager and
// Accounts (DESIGN.md Section 7.4); the server-side role guard lands with the
// backend (docs/TASKS.md).

export default function AdminCostingPage() {
  return (
    <AdminShell current="/admin/costing">
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
            <span className="font-medium text-ink">Costing &amp; Financial Yield</span>
          </nav>
          <p className="inline-flex items-center gap-1.5 rounded-full border border-champagne/25 bg-graphite px-3 py-1 font-body text-caption font-semibold uppercase text-champagne">
            <Lock aria-hidden="true" className="size-4" strokeWidth={1.5} />
            Restricted: Owner · Manager · Accounts
          </p>
        </div>

        <div className="flex flex-wrap items-end justify-between gap-4 pt-1">
          <div>
            <h1 className="font-heading text-h1 lg:text-h1-lg">
              Vehicle Costing &amp; Profit Ledger
            </h1>
            <p className="mt-1 max-w-2xl font-body text-small text-slate">
              Track landed CIF costs, import duties, reconditioning line items, asking prices, and
              realized gross margins.
            </p>
          </div>
          {/* TODO(KHANS TRADING Ltd / backend): export, origin filtering and cost-item creation are wired when the costing actions land (docs/TASKS.md). */}
          <div className="flex flex-wrap items-center gap-3">
            <button
              type="button"
              className="inline-flex h-11 items-center gap-2 rounded-sm border border-stone bg-white px-4 font-body text-button text-ink shadow-sm transition-colors hover:bg-stone/40 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ink lg:h-12"
            >
              <Download aria-hidden="true" className="size-5" strokeWidth={1.5} />
              Export Cost Analysis
              <span className="rounded-sm bg-stone/60 px-1.5 py-0.5 font-body text-caption font-medium text-slate">
                CSV/PDF
              </span>
            </button>
            <button
              type="button"
              className="inline-flex h-11 items-center gap-2 rounded-sm border border-stone bg-white px-4 font-body text-button text-ink shadow-sm transition-colors hover:bg-stone/40 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ink lg:h-12"
            >
              <SlidersHorizontal aria-hidden="true" className="size-5" strokeWidth={1.5} />
              Filter Origin
            </button>
            <button
              type="button"
              className="inline-flex h-11 items-center gap-2 rounded-sm bg-ink px-6 font-body text-button text-white shadow-sm transition-colors hover:bg-graphite focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ink lg:h-12"
            >
              <PlusCircle aria-hidden="true" className="size-5" strokeWidth={1.5} />
              Add Cost Item
            </button>
          </div>
        </div>
      </div>

      <CostingStats />

      <div className="grid grid-cols-1 items-start gap-8 pb-14 sm:pb-18 lg:pb-24 xl:grid-cols-12">
        <div className="flex flex-col gap-6 xl:col-span-7">
          <CostingFilters />
          <CostingTable />
        </div>
        <div className="xl:col-span-5">
          <CostingSheet />
        </div>
      </div>
    </AdminShell>
  );
}
