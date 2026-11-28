import Link from "next/link";
import { ArrowUpRight, HelpCircle } from "lucide-react";
import { cn } from "@/lib/utils";
import { shipmentCosts, shipmentDetail } from "@/features/admin/mocks";

// Incurred and projected cost lines for the shipment detail drawer (SAMPLE
// content). "View in Costing" is an internal route, so it is a Next.js Link;
// the full cost sheet lives at /admin/costing (DESIGN.md Section 8, Admin
// Screen L).

export function ShipmentCosts() {
  return (
    <section aria-label={shipmentDetail.costsTitle}>
      <div className="mb-2 flex items-center justify-between gap-2">
        <h3 className="font-body text-eyebrow uppercase text-slate">{shipmentDetail.costsTitle}</h3>
        <Link
          href="/admin/costing"
          className="inline-flex items-center gap-1 font-body text-caption text-champagne-dark underline-offset-4 hover:underline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ink"
        >
          {shipmentDetail.costsLinkLabel}
          <ArrowUpRight aria-hidden="true" className="size-3.5" strokeWidth={1.5} />
        </Link>
      </div>
      <div className="flex flex-col gap-2 rounded-md bg-ivory p-3 font-body text-caption">
        {shipmentCosts.map((line) => (
          <div
            key={line.label}
            className={cn(
              "flex items-center justify-between gap-2",
              line.tone === "warning" ? "font-medium text-warning" : "text-slate",
            )}
          >
            <span className="flex min-w-0 items-center gap-1">
              <span className="truncate">{line.label}</span>
              {line.help ? (
                <HelpCircle
                  aria-label="Estimate pending KRA verification"
                  className="size-3.5 shrink-0"
                  strokeWidth={1.5}
                />
              ) : null}
            </span>
            <span className={cn("shrink-0", line.tone === "warning" ? "" : "font-medium text-ink")}>
              {line.value}
            </span>
          </div>
        ))}
        <div className="flex items-center justify-between gap-2 border-t border-stone pt-2 font-body text-small font-semibold text-ink">
          <span>{shipmentDetail.totalLabel}</span>
          <span className="shrink-0 tabular-nums text-champagne-dark">{shipmentDetail.totalValue}</span>
        </div>
      </div>
    </section>
  );
}
