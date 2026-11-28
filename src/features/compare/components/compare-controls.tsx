"use client";

import { useState } from "react";
import Link from "next/link";
import { Car, Heart, Plus, PlusCircle, Printer, Share2, Trash2, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  compareFromSavedCount,
  compareSuggestions,
  type CompareSuggestion,
} from "@/features/compare/mocks";

// Interactive leaves for the Compare screen (DESIGN.md Section 6, Screen 8).
// TODO(compare): the comparison selection and the difference highlight are
// local UI state only; wire them to the real compare contract when the
// backend lands (docs/TASKS.md, NEEDS-BACKEND: comparison selection).

type CompareControlsProps = {
  children: React.ReactNode;
};

// Action bar (differences toggle, print, share, clear) plus a wrapper that
// exposes the toggle state to the server-rendered matrix through the
// data-diff-highlight attribute (see the rule in src/app/globals.css).
export function CompareControls({ children }: CompareControlsProps) {
  const [highlightDiffs, setHighlightDiffs] = useState(false);

  const handlePrint = () => {
    window.print();
  };

  const handleShare = async () => {
    try {
      await navigator.clipboard.writeText(window.location.href);
    } catch {
      // Clipboard blocked: nothing to do.
    }
  };

  return (
    <div data-diff-highlight={highlightDiffs ? "on" : "off"}>
      <div className="mx-auto max-w-7xl px-4 pb-6 sm:px-6 lg:px-8">
        <div className="flex flex-wrap items-center justify-between gap-4 rounded-md bg-white p-4 shadow-sm">
          <label className="relative inline-flex min-h-11 cursor-pointer select-none items-center">
            <input
              type="checkbox"
              role="switch"
              checked={highlightDiffs}
              onChange={(event) => setHighlightDiffs(event.target.checked)}
              className="peer sr-only"
            />
            <span className="h-6 w-11 rounded-full bg-stone peer-checked:bg-ink peer-focus-visible:outline-2 peer-focus-visible:outline-offset-2 peer-focus-visible:outline-ink after:absolute after:top-0.5 after:left-0.5 after:h-5 after:w-5 after:rounded-full after:bg-white after:content-[''] peer-checked:after:translate-x-5" />
            <span className="ml-3 font-body text-small font-medium text-ink">
              Highlight differences only
            </span>
          </label>

          <div className="flex flex-wrap items-center gap-3">
            <button
              type="button"
              onClick={handlePrint}
              className="inline-flex min-h-11 items-center gap-2 rounded-sm border border-stone bg-white px-4 font-body text-small font-medium text-ink transition-colors hover:bg-ivory focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ink"
            >
              <Printer aria-hidden="true" className="size-5" strokeWidth={1.5} />
              <span>Print specification sheet</span>
            </button>
            <button
              type="button"
              onClick={handleShare}
              className="inline-flex min-h-11 items-center gap-2 rounded-sm border border-stone bg-white px-4 font-body text-small font-medium text-ink transition-colors hover:bg-ivory focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ink"
            >
              <Share2 aria-hidden="true" className="size-5" strokeWidth={1.5} />
              <span>Share comparison</span>
            </button>
            <button
              type="button"
              onClick={() => {
                // TODO(compare): clear the comparison with real state.
              }}
              className="inline-flex min-h-11 items-center gap-2 rounded-sm px-3 font-body text-small font-medium text-slate transition-colors hover:text-danger focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ink"
            >
              <Trash2 aria-hidden="true" className="size-5" strokeWidth={1.5} />
              <span>Clear comparison</span>
            </button>
          </div>
        </div>
      </div>
      {children}
    </div>
  );
}

type CompareRemoveButtonProps = {
  vehicleTitle: string;
};

// Per-column remove control on the vehicle photo.
export function CompareRemoveButton({ vehicleTitle }: CompareRemoveButtonProps) {
  return (
    <Button
      type="button"
      variant="iconDark"
      size="icon"
      title={`Remove ${vehicleTitle} from comparison`}
      aria-label={`Remove ${vehicleTitle} from comparison`}
      className="absolute top-3 right-3"
      onClick={() => {
        // TODO(compare): remove the column with real compare state.
      }}
    >
      <X aria-hidden="true" className="size-5" strokeWidth={1.5} />
    </Button>
  );
}

type CompareAddSlotProps = {
  savedCount: number;
};

// The empty comparison column: browse inventory, pick from saved, or add one
// of the recommended suggestions.
export function CompareAddSlot({ savedCount }: CompareAddSlotProps) {
  return (
    <div className="flex w-72 shrink-0 flex-col items-center rounded-md border-2 border-dashed border-stone bg-white/60 p-6 text-center">
      <div className="mb-4 flex size-16 items-center justify-center rounded-full bg-ivory text-slate">
        <Plus aria-hidden="true" className="size-8" strokeWidth={1.5} />
      </div>
      <h3 className="font-heading text-h3 text-ink">Add a Vehicle</h3>
      <p className="mt-2 max-w-xs font-body text-small text-slate">
        Select another model from your saved collection or browse our active
        Nairobi showroom inventory.
      </p>
      <div className="mt-6 flex w-full max-w-56 flex-col gap-3">
        <Link
          href="/vehicles"
          className="inline-flex h-11 items-center justify-center gap-2 rounded-sm bg-ink px-4 font-body text-button text-white transition-colors hover:bg-graphite focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ink motion-safe:active:scale-98"
        >
          <Car aria-hidden="true" className="size-5" strokeWidth={1.5} />
          <span>Browse Inventory</span>
        </Link>
        <button
          type="button"
          className="inline-flex h-11 items-center justify-center gap-2 rounded-sm border border-stone bg-white px-4 font-body text-button text-ink transition-colors hover:bg-ivory focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ink motion-safe:active:scale-98"
          onClick={() => {
            // TODO(compare): open the saved-list picker with real state.
          }}
        >
          <Heart aria-hidden="true" className="size-5" strokeWidth={1.5} />
          <span>From Saved ({savedCount})</span>
        </button>
      </div>

      <div className="mt-8 w-full border-t border-stone pt-6 text-left">
        <span className="mb-2 block font-body text-caption font-semibold tracking-wider text-mist uppercase">
          Recommended Suggestions
        </span>
        <ul className="flex flex-col gap-2">
          {compareSuggestions.map((suggestion) => (
            <li key={suggestion.id}>
              <CompareSuggestionItem suggestion={suggestion} />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

type CompareSuggestionItemProps = {
  suggestion: CompareSuggestion;
};

function CompareSuggestionItem({ suggestion }: CompareSuggestionItemProps) {
  return (
    <button
      type="button"
      className="flex w-full items-center justify-between rounded-sm border border-stone/60 bg-white p-2.5 text-left transition-colors hover:bg-ivory focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ink"
      onClick={() => {
        // TODO(compare): add the suggestion to the comparison with real state.
      }}
    >
      <span>
        <span className="block font-body text-small font-medium text-ink">
          {suggestion.label}
        </span>
        <span className="block font-body text-caption text-slate">
          {suggestion.priceLabel}
        </span>
      </span>
      <PlusCircle aria-hidden="true" className="size-5 shrink-0 text-champagne-dark" strokeWidth={1.5} />
    </button>
  );
}
