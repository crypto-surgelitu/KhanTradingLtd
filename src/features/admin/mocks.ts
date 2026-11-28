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

// MOCK: Admin Viewings Calendar sample week — the export's demo bookings
// (SAMPLE). Day placement of the scattered events is an interpretation of the
// export's grid; the Today column carries the detail-drawer booking.
export const viewingsStats = [
  { label: "Today's Bookings:", value: "6" },
  { label: "Confirmed:", value: "4" },
  { label: "Pending Approval:", value: "2" },
  { label: "Completion Rate:", value: "98%" },
] as const;

export const viewingsDays = [
  { key: "mon", label: "Mon", num: "25", today: false },
  { key: "tue", label: "Tue", num: "26", today: false },
  { key: "wed", label: "Wed", num: "27", today: false },
  { key: "thu", label: "Thu", num: "28", today: false },
  { key: "fri", label: "Today", num: "29", today: true },
  { key: "sat", label: "Sat", num: "30", today: false },
  { key: "sun", label: "Sun", num: "01", today: false },
] as const;

export const viewingsHours = [
  "08:00", "09:00", "10:00", "11:00", "12:00", "13:00",
  "14:00", "15:00", "16:00", "17:00", "18:00",
] as const;

export type ViewingEvent = {
  id: string;
  day: string;
  hour: string;
  time: string;
  status: string;
  statusTone: "success" | "warning" | "info" | "muted" | "danger";
  vehicle: string;
  client: string;
  avatar: string;
};

export const viewingsEvents: ViewingEvent[] = [
  { id: "bk-gle-450", day: "mon", hour: "09:00", time: "09:30 AM", status: "Confirmed", statusTone: "success", vehicle: "Mercedes GLE 450", client: "Sarah H.", avatar: "SM" },
  { id: "bk-harrier", day: "tue", hour: "10:00", time: "10:00 AM", status: "Completed", statusTone: "muted", vehicle: "Toyota Harrier G", client: "Amina A.", avatar: "BO" },
  { id: "bk-2024-prd-882", day: "fri", hour: "11:00", time: "11:00 – 12:00", status: "Active", statusTone: "info", vehicle: "Land Cruiser Prado TZ-G", client: "David Kamau", avatar: "AK" },
  { id: "bk-lx570", day: "wed", hour: "11:00", time: "11:00 AM", status: "Confirmed", statusTone: "success", vehicle: "Lexus LX570 V8", client: "Wanjiku N.", avatar: "AK" },
  { id: "bk-x5-30d", day: "thu", hour: "14:00", time: "02:00 PM", status: "Completed", statusTone: "muted", vehicle: "BMW X5 xDrive30d", client: "Evans Mwangi", avatar: "SM" },
  { id: "bk-cayenne", day: "fri", hour: "14:00", time: "02:30 PM", status: "No-show", statusTone: "danger", vehicle: "Porsche Cayenne", client: "K. Gitau", avatar: "MISSED" },
  { id: "bk-lc300", day: "sat", hour: "15:00", time: "03:30 PM", status: "Requested", statusTone: "warning", vehicle: "Land Cruiser 300 ZX", client: "Dr. P. Ochieng", avatar: "AK" },
];

export const viewingsLegend = [
  { label: "Confirmed", tone: "success" },
  { label: "Requested", tone: "warning" },
  { label: "Completed", tone: "muted" },
  { label: "No-show / Cancelled", tone: "danger" },
] as const;

export const viewingsDetail = {
  ref: "REF #BK-2024-PRD-882",
  status: "Confirmed",
  title: "Dynamic Highway Test Drive",
  when: "Friday, 29 Nov 2024 · 11:00 AM – 12:00 PM EAT",
  reminder:
    "WhatsApp & SMS sent 24h prior (Dispatched Nov 28, 11:00 AM). Delivery verified via Safaricom gateway.",
  client: {
    initials: "DK",
    name: "David Kamau",
    descriptor: "Private VIP Buyer · Nairobi Central",
    tier: "VIP Tier 1",
    phone: "+254 712 345 678",
  },
  notes:
    "“Client requested Japanese CarVX sheet & open bypass dynamic test drive. Driving licence pre-checked.”",
  vehicle: {
    title: "2019 Toyota Land Cruiser Prado TZ-G",
    specs: "2.8L Diesel · Auto · Stock #KT-PRD-19",
    price: "KSh 7,650,000",
    readiness: "Bay 02 Ready",
    image: "/images/admin-viewings/vehicle-land-cruiser-prado.webp",
    imageAlt: "A pristine 2019 Toyota Land Cruiser Prado TZ-G in gleaming Pearl White parked inside a luxury architectural automotive showroom with neutral concrete and warm champagne studio lighting reflections.",
  },
  concierge: { initials: "AK", name: "Alex Kariuki" },
  route: "Southern Bypass (30m)",
  audit: [
    { entry: "Nov 28, 14:15 · Reserved online by David Kamau", tag: "Web" },
    { entry: "Nov 28, 14:20 · Assigned to Alex Kariuki", tag: "Auto" },
    { entry: "Nov 28, 15:00 · 24h reminder dispatched", tag: "Sent" },
  ],
} as const;

export const viewingsToolbarOptions = {
  concierges: ["All Concierges (3)", "Alex Kariuki (Senior)", "Samuel Mwangi", "Brian Omondi"],
  statuses: ["All Statuses", "Confirmed", "Requested", "Completed", "No-show", "Cancelled"],
  types: ["All Types", "Dynamic Test Drive", "Private Viewing", "Pre-Delivery Inspection"],
  range: "Nov 25 – Dec 01, 2024",
  timezone: "EAT (UTC+3)",
} as const;

// MOCK: Admin Customers directory sample rows — the export's demo CRM data
// (SAMPLE, incl. contact details). Replace with the customers query contract.
export const customersStats = [
  { label: "Total Clients", icon: "users", value: "184", annotation: "+12 this mo.", annotationTone: "success", note: "Verified identities in Kenyan CRM registry" },
  { label: "Active Deals Pipeline", icon: "handshake", value: "24", annotation: "Clients in closing stage", annotationTone: "muted", note: "Valued at approx. KSh 168.4M gross pipeline" },
  { label: "VIP & Repeat Buyers", icon: "badge", value: "38", annotation: "21% retention index", annotationTone: "muted", note: "Accounts with ≥2 premium transactions" },
  { label: "Sourcing & Enquiries", icon: "compass", value: "19", annotation: "Active UK/Japan orders", annotationTone: "muted", note: "Bespoke luxury specs currently under review" },
] as const;

export type CustomerRow = {
  id: string;
  initials: string;
  name: string;
  vip: boolean;
  email: string;
  phone: string;
  sourceIcon: "globe" | "store" | "users" | "message" | "plane";
  source: string;
  activityDate: string;
  activity: string;
  deals: string;
  dealsNote: string;
  value: string;
  tags: string[];
};

export const customerRows: CustomerRow[] = [
  { id: "david-kamau", initials: "DK", name: "David Kamau", vip: true, email: "david.kamau@example.co.ke", phone: "+254 712 345 678", sourceIcon: "globe", source: "Website Reservation", activityDate: "Today, 11:00 AM", activity: "Dynamic Test Drive (#BK-2024-PRD-882)", deals: "1 Deal (#KH-2024-PRD)", dealsNote: "1 pending delivery", value: "KSh 7,650,000", tags: ["VIP Buyer", "Asset Finance (NCBA)"] },
  { id: "peter-ochieng", initials: "PO", name: "Dr. Peter Ochieng", vip: false, email: "p.ochieng@consultant.co.ke", phone: "+254 722 984 112", sourceIcon: "store", source: "Showroom Walk-in", activityDate: "Yesterday, 03:30 PM", activity: "Sourcing Review (Land Cruiser 300 ZX)", deals: "1 Deal (#KH-2024-LC3)", dealsNote: "2 vehicles delivered", value: "KSh 34,200,000", tags: ["Repeat Client", "Cash Buyer", "VIP Buyer"] },
  { id: "sarah-hassan", initials: "SH", name: "Sarah Hassan", vip: false, email: "s.hassan@premierlogistics.co.ke", phone: "+254 733 451 902", sourceIcon: "users", source: "Referral (Corporate)", activityDate: "Nov 27, 2024", activity: "KRA Clearance Docs Submitted", deals: "1 Deal (#KH-2024-GLE)", dealsNote: "1 pending (GLE 400d)", value: "KSh 12,800,000", tags: ["Corporate / Fleet", "Asset Finance"] },
  { id: "wanjiku-nderitu", initials: "WN", name: "Wanjiku Nderitu", vip: true, email: "w.nderitu@advocates.ke", phone: "+254 720 119 443", sourceIcon: "globe", source: "Website Direct", activityDate: "Nov 26, 2024", activity: "Showroom Inspection (Lexus LX570)", deals: "1 Deal (#KH-2024-LX)", dealsNote: "1 pending trade appraisal", value: "KSh 16,700,000", tags: ["VIP Buyer", "Trade-In"] },
  { id: "kevin-mutua", initials: "KM", name: "Capt. Kevin Mutua", vip: false, email: "k.mutua@aviation.co.ke", phone: "+254 715 882 301", sourceIcon: "message", source: "WhatsApp Concierge", activityDate: "Nov 25, 2024", activity: "10% Deposit Confirmed (RTGS)", deals: "1 Deal (#KH-2024-RRS)", dealsNote: "1 bought, 1 pending", value: "KSh 22,900,000", tags: ["Repeat Client", "VIP Buyer"] },
  { id: "amina-abdi", initials: "AA", name: "Amina Abdi", vip: false, email: "amina.abdi@mediahouse.co.ke", phone: "+254 728 554 120", sourceIcon: "store", source: "Showroom Walk-in", activityDate: "Nov 24, 2024", activity: "Viewing Completed (Harrier Hybrid)", deals: "1 Deal (#KH-2024-HAR)", dealsNote: "1 pending financier sanction", value: "KSh 5,800,000", tags: ["Trade-In", "Asset Finance"] },
  { id: "evans-mwangi", initials: "EM", name: "Evans Mwangi", vip: false, email: "evans.m@techforge.io", phone: "+254 701 443 890", sourceIcon: "plane", source: "Website Sourcing", activityDate: "Nov 22, 2024", activity: "Spec Sheet Confirmed (BMW X5 xDrive40i)", deals: "1 Deal (#KH-2024-X5)", dealsNote: "1 pending port dispatch", value: "KSh 8,200,000", tags: ["Direct Import", "Cash Buyer"] },
  { id: "kennedy-gitau", initials: "KG", name: "Kennedy Gitau", vip: false, email: "k.gitau@agroexports.co.ke", phone: "+254 721 334 509", sourceIcon: "users", source: "Referral", activityDate: "Nov 20, 2024", activity: "Viewing Reschedule Requested", deals: "— None", dealsNote: "1 vehicle completed", value: "KSh 11,400,000", tags: ["Previous Buyer", "Commercial Fleet"] },
  { id: "faith-chebet", initials: "FC", name: "Faith Chebet", vip: false, email: "faith.c@ventures.africa", phone: "+254 723 667 891", sourceIcon: "globe", source: "Website Direct", activityDate: "Nov 18, 2024", activity: "Sourcing Request Logged (Defender 110)", deals: "— Sourcing Active", dealsNote: "— Prospective", value: "Bespoke Sourcing", tags: ["SUV / 4WD"] },
  { id: "omar-al-jabri", initials: "OA", name: "Omar Al-Jabri", vip: true, email: "omar@coastalhaulage.co.ke", phone: "+254 731 229 088", sourceIcon: "users", source: "Direct Referral", activityDate: "Nov 15, 2024", activity: "Corporate Account Onboarded", deals: "— None Active", dealsNote: "3 vehicles delivered", value: "KSh 45,000,000", tags: ["VIP Buyer", "Corporate / Fleet", "Repeat Client"] },
];

export const customersFilterOptions = {
  sources: ["All Sources", "Website Direct", "Showroom Walk-in", "Referral", "WhatsApp Concierge", "Car Sourcing Request"],
  dealStatuses: ["All Deal Statuses", "With Open Deal (24)", "No Active Deal"],
  tags: ["All Tags", "VIP Buyer", "Repeat Client", "Corporate / Fleet", "Asset Finance", "Cash Buyer", "Direct Import"],
  pageSizes: ["10 per page", "25 per page", "50 per page", "100 per page"],
  summary: "Showing 1 to 10 of 184 entries",
} as const;

// MOCK: Admin Customer Detail sample profile — the export's demo record for
// David Kamau (SAMPLE, incl. contact/KRA values). Replace with the customer
// detail query contract (Kenya DPA handling applies to real data).
export const customerDetailProfile = {
  statusChip: "Active Profile (KRA & KYC Verified)",
  lastEngagement: "Last engagement: Today at 11:00 AM",
  initials: "DK",
  name: "David Kamau",
  tier: "VIP Client",
  secondaryTag: "Repeat Buyer",
  customerId: "CUST-2024-884",
  phone: "+254 712 345 678",
  email: "david.kamau@example.co.ke",
  location: "Karen Plains, Nairobi",
  kraPin: "A009842155Z",
  stats: [
    { label: "Lifetime Purchases", value: "2 Vehicles", note: "KSh 14,800,000 LTV" },
    { label: "Active Deal", value: "1 Active", note: "2019 Prado TZ-G · KSh 7.65M" },
    { label: "Relationship Age", value: "Client Since 2022", note: "Tier 1 Valued" },
    { label: "Assigned Executive", value: "Alex Kariuki", note: "Dealership Manager" },
  ],
  tabs: [
    { id: "overview", label: "Overview", caption: "" },
    { id: "deals", label: "Deals", caption: "1 active, 2 completed" },
    { id: "payments", label: "Payments", caption: "KSh 16.8M total" },
    { id: "enquiries", label: "Enquiries & Viewings", caption: "4" },
    { id: "documents", label: "Documents on File", caption: "6 verified" },
    { id: "notes", label: "Notes", caption: "5 internal" },
  ],
} as const;

export const customerDetailDeal = {
  eyebrow: "In-Flight Transaction · #KH-2024-PRD-882",
  chip: "TZ-G Top Spec",
  title: "2019 Toyota Land Cruiser Prado TZ-G",
  specs: "2.8L Turbo Diesel · Automatic 4WD · 44,500 km · Japan Grade 4.5A",
  stage: "Stage 4 of 7: Payment or Financing",
  deposit: "10% Deposit Paid (KSh 765,000)",
  settlement: "RTGS Verified via Stanbic Bank Kenya · Ready for remaining balance disbursement",
  concierge: "Alex Kariuki",
  price: "KSh 7,650,000",
  dealId: "kh-2024-prd-882",
  image: "/images/admin-customer-detail/vehicle-land-cruiser-prado.webp",
  imageAlt: "A pristine 2019 Toyota Land Cruiser Prado TZ-G in pearl white metallic paint, parked angled in a minimalist luxury architectural showroom setting with polished concrete floor and soft ambient natural lighting reflecting the refined SUV silhouette",
} as const;

export type CustomerTimelineEntry = {
  id: string;
  category: "Viewings" | "Deals" | "Payments" | "Comms" | "Documents";
  title: string;
  channel: string;
  timestamp: string;
  body: string;
  note?: { label: string; text: string };
};

export const customerDetailTimeline: CustomerTimelineEntry[] = [
  {
    id: "viewing-tzg", category: "Viewings", title: "Viewing & Dynamic Test Drive Completed", channel: "Showroom & Bypass Route", timestamp: "Today, 11:00 AM",
    body: "Conducted vehicle physical walkthrough and 18-minute Southern Bypass test drive on the 2019 Land Cruiser Prado TZ-G. Driven alongside Alex Kariuki.",
    note: { label: "Concierge Note:", text: "\"Client loved the smooth active height control suspension and confirmed Japanese CarVX auction sheet is pristine. Indicated he will arrange RTGS balance settlement via Stanbic Bank tomorrow morning.\"" },
  },
  {
    id: "payment-deposit", category: "Payments", title: "Payment Confirmed: KSh 765,000 Deposit", channel: "RTGS Verified", timestamp: "Yesterday, 03:45 PM",
    body: "Bank confirmation received. Reference: STB-883921-KE. Cleared by Accounts Department (Grace Wanjiku). Deal stage automatically advanced to Payment / Financing.",
  },
  {
    id: "reserved-portal", category: "Deals", title: "Vehicle Reserved via Online Portal", channel: "Web Portal", timestamp: "Nov 28, 2024, 02:15 PM",
    body: "Client placed a 48-hour priority lock on stock unit 2019 Toyota Land Cruiser Prado TZ-G (KDH-442T) directly via the public showroom catalog.",
  },
  {
    id: "whatsapp-inquiry", category: "Comms", title: "WhatsApp Inquiry Sent", channel: "Concierge Chat", timestamp: "Nov 25, 2024, 10:30 AM",
    body: "Inquired regarding arrival dates of TZ-G Prado and spec sheets for Land Cruiser 300 ZX series via WhatsApp hotline. Spec brochures dispatched.",
  },
  {
    id: "purchase-e250", category: "Deals", title: "Purchase Completed: 2018 Mercedes-Benz E250 AMG", channel: "Deal Settled", timestamp: "Oct 14, 2023, 04:00 PM",
    body: "Total transaction settled: KSh 5,200,000. Ownership transfer finalized through NTSA TIMS and original logbook delivered to Karen residence.",
  },
  {
    id: "onboarding", category: "Documents", title: "First Showroom Walk-in & Account Onboarded", channel: "Onboarding", timestamp: "Aug 12, 2022, 11:00 AM",
    body: "Referred by existing client Dr. Peter Ochieng. Initial inquiry for executive saloons. KYC and KRA documents filed and catalog access granted.",
  },
];

export const customerDetailPreferences = {
  channels: [
    { id: "pref-whatsapp", label: "WhatsApp Updates", icon: "chat", defaultChecked: true },
    { id: "pref-sms", label: "SMS Alerts", icon: "sms", defaultChecked: true },
    { id: "pref-email", label: "Email Summaries", icon: "email", defaultChecked: true },
    { id: "pref-marketing", label: "Marketing & New Stock", icon: "campaign", defaultChecked: false },
  ],
  interests: [
    { label: "Preferred Makes:", value: "Toyota, Lexus, Mercedes-Benz" },
    { label: "Preferred Body Types:", value: "SUV / 4WD, Executive Sedan" },
    { label: "Budget Sweet Spot:", value: "KSh 6,000,000 – 12,000,000" },
    { label: "Transmission:", value: "Automatic Only" },
    { label: "Sourcing Preference:", value: "Local Stock & Japan 4.5+" },
  ],
  executive: { initials: "AK", name: "Alex Kariuki", role: "Dedicated Dealership Manager" },
} as const;

export const customerDetailDpa = {
  consentDate: "Nov 28, 2024",
} as const;

// ---------------------------------------------------------------------------
// MOCK: Admin Vehicle Costing & Profit sample data — the clearly-labelled
// SAMPLE content of the Stitch export (docs/design/admin-costing.json), per
// DESIGN.md Section 0.7 and AGENTS.md Section 2.4. Figures, names, refs and
// suppliers are fictional design content, not real business data. Replace
// with costing queries (DESIGN.md Section 8, Admin Screen L) when the backend
// contract lands.

export type CostingMarginTone = "success" | "warning" | "danger";

export type CostingStat = {
  label: string;
  icon: "wallet" | "trending" | "pie" | "banknote";
  value: string;
  valueTone?: "success";
  suffix?: string;
  trend?: string;
  lead?: string;
  note: string;
  noteDot?: boolean;
  dark?: boolean;
  bar: "slate" | "champagne" | "success";
};

export const costingStats: CostingStat[] = [
  {
    label: "Total Stock Landed Cost", icon: "wallet", value: "KSh 148,650,000",
    lead: "28 Units", note: "22 in showroom, 6 in transit / port", bar: "slate",
  },
  {
    label: "Projected Portfolio Profit", icon: "trending", value: "KSh 22,480,000",
    trend: "+8.2%", note: "vs target pricing baseline", bar: "champagne",
  },
  {
    label: "Weighted Avg Margin", icon: "pie", value: "15.1%", valueTone: "success",
    suffix: "gross yield", note: "Optimal corridor (Bench: 12.0% – 18.0%)",
    noteDot: true, bar: "success",
  },
  {
    label: "Realized Margin (Nov 2024)", icon: "banknote", value: "KSh 4,820,000",
    lead: "4 Settled Deals", note: "+18.4% vs Oct", dark: true, bar: "champagne",
  },
];

export const costingStatusOptions = [
  "Status: All (28)",
  "In Stock (18)",
  "Reserved (4)",
  "Incoming / Port (4)",
  "Sold (2)",
] as const;

export const costingOriginOptions = [
  "Origin: All Sourcing",
  "Japan USS Auction",
  "UK Franchise Direct",
  "Local Consignment",
] as const;

export type CostingYieldBand = {
  id: "all" | "healthy" | "thin" | "critical";
  label: string;
  dot?: "success" | "warning" | "danger";
};

export const costingYieldBands: CostingYieldBand[] = [
  { id: "all", label: "All Units (28)" },
  { id: "healthy", label: "Healthy ≥12% (19)", dot: "success" },
  { id: "thin", label: "Thin 5-11% (7)", dot: "warning" },
  { id: "critical", label: "Sub-5% / Critical (2)", dot: "danger" },
];

export type CostingRow = {
  title: string;
  stockRef: string;
  origin: string;
  days: string;
  landed: string;
  asking: string;
  profit: string;
  margin: string;
  marginTone: CostingMarginTone;
  status: string;
  statusTone: StatusTone;
  action: string;
  image: string;
  imageAlt: string;
  active?: boolean;
};

export const costingRows: CostingRow[] = [
  {
    title: "2019 Toyota LC Prado TZ-G", stockRef: "KT-PRD-19", origin: "USS Tokyo 4492",
    days: "12d", landed: "6,485,000", asking: "7,650,000", profit: "+1,165,000",
    margin: "15.2%", marginTone: "success", status: "Reserved", statusTone: "warning",
    action: "Open Sheet", image: "/images/admin-costing/vehicle-prado-tzg.webp",
    imageAlt: "Front three-quarter studio portrait of a 2019 Toyota Land Cruiser Prado TZ-G in pearl white finish with chrome accents, architectural soft cinematic lighting in an executive Nairobi showroom with soft neutral reflections.",
    active: true,
  },
  {
    title: "2021 Land Cruiser 300 ZX", stockRef: "KT-LC3-04", origin: "Kobe Port Unit",
    days: "22d", landed: "17,200,000", asking: "19,800,000", profit: "+2,600,000",
    margin: "13.1%", marginTone: "success", status: "In Stock", statusTone: "success",
    action: "View Sheet", image: "/images/admin-costing/vehicle-lc300-zx.webp",
    imageAlt: "Editorial profile of a 2021 Toyota Land Cruiser 300 ZX in metallic black obsidian parked on polished dark concrete inside luxury motor showroom, dramatic rim lighting on sculpted body panels.",
  },
  {
    title: "2020 Mercedes GLE 300d AMG", stockRef: "KT-MBG-11", origin: "BCA UK Direct",
    days: "45d", landed: "9,150,000", asking: "10,200,000", profit: "+1,050,000",
    margin: "10.3%", marginTone: "warning", status: "In Stock", statusTone: "success",
    action: "View Sheet", image: "/images/admin-costing/vehicle-mercedes-gle-300d.webp",
    imageAlt: "Modern 2020 Mercedes-Benz GLE 300d AMG Line in selenite grey metallic studio shot with subtle champagne gradient background reflections, precision luxury automotive design.",
  },
  {
    title: "2020 Lexus LX570 Supercharger", stockRef: "KT-LX5-02", origin: "USS Nagoya #102",
    days: "18d", landed: "15,800,000", asking: "18,200,000", profit: "+2,400,000",
    margin: "13.2%", marginTone: "success", status: "Reserved", statusTone: "warning",
    action: "View Sheet", image: "/images/admin-costing/vehicle-lexus-lx570.webp",
    imageAlt: "2020 Lexus LX570 V8 Supercharger in sonic titanium finish parked inside high-end glass architectural pavilion with crisp morning illumination highlighting aggressive spindle grille.",
  },
  {
    title: "2018 Porsche Cayenne Turbo", stockRef: "KT-PCH-07", origin: "High Days Flag",
    days: "88d", landed: "8,900,000", asking: "9,250,000", profit: "+350,000",
    margin: "3.8%", marginTone: "danger", status: "In Stock", statusTone: "success",
    action: "View Sheet", image: "/images/admin-costing/vehicle-porsche-cayenne-turbo.webp",
    imageAlt: "2018 Porsche Cayenne Turbo in moonlight blue metallic, professional low-angle perspective showing 21-inch RS Spyder design alloy wheels and ceramic brakes.",
  },
  {
    title: "2021 Toyota Harrier G Leather", stockRef: "KT-HAR-15", origin: "Mombasa CFS Clearing",
    days: "8d", landed: "4,450,000", asking: "5,200,000", profit: "+750,000",
    margin: "14.4%", marginTone: "success", status: "Incoming", statusTone: "info",
    action: "View Sheet", image: "/images/admin-costing/vehicle-harrier-g.webp",
    imageAlt: "2021 Toyota Harrier G Leather package crossover SUV in dark steel gray with sleek LED signature tail bar, sharp architectural lighting highlights.",
  },
  {
    title: "2018 Mercedes-Benz E250 AMG", stockRef: "KT-E25-01", origin: "Settled 21 Nov",
    days: "31d", landed: "4,380,000", asking: "5,200,000", profit: "+820,000",
    margin: "15.8%", marginTone: "success", status: "Sold", statusTone: "muted",
    action: "View Sheet", image: "/images/admin-costing/vehicle-mercedes-e250.webp",
    imageAlt: "2018 Mercedes-Benz E250 AMG Line executive saloon sedan in polar white, clean frontal dynamic studio lighting on diamond radiator grille.",
  },
];

export const costingPagination = {
  from: 1, to: 7, total: 28, current: 1, pages: [1, 2, 3, 4] as const,
};

export type CostingLineItem = {
  index: number;
  title: string;
  note: string;
  verified?: boolean;
  amount: string;
  date: string;
  attachment: string;
  reference: string;
};

export const costingSheet = {
  ref: "#KT-PRD-19",
  status: "Reserved",
  statusTone: "warning" as StatusTone,
  days: "12 Days in Stock",
  title: "Cost Sheet: 2019 Toyota Prado TZ-G",
  source: "Sourced: USS Tokyo Lot #4492",
  vin: "VIN: GDJ150-008219",
  audited: "Fully Audited CIF",
  yield: {
    landed: "KSh 6,485,000",
    asking: "KSh 7,650,000",
    margin: "15.2%",
    marginChip: "Healthy",
    profit: "+KSh 1,165,000",
    breakevenLabel: "Min break-even with 5% reserve:",
    breakeven: "KSh 6,810,000",
  },
  fx: {
    symbol: "¥",
    title: "Foreign Exchange Lock",
    detail: "JPY → KES @ 0.885 · Stanbic Treasury Desk",
    locked: "Locked: 12 Nov 2024",
  },
  itemCount: 10,
  itemsNote: "All amounts in KES equivalent",
  audit: {
    title: "Audited & Locked by Accounts",
    detail: "Grace Wanjiku (Lead Auditor) · Nov 29, 2024 16:40 EAT",
    locked: true,
  },
};

export const costingLineItems: CostingLineItem[] = [
  { index: 1, title: "Purchase Price (Auction Hammer)", note: "USS Tokyo Lot #4492 · ¥4,250,000", amount: "KSh 3,761,250", date: "12 Nov 2024", attachment: "USS_Invoice_4492.pdf", reference: "INV-TYO-9981" },
  { index: 2, title: "Auction & Export Agent Fees", note: "Autocom Japan Export Handling · ¥110,000", amount: "KSh 97,350", date: "14 Nov 2024", attachment: "Agent_Fee_092.pdf", reference: "ACJ-EXP-088" },
  { index: 3, title: "Ocean Freight & Shipping (RORO)", note: "Yokohama to Mombasa · $1,650 @ 130 KES", amount: "KSh 214,500", date: "18 Nov 2024", attachment: "BillOfLading_HGH9921.pdf", reference: "BL: HGH-9921" },
  { index: 4, title: "Marine Cargo Insurance", note: "Jubilee Marine Institute Cargo Cover", amount: "KSh 42,000", date: "19 Nov 2024", attachment: "Ins_Cert_MAR88.pdf", reference: "POL-MAR-2024-88" },
  { index: 5, title: "Import Duties & Taxes (KRA CRSP)", note: "Customs Entry #C24-NBO-88190 · Duty, VAT, IDF, RDL", verified: true, amount: "KSh 1,985,000", date: "24 Nov 2024", attachment: "KRA_Payment_Slip_88190.pdf", reference: "Cleared at Mombasa" },
  { index: 6, title: "Port Handling & CFS Charges", note: "Mitchell Cotts CFS Wharfage, Shore Handling", amount: "KSh 85,000", date: "26 Nov 2024", attachment: "CFS_Voucher_MC90.pdf", reference: "CFS-N-4412" },
  { index: 7, title: "Transport to Showroom (Carrier)", note: "Trans-East Haulage · Enclosed Low-loader", amount: "KSh 35,000", date: "27 Nov 2024", attachment: "Waybill_992.pdf", reference: "WB-992-MSA" },
  { index: 8, title: "Mechanical & Reconditioning", note: "Ceramic coating, leather feed, OBD health check", amount: "KSh 185,000", date: "28 Nov 2024", attachment: "Recond_WorkOrder.pdf", reference: "WO-KHAN-402" },
  { index: 9, title: "Registration & NTSA TIMS Plates", note: "Plate issuance: KDH 442T & Logbook endorsement", amount: "KSh 45,000", date: "28 Nov 2024", attachment: "NTSA_Invoice_Plates.pdf", reference: "TIMS-REG-882" },
  { index: 10, title: "Showroom Prep & Sundry", note: "Full fuel tank handover, battery tender staging", amount: "KSh 34,900", date: "29 Nov 2024", attachment: "PettyCash_Voucher_41.pdf", reference: "PC-41" },
];

// DESIGN.md Section 7.3 vehicle cost categories (editable in Admin Settings).
export const costingCategories = [
  "Purchase price",
  "Auction or agent fees",
  "Freight and shipping",
  "Insurance",
  "Duty and taxes",
  "Clearing and port charges",
  "Transport to showroom",
  "Repairs and reconditioning",
  "Registration and licensing",
  "Other",
] as const;

// ---------------------------------------------------------------------------
// MOCK: Admin Shipments sample data — the clearly-labelled SAMPLE content of
// the Stitch export (docs/design/admin-shipments.json), per DESIGN.md Section
// 0.7 and AGENTS.md Section 2.4. Figures, refs, vessels and suppliers are
// fictional design content, not real business data. Replace with shipment
// queries (DESIGN.md Section 8, Admin Screen M) when the backend contract
// lands. Board stage names follow DESIGN.md Section 7.2.

export type ShipmentTextTone = "ink" | "slate" | "mist" | "success" | "warning" | "danger" | "info" | "champagne-dark";
export type ShipmentChipTone = "slate" | "warning" | "info" | "champagne";
export type ShipmentCardIcon = "pin" | "receipt" | "clock" | "file" | "check" | "warehouse" | "ship" | "gavel";

export type ShipmentStat = {
  label: string;
  icon: "ship" | "anchor" | "history" | "receipt";
  value: string;
  bar: "champagne" | "info" | "slate" | "champagne-dark";
  iconChip: "champagne" | "info" | "graphite" | "tint";
  lead: string;
  leadTone: ShipmentTextTone;
  leadIcon?: "trending" | "clock";
  note: string;
  noteTone?: "success";
};

export const shipmentStats: ShipmentStat[] = [
  { label: "In Transit (Ocean)", icon: "ship", value: "4 Vessels · 8 Units", bar: "champagne", iconChip: "champagne", lead: "2 arriving", leadTone: "success", leadIcon: "trending", note: "within next 72 hours" },
  { label: "At Mombasa Port / CFS", icon: "anchor", value: "3 Units (Clearing)", bar: "info", iconChip: "info", lead: "1 CFS Pending", leadTone: "warning", leadIcon: "clock", note: "Free days expire in 48h" },
  { label: "Avg Transit Duration", icon: "history", value: "34 Days", bar: "slate", iconChip: "graphite", lead: "Yokohama & Kobe to MSA", leadTone: "slate", note: "(-2d vs avg)", noteTone: "success" },
  { label: "Landed Duty Pending", icon: "receipt", value: "KSh 12,450,000", bar: "champagne-dark", iconChip: "tint", lead: "2 Escrow Approvals", leadTone: "danger", note: "required today" },
];

export const shipmentFilterOptions = {
  searchPlaceholder: "Filter by VIN, vessel, lot #...",
  origins: ["All Origins (16)", "Japan · USS / TAA (12)", "United Kingdom · BCA (4)"],
  carriers: ["All Carriers", "Mitsui O.S.K. (MOL)", "NYK RORO", "Maersk Container Line", "Toyofuji / Trans Future"],
  delayedLabel: "Delayed Only (2)",
  showingCount: "16 units",
  showingNote: "in pipeline",
  batchLabel: "Batch FY24-Q4",
  feedLabel: "KRA Simba & Kilindini Port Live Feed",
  feedUpdated: "Updated 12 mins ago",
} as const;

export type ShipmentFooter =
  | {
      kind: "split";
      left: string;
      leftIcon?: ShipmentCardIcon;
      leftTone?: ShipmentTextTone;
      right: string;
      rightTone?: ShipmentTextTone;
    }
  | {
      kind: "progress";
      vessel: string;
      track: string;
      pctLabel: string;
      pct: number;
      barWidthClass: "w-3/4" | "w-7/8" | "w-2/3";
      bar: "warning" | "info";
    };

export type ShipmentCard = {
  id: string;
  chip: string;
  chipTone: ShipmentChipTone;
  chipIcon?: ShipmentCardIcon;
  date: string;
  dateTone?: ShipmentTextTone;
  title: string;
  sub: string;
  image: string;
  imageW: number;
  imageH: number;
  imageAlt: string;
  footer: ShipmentFooter;
};

export type ShipmentColumn = {
  stage: string;
  dot: "slate" | "info" | "champagne" | "champagne-dark" | "success";
  count: number;
  active?: boolean;
  cards: ShipmentCard[];
};

export const shipmentBoard: ShipmentColumn[] = [
  {
    stage: "1. Purchased", dot: "slate", count: 2,
    cards: [
      {
        id: "s-prado-70th", chip: "USS Tokyo #9120", chipTone: "slate", date: "18 Nov",
        title: "2022 Land Cruiser Prado", sub: "TX-L 70th Anniv · 2.8L",
        image: "/images/admin-shipments/vehicle-prado-tx-l-70th.webp", imageW: 512, imageH: 279,
        imageAlt: "2022 Toyota Land Cruiser Prado TX-L 70th Anniversary edition in pearl white exterior, studio angled 3/4 shot with warm daylight reflections and luxury finish",
        footer: { kind: "split", left: "Auction Staged", leftIcon: "pin", right: "¥7,450,000", rightTone: "ink" },
      },
      {
        id: "s-gle-400d", chip: "BCA UK #C-902", chipTone: "slate", date: "20 Nov",
        title: "2021 Mercedes-Benz GLE 400d", sub: "AMG Line · Premium Plus",
        image: "/images/admin-shipments/vehicle-gle-400d.webp", imageW: 512, imageH: 279,
        imageAlt: "2021 Mercedes Benz GLE 400d AMG Line in Obsidian Black metallic finish, luxury side profile shot in architectural garage setting",
        footer: { kind: "split", left: "Payment Confirmed", leftIcon: "receipt", right: "£44,200", rightTone: "ink" },
      },
    ],
  },
  {
    stage: "2. Export Docs", dot: "slate", count: 2,
    cards: [
      {
        id: "s-rx450h", chip: "QISJ Inspection", chipTone: "slate", date: "Yokohama Port",
        title: "2020 Lexus RX450h F-Sport", sub: "VIN: GYL25-01449",
        image: "/images/admin-shipments/vehicle-rx450h-fsport.webp", imageW: 512, imageH: 279,
        imageAlt: "2020 Lexus RX450h F-Sport in Sonic Titanium metallic paint with dark graphite alloy wheels, dynamic outdoor studio car portrait",
        footer: { kind: "split", left: "JEVIC Translation", leftIcon: "clock", right: "Ready in 2d", rightTone: "ink" },
      },
      {
        id: "s-rangerover-sport", chip: "Southampton Docks", chipTone: "slate", date: "V5C Cleared",
        title: "2021 Range Rover Sport", sub: "Autobiography Dynamic D300",
        image: "/images/admin-shipments/vehicle-range-rover-sport.webp", imageW: 512, imageH: 286,
        imageAlt: "2021 Range Rover Sport Autobiography Dynamic in Carpathian Grey with black roof and red brake calipers, parked in an upscale urban setting",
        footer: { kind: "split", left: "EAA Certified", leftIcon: "check", right: "Awaiting RORO slot", rightTone: "ink" },
      },
    ],
  },
  {
    stage: "3. Shipped (In Transit)", dot: "info", count: 3,
    cards: [
      {
        id: "s-defender", chip: "5d Delayed", chipTone: "warning", chipIcon: "clock", date: "ETA: 02 Dec",
        title: "2022 Defender 110 D250", sub: "X-Dynamic SE · UK Export",
        image: "/images/admin-shipments/vehicle-defender-110-d250.webp", imageW: 512, imageH: 279,
        imageAlt: "2022 Land Rover Defender 110 X-Dynamic in Pangea Green with white contrast roof and rugged off-road tires, dramatic cinematic lighting",
        footer: { kind: "progress", vessel: "Vessel: MV GRANDE NIGERIA", track: "Red Sea diversion", pctLabel: "78% Voyage", pct: 78, barWidthClass: "w-3/4", bar: "warning" },
      },
      {
        id: "s-harrier", chip: "On Schedule", chipTone: "info", date: "ETA: 05 Dec",
        title: "2021 Toyota Harrier G", sub: "2.0L Petrol · Leather Pkg",
        image: "/images/admin-shipments/vehicle-harrier-g.webp", imageW: 512, imageH: 279,
        imageAlt: "2021 Toyota Harrier G-Leather Package in Pearl White with sleek daytime running LED lights, shot in high contrast architectural lighting",
        footer: { kind: "progress", vessel: "Vessel: MV TRANS HARMONY 1", track: "Indian Ocean Transit", pctLabel: "88% Voyage", pct: 88, barWidthClass: "w-7/8", bar: "info" },
      },
      {
        id: "s-lx570", chip: "On Schedule", chipTone: "info", date: "ETA: 08 Dec",
        title: "2020 Lexus LX570 Superior", sub: "5.7L V8 · 8-Speed Auto",
        image: "/images/admin-shipments/vehicle-lexus-lx570.webp", imageW: 512, imageH: 279,
        imageAlt: "2020 Lexus LX570 Superior in Deep Onyx Black with chrome spindle grille, ultra luxury full size SUV exterior profile",
        footer: { kind: "progress", vessel: "Cont: MSKU-982104", track: "Approaching Colombo", pctLabel: "65% Voyage", pct: 65, barWidthClass: "w-2/3", bar: "info" },
      },
    ],
  },
  {
    stage: "4. Arrived at Port", dot: "champagne", count: 2, active: true,
    cards: [
      {
        id: "s-lc300", chip: "Kilindini Berth 1-2", chipTone: "champagne", date: "Docked 27 Nov", dateTone: "ink",
        title: "2021 Land Cruiser 300 ZX", sub: "KT-LC3-04 · 3.3L Diesel",
        image: "/images/admin-shipments/vehicle-lc300-zx.webp", imageW: 512, imageH: 279,
        imageAlt: "2021 Toyota Land Cruiser 300 ZX in Pearl White, flagship Japanese luxury offroader parked on showroom floor with subtle studio lighting",
        footer: { kind: "split", left: "MV TRANS FUTURE 7", leftIcon: "ship", right: "KSh 19.8M", rightTone: "ink" },
      },
      {
        id: "s-bmw-x5", chip: "Mombasa CFS Yard 4", chipTone: "slate", date: "Docked 26 Nov",
        title: "2020 BMW X5 xDrive30d", sub: "M Sport Package · G05",
        image: "/images/admin-shipments/vehicle-bmw-x5.webp", imageW: 512, imageH: 286,
        imageAlt: "2020 BMW X5 xDrive30d M Sport in Mineral White metallic finish with high-gloss shadowline trim and 21 inch M alloys",
        footer: { kind: "split", left: "Discharged to CFS", leftIcon: "warehouse", right: "KSh 10.2M", rightTone: "ink" },
      },
    ],
  },
  {
    stage: "5. Customs Clearance", dot: "champagne-dark", count: 2,
    cards: [
      {
        id: "s-cayenne", chip: "CRSP Assessment", chipTone: "slate", chipIcon: "gavel", date: "Day 3 of CFS",
        title: "2021 Porsche Cayenne Coupe", sub: "3.0L Turbo V6 · UK Import",
        image: "/images/admin-shipments/vehicle-porsche-cayenne-coupe.webp", imageW: 512, imageH: 286,
        imageAlt: "2021 Porsche Cayenne Coupe in Chalk Grey with 22-inch GT design wheels, editorial luxury SUV profile",
        footer: { kind: "split", left: "Duty: KSh 4,890,000", right: "Pending Pay", rightTone: "ink" },
      },
      {
        id: "s-alphard", chip: "IDF Verified", chipTone: "slate", date: "Day 2 of CFS",
        title: "2019 Toyota Alphard", sub: "Executive Lounge 3.5L",
        image: "/images/admin-shipments/vehicle-toyota-alphard.webp", imageW: 512, imageH: 279,
        imageAlt: "2019 Toyota Alphard Executive Lounge in Pearl White with lounge leather reclining seats and privacy glass, VIP luxury van",
        footer: { kind: "split", left: "Duty: KSh 2,420,000", right: "Release Order Req", rightTone: "ink" },
      },
    ],
  },
  {
    stage: "6. Registration & NTSA", dot: "slate", count: 1,
    cards: [
      {
        id: "s-prado-tx", chip: "TIMS Plate Assign", chipTone: "slate", date: "MSA Likoni",
        title: "2021 LC Prado TX 2.8L", sub: "Plate: KD[Pending] · NTSA",
        image: "/images/admin-shipments/vehicle-prado-tx.webp", imageW: 512, imageH: 279,
        imageAlt: "2021 Land Cruiser Prado TX in Graphite Grey metallic, parked near port gates with safari ready specs",
        footer: { kind: "split", left: "KRA Release Done", leftIcon: "check", right: "Carrier dispatching", rightTone: "ink" },
      },
    ],
  },
  {
    stage: "7. Delivered to Showroom", dot: "success", count: 4,
    cards: [
      {
        id: "s-hilux", chip: "Nairobi Showroom", chipTone: "slate", date: "24 Nov",
        title: "2022 Hilux GR Sport", sub: "4WD · Ready for Inventory",
        image: "/images/admin-shipments/vehicle-hilux-gr-sport.webp", imageW: 512, imageH: 279,
        imageAlt: "2022 Toyota Hilux GR Sport double cab pickup truck in vibrant red and black livery, parked in immaculate Nairobi luxury dealership showroom",
        footer: { kind: "split", left: "KDE 304M", leftTone: "ink", right: "Prepped & Detailed", rightTone: "ink" },
      },
      {
        id: "s-vogue", chip: "Nairobi Showroom", chipTone: "slate", date: "22 Nov",
        title: "2020 Range Rover Vogue", sub: "3.0L TDV6 · Live on Site",
        image: "/images/admin-shipments/vehicle-range-rover-vogue.webp", imageW: 512, imageH: 279,
        imageAlt: "2020 Land Rover Range Rover Vogue in Fuji White with Atlas exterior accents, immaculate condition inside pristine luxury car showroom",
        footer: { kind: "split", left: "KDE 118X", leftTone: "ink", right: "Reserved", rightTone: "champagne-dark" },
      },
    ],
  },
];

export const shipmentSelectedCardId = "s-lc300";

export type ShipmentListRow = {
  id: string;
  reference: string;
  vehicle: string;
  sub: string;
  carrier: string;
  origin: string;
  eta: string;
  stage: string;
  statusTone: StatusTone;
  note: string;
};

export const shipmentListRows: ShipmentListRow[] = [
  { id: "s-prado-70th", reference: "USS Tokyo #9120", vehicle: "2022 Land Cruiser Prado", sub: "TX-L 70th Anniv · 2.8L", carrier: "USS Tokyo Auction", origin: "Japan", eta: "18 Nov", stage: "Purchased", statusTone: "muted", note: "Auction Staged · ¥7,450,000" },
  { id: "s-gle-400d", reference: "BCA UK #C-902", vehicle: "2021 Mercedes-Benz GLE 400d", sub: "AMG Line · Premium Plus", carrier: "BCA UK", origin: "United Kingdom", eta: "20 Nov", stage: "Purchased", statusTone: "muted", note: "Payment Confirmed · £44,200" },
  { id: "s-rx450h", reference: "QISJ Inspection", vehicle: "2020 Lexus RX450h F-Sport", sub: "VIN: GYL25-01449", carrier: "Yokohama Port", origin: "Japan", eta: "—", stage: "Export Docs", statusTone: "muted", note: "JEVIC Translation · Ready in 2d" },
  { id: "s-rangerover-sport", reference: "V5C Cleared", vehicle: "2021 Range Rover Sport", sub: "Autobiography Dynamic D300", carrier: "Southampton Docks", origin: "United Kingdom", eta: "—", stage: "Export Docs", statusTone: "muted", note: "EAA Certified · Awaiting RORO slot" },
  { id: "s-defender", reference: "MV GRANDE NIGERIA", vehicle: "2022 Defender 110 D250", sub: "X-Dynamic SE · UK Export", carrier: "MV GRANDE NIGERIA", origin: "United Kingdom", eta: "ETA: 02 Dec", stage: "Shipped (In Transit)", statusTone: "warning", note: "5d Delayed · Red Sea diversion · 78% Voyage" },
  { id: "s-harrier", reference: "MV TRANS HARMONY 1", vehicle: "2021 Toyota Harrier G", sub: "2.0L Petrol · Leather Pkg", carrier: "MV TRANS HARMONY 1", origin: "Japan", eta: "ETA: 05 Dec", stage: "Shipped (In Transit)", statusTone: "info", note: "On Schedule · Indian Ocean Transit · 88% Voyage" },
  { id: "s-lx570", reference: "MSKU-982104", vehicle: "2020 Lexus LX570 Superior", sub: "5.7L V8 · 8-Speed Auto", carrier: "Maersk Container Line", origin: "Japan", eta: "ETA: 08 Dec", stage: "Shipped (In Transit)", statusTone: "info", note: "On Schedule · Approaching Colombo · 65% Voyage" },
  { id: "s-lc300", reference: "SHP-2024-JP-109", vehicle: "2021 Land Cruiser 300 ZX", sub: "KT-LC3-04 · 3.3L Diesel", carrier: "MV TRANS FUTURE 7", origin: "Japan", eta: "Docked 27 Nov", stage: "Arrived at Port", statusTone: "info", note: "Kilindini Berth 1-2 · Asking KSh 19,800,000" },
  { id: "s-bmw-x5", reference: "Mombasa CFS Yard 4", vehicle: "2020 BMW X5 xDrive30d", sub: "M Sport Package · G05", carrier: "—", origin: "Japan", eta: "Docked 26 Nov", stage: "Arrived at Port", statusTone: "info", note: "Discharged to CFS · KSh 10.2M" },
  { id: "s-cayenne", reference: "CRSP Assessment", vehicle: "2021 Porsche Cayenne Coupe", sub: "3.0L Turbo V6 · UK Import", carrier: "—", origin: "United Kingdom", eta: "Day 3 of CFS", stage: "Customs Clearance", statusTone: "warning", note: "Duty: KSh 4,890,000 · Pending Pay" },
  { id: "s-alphard", reference: "IDF Verified", vehicle: "2019 Toyota Alphard", sub: "Executive Lounge 3.5L", carrier: "—", origin: "Japan", eta: "Day 2 of CFS", stage: "Customs Clearance", statusTone: "warning", note: "Duty: KSh 2,420,000 · Release Order Req" },
  { id: "s-prado-tx", reference: "TIMS Plate Assign", vehicle: "2021 LC Prado TX 2.8L", sub: "Plate: KD[Pending] · NTSA", carrier: "—", origin: "Japan", eta: "—", stage: "Registration & NTSA", statusTone: "muted", note: "MSA Likoni · KRA Release Done · Carrier dispatching" },
  { id: "s-hilux", reference: "KDE 304M", vehicle: "2022 Hilux GR Sport", sub: "4WD · Ready for Inventory", carrier: "—", origin: "Japan", eta: "24 Nov", stage: "Delivered to Showroom", statusTone: "success", note: "Nairobi Showroom · Prepped & Detailed" },
  { id: "s-vogue", reference: "KDE 118X", vehicle: "2020 Range Rover Vogue", sub: "3.0L TDV6 · Live on Site", carrier: "—", origin: "Japan", eta: "22 Nov", stage: "Delivered to Showroom", statusTone: "success", note: "Nairobi Showroom · Reserved" },
];

export type ShipmentMilestone = {
  title: string;
  right: string;
  note: string;
  state: "done" | "current" | "pending";
  chip?: "CURRENT";
};

export const shipmentMilestones: ShipmentMilestone[] = [
  { title: "1. Purchased", right: "18 Oct 2024", note: "USS Tokyo hammer cleared · Hammer: ¥12,800,000", state: "done" },
  { title: "2. Export documents processing", right: "24 Oct 2024", note: "Japan export certificate & deregistration complete", state: "done" },
  { title: "3. Shipped (in transit)", right: "02 Nov 2024", note: "Loaded on MV TRANS FUTURE 7 at Yokohama (Voyage 204)", state: "done" },
  { title: "4. Arrived at port", right: "27 Nov 2024", note: "Docked at Kilindini Harbour, Mombasa Berths 1–2", state: "current", chip: "CURRENT" },
  { title: "5. Customs clearance", right: "In progress", note: "KRA CRSP declaration filed; waiting tally verification", state: "pending" },
  { title: "6. Registration and inspection", right: "Pending", note: "NTSA TIMS e-citizen plate booking & KEBS sticker", state: "pending" },
  { title: "7. Delivered to showroom", right: "Scheduled", note: "Car carrier transport Mombasa → Nairobi Showroom", state: "pending" },
];

export type ShipmentDocument = {
  name: string;
  status: string;
  statusTone: "success" | "info";
  statusIcon: "check" | "lock" | "languages" | "badge";
};

export const shipmentDocuments: ShipmentDocument[] = [
  { name: "Commercial Invoice (INV-TYO-9921.pdf)", status: "Verified & Authenticated", statusTone: "success", statusIcon: "check" },
  { name: "Original Bill of Lading (BL-TF7-MSA-0492.pdf)", status: "Original Surrendered at MSA", statusTone: "info", statusIcon: "lock" },
  { name: "Japanese Export Certificate (EXP-JAP-2024-88.pdf)", status: "Translated & Verified", statusTone: "success", statusIcon: "languages" },
  { name: "QISJ Pre-Export Cert (QISJ-KE-99214.pdf)", status: "Approved · Roadworthy KEBS", statusTone: "success", statusIcon: "badge" },
];

export type ShipmentCostLine = {
  label: string;
  value: string;
  tone?: "warning" | "champagne-dark";
  help?: boolean;
};

export const shipmentCosts: ShipmentCostLine[] = [
  { label: "Auction Hammer (¥12,800,000)", value: "KSh 11,328,000" },
  { label: "Ocean Freight (RORO $2,100)", value: "KSh 273,000" },
  { label: "Marine Cargo Insurance", value: "KSh 84,000" },
  { label: "KRA Customs Duty & CRSP", value: "KSh 4,120,000 (Pending)", tone: "warning", help: true },
  { label: "Port CFS & Handling", value: "KSh 78,000" },
];

export const shipmentDetail = {
  ref: "REF: SHP-2024-JP-109",
  stageChip: "Stage 4 of 7",
  title: "Arrived at Port (Mombasa CFS)",
  lotVin: "USS Tokyo Lot #8812 · VIN: FJA300-001928",
  stockUnit: "Stock Unit KT-LC3-04",
  kraChip: "[KRA Pending]",
  vehicleTitle: "2021 Land Cruiser 300 ZX",
  vehicleSub: "3.3L Twin-Turbo Diesel · Pearl White",
  asking: "Asking KSh 19,800,000",
  image: "/images/admin-shipments/vehicle-lc300-zx-detail.webp",
  imageW: 512,
  imageH: 279,
  imageAlt: "Detailed studio photo of 2021 Toyota Land Cruiser 300 ZX in Pearl White with 20 inch wheels and chrome trim, pristine executive presentation",
  milestonesTitle: "Logistics Milestones",
  stageActive: "Stage 4 Active",
  documentsTitle: "Shipment Documents (4)",
  uploadLabel: "Upload Doc",
  costsTitle: "Incurred & Projected Costs",
  costsLinkLabel: "View in Costing",
  totalLabel: "Total Landed Est.",
  totalValue: "KSh 15,883,000",
  primaryAction: "Mark Arrived and Add to Stock",
  secondaryAction: "Update Shipment Stage",
};
