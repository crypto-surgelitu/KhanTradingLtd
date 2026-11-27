import { CalendarClock, CheckCircle, MessageCircle, Phone } from "lucide-react";
import { AdminSectionHeader } from "@/features/admin/components/admin-section-header";
import { AdminStatusPill } from "@/features/admin/components/admin-status-pill";
import { siteConfig } from "@/config/site";
import { todayViewings } from "@/features/admin/mocks";

// DESIGN.md Screen B today's viewings agenda with per-row status, staff,
// one-tap contact actions and the designed confirm action.

export function TodayViewings() {
  return (
    <section aria-label="Today's viewings">
      <AdminSectionHeader
        title="Today's Viewings"
        caption="4 Scheduled"
        icon={CalendarClock}
      />

      <ul className="flex flex-col gap-4">
        {todayViewings.map((row) => (
          <li key={row.time}>
            <article className="flex flex-col gap-3 rounded-md border border-stone bg-white p-4">
              <div className="flex flex-wrap items-center gap-3">
                <p className="font-heading text-h3 tabular-nums lg:text-h3-lg">
                  {row.time}
                </p>
                <AdminStatusPill label={row.status} tone={row.statusTone} />
                {row.badge ? (
                  <span className="inline-flex items-center gap-1 font-body text-caption text-success">
                    <CheckCircle aria-hidden="true" className="size-4" strokeWidth={1.5} />
                    {row.badge}
                  </span>
                ) : null}
              </div>

              <div className="flex flex-col gap-1">
                <p className="font-body text-small font-medium text-ink">{row.title}</p>
                <p className="font-body text-small text-slate">
                  Client: {row.client}
                  {row.staff ? (
                    <>
                      {" "}
                      <span aria-hidden="true">•</span> {row.staff}
                    </>
                  ) : null}
                </p>
                <p className="font-body text-caption text-mist">{row.note}</p>
              </div>

              <div className="flex flex-wrap items-center gap-2">
                <a
                  href={siteConfig.links.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Message the client of ${row.title} on WhatsApp`}
                  className="flex size-11 items-center justify-center rounded-full border border-stone bg-white text-ink transition-colors hover:bg-champagne-tint"
                >
                  <MessageCircle aria-hidden="true" className="size-5" strokeWidth={1.5} />
                </a>
                <a
                  href={siteConfig.links.phone}
                  aria-label={`Call the client of ${row.title}`}
                  className="flex size-11 items-center justify-center rounded-full border border-stone bg-white text-ink transition-colors hover:bg-champagne-tint"
                >
                  <Phone aria-hidden="true" className="size-5" strokeWidth={1.5} />
                </a>
                {row.action ? (
                  <button
                    type="button"
                    className="min-h-11 rounded-sm bg-ink px-4 font-body text-button text-white transition-colors hover:bg-graphite"
                  >
                    {row.action}
                  </button>
                ) : null}
              </div>
            </article>
          </li>
        ))}
      </ul>
    </section>
  );
}
