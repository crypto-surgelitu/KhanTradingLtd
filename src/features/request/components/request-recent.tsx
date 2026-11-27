import Image from "next/image";
import Link from "next/link";
import { CheckCircle, ChevronRight } from "lucide-react";
import { requestRecentSourced } from "@/features/request/mocks";

// DESIGN.md Screen 6D recently sourced commissions showcase.

export function RequestRecent() {
  return (
    <section aria-label="Recently sourced" className="pb-14 sm:pb-18 lg:pb-24">
      <h2 className="pb-6 font-heading text-h2 lg:text-h2-lg">Recently Sourced</h2>

      <ul className="grid grid-cols-1 gap-6 md:grid-cols-2">
        {requestRecentSourced.map((commission) => (
          <li key={commission.title}>
            <article className="group overflow-hidden rounded-md border border-stone bg-white">
              <div className="relative aspect-video overflow-hidden">
                <Image
                  src={commission.image}
                  alt={commission.imageAlt}
                  fill
                  sizes="(min-width: 768px) 50vw, calc(100vw - 32px)"
                  className="object-cover motion-safe:transition-transform motion-safe:duration-300 motion-safe:ease-design motion-safe:group-hover:scale-103"
                />
                <span className="absolute left-3 top-3 inline-flex items-center gap-1 rounded-full bg-success/10 px-2.5 py-1 font-body text-caption font-medium text-success">
                  <CheckCircle aria-hidden="true" className="size-4" strokeWidth={1.5} />
                  Delivered
                </span>
              </div>
              <div className="flex flex-col gap-1 p-4">
                <h3 className="font-heading text-h3 lg:text-h3-lg">
                  {commission.title}
                </h3>
                <p className="font-body text-small text-slate">{commission.source}</p>
                <p className="font-body text-caption text-mist">{commission.delivery}</p>
              </div>
            </article>
          </li>
        ))}
      </ul>

      <Link
        href="/vehicles"
        className="mt-6 inline-flex min-h-11 items-center gap-2 font-body text-small font-medium text-ink underline decoration-champagne decoration-1 underline-offset-4 transition-colors hover:text-champagne-dark"
      >
        View all verified delivered commissions
        <ChevronRight aria-hidden="true" className="size-5" strokeWidth={1.5} />
      </Link>
    </section>
  );
}
