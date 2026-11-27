import { BadgeCheck, Download, Eye, FileText, Upload } from "lucide-react";
import { cn } from "@/lib/utils";
import { trackDocuments, trackIssuedDocuments, type TrackTone } from "@/features/tracking/mocks";

// DESIGN.md Screen 6B documents checklist with per-row status and actions,
// plus the documents Khans has issued (download placeholders).

const toneStyles: Record<TrackTone, string> = {
  success: "bg-success/10 text-success",
  warning: "bg-warning/10 text-warning",
  champagne: "bg-champagne-tint text-champagne-dark",
  muted: "bg-stone text-slate",
};

export function TrackDocuments() {
  return (
    <section aria-label="Documents" className="pb-12">
      <div className="rounded-md border border-stone bg-white p-6 lg:p-8">
        <div className="flex flex-col gap-1 pb-6">
          <h2 className="font-heading text-h2 lg:text-h2-lg">
            Documentation &amp; Compliance Audit
          </h2>
          <p className="font-body text-small text-slate">
            Required for NTSA TIMS vehicle transfer &amp; KRA clearance
          </p>
        </div>

        <ul className="flex flex-col gap-4">
          {trackDocuments.map((document) => (
            <li
              key={document.title}
              className="flex flex-wrap items-start gap-4 rounded-md border border-stone p-4"
            >
              <FileText aria-hidden="true" className="size-6 shrink-0 text-champagne" strokeWidth={1.5} />
              <div className="min-w-0 flex-1">
                <p className="font-body text-small font-medium text-ink">
                  {document.title}
                </p>
                <p className="font-body text-caption text-slate">{document.description}</p>
              </div>
              <span
                className={cn(
                  "inline-flex items-center rounded-full px-2.5 py-1 font-body text-caption",
                  toneStyles[document.tone],
                )}
              >
                {document.status}
              </span>
              <button
                type="button"
                className="inline-flex min-h-11 items-center gap-2 rounded-sm border border-ink px-4 font-body text-small font-medium text-ink transition-colors hover:bg-ink hover:text-white"
              >
                {document.action === "Upload File" || document.action === "Re-upload" ? (
                  <Upload aria-hidden="true" className="size-4" strokeWidth={1.5} />
                ) : (
                  <Eye aria-hidden="true" className="size-4" strokeWidth={1.5} />
                )}
                {document.action}
              </button>
            </li>
          ))}
        </ul>

        <h3 className="border-t border-stone pt-6 font-heading text-h3 lg:text-h3-lg">
          Documents Issued by Khans Trading Ltd
        </h3>
        <ul className="flex flex-col gap-3 pt-4">
          {trackIssuedDocuments.map((document) => (
            <li
              key={document.name}
              className="flex flex-wrap items-center gap-3 rounded-md bg-ivory p-4"
            >
              <BadgeCheck aria-hidden="true" className="size-6 shrink-0 text-champagne" strokeWidth={1.5} />
              <p className="min-w-0 flex-1 font-body text-small font-medium text-ink">
                {document.name}
              </p>
              <p className="font-body text-caption text-mist">{document.size}</p>
              <button
                type="button"
                aria-label={`Download ${document.name}`}
                className="flex size-11 items-center justify-center rounded-full border border-stone bg-white text-ink transition-colors hover:bg-champagne-tint"
              >
                <Download aria-hidden="true" className="size-5" strokeWidth={1.5} />
              </button>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
