import type { VehicleStatus } from "@/components/shared/status-badge";

// MOCK: Admin Dashboard sample data — clearly labelled placeholder content
// per DESIGN.md Section 0.7 and AGENTS.md Section 2.4, mirroring the approved
// Stitch export (docs/design/admin-dashboard.json). Replace with admin
// queries when the backend contract lands. No real customer, staff or
// business data lives here — the values are the design's SAMPLE content.

export type StatusTone = "success" | "warning" | "info" | "ink" | "muted";

export const dashboardUser = {
  initials: "AK",
  name: "Alex Kariuki",
  role: "Dealership Manager",
} as const;

export const dashboardDateLabel = "Today, Nov 24";

export type DashboardStat = {
  label: string;
  caption: string;
  icon: "warehouse" | "store" | "handshake" | "target";
  value: string;
  note: string;
  trend?: string;
};

export const dashboardStats: DashboardStat[] = [
  { label: "Total vehicles", caption: "garage", icon: "warehouse", value: "128", note: "added this week", trend: "+4" },
  { label: "In stock", caption: "Showroom", icon: "store", value: "84", note: "Showroom ready in Nairobi" },
  { label: "Reserved", caption: "Commitments", icon: "handshake", value: "18", note: "Awaiting documentation / deposit" },
  { label: "Sold this month", caption: "Target 112%", icon: "target", value: "26", note: "KSh 184.2M gross volume" },
];

export type EnquiryRow = {
  initials: string;
  name: string;
  vehicle: string;
  timeline: string;
  note: string;
  status: string;
  statusTone: StatusTone;
  action: string;
};

export const recentEnquiries: EnquiryRow[] = [
  { initials: "DK", name: "David Kamau", vehicle: "2019 Toyota Land Cruiser Prado TZ-G", timeline: "12m ago", note: "+254 712 34X XXX", status: "New", statusTone: "info", action: "Convert" },
  { initials: "SM", name: "Sarah Mwangi", vehicle: "2021 Land Rover Defender 110 SE", timeline: "45m ago", note: "Prefers weekend viewing", status: "Contacted", statusTone: "muted", action: "Schedule" },
  { initials: "BK", name: "Brian Kiprop", vehicle: "2020 Lexus RX 350 F-Sport", timeline: "2h ago", note: "Asset finance enquiry", status: "New", statusTone: "info", action: "Valuation" },
  { initials: "FO", name: "Fatma Omar", vehicle: "2021 Porsche Macan GTS", timeline: "3h ago", note: "Trade-in: 2018 BMW X3", status: "In Progress", statusTone: "warning", action: "Valuation" },
  { initials: "JO", name: "Joseph Ochieng", vehicle: "2022 Toyota Hilux Double Cab", timeline: "5h ago", note: "Direct sourcing inquiry", status: "Contacted", statusTone: "muted", action: "Follow-up" },
];

export type RecentVehicle = {
  title: string;
  specs: string[];
  price: string;
  note: string;
  status: VehicleStatus;
  image: string;
  imageAlt: string;
};

export const recentVehicles: RecentVehicle[] = [
  { title: "2021 Mercedes-Benz C200 AMG Line", specs: ["Sunroof", "14,200 km", "Added 2 hours ago"], price: "KSh 4,950,000", note: "Duty fully cleared", status: "in_stock", image: "/images/admin-dashboard/vehicle-mercedes-c200.webp", imageAlt: "Front three-quarter studio portrait of an obsidian black 2021 Mercedes-Benz C200 AMG Line sedan in high-key architectural lighting with subtle reflections on warm neutral floor." },
  { title: "2020 Audi Q7 55 TFSI Quattro", specs: ["3.0L V6", "28,500 km", "Added yesterday"], price: "KSh 8,250,000", note: "[KRA clearance pending]", status: "new_arrival", image: "/images/admin-dashboard/vehicle-audi-q7.webp", imageAlt: "Pristine white 2020 Audi Q7 55 TFSI Quattro luxury SUV in modern clean minimalist showroom setting with polished concrete floor." },
  { title: "2021 BMW X5 xDrive40i M Sport", specs: ["TwinPower Turbo", "22,100 km", "Added 2 days ago"], price: "KSh 9,600,000", note: "Verified Nairobi", status: "in_stock", image: "/images/admin-dashboard/vehicle-bmw-x5.webp", imageAlt: "Mineral gray 2021 BMW X5 xDrive40i M Sport luxury SUV parked in architectural gallery setting with soft golden champagne lighting accents." },
  { title: "2021 Subaru Outback Touring EyeSight", specs: ["AWD EyeSight", "34,000 km", "Added 3 days ago"], price: "KSh 4,350,000", note: "Deposit held", status: "reserved", image: "/images/admin-dashboard/vehicle-subaru-outback.webp", imageAlt: "Crystal white pearl 2021 Subaru Outback Touring EyeSight parked outside high-end modern Nairobi residential estate." },
];

export type ViewingRow = {
  time: string;
  title: string;
  client: string;
  staff: string;
  note: string;
  status: string;
  statusTone: StatusTone;
  action?: string;
  badge?: string;
};

export const todayViewings: ViewingRow[] = [
  { time: "10:30 AM", title: "Viewing: 2019 Prado TZ-G", client: "James Kariuki", staff: "Alex K.", note: "Nairobi Main Bay 2", status: "Confirmed", statusTone: "success" },
  { time: "01:15 PM", title: "Test Drive: 2021 Defender 110", client: "Dr. Angela Mutua", staff: "Peter M.", note: "Driver license verified", status: "Confirmed", statusTone: "success", badge: "Driver license verified" },
  { time: "03:00 PM", title: "Viewing: 2020 Lexus RX 350", client: "Kevin Njoroge", staff: "Alex K.", note: "Awaiting final confirmation", status: "Requested", statusTone: "warning", action: "Confirm now" },
  { time: "05:00 PM", title: "Handover & Final Inspection", client: "2021 Mercedes C200 • Client: Cynthia W.", staff: "", note: "Logbook & keys assembled", status: "Ready", statusTone: "info", badge: "Paid in full" },
];

export type ShipmentRow = {
  title: string;
  stage: string;
  stageTone: StatusTone;
  detail: string;
  eta: string;
  location: string;
  note: string;
};

export const arrivingSoon: ShipmentRow[] = [
  { title: "2022 Land Cruiser 300 ZX", stage: "Port Clearance", stageTone: "warning", detail: "Vessel: MV Grand Dahlia • ETA:", eta: "3 days", location: "Mombasa Port Berth 5", note: "[KRA clearance pending]" },
  { title: "2020 Alphard Exec Lounge", stage: "In Transit", stageTone: "info", detail: "Container: MSCU-88210 • ETA:", eta: "8 days", location: "Indian Ocean Waypoint", note: "Discharge: KPA" },
  { title: "2021 Range Rover Sport HSE", stage: "Export Processing", stageTone: "muted", detail: "Supplier: UK Direct • ETA:", eta: "12 days", location: "Southampton Port, UK", note: "QISJ inspection passed" },
];
