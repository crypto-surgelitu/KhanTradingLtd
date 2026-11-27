import { cn } from "@/lib/utils";
import type { StatusTone } from "@/features/admin/mocks";

// Tone pill for admin workflow states (enquiries, viewings, shipments).
// Text always accompanies colour (DESIGN.md Section 11).

const toneStyles: Record<StatusTone, string> = {
  success: "bg-success/10 text-success",
  warning: "bg-warning/10 text-warning",
  info: "bg-info/10 text-info",
  ink: "bg-ink text-white",
  muted: "bg-stone text-slate",
};

type AdminStatusPillProps = {
  label: string;
  tone: StatusTone;
  className?: string;
};

export function AdminStatusPill({ label, tone, className }: AdminStatusPillProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full px-2.5 py-1 font-body text-caption",
        toneStyles[tone],
        className,
      )}
    >
      {label}
    </span>
  );
}
