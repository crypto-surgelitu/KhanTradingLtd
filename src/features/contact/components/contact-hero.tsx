import { MapPin } from "lucide-react";

// DESIGN.md Screen 5 compact page hero: eyebrow, H1, one line and the
// showroom location chip.

export function ContactHero() {
  return (
    <section className="border-b border-graphite bg-ink py-14 sm:py-16">
      <div className="mx-auto flex max-w-7xl flex-col items-start gap-2 px-4 sm:px-6 lg:px-8">
        <span className="font-body text-eyebrow uppercase text-champagne">
          Get in Touch
        </span>
        <h1 className="font-heading text-h1 text-white lg:text-h1-lg">
          Contact Us
        </h1>
        <p className="max-w-3xl pt-1 font-body text-body-l text-mist lg:text-body-l-lg">
          Speak with our Nairobi showroom team regarding vehicle enquiries,
          viewings, financing, or trade-ins.
        </p>
        <p className="flex items-center gap-2 pt-2 font-body text-small text-champagne">
          <MapPin aria-hidden="true" className="size-5" strokeWidth={1.5} />
          Nairobi Showroom
        </p>
      </div>
    </section>
  );
}
