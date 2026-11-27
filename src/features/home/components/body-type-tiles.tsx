import Link from "next/link";
import { Bus, Car, CarFront, CarTaxiFront, Gem, Truck } from "lucide-react";
import { SectionHeader } from "@/components/shared/section-header";

const bodyTypes = [
  { label: "SUV", slug: "suv", icon: Car },
  { label: "Sedan", slug: "sedan", icon: CarFront },
  { label: "Hatchback", slug: "hatchback", icon: CarTaxiFront },
  { label: "Pickup", slug: "pickup", icon: Truck },
  { label: "Van", slug: "van", icon: Bus },
  { label: "Luxury", slug: "luxury", icon: Gem },
];

// DESIGN.md Screen 1 section 3: six body-type tiles with line icons.
// Two columns on mobile, three on tablet, six on desktop.
export function BodyTypeTiles() {
  return (
    <section className="bg-ivory py-14 sm:py-18 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeader eyebrow="Categories" title="Browse by body type" />
        <ul className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
          {bodyTypes.map((type) => (
            <li key={type.slug}>
              <Link
                href={`/vehicles?body_type=${type.slug}`}
                className="flex h-full flex-col items-center gap-3 rounded-md border border-stone bg-white p-6 transition-all hover:border-ink/12 hover:shadow-md motion-reduce:transition-none"
              >
                <type.icon
                  aria-hidden="true"
                  className="size-6 text-ink"
                  strokeWidth={1.5}
                />
                <span className="font-body text-body">{type.label}</span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
