"use client";

import { useState } from "react";
import { Check, ChevronDown } from "lucide-react";

// TODO(saved-vehicles): "Recently Saved" is the only sort the export defines.
// Additional options ship with the saved-list query contract (docs/TASKS.md).

const sortOptions = ["Recently Saved"] as const;

export function SavedSortMenu() {
  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState<string>(sortOptions[0]);

  return (
    <div className="relative">
      <button
        type="button"
        aria-haspopup="listbox"
        aria-expanded={open}
        className="inline-flex min-h-11 items-center gap-2 rounded-sm bg-white px-3 py-1.5 font-body text-small text-ink shadow-sm transition-colors hover:bg-ivory focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ink"
        onClick={() => setOpen((current) => !current)}
      >
        <span>{selected}</span>
        <ChevronDown aria-hidden="true" className="size-4 text-slate" strokeWidth={1.5} />
      </button>
      {open ? (
        <ul
          role="listbox"
          aria-label="Sort saved vehicles"
          className="absolute right-0 z-30 mt-2 w-48 rounded-sm border border-stone bg-white py-1 shadow-md"
        >
          {sortOptions.map((option) => (
            <li key={option} role="option" aria-selected={option === selected}>
              <button
                type="button"
                className="flex min-h-11 w-full items-center justify-between gap-2 px-3 text-left font-body text-small text-ink transition-colors hover:bg-ivory focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ink"
                onClick={() => {
                  setSelected(option);
                  setOpen(false);
                }}
              >
                <span>{option}</span>
                {option === selected ? (
                  <Check aria-hidden="true" className="size-4 text-champagne-dark" strokeWidth={1.5} />
                ) : null}
              </button>
            </li>
          ))}
        </ul>
      ) : null}
    </div>
  );
}
