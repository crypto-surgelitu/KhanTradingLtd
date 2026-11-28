import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, ChevronRight } from "lucide-react";
import { AdminShell } from "@/components/layout/admin-shell";
import { CustomerDealCard } from "@/features/admin/components/customer-deal-card";
import { CustomerPreferences } from "@/features/admin/components/customer-preferences";
import { CustomerProfileHeader } from "@/features/admin/components/customer-profile-header";
import { CustomerTabs } from "@/features/admin/components/customer-tabs";
import { CustomerTimeline } from "@/features/admin/components/customer-timeline";
import { customerDetailProfile } from "@/features/admin/mocks";

export const metadata: Metadata = {
  title: "Customer Detail",
  description: "Customer profile and interaction history for KHANS TRADING Ltd staff.",
  robots: { index: false, follow: false },
};

// DESIGN.md Section 8 Admin Screen J — Customer detail. Server Component
// with the shared admin shell; interactive leaves are CustomerTabs (tab
// switching) and CustomerActions (actions menu). All record data is the
// labelled SAMPLE mock in features/admin/mocks.ts.

export default function AdminCustomerDetailPage() {
  return (
    <AdminShell current="/admin/customers" topBarTitle="Customer Profile">
      <nav aria-label="Breadcrumb" className="flex flex-wrap items-center gap-1.5 pb-4 font-body text-small text-slate">
        <Link href="/admin/dashboard" className="transition-colors hover:text-ink">
          Admin
        </Link>
        <ChevronRight aria-hidden="true" className="size-4 text-mist" strokeWidth={1.5} />
        <span className="text-ink">Sales</span>
        <ChevronRight aria-hidden="true" className="size-4 text-mist" strokeWidth={1.5} />
        <Link href="/admin/customers" className="transition-colors hover:text-ink">
          Customers
        </Link>
        <ChevronRight aria-hidden="true" className="size-4 text-mist" strokeWidth={1.5} />
        <span className="font-medium text-ink">
          {customerDetailProfile.name} ({customerDetailProfile.customerId})
        </span>
      </nav>

      <Link
        href="/admin/customers"
        className="mb-6 inline-flex min-h-11 items-center gap-2 font-body text-small font-medium text-ink underline decoration-champagne decoration-1 underline-offset-4 transition-colors hover:text-champagne-dark"
      >
        <ArrowLeft aria-hidden="true" className="size-5" strokeWidth={1.5} />
        Back to Customers
      </Link>

      <CustomerProfileHeader />

      <CustomerTabs
        overview={
          <>
            <CustomerDealCard />
            <CustomerTimeline />
            <CustomerPreferences />
          </>
        }
      />
    </AdminShell>
  );
}
