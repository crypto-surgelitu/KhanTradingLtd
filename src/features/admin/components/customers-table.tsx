import {
  CheckCircle,
  ChevronLeft,
  ChevronRight,
  Globe,
  MessageCircle,
  MoreVertical,
  Phone,
  Plane,
  Star,
  Store,
  Users,
} from "lucide-react";
import { siteConfig } from "@/config/site";
import { customerRows, customersFilterOptions, type CustomerRow } from "@/features/admin/mocks";

// DESIGN.md Screen J customer table with per-row identity, contact,
// attribution, activity, deals, value and tags. Renders as stacked cards on
// mobile (task requirement) and a semantic table from md.

const sourceIcons: Record<CustomerRow["sourceIcon"], React.ElementType> = {
  globe: Globe,
  store: Store,
  users: Users,
  message: MessageCircle,
  plane: Plane,
};

function RowActions({ customer }: { customer: CustomerRow }) {
  return (
    <div className="flex flex-wrap items-center gap-2">
      <a
        href={siteConfig.links.phone}
        aria-label={`Call ${customer.name}`}
        className="flex size-11 items-center justify-center rounded-full border border-stone bg-white text-ink transition-colors hover:bg-champagne-tint"
      >
        <Phone aria-hidden="true" className="size-5" strokeWidth={1.5} />
      </a>
      <a
        href={siteConfig.links.whatsapp}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={`Message ${customer.name} on WhatsApp`}
        className="flex size-11 items-center justify-center rounded-full border border-stone bg-white text-ink transition-colors hover:bg-champagne-tint"
      >
        <MessageCircle aria-hidden="true" className="size-5" strokeWidth={1.5} />
      </a>
      <button
        type="button"
        aria-label={`Actions for ${customer.name}`}
        className="flex size-11 items-center justify-center rounded-full text-slate transition-colors hover:bg-champagne-tint hover:text-ink"
      >
        <MoreVertical aria-hidden="true" className="size-5" strokeWidth={1.5} />
      </button>
    </div>
  );
}

function CustomerIdentity({ customer }: { customer: CustomerRow }) {
  return (
    <div className="flex items-start gap-3">
      <span
        aria-hidden="true"
        className="flex size-10 shrink-0 items-center justify-center rounded-full bg-stone font-body text-caption font-semibold text-ink"
      >
        {customer.initials}
      </span>
      <div className="flex flex-col">
        <p className="flex items-center gap-1.5 font-body text-small font-medium text-ink">
          {customer.name}
          {customer.vip ? (
            <Star aria-hidden="true" className="size-4 text-champagne" strokeWidth={1.5} />
          ) : null}
        </p>
        <p className="font-body text-caption text-slate">{customer.email}</p>
      </div>
    </div>
  );
}

function TagList({ customer }: { customer: CustomerRow }) {
  return (
    <ul className="flex flex-wrap gap-1.5">
      {customer.tags.map((tag) => (
        <li
          key={tag}
          className="inline-flex items-center rounded-full bg-champagne-tint px-2.5 py-1 font-body text-caption text-champagne-dark"
        >
          {tag}
        </li>
      ))}
    </ul>
  );
}

function SourceCell({ customer }: { customer: CustomerRow }) {
  const Icon = sourceIcons[customer.sourceIcon] ?? Globe;
  return (
    <p className="flex items-center gap-2 font-body text-small text-ink">
      <Icon aria-hidden="true" className="size-5 shrink-0 text-champagne" strokeWidth={1.5} />
      {customer.source}
    </p>
  );
}

export function CustomersTable() {
  return (
    <section aria-label="Customer directory" className="pb-14 sm:pb-18 lg:pb-24">
      {/* Desktop/tablet semantic table */}
      <div className="hidden overflow-x-auto rounded-md border border-stone bg-white md:block">
        <table className="w-full min-w-5xl text-left">
          <thead>
            <tr className="border-b border-stone">
              {[
                "Customer Name & Identity",
                "Phone & WhatsApp",
                "Attribution Source",
                "Latest Timeline Activity",
                "Open Deals",
                "Lifetime Value",
                "Profile Tags",
                "Actions",
              ].map((column) => (
                <th key={column} scope="col" className="px-4 py-3 font-body text-small font-medium text-slate">
                  {column}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {customerRows.map((customer) => (
              <tr key={customer.id} className="border-b border-stone last:border-0">
                <td className="px-4 py-4">
                  <CustomerIdentity customer={customer} />
                </td>
                <td className="px-4 py-4">
                  <p className="font-body text-small text-ink">{customer.phone}</p>
                  <p className="flex items-center gap-2 font-body text-caption text-mist">
                    <MessageCircle aria-hidden="true" className="size-4" strokeWidth={1.5} />
                    <CheckCircle aria-hidden="true" className="size-4 text-success" strokeWidth={1.5} />
                  </p>
                </td>
                <td className="px-4 py-4">
                  <SourceCell customer={customer} />
                </td>
                <td className="px-4 py-4">
                  <p className="font-body text-small font-medium text-ink">
                    {customer.activityDate}
                  </p>
                  <p className="font-body text-caption text-slate">{customer.activity}</p>
                </td>
                <td className="px-4 py-4">
                  <p className="font-body text-small text-ink">{customer.deals}</p>
                  <p className="font-body text-caption text-mist">{customer.dealsNote}</p>
                </td>
                <td className="px-4 py-4 font-heading text-price tabular-nums text-ink">
                  {customer.value}
                </td>
                <td className="px-4 py-4">
                  <TagList customer={customer} />
                </td>
                <td className="px-4 py-4">
                  <RowActions customer={customer} />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Mobile stacked cards */}
      <ul className="flex flex-col gap-4 md:hidden">
        {customerRows.map((customer) => (
          <li key={customer.id} className="rounded-md border border-stone bg-white p-4">
            <article className="flex flex-col gap-3">
              <CustomerIdentity customer={customer} />
              <div className="flex flex-col gap-1">
                <p className="font-body text-caption text-mist">Phone &amp; WhatsApp</p>
                <p className="flex items-center gap-2 font-body text-small text-ink">
                  {customer.phone}
                  <CheckCircle aria-hidden="true" className="size-4 text-success" strokeWidth={1.5} />
                </p>
              </div>
              <SourceCell customer={customer} />
              <div className="flex flex-col gap-1">
                <p className="font-body text-caption text-mist">Latest Timeline Activity</p>
                <p className="font-body text-small font-medium text-ink">
                  {customer.activityDate}
                </p>
                <p className="font-body text-caption text-slate">{customer.activity}</p>
              </div>
              <div className="flex flex-col gap-1">
                <p className="font-body text-caption text-mist">Open Deals</p>
                <p className="font-body text-small text-ink">{customer.deals}</p>
                <p className="font-body text-caption text-mist">{customer.dealsNote}</p>
              </div>
              <div className="flex flex-col gap-1">
                <p className="font-body text-caption text-mist">Lifetime Value</p>
                <p className="font-heading text-price tabular-nums text-ink">
                  {customer.value}
                </p>
              </div>
              <TagList customer={customer} />
              <RowActions customer={customer} />
            </article>
          </li>
        ))}
      </ul>

      <div className="flex flex-wrap items-center justify-between gap-4 pt-6">
        <div className="flex flex-wrap items-center gap-3">
          <p className="font-body text-small text-slate">{customersFilterOptions.summary}</p>
          <label htmlFor="customers-page-size" className="font-body text-small text-slate">
            Rows:
          </label>
          <select
            id="customers-page-size"
            defaultValue={customersFilterOptions.pageSizes[0]}
            className="h-11 rounded-sm border border-stone bg-white px-3 font-body text-small text-ink shadow-sm focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ink"
          >
            {customersFilterOptions.pageSizes.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
        </div>

        <nav aria-label="Pagination" className="flex items-center gap-1.5">
          <button
            type="button"
            disabled
            className="flex h-11 items-center gap-2 rounded-sm border border-stone bg-white px-4 font-body text-small font-medium text-mist"
          >
            <ChevronLeft aria-hidden="true" className="size-5" strokeWidth={1.5} />
            Previous
          </button>
          <button
            type="button"
            aria-current="page"
            className="flex h-11 w-11 items-center justify-center rounded-sm border border-ink bg-ink font-body text-small font-semibold text-white shadow-sm"
          >
            1
          </button>
          {[2, 3].map((page) => (
            <button
              key={page}
              type="button"
              className="flex h-11 w-11 items-center justify-center rounded-sm border border-stone bg-white font-body text-small font-medium text-ink transition-colors hover:bg-stone/30"
            >
              {page}
            </button>
          ))}
          <span className="flex h-11 w-8 items-center justify-center font-body text-small text-slate">
            ...
          </span>
          <button
            type="button"
            className="flex h-11 w-11 items-center justify-center rounded-sm border border-stone bg-white font-body text-small font-medium text-ink transition-colors hover:bg-stone/30"
          >
            19
          </button>
          <button
            type="button"
            className="flex h-11 items-center gap-2 rounded-sm border border-stone bg-white px-4 font-body text-small font-medium text-ink transition-colors hover:bg-stone/30"
          >
            Next
            <ChevronRight aria-hidden="true" className="size-5" strokeWidth={1.5} />
          </button>
        </nav>
      </div>
    </section>
  );
}
