import Image from "next/image";
import Link from "next/link";
import { AlertTriangle, CheckCircle, Clock, MoreHorizontal } from "lucide-react";
import { cn } from "@/lib/utils";
import type { DealCard as DealCardData } from "@/features/admin/mocks";

// DESIGN.md Screen G board card: vehicle thumbnail, reference, optional
// status chip, client, price, days-in-stage and the assigned avatar. The card
// links to the deal detail route.

const chipStyles: Record<NonNullable<DealCardData["chipTone"]>, string> = {
  info: "bg-info/10 text-info",
  success: "bg-success/10 text-success",
  warning: "bg-warning/10 text-warning",
};

export function DealCard({ deal }: { deal: DealCardData }) {
  return (
    <article className="flex flex-col gap-3 rounded-md border border-stone bg-white p-4">
      <div className="flex items-start justify-between gap-2">
        <p className="font-body text-caption text-slate">{deal.ref}</p>
        {deal.chip ? (
          <span
            className={cn(
              "inline-flex items-center gap-1 rounded-full px-2.5 py-1 font-body text-caption",
              chipStyles[deal.chipTone ?? "info"],
            )}
          >
            {deal.chipTone === "success" ? (
              <CheckCircle aria-hidden="true" className="size-4" strokeWidth={1.5} />
            ) : null}
            {deal.chipTone === "warning" ? (
              <AlertTriangle aria-hidden="true" className="size-4" strokeWidth={1.5} />
            ) : null}
            {deal.chip}
          </span>
        ) : (
          <button
            type="button"
            aria-label={`Actions for ${deal.ref}`}
            className="flex size-8 items-center justify-center rounded-full text-slate transition-colors hover:bg-champagne-tint hover:text-ink"
          >
            <MoreHorizontal aria-hidden="true" className="size-5" strokeWidth={1.5} />
          </button>
        )}
      </div>

      <Link href={`/admin/deals/${deal.id}`} className="flex gap-3">
        <div className="relative h-12 w-16 shrink-0 overflow-hidden rounded-sm">
          <Image
            src={deal.image}
            alt={deal.imageAlt}
            fill
            sizes="64px"
            className="object-cover"
          />
        </div>
        <div className="flex min-w-0 flex-col">
          <p className="truncate font-body text-small font-medium text-ink">
            {deal.title}
          </p>
          <p className="truncate font-body text-caption text-slate">{deal.client}</p>
          <p className="font-heading text-price tabular-nums text-ink">{deal.price}</p>
        </div>
      </Link>

      <div className="flex flex-wrap items-center justify-between gap-2">
        <p
          className={cn(
            "flex items-center gap-1 font-body text-caption",
            deal.overdue ? "font-medium text-warning" : "text-slate",
          )}
        >
          {deal.overdue ? (
            <AlertTriangle aria-hidden="true" className="size-4" strokeWidth={1.5} />
          ) : (
            <Clock aria-hidden="true" className="size-4" strokeWidth={1.5} />
          )}
          {deal.stageNote}
        </p>
        <span
          aria-hidden="true"
          className="flex size-8 items-center justify-center rounded-full bg-stone font-body text-caption font-semibold text-ink"
        >
          {deal.avatar}
        </span>
      </div>

      <div className="flex flex-col gap-1 border-t border-stone pt-2">
        <p className="font-body text-caption text-slate">{deal.meta1}</p>
        <p className="font-body text-caption text-mist">{deal.meta2}</p>
      </div>
    </article>
  );
}
