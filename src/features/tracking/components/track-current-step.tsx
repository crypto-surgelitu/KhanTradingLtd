import { AlertTriangle, Award, ClipboardCheck, Hourglass, ListChecks, RefreshCw, Timer } from "lucide-react";
import { trackCurrentStep } from "@/features/tracking/mocks";

// DESIGN.md Screen 6B current-step card: what is happening, what the client
// must do, who is responsible and the expected timeline, plus the
// action-needed banner.

export function TrackCurrentStep() {
  const { alert } = trackCurrentStep;

  return (
    <section aria-label="Current step" className="flex flex-col gap-6 pb-12">
      <article className="flex flex-col gap-6 rounded-md border border-stone bg-white p-6 lg:p-8">
        <div className="flex flex-wrap items-center gap-3">
          <Hourglass aria-hidden="true" className="size-6 text-champagne" strokeWidth={1.5} />
          <h2 className="font-heading text-h2 lg:text-h2-lg">Current Operation</h2>
        </div>

        <div className="flex flex-wrap items-center justify-between gap-3 rounded-md bg-ivory p-4">
          <p className="font-body text-body font-medium text-ink">
            {trackCurrentStep.title}
          </p>
          <p className="font-body text-caption text-slate">{trackCurrentStep.target}</p>
        </div>

        <div className="flex flex-col gap-2">
          <p className="flex items-center gap-2 font-body text-small font-semibold text-ink">
            <RefreshCw aria-hidden="true" className="size-5 text-champagne" strokeWidth={1.5} />
            What is happening now
          </p>
          <p className="font-body text-body text-slate">
            {trackCurrentStep.happeningNow}
          </p>
        </div>

        <div className="flex flex-col gap-2">
          <p className="flex items-center gap-2 font-body text-small font-semibold text-ink">
            <ListChecks aria-hidden="true" className="size-5 text-champagne" strokeWidth={1.5} />
            What you need to do
          </p>
          <p className="font-body text-body text-slate">
            {trackCurrentStep.actionRequired}
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-x-6 gap-y-2 border-t border-stone pt-4">
          <p className="flex items-center gap-2 font-body text-small text-slate">
            <Award aria-hidden="true" className="size-5 text-champagne" strokeWidth={1.5} />
            <span className="font-medium text-ink">Responsible Officer:</span>
            {trackCurrentStep.officer}
          </p>
          <p className="flex items-center gap-2 font-body text-small text-slate">
            <Timer aria-hidden="true" className="size-5 text-champagne" strokeWidth={1.5} />
            {trackCurrentStep.timeline}
          </p>
        </div>
      </article>

      <article
        role="alert"
        className="flex flex-wrap items-start gap-4 rounded-md border border-warning/30 bg-warning/10 p-4"
      >
        <AlertTriangle aria-hidden="true" className="size-6 shrink-0 text-warning" strokeWidth={1.5} />
        <div className="min-w-0 flex-1">
          <p className="font-body text-small font-semibold text-ink">{alert.title}</p>
          <p className="font-body text-small text-slate">{alert.body}</p>
        </div>
        <button
          type="button"
          className="inline-flex min-h-11 items-center rounded-sm bg-ink px-4 font-body text-button text-white transition-colors hover:bg-graphite"
        >
          {alert.action}
        </button>
      </article>
    </section>
  );
}
