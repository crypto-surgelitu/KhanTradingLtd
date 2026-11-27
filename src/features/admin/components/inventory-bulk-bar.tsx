"use client";

import { useState } from "react";
import { ListChecks, Star, Trash2, X } from "lucide-react";
import { InventoryDeleteDialog } from "@/features/admin/components/inventory-delete-dialog";
import { inventoryRows } from "@/features/admin/mocks";

// DESIGN.md Screen C bulk-actions bar for the selected row(s), with the
// deletion dialog behind its Delete action. Selection state mirrors the
// export's SAMPLE selected row; wiring to real bulk actions is pending
// (docs/TASKS.md).

export function InventoryBulkBar() {
  const [dialogOpen, setDialogOpen] = useState(false);
  const selected = inventoryRows.find((row) => row.selected);
  if (!selected) return null;

  return (
    <>
      <div className="flex flex-wrap items-center gap-3 rounded-md border border-champagne/30 bg-champagne-tint/60 p-4">
        <p className="flex flex-wrap items-center gap-2 font-body text-small text-slate">
          Selected:
          <span className="font-medium text-ink">
            {selected.title.replace(/ R-Dynamic$/, "")}
          </span>
        </p>
        <div className="flex flex-wrap items-center gap-2">
          <button
            type="button"
            className="inline-flex min-h-11 items-center gap-2 rounded-sm border border-ink bg-transparent px-4 font-body text-button text-ink transition-colors hover:bg-ink hover:text-white"
          >
            <ListChecks aria-hidden="true" className="size-5" strokeWidth={1.5} />
            Mark as sold
          </button>
          <button
            type="button"
            className="inline-flex min-h-11 items-center gap-2 rounded-sm border border-ink bg-transparent px-4 font-body text-button text-ink transition-colors hover:bg-ink hover:text-white"
          >
            <Star aria-hidden="true" className="size-5" strokeWidth={1.5} />
            Feature
          </button>
          <button
            type="button"
            onClick={() => setDialogOpen(true)}
            className="inline-flex min-h-11 items-center gap-2 rounded-sm bg-danger px-4 font-body text-button text-white transition-colors hover:bg-danger/90"
          >
            <Trash2 aria-hidden="true" className="size-5" strokeWidth={1.5} />
            Delete
          </button>
          <button
            type="button"
            className="inline-flex min-h-11 items-center gap-2 px-2 font-body text-small font-medium text-slate underline underline-offset-4 transition-colors hover:text-ink"
          >
            <X aria-hidden="true" className="size-4" strokeWidth={1.5} />
            Deselect
          </button>
        </div>
      </div>

      <InventoryDeleteDialog
        open={dialogOpen}
        vehicleTitle={selected.title}
        vehicleRef={selected.ref}
        onClose={() => setDialogOpen(false)}
      />
    </>
  );
}
