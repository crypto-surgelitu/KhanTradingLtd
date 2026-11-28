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
