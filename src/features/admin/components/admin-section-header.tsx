import Link from "next/link";
import { ArrowRight } from "lucide-react";

// Compact dashboard section header: optional icon, H2, optional caption pill
// and a right-aligned text link.

type AdminSectionHeaderProps = {
  title: string;
  caption?: string;
  viewAllHref?: string;
  viewAllLabel?: string;
  icon?: React.ElementType;
};

export function AdminSectionHeader({
  title,
  caption,
  viewAllHref,
  viewAllLabel = "View all",
  icon: Icon,
}: AdminSectionHeaderProps) {
  return (
    <div className="mb-6 flex flex-wrap items-center justify-between gap-3">
      <div className="flex flex-wrap items-center gap-3">
        {Icon ? (
          <Icon aria-hidden="true" className="size-6 text-champagne" strokeWidth={1.5} />
        ) : null}
        <h2 className="font-heading text-h3 lg:text-h3-lg">{title}</h2>
        {caption ? (
          <span className="inline-flex items-center rounded-full bg-stone/40 px-2.5 py-1 font-body text-caption text-slate">
            {caption}
          </span>
        ) : null}
      </div>
      {viewAllHref ? (
        <Link
          href={viewAllHref}
          className="inline-flex items-center gap-1 font-body text-small font-medium text-ink underline decoration-champagne decoration-1 underline-offset-4 transition-colors hover:text-champagne-dark"
        >
          {viewAllLabel}
          <ArrowRight aria-hidden="true" className="size-4" strokeWidth={1.5} />
        </Link>
      ) : null}
    </div>
  );
}
