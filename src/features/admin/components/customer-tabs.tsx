"use client";

import { useState } from "react";
import { Inbox } from "lucide-react";
import { cn } from "@/lib/utils";
import { customerDetailProfile } from "@/features/admin/mocks";

// DESIGN.md Screen J detail tab strip. One of the small interactive leaves
// for this screen. Only the Overview panel is part of the approved export;
// the remaining tabs render the DESIGN.md Section 4 empty state until their
// data sections land (docs/TASKS.md).

type CustomerTabsProps = {
  overview: React.ReactNode;
};

export function CustomerTabs({ overview }: CustomerTabsProps) {
  const [active, setActive] = useState("overview");

  return (
    <div className="flex flex-col gap-6">
      <div
        role="tablist"
        aria-label="Customer record sections"
        className="flex flex-wrap gap-2 border-b border-stone pb-2"
      >
        {customerDetailProfile.tabs.map((tab) => (
          <button
            key={tab.id}
            type="button"
            role="tab"
            id={`customer-tab-${tab.id}`}
            aria-selected={active === tab.id}
            aria-controls={`customer-panel-${tab.id}`}
            onClick={() => setActive(tab.id)}
            className={cn(
              "flex min-h-11 flex-col items-start rounded-sm px-4 py-2 font-body text-small transition-colors",
              active === tab.id
                ? "bg-ink font-medium text-white"
                : "text-slate hover:bg-champagne-tint hover:text-ink",
            )}
          >
            <span>{tab.label}</span>
            {tab.caption ? (
              <span
                className={cn(
                  "font-body text-caption",
                  active === tab.id ? "text-white/80" : "text-mist",
                )}
              >
                {tab.caption}
              </span>
            ) : null}
          </button>
        ))}
      </div>

      {active === "overview" ? (
        <div role="tabpanel" id="customer-panel-overview" aria-labelledby="customer-tab-overview">
          {overview}
        </div>
      ) : (
        <div
          role="tabpanel"
          id={`customer-panel-${active}`}
          aria-labelledby={`customer-tab-${active}`}
          className="flex flex-col items-center gap-4 rounded-md border border-stone bg-white px-6 py-16 text-center"
        >
          <Inbox aria-hidden="true" className="size-10 text-mist" strokeWidth={1.5} />
          <p className="font-body text-body-l text-slate">
            This section of the customer record is not connected yet.
          </p>
          <button
            type="button"
            className="inline-flex min-h-11 items-center rounded-sm border border-ink px-6 font-body text-button text-ink transition-colors hover:bg-ink hover:text-white"
          >
            View full timeline
          </button>
        </div>
      )}
    </div>
  );
}
