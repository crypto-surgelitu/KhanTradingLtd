import Link from "next/link";
import { ListPlus, MessageCircle, PlusCircle } from "lucide-react";
import { buttonVariants } from "@/components/ui/button";
import { dashboardDateLabel } from "@/features/admin/mocks";

// DESIGN.md Screen B dashboard heading block: location caption, H1, welcome
// copy, date-range chips and the quick actions.

export function DashboardToolbar() {
  return (
    <div className="flex flex-col gap-6 pb-8">
      <div className="flex flex-wrap items-end justify-between gap-4">
        <div className="flex flex-col gap-2">
          <p className="flex items-center gap-2 font-body text-small text-mist">
            Nairobi HQ Showroom <span aria-hidden="true">•</span> Operational
            Command
          </p>
          <h1 className="font-heading text-h1 lg:text-h1-lg">Dashboard</h1>
          <p className="max-w-2xl font-body text-body text-slate">
            Welcome back, Alex. Here is an overview of inventory, active deals,
            and showroom traffic today.
          </p>
        </div>

        <div className="flex items-center gap-2" role="group" aria-label="Date range">
          <button
            type="button"
            aria-current="true"
            className="min-h-11 rounded-full bg-ink px-4 font-body text-small font-medium text-white"
          >
            {dashboardDateLabel}
          </button>
          <button
            type="button"
            className="min-h-11 rounded-full border border-stone bg-white px-4 font-body text-small font-medium text-slate transition-colors hover:text-ink"
          >
            This Month
          </button>
        </div>
      </div>

      <div className="flex flex-wrap items-center gap-3">
        <Link
          href="/admin/enquiries"
          className={buttonVariants({ variant: "secondary" })}
        >
          <MessageCircle aria-hidden="true" className="mr-2 size-5" strokeWidth={1.5} />
          View enquiries
        </Link>
        <Link href="/admin/deals" className={buttonVariants({ variant: "secondary" })}>
          <ListPlus aria-hidden="true" className="mr-2 size-5" strokeWidth={1.5} />
          New deal
        </Link>
        <Link
          href="/admin/add-vehicle"
          className={buttonVariants({ variant: "primary" })}
        >
          <PlusCircle aria-hidden="true" className="mr-2 size-5" strokeWidth={1.5} />
          Add vehicle
        </Link>
      </div>
    </div>
  );
}
