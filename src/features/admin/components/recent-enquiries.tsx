import { MessageCircle, Phone } from "lucide-react";
import { siteConfig } from "@/config/site";
import { AdminSectionHeader } from "@/features/admin/components/admin-section-header";
import { AdminStatusPill } from "@/features/admin/components/admin-status-pill";
import { recentEnquiries } from "@/features/admin/mocks";

// DESIGN.md Screen B recent enquiries: semantic table with customer, vehicle,
// timeline, status and one-tap actions. Timeline column hides on small
// screens; the table scrolls horizontally there.

export function RecentEnquiries() {
  return (
    <section aria-label="Recent enquiries" className="pb-12">
      <AdminSectionHeader
        title="Recent enquiries"
        caption="5 active"
        viewAllHref="/admin/enquiries"
      />

      <div className="overflow-x-auto rounded-md border border-stone bg-white">
        <table className="w-full text-left">
          <thead>
            <tr className="border-b border-stone">
              <th scope="col" className="px-4 py-3 font-body text-small font-medium text-slate">
                Customer &amp; Vehicle
              </th>
              <th scope="col" className="hidden px-4 py-3 font-body text-small font-medium text-slate md:table-cell">
                Timeline
              </th>
              <th scope="col" className="px-4 py-3 font-body text-small font-medium text-slate">
                Status
              </th>
              <th scope="col" className="px-4 py-3 font-body text-small font-medium text-slate">
                Action
              </th>
            </tr>
          </thead>
          <tbody>
            {recentEnquiries.map((row) => (
              <tr key={row.name} className="border-b border-stone last:border-0">
                <td className="px-4 py-4">
                  <div className="flex items-start gap-3">
                    <span
                      aria-hidden="true"
                      className="flex size-10 shrink-0 items-center justify-center rounded-full bg-stone font-body text-caption font-semibold text-ink"
                    >
                      {row.initials}
                    </span>
                    <div className="flex flex-col gap-0.5">
                      <p className="font-body text-small font-medium text-ink">{row.name}</p>
                      <p className="font-body text-small text-slate">{row.vehicle}</p>
                      <p className="font-body text-caption text-mist">{row.note}</p>
                    </div>
                  </div>
                </td>
                <td className="hidden px-4 py-4 font-body text-small text-slate md:table-cell">
                  {row.timeline}
                </td>
                <td className="px-4 py-4">
                  <AdminStatusPill label={row.status} tone={row.statusTone} />
                </td>
                <td className="px-4 py-4">
                  <div className="flex flex-wrap items-center gap-2">
                    <a
                      href={siteConfig.links.whatsapp}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`Message ${row.name} on WhatsApp`}
                      className="flex size-11 items-center justify-center rounded-full border border-stone bg-white text-ink transition-colors hover:bg-champagne-tint"
                    >
                      <MessageCircle aria-hidden="true" className="size-5" strokeWidth={1.5} />
                    </a>
                    <a
                      href={siteConfig.links.phone}
                      aria-label={`Call ${row.name}`}
                      className="flex size-11 items-center justify-center rounded-full border border-stone bg-white text-ink transition-colors hover:bg-champagne-tint"
                    >
                      <Phone aria-hidden="true" className="size-5" strokeWidth={1.5} />
                    </a>
                    <button
                      type="button"
                      className="min-h-11 rounded-sm border border-ink bg-transparent px-4 font-body text-button text-ink transition-colors hover:bg-ink hover:text-white"
                    >
                      {row.action}
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}
