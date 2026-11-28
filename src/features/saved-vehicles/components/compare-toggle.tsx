"use client";

import { useState } from "react";

// TODO(saved-vehicles): the compare selection is local UI state only. Wire it
// to the shared compare selection (and the 3-vehicle cap) when the saved-list
// backend contract lands (docs/TASKS.md, NEEDS-BACKEND: saved vehicles list).

type CompareToggleProps = {
  vehicleTitle: string;
  defaultChecked?: boolean;
};

export function CompareToggle({
  vehicleTitle,
  defaultChecked = false,
}: CompareToggleProps) {
  const [checked, setChecked] = useState(defaultChecked);

  return (
    <label
      className={`absolute bottom-3 left-3 z-10 flex min-h-11 cursor-pointer items-center gap-2 rounded-sm px-3 py-1.5 text-white shadow-sm transition-colors ${
        checked ? "bg-ink/90" : "bg-ink/70"
      }`}
    >
      <input
        type="checkbox"
        checked={checked}
        onChange={(event) => setChecked(event.target.checked)}
        aria-label={`Compare ${vehicleTitle}`}
        className="size-4 rounded-sm accent-champagne"
      />
      <span
        className={`font-body text-caption tracking-wide ${
          checked ? "font-semibold" : "font-medium"
        }`}
      >
        Compare
      </span>
    </label>
  );
}
