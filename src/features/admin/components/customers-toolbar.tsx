import {
  BadgeCheck,
  Compass,
  Download,
  Handshake,
  RotateCcw,
  Search,
  TrendingUp,
  UserPlus,
  Users,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button";
import { customersFilterOptions, customersStats } from "@/features/admin/mocks";

// DESIGN.md Screen J directory header: KRA chip, H1, summary cards and the
// search / export / add / filter toolbar. Controls are presentational native
// elements — TODO(KHANS TRADING Ltd / backend): wire to the customers list
// query contract in docs/TASKS.md.

const statIcons: Record<string, React.ElementType> = {
  users: Users,
  handshake: Handshake,
  badge: BadgeCheck,
  compass: Compass,
};

const selectClasses =
  "h-11 w-full appearance-none rounded-sm border border-stone bg-white px-3 font-body text-small text-ink shadow-sm transition-colors hover:border-slate/60 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ink";

export function CustomersToolbar() {
  return (
    <div className="flex flex-col gap-6 pb-8">
      <div className="flex flex-wrap items-end justify-between gap-4">
        <div className="flex flex-col gap-2">
          <span className="font-body text-eyebrow uppercase text-champagne-dark">
            Customers Directory
          </span>
          <h1 className="font-heading text-h1 lg:text-h1-lg">
            Customer Directory &amp; VIP CRM
          </h1>
          <p className="max-w-3xl font-body text-body text-slate">
            Manage prospective buyers, corporate accounts, private clients,
            active deals, and interaction timelines.
          </p>
        </div>
        <span className="inline-flex items-center rounded-full bg-success/10 px-2.5 py-1 font-body text-caption font-medium text-success">
          KRA Verification Engine Online
        </span>
      </div>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 xl:grid-cols-4">
        {customersStats.map((stat) => {
          const Icon = statIcons[stat.icon] ?? Users;
          return (
            <article
              key={stat.label}
              className="flex flex-col gap-3 rounded-md border border-stone bg-white p-6"
            >
              <p className="flex items-center gap-2 font-body text-caption uppercase text-slate">
                <Icon aria-hidden="true" className="size-5 text-champagne" strokeWidth={1.5} />
                {stat.label}
              </p>
              <p className="flex flex-wrap items-baseline gap-2 font-heading text-h2 font-semibold tabular-nums text-ink lg:text-h2-lg">
                {stat.value}
                <span
                  className={cn(
                    "inline-flex items-center gap-1 font-body text-caption font-medium",
                    stat.annotationTone === "success" ? "text-success" : "text-slate",
                  )}
                >
                  {stat.annotationTone === "success" ? (
                    <TrendingUp aria-hidden="true" className="size-4" strokeWidth={1.5} />
                  ) : null}
                  {stat.annotation}
                </span>
              </p>
              <p className="font-body text-caption text-mist">{stat.note}</p>
            </article>
          );
        })}
      </div>

      <div className="flex flex-wrap items-center gap-3 rounded-md border border-stone bg-white p-4">
        <div className="relative flex min-w-0 flex-1 items-center">
          <label htmlFor="customers-search" className="sr-only">
            Search customers
          </label>
          <Search
            aria-hidden="true"
            className="pointer-events-none absolute left-3 size-5 text-mist"
            strokeWidth={1.5}
          />
          <input id="customers-search" type="search" className={`${selectClasses} pl-10`} />
        </div>

        <button type="button" className={buttonVariants({ variant: "secondary" })}>
          <Download aria-hidden="true" className="mr-2 size-5" strokeWidth={1.5} />
          Export CSV
        </button>
        <button type="button" className={buttonVariants({ variant: "primary" })}>
          <UserPlus aria-hidden="true" className="mr-2 size-5" strokeWidth={1.5} />
          Add Customer
        </button>

        <label htmlFor="customers-source" className="sr-only">
          Source
        </label>
        <select id="customers-source" defaultValue={customersFilterOptions.sources[0]} className={`${selectClasses} w-auto`}>
          {customersFilterOptions.sources.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>

        <label htmlFor="customers-deal-status" className="sr-only">
          Deal status
        </label>
        <select id="customers-deal-status" defaultValue={customersFilterOptions.dealStatuses[0]} className={`${selectClasses} w-auto`}>
          {customersFilterOptions.dealStatuses.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>

        <label htmlFor="customers-tag" className="sr-only">
          Tag
        </label>
        <select id="customers-tag" defaultValue={customersFilterOptions.tags[0]} className={`${selectClasses} w-auto`}>
          {customersFilterOptions.tags.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>

        <button
          type="button"
          className="inline-flex min-h-11 items-center gap-2 rounded-sm border border-stone bg-white px-4 font-body text-small font-medium text-ink transition-colors hover:bg-champagne-tint"
        >
          <RotateCcw aria-hidden="true" className="size-5" strokeWidth={1.5} />
          Reset Filters
        </button>
      </div>
    </div>
  );
}
