import { MessageCircle, Phone } from "lucide-react";
import { buttonVariants } from "@/components/ui/button";
import { siteConfig } from "@/config/site";

// DESIGN.md Screen 5 closing band: immediate-assistance CTA with the WhatsApp
// and phone actions. Contact values come from src/config/site.ts.

export function ContactCta() {
  return (
    <section className="bg-graphite py-14 text-white sm:py-18 lg:py-24">
      <div className="mx-auto flex max-w-7xl flex-col gap-6 px-4 sm:px-6 lg:px-8">
        <span className="font-body text-eyebrow uppercase text-champagne">
          Immediate Assistance
        </span>
        <h2 className="font-heading text-h2 text-white lg:text-h2-lg">
          Prefer a direct conversation?
        </h2>
        <p className="max-w-3xl font-body text-body-l text-mist lg:text-body-l-lg">
          Reach our Nairobi showroom team directly on WhatsApp or by phone for
          immediate vehicle availability and viewing slots.
        </p>
        <div className="flex flex-wrap items-center gap-3 pt-2">
          <a
            href={siteConfig.links.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className={buttonVariants({ variant: "accent" })}
          >
            <MessageCircle aria-hidden="true" className="mr-2 size-5" strokeWidth={1.5} />
            Chat on WhatsApp
          </a>
          <a
            href={siteConfig.links.phone}
            className={buttonVariants({ variant: "ghostWhite" })}
          >
            <Phone aria-hidden="true" className="mr-2 size-5" strokeWidth={1.5} />
            Call {siteConfig.phone}
          </a>
        </div>
      </div>
    </section>
  );
}
