import { BadgeCheck, Download, FilePlus2, MessageCircle, ShieldCheck, Trash2 } from "lucide-react";
import { customerDetailDpa, customerDetailPreferences } from "@/features/admin/mocks";

// DESIGN.md Screen J preferences panel and the Kenya DPA 2019 block with the
// data-subject actions. Toggles and actions are presentational —
// TODO(KHANS TRADING Ltd / backend): wire to the customer preferences and
// data-request actions (docs/TASKS.md, Kenya DPA handling).

const channelIcons: Record<string, React.ElementType> = {
  chat: MessageCircle,
  sms: MessageCircle,
  email: MessageCircle,
  campaign: MessageCircle,
};

export function CustomerPreferences() {
  const { channels, interests, executive } = customerDetailPreferences;

  return (
    <section aria-label="Preferences and data privacy" className="pb-14 sm:pb-18 lg:pb-24">
      <div className="rounded-md border border-stone bg-white p-6 lg:p-8">
        <h2 className="font-heading text-h2 lg:text-h2-lg">
          Client Preferences &amp; Profiles
        </h2>

        <h3 className="pt-6 font-body text-eyebrow uppercase text-champagne-dark">
          Notification Channels
        </h3>
        <div className="grid grid-cols-1 gap-3 pt-3 sm:grid-cols-2">
          {channels.map((channel) => {
            const Icon = channelIcons[channel.icon] ?? MessageCircle;
            return (
              <div
                key={channel.id}
                className="flex items-center justify-between gap-4 rounded-md border border-stone p-4"
              >
                <label
                  htmlFor={channel.id}
                  className="flex items-center gap-2 font-body text-small text-ink"
                >
                  <Icon aria-hidden="true" className="size-5 text-champagne" strokeWidth={1.5} />
                  {channel.label}
                </label>
                <input
                  id={channel.id}
                  name={channel.id}
                  type="checkbox"
                  role="switch"
                  defaultChecked={channel.defaultChecked}
                  className="size-5 shrink-0 rounded-full border-stone accent-ink"
                />
              </div>
            );
          })}
        </div>

        <h3 className="pt-8 font-body text-eyebrow uppercase text-champagne-dark">
          Vehicle Interests &amp; Buying Habits
        </h3>
        <dl className="grid grid-cols-1 gap-3 pt-3 sm:grid-cols-2">
          {interests.map((item) => (
            <div key={item.label} className="flex flex-col">
              <dt className="font-body text-caption text-mist">{item.label}</dt>
              <dd className="font-body text-small text-ink">{item.value}</dd>
            </div>
          ))}
        </dl>

        <div className="mt-8 flex flex-wrap items-center justify-between gap-4 rounded-md bg-ivory p-4">
          <div className="flex items-center gap-3">
            <span
              aria-hidden="true"
              className="flex size-10 items-center justify-center rounded-full bg-stone font-body text-caption font-semibold text-ink"
            >
              {executive.initials}
            </span>
            <div className="flex flex-col">
              <p className="font-body text-small font-medium text-ink">{executive.name}</p>
              <p className="font-body text-caption text-slate">{executive.role}</p>
            </div>
          </div>
          <button
            type="button"
            className="inline-flex min-h-11 items-center rounded-sm border border-ink px-4 font-body text-small font-medium text-ink transition-colors hover:bg-ink hover:text-white"
          >
            Reassign
          </button>
        </div>
      </div>

      <div className="mt-6 rounded-md border border-stone bg-white p-6 lg:p-8">
        <div className="flex flex-wrap items-center gap-3">
          <ShieldCheck aria-hidden="true" className="size-6 text-champagne" strokeWidth={1.5} />
          <h2 className="font-heading text-h3 lg:text-h3-lg">
            Data Privacy &amp; Kenya DPA 2019
          </h2>
          <span className="inline-flex items-center gap-1 rounded-full bg-success/10 px-2.5 py-1 font-body text-caption font-medium text-success">
            <BadgeCheck aria-hidden="true" className="size-4" strokeWidth={1.5} />
            Compliant
          </span>
        </div>
        <p className="pt-3 font-body text-small text-slate">
          Customer records processed strictly under Section 25 of the Kenya Data
          Protection Act, 2019. Lawful processing consent recorded on{" "}
          <span className="font-medium text-ink">{customerDetailDpa.consentDate}</span>.
        </p>
        <div className="flex flex-wrap items-center gap-3 pt-4">
          <button
            type="button"
            className="inline-flex min-h-11 items-center gap-2 rounded-sm border border-ink px-4 font-body text-small font-medium text-ink transition-colors hover:bg-ink hover:text-white"
          >
            <Download aria-hidden="true" className="size-5" strokeWidth={1.5} />
            Export Customer Data (JSON / CSV)
          </button>
          <button
            type="button"
            className="inline-flex min-h-11 items-center gap-2 rounded-sm border border-ink px-4 font-body text-small font-medium text-ink transition-colors hover:bg-ink hover:text-white"
          >
            <FilePlus2 aria-hidden="true" className="size-5" strokeWidth={1.5} />
            Log Data Subject Request
          </button>
          <button
            type="button"
            className="inline-flex min-h-11 items-center gap-2 rounded-sm bg-danger px-4 font-body text-small font-medium text-white transition-colors hover:bg-danger/90"
          >
            <Trash2 aria-hidden="true" className="size-5" strokeWidth={1.5} />
            Request Account Deletion / Anonymization
          </button>
        </div>
      </div>
    </section>
  );
}
