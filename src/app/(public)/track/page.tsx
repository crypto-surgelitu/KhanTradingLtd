import type { Metadata } from "next";
import {
  BadgeCheck,
  BellRing,
  Headset,
  MapPin,
  ShieldCheck,
} from "lucide-react";
import { TrackForm } from "@/features/tracking/components/track-form";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: "Track Your Purchase",
  description:
    "Real-time visibility into your vehicle allocation, documentation status, customs clearance, and handover timeline.",
};

// DESIGN.md Screen 6A — Track Your Purchase: Lookup. Server Component (the
// <main> landmark comes from the (public) layout); the two-step lookup lives
// in the single client leaf TrackForm. Contact values come from siteConfig.

const trustItems = [
  {
    icon: ShieldCheck,
    title: "256-bit Encrypted Session",
    caption: "Ref ID: PRD-882",
  },
  {
    icon: BellRing,
    title: "Automated SMS & WhatsApp Alerts",
    description:
      "Live notifications dispatched at every milestone: vessel berthing, CFS customs, inspection, and detailing.",
  },
  {
    icon: Headset,
    title: "Direct Dealership Access",
    description:
      "Direct contact with your dedicated sales advisor and clearing agent for immediate clarification.",
  },
  {
    icon: BadgeCheck,
    title: "Kenya Data Protection Compliance",
    description:
      "Your ID, KRA PIN, and financial records are strictly protected under the Kenya Data Protection Act 2019.",
  },
];

export default function TrackPurchasePage() {
  return (
    <>
      <section className="border-b border-graphite bg-ink py-14 sm:py-16">
        <div className="mx-auto flex max-w-7xl flex-col items-start gap-2 px-4 sm:px-6 lg:px-8">
          <span className="font-body text-eyebrow uppercase text-champagne">
            Client Concierge &amp; Operations
          </span>
          <h1 className="font-heading text-h1 text-white lg:text-h1-lg">
            Track your purchase
          </h1>
          <p className="max-w-3xl pt-1 font-body text-body-l text-mist lg:text-body-l-lg">
            Real-time visibility into your vehicle allocation, documentation
            status, customs clearance, and handover timeline.
          </p>
        </div>
      </section>

      <section className="bg-ivory py-14 sm:py-18 lg:py-24">
        <div className="mx-auto flex max-w-7xl flex-col gap-12 px-4 sm:px-6 lg:px-8">
          <TrackForm />

          <div className="mx-auto flex w-full max-w-7xl flex-col gap-8">
            <ul className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {trustItems.map((item) => (
                <li key={item.title}>
                  <article className="flex h-full flex-col gap-2 rounded-md border border-stone bg-white p-6">
                    <item.icon
                      aria-hidden="true"
                      className="size-6 text-champagne"
                      strokeWidth={1.5}
                    />
                    <h2 className="font-heading text-h3 lg:text-h3-lg">
                      {item.title}
                    </h2>
                    {item.caption ? (
                      <p className="font-body text-caption text-mist">{item.caption}</p>
                    ) : null}
                    {item.description ? (
                      <p className="font-body text-small text-slate">{item.description}</p>
                    ) : null}
                  </article>
                </li>
              ))}
            </ul>

            <div className="flex flex-col items-center gap-2 rounded-md border border-stone bg-white px-6 py-6 text-center">
              <p className="flex items-center gap-2 font-body text-small text-ink">
                <MapPin aria-hidden="true" className="size-5 shrink-0 text-champagne" strokeWidth={1.5} />
                Physical dossier inspection available at Khans Trading Ltd
                Showroom, Nairobi
              </p>
              <p className="flex flex-wrap items-center justify-center gap-2 font-body text-caption text-slate">
                Voucher verification hotline:
                <a
                  href={siteConfig.links.phone}
                  className="font-body text-caption font-medium text-ink underline decoration-champagne decoration-1 underline-offset-4 transition-colors hover:text-champagne-dark"
                >
                  {siteConfig.phone}
                </a>
                <span aria-hidden="true">·</span>
                Operational Hours: {siteConfig.openingHours}
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
