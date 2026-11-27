import Image from "next/image";
import { MessageCircle, Phone, UserCheck } from "lucide-react";
import { siteConfig } from "@/config/site";
import { trackSummary } from "@/features/tracking/mocks";

// DESIGN.md Screen 6B summary header: grade/ref/status, vehicle with price and
// client line, and the assigned concierge with Call / WhatsApp actions.

const toneStyles: Record<string, string> = {
  success: "bg-success/10 text-success",
  warning: "bg-warning/10 text-warning",
  muted: "bg-stone text-slate",
};

export function TrackSummaryHeader() {
  return (
    <section aria-label="Purchase summary" className="pb-12">
      <article className="flex flex-col gap-6 rounded-md border border-stone bg-white p-6 lg:p-8">
        <div className="flex flex-wrap items-center gap-3">
          <span className="inline-flex items-center rounded-full bg-champagne-tint px-2.5 py-1 font-body text-caption font-medium text-champagne-dark">
            {trackSummary.grade}
          </span>
          <span className="font-body text-caption text-slate">{trackSummary.ref}</span>
          <span className="inline-flex items-center rounded-full bg-info/10 px-2.5 py-1 font-body text-caption text-info">
            {trackSummary.status}
          </span>
        </div>

        <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
          <div className="relative aspect-video overflow-hidden rounded-md">
            <Image
              src={trackSummary.vehicleImage}
              alt={trackSummary.vehicleAlt}
              fill
              priority
              sizes="(min-width: 1024px) 50vw, calc(100vw - 32px)"
              className="object-cover"
            />
          </div>

          <div className="flex flex-col gap-3">
            <h1 className="font-heading text-h2 lg:text-h2-lg">
              {trackSummary.vehicleTitle}
            </h1>
            <p className="font-body text-small text-slate">{trackSummary.specs}</p>
            <p className="font-heading text-price tabular-nums text-ink">
              {trackSummary.price}
            </p>
            <p className="flex items-center gap-2 font-body text-small text-slate">
              <UserCheck aria-hidden="true" className="size-5 shrink-0 text-champagne" strokeWidth={1.5} />
              {trackSummary.client}
            </p>

            <div className="flex items-center gap-3 rounded-md bg-ivory p-3">
              <Image
                src={trackSummary.agent.image}
                alt={trackSummary.agent.imageAlt}
                width={512}
                height={512}
                className="size-12 shrink-0 rounded-full object-cover"
              />
              <div className="flex flex-col">
                <p className="font-body text-small font-medium text-ink">
                  {trackSummary.agent.name}
                </p>
                <p className="font-body text-caption text-slate">
                  {trackSummary.agent.role}
                </p>
              </div>
            </div>

            <div className="flex flex-wrap items-center gap-3">
              <a
                href={siteConfig.links.phone}
                className="inline-flex min-h-11 items-center gap-2 rounded-sm border border-ink px-4 font-body text-button text-ink transition-colors hover:bg-ink hover:text-white"
              >
                <Phone aria-hidden="true" className="size-5" strokeWidth={1.5} />
                Call {siteConfig.phone}
              </a>
              <a
                href={siteConfig.links.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-11 items-center gap-2 rounded-sm border border-ink px-4 font-body text-button text-ink transition-colors hover:bg-ink hover:text-white"
              >
                <MessageCircle aria-hidden="true" className="size-5" strokeWidth={1.5} />
                WhatsApp {siteConfig.whatsapp}
              </a>
            </div>
          </div>
        </div>
      </article>
    </section>
  );
}
