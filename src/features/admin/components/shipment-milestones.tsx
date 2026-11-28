import { ArrowRight, Check } from "lucide-react";
import { cn } from "@/lib/utils";
import { shipmentDetail, shipmentMilestones } from "@/features/admin/mocks";

// Logistics milestone timeline for the shipment detail drawer (DESIGN.md
// Section 7.2 stages). Completed steps carry a check, the current step is
// highlighted in champagne, future steps are muted — status is always text as
// well as colour (DESIGN.md Section 11).

export function ShipmentMilestones() {
  return (
    <section aria-label={shipmentDetail.milestonesTitle}>
      <div className="mb-3 flex items-center justify-between gap-2">
        <h3 className="font-body text-eyebrow uppercase text-slate">{shipmentDetail.milestonesTitle}</h3>
        <span className="font-body text-caption font-medium text-champagne-dark">
          {shipmentDetail.stageActive}
        </span>
      </div>
      <ol className="relative flex flex-col gap-4 pl-8 before:absolute before:inset-y-2 before:left-1.5 before:w-0.5 before:bg-stone">
        {shipmentMilestones.map((milestone) => (
          <li key={milestone.title} className={cn("relative", milestone.state === "pending" && "opacity-60")}>
            <span
              aria-hidden="true"
              className={cn(
                "absolute -left-8 top-1 flex size-3.5 items-center justify-center rounded-full",
                milestone.state === "done" && "bg-success text-white",
                milestone.state === "current" && "bg-champagne text-ink ring-4 ring-champagne-tint",
                milestone.state === "pending" && "bg-stone text-mist",
              )}
            >
              {milestone.state === "done" ? (
                <Check className="size-2.5" strokeWidth={3} />
              ) : milestone.state === "current" ? (
                <ArrowRight className="size-2.5" strokeWidth={3} />
              ) : (
                <span className="size-1.5 rounded-full bg-mist" />
              )}
            </span>
            <div className="flex items-center justify-between gap-2">
              <p
                className={cn(
                  "flex items-center gap-1.5 font-body text-small",
                  milestone.state === "current"
                    ? "font-semibold text-ink"
                    : milestone.state === "done"
                      ? "font-medium text-ink"
                      : "font-medium text-slate",
                )}
              >
                {milestone.title}
                {milestone.chip ? (
                  <span className="rounded-sm bg-champagne px-1.5 py-0.5 font-body text-caption font-semibold text-ink">
                    {milestone.chip}
                  </span>
                ) : null}
              </p>
              <p
                className={cn(
                  "shrink-0 font-body text-caption",
                  milestone.state === "current"
                    ? "font-semibold text-ink"
                    : milestone.state === "done"
                      ? "text-slate"
                      : "text-mist",
                )}
              >
                {milestone.right}
              </p>
            </div>
            <p
              className={cn(
                "font-body text-caption",
                milestone.state === "current" ? "font-medium text-slate" : "text-mist",
              )}
            >
              {milestone.note}
            </p>
          </li>
        ))}
      </ol>
    </section>
  );
}
