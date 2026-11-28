import { BadgeCheck, Check, Download, FileText, Languages, Lock, Upload } from "lucide-react";
import { cn } from "@/lib/utils";
import { shipmentDetail, shipmentDocuments, type ShipmentDocument } from "@/features/admin/mocks";

// Shipment document checklist for the detail drawer (DESIGN.md Section 8,
// Admin Screen M). Downloads and uploads are presentational until the private
// document storage lands (docs/TASKS.md).

const statusIcons: Record<ShipmentDocument["statusIcon"], React.ElementType> = {
  check: Check,
  lock: Lock,
  languages: Languages,
  badge: BadgeCheck,
};

export function ShipmentDocuments() {
  return (
    <section aria-label={shipmentDetail.documentsTitle}>
      <div className="mb-2.5 flex items-center justify-between gap-2">
        <h3 className="font-body text-eyebrow uppercase text-slate">{shipmentDetail.documentsTitle}</h3>
        {/* TODO(KHANS TRADING Ltd / backend): document upload lands with the shipment document storage (docs/TASKS.md). */}
        <button
          type="button"
          className="inline-flex items-center gap-1 font-body text-caption text-champagne-dark underline-offset-4 hover:underline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ink"
        >
          <Upload aria-hidden="true" className="size-3.5" strokeWidth={1.5} />
          {shipmentDetail.uploadLabel}
        </button>
      </div>
      <ul className="flex flex-col gap-2">
        {shipmentDocuments.map((doc) => {
          const StatusIcon = statusIcons[doc.statusIcon];
          return (
            <li
              key={doc.name}
              className="flex items-center justify-between gap-2 rounded-sm bg-stone/20 p-2.5 transition-colors hover:bg-stone/40"
            >
              <div className="flex min-w-0 items-center gap-2.5">
                <FileText aria-hidden="true" className="size-5 shrink-0 text-danger" strokeWidth={1.5} />
                <div className="min-w-0">
                  <p className="truncate font-body text-small font-medium text-ink">{doc.name}</p>
                  <p
                    className={cn(
                      "flex items-center gap-1 font-body text-caption",
                      doc.statusTone === "success" ? "text-success" : "text-info",
                    )}
                  >
                    <StatusIcon aria-hidden="true" className="size-3.5" strokeWidth={1.5} />
                    {doc.status}
                  </p>
                </div>
              </div>
              {/* TODO(KHANS TRADING Ltd / backend): signed document download lands with the shipment document storage (docs/TASKS.md). */}
              <button
                type="button"
                aria-label={`Download ${doc.name}`}
                className="flex size-11 shrink-0 items-center justify-center rounded-sm text-slate transition-colors hover:bg-stone/40 hover:text-ink focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ink lg:size-10"
              >
                <Download aria-hidden="true" className="size-5" strokeWidth={1.5} />
              </button>
            </li>
          );
        })}
      </ul>
    </section>
  );
}
