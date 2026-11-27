import Image from "next/image";
import { buttonVariants } from "@/components/ui/button";

const panels = [
  {
    image: "/images/home/collection-suv-crossovers.webp",
    imageAlt:
      "A dark metallic SUV driving on a scenic Kenyan highland road at golden hour, dramatic landscape, editorial automotive photography",
    eyebrow: "Built for the Road",
    title: "SUVs and Crossovers",
    exploreHref: "/vehicles?body_type=suv",
  },
  {
    image: "/images/home/collection-luxury.webp",
    imageAlt:
      "A flagship luxury sedan parked in a dimly lit architectural concrete gallery with warm champagne accent lighting, editorial automotive photography",
    eyebrow: "Executive Presence",
    title: "Luxury Collection",
    exploreHref: "/vehicles?body_type=luxury",
  },
];

// DESIGN.md Screen 1 section 5: two large image tiles side by side (stacked on
// mobile), each with an eyebrow, an H2 over a dark overlay, and two actions.
export function CollectionPanels() {
  return (
    <section aria-label="Collections" className="bg-ivory py-14 sm:py-18 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
          {panels.map((panel) => (
            <div
              key={panel.title}
              className="relative flex aspect-panel items-end overflow-hidden rounded-md"
            >
              <Image
                src={panel.image}
                alt={panel.imageAlt}
                fill
                sizes="(min-width: 1024px) 50vw, calc(100vw - 32px)"
                className="object-cover"
              />
              <div aria-hidden="true" className="absolute inset-0 bg-ink/50" />
              <div className="relative z-10 flex flex-col gap-4 p-6 lg:p-8">
                <p className="font-body text-eyebrow uppercase text-champagne">
                  {panel.eyebrow}
                </p>
                <h2 className="font-heading text-h2 text-white lg:text-h2-lg">
                  {panel.title}
                </h2>
                <div className="flex flex-wrap items-center gap-4">
                  <a
                    href={panel.exploreHref}
                    className={buttonVariants({ variant: "accent" })}
                  >
                    Explore
                  </a>
                  <a
                    href="/vehicles"
                    className={buttonVariants({ variant: "ghostWhite" })}
                  >
                    View inventory
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
