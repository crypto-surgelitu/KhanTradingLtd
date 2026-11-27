import Link from "next/link";
import { ArrowRight, Timer } from "lucide-react";

// DESIGN.md Screen B reservation-hold alert banner.

export function ReservationAlert() {
  return (
    <section
      aria-label="Reservation alert"
      className="mb-8 flex flex-wrap items-start gap-4 rounded-md border border-warning/30 bg-warning/10 p-4"
    >
      <Timer aria-hidden="true" className="size-6 shrink-0 text-warning" strokeWidth={1.5} />
      <div className="min-w-0 flex-1">
        <p className="font-body text-small font-semibold text-ink">
          Reservation Alert:
        </p>
        <p className="font-body text-small text-slate">
          2 vehicle reservations are reaching the 72-hour hold limit today.
          Review payment proofs or release slot.
        </p>
      </div>
      <Link
        href="/admin/deals"
        className="inline-flex min-h-11 items-center gap-1 font-body text-small font-medium text-ink underline decoration-champagne decoration-1 underline-offset-4 transition-colors hover:text-champagne-dark"
      >
        Review holds
        <ArrowRight aria-hidden="true" className="size-4" strokeWidth={1.5} />
      </Link>
    </section>
  );
}
