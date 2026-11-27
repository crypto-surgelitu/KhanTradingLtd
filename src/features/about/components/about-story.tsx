import Image from "next/image";
import { BadgeCheck, BadgeDollarSign, Globe, MapPin } from "lucide-react";
import { siteConfig } from "@/config/site";

// DESIGN.md Screen 4 "Our story": editorial copy and trust points on the left,
// showroom photography with the address card on the right. Business details
// come from src/config/site.ts placeholders only.

const trustPoints = [
  {
    icon: BadgeCheck,
    title: "Clean Title Guarantee",
    description:
      "Authentic logbook verification, verified ownership chain, and clear regulatory title documentation.",
  },
  {
    icon: Globe,
    title: "Verified Japanese & UK Provenance",
    description:
      "Original export certificates, complete chassis history, and auction sheets shared upfront without redactions.",
  },
  {
    icon: BadgeDollarSign,
    title: "Fixed Transparent Pricing",
    description:
      "All duties, port charges, inspection fees, and standard registration taxes accounted for in writing.",
  },
];

export function AboutStory() {
  return (
    <section className="bg-ivory py-14 sm:py-18 lg:py-24">
      <div className="mx-auto flex max-w-7xl flex-col gap-12 px-4 sm:px-6 lg:px-8">
        <div className="flex max-w-3xl flex-col gap-2">
          <span className="font-body text-eyebrow uppercase text-champagne-dark">
            Background &amp; Philosophy
          </span>
          <h2 className="font-heading text-h2 lg:text-h2-lg">
            Founded on the principle that vehicle ownership should be
            transparent, straightforward, and dignified.
          </h2>
        </div>

        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12">
          <div className="flex flex-col gap-8 lg:col-span-6">
            <div className="flex flex-col gap-6 font-body text-body text-slate">
              <p>
                Established in {siteConfig.yearFounded}, KHANS TRADING Ltd was
                created to provide discerning motorists in Kenya with a
                dependable alternative to conventional car sales. We recognized
                early that sourcing a premium car is not merely a financial
                transaction, but an investment in personal mobility, safety, and
                peace of mind.
              </p>
              <p>
                Our approach removes ambiguity. Every vehicle in our Nairobi
                showroom is verified against manufacturer records, inspected
                through our rigorous multipoint framework, and presented with
                genuine customs, duty, and logbook provenance before it ever
                reaches the sales floor. We do not engage in pressure tactics or
                hidden costs.
              </p>
            </div>

            <div className="flex flex-col gap-6">
              {trustPoints.map((point) => (
                <article key={point.title} className="flex gap-4">
                  <point.icon
                    aria-hidden="true"
                    className="size-6 shrink-0 text-champagne"
                    strokeWidth={1.5}
                  />
                  <div className="flex flex-col gap-1">
                    <h3 className="font-heading text-h3 lg:text-h3-lg">
                      {point.title}
                    </h3>
                    <p className="font-body text-small text-slate">
                      {point.description}
                    </p>
                  </div>
                </article>
              ))}
            </div>
          </div>

          <div className="flex flex-col gap-4 lg:col-span-6">
            <div className="relative aspect-video overflow-hidden rounded-md">
              <Image
                src="/images/about/about-showroom.webp"
                alt="Editorial photograph of an immaculate architectural luxury motor vehicle showroom in Nairobi Kenya with pristine polished concrete floors, warm lighting, minimalist architectural lines, showcasing premium pristine imported vehicles bathed in natural gallery light with refined matte black accents and champagne hues."
                fill
                sizes="(min-width: 1024px) 50vw, calc(100vw - 32px)"
                className="object-cover"
              />
            </div>
            <article className="rounded-md border border-stone bg-white p-4">
              <h3 className="font-heading text-h3 lg:text-h3-lg">
                Nairobi Showroom Presentation
              </h3>
              <p className="flex items-center gap-2 pt-2 font-body text-small text-slate">
                <MapPin aria-hidden="true" className="size-5 shrink-0 text-champagne" strokeWidth={1.5} />
                {siteConfig.address}
              </p>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
}
