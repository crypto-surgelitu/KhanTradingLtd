import Image from "next/image";

// DESIGN.md Screen 4 team grid: placeholder cards labelled [NAME] [ROLE]
// (Section 0.6) with the designed category label and role title. Monochrome
// portraits, desaturated as drawn in the approved export.

const team = [
  {
    category: "Leadership",
    title: "Managing Director",
    image: "/images/about/team-director.webp",
    imageAlt:
      "Editorial monochrome portrait placeholder of a senior executive male automotive director in a tailored minimalist charcoal blazer, clean architectural studio background with soft warm key lighting and neutral gray tones.",
  },
  {
    category: "Procurement",
    title: "Head of Vehicle Procurement",
    image: "/images/about/team-procurement.webp",
    imageAlt:
      "Monochrome studio portrait of an automotive procurement specialist in smart professional attire against an elegant neutral gallery wall with subtle directional rim light and high-end editorial calm tone.",
  },
  {
    category: "Inspection",
    title: "Senior Technical Inspector",
    image: "/images/about/team-inspector.webp",
    imageAlt:
      "Editorial black and white profile photograph of a master automotive technical inspector in minimalist workshop setting with subtle diagnostic equipment and clean background.",
  },
  {
    category: "Concierge",
    title: "Client Concierge & Finance Lead",
    image: "/images/about/team-concierge.webp",
    imageAlt:
      "Refined black and white headshot of a private client concierge and finance advisor in smart tailored minimalist attire with soft natural lighting and calm dignified posture.",
  },
];

export function AboutTeam() {
  return (
    <section className="bg-white py-14 sm:py-18 lg:py-24">
      <div className="mx-auto flex max-w-7xl flex-col gap-12 px-4 sm:px-6 lg:px-8">
        <div className="flex max-w-3xl flex-col gap-2">
          <span className="font-body text-eyebrow uppercase text-champagne-dark">
            Leadership &amp; Specialists
          </span>
          <h2 className="font-heading text-h2 lg:text-h2-lg">Our team</h2>
          <p className="font-body text-body text-slate">
            Automotive professionals dedicated to advisory, technical
            verification, and concierge client delivery.
          </p>
        </div>

        <ul className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {team.map((member) => (
            <li key={member.category}>
              <article className="group h-full overflow-hidden rounded-md border border-stone bg-white">
                <div className="relative aspect-video overflow-hidden">
                  <Image
                    src={member.image}
                    alt={member.imageAlt}
                    fill
                    sizes="(min-width: 1024px) 296px, (min-width: 640px) 45vw, calc(100vw - 32px)"
                    className="object-cover grayscale motion-safe:transition-transform motion-safe:duration-300 motion-safe:ease-design motion-safe:group-hover:scale-103"
                  />
                </div>
                <div className="flex flex-col gap-1 p-4">
                  <p className="font-body text-eyebrow uppercase text-champagne-dark">
                    {member.category}
                  </p>
                  <h3 className="font-heading text-h3 lg:text-h3-lg">[NAME]</h3>
                  <p className="font-body text-small text-slate">[ROLE]</p>
                  <p className="font-body text-small font-medium text-ink">
                    {member.title}
                  </p>
                </div>
              </article>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
