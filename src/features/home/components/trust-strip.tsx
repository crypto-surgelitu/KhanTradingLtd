import { ClipboardCheck, FileText, HandCoins, Tag } from "lucide-react";

const trustItems = [
  { icon: ClipboardCheck, label: "Inspected vehicles" },
  { icon: Tag, label: "Transparent pricing" },
  { icon: FileText, label: "Documentation support" },
  { icon: HandCoins, label: "Finance and trade-in help" },
];

// DESIGN.md Screen 1 section 2: four small items with icons and generic,
// number-free claims.
export function TrustStrip() {
  return (
    <section aria-label="Why buy from KHANS TRADING Ltd" className="bg-ivory pt-12 pb-6">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <ul className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {trustItems.map((item) => (
            <li
              key={item.label}
              className="flex items-center gap-3 rounded-md border border-stone bg-white p-4"
            >
              <item.icon
                aria-hidden="true"
                className="size-6 shrink-0 text-champagne-dark"
                strokeWidth={1.5}
              />
              <span className="font-body text-body">{item.label}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
