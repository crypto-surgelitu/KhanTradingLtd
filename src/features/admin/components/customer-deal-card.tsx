import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { customerDetailDeal } from "@/features/admin/mocks";

// DESIGN.md Screen J in-flight transaction card: the customer's open deal
// with stage, deposit status, concierge and price.

export function CustomerDealCard() {
  const deal = customerDetailDeal;

  return (
    <section aria-label="In-flight transaction" className="pb-12">
      <article className="flex flex-col gap-5 rounded-md border border-stone bg-white p-6 lg:p-8">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <p className="font-body text-eyebrow uppercase text-champagne-dark">
            {deal.eyebrow}
          </p>
          <Link
            href={`/admin/deals/${deal.dealId}`}
            className="inline-flex min-h-11 items-center gap-1 font-body text-small font-medium text-ink underline decoration-champagne decoration-1 underline-offset-4 transition-colors hover:text-champagne-dark"
          >
            Open Deal Detail
            <ArrowRight aria-hidden="true" className="size-4" strokeWidth={1.5} />
          </Link>
        </div>

        <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
          <div className="relative aspect-video overflow-hidden rounded-md">
            <Image
              src={deal.image}
              alt={deal.imageAlt}
              fill
              sizes="(min-width: 1024px) 50vw, calc(100vw - 32px)"
              className="object-cover"
            />
          </div>

          <div className="flex flex-col gap-3">
            <span className="inline-flex w-fit items-center rounded-full bg-champagne-tint px-2.5 py-1 font-body text-caption font-medium text-champagne-dark">
              {deal.chip}
            </span>
            <h2 className="font-heading text-h3 lg:text-h3-lg">{deal.title}</h2>
            <p className="font-body text-small text-slate">{deal.specs}</p>
            <p className="rounded-md bg-ivory p-3 font-body text-small font-medium text-ink">
              {deal.stage}
            </p>
            <p className="font-body text-small text-ink">{deal.deposit}</p>
            <p className="font-body text-caption text-slate">{deal.settlement}</p>
            <p className="flex flex-wrap items-center gap-2 border-t border-stone pt-3 font-body text-small text-slate">
              <span className="font-medium text-ink">Assigned Concierge:</span>
              {deal.concierge}
            </p>
            <p className="font-heading text-price tabular-nums text-ink">{deal.price}</p>
          </div>
        </div>
      </article>
    </section>
  );
}
