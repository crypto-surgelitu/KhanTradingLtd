import { BadgeCheck, Mail, MapPin, MessageCircle, Phone, Star } from "lucide-react";
import { CustomerActions } from "@/features/admin/components/customer-actions";
import { siteConfig } from "@/config/site";
import { customerDetailProfile } from "@/features/admin/mocks";

// DESIGN.md Screen J profile header: verification strip, identity card with
// contact and KRA verification, Call/WhatsApp/Edit actions, the Actions menu
// and the four relationship stat cards.

const actionClasses =
  "inline-flex min-h-11 items-center gap-2 rounded-sm border border-ink px-4 font-body text-button text-ink transition-colors hover:bg-ink hover:text-white";

export function CustomerProfileHeader() {
  const profile = customerDetailProfile;

  return (
    <section aria-label="Customer profile" className="pb-12">
      <div className="flex flex-wrap items-center gap-3 pb-6">
        <span className="inline-flex items-center rounded-full bg-success/10 px-2.5 py-1 font-body text-caption font-medium text-success">
          {profile.statusChip}
        </span>
        <p className="font-body text-caption text-slate">
          <span aria-hidden="true">·</span> {profile.lastEngagement}
        </p>
      </div>

      <article className="flex flex-col gap-6 rounded-md border border-stone bg-white p-6 lg:p-8">
        <div className="flex flex-wrap items-start justify-between gap-4">
          <div className="flex items-start gap-4">
            <span
              aria-hidden="true"
              className="flex size-16 shrink-0 items-center justify-center rounded-full bg-stone font-heading text-h3 font-semibold text-ink"
            >
              {profile.initials}
            </span>
            <div className="flex flex-col gap-1">
              <p className="flex flex-wrap items-center gap-2">
                <span className="font-heading text-h2 lg:text-h2-lg">{profile.name}</span>
                <span className="inline-flex items-center gap-1 rounded-full bg-champagne-tint px-2.5 py-1 font-body text-caption font-medium text-champagne-dark">
                  <Star aria-hidden="true" className="size-4" strokeWidth={1.5} />
                  {profile.tier}
                </span>
                <span className="inline-flex items-center rounded-full bg-stone px-2.5 py-1 font-body text-caption text-slate">
                  {profile.secondaryTag}
                </span>
              </p>
              <p className="font-body text-caption text-slate">{profile.customerId}</p>
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <a href={siteConfig.links.phone} className={actionClasses}>
              <Phone aria-hidden="true" className="size-5" strokeWidth={1.5} />
              Call {profile.phone}
            </a>
            <a
              href={siteConfig.links.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className={actionClasses}
            >
              <MessageCircle aria-hidden="true" className="size-5" strokeWidth={1.5} />
              WhatsApp Client
            </a>
            <button type="button" className={actionClasses}>
              Edit
            </button>
            <CustomerActions />
          </div>
        </div>

        <dl className="flex flex-wrap items-center gap-x-6 gap-y-2 border-t border-stone pt-4">
          <div className="flex items-center gap-2">
            <dt className="sr-only">Phone</dt>
            <dd className="flex items-center gap-2 font-body text-small text-ink">
              <Phone aria-hidden="true" className="size-5 text-champagne" strokeWidth={1.5} />
              {profile.phone}
            </dd>
          </div>
          <div className="flex items-center gap-2">
            <dt className="sr-only">WhatsApp</dt>
            <dd className="font-body text-small text-ink">WhatsApp</dd>
          </div>
          <div className="flex items-center gap-2">
            <dt className="sr-only">Email</dt>
            <dd className="flex items-center gap-2 font-body text-small text-ink">
              <Mail aria-hidden="true" className="size-5 text-champagne" strokeWidth={1.5} />
              <a
                href={`mailto:${profile.email}`}
                target="_blank"
                rel="noopener noreferrer"
                className="font-medium text-ink underline decoration-champagne decoration-1 underline-offset-4 transition-colors hover:text-champagne-dark"
              >
                {profile.email}
              </a>
            </dd>
          </div>
          <div className="flex items-center gap-2">
            <dt className="sr-only">Location</dt>
            <dd className="flex items-center gap-2 font-body text-small text-ink">
              <MapPin aria-hidden="true" className="size-5 text-champagne" strokeWidth={1.5} />
              {profile.location}
            </dd>
          </div>
          <div className="flex items-center gap-2">
            <dt className="font-body text-small text-slate">KRA PIN:</dt>
            <dd className="flex items-center gap-2 font-body text-small font-medium text-ink">
              {profile.kraPin}
              <span className="inline-flex items-center gap-1 rounded-full bg-success/10 px-2.5 py-1 font-body text-caption text-success">
                <BadgeCheck aria-hidden="true" className="size-4" strokeWidth={1.5} />
                (Verified)
              </span>
            </dd>
          </div>
        </dl>
      </article>

      <div className="mt-6 grid grid-cols-1 gap-6 sm:grid-cols-2 xl:grid-cols-4">
        {profile.stats.map((stat) => (
          <article
            key={stat.label}
            className="flex flex-col gap-1 rounded-md border border-stone bg-white p-6"
          >
            <p className="font-body text-caption uppercase text-slate">{stat.label}</p>
            <p className="font-heading text-h3 lg:text-h3-lg">{stat.value}</p>
            <p className="font-body text-caption text-mist">{stat.note}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
