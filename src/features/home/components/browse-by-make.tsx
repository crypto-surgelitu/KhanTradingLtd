import Link from "next/link";

// MOCK: sample makes shown on the Home screen (design sample content).
// Replace with real stock makes when the backend query exists.
const makes = [
  { label: "Toyota", slug: "toyota" },
  { label: "Lexus", slug: "lexus" },
  { label: "Mercedes-Benz", slug: "mercedes-benz" },
  { label: "Land Rover", slug: "land-rover" },
  { label: "BMW", slug: "bmw" },
  { label: "Mazda", slug: "mazda" },
  { label: "Volkswagen", slug: "volkswagen" },
];

// DESIGN.md Screen 1 section 6: a row of make names in muted grey,
// centred and wrapping on small screens.
export function BrowseByMake() {
  return (
    <section className="bg-ivory pb-14 sm:pb-18 lg:pb-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="mb-6 text-center font-body text-eyebrow uppercase text-champagne-dark">
          Browse by make
        </h2>
        <ul className="flex flex-wrap items-center justify-center gap-x-8 gap-y-3">
          {makes.map((make) => (
            <li key={make.slug}>
              <Link
                href={`/vehicles?make=${make.slug}`}
                className="font-body text-body text-slate transition-colors hover:text-ink lg:text-body-l"
              >
                {make.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
