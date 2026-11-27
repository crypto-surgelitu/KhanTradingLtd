import Image from "next/image";
import { Check, Clock, MapPin, MessageCircle, Phone, ShieldCheck } from "lucide-react";
import { StatusBadge } from "@/components/shared/status-badge";
import { siteConfig } from "@/config/site";
import { bookingVehicleSummary } from "@/features/booking/mocks";

// DESIGN.md Screen 6C sticky summary card: vehicle, price, showroom location
// and hours, desk contacts, the private-viewing protocol and the concierge
// line. Business values come from siteConfig placeholders.

const protocolItems = [
  {
    title: "Key-in-Hand Inspection:",
    description:
      "Cold engine start, under-hood check, and diagnostic OBD scanner plug-in permitted.",
  },
  {
    title: "Zero Obligation:",
    description:
      "Viewing, inspection lounge access, and test drives are 100% complimentary.",
  },
  {
    title: "Dedicated Executive Bay:",
    description:
      "Vehicle is washed, sanitised, and climate-conditioned prior to your arrival.",
  },
];

export function BookingSummary() {
  return (
    <aside aria-label="Booking summary" className="flex flex-col gap-6 lg:sticky lg:top-28">
      <div className="flex flex-col gap-4 rounded-md border border-stone bg-white p-6">
        <div className="flex flex-wrap items-center justify-between gap-2">
          <StatusBadge status={bookingVehicleSummary.status} />
          <p className="font-body text-caption text-slate">
            {bookingVehicleSummary.stockRef}
          </p>
        </div>

        <div className="relative aspect-video overflow-hidden rounded-md">
          <Image
            src={bookingVehicleSummary.image}
            alt={bookingVehicleSummary.imageAlt}
            fill
            sizes="(min-width: 1024px) 33vw, calc(100vw - 32px)"
            className="object-cover motion-safe:transition-transform motion-safe:duration-300 motion-safe:ease-design"
          />
        </div>

        <div className="flex flex-col gap-1">
          <h2 className="font-heading text-h3 lg:text-h3-lg">
            {bookingVehicleSummary.title}
          </h2>
          <p className="font-body text-small text-slate">{bookingVehicleSummary.specs}</p>
        </div>

        <div className="flex items-baseline justify-between gap-4 border-t border-stone pt-3">
          <p className="font-body text-small text-slate">
            {bookingVehicleSummary.priceLabel}
          </p>
          <p className="font-heading text-price tabular-nums text-ink">
            {bookingVehicleSummary.price}
          </p>
        </div>

        <div className="flex flex-col gap-2">
          <p className="flex items-start gap-2 font-body text-small text-ink">
            <MapPin aria-hidden="true" className="size-5 shrink-0 text-champagne" strokeWidth={1.5} />
            <span>
              <span className="block font-body text-caption uppercase text-slate">
                Showroom Location
              </span>
              {bookingVehicleSummary.location}
            </span>
          </p>
          <p className="flex items-start gap-2 font-body text-small text-ink">
            <Clock aria-hidden="true" className="size-5 shrink-0 text-champagne" strokeWidth={1.5} />
            <span>
              <span className="block font-body text-caption uppercase text-slate">
                Operating Hours
              </span>
              {siteConfig.openingHours}
              <span className="block font-body text-caption text-slate">
                {bookingVehicleSummary.hoursSecondLine}
              </span>
            </span>
          </p>
          <p className="flex items-start gap-2 font-body text-small text-ink">
            <Phone aria-hidden="true" className="size-5 shrink-0 text-champagne" strokeWidth={1.5} />
            <span>
              <span className="block font-body text-caption uppercase text-slate">
                {bookingVehicleSummary.desk}
              </span>
              <a
                href={siteConfig.links.phone}
                className="font-medium text-ink underline decoration-champagne decoration-1 underline-offset-4 transition-colors hover:text-champagne-dark"
              >
                {siteConfig.phone}
              </a>{" "}
              <span aria-hidden="true">·</span> WhatsApp:{" "}
              <a
                href={siteConfig.links.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="font-medium text-ink underline decoration-champagne decoration-1 underline-offset-4 transition-colors hover:text-champagne-dark"
              >
                {siteConfig.whatsapp}
              </a>
            </span>
          </p>
        </div>
      </div>

      <div className="flex flex-col gap-3 rounded-md border border-stone bg-white p-6">
        <h2 className="flex items-center gap-2 font-heading text-h3 lg:text-h3-lg">
          <ShieldCheck aria-hidden="true" className="size-6 text-champagne" strokeWidth={1.5} />
          Khans Private Viewing Protocol
        </h2>
        <ul className="flex flex-col gap-3">
          {protocolItems.map((item) => (
            <li key={item.title} className="flex items-start gap-2">
              <Check aria-hidden="true" className="mt-1 size-5 shrink-0 text-champagne" strokeWidth={1.5} />
              <p className="font-body text-small text-slate">
                <span className="font-medium text-ink">{item.title}</span>{" "}
                {item.description}
              </p>
            </li>
          ))}
        </ul>
      </div>

      <a
        href={siteConfig.links.whatsapp}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex min-h-11 items-center gap-2 font-body text-small font-medium text-ink underline decoration-champagne decoration-1 underline-offset-4 transition-colors hover:text-champagne-dark"
      >
        <MessageCircle aria-hidden="true" className="size-5" strokeWidth={1.5} />
        Have a quick question? Ask our concierge on WhatsApp
      </a>
    </aside>
  );
}
