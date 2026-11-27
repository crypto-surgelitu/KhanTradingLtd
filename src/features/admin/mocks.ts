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

// MOCK: Admin Inventory sample rows — the export's 8 demo vehicles (SAMPLE).
export type InventoryRow = {
  id: string;
  title: string;
  specs: string;
  reg: string;
  price: string;
  dutyNote: string;
  status: VehicleStatus;
  dateAdded: string;
  addedAgo: string;
  featured: boolean;
  selected?: boolean;
  ref?: string;
  image: string;
  imageAlt: string;
};

export const inventoryRows: InventoryRow[] = [
  { id: "1", title: "2019 Toyota Land Cruiser Prado TZ-G", specs: "2.8L Turbo Diesel • 43,100 km", reg: "[Reg: KDL 429A]", price: "KSh 7,850,000", dutyNote: "Duty Paid • Verified", status: "in_stock", dateAdded: "Nov 24, 2024", addedAgo: "Yesterday", featured: true, image: "/images/admin-inventory/vehicle-land-cruiser-prado.webp", imageAlt: "Front three-quarter architectural studio shot of a pristine pearl white 2019 Toyota Land Cruiser Prado TZ-G parked against warm minimalist ivory backdrop, soft diffused lighting, luxury showroom aesthetic." },
  { id: "2", title: "2021 Land Rover Defender 110 SE", specs: "3.0L i6 MHEV • 26,400 km", reg: "[Reg: KDK 112S]", price: "KSh 11,200,000", dutyNote: "All Taxes Included", status: "in_stock", dateAdded: "Nov 23, 2024", addedAgo: "2 days ago", featured: false, image: "/images/admin-inventory/vehicle-defender-110.webp", imageAlt: "Side profile view of a high-end 2021 Land Rover Defender 110 SE in metallic Carpathian Grey with black contrast roof, parked on sleek polished concrete showroom floor with subtle golden ambient highlights." },
  { id: "3", title: "2018 Land Rover Range Rover Velar R-Dynamic", specs: "2.0L Turbocharged • 51,800 km", reg: "[Ref: KH-2024-089]", price: "KSh 6,450,000", dutyNote: "Direct Import Spec", status: "in_stock", dateAdded: "Nov 21, 2024", addedAgo: "4 days ago", featured: true, selected: true, ref: "KH-2024-089", image: "/images/admin-inventory/vehicle-range-rover-velar.webp", imageAlt: "Studio hero capture of a striking 2018 Range Rover Velar R-Dynamic in Santorini Black with copper burnished exterior accents, sleek flush handles, luxury editorial automotive photography." },
  { id: "4", title: "2020 Lexus RX 350 F-Sport", specs: "3.5L V6 AWD • 38,900 km", reg: "[Reg: KDJ 801E]", price: "KSh 6,950,000", dutyNote: "Deposit Paid (20%)", status: "reserved", dateAdded: "Nov 20, 2024", addedAgo: "5 days ago", featured: false, image: "/images/admin-inventory/vehicle-lexus-rx350.webp", imageAlt: "High quality shot of a 2020 Lexus RX 350 F-Sport in Sonic Titanium silver with aggressive spindle grille, parked inside clean architectural garage with soft warm spotlighting." },
  { id: "5", title: "2021 Mercedes-Benz C200 AMG Line", specs: "1.5L EQ Boost • 31,200 km", reg: "[Reg: KDH 550W]", price: "KSh 4,950,000", dutyNote: "Local Registration", status: "in_stock", dateAdded: "Nov 19, 2024", addedAgo: "6 days ago", featured: true, image: "/images/admin-inventory/vehicle-mercedes-c200.webp", imageAlt: "Front view of obsidian black 2021 Mercedes-Benz C200 AMG Line sedan in modern minimalist showroom setting with ambient linear ceiling lights reflecting across the bonnet." },
  { id: "6", title: "2020 Audi Q7 55 TFSI Quattro", specs: "3.0L V6 Turbo • 49,000 km", reg: "[Reg: KDG 774M]", price: "KSh 8,250,000", dutyNote: "Sold to Nairobi Client", status: "sold", dateAdded: "Nov 15, 2024", addedAgo: "10 days ago", featured: false, image: "/images/admin-inventory/vehicle-audi-q7.webp", imageAlt: "Luxury 2020 Audi Q7 55 TFSI Quattro SUV in Navarra Blue metallic, displayed in sleek showroom pavilion with dramatic shadows and high editorial finish." },
  { id: "7", title: "2021 BMW X5 xDrive40i M Sport", specs: "3.0L B58 Inline-6 • 22,100 km", reg: "[Reg: KDL 904C]", price: "KSh 9,600,000", dutyNote: "Dealer Inspected", status: "in_stock", dateAdded: "Nov 14, 2024", addedAgo: "11 days ago", featured: true, image: "/images/admin-inventory/vehicle-bmw-x5.webp", imageAlt: "Crisp dramatic portrait of an Alpine White 2021 BMW X5 xDrive40i M Sport, high gloss shadowline trim, 21 inch M wheels, inside an architecturally refined dealership bay." },
  { id: "8", title: "2022 Toyota Hilux Double Cab 2.8GD", specs: "2.8L D-4D 4x4 • 14,500 km", reg: "[Mombasa Port ETA Nov 29]", price: "KSh 5,300,000", dutyNote: "[KRA clearance pending]", status: "incoming", dateAdded: "Nov 10, 2024", addedAgo: "14 days ago", featured: false, image: "/images/admin-inventory/vehicle-hilux.webp", imageAlt: "Rugged yet immaculate 2022 Toyota Hilux Double Cab 2.8GD Invincible in Bronze Metallic, clean studio portrait with subtle reflection under automotive showroom spotlights." },
];

export const inventorySummary = {
  total: "128 vehicles total",
  inStock: "84 in stock",
  reserved: "18 reserved",
  soldThisMonth: "26 sold this month",
  searchHint: "1 match",
} as const;

export const inventoryStatusOptions = [
  { value: "", label: "All statuses" },
  { value: "in_stock", label: "In Stock (84)" },
  { value: "reserved", label: "Reserved (18)" },
  { value: "sold", label: "Sold (26)" },
  { value: "incoming", label: "Incoming (12)" },
];

export const inventoryMakeOptions = [
  { value: "", label: "All makes" },
  { value: "toyota", label: "Toyota (42)" },
  { value: "land-rover", label: "Land Rover (14)" },
  { value: "mercedes-benz", label: "Mercedes-Benz (19)" },
  { value: "bmw", label: "BMW (16)" },
  { value: "lexus", label: "Lexus (11)" },
  { value: "porsche", label: "Porsche (8)" },
  { value: "audi", label: "Audi (9)" },
];

export const inventorySortOptions = [
  { value: "date-desc", label: "Date added (newest)" },
  { value: "price-desc", label: "Price: High to Low" },
  { value: "price-asc", label: "Price: Low to High" },
  { value: "mileage-asc", label: "Mileage: Lowest" },
  { value: "year-desc", label: "Year: Newest" },
];

export const inventoryPageSizeOptions = ["8 per page", "16 per page", "32 per page", "50 per page"];
