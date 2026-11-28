"use client";

import { useState } from "react";
import { BadgeCheck } from "lucide-react";
import { costingSheet } from "@/features/admin/mocks";

// Client leaf: the audit lock switch on the cost sheet (DESIGN.md Section 8,
// Admin Screen L). Toggling is not wired yet (presentational); the audited-by
// line shows who locked the sheet and when.

export function CostingAuditLock() {
  const [locked, setLocked] = useState(costingSheet.audit.locked);

  return (
    <div className="flex items-center justify-between gap-3 rounded-sm border border-stone/80 bg-stone/20 p-3 font-body text-caption">
      <div className="flex min-w-0 items-center gap-2">
        <BadgeCheck
          aria-hidden="true"
          className="size-5 shrink-0 text-champagne-dark"
          strokeWidth={1.5}
        />
        <div className="min-w-0">
          <p className="truncate font-medium text-ink">{costingSheet.audit.title}</p>
          <p className="truncate text-slate">{costingSheet.audit.detail}</p>
        </div>
      </div>
      <label className="flex shrink-0 cursor-pointer items-center">
        <span className="sr-only">Lock cost sheet</span>
        <input
          type="checkbox"
          role="switch"
          checked={locked}
          onChange={(event) => setLocked(event.target.checked)}
          className="peer sr-only"
        />
        <span
          aria-hidden="true"
          className="relative h-5 w-9 rounded-full bg-stone after:absolute after:left-0.5 after:top-0.5 after:size-4 after:rounded-full after:bg-white peer-checked:bg-ink peer-checked:after:translate-x-4 peer-focus-visible:outline-2 peer-focus-visible:outline-offset-2 peer-focus-visible:outline-ink motion-safe:after:transition-transform"
        />
      </label>
    </div>
  );
}
