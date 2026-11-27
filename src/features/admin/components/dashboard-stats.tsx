import { ArrowUp, Car, Handshake, Store, Target, Warehouse } from "lucide-react";
import { dashboardStats, type DashboardStat } from "@/features/admin/mocks";

// DESIGN.md Screen B stat cards (sample numbers per Section 0.7).

const statIcons: Record<DashboardStat["icon"], React.ElementType> = {
  warehouse: Warehouse,
  store: Store,
  handshake: Handshake,
  target: Target,
};

export function DashboardStats() {
  return (
    <section aria-label="Key statistics" className="grid grid-cols-1 gap-6 sm:grid-cols-2 xl:grid-cols-4">
      {dashboardStats.map((stat) => {
        const Icon = statIcons[stat.icon] ?? Car;
        return (
          <article
            key={stat.label}
            className="flex flex-col gap-3 rounded-md border border-stone bg-white p-6"
          >
            <div className="flex items-center justify-between gap-2">
              <p className="flex items-center gap-2 font-body text-caption uppercase text-slate">
                <Icon aria-hidden="true" className="size-5 text-champagne" strokeWidth={1.5} />
                {stat.caption}
              </p>
            </div>
            <p className="font-body text-small font-medium text-ink">{stat.label}</p>
            <p className="flex items-baseline gap-2 font-heading text-h2 font-semibold tabular-nums text-ink lg:text-h2-lg">
              {stat.value}
              {stat.trend ? (
                <span className="inline-flex items-center gap-1 font-body text-caption font-medium text-success">
                  <ArrowUp aria-hidden="true" className="size-4" strokeWidth={1.5} />
                  {stat.trend}
                </span>
              ) : null}
            </p>
            <p className="font-body text-small text-slate">{stat.note}</p>
          </article>
        );
      })}
    </section>
  );
}
