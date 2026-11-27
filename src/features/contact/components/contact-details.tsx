import {
  ArrowUpRight,
  Clock,
  Mail,
  MapPin,
  MessageCircle,
  Phone,
} from "lucide-react";
import { buttonVariants } from "@/components/ui/button";
import { siteConfig } from "@/config/site";

// DESIGN.md Screen 5 contact cards (phone, WhatsApp, email, address, hours)
// plus the map/location block. All business details come from siteConfig.

const actionClasses = "inline-flex items-center gap-1 font-body text-small font-medium text-ink underline decoration-champagne decoration-1 underline-offset-4 transition-colors hover:text-champagne-dark";

export function ContactDetails() {
  return (
    <div className="flex flex-col gap-6">
      <article className="flex flex-col gap-1 rounded-md border border-stone bg-white p-6">
        <p className="flex items-center gap-2 font-body text-eyebrow uppercase text-champagne-dark">
          <Phone aria-hidden="true" className="size-5" strokeWidth={1.5} />
          Phone
        </p>
        <p className="font-heading text-h3 lg:text-h3-lg">{siteConfig.phone}</p>
        <a href={siteConfig.links.phone} className={`${actionClasses} pt-1`}>
          Call showroom
          <ArrowUpRight aria-hidden="true" className="size-4" strokeWidth={1.5} />
        </a>
      </article>

      <article className="flex flex-col gap-1 rounded-md border border-stone bg-white p-6">
        <p className="flex items-center gap-2 font-body text-eyebrow uppercase text-champagne-dark">
          <MessageCircle aria-hidden="true" className="size-5" strokeWidth={1.5} />
          WhatsApp
        </p>
        <p className="font-heading text-h3 lg:text-h3-lg">{siteConfig.whatsapp}</p>
        <a
          href={siteConfig.links.whatsapp}
          className={`${actionClasses} pt-1`}
        >
          Message on WhatsApp
          <ArrowUpRight aria-hidden="true" className="size-4" strokeWidth={1.5} />
        </a>
      </article>

      <article className="flex flex-col gap-1 rounded-md border border-stone bg-white p-6">
        <p className="flex items-center gap-2 font-body text-eyebrow uppercase text-champagne-dark">
          <Mail aria-hidden="true" className="size-5" strokeWidth={1.5} />
          Email
        </p>
        <p className="font-heading text-h3 lg:text-h3-lg">{siteConfig.email}</p>
      </article>

      <article className="flex flex-col gap-1 rounded-md border border-stone bg-white p-6">
        <p className="flex items-center gap-2 font-body text-eyebrow uppercase text-champagne-dark">
          <MapPin aria-hidden="true" className="size-5" strokeWidth={1.5} />
          Showroom Address
        </p>
        <p className="font-body text-body text-ink">{siteConfig.address}</p>
      </article>

      <article className="flex flex-col gap-1 rounded-md border border-stone bg-white p-6">
        <p className="flex items-center gap-2 font-body text-eyebrow uppercase text-champagne-dark">
          <Clock aria-hidden="true" className="size-5" strokeWidth={1.5} />
          Opening Hours
        </p>
        <p className="font-body text-body text-ink">{siteConfig.openingHours}</p>
      </article>

      <article className="flex flex-col items-center gap-2 rounded-md border border-stone bg-stone/20 px-6 py-12 text-center">
        <MapPin aria-hidden="true" className="size-6 text-champagne" strokeWidth={1.5} />
        <h3 className="font-heading text-h3 lg:text-h3-lg">
          KHANS TRADING Ltd Showroom
        </h3>
        <p className="font-body text-small text-slate">{siteConfig.address}</p>
        <p className="font-body text-small text-slate">Nairobi, Kenya</p>
        <a
          href={siteConfig.links.whatsapp}
          className={`${buttonVariants({ variant: "secondary" })} mt-2`}
        >
          Get directions
        </a>
      </article>
    </div>
  );
}
