import Link from "next/link";
import { SearchX } from "lucide-react";
import { buttonVariants } from "@/components/ui/button";

// DESIGN.md Section 4 empty state (line icon, one sentence, actions) with the
// Screen 2 specific actions: clear the filters or request the vehicle.

export function VehicleListEmpty() {
  return (
    <div className="flex flex-col items-center gap-4 rounded-md border border-stone bg-white px-6 py-16 text-center">
      <SearchX aria-hidden="true" className="size-10 text-mist" strokeWidth={1.5} />
      <p className="font-body text-body-l text-slate">
        No vehicles match your filters.
      </p>
      <div className="flex flex-wrap items-center justify-center gap-3">
        <Link href="/vehicles" className={buttonVariants({ variant: "secondary" })}>
          Clear filters
        </Link>
        <Link
          href="/request-vehicle"
          className={buttonVariants({ variant: "primary" })}
        >
          Request this vehicle
        </Link>
      </div>
    </div>
  );
}
