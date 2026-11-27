import { cn } from "@/lib/utils";
import { trackUpdates, type TrackTone } from "@/features/tracking/mocks";

// DESIGN.md Screen 6B updates feed: reverse-chronological team messages with
// timestamped markers. The newest entry renders exactly as the export
// (timestamp + actor only).

const markerStyles: Record<TrackTone, string> = {
  champagne: "bg-champagne",
  warning: "bg-warning",
  success: "bg-success",
  muted: "bg-mist",
};

export function TrackUpdates() {
  return (
    <section aria-label="Updates" className="pb-12">
      <div className="rounded-md border border-stone bg-white p-6 lg:p-8">
        <div className="flex flex-col gap-1 pb-6">
          <h2 className="font-heading text-h2 lg:text-h2-lg">
            Chronology &amp; Dialogue
          </h2>
          <p className="font-body text-small text-slate">
            Operational Activity Timeline · Real-time ledger updates
          </p>
        </div>

        <ol className="flex flex-col gap-6 border-l border-stone pl-6">
          {trackUpdates.map((update) => (
            <li key={update.timestamp} className="relative flex flex-col gap-1.5">
              <span
                aria-hidden="true"
                className={cn(
                  "absolute -left-7 top-1 size-3 rounded-full",
                  markerStyles[update.tone],
                )}
              />
              <div className="flex flex-wrap items-center gap-2">
                <span className="font-body text-caption font-semibold text-ink">
                  {update.timestamp}
                </span>
                <span
                  className={cn(
                    "font-body text-caption",
                    update.tone === "champagne"
                      ? "font-medium text-champagne-dark"
                      : "text-slate",
                  )}
                >
                  {update.actor}
                </span>
              </div>
              {update.message ? (
                <p className="font-body text-small text-slate">{update.message}</p>
              ) : null}
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
