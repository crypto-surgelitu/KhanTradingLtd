import type { Metadata } from "next";
import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { AdminShell } from "@/components/layout/admin-shell";
import { CustomersTable } from "@/features/admin/components/customers-table";
import { CustomersToolbar } from "@/features/admin/components/customers-toolbar";

export const metadata: Metadata = {
  title: "Customers",
  description: "Customer directory and VIP CRM for KHANS TRADING Ltd staff.",
  robots: { index: false, follow: false },
};

// DESIGN.md Section 8 Admin Screen J — Customers (list). Server Component
// with the shared admin shell; row data is the labelled SAMPLE mock in
// features/admin/mocks.ts. Filters, search and pagination are presentational
// native controls pending the customers query (docs/TASKS.md).

export default function AdminCustomersPage() {
  return (
    <AdminShell current="/admin/customers" topBarTitle="Customers Directory">
      <nav aria-label="Breadcrumb" className="flex flex-wrap items-center gap-1.5 pb-4 font-body text-small text-slate">
        <Link href="/admin/dashboard" className="transition-colors hover:text-ink">
          Admin
        </Link>
        <ChevronRight aria-hidden="true" className="size-4 text-mist" strokeWidth={1.5} />
        <span className="text-ink">Sales</span>
        <ChevronRight aria-hidden="true" className="size-4 text-mist" strokeWidth={1.5} />
        <span className="font-medium text-ink">Customers Directory</span>
      </nav>

      <CustomersToolbar />
      <CustomersTable />
    </AdminShell>
  );
}
