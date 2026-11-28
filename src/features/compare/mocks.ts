import type { VehicleStatus } from "@/components/shared/status-badge";

// MOCK: remove when backend ready — SAMPLE comparison data replicating the
// Stitch export (Compare Vehicles screen). No fetching or persistence lives
// here on purpose: the real comparison wiring goes in features/vehicles
// queries + actions once the backend contract lands (docs/TASKS.md,
// NEEDS-BACKEND: comparison selection + spec query).

export type CompareVehicle = {
  id: string;
  slug: string;
  title: string;
  shortLabel: string;
  stockRef: string;
  location: string;
  price: number;
  priceCompact: string;
  status: VehicleStatus;
  bodyTypePlural: string;
  image: string;
  imageAlt: string;
  thumb: string;
  thumbAlt: string;
};

export type CompareSpecRow = {
  label: string;
  values: readonly [string, string];
  emphasized?: boolean;
};

export type CompareSpecGroup = {
  id: string;
  label: string;
  icon: "gauge" | "ruler" | "star";
  rows: readonly CompareSpecRow[];
};

export const compareMaxVehicles = 3;

export const compareFromSavedCount = 3;

export const compareVehicles: CompareVehicle[] = [
  {
    id: "kt-prd-19",
    slug: "toyota-land-cruiser-prado-tz-g-2019",
    title: "2019 Toyota Land Cruiser Prado TZ-G",
    shortLabel: "Prado TZ-G",
    stockRef: "#KT-PRD-19",
    location: "Nairobi Yard",
    price: 7650000,
    priceCompact: "KSh 7.65M",
    status: "in_stock",
    bodyTypePlural: "SUVs",
    image: "/images/compare-vehicles/vehicle-1.webp",
    imageAlt:
      "Pearl white 2019 Toyota Land Cruiser Prado TZ-G in three-quarter front perspective on a clean polished concrete studio floor",
    thumb: "/images/compare-vehicles/thumb-1.webp",
    thumbAlt: "Front view thumbnail of the 2019 Toyota Land Cruiser Prado TZ-G",
  },
  {
    id: "kt-lc3-04",
    slug: "toyota-land-cruiser-300-zx-2021",
    title: "2021 Land Cruiser 300 ZX",
    shortLabel: "LC 300 ZX",
    stockRef: "#KT-LC3-04",
    location: "Nairobi Yard",
    price: 19800000,
    priceCompact: "KSh 19.8M",
    status: "in_stock",
    bodyTypePlural: "SUVs",
    image: "/images/compare-vehicles/vehicle-2.webp",
    imageAlt:
      "Attitude black mica 2021 Toyota Land Cruiser 300 ZX in profile with dramatic studio directional lighting",
    thumb: "/images/compare-vehicles/thumb-2.webp",
    thumbAlt: "Front view thumbnail of the 2021 Land Cruiser 300 ZX",
  },
];

export const compareSpecGroups: CompareSpecGroup[] = [
  {
    id: "core-specifications",
    label: "Core Specifications",
    icon: "gauge",
    rows: [
      { label: "Year of Manufacture", values: ["2019", "2021"], emphasized: true },
      { label: "Odometer Mileage", values: ["44,500 km", "18,200 km"] },
      { label: "Transmission", values: ["6-Speed Automatic", "10-Speed Direct Shift Auto"] },
      { label: "Fuel Type & Injection", values: ["Diesel (Common Rail Turbo)", "Diesel (Twin-Turbo V6)"] },
      { label: "Displacement & Code", values: ["2,755 cc (2.8L 1GD-FTV)", "3,346 cc (3.3L F33A-FTV)"] },
      { label: "Drivetrain System", values: ["Full-time 4WD with Torsen LSD", "Full-time 4WD with MTS"] },
      { label: "Exterior Paint Finish", values: ["Pearl White (070)", "Attitude Black Mica (218)"] },
      { label: "Seating Configuration", values: ["7 Seats (Electric 3rd Row)", "7 Seats (Fold-Flat 3rd Row)"] },
    ],
  },
  {
    id: "dimensions-capacity",
    label: "Dimensions & Capacity",
    icon: "ruler",
    rows: [
      { label: "Body Classification", values: ["Mid-size 4WD SUV", "Full-size Flagship 4WD SUV"] },
      { label: "Ground Clearance", values: ["215 mm", "235 mm"], emphasized: true },
      { label: "Fuel Tank Capacity", values: ["87 Litres", "110 Litres"] },
    ],
  },
  {
    id: "interior-technology",
    label: "Interior & Technology",
    icon: "star",
    rows: [
      { label: "Audio & Infotainment", values: ["Factory Multimedia, 360° Camera", "JBL Premium 14-Speaker & HUD"] },
      { label: "Cabin Upholstery", values: ["Black Perforated Nappa Leather", "Two-Tone Hazel / Black Semi-Aniline"] },
      { label: "Roof Architecture", values: ["Tilt/Slide Power Sunroof", "Dual Panoramic Sunroof"] },
      { label: "Active Driver Assistance", values: ["Toyota Safety Sense P, Lane Departure Alert", "TSS 2.5+, Radar Cruise & Blind Spot"] },
      {
        label: "Distinguishing Highlights",
        values: [
          "Cool Box, Heated & Ventilated Seats, Aerodynamic Roof Rails, Kinetic Dynamic Suspension (KDSS)",
          "Rear Seat Dual Entertainment, Center Console Cool Box, Biometric Fingerprint Push Start, 20\" Diamond Cut Alloys",
        ],
      },
    ],
  },
];

export type CompareSuggestion = {
  id: string;
  label: string;
  priceLabel: string;
};

export const compareSuggestions: CompareSuggestion[] = [
  { id: "gle-300d-2020", label: "2020 Mercedes-Benz GLE 300d", priceLabel: "KSh 11,200,000" },
  { id: "prado-tx-l-2020", label: "2020 Land Cruiser Prado TX-L", priceLabel: "KSh 7,200,000" },
];
