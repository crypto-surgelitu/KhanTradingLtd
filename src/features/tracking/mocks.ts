// MOCK: Track Your Purchase — Detail sample data. Clearly labelled placeholder
// content per DESIGN.md Section 0.7 and AGENTS.md Section 2.4, mirroring the
// approved Stitch export (docs/design/track-detail.json). Replace with the
// verified tracker-session query contract when the backend lands.

export type TrackTone = "champagne" | "warning" | "success" | "muted";

export const trackSummary = {
  grade: "Grade 4.5B",
  ref: "Ref: KH-2019-PRD-882",
  status: "Payment & Financing Verification",
  vehicleTitle: "2019 Toyota Land Cruiser Prado TZ-G",
  specs: "2.8L Diesel · Automatic · 42,000 km · Sunroof & Height Control",
  price: "KSh 7,650,000",
  client: "Client: David Kamau · Verified +254 712 345 678",
  vehicleImage: "/images/track-detail/vehicle-land-cruiser-prado.webp",
  vehicleAlt: "Editorial studio side-quarter photography of a pristine 2019 Toyota Land Cruiser Prado TZ-G in Pearl White paint, immaculate dark gloss multi-spoke rims, natural softbox lighting, ultra-clean automotive showroom aesthetic.",
  agent: {
    name: "Alex Kariuki",
    role: "Senior Dealership Concierge",
    image: "/images/track-detail/concierge-alex-kariuki.webp",
    imageAlt: "Professional corporate headshot of a Kenyan male dealership manager in a charcoal tailored suit against a warm neutral architectural interior background, sharp lighting.",
  },
} as const;

export type TrackStage = {
  name: string;
  state: "done" | "current" | "upcoming";
  detail: string;
};

export const trackStages: TrackStage[] = [
  { name: "Enquiry received", state: "done", detail: "14 Nov 2024" },
  { name: "Vehicle reserved", state: "done", detail: "16 Nov 2024" },
  { name: "Documents submitted", state: "done", detail: "18 Nov 2024" },
  { name: "Payment or financing", state: "current", detail: "In Progress" },
  { name: "Ownership & insurance", state: "upcoming", detail: "Pending" },
  { name: "Final inspection", state: "upcoming", detail: "Pending" },
  { name: "Completed", state: "upcoming", detail: "Pending" },
];

export const trackCurrentStep = {
  title: "Stage 4 of 7: Payment or Financing Verification",
  target: "Target: [EXPECTED DATE]",
  happeningNow:
    "NCBA Bank has formally approved your asset finance facility. We are currently verifying your equity deposit transfer and processing the formal undertaking letter from the lender.",
  actionRequired:
    "Upload your official Bank Transfer remittance receipt for the equity deposit balance (KSh 1,530,000), or confirm your lender's direct disbursement schedule.",
  officer: "Alex Kariuki (Khans Operations) + NCBA Desk",
  timeline: "Estimated timeline: 24–48 hrs upon clearance",
  alert: {
    title: "Action Needed: 1 Document Requires Immediate Attention",
    body: "Proof of Address utility bill reflects an older date. Please submit a bill issued within the last 90 days.",
    action: "Re-upload Now",
  },
} as const;

export type TrackDocument = {
  title: string;
  description: string;
  status: string;
  tone: TrackTone;
  action: string;
};

export const trackDocuments: TrackDocument[] = [
  { title: "National ID / Passport (David Kamau)", description: "Identity & Citizenship verification · Approved 18 Nov 2024", status: "Approved", tone: "success", action: "View File" },
  { title: "KRA PIN Certificate (A009******Z)", description: "Revenue authority taxpayer validation · Approved 18 Nov 2024", status: "Approved", tone: "success", action: "View File" },
  { title: "Proof of Address (Utility Bill / Lease)", description: "Document is dated older than 3 months. Please provide a utility bill from the last 90 days.", status: "Needs Attention", tone: "warning", action: "Re-upload" },
  { title: "NCBA Asset Finance Pre-Approval Letter", description: "Submitted yesterday · Awaiting final officer seal", status: "Under Review", tone: "muted", action: "Details" },
  { title: "NTSA TIMS Transfer Consent Form", description: "Required prior to vehicle logbook transfer registration", status: "Required", tone: "muted", action: "Upload File" },
];

export const trackIssuedDocuments = [
  { name: "Proforma Invoice", size: "240 KB" },
  { name: "Holding Voucher", size: "180 KB" },
  { name: "CarVX 4.5B Report", size: "1.4 MB" },
];

export type TrackUpdate = {
  timestamp: string;
  actor: string;
  message?: string;
  tone: TrackTone;
};

export const trackUpdates: TrackUpdate[] = [
  { timestamp: "Today, 10:45 AM", actor: "Alex Kariuki (Operations Desk)", tone: "champagne" },
  { timestamp: "Yesterday, 3:20 PM", actor: "Khans Automated Compliance", tone: "warning", message: "Document 'Proof of Address' flagged for review: date stamp exceeds 90-day validity threshold required by KRA/NTSA guidelines." },
  { timestamp: "18 Nov 2024, 11:15 AM", actor: "System Verification", tone: "success", message: "National ID and KRA PIN successfully verified through government registry gateway." },
  { timestamp: "16 Nov 2024, 02:40 PM", actor: "Finance Desk", tone: "success", message: "Holding deposit of KSh 500,000 confirmed in Khans client trust ledger. 2019 Prado TZ-G allocation secured and removed from public showroom inventory." },
  { timestamp: "14 Nov 2024, 09:12 AM", actor: "Sales Concierge", tone: "muted", message: "Initial purchase enquiry and vehicle reservation request registered on behalf of David Kamau." },
];

export const trackPayments = {
  lines: [
    { label: "Total Vehicle Price", amount: "KSh 7,650,000" },
    { label: "Holding Deposit Paid (16 Nov)", amount: "- KSh 500,000" },
    { label: "NCBA Asset Finance (80%)", amount: "- KSh 6,120,000" },
    { label: "Remaining Equity Balance", amount: "KSh 1,030,000", note: "Due prior to handover" },
  ],
  facility: {
    label: "Approved Facility",
    status: "Approved",
    name: "NCBA Bank Asset Finance",
    amount: "Facility Amount: KSh 6,120,000",
    terms: "Tenure & Terms: 36 Months · Dealer Disbursement",
    reference: "KH-2019-PRD-882",
  },
} as const;

export const trackNotificationChannels = [
  { id: "notify-whatsapp", title: "WhatsApp Notifications", description: "Instant updates for document approvals & handover schedule", defaultChecked: true },
  { id: "notify-sms", title: "SMS Alerts", description: "Urgent milestones and security authentication", defaultChecked: true },
  { id: "notify-email", title: "Email Notifications", description: "Formal invoices, contracts, and CarVX inspection dossiers", defaultChecked: false },
] as const;
