import Link from "next/link";
import { Clock, MapPin, Phone } from "lucide-react";
import { buttonVariants } from "@/components/ui/button";
import { siteConfig } from "@/config/site";

// DESIGN.md Screen 4 closing CTA band: "Visit the showroom" on a graphite
// surface with the two actions and the contact line (placeholders only).

export function AboutCta() {
  return (
    <section className="bg-graphite py-14 text-white sm:py-18 lg:py-24">
      <div className="mx-auto flex max-w-7xl flex-col gap-6 px-4 sm:px-6 lg:px-8">
        <span className="font-body text-eyebrow uppercase text-champagne">
          Experience in Person
        </span>
        <h2 className="font-heading text-h2 text-white lg:text-h2-lg">
          Visit the showroom.
        </h2>
        <p className="max-w-3xl font-body text-body-l text-mist lg:text-body-l-lg">
          Explore our collection in a calm, pressure-free environment at our
          Nairobi showroom. Private viewings and guided inspections available
          daily.
        </p>
        <div className="flex flex-wrap items-center gap-3 pt-2">
          <Link href="/vehicles" className={buttonVariants({ variant: "accent" })}>
            Browse vehicles
          </Link>
          <Link href="/contact" className={buttonVariants({ variant: "ghostWhite" })}>
            Contact us
          </Link>
        </div>
        <p className="flex flex-wrap items-center gap-2 pt-2 font-body text-small text-mist">
          <MapPin aria-hidden="true" className="size-5 shrink-0 text-champagne" strokeWidth={1.5} />
          {siteConfig.address}
          <span aria-hidden="true">·</span>
          <Clock aria-hidden="true" className="size-5 shrink-0 text-champagne" strokeWidth={1.5} />
          Open {siteConfig.openingHours}
          <span aria-hidden="true">·</span>
          <Phone aria-hidden="true" className="size-5 shrink-0 text-champagne" strokeWidth={1.5} />
          Call: {siteConfig.phone}
        </p>
      </div>
    </section>
  );
}
