import { BadgeCheck, CalendarPlus, CheckCircle, Copy, MapPin, MessageCircle } from "lucide-react";
import { siteConfig } from "@/config/site";
import { bookingConfirmation } from "@/features/booking/mocks";

// DESIGN.md Screen 6C confirmation state (rendered as designed): reference,
// schedule & type, assigned host, dispatch note, calendar and directions
// actions and the reschedule link.

export function BookingConfirmation() {
  return (
    <section aria-label="Booking confirmation" className="pb-12">
      <article className="flex flex-col gap-6 rounded-md border border-stone bg-white p-6 lg:p-8">
        <div className="flex flex-wrap items-center gap-3">
          <CheckCircle aria-hidden="true" className="size-6 text-success" strokeWidth={1.5} />
          <h2 className="font-heading text-h2 lg:text-h2-lg">Booking Confirmed</h2>
          <span className="inline-flex items-center rounded-full bg-champagne-tint px-2.5 py-1 font-body text-caption font-medium text-champagne-dark">
            Showroom Appointment Showcase
          </span>
        </div>

        <div className="flex flex-wrap items-center gap-2 rounded-md bg-ivory p-4">
          <p className="font-body text-small text-slate">
            REF:{" "}
            <span className="font-heading text-h3 tabular-nums text-ink">
              {bookingConfirmation.ref}
            </span>
          </p>
          <button
            type="button"
            aria-label="Copy reference"
            className="flex size-11 items-center justify-center rounded-full text-slate transition-colors hover:text-ink"
          >
            <Copy aria-hidden="true" className="size-5" strokeWidth={1.5} />
          </button>
        </div>

        <div className="flex flex-col gap-1">
          <p className="flex items-center gap-2 font-body text-caption uppercase text-slate">
            <CalendarPlus aria-hidden="true" className="size-5 text-champagne" strokeWidth={1.5} />
            Schedule &amp; Type
          </p>
          <p className="font-body text-body font-medium text-ink">
            {bookingConfirmation.type}
          </p>
          <p className="font-body text-small text-slate">{bookingConfirmation.when}</p>
        </div>

        <div className="flex items-start gap-3 rounded-md bg-ivory p-4">
          <BadgeCheck aria-hidden="true" className="size-6 shrink-0 text-champagne" strokeWidth={1.5} />
          <div className="flex flex-col">
            <p className="font-body text-caption uppercase text-slate">
              Assigned Dealership Host
            </p>
            <p className="font-body text-body font-medium text-ink">
              {bookingConfirmation.host}
            </p>
            <p className="font-body text-small text-slate">
              {bookingConfirmation.hostRole}
            </p>
          </div>
        </div>

        <p className="flex items-start gap-2 font-body text-small text-slate">
          <MessageCircle aria-hidden="true" className="size-5 shrink-0 text-champagne" strokeWidth={1.5} />
          <span>
            A formal confirmation voucher with your secure showroom entry pass
            has been dispatched via WhatsApp to{" "}
            <span className="font-medium text-ink">
              {bookingConfirmation.dispatchPhone}
            </span>{" "}
            and SMS.
          </span>
        </p>

        <div className="flex flex-wrap items-center gap-3">
          <button
            type="button"
            className="inline-flex min-h-11 items-center gap-2 rounded-sm border border-ink px-4 font-body text-button text-ink transition-colors hover:bg-ink hover:text-white"
          >
            <CalendarPlus aria-hidden="true" className="size-5" strokeWidth={1.5} />
            Add to Calendar (.ics)
          </button>
          <a
            href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(siteConfig.address)}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex min-h-11 items-center gap-2 rounded-sm border border-ink px-4 font-body text-button text-ink transition-colors hover:bg-ink hover:text-white"
          >
            <MapPin aria-hidden="true" className="size-5" strokeWidth={1.5} />
            Get Directions to {siteConfig.address}
          </a>
        </div>

        <p className="flex flex-wrap items-center gap-2 border-t border-stone pt-4 font-body text-small text-slate">
          Need to change your arrival time?
          <a
            href={`mailto:${siteConfig.supportEmail}`}
            target="_blank"
            rel="noopener noreferrer"
            className="font-body text-small font-medium text-ink underline decoration-champagne decoration-1 underline-offset-4 transition-colors hover:text-champagne-dark"
          >
            Reschedule or cancel appointment
          </a>
        </p>
      </article>
    </section>
  );
}
