// MOCK: remove when backend ready — SAMPLE form option data for the Sell or
// Trade In screen (Stitch export). The form is presentational for now: the
// backend submission wiring goes in features/trade-in actions + schemas when
// the contract lands (docs/TASKS.md, NEEDS-BACKEND: valuation request).

export type TradeInOption = {
  value: string;
  label: string;
};

export const tradeInMakes: TradeInOption[] = [
  { value: "", label: "Select Manufacturer" },
  { value: "Toyota", label: "Toyota" },
  { value: "Lexus", label: "Lexus" },
  { value: "Mercedes-Benz", label: "Mercedes-Benz" },
  { value: "Land Rover", label: "Land Rover" },
  { value: "BMW", label: "BMW" },
  { value: "Porsche", label: "Porsche" },
  { value: "Audi", label: "Audi" },
  { value: "Other", label: "Other Manufacturer" },
];

export const tradeInYears: TradeInOption[] = [
  { value: "", label: "Select Year" },
  { value: "2024", label: "2024" },
  { value: "2023", label: "2023" },
  { value: "2022", label: "2022" },
  { value: "2021", label: "2021" },
  { value: "2020", label: "2020" },
  { value: "2019", label: "2019" },
  { value: "2018", label: "2018" },
  { value: "2017", label: "2017" },
  { value: "older", label: "[Older than 2017 - Manual Review]" },
];

export const tradeInLogbookStatuses: TradeInOption[] = [
  { value: "in_hand", label: "Logbook Available in Hand (Ready for transfer)" },
  { value: "financed", label: "Financed / Bank Loan Clearance Needed (Active Lien)" },
  { value: "transit", label: "Import Transit / [Port Clearance in Progress]" },
];

export type TradeInUploadIcon = "image" | "seat" | "speed";

export type TradeInUpload = {
  id: string;
  name: string;
  meta: string;
  icon: TradeInUploadIcon;
};

// SAMPLE upload queue state drawn in the export (3 of 8 slots filled).
export const tradeInUploads: TradeInUpload[] = [
  {
    id: "exterior-front-three-quarter",
    name: "exterior_front_three_quarter.jpg",
    meta: "4.2 MB · Ready",
    icon: "image",
  },
  {
    id: "interior-cockpit-leather",
    name: "interior_cockpit_leather.jpg",
    meta: "3.8 MB · Ready",
    icon: "seat",
  },
  {
    id: "odometer-gauge-cluster",
    name: "odometer_gauge_cluster.jpg",
    meta: "2.1 MB · Ready",
    icon: "speed",
  },
];

export const tradeInUploadMax = 8;
