import type { Metadata } from "next";
import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { BookingConfirmation } from "@/features/booking/components/booking-confirmation";
import { BookingForm } from "@/features/booking/components/booking-form";
import { BookingSummary } from "@/features/booking/components/booking-summary";
import { bookingVehicleSummary } from "@/features/booking/mocks";

export const metadata: Metadata = {
  title: "Book a Viewing",
  description:
    "Schedule an exclusive in-person private inspection or bespoke driving appointment at our Nairobi showroom.",
};

// DESIGN.md Screen 6C — Book a Viewing or Test Drive. Server Component (the
// <main> landmark comes from the (public) layout); interactive parts live in
// the single client leaf BookingForm. Vehicle data is the labelled SAMPLE
// mock in features/booking/mocks.ts.

const steps = [
  { number: "1", label: "Step 01", title: "Appointment Type", state: "current" as const },
  { number: "2", label: "Step 02", title: "Schedule & Slot", state: "upcoming" as const },
  { number: "3", label: "Step 03", title: "Contact Details", state: "upcoming" as const },
];

export default function BookViewingPage() {
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
        <span className="text-ink">{bookingVehicleSummary.title}</span>
        <ChevronRight aria-hidden="true" className="size-4 text-mist" strokeWidth={1.5} />
        <span className="font-medium text-ink">Book a Viewing</span>
      </nav>

      <div className="flex flex-col gap-2 pb-8">
        <span className="font-body text-eyebrow uppercase text-champagne-dark">
          Private Showroom Concierge
        </span>
        <h1 className="font-heading text-h1 lg:text-h1-lg">
          Book a Viewing or Test Drive
        </h1>
        <p className="max-w-3xl font-body text-body-l text-slate lg:text-body-l-lg">
          Schedule an exclusive in-person private inspection or bespoke driving
          appointment at our Nairobi showroom. A dedicated vehicle concierge
          will be assigned upon booking.
        </p>
      </div>

      <ol aria-label="Booking progress" className="flex flex-wrap items-center gap-6 pb-10">
        {steps.map((step) => (
          <li key={step.number} className="flex items-center gap-3">
            <span
              aria-hidden="true"
              className={
                step.state === "current"
                  ? "flex size-8 items-center justify-center rounded-full bg-ink font-body text-caption text-white"
                  : "flex size-8 items-center justify-center rounded-full border border-stone bg-white font-body text-caption text-mist"
              }
            >
              {step.number}
            </span>
            <div className="flex flex-col">
              <p
                className={
                  step.state === "current"
                    ? "font-body text-caption font-medium text-champagne-dark"
                    : "font-body text-caption text-mist"
                }
              >
                {step.label}
              </p>
              <p
                className={
                  step.state === "current"
                    ? "font-body text-small font-medium text-ink"
                    : "font-body text-small text-mist"
                }
              >
                {step.title}
              </p>
            </div>
          </li>
        ))}
      </ol>

      <div className="grid grid-cols-1 gap-12 lg:grid-cols-12">
        <div className="flex flex-col gap-10 lg:col-span-7">
          <BookingForm />
          <BookingConfirmation />
        </div>
        <div className="lg:col-span-5">
          <BookingSummary />
        </div>
      </div>
    </div>
  );
}
