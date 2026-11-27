import { SectionHeader } from "@/components/shared/section-header";

const statements = [
  {
    title: "Verified provenance",
    description:
      "Every vehicle undergoes thorough mechanical inspection and documentation verification before reaching our showroom.",
  },
  {
    title: "Calm, honest dealing",
    description:
      "No pressure tactics or hidden fees. We provide clear pricing and straightforward guidance from first enquiry to handover.",
  },
  {
    title: "End-to-end support",
    description:
      "From NTSA logbook transfers to bank financing introductions and trade-in valuations, we handle the details.",
  },
];

// DESIGN.md Screen 1 section 10: three columns of short statements,
// no statistics or invented numbers.
export function WhyChooseUs() {
  return (
    <section className="bg-ivory py-14 sm:py-18 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeader eyebrow="Our Standard" title="Why choose KHANS TRADING Ltd" />
        <ul className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {statements.map((statement) => (
            <li key={statement.title}>
              <h3 className="mb-3 font-heading text-h3">{statement.title}</h3>
              <p className="font-body text-body text-slate">{statement.description}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
