import { Lock, Paperclip, Send } from "lucide-react";
import { cn } from "@/lib/utils";
import { customerDetailProfile, customerDetailTimeline } from "@/features/admin/mocks";

// DESIGN.md Screen J interaction timeline: category filters, the quick
// activity log composer and the chronological entries. The composer and
// filters are presentational — TODO(KHANS TRADING Ltd / backend): wire to the
// customer activity actions (docs/TASKS.md).

const categories = ["All", "Viewings", "Deals", "Payments", "Comms", "Documents"] as const;

export function CustomerTimeline() {
  return (
    <section aria-label="Activity timeline" className="pb-12">
      <div className="rounded-md border border-stone bg-white p-6 lg:p-8">
        <div className="flex flex-col gap-1 pb-6">
          <h2 className="font-heading text-h2 lg:text-h2-lg">
            Customer Activity &amp; Interaction Timeline
          </h2>
          <p className="font-body text-small text-slate">
            Audit trail of all showroom interactions, test drives, and payment
            clearances.
          </p>
        </div>

        <div className="flex flex-wrap gap-2 pb-6" role="group" aria-label="Timeline filters">
          {categories.map((category) => (
            <button
              key={category}
              type="button"
              aria-pressed={category === "All"}
              className={cn(
                "min-h-11 rounded-full px-4 font-body text-small transition-colors",
                category === "All"
                  ? "bg-ink text-white"
                  : "border border-stone bg-white text-slate hover:text-ink",
              )}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="flex flex-col gap-3 rounded-md bg-ivory p-4">
          <label htmlFor="quick-log" className="font-body text-small font-medium text-ink">
            Quick Activity Log
          </label>
          <textarea
            id="quick-log"
            name="quick_log"
            rows={3}
            placeholder="Auto-timestamped to David Kamau"
            className="w-full rounded-sm border border-stone bg-white px-4 py-3 font-body text-body text-ink shadow-sm transition-colors placeholder:text-mist focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ink"
          />
          <div className="flex flex-wrap items-center gap-3">
            <button
              type="button"
              className="inline-flex min-h-11 items-center gap-2 rounded-sm bg-ink px-4 font-body text-small font-medium text-white transition-colors hover:bg-graphite"
            >
              <Send aria-hidden="true" className="size-5" strokeWidth={1.5} />
              Post Log
            </button>
            <button
              type="button"
              className="inline-flex min-h-11 items-center gap-2 rounded-sm border border-ink px-4 font-body text-small font-medium text-ink transition-colors hover:bg-ink hover:text-white"
            >
              <Paperclip aria-hidden="true" className="size-5" strokeWidth={1.5} />
              Attach CarVX / Invoice
            </button>
            <p className="flex items-center gap-2 font-body text-caption text-slate">
              <Lock aria-hidden="true" className="size-5 text-champagne" strokeWidth={1.5} />
              Restrict to Managers
            </p>
          </div>
        </div>

        <ol className="mt-8 flex flex-col gap-6 border-l border-stone pl-6">
          {customerDetailTimeline.map((entry) => (
            <li key={entry.id} className="relative flex flex-col gap-2">
              <span
                aria-hidden="true"
                className="absolute -left-7 top-1 size-3 rounded-full bg-champagne"
              />
              <div className="flex flex-wrap items-center gap-x-3 gap-y-1">
                <h3 className="font-body text-small font-semibold text-ink">
                  {entry.title}
                </h3>
                <span className="inline-flex items-center rounded-full bg-stone px-2.5 py-1 font-body text-caption text-slate">
                  {entry.channel}
                </span>
                <p className="font-body text-caption text-mist">{entry.timestamp}</p>
              </div>
              <p className="font-body text-small text-slate">{entry.body}</p>
              {entry.note ? (
                <p className="rounded-md bg-champagne-tint p-3 font-body text-small text-slate">
                  <span className="font-medium text-ink">{entry.note.label}</span>{" "}
                  {entry.note.text}
                </p>
              ) : null}
            </li>
          ))}
        </ol>

        <p className="pt-4 font-body text-caption text-mist">
          Profile: {customerDetailProfile.customerId}
        </p>
      </div>
    </section>
  );
}
