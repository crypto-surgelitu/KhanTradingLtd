import type { Metadata } from "next";
import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { AdminShell } from "@/components/layout/admin-shell";
import { DealsBoard } from "@/features/admin/components/deals-board";
import { DealsSummary } from "@/features/admin/components/deals-summary";
import { DealsToolbar } from "@/features/admin/components/deals-toolbar";

export const metadata: Metadata = {
  title: "Deals Pipeline",
  description: "Vehicle deal pipeline board for KHANS TRADING Ltd staff.",
  robots: { index: false, follow: false },
};

// DESIGN.md Section 8 Admin Screen G — Deals Pipeline. Server Component with
// the shared admin shell; board data is the labelled SAMPLE mock in
// features/admin/mocks.ts. Drag-and-drop and the row action menus are not
// wired yet (presentational board).

export default function AdminDealsPage() {
  return (
    <AdminShell current="/admin/deals">
      <nav aria-label="Breadcrumb" className="flex flex-wrap items-center gap-1.5 pb-4 font-body text-small text-slate">
        <Link href="/admin/dashboard" className="transition-colors hover:text-ink">
          Admin
        </Link>
        <ChevronRight aria-hidden="true" className="size-4 text-mist" strokeWidth={1.5} />
        <span className="text-ink">Sales</span>
        <ChevronRight aria-hidden="true" className="size-4 text-mist" strokeWidth={1.5} />
        <span className="font-medium text-ink">Deals Pipeline</span>
      </nav>

      <div className="flex flex-wrap items-end justify-between gap-4 pb-8">
        <div className="flex flex-col gap-2">
          <h1 className="font-heading text-h1 lg:text-h1-lg">Deals Pipeline</h1>
          <p className="max-w-3xl font-body text-body text-slate">
            Operational management of vehicle reservation, structured asset
            financing, KRA compliance, and scheduled handover lifecycles.
          </p>
        </div>
        <span className="inline-flex items-center rounded-full bg-success/10 px-2.5 py-1 font-body text-caption font-medium text-success">
          Live Sync Active
        </span>
      </div>

      <DealsSummary />
      <DealsToolbar />
      <DealsBoard />
    </AdminShell>
  );
}
