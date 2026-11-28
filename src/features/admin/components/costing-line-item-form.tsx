"use client";

import { useState } from "react";
import { Download, Plus } from "lucide-react";
import { costingCategories } from "@/features/admin/mocks";

// Client leaf for the cost-sheet actions (DESIGN.md Section 8, Admin Screen L):
// "+ Add Line Item" reveals the cost-item form whose financial fields follow
// the CostItem model (DESIGN.md Section 7) — amount as a numeric input, an
// optional foreign-currency amount with its exchange rate, and the Section 7.3
// cost categories. Saving is not wired yet (presentational).

const fieldClass =
  "h-11 w-full rounded-sm border border-stone bg-white px-3 font-body text-small text-ink placeholder:text-mist focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ink lg:h-12";

export function CostingLineItemForm() {
  const [open, setOpen] = useState(false);

  return (
    <div className="flex flex-col gap-3">
      <div className="flex flex-wrap items-center gap-3">
        <button
          type="button"
          aria-expanded={open}
          aria-controls="costing-add-item"
          onClick={() => setOpen((value) => !value)}
          className="inline-flex h-11 items-center gap-2 rounded-sm border border-stone bg-white px-4 font-body text-button text-ink transition-colors hover:bg-stone/40 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ink lg:h-10"
        >
          <Plus aria-hidden="true" className="size-5" strokeWidth={1.5} />
          Add Line Item
        </button>
        {/* TODO(KHANS TRADING Ltd / backend): generate the cost-sheet PDF once reporting lands (docs/TASKS.md). */}
        <button
          type="button"
          className="inline-flex h-11 items-center gap-2 rounded-sm bg-ink px-4 font-body text-button text-white transition-colors hover:bg-graphite focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ink lg:h-10"
        >
          <Download aria-hidden="true" className="size-5" strokeWidth={1.5} />
          Download Cost Sheet (PDF)
        </button>
      </div>

      {open ? (
        <form
          id="costing-add-item"
          className="flex flex-col gap-4 rounded-sm border border-stone bg-stone/20 p-4"
          onSubmit={(event) => {
            event.preventDefault();
            // TODO(KHANS TRADING Ltd / backend): persist the cost line item when the costing action lands (docs/TASKS.md).
          }}
        >
          <p className="font-body text-eyebrow uppercase text-slate">New cost line item</p>

          <div className="flex flex-col gap-1">
            <label htmlFor="cost-category" className="font-body text-small font-medium text-ink">
              Cost category
            </label>
            <select id="cost-category" name="category" required className={fieldClass}>
              {costingCategories.map((category) => (
                <option key={category} value={category}>
                  {category}
                </option>
              ))}
            </select>
          </div>

          <div className="flex flex-col gap-1">
            <label htmlFor="cost-note" className="font-body text-small font-medium text-ink">
              Supplier note
            </label>
            <input
              id="cost-note"
              name="note"
              type="text"
              className={fieldClass}
              placeholder="e.g. USS Tokyo Lot #4492 · ¥4,250,000"
            />
          </div>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <div className="flex flex-col gap-1">
              <label htmlFor="cost-amount" className="font-body text-small font-medium text-ink">
                Amount (KES)
              </label>
              <input
                id="cost-amount"
                name="amount"
                type="number"
                min="0"
                step="0.01"
                inputMode="decimal"
                required
                className={fieldClass}
              />
            </div>
            <div className="flex flex-col gap-1">
              <label htmlFor="cost-date" className="font-body text-small font-medium text-ink">
                Incurred on
              </label>
              <input id="cost-date" name="incurredOn" type="date" required className={fieldClass} />
            </div>
          </div>

          <fieldset className="flex flex-col gap-3 rounded-sm border border-stone/70 bg-white p-3">
            <legend className="px-1 font-body text-caption font-medium text-slate">
              Foreign currency (optional)
            </legend>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
              <div className="flex flex-col gap-1">
                <label htmlFor="cost-original" className="font-body text-small font-medium text-ink">
                  Original amount
                </label>
                <input
                  id="cost-original"
                  name="originalAmount"
                  type="number"
                  min="0"
                  step="0.01"
                  inputMode="decimal"
                  className={fieldClass}
                />
              </div>
              <div className="flex flex-col gap-1">
                <label htmlFor="cost-currency" className="font-body text-small font-medium text-ink">
                  Currency
                </label>
                <input
                  id="cost-currency"
                  name="currency"
                  type="text"
                  className={fieldClass}
                  placeholder="JPY"
                />
              </div>
              <div className="flex flex-col gap-1">
                <label htmlFor="cost-rate" className="font-body text-small font-medium text-ink">
                  Exchange rate
                </label>
                <input
                  id="cost-rate"
                  name="exchangeRate"
                  type="number"
                  min="0"
                  step="0.0001"
                  inputMode="decimal"
                  className={fieldClass}
                />
              </div>
            </div>
          </fieldset>

          <div className="flex flex-wrap items-center gap-3">
            <button
              type="submit"
              className="inline-flex h-11 items-center rounded-sm bg-ink px-4 font-body text-button text-white transition-colors hover:bg-graphite focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ink lg:h-10"
            >
              Save line item
            </button>
            <button
              type="button"
              onClick={() => setOpen(false)}
              className="inline-flex h-11 items-center rounded-sm border border-stone bg-white px-4 font-body text-button text-ink transition-colors hover:bg-stone/40 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ink lg:h-10"
            >
              Cancel
            </button>
          </div>
        </form>
      ) : null}
    </div>
  );
}
