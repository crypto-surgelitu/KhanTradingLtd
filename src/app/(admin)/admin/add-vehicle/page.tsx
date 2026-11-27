import type { Metadata } from "next";
import Link from "next/link";
import { ChevronRight, ExternalLink } from "lucide-react";
import { AdminShell } from "@/components/layout/admin-shell";
import { buttonVariants } from "@/components/ui/button";
import { AddVehicleForm } from "@/features/admin/components/add-vehicle-form";

export const metadata: Metadata = {
  title: "Add Vehicle",
  description: "Create a new inventory listing for KHANS TRADING Ltd.",
  robots: { index: false, follow: false },
};

// DESIGN.md Section 8 Admin Screen D — Add Vehicle. Server Component with the
// shared admin shell; all form interactivity lives in the single client leaf
// AddVehicleForm (presentational — no submit wiring yet).

export default function AdminAddVehiclePage() {
  return (
    <AdminShell current="/admin/add-vehicle">
      <div className="flex flex-col gap-6 pb-8">
        <nav aria-label="Breadcrumb" className="flex items-center gap-1.5 font-body text-small text-slate">
          <Link href="/admin/dashboard" className="transition-colors hover:text-ink">
            Admin
          </Link>
          <ChevronRight aria-hidden="true" className="size-4 text-mist" strokeWidth={1.5} />
          <Link href="/admin/inventory" className="transition-colors hover:text-ink">
            Stock
          </Link>
          <ChevronRight aria-hidden="true" className="size-4 text-mist" strokeWidth={1.5} />
          <span className="font-medium text-ink">Add Vehicle</span>
        </nav>

        <div className="flex flex-wrap items-end justify-between gap-4">
          <div className="flex flex-col gap-2">
            <h1 className="font-heading text-h1 lg:text-h1-lg">Add new vehicle</h1>
            <p className="max-w-2xl font-body text-body text-slate">
              Create a new inventory listing for the showroom and digital
              catalog.
            </p>
          </div>
          <Link
            href="/vehicles"
            target="_blank"
            className={buttonVariants({ variant: "secondary" })}
          >
            Preview on site
            <ExternalLink aria-hidden="true" className="ml-2 size-5" strokeWidth={1.5} />
          </Link>
        </div>
      </div>

      <AddVehicleForm />
    </AdminShell>
  );
}
