// MOCK: Book a Viewing screen sample data — clearly labelled placeholder
// content per DESIGN.md Section 0.7 and AGENTS.md Section 2.4, mirroring the
// approved Stitch export (docs/design/book-viewing.json). Replace with the
// viewing-availability + booking action contract when the backend lands.

export type DaySlot = { day: string; num: string; status: "Available" | "Selected" | "Booked" };

export const bookingDaySlots: DaySlot[] = [
  { day: "Thu", num: "28", status: "Available" },
  { day: "Fri", num: "29", status: "Selected" },
  { day: "Sat", num: "30", status: "Available" },
  { day: "Sun", num: "01", status: "Booked" },
  { day: "Mon", num: "02", status: "Available" },
  { day: "Tue", num: "03", status: "Available" },
  { day: "Wed", num: "04", status: "Available" },
];

export const bookingMorningSlots = [
  { time: "09:30 AM", selected: false },
  { time: "11:00 AM", selected: true },
  { time: "11:45 AM", selected: false },
  { time: "12:30 PM", selected: false },
];

export const bookingAfternoonSlots = [
  { time: "02:00 PM", selected: false },
  { time: "03:30 PM", selected: false },
  { time: "05:00 PM", selected: false },
  { time: "06:00 PM", selected: false },
];

export const bookingVehicleSummary = {
  status: "in_stock",
  stockRef: "Stock Ref: KT-PRD-19",
  title: "2019 Toyota Land Cruiser Prado TZ-G",
  specs: "2.8L Diesel · Automatic · 42,000 km · Pearl White",
  priceLabel: "Dealership Price",
  price: "KSh 7,650,000",
  location: "[ADDRESS], Nairobi, Kenya",
  hoursSecondLine: "Sunday: Strictly by Appointment",
  desk: "Showroom Desk",
  image: "/images/book-viewing/vehicle-land-cruiser-prado.webp",
  imageAlt: "Pristine white 2019 Toyota Land Cruiser Prado TZ-G parked in a minimalist luxury automotive showroom with soft architectural daylighting, showcasing front three-quarters angle, high-gloss pearl metallic finish, immaculate LED headlights, and pristine alloy wheels.",
} as const;

export const bookingConfirmation = {
  ref: "BK-2024-PRD-882",
  type: "Test Drive & Inspection",
  when: "Friday, 29th Nov 2024 at 11:00 AM EAT",
  host: "Alex Kariuki",
  hostRole: "Senior Concierge · KHANS TRADING Ltd.",
  dispatchPhone: "+254 712 345 678",
} as const;
