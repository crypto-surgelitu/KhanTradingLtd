"use client";

import { useState } from "react";
import Link from "next/link";
import {
  ArrowRight,
  CheckCircle,
  Gauge,
  Lock,
  MessageCircle,
  SearchCheck,
  ShieldCheck,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { siteConfig } from "@/config/site";
import {
  bookingAfternoonSlots,
  bookingDaySlots,
  bookingMorningSlots,
} from "@/features/booking/mocks";

// DESIGN.md Screen 6C booking flow. The single client leaf for this screen:
// session-type selection, date and time-slot pickers and the terms checkbox
// gating the submit button. TODO(KHANS TRADING Ltd / backend): wire to the
// viewing-booking server action in features/viewings/actions.ts
// (docs/TASKS.md). No submit logic yet.

const inputClasses =
  "h-12 w-full rounded-sm border border-stone bg-white px-4 font-body text-body text-ink shadow-sm transition-colors placeholder:text-mist focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ink";

const labelClasses = "font-body text-small font-medium text-ink";

const sessionCardClasses =
  "flex cursor-pointer flex-col gap-2 rounded-md border border-stone bg-white p-6 transition-colors peer-checked:border-ink peer-checked:ring-1 peer-checked:ring-ink peer-focus-visible:outline-2 peer-focus-visible:outline-offset-2 peer-focus-visible:outline-ink";

function dayChipClasses(status: string, selected: boolean) {
  return cn(
    "flex min-h-11 flex-col items-center justify-center rounded-md border px-4 py-2 font-body text-caption",
    status === "Booked"
      ? "cursor-not-allowed border-stone bg-stone/40 text-mist"
      : selected
        ? "border-ink bg-ink text-white"
        : "border-stone bg-white text-ink transition-colors hover:border-slate/60",
  );
}

function slotChipClasses(selected: boolean) {
  return cn(
    "min-h-11 rounded-sm border px-4 font-body text-small transition-colors",
    selected
      ? "border-ink bg-ink text-white"
      : "border-stone bg-white text-ink hover:border-slate/60",
  );
}

export function BookingForm() {
  const [agreed, setAgreed] = useState(false);
  const [day, setDay] = useState("29");
  const [slot, setSlot] = useState("11:00 AM");

  return (
    <form className="flex flex-col gap-8" noValidate>
      <section aria-label="Appointment type" className="flex flex-col gap-4">
        <div className="flex flex-wrap items-center gap-3">
          <h2 className="font-heading text-h2 lg:text-h2-lg">
            Select Session Experience
          </h2>
          <span className="inline-flex items-center rounded-full bg-champagne-tint px-2.5 py-1 font-body text-caption font-medium text-champagne-dark">
            Complimentary Service
          </span>
        </div>

        <fieldset className="grid grid-cols-1 gap-4 md:grid-cols-2">
          <legend className="sr-only">Session experience</legend>
          <label>
            <input type="radio" name="session_type" value="viewing" defaultChecked className="peer sr-only" />
            <div className={sessionCardClasses}>
              <SearchCheck aria-hidden="true" className="size-6 text-champagne" strokeWidth={1.5} />
              <p className="font-heading text-h3 lg:text-h3-lg">Private Viewing</p>
              <p className="font-body text-small text-slate">
                Acoustic lounge inspection, paint thickness audit &amp; underbody
                review
              </p>
            </div>
          </label>
          <label>
            <input type="radio" name="session_type" value="test_drive" className="peer sr-only" />
            <div className={sessionCardClasses}>
              <Gauge aria-hidden="true" className="size-6 text-champagne" strokeWidth={1.5} />
              <p className="font-heading text-h3 lg:text-h3-lg">
                Dynamic Test Drive
              </p>
              <p className="font-body text-small text-slate">
                Engine throttle assessment, 4WD high/low test, and open highway
                drive
              </p>
            </div>
          </label>
        </fieldset>

        <p className="flex items-start gap-2 rounded-md bg-champagne-tint p-3 font-body text-small text-slate">
          <ShieldCheck aria-hidden="true" className="size-5 shrink-0 text-champagne-dark" strokeWidth={1.5} />
          <span>
            <span className="font-medium text-ink">Test Drive Requirement:</span>{" "}
            Please ensure you bring your valid physical Driving Licence (or
            valid international driving permit) to your appointment. Our
            concierge will verify validity prior to ignition release.
          </span>
        </p>
      </section>

      <section aria-label="Schedule" className="flex flex-col gap-4">
        <div className="flex flex-col gap-1">
          <h2 className="font-heading text-h2 lg:text-h2-lg">
            Select Date &amp; Time Slot
          </h2>
          <p className="font-body text-small text-slate">
            Showroom visits are allocated for 60 uninterrupted minutes
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-3">
          <span className="inline-flex items-center gap-1.5 font-body text-caption text-slate">
            <span aria-hidden="true" className="size-2 rounded-full bg-ink" />
            Selected
          </span>
          <span className="inline-flex items-center gap-1.5 font-body text-caption text-slate">
            <span aria-hidden="true" className="size-2 rounded-full bg-stone" />
            Fully Booked
          </span>
        </div>

        <ul className="flex flex-wrap gap-3">
          {bookingDaySlots.map((entry) => {
            const selected = entry.day === "Fri" && entry.status === "Selected";
            return (
              <li key={`${entry.day}-${entry.num}`}>
                <button
                  type="button"
                  disabled={entry.status === "Booked"}
                  aria-pressed={selected}
                  onClick={() => setDay(entry.num)}
                  className={dayChipClasses(entry.status, day === entry.num && entry.status !== "Booked")}
                >
                  <span>{entry.day}</span>
                  <span className="font-heading text-h3 lg:text-h3-lg">{entry.num}</span>
                  <span>{entry.status}</span>
                </button>
              </li>
            );
          })}
        </ul>

        <p className="flex items-center gap-2 pt-2 font-body text-small font-medium text-ink">
          Morning Slots
        </p>
        <ul className="flex flex-wrap gap-3">
          {bookingMorningSlots.map((entry) => (
            <li key={entry.time}>
              <button
                type="button"
                aria-pressed={slot === entry.time}
                onClick={() => setSlot(entry.time)}
                className={cn(slotChipClasses(slot === entry.time), "flex items-center gap-2")}
              >
                {slot === entry.time ? (
                  <CheckCircle aria-hidden="true" className="size-4" strokeWidth={1.5} />
                ) : null}
                {entry.time}
              </button>
            </li>
          ))}
        </ul>

        <p className="flex items-center gap-2 pt-2 font-body text-small font-medium text-ink">
          Afternoon Slots
        </p>
        <ul className="flex flex-wrap gap-3">
          {bookingAfternoonSlots.map((entry) => (
            <li key={entry.time}>
              <button
                type="button"
                aria-pressed={slot === entry.time}
                onClick={() => setSlot(entry.time)}
                className={slotChipClasses(slot === entry.time)}
              >
                {entry.time}
              </button>
            </li>
          ))}
        </ul>
      </section>

      <section aria-label="Contact details" className="flex flex-col gap-6">
        <div className="flex flex-col gap-1">
          <h2 className="font-heading text-h2 lg:text-h2-lg">Your Information</h2>
          <p className="font-body text-small text-slate">
            We will direct the showroom gate clearance and concierge pass to
            these details.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          <div className="flex flex-col gap-2">
            <label htmlFor="booking-name" className={labelClasses}>
              Full Name
            </label>
            <input id="booking-name" name="name" type="text" autoComplete="name" required className={inputClasses} />
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="booking-phone" className={labelClasses}>
              Registered Phone (WhatsApp active)
            </label>
            <div className="relative">
              <input id="booking-phone" name="phone" type="tel" autoComplete="tel" required className={`${inputClasses} pr-12`} />
              <MessageCircle
                aria-hidden="true"
                className="pointer-events-none absolute right-4 top-1/2 size-5 -translate-y-1/2 text-mist"
                strokeWidth={1.5}
              />
            </div>
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="booking-email" className={labelClasses}>
              Email Address
            </label>
            <input id="booking-email" name="email" type="email" autoComplete="email" className={inputClasses} />
            <p className="font-body text-caption text-mist">
              Optional · For calendar invite
            </p>
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="booking-notes" className={labelClasses}>
              Special Inquiries or Focus Areas
            </label>
            <textarea
              id="booking-notes"
              name="notes"
              rows={3}
              defaultValue="Please prepare Japanese CarVX inspection sheet and test drive on open bypass route."
              className="w-full rounded-sm border border-stone bg-white px-4 py-3 font-body text-body text-ink shadow-sm transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ink"
            />
          </div>
        </div>
      </section>

      <label
        htmlFor="booking-consent"
        className="flex min-h-11 cursor-pointer items-start gap-2 font-body text-small text-slate"
      >
        <input
          id="booking-consent"
          name="consent"
          type="checkbox"
          required
          checked={agreed}
          onChange={(event) => setAgreed(event.target.checked)}
          className="mt-1 size-4 rounded border-stone accent-ink"
        />
        <span>
          I agree to the processing of my details as described in the{" "}
          <Link
            href="/privacy"
            className="text-ink underline decoration-champagne decoration-1 underline-offset-4"
          >
            Privacy Policy
          </Link>
          .
        </span>
      </label>

      <div className="flex flex-wrap items-center gap-4">
        <Button type="submit" variant="primary" disabled={!agreed}>
          Confirm Booking
          <ArrowRight aria-hidden="true" className="ml-2 size-5" strokeWidth={1.5} />
        </Button>
        <p className="flex items-center gap-2 font-body text-caption text-slate">
          <Lock aria-hidden="true" className="size-5 text-champagne" strokeWidth={1.5} />
          No payment required. Free cancellation anytime.
        </p>
      </div>
    </form>
  );
}
