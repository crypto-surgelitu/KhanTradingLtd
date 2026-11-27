import { cn } from "@/lib/utils";
import {
  viewingsDays,
  viewingsEvents,
  viewingsHours,
  viewingsLegend,
  type ViewingEvent,
} from "@/features/admin/mocks";

// DESIGN.md Screen I calendar grid: hour rows across the week columns with
// the booking blocks, plus a vertical agenda on mobile (task allowance).
// Semantic grid roles per the task; block placement is the export's SAMPLE
// week. Interactivity (range navigation, detail focus) lands with the
// viewings queries.

const toneStyles: Record<ViewingEvent["statusTone"], string> = {
  success: "bg-success/10 text-success border-success/30",
  warning: "bg-warning/10 text-warning border-warning/30",
  info: "bg-info/10 text-info border-info/30",
  muted: "bg-stone text-slate border-stone",
  danger: "bg-danger/10 text-danger border-danger/30",
};

function EventBlock({ event }: { event: ViewingEvent }) {
  return (
    <article
      className={cn(
        "flex flex-col gap-1 rounded-sm border p-2",
        toneStyles[event.statusTone],
      )}
    >
      <p className="flex flex-wrap items-center gap-1.5 font-body text-caption">
        <span className="font-semibold text-ink">{event.time}</span>
        <span>{event.status}</span>
      </p>
      <p className="truncate font-body text-caption font-medium text-ink">
        {event.vehicle}
      </p>
      <p className="flex items-center justify-between gap-2 font-body text-caption text-slate">
        <span className="truncate">{event.client}</span>
        <span
          aria-hidden="true"
          className="flex size-6 shrink-0 items-center justify-center rounded-full bg-white/80 font-body text-caption font-semibold text-ink"
        >
          {event.avatar}
        </span>
      </p>
    </article>
  );
}

export function ViewingsCalendar() {
  return (
    <section aria-label="Weekly viewings calendar">
      {/* Desktop week grid */}
      <div className="hidden overflow-x-auto rounded-md border border-stone bg-white md:block">
        <div role="grid" aria-label="Week of Nov 25 to Dec 01, 2024" className="min-w-4xl">
          <div role="row" className="grid grid-cols-8 border-b border-stone bg-ivory">
            <div role="columnheader" className="px-3 py-2 font-body text-caption uppercase text-slate">
              Time / EAT
            </div>
            {viewingsDays.map((day) => (
              <div
                key={day.key}
                role="columnheader"
                className={cn(
                  "px-3 py-2 font-body text-caption",
                  day.today ? "bg-champagne-tint font-medium text-champagne-dark" : "text-slate",
                )}
              >
                {day.label} {day.num}
              </div>
            ))}
          </div>

          {viewingsHours.map((hour) => (
            <div key={hour} role="row" className="grid grid-cols-8 border-b border-stone last:border-0">
              <div role="rowheader" className="px-3 py-2 font-body text-caption text-mist">
                {hour}
              </div>
              {viewingsDays.map((day) => {
                const cellEvents = viewingsEvents.filter(
                  (event) => event.day === day.key && event.hour === hour,
                );
                return (
                  <div
                    key={`${day.key}-${hour}`}
                    role="gridcell"
                    className={cn(
                      "min-h-16 border-l border-stone p-1",
                      day.today ? "bg-champagne-tint/30" : undefined,
                    )}
                  >
                    <div className="flex flex-col gap-1">
                      {cellEvents.map((event) => (
                        <EventBlock key={event.id} event={event} />
                      ))}
                    </div>
                  </div>
                );
              })}
            </div>
          ))}
        </div>
      </div>

      {/* Mobile vertical agenda */}
      <ul className="flex flex-col gap-3 md:hidden">
        {viewingsEvents.map((event) => (
          <li key={event.id} className="rounded-md border border-stone bg-white p-3">
            <EventBlock event={event} />
          </li>
        ))}
      </ul>

      <div className="flex flex-wrap items-center gap-x-4 gap-y-2 pt-4">
        {viewingsLegend.map((entry) => (
          <p key={entry.label} className="flex items-center gap-2 font-body text-caption text-slate">
            <span
              aria-hidden="true"
              className={cn(
                "size-3 rounded-full",
                entry.tone === "success"
                  ? "bg-success"
                  : entry.tone === "warning"
                    ? "bg-warning"
                    : entry.tone === "danger"
                      ? "bg-danger"
                      : "bg-mist",
              )}
            />
            {entry.label}
          </p>
        ))}
      </div>
    </section>
  );
}
