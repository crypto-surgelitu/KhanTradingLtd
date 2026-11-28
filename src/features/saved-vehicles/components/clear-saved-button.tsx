"use client";

import { Trash2 } from "lucide-react";

// TODO(saved-vehicles): clearing the shortlist needs the real saved-list
// mutation (features/vehicles actions) once the backend contract lands.

export function ClearSavedButton() {
  return (
    <button
      type="button"
      className="inline-flex h-11 items-center gap-2 rounded-sm border border-stone bg-white px-4 font-body text-button text-slate transition-colors hover:border-danger hover:text-danger focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ink motion-safe:active:scale-98"
      onClick={() => {
        // TODO(saved-vehicles): clear the saved list once the backend contract lands.
      }}
    >
      <Trash2 aria-hidden="true" className="size-5" strokeWidth={1.5} />
      <span>Clear all saved</span>
    </button>
  );
}
