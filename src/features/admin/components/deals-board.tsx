import { DealCard } from "@/features/admin/components/deal-card";
import { dealsBoard } from "@/features/admin/mocks";

// DESIGN.md Screen G kanban board: one region per pipeline stage with its
// count, portfolio value and deal cards. Columns scroll horizontally on
// small screens (task allowance).

export function DealsBoard() {
  return (
    <section aria-label="Deals pipeline board" className="overflow-x-auto pb-14 sm:pb-18 lg:pb-24">
      <div className="flex min-w-max gap-6">
        {dealsBoard.map((column) => (
          <div
            key={column.id}
            role="region"
            aria-label={column.title}
            className="flex w-80 flex-col gap-4"
          >
            <div className="flex flex-col gap-1 rounded-md bg-stone/30 p-4">
              <div className="flex items-center justify-between gap-2">
                <h2 className="font-heading text-h3 lg:text-h3-lg">{column.title}</h2>
                <span className="inline-flex items-center rounded-full bg-white px-2.5 py-1 font-body text-caption font-medium text-slate">
                  {column.count}
                </span>
              </div>
              <p className="font-body text-caption text-slate">
                Portfolio Value{" "}
                <span className="font-medium text-ink">{column.portfolioValue}</span>
              </p>
            </div>

            <ul className="flex flex-col gap-4">
              {column.cards.map((deal) => (
                <li key={deal.id}>
                  <DealCard deal={deal} />
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
