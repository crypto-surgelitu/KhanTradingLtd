import Link from "next/link";
import { ArrowRight, Ship } from "lucide-react";
import { AdminSectionHeader } from "@/features/admin/components/admin-section-header";
import { AdminStatusPill } from "@/features/admin/components/admin-status-pill";
import { arrivingSoon } from "@/features/admin/mocks";

// DESIGN.md Screen B "Arriving Soon" shipment feed with the pipeline link.

export function ArrivingSoon() {
  return (
    <section aria-label="Arriving soon">
      <AdminSectionHeader
        title="Arriving Soon"
        icon={Ship}
        viewAllHref="/admin/shipments"
      />

      <ul className="flex flex-col gap-4">
        {arrivingSoon.map((row) => (
          <li key={row.title}>
            <article className="flex flex-col gap-2 rounded-md border border-stone bg-white p-4">
              <div className="flex flex-wrap items-center gap-3">
                <h3 className="font-heading text-h3 lg:text-h3-lg">{row.title}</h3>
                <AdminStatusPill label={row.stage} tone={row.stageTone} />
              </div>
              <p className="font-body text-small text-slate">
                {row.detail} <span className="font-medium text-ink">{row.eta}</span>
              </p>
              <p className="font-body text-caption text-mist">{row.location}</p>
              <p className="font-body text-caption text-mist">{row.note}</p>
            </article>
          </li>
        ))}
      </ul>

      <Link
        href="/admin/shipments"
        className="mt-6 inline-flex min-h-11 items-center gap-1 font-body text-small font-medium text-ink underline decoration-champagne decoration-1 underline-offset-4 transition-colors hover:text-champagne-dark"
      >
        Manage pipeline logistics
        <ArrowRight aria-hidden="true" className="size-4" strokeWidth={1.5} />
      </Link>
    </section>
  );
}
