import { ArrowUp, Banknote, LineChart, PieChart, TrendingUp, Wallet } from "lucide-react";
import { cn } from "@/lib/utils";
import { costingStats, type CostingStat } from "@/features/admin/mocks";

// DESIGN.md Section 8 Admin Screen L KPI ribbon (SAMPLE numbers, Section 0.7):
// three light metric cards plus the dark realized-margin panel. Colours,
// type and elevation come from DESIGN.md Section 3 tokens only.

const statIcons: Record<CostingStat["icon"], React.ElementType> = {
  wallet: Wallet,
  trending: TrendingUp,
  pie: PieChart,
  banknote: Banknote,
};

const iconChips: Record<CostingStat["icon"], string> = {
  wallet: "bg-stone/60 text-ink",
  trending: "bg-champagne-tint text-champagne-dark",
  pie: "bg-success/10 text-success",
  banknote: "bg-ink text-champagne",
};

const accentBars: Record<CostingStat["bar"], string> = {
  slate: "bg-slate/20",
  champagne: "bg-champagne",
  success: "bg-success",
};

export function CostingStats() {
  return (
    <section
      aria-label="Costing summary"
      className="mb-8 grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-4"
    >
      {costingStats.map((stat) => {
        const Icon = statIcons[stat.icon];
        return (
          <article
            key={stat.label}
            className={cn(
              "relative flex flex-col justify-between overflow-hidden rounded-md border p-6 shadow-sm",
              stat.dark ? "border-graphite bg-graphite" : "border-stone bg-white",
            )}
          >
            <div className="flex items-start justify-between gap-2">
              <p
                className={cn(
                  "font-body text-eyebrow uppercase",
                  stat.dark ? "text-champagne" : "text-slate",
                )}
              >
                {stat.label}
              </p>
              <span
                aria-hidden="true"
                className={cn(
                  "flex size-8 shrink-0 items-center justify-center rounded-sm",
                  iconChips[stat.icon],
                )}
              >
                <Icon className="size-5" strokeWidth={1.5} />
              </span>
            </div>

            <div className="mt-4 flex flex-col gap-1">
              <p className="flex items-baseline gap-2">
                <span
                  className={cn(
                    "font-heading text-h2 font-semibold tabular-nums lg:text-h2-lg",
                    stat.dark
                      ? "text-white"
                      : stat.valueTone === "success"
                        ? "text-success"
                        : "text-ink",
                  )}
                >
                  {stat.value}
                </span>
                {stat.suffix ? (
                  <span className="font-body text-caption text-slate">{stat.suffix}</span>
                ) : null}
              </p>
              <p className="flex flex-wrap items-center gap-2 font-body text-caption">
                {stat.trend ? (
                  <span className="inline-flex items-center gap-0.5 font-medium text-success">
                    <ArrowUp aria-hidden="true" className="size-4" strokeWidth={1.5} />
                    {stat.trend}
                  </span>
                ) : null}
                {stat.lead ? (
                  <span
                    className={cn(
                      "inline-flex items-center gap-1 font-semibold",
                      stat.dark ? "text-champagne" : "text-ink",
                    )}
                  >
                    {stat.dark ? (
                      <LineChart aria-hidden="true" className="size-4" strokeWidth={1.5} />
                    ) : null}
                    {stat.lead}
                  </span>
                ) : null}
                {stat.lead || stat.trend ? (
                  <span aria-hidden="true" className={stat.dark ? "text-white/80" : "text-slate"}>
                    ·
                  </span>
                ) : null}
                {stat.noteDot ? (
                  <span aria-hidden="true" className="size-2 rounded-full bg-success" />
                ) : null}
                <span className={stat.dark ? "text-white/80" : "text-slate"}>{stat.note}</span>
              </p>
            </div>

            <span
              aria-hidden="true"
              className={cn("absolute inset-x-0 bottom-0 h-0.5", accentBars[stat.bar])}
            />
          </article>
        );
      })}
    </section>
  );
}
