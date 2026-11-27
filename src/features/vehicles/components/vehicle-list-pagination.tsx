import Link from "next/link";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";
import {
  buildVehicleListQuery,
  type VehicleListFilters,
} from "@/features/vehicles/mocks";

// DESIGN.md Screen 2 pagination: result range summary plus numbered pages with
// previous/next controls. Rendered only when there is more than one page.

type VehicleListPaginationProps = {
  filters: VehicleListFilters;
  page: number;
  pageCount: number;
  total: number;
  rangeStart: number;
  rangeEnd: number;
};

const pageButtonClasses =
  "flex h-11 w-11 items-center justify-center rounded-sm border border-stone bg-white font-body text-small font-medium text-ink transition-colors hover:bg-stone/30 lg:h-10 lg:w-10";

export function VehicleListPagination({
  filters,
  page,
  pageCount,
  total,
  rangeStart,
  rangeEnd,
}: VehicleListPaginationProps) {
  const window: number[] = [];
  for (let p = 1; p <= Math.min(3, pageCount); p += 1) window.push(p);
  const showGap = pageCount > 4;
  const showLast = pageCount > 3;

  const pageLink = (target: number) =>
    `/vehicles${buildVehicleListQuery(filters, { page: target === 1 ? undefined : target })}`;

  return (
    <div className="flex flex-col items-center gap-4 border-t border-stone pt-6 sm:flex-row sm:justify-between">
      <p className="font-body text-small text-slate">
        Showing{" "}
        <span className="font-medium text-ink">
          {rangeStart}–{rangeEnd}
        </span>{" "}
        of <span className="font-medium text-ink">{total}</span> vehicles
      </p>

      {pageCount > 1 && (
        <nav aria-label="Pagination" className="flex items-center gap-1.5">
          {page > 1 ? (
            <Link
              href={pageLink(page - 1)}
              aria-label="Previous page"
              className={pageButtonClasses}
            >
              <ChevronLeft aria-hidden="true" className="size-5" strokeWidth={1.5} />
            </Link>
          ) : (
            <span
              aria-disabled="true"
              className={cn(pageButtonClasses, "cursor-not-allowed text-mist")}
            >
              <ChevronLeft aria-hidden="true" className="size-5" strokeWidth={1.5} />
            </span>
          )}

          {window.map((target) =>
            target === page ? (
              <span
                key={target}
                aria-current="page"
                className={cn(pageButtonClasses, "border-ink bg-ink text-white shadow-sm")}
              >
                {target}
              </span>
            ) : (
              <Link key={target} href={pageLink(target)} className={pageButtonClasses}>
                {target}
              </Link>
            ),
          )}
          {showGap && (
            <span className="flex h-11 w-8 items-center justify-center font-body text-small text-slate lg:h-10">
              ...
            </span>
          )}
          {showLast &&
            (page === pageCount ? (
              <span
                aria-current="page"
                className={cn(pageButtonClasses, "border-ink bg-ink text-white shadow-sm")}
              >
                {pageCount}
              </span>
            ) : (
              <Link href={pageLink(pageCount)} className={pageButtonClasses}>
                {pageCount}
              </Link>
            ))}

          {page < pageCount ? (
            <Link
              href={pageLink(page + 1)}
              aria-label="Next page"
              className={pageButtonClasses}
            >
              <ChevronRight aria-hidden="true" className="size-5" strokeWidth={1.5} />
            </Link>
          ) : (
            <span
              aria-disabled="true"
              className={cn(pageButtonClasses, "cursor-not-allowed text-mist")}
            >
              <ChevronRight aria-hidden="true" className="size-5" strokeWidth={1.5} />
            </span>
          )}
        </nav>
      )}
    </div>
  );
}
