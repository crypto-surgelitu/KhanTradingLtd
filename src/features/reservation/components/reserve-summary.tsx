import Image from "next/image";
import { MessageCircle, Phone, ShieldCheck } from "lucide-react";
import { StatusBadge } from "@/components/shared/status-badge";
import { siteConfig } from "@/config/site";
import { reserveVehicleSummary } from "@/features/reservation/mocks";

// DESIGN.md Screen 6 sticky order-summary card: vehicle, pricing breakdown,
// refundability note and concierge support. Contact values come from siteConfig.

export function ReserveSummary() {
  return (
    <aside aria-label="Reservation summary" className="flex flex-col gap-6 lg:sticky lg:top-28">
      <div className="flex flex-col gap-4 rounded-md border border-stone bg-white p-6">
        <div className="flex flex-wrap items-center justify-between gap-2">
          <StatusBadge status="in_stock" />
          <p className="font-body text-caption text-slate">{reserveVehicleSummary.ref}</p>
        </div>

        <div className="relative aspect-video overflow-hidden rounded-md">
          <Image
            src={reserveVehicleSummary.image}
            alt={reserveVehicleSummary.imageAlt}
            fill
            sizes="(min-width: 1024px) 33vw, calc(100vw - 32px)"
            className="object-cover"
          />
        </div>

        <div className="flex flex-col gap-1">
          <h2 className="font-heading text-h3 lg:text-h3-lg">
            {reserveVehicleSummary.title}
          </h2>
          <p className="font-body text-small text-slate">
            {reserveVehicleSummary.specs.join(" • ")}
          </p>
        </div>

        <dl className="flex flex-col gap-3 border-t border-stone pt-4">
          <div className="flex items-baseline justify-between gap-4">
            <dt className="font-body text-small text-slate">
              {reserveVehicleSummary.totalLabel}
            </dt>
            <dd className="font-heading text-price tabular-nums text-ink">
              {reserveVehicleSummary.total}
            </dd>
          </div>
          <div className="flex items-baseline justify-between gap-4">
            <dt className="font-body text-small text-slate">
              {reserveVehicleSummary.depositLabel}
            </dt>
            <dd className="font-body text-small font-medium text-ink">
              {reserveVehicleSummary.deposit}
            </dd>
          </div>
          <div className="flex items-baseline justify-between gap-4">
            <dt className="font-body text-small text-slate">
              {reserveVehicleSummary.balanceLabel}
            </dt>
            <dd className="font-body text-small font-medium text-ink">
              {reserveVehicleSummary.balance}
            </dd>
          </div>
        </dl>

        <p className="flex items-start gap-2 rounded-md bg-ivory p-3 font-body text-caption text-slate">
          <ShieldCheck aria-hidden="true" className="size-5 shrink-0 text-champagne" strokeWidth={1.5} />
          <span>
            Deposits are held in client trust and are{" "}
            <span className="font-medium text-ink">
              100% refundable within [X] days
            </span>{" "}
            should the vehicle condition diverge from the official certified
            Japanese export condition report.
          </span>
        </p>
      </div>

      <div className="flex flex-col gap-3 rounded-md border border-stone bg-white p-6">
        <h2 className="font-heading text-h3 lg:text-h3-lg">
          Direct Concierge Support
        </h2>
        <a
          href={siteConfig.links.phone}
          className="inline-flex min-h-11 items-center gap-2 font-body text-small font-medium text-ink underline decoration-champagne decoration-1 underline-offset-4 transition-colors hover:text-champagne-dark"
        >
          <Phone aria-hidden="true" className="size-5" strokeWidth={1.5} />
          Call {siteConfig.phone}
        </a>
        <a
          href={siteConfig.links.whatsapp}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex min-h-11 items-center gap-2 font-body text-small font-medium text-ink underline decoration-champagne decoration-1 underline-offset-4 transition-colors hover:text-champagne-dark"
        >
          <MessageCircle aria-hidden="true" className="size-5" strokeWidth={1.5} />
          WhatsApp us
        </a>
      </div>
    </aside>
  );
}
