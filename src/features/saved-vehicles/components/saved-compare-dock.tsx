import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Plus } from "lucide-react";
import { buttonVariants } from "@/components/ui/button";
import { CompareClearButton } from "@/features/saved-vehicles/components/compare-clear-button";
import type { SavedVehicle } from "@/features/saved-vehicles/mocks";

type SavedCompareDockProps = {
  compared: SavedVehicle[];
  maxCompare?: number;
};

// Sticky comparison dock: shows the shortlisted comparison selection and the
// hand-off to the Compare screen (DESIGN.md Section 6, Screen 8).
export function SavedCompareDock({ compared, maxCompare = 3 }: SavedCompareDockProps) {
  const remainingSlots = maxCompare - compared.length;

  return (
    <section
      aria-label="Comparison selection"
      className="pointer-events-none sticky bottom-6 z-40 w-full px-4 sm:px-6"
    >
      <div className="pointer-events-auto mx-auto flex max-w-4xl flex-col gap-4 rounded-md border border-white/10 bg-graphite p-4 text-white shadow-lg md:flex-row md:items-center md:justify-between md:p-5">
        <div className="flex w-full items-center gap-4 md:w-auto">
          <ul className="flex shrink-0 -space-x-3 overflow-hidden">
            {compared.map((vehicle) => (
              <li
                key={vehicle.id}
                className="inline-block size-12 overflow-hidden rounded-md bg-ink ring-2 ring-graphite"
              >
                <Image
                  src={vehicle.thumb}
                  alt={vehicle.thumbAlt}
                  width={48}
                  height={48}
                  className="size-full object-cover"
                />
              </li>
            ))}
            {remainingSlots > 0 ? (
              <li className="flex size-12 items-center justify-center rounded-md bg-white/10 text-mist">
                <Plus aria-hidden="true" className="size-5" strokeWidth={1.5} />
                <span className="sr-only">Free comparison slot</span>
              </li>
            ) : null}
          </ul>

          <div className="flex flex-col gap-1">
            <div className="flex flex-wrap items-center gap-2">
              <span className="font-heading text-small font-medium text-white">
                {compared.length} of {maxCompare} vehicles selected
              </span>
              <span className="inline-flex items-center rounded-sm border border-champagne/30 bg-champagne-tint/10 px-2 py-0.5 font-body text-caption font-semibold text-champagne">
                {remainingSlots} {remainingSlots === 1 ? "slot" : "slots"} remaining
              </span>
            </div>
            {compared.length > 0 ? (
              <p className="font-body text-caption text-mist">
                {compared.map((vehicle) => vehicle.compareLabel).join(" vs ")}
              </p>
            ) : null}
          </div>
        </div>

        <div className="flex w-full items-center justify-end gap-4 md:w-auto">
          <CompareClearButton />
          <Link
            href="/compare"
            className={buttonVariants({ variant: "accent", className: "gap-2" })}
          >
            <span>Compare Vehicles ({compared.length})</span>
            <ArrowRight aria-hidden="true" className="size-5" strokeWidth={1.5} />
          </Link>
        </div>
      </div>
    </section>
  );
}
