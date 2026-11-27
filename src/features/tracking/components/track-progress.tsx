import { Check } from "lucide-react";
import { cn } from "@/lib/utils";
import { trackStages, trackSummary } from "@/features/tracking/mocks";

// DESIGN.md Screen 6B progress tracker: the purchase pipeline stages with
// completed dates, the active stage and pending stages.

export function TrackProgress() {
  return (
    <section aria-label="Order progress" className="pb-12">
      <div className="rounded-md border border-stone bg-white p-6 lg:p-8">
        <div className="flex flex-wrap items-end justify-between gap-3 pb-6">
          <div className="flex flex-col gap-1">
            <h2 className="font-heading text-h2 lg:text-h2-lg">
              Order Progress Matrix
            </h2>
            <p className="font-body text-small text-slate">
              Vehicle Fulfillment Lifecycle
            </p>
          </div>
          <div className="flex flex-col gap-1 text-right">
            <p className="font-body text-caption font-medium text-champagne-dark">
              Stage 4 of 7 Active
            </p>
            <p className="font-body text-caption text-slate">
              Est. Completion: [EXPECTED DATE]
            </p>
          </div>
        </div>

        <ol className="flex flex-col gap-6 border-l border-stone pl-6">
          {trackStages.map((stage) => (
            <li key={stage.name} className="relative flex items-start gap-3">
              <span
                aria-hidden="true"
                className={cn(
                  "absolute -left-9 top-1 flex size-6 items-center justify-center rounded-full",
                  stage.state === "done"
                    ? "bg-ink text-white"
                    : stage.state === "current"
                      ? "bg-champagne text-ink"
                      : "border border-stone bg-white text-mist",
                )}
              >
                {stage.state === "done" ? (
                  <Check className="size-4" strokeWidth={1.5} />
                ) : null}
              </span>
              <div className="flex flex-wrap items-center gap-x-3 gap-y-1">
                <p
                  className={cn(
                    "font-body text-body",
                    stage.state === "upcoming" ? "text-mist" : "font-medium text-ink",
                  )}
                >
                  {stage.name}
                </p>
                <p
                  className={cn(
                    "font-body text-caption",
                    stage.state === "done"
                      ? "text-slate"
                      : stage.state === "current"
                        ? "font-medium text-champagne-dark"
                        : "text-mist",
                  )}
                >
                  {stage.detail}
                </p>
              </div>
            </li>
          ))}
        </ol>

        <p className="border-t border-stone pt-4 font-body text-caption text-mist">
          Tracking {trackSummary.ref}
        </p>
      </div>
    </section>
  );
}
