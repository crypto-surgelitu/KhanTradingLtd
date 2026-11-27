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

// MOCK: Admin Deals Pipeline sample board — the export's demo deals (SAMPLE).
export type DealsStatCard = {
  icon: "layers" | "assignment_late" | "wallet" | "task";
  primary: { label: string; value: string; note?: string };
  badge?: { text: string; tone: "warning" | "success" };
  secondary: { label: string; value: string };
};

export const dealsStatCards: DealsStatCard[] = [
  { icon: "layers", primary: { label: "Open Deals", value: "24", note: "deals" }, secondary: { label: "Portfolio Volume", value: "KSh 148,500,000" } },
  { icon: "assignment_late", primary: { label: "Awaiting Documents", value: "06" }, badge: { text: "2 require action", tone: "warning" }, secondary: { label: "KRA / NTSA Logbooks", value: "Average: 2.4 days" } },
  { icon: "wallet", primary: { label: "Awaiting Payment", value: "05", note: "deals" }, secondary: { label: "Pending Settlement", value: "KSh 28,400,000" } },
  { icon: "task", primary: { label: "Completed this Month", value: "11" }, badge: { text: "+3 vs last mo", tone: "success" }, secondary: { label: "Handover Satisfaction", value: "100% Verified" } },
];

export type DealCard = {
  id: string;
  ref: string;
  chip?: string;
  chipTone?: "info" | "success" | "warning";
  overdue?: string;
  title: string;
  client: string;
  price: string;
  stageNote: string;
  meta1: string;
  meta2: string;
  avatar: string;
  image: string;
  imageAlt: string;
};

export type DealColumn = {
  id: string;
  title: string;
  count: string;
  portfolioValue: string;
  cards: DealCard[];
};

export const dealsBoard: DealColumn[] = [
  {
    id: "enquiry-received",
    title: "Enquiry Received",
    count: "4",
    portfolioValue: "KSh 26.8M",
    cards: [
      { id: "kh-2024-prd-882", ref: "Ref #KH-2024-PRD-882", title: "2019 Toyota Prado TZ-G", client: "Client: David Kamau", price: "KSh 7,650,000", stageNote: "2d in stage", meta1: "Enquiry assessment", meta2: "Initial review", avatar: "AK", image: "/images/admin-deals/vehicle-prado-tzg.webp", imageAlt: "Front three-quarters exterior photograph of a pristine 2019 Toyota Land Cruiser Prado TZ-G in pearl white finish parked inside a clean minimalist architectural showroom studio." },
      { id: "kh-2024-har-109", ref: "Ref #KH-2024-HAR-109", title: "2021 Toyota Harrier G", client: "Client: Amina Abdi", price: "KSh 5,800,000", stageNote: "1d in stage", meta1: "Trade-in valuation", meta2: "Viewing booked", avatar: "BO", image: "/images/admin-deals/vehicle-harrier-g.webp", imageAlt: "Gloss black 2021 Toyota Harrier G-Trim Luxury crossover parked under studio floodlights showing metallic reflection and refined wheel arches." },
      { id: "kh-2024-x5-302", ref: "Ref #KH-2024-X5-302", title: "2020 BMW X5 xDrive30d", client: "Client: Evans Mwangi", price: "KSh 8,200,000", stageNote: "3d in stage", meta1: "Specification match", meta2: "Spec confirmed", avatar: "AK", image: "/images/admin-deals/vehicle-bmw-x5-30d.webp", imageAlt: "Sophisticated dark carbon grey BMW X5 xDrive30d M-Sport SUV parked on modern concrete tarmac under overcast sky." },
    ],
  },
  {
    id: "vehicle-reserved",
    title: "Vehicle Reserved",
    count: "5",
    portfolioValue: "KSh 34.2M",
    cards: [
      { id: "kh-2024-lc3-004", ref: "Ref #KH-2024-LC3-004", chip: "Deposit Paid", chipTone: "info", title: "2021 Land Cruiser 300 ZX", client: "Client: Dr. Peter Ochieng", price: "KSh 18,900,000", stageNote: "4d in stage", meta1: "KSh 2,000,000 dep.", meta2: "Hold expiry: 72h", avatar: "SM", image: "/images/admin-deals/vehicle-lc300-zx.webp", imageAlt: "Front view of a brand new 2021 Toyota Land Cruiser 300 ZX in metallic silver parked on architectural pavers with minimalist glass backdrop." },
      { id: "kh-2024-rrs-551", ref: "Ref #KH-2024-RRS-551", title: "2020 Range Rover Sport HSE", client: "Client: Captain Kevin Mutua", price: "KSh 11,500,000", stageNote: "2d in stage", meta1: "KSh 1,500,000 dep.", meta2: "Hold active", avatar: "AK", image: "/images/admin-deals/vehicle-range-rover-sport.webp", imageAlt: "Santorini black Range Rover Sport HSE Dynamic with red Brembo brake calipers parked inside an architectural gallery with warm lighting." },
    ],
  },
  {
    id: "documents-submitted",
    title: "Documents Submitted",
    count: "4",
    portfolioValue: "KSh 29.5M",
    cards: [
      { id: "kh-2024-gle-912", ref: "Ref #KH-2024-GLE-912", chip: "Action Req.", chipTone: "warning", overdue: "8d in stage — Overdue", title: "2020 Mercedes-Benz GLE 400d", client: "Client: Sarah Hassan", price: "KSh 12,800,000", stageNote: "8d in stage — Overdue", meta1: "Docs: 2/5 pending", meta2: "[KRA clearance pending]", avatar: "SM", image: "/images/admin-deals/vehicle-mercedes-gle.webp", imageAlt: "Emerald green 2020 Mercedes-Benz GLE 400d AMG Line luxury SUV in bright studio setting showing AMG diamond radiator grille." },
      { id: "kh-2024-lx-441", ref: "Ref #KH-2024-LX-441", title: "2020 Lexus LX570 V8", client: "Client: Wanjiku Nderitu", price: "KSh 16,700,000", stageNote: "3d in stage", meta1: "Docs: 4/5 approved", meta2: "NTSA portal queue", avatar: "AK", image: "/images/admin-deals/vehicle-lexus-lx570.webp", imageAlt: "Deep pearl white 2020 Lexus LX570 flagship SUV side profile on smooth asphalt in warm afternoon sun with tinted privacy glass." },
    ],
  },
  {
    id: "payment-financing",
    title: "Payment / Financing",
    count: "5",
    portfolioValue: "KSh 36.1M",
    cards: [
      { id: "kh-2024-prd-773", ref: "Ref #KH-2024-PRD-773", chip: "Bank Asset Finance", chipTone: "info", title: "2020 Prado TX L-Package", client: "Client: Evans Mwangi", price: "KSh 6,950,000", stageNote: "4d in stage", meta1: "Balance: KSh 4,200,000", meta2: "NCBA LPO Received", avatar: "BO", image: "/images/admin-deals/vehicle-prado-tx-l.webp", imageAlt: "2020 Toyota Land Cruiser Prado TX L-Package in graphite bronze metallic parked angled toward camera on polished floor." },
      { id: "kh-2024-x5-883", ref: "Ref #KH-2024-X5-883", chip: "Wire Transfer", chipTone: "info", overdue: "6d in stage", title: "2021 BMW X5 xDrive40i", client: "Client: Sarah Hassan", price: "KSh 10,400,000", stageNote: "6d in stage", meta1: "Balance: KSh 1,030,000", meta2: "RTGS settlement pending", avatar: "AK", image: "/images/admin-deals/vehicle-bmw-x5-40i.webp", imageAlt: "2021 BMW X5 xDrive40i in Alpine White parked in executive covered showroom bay with pristine reflections." },
    ],
  },
  {
    id: "ownership-insurance",
    title: "Ownership & Insurance",
    count: "3",
    portfolioValue: "KSh 18.2M",
    cards: [
      { id: "kh-2024-lc2-209", ref: "Ref #KH-2024-LC2-209", title: "2020 Land Cruiser 200 VX-R", client: "Client: Captain Kevin Mutua", price: "KSh 14,200,000", stageNote: "2d in stage", meta1: "Settled 100%", meta2: "TIMS transfer in progress", avatar: "SM", image: "/images/admin-deals/vehicle-lc200-vxr.webp", imageAlt: "2020 Toyota Land Cruiser 200 VX-R Sahara in midnight metallic black parked under low evening lighting." },
    ],
  },
  {
    id: "final-inspection",
    title: "Final Inspection",
    count: "2",
    portfolioValue: "KSh 14.5M",
    cards: [
      { id: "kh-2024-gle-442", ref: "Ref #KH-2024-GLE-442", chip: "Handover Today", chipTone: "success", title: "2021 Mercedes-Benz GLE 400d", client: "Client: Wanjiku Nderitu", price: "KSh 14,500,000", stageNote: "1d in stage", meta1: "Docs: 5/5 verified", meta2: "Ceremony: 4:30 PM", avatar: "AK", image: "/images/admin-deals/vehicle-mercedes-gle-coupe.webp", imageAlt: "Gleaming obsidian black 2021 Mercedes-Benz GLE 400d coupe luxury SUV decorated with subtle red ribbon in presentation handover bay." },
    ],
  },
  {
    id: "completed",
    title: "Completed",
    count: "11",
    portfolioValue: "KSh 74.9M",
    cards: [
      { id: "kh-2024-lc3-001", ref: "Ref #KH-2024-LC3-001", chip: "Delivered", chipTone: "success", title: "2022 Land Cruiser 300 GR", client: "Client: Dr. Peter Ochieng", price: "KSh 21,500,000", stageNote: "Handover verified", meta1: "KSh 0 Balance", meta2: "100% CSAT Score", avatar: "AK", image: "/images/admin-deals/vehicle-lc300-gr.webp", imageAlt: "Pristine graphite gray 2022 Toyota Land Cruiser 300 GR Sport SUV parked outdoors on modern clean private driveway." },
      { id: "kh-2024-har-899", ref: "Ref #KH-2024-HAR-899", chip: "Delivered", chipTone: "success", title: "2021 Toyota Harrier Z", client: "Client: David Kamau", price: "KSh 6,100,000", stageNote: "Handover verified", meta1: "KSh 0 Balance", meta2: "Registration KDM issued", avatar: "SM", image: "/images/admin-deals/vehicle-harrier-z.webp", imageAlt: "Metallic silver 2021 Toyota Harrier Z Leather Edition luxury compact SUV shown in architectural showroom daylight." },
    ],
  },
];

export const dealsStageOptions = [
  "All Stages (7)", "Enquiry Received", "Vehicle Reserved", "Documents Submitted",
  "Payment or Financing", "Ownership & Insurance", "Final Inspection", "Completed",
];

export const dealsConciergeOptions = [
  "All Concierges", "Alex Kariuki", "Sharon Muthoni", "Brian Omondi",
];
