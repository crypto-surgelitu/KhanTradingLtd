import { SectionHeader } from "@/components/shared/section-header";

const steps = [
  {
    number: "01",
    title: "Browse",
    description:
      "Explore our curated inventory online with full specifications and transparent pricing.",
  },
  {
    number: "02",
    title: "Enquire or reserve",
    description:
      "Connect directly with our team via WhatsApp or book a private viewing slot.",
  },
  {
    number: "03",
    title: "Inspect and test drive",
    description:
      "Review inspection reports, verify documentation, and experience the vehicle on the road.",
  },
  {
    number: "04",
    title: "Drive home",
    description:
      "Complete seamless transfer paperwork and drive away with complete peace of mind.",
  },
];

// DESIGN.md Screen 1 section 7: four numbered steps, horizontal on desktop
// and vertical on mobile.
export function HowBuyingWorks() {
  return (
    <section className="bg-ivory py-14 sm:py-18 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeader eyebrow="The Process" title="How buying works" />
        <ol className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((step) => (
            <li
              key={step.number}
              className="rounded-md border border-stone bg-white p-6"
            >
              <p className="mb-3 font-heading text-h2-lg text-champagne-dark">
                {step.number}
              </p>
              <h3 className="mb-2 font-heading text-h3">{step.title}</h3>
              <p className="font-body text-small text-slate">{step.description}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
