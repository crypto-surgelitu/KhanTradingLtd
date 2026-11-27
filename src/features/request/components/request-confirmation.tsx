import Link from "next/link";
import { ArrowRight, CheckCircle, Copy, Target } from "lucide-react";
import { buttonVariants } from "@/components/ui/button";
import { requestConfirmation } from "@/features/request/mocks";

// DESIGN.md Screen 6D confirmation state (rendered as designed): tracking
// code, the three immediate next steps and the follow-up actions.

export function RequestConfirmation() {
  return (
    <section aria-label="Request confirmation" className="pb-12">
      <article className="flex flex-col gap-6 rounded-md border border-stone bg-white p-6 lg:p-8">
        <div className="flex flex-wrap items-center gap-3">
          <CheckCircle aria-hidden="true" className="size-6 text-success" strokeWidth={1.5} />
          <h2 className="font-heading text-h2 lg:text-h2-lg">
            Request Submitted Successfully
          </h2>
          <span className="inline-flex items-center rounded-full bg-success/10 px-2.5 py-1 font-body text-caption font-medium text-success">
            Priority Request Logged
          </span>
        </div>

        <div className="flex flex-wrap items-center gap-2 rounded-md bg-ivory p-4">
          <p className="font-body text-small text-slate">
            Tracking Code:{" "}
            <span className="font-heading text-h3 tabular-nums text-ink">
              {requestConfirmation.trackingCode}
            </span>
          </p>
          <button
            type="button"
            aria-label="Copy tracking code"
            className="flex size-11 items-center justify-center rounded-full text-slate transition-colors hover:text-ink"
          >
            <Copy aria-hidden="true" className="size-5" strokeWidth={1.5} />
          </button>
        </div>

        <h3 className="font-heading text-h3 lg:text-h3-lg">Immediate Next Steps</h3>
        <ol className="flex flex-col gap-4">
          {requestConfirmation.nextSteps.map((step) => (
            <li key={step.number} className="flex items-start gap-3">
              <span
                aria-hidden="true"
                className="flex size-8 shrink-0 items-center justify-center rounded-full bg-ink font-body text-caption text-white"
              >
                {step.number}
              </span>
              <div className="flex flex-col gap-1">
                <p className="font-body text-eyebrow uppercase text-champagne-dark">
                  {step.eyebrow}
                </p>
                <p className="font-body text-body font-medium text-ink">{step.title}</p>
                <p className="font-body text-small text-slate">{step.description}</p>
              </div>
            </li>
          ))}
        </ol>

        <div className="flex flex-wrap items-center gap-3 border-t border-stone pt-6">
          <button
            type="button"
            className="inline-flex min-h-11 items-center gap-2 rounded-sm border border-ink px-4 font-body text-button text-ink transition-colors hover:bg-ink hover:text-white"
          >
            <Target aria-hidden="true" className="size-5" strokeWidth={1.5} />
            Track Request Status
          </button>
          <Link href="/vehicles" className={buttonVariants({ variant: "primary" })}>
            Explore Current Inventory
            <ArrowRight aria-hidden="true" className="ml-2 size-5" strokeWidth={1.5} />
          </Link>
        </div>
      </article>
    </section>
  );
}
