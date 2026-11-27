import { BadgeCheck, FileText, Handshake, Headset } from "lucide-react";

// DESIGN.md Screen 4 "What we stand for": four value cards, each with an
// icon, title, statement and its numbered standard label.

const values = [
  {
    icon: BadgeCheck,
    title: "Quality",
    standard: "Standard 01",
    description:
      "We selectively curate only grade-rated, verified vehicles that pass our strict structural and mechanical tolerances. If a vehicle doesn’t meet our standards, it never enters our inventory.",
  },
  {
    icon: FileText,
    title: "Transparency",
    standard: "Standard 02",
    description:
      "Full provenance disclosure for every chassis. Export certificates, KRA tax compliance slips, and comprehensive inspection dossiers are readily shared with every buyer.",
  },
  {
    icon: Headset,
    title: "Service",
    standard: "Standard 03",
    description:
      "From your initial viewing and bespoke test drive to registration, bank financing guidance, and handover, our dedicated specialists accompany every step.",
  },
  {
    icon: Handshake,
    title: "Trust",
    standard: "Standard 04",
    description:
      "Clear pricing, zero unverified claims, and long-term client support. We build lasting relationships anchored in honest dealing and client advocacy.",
  },
];

export function AboutValues() {
  return (
    <section className="bg-white py-14 sm:py-18 lg:py-24">
      <div className="mx-auto flex max-w-7xl flex-col gap-12 px-4 sm:px-6 lg:px-8">
        <div className="flex max-w-3xl flex-col gap-2">
          <span className="font-body text-eyebrow uppercase text-champagne-dark">
            Core Values
          </span>
          <h2 className="font-heading text-h2 lg:text-h2-lg">What we stand for</h2>
          <p className="font-body text-body text-slate">
            The non-negotiable principles guiding every acquisition, inspection,
            and customer relationship.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {values.map((value) => (
            <article
              key={value.title}
              className="flex flex-col gap-4 rounded-md border border-stone bg-white p-6 lg:p-8"
            >
              <value.icon
                aria-hidden="true"
                className="size-6 text-champagne"
                strokeWidth={1.5}
              />
              <h3 className="font-heading text-h3 lg:text-h3-lg">{value.title}</h3>
              <p className="font-body text-body text-slate">{value.description}</p>
              <p className="mt-auto pt-2 font-body text-eyebrow uppercase text-champagne-dark">
                {value.standard}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
