"use client";

import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";

// DESIGN.md Section 4 empty state actions: continue browsing, or ask Khans to
// source a specific vehicle.

export function SavedEmptyCta() {
  return (
    <div className="flex w-full flex-col items-center justify-center gap-4 sm:flex-row">
      <Link
        href="/vehicles"
        className={buttonVariants({ variant: "primary", className: "w-full sm:w-auto" })}
      >
        Browse vehicles
      </Link>
      <Link
        href="/request-vehicle"
        className={buttonVariants({ variant: "secondary", className: "w-full sm:w-auto" })}
      >
        Request a vehicle
      </Link>
    </div>
  );
}
