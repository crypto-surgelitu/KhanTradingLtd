import { ClipboardCheck, Layers, ListChecks, Wallet } from "lucide-react";
import { cn } from "@/lib/utils";
import { dealsStatCards, type DealsStatCard } from "@/features/admin/mocks";

// DESIGN.md Screen G summary strip: four stat cards, each with a primary
// metric and a secondary metric.

const statIcons: Record<DealsStatCard["icon"], React.ElementType> = {
  layers: Layers,
  assignment_late: ClipboardCheck,
  wallet: Wallet,
  task: ListChecks,
};

export function DealsSummary() {
  return (
    <section aria-label="Deals summary" className="grid grid-cols-1 gap-6 pb-8 sm:grid-cols-2 xl:grid-cols-4">
      {dealsStatCards.map((card) => {
        const Icon = statIcons[card.icon];
        return (
          <article
            key={card.primary.label}
            className="flex flex-col gap-4 rounded-md border border-stone bg-white p-6"
          >
            <div className="flex flex-col gap-1">
              <p className="flex items-center gap-2 font-body text-caption uppercase text-slate">
                <Icon aria-hidden="true" className="size-5 text-champagne" strokeWidth={1.5} />
                {card.primary.label}
              </p>
              <p className="flex flex-wrap items-baseline gap-2 font-heading text-h2 font-semibold tabular-nums text-ink lg:text-h2-lg">
                {card.primary.value}
                {card.primary.note ? (
                  <span className="font-body text-caption font-medium text-slate">
                    {card.primary.note}
                  </span>
                ) : null}
                {card.badge ? (
                  <span
                    className={cn(
                      "inline-flex items-center rounded-full px-2.5 py-1 font-body text-caption font-medium",
                      card.badge.tone === "warning"
                        ? "bg-warning/10 text-warning"
                        : "bg-success/10 text-success",
                    )}
                  >
                    {card.badge.text}
                  </span>
                ) : null}
              </p>
            </div>
            <div className="border-t border-stone pt-3">
              <p className="font-body text-caption text-mist">{card.secondary.label}</p>
              <p className="font-body text-small font-medium text-ink">
                {card.secondary.value}
              </p>
            </div>
          </article>
        );
      })}
    </section>
  );
}
