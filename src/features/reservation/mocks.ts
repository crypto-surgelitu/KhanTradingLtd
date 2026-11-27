// MOCK: Reserve Vehicle screen sample data — clearly labelled placeholder
// content per DESIGN.md Section 0.7 and AGENTS.md Section 2.4, mirroring the
// approved Stitch export (docs/design/reserve-vehicle.json). Replace with the
// reservation query/action contract when the backend lands.

export const reserveBuyerSummary = {
  name: "David Kamau",
  phone: "+254 712 345 678",
  email: "david.kamau@example.co.ke",
  viewingDate: "Friday, 28th Nov 2025, Morning Slot 09:30 AM",
  note: "Inspection sheet verified; client exploring bank asset financing options.",
} as const;

export const reserveVehicleSummary = {
  title: "2019 Toyota Land Cruiser Prado TZ-G",
  ref: "Ref: #882-TZG",
  specs: ["2.8L Diesel", "42,000 km", "Automatic", "Pearl White"],
  totalLabel: "Total Vehicle Price",
  total: "KSh 7,650,000",
  depositLabel: "Holding Deposit",
  deposit: "[DEPOSIT AMOUNT]",
  balanceLabel: "Balance Due on Handover",
  balance: "[BALANCE DUE]",
  image: "/images/reserve-vehicle/vehicle-land-cruiser-prado.webp",
  imageAlt: "2019 Toyota Land Cruiser Prado TZ-G",
} as const;

export const reservationReferenceTag = "KH-2019-PRD-882";

export const lendingInstitutions = [
  "NCBA Bank Asset Finance",
  "Stanbic Bank Kenya",
  "I&M Bank Limited",
  "Co-operative Bank of Kenya",
  "[Other Commercial Bank / Sacco]",
] as const;
