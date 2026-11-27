import {
  BadgeCheck,
  Clock,
  MapPin,
  MessageCircle,
  PhoneCall,
  Receipt,
  Shield,
  Wallet,
} from "lucide-react";
import { siteConfig } from "@/config/site";

// DESIGN.md Screen 6D sourcing guarantee and the direct-assistance contacts
// (business values from siteConfig placeholders).

const guaranteeItems = [
  {
    icon: BadgeCheck,
    title: "100% Genuine Mileage Guarantee",
    description:
      "Every unit carries physical CarVX (Japan) or HPI (UK) official digital certificates. Odometer tampering constitutes full refund.",
  },
  {
    icon: Receipt,
    title: "Itemized CIF & Tax Structure",
    description:
      "Zero hidden clearing overheads. Full transparency on shipping, marine insurance, KRA CRSP assessment, and NTSA registration.",
  },
  {
    icon: Wallet,
    title: "Segregated Client Escrow",
    description:
      "Acquisition funds remain safeguarded in our audited corporate client trust account until physical bills of lading are issued.",
  },
];

export function RequestGuarantee() {
  return (
    <section aria-label="Sourcing guarantee" className="pb-12">
      <div className="rounded-md border border-stone bg-white p-6 lg:p-8">
        <div className="flex flex-wrap items-center gap-3 pb-6">
          <Shield aria-hidden="true" className="size-6 text-champagne" strokeWidth={1.5} />
          <h2 className="font-heading text-h2 lg:text-h2-lg">
            The Khans Sourcing Guarantee
          </h2>
          <span className="inline-flex items-center rounded-full bg-champagne-tint px-2.5 py-1 font-body text-caption font-medium text-champagne-dark">
            Institutional security
          </span>
        </div>

        <ul className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {guaranteeItems.map((item) => (
            <li key={item.title} className="flex flex-col gap-2">
              <item.icon
                aria-hidden="true"
                className="size-6 text-champagne"
                strokeWidth={1.5}
              />
              <h3 className="font-heading text-h3 lg:text-h3-lg">{item.title}</h3>
              <p className="font-body text-small text-slate">{item.description}</p>
            </li>
          ))}
        </ul>

        <div className="mt-8 flex flex-col gap-4 rounded-md bg-ivory p-6">
          <h3 className="font-heading text-h3 lg:text-h3-lg">Direct Assistance</h3>
          <p className="font-body text-body text-slate">
            Prefer speaking to our acquisition desk directly?
          </p>
          <ul className="flex flex-col gap-2">
            <li className="flex items-center gap-2 font-body text-small text-ink">
              <PhoneCall aria-hidden="true" className="size-5 shrink-0 text-champagne" strokeWidth={1.5} />
              <a
                href={siteConfig.links.phone}
                className="font-medium text-ink underline decoration-champagne decoration-1 underline-offset-4 transition-colors hover:text-champagne-dark"
              >
                {siteConfig.phone}
              </a>
            </li>
            <li className="flex items-center gap-2 font-body text-small text-ink">
              <MessageCircle aria-hidden="true" className="size-5 shrink-0 text-champagne" strokeWidth={1.5} />
              <a
                href={siteConfig.links.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="font-medium text-ink underline decoration-champagne decoration-1 underline-offset-4 transition-colors hover:text-champagne-dark"
              >
                {siteConfig.whatsapp}
              </a>
            </li>
            <li className="flex items-center gap-2 font-body text-small text-ink">
              <MapPin aria-hidden="true" className="size-5 shrink-0 text-champagne" strokeWidth={1.5} />
              {siteConfig.address}, Nairobi, Kenya
            </li>
            <li className="flex items-center gap-2 font-body text-small text-slate">
              <Clock aria-hidden="true" className="size-5 shrink-0 text-champagne" strokeWidth={1.5} />
              {siteConfig.openingHours}
            </li>
          </ul>
          <a
            href={siteConfig.links.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex min-h-11 items-center justify-center gap-2 self-start rounded-sm bg-ink px-6 font-body text-button text-white transition-colors hover:bg-graphite"
          >
            <MessageCircle aria-hidden="true" className="size-5" strokeWidth={1.5} />
            Open WhatsApp Concierge
          </a>
        </div>
      </div>
    </section>
  );
}
