import type { Metadata } from "next";
import { AdminShell } from "@/components/layout/admin-shell";
import { InventoryBulkBar } from "@/features/admin/components/inventory-bulk-bar";
import { InventoryPagination } from "@/features/admin/components/inventory-pagination";
import { InventoryTable } from "@/features/admin/components/inventory-table";
import { InventoryToolbar } from "@/features/admin/components/inventory-toolbar";

export const metadata: Metadata = {
  title: "Inventory",
  description: "Dealership fleet inventory management for KHANS TRADING Ltd staff.",
  robots: { index: false, follow: false },
};

// DESIGN.md Section 8 Admin Screen C — Inventory. Server Component with the
// shared admin shell; rows are the labelled SAMPLE mock in
// features/admin/mocks.ts. Interactive leaves: InventoryBulkBar (selection
// actions + deletion dialog).

export default function AdminInventoryPage() {
  return (
    <AdminShell current="/admin/inventory">
      <section aria-label="Inventory">
        <InventoryToolbar />
        <InventoryBulkBar />
        <InventoryTable />
        <InventoryPagination />
      </section>
    </AdminShell>
  );
}
