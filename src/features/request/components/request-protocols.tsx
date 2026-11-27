import { KeyRound, ShieldCheck, SlidersHorizontal } from "lucide-react";

// DESIGN.md Screen 6D three-step sourcing protocol cards.

const protocols = [
  {
    label: "Protocol 01",
    icon: SlidersHorizontal,
    title: "Specify Exact Criteria",
    description:
      "Exact make, target trim, year tolerances, interior palette, and total landed budget framework.",
    chip: "Zero commitment phase",
  },
  {
    label: "Protocol 02",
    icon: ShieldCheck,
    title: "Global Network Audit",
    description:
      "Physical multi-point inspection, live auction sheet vetting, and CarVX or UK HPI title authenticity checks.",
    chip: "Grade 4.5+ standard only",
  },
  {
    label: "Protocol 03",
    icon: KeyRound,
    title: "Present, Clear & Deliver",
    description:
      "Verified physical dossier, complete CIF & KRA duty clearance schedule, and white-glove doorstep delivery.",
    chip: "Turnkey registration in Kenya",
  },
];

export function RequestProtocols() {
  return (
    <section aria-label="Sourcing protocol" className="pb-12">
      <ul className="grid grid-cols-1 gap-6 md:grid-cols-3">
        {protocols.map((protocol) => (
          <li key={protocol.label}>
            <article className="flex h-full flex-col gap-3 rounded-md border border-stone bg-white p-6">
              <p className="font-body text-eyebrow uppercase text-champagne-dark">
                {protocol.label}
              </p>
              <protocol.icon
                aria-hidden="true"
                className="size-6 text-champagne"
                strokeWidth={1.5}
              />
              <h2 className="font-heading text-h3 lg:text-h3-lg">{protocol.title}</h2>
              <p className="font-body text-small text-slate">{protocol.description}</p>
              <p className="mt-auto pt-2">
                <span className="inline-flex items-center rounded-full bg-champagne-tint px-2.5 py-1 font-body text-caption font-medium text-champagne-dark">
                  {protocol.chip}
                </span>
              </p>
            </article>
          </li>
        ))}
      </ul>
    </section>
  );
}
