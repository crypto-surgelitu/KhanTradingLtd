import { cn } from "@/lib/utils";

// DESIGN.md Section 3.1 status badges. Text labels always accompany colour
// (Section 11: status is never conveyed by colour alone).
const statusStyles: Record<VehicleStatus, string> = {
  in_stock: "bg-success/10 text-success",
  new_arrival: "bg-ink text-white",
  reserved: "bg-warning/10 text-warning",
  sold: "bg-stone text-slate",
  incoming: "bg-info/10 text-info",
};

const statusLabels: Record<VehicleStatus, string> = {
  in_stock: "In Stock",
  new_arrival: "New Arrival",
  reserved: "Reserved",
  sold: "Sold",
  incoming: "Incoming",
};

export type VehicleStatus =
  | "in_stock"
  | "new_arrival"
  | "reserved"
  | "sold"
  | "incoming";

type StatusBadgeProps = {
  status: VehicleStatus;
  className?: string;
};

// Capsule badge: 26px tall via caption line + 4px padding, 10px sides (Section 4).
export function StatusBadge({ status, className }: StatusBadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full px-2.5 py-1 font-body text-caption",
        statusStyles[status],
        className,
      )}
    >
      {statusLabels[status]}
    </span>
  );
}
