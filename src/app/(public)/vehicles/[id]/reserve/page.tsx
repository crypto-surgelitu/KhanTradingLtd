import type { Metadata } from "next";
import Link from "next/link";
import { Check, ChevronRight } from "lucide-react";
import { ReserveForm } from "@/features/reservation/components/reserve-form";
import { ReserveSummary } from "@/features/reservation/components/reserve-summary";
import { reserveBuyerSummary, reserveVehicleSummary } from "@/features/reservation/mocks";

export const metadata: Metadata = {
  title: "Reserve Vehicle",
  description:
    "Secure a vehicle with a verified holding deposit through the KHANS TRADING Ltd reservation process.",
};

// DESIGN.md Screen 6 — Reserve Vehicle. Server Component (the <main> landmark
// comes from the (public) layout); interactive parts live in the single
// client leaf ReserveForm. Buyer and vehicle data are the labelled SAMPLE
// mock in features/reservation/mocks.ts.

const steps = [
  { label: "1. Details", state: "done" as const },
  { label: "2. Deposit & Payment", state: "current" as const },
  { label: "3. Confirmation", state: "upcoming" as const },
];

export default function ReserveVehiclePage() {
  return (
    <div className="mx-auto max-w-7xl px-4 pb-14 pt-8 sm:px-6 sm:pb-18 lg:px-8 lg:pb-24">
      <nav aria-label="Breadcrumb" className="flex flex-wrap items-center gap-1.5 pb-6 font-body text-small text-slate">
        <Link href="/" className="transition-colors hover:text-ink">
          Home
        </Link>
        <ChevronRight aria-hidden="true" className="size-4 text-mist" strokeWidth={1.5} />
        <Link href="/vehicles" className="transition-colors hover:text-ink">
          Vehicles
        </Link>
        <ChevronRight aria-hidden="true" className="size-4 text-mist" strokeWidth={1.5} />
        <span className="text-ink">{reserveVehicleSummary.title}</span>
        <ChevronRight aria-hidden="true" className="size-4 text-mist" strokeWidth={1.5} />
        <span className="font-medium text-ink">Reserve Vehicle</span>
      </nav>

      <div className="flex flex-col gap-2 pb-8">
        <h1 className="font-heading text-h1 lg:text-h1-lg">Reserve Vehicle</h1>
        <p className="font-body text-body-l text-slate lg:text-body-l-lg">
          {reserveVehicleSummary.title}
        </p>
      </div>

      <ol aria-label="Reservation progress" className="flex flex-wrap items-center gap-3 pb-10">
        {steps.map((step) => (
          <li key={step.label} className="flex items-center gap-2">
            <span
              aria-hidden="true"
              className={
                step.state === "upcoming"
                  ? "flex size-8 items-center justify-center rounded-full border border-stone bg-white font-body text-caption text-mist"
                  : "flex size-8 items-center justify-center rounded-full bg-ink font-body text-caption text-white"
              }
            >
              {step.state === "done" ? (
                <Check className="size-4" strokeWidth={1.5} />
              ) : null}
            </span>
            <span
              className={
                step.state === "upcoming"
                  ? "font-body text-small text-mist"
                  : step.state === "current"
                    ? "font-body text-small font-semibold text-champagne-dark"
                    : "font-body text-small font-medium text-ink"
              }
            >
              {step.label}
            </span>
          </li>
        ))}
      </ol>

      <div className="grid grid-cols-1 gap-12 lg:grid-cols-12">
        <div className="flex flex-col gap-10 lg:col-span-8">
          <section aria-label="Buyer information" className="rounded-md border border-stone bg-white p-6">
            <div className="flex flex-wrap items-center justify-between gap-3">
              <h2 className="font-heading text-h3 lg:text-h3-lg">
                Buyer Information
              </h2>
              <button
                type="button"
                className="min-h-11 font-body text-small font-medium text-ink underline decoration-champagne decoration-1 underline-offset-4 transition-colors hover:text-champagne-dark"
              >
                Edit details
              </button>
            </div>
            <dl className="grid grid-cols-1 gap-4 pt-4 sm:grid-cols-2">
              <div>
                <dt className="font-body text-caption text-mist">Full Name</dt>
                <dd className="font-body text-small text-ink">{reserveBuyerSummary.name}</dd>
              </div>
              <div>
                <dt className="font-body text-caption text-mist">Phone / WhatsApp</dt>
                <dd className="font-body text-small text-ink">{reserveBuyerSummary.phone}</dd>
              </div>
              <div>
                <dt className="font-body text-caption text-mist">Official Email</dt>
                <dd className="font-body text-small text-ink">{reserveBuyerSummary.email}</dd>
              </div>
              <div>
                <dt className="font-body text-caption text-mist">Preferred Viewing Date</dt>
                <dd className="font-body text-small text-ink">{reserveBuyerSummary.viewingDate}</dd>
              </div>
            </dl>
            <p className="pt-4 font-body text-small text-slate">
              {reserveBuyerSummary.note}
            </p>
          </section>

          <ReserveForm />
        </div>

        <div className="lg:col-span-4">
          <ReserveSummary />
        </div>
      </div>
    </div>
  );
}
