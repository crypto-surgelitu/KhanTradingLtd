import Image from "next/image";
import { Check, Clock, FileText, Gavel, Pin, Receipt, Ship, Warehouse } from "lucide-react";
import { cn } from "@/lib/utils";
import {
  shipmentBoard,
  type ShipmentCard,
  type ShipmentCardIcon,
  type ShipmentChipTone,
  type ShipmentFooter,
  type ShipmentTextTone,
} from "@/features/admin/mocks";

// The 7-stage shipments board (DESIGN.md Section 7.2 stages) from the Stitch
// export: horizontally scrollable stage columns with shipment cards. Rendered
// inside the ShipmentExplorer client leaf; card selection is visual only until
// the shipment query lands (docs/TASKS.md).

const cardIcons: Record<ShipmentCardIcon, React.ElementType> = {
  pin: Pin,
  receipt: Receipt,
  clock: Clock,
  file: FileText,
  check: Check,
  warehouse: Warehouse,
  ship: Ship,
  gavel: Gavel,
};

const chipTones: Record<ShipmentChipTone, string> = {
  slate: "bg-stone/60 text-slate",
  warning: "bg-warning/10 text-warning",
  info: "bg-info/10 text-info",
  champagne: "bg-champagne-tint text-champagne-dark",
};

const textTones: Record<ShipmentTextTone, string> = {
  ink: "text-ink",
  slate: "text-slate",
  mist: "text-mist",
  success: "text-success",
  warning: "text-warning",
  danger: "text-danger",
  info: "text-info",
  "champagne-dark": "text-champagne-dark",
};

const dotTones = {
  slate: "bg-slate",
  info: "bg-info",
  champagne: "bg-champagne",
  "champagne-dark": "bg-champagne-dark",
  success: "bg-success",
} as const;

type ShipmentBoardProps = {
  selectedId: string;
  onSelect: (id: string) => void;
};

function ShipmentCardFooter({ footer }: { footer: ShipmentFooter }) {
  if (footer.kind === "progress") {
    const barClass = footer.bar === "warning" ? "bg-warning" : "bg-info";
    return (
      <div className="mt-2.5 rounded-sm bg-ivory p-2 font-body text-caption">
        <p className="mb-1 truncate text-mist">{footer.vessel}</p>
        <div
          role="progressbar"
          aria-label={footer.pctLabel}
          aria-valuenow={footer.pct}
          aria-valuemin={0}
          aria-valuemax={100}
          className="h-1.5 w-full overflow-hidden rounded-full bg-stone"
        >
          <div className={cn("h-full rounded-full", footer.barWidthClass, barClass)} />
        </div>
        <p className="mt-1 flex items-center justify-between text-caption text-mist">
          <span className="truncate">{footer.track}</span>
          <span className="shrink-0">{footer.pctLabel}</span>
        </p>
      </div>
    );
  }
  const LeftIcon = footer.leftIcon ? cardIcons[footer.leftIcon] : null;
  return (
    <div className="mt-2.5 flex items-center justify-between gap-2 rounded-sm bg-ivory p-1.5 font-body text-caption">
      <span
        className={cn(
          "inline-flex min-w-0 items-center gap-1",
          textTones[footer.leftTone ?? "slate"],
        )}
      >
        {LeftIcon ? <LeftIcon aria-hidden="true" className="size-3.5 shrink-0 text-mist" strokeWidth={1.5} /> : null}
        <span className="truncate">{footer.left}</span>
      </span>
      <span className={cn("shrink-0 font-semibold", textTones[footer.rightTone ?? "ink"])}>
        {footer.right}
      </span>
    </div>
  );
}

function ShipmentBoardCard({
  card,
  selected,
  onSelect,
}: {
  card: ShipmentCard;
  selected: boolean;
  onSelect: (id: string) => void;
}) {
  const ChipIcon = card.chipIcon ? cardIcons[card.chipIcon] : null;
  return (
    <button
      type="button"
      aria-pressed={selected}
      onClick={() => onSelect(card.id)}
      className={cn(
        "relative flex w-full flex-col rounded-md border border-stone bg-white p-3 text-left shadow-sm transition-shadow hover:shadow-md focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ink",
        selected && "border-champagne bg-champagne-tint/10 shadow-md",
      )}
    >
      {selected ? (
        <span className="absolute -top-2 right-3 rounded-full bg-champagne px-2 py-0.5 font-body text-caption font-semibold uppercase text-ink shadow-sm">
          Active Selection
        </span>
      ) : null}
      <span className="mb-2 flex items-center justify-between gap-2">
        <span
          className={cn(
            "inline-flex items-center gap-1 rounded-full px-2 py-0.5 font-body text-caption font-medium",
            chipTones[card.chipTone],
          )}
        >
          {ChipIcon ? <ChipIcon aria-hidden="true" className="size-3.5" strokeWidth={1.5} /> : null}
          {card.chip}
        </span>
        <span
          className={cn(
            "shrink-0 font-body text-caption",
            card.dateTone === "ink" ? "font-semibold text-ink" : "text-slate",
          )}
        >
          {card.date}
        </span>
      </span>
      <span className="flex items-start gap-2.5">
        <Image
          src={card.image}
          alt={card.imageAlt}
          width={card.imageW}
          height={card.imageH}
          sizes="64px"
          className="h-12 w-16 shrink-0 rounded-sm object-cover"
        />
        <span className="min-w-0">
          <span className="block truncate font-body text-small font-medium text-ink">{card.title}</span>
          <span className="block truncate font-body text-caption text-mist">{card.sub}</span>
        </span>
      </span>
      <ShipmentCardFooter footer={card.footer} />
    </button>
  );
}

export function ShipmentBoard({ selectedId, onSelect }: ShipmentBoardProps) {
  return (
    <section aria-label="Shipments pipeline board" className="min-w-0 overflow-x-auto pb-6">
      <h2 className="sr-only">Shipments pipeline board</h2>
      <div className="flex w-max min-w-full items-start gap-3">
        {shipmentBoard.map((column) => (
          <div key={column.stage} className="flex w-72 shrink-0 flex-col gap-3">
            <div className="flex items-center justify-between rounded-sm bg-stone/60 px-2 py-1.5">
              <span className="flex items-center gap-2">
                <span aria-hidden="true" className={cn("size-2 rounded-full", dotTones[column.dot])} />
                <h3 className="font-body text-caption font-semibold uppercase text-ink">{column.stage}</h3>
              </span>
              <span
                className={cn(
                  "rounded-sm px-1.5 py-0.5 font-body text-caption font-semibold shadow-sm",
                  column.active ? "bg-champagne text-white" : "bg-white text-slate",
                )}
              >
                {column.count}
              </span>
            </div>
            <div className="flex flex-col gap-2.5">
              {column.cards.map((card) => (
                <ShipmentBoardCard
                  key={card.id}
                  card={card}
                  selected={card.id === selectedId}
                  onSelect={onSelect}
                />
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
