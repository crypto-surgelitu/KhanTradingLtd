import { Heart } from "lucide-react";
import { SavedEmptyCta } from "@/features/saved-vehicles/components/saved-empty-cta";

// DESIGN.md Section 4 empty state (line icon, one sentence, one action) for an
// empty saved shortlist.
export function SavedEmptyState() {
  return (
    <div className="flex w-full max-w-xl flex-col items-center rounded-md border border-stone bg-white p-10 text-center shadow-sm md:p-14">
      <div className="mb-6 flex size-16 items-center justify-center rounded-full bg-ivory text-slate">
        <Heart aria-hidden="true" className="size-8" strokeWidth={1.5} />
      </div>
      <h2 className="mb-2 font-heading text-h3 text-ink lg:text-h3-lg">
        You haven&apos;t saved any vehicles yet
      </h2>
      <p className="mb-8 max-w-md font-body text-body-l text-slate">
        Tap the heart icon on any vehicle card in our showroom to save and
        compare models side-by-side as you browse.
      </p>
      <SavedEmptyCta />
    </div>
  );
}
