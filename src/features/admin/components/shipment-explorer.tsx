"use client";

import { useState } from "react";
import { ShipmentBoard } from "@/features/admin/components/shipment-board";
import { ShipmentListTable } from "@/features/admin/components/shipment-list-table";
import { ShipmentToolbar } from "@/features/admin/components/shipment-toolbar";
import { shipmentSelectedCardId } from "@/features/admin/mocks";

// Client leaf owning the interactive state of the shipments workspace
// (DESIGN.md Section 8, Admin Screen M): Board / List view switch, the
// "Delayed Only" quick filter and the selected shipment card. Selection is
// visual only until the shipment query lands (docs/TASKS.md).

export function ShipmentExplorer() {
  const [view, setView] = useState<"board" | "list">("board");
  const [selectedId, setSelectedId] = useState<string>(shipmentSelectedCardId);
  const [delayedOnly, setDelayedOnly] = useState(false);

  return (
    <div className="flex min-w-0 flex-1 flex-col gap-6">
      <ShipmentToolbar
        view={view}
        onViewChange={setView}
        delayedOnly={delayedOnly}
        onDelayedToggle={() => setDelayedOnly((value) => !value)}
      />
      {view === "board" ? (
        <ShipmentBoard selectedId={selectedId} onSelect={setSelectedId} />
      ) : (
        <ShipmentListTable />
      )}
    </div>
  );
}
