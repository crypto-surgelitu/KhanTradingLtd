import Link from "next/link";
import { ArrowRight, Clock, Mail, MapPin, MessageCircle, Phone } from "lucide-react";
import { siteConfig } from "@/config/site";

// DESIGN.md Screen 6B help card: direct dealership contacts (siteConfig
// placeholders) and the FAQ link.

export function TrackSupport() {
  return (
    <section aria-label="Support" className="pb-14 sm:pb-18 lg:pb-24">
      <div className="rounded-md border border-stone bg-white p-6 lg:p-8">
        <div className="flex flex-col gap-1 pb-6">
          <h2 className="font-heading text-h2 lg:text-h2-lg">Need Assistance?</h2>
          <p className="font-body text-small text-slate">
            Our operations and financing desk is available for immediate
            consultation.
          </p>
        </div>

        <ul className="flex flex-col gap-3">
          <li className="flex items-center gap-2 font-body text-small text-ink">
            <MapPin aria-hidden="true" className="size-5 shrink-0 text-champagne" strokeWidth={1.5} />
            {siteConfig.address}
          </li>
          <li className="flex items-center gap-2 font-body text-small text-ink">
            <Phone aria-hidden="true" className="size-5 shrink-0 text-champagne" strokeWidth={1.5} />
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
              WhatsApp: {siteConfig.whatsapp}
            </a>
          </li>
          <li className="flex items-center gap-2 font-body text-small text-ink">
            <Mail aria-hidden="true" className="size-5 shrink-0 text-champagne" strokeWidth={1.5} />
            <a
              href={siteConfig.links.email}
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium text-ink underline decoration-champagne decoration-1 underline-offset-4 transition-colors hover:text-champagne-dark"
            >
              {siteConfig.email}
            </a>
          </li>
          <li className="flex items-center gap-2 font-body text-small text-slate">
            <Clock aria-hidden="true" className="size-5 shrink-0 text-champagne" strokeWidth={1.5} />
            {siteConfig.openingHours}
          </li>
        </ul>

        <Link
          href="/faq"
          className="mt-6 inline-flex min-h-11 items-center gap-2 font-body text-small font-medium text-ink underline decoration-champagne decoration-1 underline-offset-4 transition-colors hover:text-champagne-dark"
        >
          Frequently Asked Questions on Handover
          <ArrowRight aria-hidden="true" className="size-5" strokeWidth={1.5} />
        </Link>
      </div>
    </section>
  );
}
