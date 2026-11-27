import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

// DESIGN.md Section 4: eyebrow label, H2, optional one-line description,
// optional "View all" text link aligned right.
type SectionHeaderProps = {
  eyebrow: string;
  title: string;
  description?: string;
  viewAllHref?: string;
  viewAllLabel?: string;
  /** Light = eyebrow in champagne-dark; dark = eyebrow in champagne (Section 3.2). */
  tone?: "light" | "dark";
  className?: string;
};

export function SectionHeader({
  eyebrow,
  title,
  description,
  viewAllHref,
  viewAllLabel = "View all",
  tone = "light",
  className,
}: SectionHeaderProps) {
  return (
    <div
      className={cn(
        "mb-8 flex flex-wrap items-end justify-between gap-4 lg:mb-12",
        className,
      )}
    >
      <div>
        <p
          className={cn(
            "mb-2 font-body text-eyebrow uppercase",
            tone === "dark" ? "text-champagne" : "text-champagne-dark",
          )}
        >
          {eyebrow}
        </p>
        <h2 className="font-heading text-h2 lg:text-h2-lg">{title}</h2>
        {description ? (
          <p className="mt-2 max-w-2xl font-body text-body text-slate">
            {description}
          </p>
        ) : null}
      </div>
      {viewAllHref ? (
        <Link
          href={viewAllHref}
          className="inline-flex items-center gap-2 font-body text-small text-ink underline decoration-champagne decoration-1 underline-offset-4 transition-colors hover:text-champagne-dark"
        >
          {viewAllLabel}
          <ArrowRight aria-hidden="true" className="size-5" strokeWidth={1.5} />
        </Link>
      ) : null}
    </div>
  );
}
