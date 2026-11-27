"use client";

import { Trash2, X } from "lucide-react";
import { buttonVariants } from "@/components/ui/button";
import { BadgeCheck, Lightbulb } from "lucide-react";

// DESIGN.md Screen C deletion dialog: the hazard notice with the safer
// "Mark as sold" alternative. Opened from the inventory bulk bar; rendered
// only while open.

type InventoryDeleteDialogProps = {
  open: boolean;
  vehicleTitle: string;
  vehicleRef?: string;
  onClose: () => void;
};

export function InventoryDeleteDialog({
  open,
  vehicleTitle,
  vehicleRef,
  onClose,
}: InventoryDeleteDialogProps) {
  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      <button
        type="button"
        aria-label="Close dialog"
        onClick={onClose}
        className="absolute inset-0 bg-ink/50"
      />
      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby="delete-dialog-title"
        className="relative w-full max-w-md rounded-lg bg-white p-6 shadow-lg"
      >
        <div className="flex items-start justify-between gap-4">
          <div className="flex items-center gap-2">
            <Trash2 aria-hidden="true" className="size-6 text-danger" strokeWidth={1.5} />
            <p className="font-body text-eyebrow uppercase text-danger">
              Deletion Hazard
              {vehicleRef ? (
                <span className="text-slate"> <span aria-hidden="true">•</span> Ref: {vehicleRef}</span>
              ) : null}
            </p>
          </div>
          <button
            type="button"
            aria-label="Close"
            onClick={onClose}
            className="flex size-11 items-center justify-center rounded-full text-slate transition-colors hover:text-ink"
          >
            <X aria-hidden="true" className="size-5" strokeWidth={1.5} />
          </button>
        </div>

        <h2 id="delete-dialog-title" className="pt-4 font-heading text-h3 lg:text-h3-lg">
          Delete vehicle from inventory?
        </h2>
        <p className="pt-2 font-body text-small text-slate">
          Are you sure you want to permanently delete {vehicleTitle}? This
          action cannot be undone and will permanently remove all 24 associated
          gallery images, Japanese inspection sheets, spec sheets, and active
          buyer interest inquiries.
        </p>

        <div className="mt-4 flex items-start gap-3 rounded-md bg-champagne-tint p-4">
          <Lightbulb aria-hidden="true" className="size-5 shrink-0 text-champagne-dark" strokeWidth={1.5} />
          <div className="flex flex-col gap-1">
            <p className="font-body text-small font-semibold text-ink">
              Safer operational alternative
            </p>
            <p className="font-body text-small text-slate">
              If this vehicle has already been purchased, consider selecting{" "}
              <span className="font-medium text-ink">&quot;Mark as sold&quot;</span>{" "}
              instead. This preserves your historical gross margin analytics,
              customs tax audit trails, and client history while instantly hiding
              it from all public storefront listings.
            </p>
          </div>
        </div>

        <div className="mt-6 flex flex-wrap items-center gap-3">
          <button
            type="button"
            onClick={onClose}
            className={buttonVariants({ variant: "secondary" })}
          >
            Cancel
          </button>
          <button type="button" className={buttonVariants({ variant: "primary" })}>
            <BadgeCheck aria-hidden="true" className="mr-2 size-5" strokeWidth={1.5} />
            Mark as sold instead
          </button>
          <button type="button" className={buttonVariants({ variant: "destructive" })}>
            <Trash2 aria-hidden="true" className="mr-2 size-5" strokeWidth={1.5} />
            Delete vehicle
          </button>
        </div>
      </div>
    </div>
  );
}
