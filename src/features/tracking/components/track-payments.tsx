import { Upload } from "lucide-react";
import { siteConfig } from "@/config/site";
import { trackPayments } from "@/features/tracking/mocks";

// DESIGN.md Screen 6B payments summary: the ledger, the approved finance
// facility and how to settle the balance (bank details from siteConfig).

export function TrackPayments() {
  return (
    <section aria-label="Payments" className="pb-12">
      <div className="rounded-md border border-stone bg-white p-6 lg:p-8">
        <div className="flex flex-col gap-1 pb-6">
          <h2 className="font-heading text-h2 lg:text-h2-lg">Financial Ledger</h2>
          <p className="font-body text-small text-slate">Payments Breakdown</p>
        </div>

        <dl className="flex flex-col gap-3">
          {trackPayments.lines.map((line) => (
            <div
              key={line.label}
              className="flex flex-wrap items-baseline justify-between gap-2 border-b border-stone pb-3 last:border-0"
            >
              <dt className="flex flex-col">
                <span className="font-body text-small text-slate">{line.label}</span>
                {"note" in line && line.note ? (
                  <span className="font-body text-caption text-mist">{line.note}</span>
                ) : null}
              </dt>
              <dd className="font-heading text-price tabular-nums text-ink">
                {line.amount}
              </dd>
            </div>
          ))}
        </dl>

        <article className="mt-6 flex flex-col gap-2 rounded-md bg-champagne-tint p-4">
          <div className="flex flex-wrap items-center gap-3">
            <p className="font-body text-small font-semibold text-ink">
              {trackPayments.facility.label}
            </p>
            <span className="inline-flex items-center rounded-full bg-success/10 px-2.5 py-1 font-body text-caption text-success">
              {trackPayments.facility.status}
            </span>
          </div>
          <p className="font-body text-small text-slate">
            {trackPayments.facility.name}
          </p>
          <p className="font-body text-small text-slate">
            {trackPayments.facility.amount}
          </p>
          <p className="font-body text-small text-slate">
            {trackPayments.facility.terms}
          </p>
        </article>

        <h3 className="pt-8 font-heading text-h3 lg:text-h3-lg">
          How to Settle the Balance
        </h3>
        <dl className="grid grid-cols-1 gap-3 pt-4 sm:grid-cols-2">
          <div>
            <dt className="font-body text-caption text-mist">Bank Name:</dt>
            <dd className="font-body text-small text-ink">{siteConfig.bankName}</dd>
          </div>
          <div>
            <dt className="font-body text-caption text-mist">Account Name:</dt>
            <dd className="font-body text-small text-ink">{siteConfig.accountName}</dd>
          </div>
          <div>
            <dt className="font-body text-caption text-mist">Account Number:</dt>
            <dd className="font-body text-small text-ink">{siteConfig.accountNumber}</dd>
          </div>
          <div>
            <dt className="font-body text-caption text-mist">Branch:</dt>
            <dd className="font-body text-small text-ink">{siteConfig.branch}</dd>
          </div>
          <div>
            <dt className="font-body text-caption text-mist">Mandatory Ref:</dt>
            <dd className="font-heading text-h3 tabular-nums lg:text-h3-lg">
              {trackPayments.facility.reference}
            </dd>
          </div>
        </dl>

        <button
          type="button"
          className="mt-6 inline-flex min-h-11 items-center gap-2 rounded-sm bg-ink px-4 font-body text-button text-white transition-colors hover:bg-graphite"
        >
          <Upload aria-hidden="true" className="size-5" strokeWidth={1.5} />
          Upload Proof of Payment
        </button>
        <p className="pt-3 font-body text-caption text-slate">
          Settlement into Khans client trust escrow accounts only. Official ETR
          receipt issued within 2 business hours.
        </p>
      </div>
    </section>
  );
}
