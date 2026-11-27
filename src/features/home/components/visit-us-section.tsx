import Image from "next/image";
import { Clock, Mail, MapPin, MessageCircle, Phone } from "lucide-react";
import { buttonVariants } from "@/components/ui/button";
import { siteConfig } from "@/config/site";

const contactRows = [
  { icon: MapPin, value: siteConfig.address, href: undefined },
  { icon: Clock, value: siteConfig.openingHours, href: undefined },
  { icon: Phone, value: siteConfig.phone, href: siteConfig.links.phone },
  { icon: Mail, value: siteConfig.email, href: siteConfig.links.email },
];

// DESIGN.md Screen 1 section 12: map beside the showroom contact details,
// with phone and WhatsApp actions. Stacks on mobile.
export function VisitUsSection() {
  return (
    <section className="bg-ivory py-14 sm:py-18 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-12">
          <div className="relative h-96 overflow-hidden rounded-md shadow-md">
            <Image
              src="/images/home/visit-map.webp"
              alt="Map showing the KHANS TRADING Ltd showroom location area"
              fill
              sizes="(min-width: 1024px) 50vw, calc(100vw - 32px)"
              className="object-cover"
            />
          </div>
          <div>
            <p className="mb-2 font-body text-eyebrow uppercase text-champagne-dark">
              Showroom
            </p>
            <h2 className="font-heading text-h2 lg:text-h2-lg">Visit us in person</h2>
            <ul className="mt-6 flex flex-col gap-3 font-body text-body text-slate">
              {contactRows.map((row) => (
                <li key={row.value} className="flex items-start gap-3">
                  <row.icon
                    aria-hidden="true"
                    className="mt-0.5 size-5 shrink-0 text-champagne-dark"
                    strokeWidth={1.5}
                  />
                  {row.href ? (
                    <a href={row.href} className="transition-colors hover:text-ink">
                      {row.value}
                    </a>
                  ) : (
                    row.value
                  )}
                </li>
              ))}
            </ul>
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <a href={siteConfig.links.phone} className={buttonVariants()}>
                <Phone aria-hidden="true" className="mr-2 size-5" strokeWidth={1.5} />
                Call showroom
              </a>
              <a
                href={siteConfig.links.whatsapp}
                className={buttonVariants({ variant: "secondary" })}
              >
                <MessageCircle
                  aria-hidden="true"
                  className="mr-2 size-5"
                  strokeWidth={1.5}
                />
                WhatsApp
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
