import type { Metadata } from "next";
import { AdminShell } from "@/components/layout/admin-shell";
import { ArrivingSoon } from "@/features/admin/components/arriving-soon";
import { DashboardStats } from "@/features/admin/components/dashboard-stats";
import { DashboardToolbar } from "@/features/admin/components/dashboard-toolbar";
import { RecentEnquiries } from "@/features/admin/components/recent-enquiries";
import { RecentVehicles } from "@/features/admin/components/recent-vehicles";
import { ReservationAlert } from "@/features/admin/components/reservation-alert";
import { TodayViewings } from "@/features/admin/components/today-viewings";

export const metadata: Metadata = {
  title: "Dashboard",
  description: "Dealership operations overview for KHANS TRADING Ltd staff.",
  robots: { index: false, follow: false },
};

// DESIGN.md Section 8 Admin Screen B — Dashboard. Server Component with the
// shared admin shell (sidebar + top bar); all data is the labelled SAMPLE
// mock in features/admin/mocks.ts. No data-fetching is wired yet.

export default function AdminDashboardPage() {
  return (
    <AdminShell current="/admin/dashboard">
      <DashboardToolbar />
      <ReservationAlert />
      <DashboardStats />
      <RecentEnquiries />
      <RecentVehicles />
      <div className="grid grid-cols-1 gap-12 xl:grid-cols-2">
        <TodayViewings />
        <ArrivingSoon />
      </div>
    </AdminShell>
  );
}
