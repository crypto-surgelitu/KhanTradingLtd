"use client";

// TODO(saved-vehicles): clearing the compare selection needs the shared
// compare state once the saved-list backend contract lands.

export function CompareClearButton() {
  return (
    <button
      type="button"
      className="min-h-11 font-body text-small text-mist underline-offset-4 transition-colors hover:text-white hover:underline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
      onClick={() => {
        // TODO(saved-vehicles): clear the compare selection with real state.
      }}
    >
      Clear selection
    </button>
  );
}
