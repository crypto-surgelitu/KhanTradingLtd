import { Anchor, Clock, History, Receipt, Ship, TrendingUp } from "lucide-react";
import { cn } from "@/lib/utils";
import { shipmentStats, type ShipmentStat } from "@/features/admin/mocks";

// DESIGN.md Section 8 Admin Screen M KPI strip (SAMPLE numbers, Section 0.7):
// four white metric cards, each with a 2px accent bar on top, an icon chip and
// a lead + note line. Tokens from DESIGN.md Section 3 only.

const statIcons: Record<ShipmentStat["icon"], React.ElementType> = {
  ship: Ship,
  anchor: Anchor,
  history: History,
  receipt: Receipt,
};

const leadIcons = { trending: TrendingUp, clock: Clock } as const;

const iconChips: Record<ShipmentStat["iconChip"], string> = {
  champagne: "bg-champagne-tint/70 text-champagne-dark",
  info: "bg-info/10 text-info",
  graphite: "bg-stone/60 text-graphite",
  tint: "bg-champagne-tint text-champagne-dark",
};

const accentBars: Record<ShipmentStat["bar"], string> = {
  champagne: "bg-champagne",
  info: "bg-info",
  slate: "bg-slate",
  "champagne-dark": "bg-champagne-dark",
};

const leadTones: Record<ShipmentStat["leadTone"], string> = {
  ink: "text-ink",
  slate: "text-slate",
  mist: "text-mist",
  success: "text-success",
  warning: "text-warning",
  danger: "text-danger",
  info: "text-info",
  "champagne-dark": "text-champagne-dark",
};

export function ShipmentStats() {
  return (
    <section
      aria-label="Shipment pipeline summary"
      className="mb-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4"
    >
      {shipmentStats.map((stat) => {
        const Icon = statIcons[stat.icon];
        const LeadIcon = stat.leadIcon ? leadIcons[stat.leadIcon] : null;
        return (
          <article
            key={stat.label}
            className="relative flex flex-col justify-between overflow-hidden rounded-md border border-stone bg-white p-6 shadow-sm"
          >
            <span
              aria-hidden="true"
              className={cn("absolute inset-x-0 top-0 h-0.5", accentBars[stat.bar])}
            />
            <div className="flex items-start justify-between gap-3">
              <div className="min-w-0">
                <p className="font-body text-eyebrow uppercase text-slate">{stat.label}</p>
                <p className="mt-1 font-heading text-h2 font-semibold tabular-nums text-ink lg:text-h2-lg">
                  {stat.value}
                </p>
              </div>
              <span
                aria-hidden="true"
                className={cn(
                  "flex size-10 shrink-0 items-center justify-center rounded-full",
                  iconChips[stat.iconChip],
                )}
              >
                <Icon className="size-5" strokeWidth={1.5} />
              </span>
            </div>
            <p className="mt-4 flex flex-wrap items-center gap-2 font-body text-caption">
              <span className={cn("inline-flex items-center gap-0.5 font-medium", leadTones[stat.leadTone])}>
                {LeadIcon ? <LeadIcon aria-hidden="true" className="size-4" strokeWidth={1.5} /> : null}
                {stat.lead}
              </span>
              <span className={stat.noteTone === "success" ? "font-medium text-success" : "text-mist"}>
                {stat.note}
              </span>
            </p>
          </article>
        );
      })}
    </section>
  );
}
