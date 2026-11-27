import Image from "next/image";
import {
  BadgeCheck,
  CheckCircle,
  Phone,
  MessageCircle,
  Repeat,
  UserX,
  X,
  XCircle,
} from "lucide-react";
import { siteConfig } from "@/config/site";
import { viewingsDetail } from "@/features/admin/mocks";

// DESIGN.md Screen I booking detail drawer: reminder state, client
// particulars with notes, allocated inventory, operations logistics, the
// booking actions and the audit trail. Rendered as the export's designed
// open state (selection wiring lands with the viewings queries).

export function ViewingsDrawer() {
  const { client, vehicle, concierge, audit } = viewingsDetail;

  return (
    <aside aria-label="Booking details" className="flex flex-col gap-6 lg:sticky lg:top-28">
      <div className="flex flex-col gap-5 rounded-md border border-stone bg-white p-6">
        <div className="flex flex-wrap items-start justify-between gap-3">
          <div className="flex flex-col gap-1">
            <p className="font-body text-caption text-slate">{viewingsDetail.ref}</p>
            <h2 className="font-heading text-h3 lg:text-h3-lg">{viewingsDetail.title}</h2>
            <p className="font-body text-small text-slate">{viewingsDetail.when}</p>
          </div>
          <div className="flex items-center gap-2">
            <span className="inline-flex items-center rounded-full bg-success/10 px-2.5 py-1 font-body text-caption text-success">
              {viewingsDetail.status}
            </span>
            <button
              type="button"
              aria-label="Close details"
              className="flex size-11 items-center justify-center rounded-full text-slate transition-colors hover:text-ink"
            >
              <X aria-hidden="true" className="size-5" strokeWidth={1.5} />
            </button>
          </div>
        </div>

        <p className="flex items-start gap-2 rounded-md bg-success/10 p-3 font-body text-caption text-slate">
          <BadgeCheck aria-hidden="true" className="size-5 shrink-0 text-success" strokeWidth={1.5} />
          <span>
            <span className="font-medium text-ink">
              Automated Reminder Confirmed
            </span>{" "}
            {viewingsDetail.reminder}
          </span>
        </p>

        <h3 className="font-body text-eyebrow uppercase text-champagne-dark">
          Client Particulars
        </h3>
        <div className="flex items-start gap-3">
          <span
            aria-hidden="true"
            className="flex size-10 shrink-0 items-center justify-center rounded-full bg-stone font-body text-caption font-semibold text-ink"
          >
            {client.initials}
          </span>
          <div className="flex flex-col gap-1">
            <p className="font-body text-small font-medium text-ink">{client.name}</p>
            <p className="font-body text-caption text-slate">{client.descriptor}</p>
            <span className="inline-flex w-fit items-center rounded-full bg-champagne-tint px-2.5 py-1 font-body text-caption font-medium text-champagne-dark">
              {client.tier}
            </span>
          </div>
        </div>
        <div className="flex flex-wrap items-center gap-3">
          <a
            href={siteConfig.links.phone}
            className="inline-flex min-h-11 items-center gap-2 rounded-sm border border-ink px-4 font-body text-small font-medium text-ink transition-colors hover:bg-ink hover:text-white"
          >
            <Phone aria-hidden="true" className="size-5" strokeWidth={1.5} />
            {client.phone}
          </a>
          <a
            href={siteConfig.links.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex min-h-11 items-center gap-2 rounded-sm border border-ink px-4 font-body text-small font-medium text-ink transition-colors hover:bg-ink hover:text-white"
          >
            <MessageCircle aria-hidden="true" className="size-5" strokeWidth={1.5} />
            WhatsApp Client
          </a>
        </div>
        <div className="flex flex-col gap-1">
          <p className="font-body text-caption font-medium text-ink">
            Concierge Notes:
          </p>
          <p className="font-body text-small text-slate">{viewingsDetail.notes}</p>
        </div>

        <h3 className="border-t border-stone pt-4 font-body text-eyebrow uppercase text-champagne-dark">
          Allocated Inventory
        </h3>
        <div className="flex items-start gap-3">
          <Image
            src={vehicle.image}
            alt={vehicle.imageAlt}
            width={512}
            height={286}
            className="h-16 w-20 shrink-0 rounded-sm object-cover shadow-sm"
          />
          <div className="flex flex-col gap-1">
            <p className="font-body text-small font-medium text-ink">{vehicle.title}</p>
            <p className="font-body text-caption text-slate">{vehicle.specs}</p>
            <p className="font-heading text-price tabular-nums text-ink">{vehicle.price}</p>
            <span className="inline-flex w-fit items-center rounded-full bg-success/10 px-2.5 py-1 font-body text-caption text-success">
              {vehicle.readiness}
            </span>
          </div>
        </div>

        <h3 className="border-t border-stone pt-4 font-body text-eyebrow uppercase text-champagne-dark">
          Operations Logistics
        </h3>
        <div className="flex flex-wrap items-center gap-x-6 gap-y-2">
          <p className="flex items-center gap-2 font-body text-small text-slate">
            <span className="font-medium text-ink">Assigned Concierge</span>
            <span
              aria-hidden="true"
              className="flex size-8 items-center justify-center rounded-full bg-stone font-body text-caption font-semibold text-ink"
            >
              {concierge.initials}
            </span>
            {concierge.name}
          </p>
          <p className="flex items-center gap-2 font-body text-small text-slate">
            <span className="font-medium text-ink">Route Protocol</span>
            {viewingsDetail.route}
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-3 border-t border-stone pt-4">
          <button
            type="button"
            className="inline-flex min-h-11 items-center gap-2 rounded-sm bg-ink px-4 font-body text-small font-medium text-white transition-colors hover:bg-graphite"
          >
            <CheckCircle aria-hidden="true" className="size-5" strokeWidth={1.5} />
            Mark Completed
          </button>
          <button
            type="button"
            className="inline-flex min-h-11 items-center gap-2 rounded-sm border border-ink px-4 font-body text-small font-medium text-ink transition-colors hover:bg-ink hover:text-white"
          >
            <Repeat aria-hidden="true" className="size-5" strokeWidth={1.5} />
            Reschedule
          </button>
          <button
            type="button"
            className="inline-flex min-h-11 items-center gap-2 rounded-sm border border-ink px-4 font-body text-small font-medium text-ink transition-colors hover:bg-ink hover:text-white"
          >
            <UserX aria-hidden="true" className="size-5" strokeWidth={1.5} />
            Mark No-Show
          </button>
          <button
            type="button"
            className="inline-flex min-h-11 items-center gap-2 rounded-sm bg-danger px-4 font-body text-small font-medium text-white transition-colors hover:bg-danger/90"
          >
            <XCircle aria-hidden="true" className="size-5" strokeWidth={1.5} />
            Cancel Booking
          </button>
        </div>

        <h3 className="border-t border-stone pt-4 font-body text-eyebrow uppercase text-champagne-dark">
          Audit Trail
        </h3>
        <ul className="flex flex-col gap-2">
          {audit.map((row) => (
            <li key={row.entry} className="flex flex-wrap items-center gap-2">
              <p className="font-body text-caption text-slate">{row.entry}</p>
              <span className="inline-flex items-center rounded-full bg-stone px-2 py-0.5 font-body text-caption text-slate">
                {row.tag}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </aside>
  );
}
