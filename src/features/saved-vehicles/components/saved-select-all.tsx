"use client";

import { useState } from "react";

// TODO(saved-vehicles): batch selection is local UI state only; wire it to the
// real compare selection (and the 3-vehicle cap) when the saved-list backend
// contract lands.

export function SavedSelectAll() {
  const [checked, setChecked] = useState(false);

  return (
    <label className="inline-flex min-h-11 cursor-pointer select-none items-center gap-3">
      <input
        type="checkbox"
        checked={checked}
        onChange={(event) => setChecked(event.target.checked)}
        className="size-4 rounded-sm border-stone accent-ink"
      />
      <span className="font-body text-small font-medium text-ink">
        Select all (max 3 for comparison)
      </span>
    </label>
  );
}
