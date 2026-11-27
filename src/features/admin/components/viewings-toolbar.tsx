import { ChevronLeft, ChevronRight, Filter, Settings, Timer } from "lucide-react";
import { siteConfig } from "@/config/site";
import { viewingsStats, viewingsToolbarOptions } from "@/features/admin/mocks";

// DESIGN.md Screen I scheduling header: today's stats, the section heading,
// view switcher, range navigation and the concierge/status/type filters.
// Controls are presentational native elements — TODO(KHANS TRADING Ltd /
// backend): wire to the viewings list query (docs/TASKS.md).

const selectClasses =
  "h-11 w-full appearance-none rounded-sm border border-stone bg-white px-3 font-body text-small text-ink shadow-sm transition-colors hover:border-slate/60 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ink";

const views = ["Day", "Week", "Month", "List"] as const;

export function ViewingsToolbar() {
  return (
    <div className="flex flex-col gap-6 pb-8">
      <div className="flex flex-wrap items-center gap-x-6 gap-y-2 rounded-md border border-stone bg-white p-4">
        {viewingsStats.map((stat) => (
          <p key={stat.label} className="flex items-center gap-2 font-body text-small text-slate">
            {stat.label}
            <span className="font-heading text-h3 tabular-nums text-ink">{stat.value}</span>
          </p>
        ))}
      </div>

      <div className="flex flex-wrap items-end justify-between gap-4">
        <div className="flex flex-col gap-2">
          <span className="font-body text-eyebrow uppercase text-champagne-dark">
            Concierge Scheduling
          </span>
          <h1 className="font-heading text-h1 lg:text-h1-lg">
            Viewings &amp; Highway Test Drives
          </h1>
          <p className="max-w-3xl font-body text-body text-slate">
            Schedule, allocate concierges, and manage private showroom
            inspections and bypass test drives.
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-3">
          <div className="flex items-center border border-stone bg-white p-1 shadow-sm" role="group" aria-label="Calendar view">
            {views.map((view) => (
              <button
                key={view}
                type="button"
                aria-current={view === "Week" ? "true" : undefined}
                className={
                  view === "Week"
                    ? "min-h-11 rounded-sm bg-ink px-4 font-body text-small font-medium text-white"
                    : "min-h-11 rounded-sm px-4 font-body text-small font-medium text-slate transition-colors hover:text-ink"
                }
              >
                {view}
              </button>
            ))}
          </div>
          <a
            href="#availability"
            className="inline-flex min-h-11 items-center gap-2 rounded-sm border border-stone bg-white px-4 font-body text-small font-medium text-ink transition-colors hover:bg-champagne-tint"
          >
            <Settings aria-hidden="true" className="size-5" strokeWidth={1.5} />
            Availability settings
          </a>
        </div>
      </div>

      <div className="flex flex-wrap items-center gap-3 rounded-md border border-stone bg-white p-4">
        <div className="flex items-center gap-2">
          <button
            type="button"
            aria-label="Previous week"
            className="flex size-11 items-center justify-center rounded-full border border-stone bg-white text-ink transition-colors hover:bg-champagne-tint"
          >
            <ChevronLeft aria-hidden="true" className="size-5" strokeWidth={1.5} />
          </button>
          <button
            type="button"
            className="min-h-11 rounded-sm border border-ink px-4 font-body text-small font-medium text-ink transition-colors hover:bg-ink hover:text-white"
          >
            Today
          </button>
          <button
            type="button"
            aria-label="Next week"
            className="flex size-11 items-center justify-center rounded-full border border-stone bg-white text-ink transition-colors hover:bg-champagne-tint"
          >
            <ChevronRight aria-hidden="true" className="size-5" strokeWidth={1.5} />
          </button>
          <p className="font-body text-small font-medium text-ink">
            {viewingsToolbarOptions.range}
          </p>
          <p className="font-body text-caption text-slate">
            {viewingsToolbarOptions.timezone}
          </p>
        </div>

        <label htmlFor="viewings-concierge" className="sr-only">
          Concierge
        </label>
        <select id="viewings-concierge" defaultValue={viewingsToolbarOptions.concierges[0]} className={`${selectClasses} w-auto`}>
          {viewingsToolbarOptions.concierges.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>

        <label htmlFor="viewings-status" className="sr-only">
          Status
        </label>
        <select id="viewings-status" defaultValue={viewingsToolbarOptions.statuses[0]} className={`${selectClasses} w-auto`}>
          {viewingsToolbarOptions.statuses.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>

        <label htmlFor="viewings-type" className="sr-only">
          Type
        </label>
        <div className="relative">
          <select id="viewings-type" defaultValue={viewingsToolbarOptions.types[0]} className={`${selectClasses} w-auto pr-10`}>
            {viewingsToolbarOptions.types.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
          <Filter
            aria-hidden="true"
            className="pointer-events-none absolute right-3 top-1/2 size-5 -translate-y-1/2 text-slate"
            strokeWidth={1.5}
          />
        </div>

        <p className="flex items-center gap-2 font-body text-caption text-slate">
          <Timer aria-hidden="true" className="size-5 text-champagne" strokeWidth={1.5} />
          Showroom Operating Bay: {siteConfig.openingHours}
        </p>
      </div>
    </div>
  );
}
