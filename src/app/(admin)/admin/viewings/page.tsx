import type { Metadata } from "next";
import Link from "next/link";
import { ChevronRight, Plus } from "lucide-react";
import { AdminShell } from "@/components/layout/admin-shell";
import { buttonVariants } from "@/components/ui/button";
import { ViewingsCalendar } from "@/features/admin/components/viewings-calendar";
import { ViewingsDrawer } from "@/features/admin/components/viewings-drawer";
import { ViewingsToolbar } from "@/features/admin/components/viewings-toolbar";

export const metadata: Metadata = {
  title: "Viewings Calendar",
  description: "Viewings and test-drive scheduling for KHANS TRADING Ltd staff.",
  robots: { index: false, follow: false },
};

// DESIGN.md Section 8 Admin Screen I — Viewings Calendar. Server Component
// with the shared admin shell (custom top-bar title and the Add Booking
// action); calendar and drawer data is the labelled SAMPLE mock in
// features/admin/mocks.ts. Range navigation and drawer selection are not
// wired yet (presentational).

export default function AdminViewingsPage() {
  return (
    <AdminShell
      current="/admin/viewings"
      topBarTitle="Viewings & Test Drives Calendar"
      action={
        <button
          type="button"
          className={buttonVariants({ variant: "primary" })}
        >
          <Plus aria-hidden="true" className="mr-2 size-5" strokeWidth={1.5} />
          Add Booking
        </button>
      }
    >
      <nav aria-label="Breadcrumb" className="flex flex-wrap items-center gap-1.5 pb-4 font-body text-small text-slate">
        <Link href="/admin/dashboard" className="transition-colors hover:text-ink">
          Admin
        </Link>
        <ChevronRight aria-hidden="true" className="size-4 text-mist" strokeWidth={1.5} />
        <span className="text-ink">Sales</span>
        <ChevronRight aria-hidden="true" className="size-4 text-mist" strokeWidth={1.5} />
        <span className="font-medium text-ink">Viewings &amp; Test Drives Calendar</span>
      </nav>

      <ViewingsToolbar />

      <div className="grid grid-cols-1 gap-8 pb-14 sm:pb-18 lg:pb-24 xl:grid-cols-12">
        <div className="xl:col-span-8">
          <ViewingsCalendar />
        </div>
        <div className="xl:col-span-4">
          <ViewingsDrawer />
        </div>
      </div>
    </AdminShell>
  );
}
