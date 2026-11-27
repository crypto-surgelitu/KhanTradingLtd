import { ClipboardCheck, ListFilter, Settings2, Sparkles } from "lucide-react";

// DESIGN.md Screen 4 "How we source and inspect vehicles": the four-stage
// assessment process, horizontal on desktop and stacked on mobile.

const steps = [
  {
    number: "01",
    icon: ListFilter,
    title: "Direct Selection & Auction Screening",
    description:
      "Meticulous vetting at source in Japan, the UK, and verified local dealer networks, validating original service logs and verified auction grades.",
  },
  {
    number: "02",
    icon: Settings2,
    title: "150-Point Physical & Diagnostic Audit",
    description:
      "Comprehensive mechanical appraisal examining engine dynamics, suspension, drivetrain integrity, electronic ADAS systems, and structural chassis alignment.",
  },
  {
    number: "03",
    icon: ClipboardCheck,
    title: "Regulatory & Duty Clearance",
    description:
      "Thorough customs clearance, verified KRA duty documentation, QISJ / KEBS compliance, and clean NTSA TIMS logbook readiness.",
  },
  {
    number: "04",
    icon: Sparkles,
    title: "Showroom Detail & Client Handover",
    description:
      "High-definition interior leather sanitization, multi-stage paint reconditioning, fluid refresh, and complete documentation pack preparation.",
  },
];

export function AboutProcess() {
  return (
    <section className="bg-ivory py-14 sm:py-18 lg:py-24">
      <div className="mx-auto flex max-w-7xl flex-col gap-12 px-4 sm:px-6 lg:px-8">
        <div className="flex max-w-3xl flex-col gap-2">
          <span className="font-body text-eyebrow uppercase text-champagne-dark">
            The Process
          </span>
          <h2 className="font-heading text-h2 lg:text-h2-lg">
            How we source and inspect vehicles
          </h2>
          <p className="font-body text-body text-slate">
            A disciplined, multi-stage assessment before any vehicle is offered
            for sale.
          </p>
        </div>

        <ol className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
          {steps.map((step) => (
            <li key={step.number}>
              <article className="flex h-full flex-col gap-4 rounded-md border border-stone bg-white p-6">
                <div className="flex items-center justify-between">
                  <span className="font-heading text-price tabular-nums text-champagne-dark">
                    {step.number}
                  </span>
                  <step.icon
                    aria-hidden="true"
                    className="size-6 text-champagne"
                    strokeWidth={1.5}
                  />
                </div>
                <h3 className="font-heading text-h3 lg:text-h3-lg">{step.title}</h3>
                <p className="font-body text-small text-slate">{step.description}</p>
              </article>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
