import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  BadgeCheck,
  FileText,
  Gauge,
  MessageCircle,
  Ruler,
  ShieldCheck,
  Star,
} from "lucide-react";
import { formatCurrency } from "@/lib/format";
import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button";
import { StatusBadge } from "@/components/shared/status-badge";
import { siteConfig } from "@/config/site";
import {
  CompareAddSlot,
  CompareControls,
  CompareRemoveButton,
} from "@/features/compare/components/compare-controls";
import {
  compareFromSavedCount,
  compareMaxVehicles,
  compareSpecGroups,
  compareVehicles,
} from "@/features/compare/mocks";

export const metadata: Metadata = {
  title: "Compare Vehicles",
  description:
    "Evaluate technical specifications, trim equipment, and performance side-by-side to find the ideal match for your driving requirements.",
};

const groupIcons = { gauge: Gauge, ruler: Ruler, star: Star } as const;

// DESIGN.md Section 6, Screen 8 — Compare Vehicles. Server Component (the
// <main> landmark comes from the (public) layout); interactive leaves live in
// features/compare/components/compare-controls.tsx. SAMPLE comparison data
// comes from features/compare/mocks.ts until the backend contract lands.
export default function ComparePage() {
  const comparedCount = compareVehicles.length;
  const bodyTypePlural = compareVehicles[0]?.bodyTypePlural ?? "vehicles";
  const dockSummary = compareVehicles
    .map((vehicle) => `${vehicle.shortLabel} (${vehicle.priceCompact})`)
    .join(" vs ");

  return (
    <div className="w-full">
      <section aria-labelledby="compare-heading" className="pt-8 pb-6">
        <div className="mx-auto flex max-w-7xl flex-col gap-6 px-4 sm:px-6 lg:px-8">
          <nav aria-label="Breadcrumb" className="flex flex-wrap items-center gap-2 font-body text-small text-slate">
            <Link href="/" className="transition-colors hover:text-ink">
              Home
            </Link>
            <span aria-hidden="true" className="text-mist">/</span>
            <Link href="/vehicles" className="transition-colors hover:text-ink">
              Vehicles
            </Link>
            <span aria-hidden="true" className="text-mist">/</span>
            <span className="font-medium text-ink">Vehicle Comparison</span>
          </nav>

          <div className="flex flex-col gap-6 pb-2 md:flex-row md:items-end md:justify-between">
            <div className="max-w-3xl">
              <span className="mb-2 block font-body text-eyebrow font-semibold tracking-widest text-champagne-dark uppercase">
                Comparison Matrix
              </span>
              <h1 id="compare-heading" className="font-heading text-h1 text-ink lg:text-h1-lg">
                Compare Vehicles
              </h1>
              <p className="mt-2 max-w-2xl font-body text-body-l text-slate lg:text-body-l-lg">
                Evaluate technical specifications, trim equipment, and
                performance side-by-side to find the ideal match for your driving
                requirements.
              </p>
            </div>
            <p className="inline-flex w-fit items-center gap-2 rounded-full border border-stone bg-white px-3.5 py-1.5 font-body text-caption font-medium text-ink shadow-sm">
              <span aria-hidden="true" className="size-2 rounded-full bg-champagne" />
              <span>
                Comparing {comparedCount} of {compareMaxVehicles} vehicles
              </span>
            </p>
          </div>
        </div>
      </section>

      <CompareControls>
        <section aria-labelledby="compare-matrix-heading">
          <div className="mx-auto max-w-7xl px-4 pb-20 sm:px-6 lg:px-8">
            <h2 id="compare-matrix-heading" className="sr-only">
              Comparison matrix
            </h2>
            <div className="overflow-x-auto pb-6">
              <div className="flex min-w-max items-start gap-5">
                <table className="w-full flex-1 border-collapse rounded-md border border-stone bg-white text-left font-body text-small">
                  <caption className="sr-only">
                    Side-by-side comparison of {compareVehicles.map((vehicle) => vehicle.title).join(" and ")}
                  </caption>
                  <thead>
                    <tr>
                      <th scope="col" className="w-1/4 rounded-md bg-ivory p-6 align-bottom">
                        <span className="font-body text-eyebrow font-semibold tracking-widest text-mist uppercase">
                          Architectural Specification
                        </span>
                        <h3 className="mt-1 font-heading text-h3 text-ink">
                          Technical Dimensions &amp; Features
                        </h3>
                        <p className="mt-2 font-body text-small text-slate">
                          Verified factory configurations, local registration
                          compliance, and equipment details.
                        </p>
                        <p className="mt-6 flex items-center gap-2 border-t border-stone pt-4 font-body text-caption text-mist">
                          <BadgeCheck aria-hidden="true" className="size-4 shrink-0" strokeWidth={1.5} />
                          <span>All parameters documented by Khans Trading</span>
                        </p>
                      </th>
                      {compareVehicles.map((vehicle) => (
                        <th key={vehicle.id} scope="col" className="w-1/4 p-4 align-top font-normal">
                          <div className="flex flex-col">
                            <div className="relative aspect-card overflow-hidden rounded-md bg-ivory">
                              <Image
                                src={vehicle.image}
                                alt={vehicle.imageAlt}
                                fill
                                sizes="(min-width: 1024px) 320px, (min-width: 768px) 45vw, 80vw"
                                className="object-cover"
                              />
                              <StatusBadge status={vehicle.status} className="absolute top-3 left-3 shadow-sm" />
                              <CompareRemoveButton vehicleTitle={vehicle.title} />
                            </div>
                            <div className="mt-4 flex flex-col">
                              <div className="flex flex-wrap items-center justify-between gap-2">
                                <span className="font-body text-caption font-semibold tracking-wider text-mist uppercase">
                                  {vehicle.stockRef}
                                </span>
                                <span className="font-body text-caption text-slate">{vehicle.location}</span>
                              </div>
                              <h3 className="mt-1 font-heading text-h3 text-ink">{vehicle.title}</h3>
                              <p className="mt-2 font-heading text-price font-semibold text-ink">
                                {formatCurrency(vehicle.price)}
                              </p>
                              <div className="mt-4 grid grid-cols-2 gap-2">
                                <Link
                                  href={`/vehicles/${vehicle.slug}/reserve`}
                                  className={buttonVariants({ variant: "primary", className: "w-full" })}
                                >
                                  Reserve
                                </Link>
                                <a
                                  href={siteConfig.links.whatsapp}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className={buttonVariants({ variant: "secondary", className: "w-full gap-1" })}
                                >
                                  <MessageCircle aria-hidden="true" className="size-5 text-champagne-dark" strokeWidth={1.5} />
                                  <span>Enquire</span>
                                </a>
                              </div>
                            </div>
                          </div>
                        </th>
                      ))}
                    </tr>
                  </thead>
                  {compareSpecGroups.map((group) => {
                    const GroupIcon = groupIcons[group.icon];
                    return (
                      <tbody key={group.id}>
                        <tr>
                          <th scope="rowgroup" colSpan={3} className="sticky left-0 z-10 border-y border-stone/60 bg-ivory px-3 py-1">
                            <span className="inline-flex items-center gap-2 rounded-sm bg-stone/60 px-3 py-2 font-body text-eyebrow font-semibold tracking-wider text-ink uppercase">
                              {group.label}
                              <GroupIcon aria-hidden="true" className="size-4 text-slate" strokeWidth={1.5} />
                            </span>
                          </th>
                        </tr>
                        {group.rows.map((row) => (
                          <tr key={row.label} data-diff={row.values[0] !== row.values[1] ? "true" : "false"}>
                            <th scope="row" className="sticky left-0 z-10 border-b border-stone/50 bg-white px-3 py-3.5 font-body text-small font-medium text-slate">
                              {row.label}
                            </th>
                            {row.values.map((value) => (
                              <td
                                key={value}
                                className={cn(
                                  "border-b border-stone/50 px-4 py-3.5 text-ink",
                                  row.emphasized && "font-semibold",
                                )}
                              >
                                {value}
                              </td>
                            ))}
                          </tr>
                        ))}
                      </tbody>
                    );
                  })}
                  <tfoot>
                    <tr>
                      <th scope="row" className="sticky left-0 z-10 bg-ivory/50 px-3 py-4">
                        <span className="sr-only">Vehicle actions</span>
                      </th>
                      {compareVehicles.map((vehicle) => (
                        <td key={vehicle.id} className="border-t border-stone bg-ivory/50 px-4 py-4">
                          <Link
                            href={`/vehicles/${vehicle.slug}`}
                            className={buttonVariants({ variant: "secondary", className: "w-full" })}
                          >
                            View Full Details
                          </Link>
                        </td>
                      ))}
                    </tr>
                  </tfoot>
                </table>
                <CompareAddSlot savedCount={compareFromSavedCount} />
              </div>
            </div>
          </div>
        </section>
      </CompareControls>

      <section aria-labelledby="verification-heading" className="border-t border-stone bg-white py-12">
        <div className="mx-auto flex max-w-7xl flex-col gap-6 px-4 sm:px-6 md:flex-row md:items-center md:justify-between lg:px-8">
          <div className="max-w-3xl">
            <h2 id="verification-heading" className="mb-1 font-heading text-body-l font-medium text-ink">
              Khans Trading Verification Standards
            </h2>
            <p className="font-body text-small text-slate">
              Every vehicle compared above is physical inventory available for
              inspection at our showroom. All duty documentation, logbooks, and
              auction inspection certificates (JEVIC / QISJ) are verified prior
              to retail listing. [KRA clearance verified] on all stock units.
            </p>
          </div>
          <ul className="flex shrink-0 flex-wrap items-center gap-4">
            <li className="flex items-center gap-2 font-body text-small font-medium text-ink">
              <ShieldCheck aria-hidden="true" className="size-5 text-success" strokeWidth={1.5} />
              <span>100% Genuine Odometer</span>
            </li>
            <li className="flex items-center gap-2 font-body text-small font-medium text-ink">
              <FileText aria-hidden="true" className="size-5 text-success" strokeWidth={1.5} />
              <span>Duty Paid Guaranteed</span>
            </li>
          </ul>
        </div>
      </section>

      <aside aria-label="Comparison summary" className="pointer-events-none fixed bottom-6 left-1/2 z-40 w-full max-w-4xl -translate-x-1/2 px-4">
        <div className="pointer-events-auto flex items-center justify-between gap-4 rounded-md border border-graphite bg-ink p-4 text-white shadow-lg">
          <div className="flex items-center gap-4">
            <ul className="flex -space-x-2">
              {compareVehicles.map((vehicle) => (
                <li key={vehicle.id} className="size-10 overflow-hidden rounded-full border-2 border-ink bg-ivory">
                  <Image
                    src={vehicle.thumb}
                    alt={vehicle.thumbAlt}
                    width={40}
                    height={40}
                    className="size-full object-cover"
                  />
                </li>
              ))}
            </ul>
            <div className="hidden sm:block">
              <p className="font-body text-small font-medium text-white">
                Comparing {comparedCount} {bodyTypePlural}
              </p>
              <p className="font-body text-caption text-mist">{dockSummary}</p>
            </div>
          </div>
        </div>
      </aside>
    </div>
  );
}
