import { z } from "zod";
import type { VehicleCardData } from "@/components/shared/vehicle-card";

// MOCK: SAMPLE vehicle data for the Home screen — clearly labelled placeholder
// content per DESIGN.md Section 0.7 and AGENTS.md Section 2.4. Replace with
// feature queries when the backend contract (features/vehicles) is ready.

export type SampleVehicle = VehicleCardData & {
  isFeatured: boolean;
  isNewArrival: boolean;
};

export const sampleVehicles: SampleVehicle[] = [
  {
    slug: "toyota-land-cruiser-prado-tx-l-2020",
    make: "Toyota", model: "Land Cruiser Prado", trim: "TX-L", year: 2020,
    price: 6850000, status: "in_stock",
    image: "/images/home/vehicle-land-cruiser-prado.webp",
    imageAlt: "2020 Toyota Land Cruiser Prado TX-L in pearl white parked in a clean sunlit architectural courtyard, three-quarter front angle, crisp editorial automotive photography",
    mileageKm: 42000, transmission: "Automatic", fuelType: "Diesel", engineCc: 2800,
    photoCount: 8, isFeatured: true, isNewArrival: false,
  },
  {
    slug: "lexus-rx-350-f-sport-2019",
    make: "Lexus", model: "RX 350", trim: "F-Sport", year: 2019,
    price: 7450000, status: "new_arrival",
    image: "/images/home/vehicle-lexus-rx350.webp",
    imageAlt: "2019 Lexus RX 350 F-Sport in metallic obsidian black parked outside a modern glass showroom, soft daylight, editorial automotive photography",
    mileageKm: 36500, transmission: "Automatic", fuelType: "Petrol", engineCc: 3500,
    photoCount: 8, isFeatured: true, isNewArrival: false,
  },
  {
    slug: "mercedes-benz-c200-amg-line-2018",
    make: "Mercedes-Benz", model: "C200", trim: "AMG Line", year: 2018,
    price: 4850000, status: "in_stock",
    image: "/images/home/vehicle-mercedes-c200.webp",
    imageAlt: "2018 Mercedes-Benz C200 AMG Line sedan in selenite grey metallic, parked on clean stone paving, soft natural lighting, editorial photography",
    mileageKm: 51000, transmission: "Automatic", fuelType: "Petrol", engineCc: 2000,
    photoCount: 8, isFeatured: true, isNewArrival: false,
  },
  {
    slug: "mazda-cx-5-xd-l-package-2019",
    make: "Mazda", model: "CX-5", trim: "XD L-Package", year: 2019,
    price: 3450000, status: "in_stock",
    image: "/images/home/vehicle-mazda-cx5.webp",
    imageAlt: "2019 Mazda CX-5 in soul red crystal metallic, clean architectural backdrop, crisp studio daylight, editorial automotive photography",
    mileageKm: 48200, transmission: "Automatic", fuelType: "Diesel", engineCc: 2200,
    photoCount: 8, isFeatured: true, isNewArrival: false,
  },
  {
    slug: "land-rover-defender-110-se-d240-2021",
    make: "Land Rover", model: "Defender 110", trim: "SE D240", year: 2021,
    price: 12400000, status: "new_arrival",
    image: "/images/home/vehicle-defender-110.webp",
    imageAlt: "2021 Land Rover Defender 110 in gondwana stone metallic, parked on minimalist gravel driveway, warm afternoon light, editorial automotive photography",
    mileageKm: 29000, transmission: "Automatic", fuelType: "Diesel", engineCc: 2000,
    photoCount: 8, isFeatured: true, isNewArrival: false,
  },
  {
    slug: "bmw-x5-xdrive30d-m-sport-2018",
    make: "BMW", model: "X5", trim: "xDrive30d M-Sport", year: 2018,
    price: 6950000, status: "in_stock",
    image: "/images/home/vehicle-bmw-x5.webp",
    imageAlt: "2018 BMW X5 xDrive30d in mineral white metallic, parked in front of a contemporary Nairobi residence, soft daylight, editorial photography",
    mileageKm: 54000, transmission: "Automatic", fuelType: "Diesel", engineCc: 3000,
    photoCount: 8, isFeatured: true, isNewArrival: false,
  },
  {
    slug: "toyota-hilux-double-cab-4x4-2019",
    make: "Toyota", model: "Hilux", trim: "Double Cab 4x4", year: 2019,
    price: 4950000, status: "in_stock",
    image: "/images/home/vehicle-hilux.webp",
    imageAlt: "2019 Toyota Hilux Double Cab 4x4 in silver metallic, clean urban architectural setting, crisp natural light, editorial automotive photography",
    mileageKm: 61000, transmission: "Automatic", fuelType: "Diesel", engineCc: 2800,
    photoCount: 8, isFeatured: true, isNewArrival: false,
  },
  {
    slug: "volkswagen-golf-gti-performance-2018",
    make: "Volkswagen", model: "Golf GTI", trim: "Performance", year: 2018,
    price: 3250000, status: "in_stock",
    image: "/images/home/vehicle-golf-gti.webp",
    imageAlt: "2018 Volkswagen Golf GTI in pure white, parked in a minimalist concrete courtyard, soft daylight, editorial automotive photography",
    mileageKm: 44500, transmission: "Automatic", fuelType: "Petrol", engineCc: 2000,
    photoCount: 8, isFeatured: true, isNewArrival: false,
  },
  {
    slug: "toyota-harrier-hybrid-z-2020",
    make: "Toyota", model: "Harrier", trim: "Hybrid Z", year: 2020,
    price: 5250000, status: "new_arrival",
    image: "/images/home/vehicle-harrier.webp",
    imageAlt: "2020 Toyota Harrier Hybrid in dark steel mica, parked in a clean sunlit showroom courtyard, editorial automotive photography",
    mileageKm: 31000, transmission: "Automatic", fuelType: "Hybrid", engineCc: 2500,
    photoCount: 8, isFeatured: false, isNewArrival: true,
  },
  {
    slug: "subaru-outback-limited-awd-2019",
    make: "Subaru", model: "Outback", trim: "Limited AWD", year: 2019,
    price: 3850000, status: "new_arrival",
    image: "/images/home/vehicle-subaru-outback.webp",
    imageAlt: "2019 Subaru Outback Limited in wilderness green metallic, parked on clean stone paving, soft natural lighting, editorial photography",
    mileageKm: 46000, transmission: "Automatic", fuelType: "Petrol", engineCc: 2500,
    photoCount: 8, isFeatured: false, isNewArrival: true,
  },
  {
    slug: "audi-q5-quattro-s-line-2019",
    make: "Audi", model: "Q5", trim: "Quattro S-Line", year: 2019,
    price: 5650000, status: "new_arrival",
    image: "/images/home/vehicle-audi-q5.webp",
    imageAlt: "2019 Audi Q5 S-Line in navarra blue metallic, parked in front of a modern architectural concrete wall, editorial automotive photography",
    mileageKm: 39400, transmission: "Automatic", fuelType: "Petrol", engineCc: 2000,
    photoCount: 8, isFeatured: false, isNewArrival: true,
  },
  {
    slug: "toyota-alphard-executive-lounge-2018",
    make: "Toyota", model: "Alphard", trim: "Executive Lounge", year: 2018,
    price: 6150000, status: "new_arrival",
    image: "/images/home/vehicle-toyota-alphard.webp",
    imageAlt: "2018 Toyota Alphard Executive Lounge in pearl white, parked at a private architectural residence, soft daylight, editorial automotive photography",
    mileageKm: 47000, transmission: "Automatic", fuelType: "Hybrid", engineCc: 2500,
    photoCount: 8, isFeatured: false, isNewArrival: true,
  },
];

// MOCK: hero search options shown in the Home search card (design sample content).
export const searchOptions = {
  makes: ["Toyota", "Lexus", "Mercedes-Benz", "Land Rover", "BMW", "Mazda"],
  models: ["Land Cruiser Prado", "RX 350", "GLE 350d", "Defender 110", "CX-5"],
  maxPrices: [3000000, 5000000, 8000000, 15000000],
  bodyTypes: ["SUV", "Sedan", "Hatchback", "Pickup", "Van", "Luxury"],
} as const;

export const featuredVehicles = sampleVehicles.filter((v) => v.isFeatured);
export const newArrivals = sampleVehicles.filter((v) => v.isNewArrival);

// ---------------------------------------------------------------------------
// MOCK: Vehicles screen (DESIGN.md Screen 2) list contract. SAMPLE content
// mirrors the approved Stitch export (docs/design/vehicles-screen.json).
// `searchVehicleList` keeps the same result shape the backend
// features/vehicles/queries.ts must return so the swap is UI-invisible.
// ---------------------------------------------------------------------------

export type VehicleBodyType = "suv" | "sedan" | "pickup" | "hatchback" | "luxury" | "van";
export type VehicleFuelCategory = "petrol" | "diesel" | "hybrid" | "electric";
export type VehicleColourFamily = "black" | "white" | "silver" | "grey" | "navy" | "red" | "green";
export type VehicleTransmissionCategory = "automatic" | "manual";
export type VehicleSortValue = "newest" | "price-asc" | "price-desc" | "year-desc" | "mileage-asc";
export type VehicleViewValue = "grid" | "list";

export type VehicleListEntry = VehicleCardData & {
  bodyType: VehicleBodyType;
  modelFamily: string;
  fuelCategory: VehicleFuelCategory;
  colourFamily: VehicleColourFamily;
  transmissionCategory: VehicleTransmissionCategory;
  listedAt: string;
};

// MOCK: remove when backend ready. The design's 9 sample cards, verbatim.
export const vehicleListEntries: VehicleListEntry[] = [
  {
    slug: "toyota-land-cruiser-prado-tx-l-2021",
    make: "Toyota", model: "Land Cruiser Prado", trim: "TX-L Package", year: 2021,
    price: 7850000, status: "in_stock",
    image: "/images/vehicles/vehicle-land-cruiser-prado.webp",
    imageAlt: "Glossy dark metallic gray Toyota Land Cruiser Prado TX-L parked in an architectural showroom with subtle warm spotlights, polished concrete floor, and minimal aesthetic.",
    mileageKm: 38000, transmission: "Automatic", fuelType: "Diesel (2.8L)", engineCc: 2800,
    drive: "4WD Full-Time", photoCount: 12,
    bodyType: "suv", modelFamily: "Land Cruiser Prado", fuelCategory: "diesel",
    colourFamily: "grey", transmissionCategory: "automatic", listedAt: "2026-11-20",
  },
  {
    slug: "lexus-rx-350-f-sport-2020",
    make: "Lexus", model: "RX 350 F-Sport", trim: "AWD Panoramic", year: 2020,
    price: 6400000, status: "new_arrival",
    image: "/images/vehicles/vehicle-lexus-rx350.webp",
    imageAlt: "Pearl white Lexus RX 350 F-Sport luxury midsize SUV in an elegant architectural parking court, sharp chrome details, dramatic side lighting.",
    mileageKm: 42500, transmission: "8-Speed Auto", fuelType: "Petrol (3.5L V6)", engineCc: 3500,
    drive: "All-Wheel Drive", photoCount: 15,
    bodyType: "suv", modelFamily: "RX 350", fuelCategory: "petrol",
    colourFamily: "white", transmissionCategory: "automatic", listedAt: "2026-11-18",
  },
  {
    slug: "mercedes-benz-c200-amg-2019",
    make: "Mercedes-Benz", model: "C200 AMG", trim: "AMG Line Package", year: 2019,
    price: 4950000, status: "reserved",
    image: "/images/vehicles/vehicle-mercedes-c200.webp",
    imageAlt: "Obsidian black Mercedes-Benz C200 AMG Line sedan situated inside an ultra-clean minimalist gallery, soft atmospheric ambient glow reflecting off curves.",
    mileageKm: 51000, transmission: "9G-Tronic Auto", fuelType: "Petrol (1.5L Turbo)", engineCc: 1500,
    drive: "Rear-Wheel Drive", photoCount: 8,
    bodyType: "sedan", modelFamily: "C-Class", fuelCategory: "petrol",
    colourFamily: "black", transmissionCategory: "automatic", listedAt: "2026-11-15",
  },
  {
    slug: "land-rover-defender-110-d250-se-2022",
    make: "Land Rover", model: "Defender 110", trim: "D250 SE Edition", year: 2022,
    price: 14200000, status: "incoming",
    image: "/images/vehicles/vehicle-defender-110.webp",
    imageAlt: "Pangea Green Land Rover Defender 110 with satin finish and black contrast roof, shot in high-end automotive studio lighting against clean limestone walls.",
    mileageKm: 19000, transmission: "8-Speed Auto", fuelType: "Diesel (3.0L i6)", engineCc: 3000,
    drive: "AWD Terrain II", photoCount: 10,
    bodyType: "suv", modelFamily: "Defender 110", fuelCategory: "diesel",
    colourFamily: "green", transmissionCategory: "automatic", listedAt: "2026-11-12",
  },
  {
    slug: "bmw-x5-xdrive40i-m-sport-2021",
    make: "BMW", model: "X5 xDrive40i", trim: "M Sport Package", year: 2021,
    price: 9600000, status: "in_stock",
    image: "/images/vehicles/vehicle-bmw-x5.webp",
    imageAlt: "Mineral White BMW X5 xDrive40i M-Sport in contemporary luxury showroom environment with dark bronze accent panels and pristine light reflection.",
    mileageKm: 31000, transmission: "Steptronic Auto", fuelType: "Petrol (3.0L Turbo)", engineCc: 3000,
    drive: "xDrive AWD", photoCount: 14,
    bodyType: "suv", modelFamily: "X5", fuelCategory: "petrol",
    colourFamily: "white", transmissionCategory: "automatic", listedAt: "2026-11-10",
  },
  {
    slug: "audi-q7-55-tfsi-quattro-2020",
    make: "Audi", model: "Q7 55 TFSI Quattro", trim: "S-Line 7 Seats", year: 2020,
    price: 8250000, status: "new_arrival",
    image: "/images/vehicles/vehicle-audi-q7.webp",
    imageAlt: "Navarra Blue metallic Audi Q7 55 TFSI luxury 7-seater SUV on clean exhibition floor with subtle warm champagne ambient tones.",
    mileageKm: 44000, transmission: "Tiptronic Auto", fuelType: "Petrol (3.0L V6)", engineCc: 3000,
    drive: "Quattro AWD", photoCount: 11,
    bodyType: "suv", modelFamily: "Q7", fuelCategory: "petrol",
    colourFamily: "navy", transmissionCategory: "automatic", listedAt: "2026-11-08",
  },
  {
    slug: "subaru-outback-touring-2021",
    make: "Subaru", model: "Outback Touring", trim: "EyeSight Luxury", year: 2021,
    price: 4350000, status: "in_stock",
    image: "/images/vehicles/vehicle-subaru-outback.webp",
    imageAlt: "Crystal Black Silica Subaru Outback Touring luxury wagon parked in front of modern wood and glass facade, premium soft natural light.",
    mileageKm: 34000, transmission: "Lineartronic CVT", fuelType: "Petrol (2.5L Boxer)", engineCc: 2500,
    drive: "Symmetrical AWD", photoCount: 9,
    bodyType: "suv", modelFamily: "Outback", fuelCategory: "petrol",
    colourFamily: "black", transmissionCategory: "automatic", listedAt: "2026-11-05",
  },
  {
    slug: "porsche-macan-gts-2021",
    make: "Porsche", model: "Macan GTS", trim: "Sport Chrono", year: 2021,
    price: 11800000, status: "reserved",
    image: "/images/vehicles/vehicle-porsche-macan.webp",
    imageAlt: "Carmine Red Porsche Macan GTS performance crossover in pristine indoor studio with deep graphite contrast flooring and soft focus background.",
    mileageKm: 26000, transmission: "7-Speed PDK", fuelType: "Petrol (2.9L Twin-Turbo)", engineCc: 2900,
    drive: "AWD Porsche Traction", photoCount: 16,
    bodyType: "luxury", modelFamily: "Macan", fuelCategory: "petrol",
    colourFamily: "red", transmissionCategory: "automatic", listedAt: "2026-11-02",
  },
  {
    slug: "toyota-hilux-double-cab-adventure-2022",
    make: "Toyota", model: "Hilux Double Cab", trim: "Adventure Edition", year: 2022,
    price: 5750000, status: "in_stock",
    image: "/images/vehicles/vehicle-hilux.webp",
    imageAlt: "Silver Metallic Toyota Hilux Double Cab pickup truck in high-definition clean automotive showroom setting with precision reflections.",
    mileageKm: 33000, transmission: "Automatic", fuelType: "Diesel (2.8L D-4D)", engineCc: 2800,
    drive: "4WD High/Low", photoCount: 12,
    bodyType: "pickup", modelFamily: "Hilux", fuelCategory: "diesel",
    colourFamily: "silver", transmissionCategory: "automatic", listedAt: "2026-10-28",
  },
];

// MOCK: filter option lists shown in the Vehicles filter sidebar (design sample).
export const vehicleListFilterOptions = {
  makes: ["Toyota", "Mercedes-Benz", "Lexus", "Land Rover", "BMW", "Audi", "Porsche", "Subaru"],
  models: ["Land Cruiser Prado", "Hilux", "RX 350", "C-Class", "Defender 110", "X5"],
  bodyTypes: [
    { value: "suv", label: "SUV" },
    { value: "sedan", label: "Sedan" },
    { value: "pickup", label: "Pickup" },
    { value: "hatchback", label: "Hatchback" },
    { value: "luxury", label: "Luxury" },
    { value: "van", label: "Van" },
  ],
  transmissions: [
    { value: "automatic", label: "Automatic" },
    { value: "manual", label: "Manual" },
  ],
  fuelCategories: [
    { value: "petrol", label: "Petrol" },
    { value: "diesel", label: "Diesel" },
    { value: "hybrid", label: "Hybrid" },
    { value: "electric", label: "Electric" },
  ],
  colours: [
    { value: "black", label: "Black" },
    { value: "white", label: "Pearl White" },
    { value: "silver", label: "Silver Metallic" },
    { value: "grey", label: "Graphite Grey" },
    { value: "navy", label: "Navy Blue" },
    { value: "red", label: "Wine Red" },
  ],
  statuses: [
    { value: "in_stock", label: "In Stock (Nairobi)" },
    { value: "new_arrival", label: "New Arrival" },
    { value: "incoming", label: "Incoming Vessel" },
    { value: "reserved", label: "Reserved" },
  ],
} as const;

export const vehicleSortOptions: ReadonlyArray<{ value: VehicleSortValue; label: string }> = [
  { value: "newest", label: "Newest Arrivals" },
  { value: "price-asc", label: "Price: Low to High" },
  { value: "price-desc", label: "Price: High to Low" },
  { value: "year-desc", label: "Year: Newest" },
  { value: "mileage-asc", label: "Lowest Mileage" },
];

// Slider bounds for the price and year range filters (design sample values).
export const vehicleListBounds = {
  priceMin: 0,
  priceMax: 20000000,
  priceStep: 50000,
  yearMin: 2000,
  yearMax: 2026,
} as const;

export const VEHICLE_LIST_PAGE_SIZE = 9;

const multi = z
  .union([z.string(), z.array(z.string())])
  .optional()
  .transform((v) => (v === undefined ? [] : (Array.isArray(v) ? v : [v]).filter(Boolean)));

// MOCK: the search-param boundary for /vehicles. The backend owns the real
// schema in features/vehicles/schemas.ts; param names follow the assumed
// contract recorded in docs/TASKS.md (NEEDS-BACKEND entry).
export const vehicleListSearchSchema = z.object({
  make: z.string().optional(),
  model: z.string().optional(),
  body_type: multi,
  status: multi,
  transmission: multi,
  fuel: multi,
  colour: multi,
  min_price: z.coerce.number().int().min(0).optional(),
  max_price: z.coerce.number().int().min(0).optional(),
  year_from: z.coerce.number().int().min(1990).max(2100).optional(),
  year_to: z.coerce.number().int().min(1990).max(2100).optional(),
  sort: z.enum(["newest", "price-asc", "price-desc", "year-desc", "mileage-asc"]).catch("newest"),
  view: z.enum(["grid", "list"]).catch("grid"),
  page: z.coerce.number().int().min(1).catch(1),
});

export type VehicleListFilters = z.infer<typeof vehicleListSearchSchema>;

export type VehicleListResult = {
  items: VehicleListEntry[];
  total: number;
  page: number;
  pageCount: number;
  rangeStart: number;
  rangeEnd: number;
};

// MOCK: validate the raw Next.js searchParams at the boundary (AGENTS.md 7).
// Invalid input degrades to defaults instead of throwing at the UI.
export function parseVehicleListSearch(
  searchParams: Record<string, string | string[] | undefined>,
): VehicleListFilters {
  const parsed = vehicleListSearchSchema.safeParse(searchParams);
  return parsed.success ? parsed.data : vehicleListSearchSchema.parse({});
}

// MOCK: remove when backend ready. Same shape as the future
// features/vehicles/queries.ts list query.
export function searchVehicleList(filters: VehicleListFilters): VehicleListResult {
  const items = vehicleListEntries
    .filter((v) => {
      if (filters.make && v.make !== filters.make) return false;
      if (filters.model && v.modelFamily !== filters.model) return false;
      if (filters.body_type.length > 0 && !filters.body_type.includes(v.bodyType)) return false;
      if (filters.status.length > 0 && !filters.status.includes(v.status)) return false;
      if (filters.transmission.length > 0 && !filters.transmission.includes(v.transmissionCategory)) return false;
      if (filters.fuel.length > 0 && !filters.fuel.includes(v.fuelCategory)) return false;
      if (filters.colour.length > 0 && !filters.colour.includes(v.colourFamily)) return false;
      if (filters.min_price !== undefined && v.price < filters.min_price) return false;
      if (filters.max_price !== undefined && v.price > filters.max_price) return false;
      if (filters.year_from !== undefined && v.year < filters.year_from) return false;
      if (filters.year_to !== undefined && v.year > filters.year_to) return false;
      return true;
    })
    .sort((a, b) => {
      switch (filters.sort) {
        case "price-asc": return a.price - b.price;
        case "price-desc": return b.price - a.price;
        case "year-desc": return b.year - a.year;
        case "mileage-asc": return a.mileageKm - b.mileageKm;
        case "newest": return b.listedAt.localeCompare(a.listedAt);
      }
    });

  const total = items.length;
  const pageCount = Math.max(1, Math.ceil(total / VEHICLE_LIST_PAGE_SIZE));
  const page = Math.min(filters.page, pageCount);
  const start = (page - 1) * VEHICLE_LIST_PAGE_SIZE;
  const pageItems = items.slice(start, start + VEHICLE_LIST_PAGE_SIZE);
  return {
    items: pageItems,
    total,
    page,
    pageCount,
    rangeStart: total === 0 ? 0 : start + 1,
    rangeEnd: start + pageItems.length,
  };
}

// MOCK: compact slider-label formatting as drawn in the design ("2.5M").
// Full currency amounts always go through formatCurrency (lib/format).
export function formatMillions(value: number): string {
  return `${(value / 1000000).toFixed(1)}M`;
}

// Rebuild the /vehicles query string with overridden params (used by filter
// chips, pagination and the sort dropdown links). Callers pass
// `page: undefined` in overrides to reset pagination on filter changes.
export function buildVehicleListQuery(
  filters: VehicleListFilters,
  overrides: Partial<Record<string, string | number | string[] | undefined>>,
): string {
  const next: Record<string, string | number | string[]> = {};
  const set = (key: string, value: string | number | undefined) => {
    if (value !== undefined && value !== "" && value !== 0) next[key] = value;
  };
  set("make", filters.make);
  set("model", filters.model);
  if (filters.body_type.length > 0) next.body_type = filters.body_type;
  if (filters.status.length > 0) next.status = filters.status;
  if (filters.transmission.length > 0) next.transmission = filters.transmission;
  if (filters.fuel.length > 0) next.fuel = filters.fuel;
  if (filters.colour.length > 0) next.colour = filters.colour;
  set("min_price", filters.min_price);
  set("max_price", filters.max_price);
  set("year_from", filters.year_from);
  set("year_to", filters.year_to);
  if (filters.sort !== "newest") next.sort = filters.sort;
  if (filters.view !== "grid") next.view = filters.view;
  if (filters.page > 1) next.page = filters.page;

  for (const [key, value] of Object.entries(overrides)) {
    if (value === undefined || value === "" || value === 0) delete next[key];
    else next[key] = value;
  }

  const params = new URLSearchParams();
  for (const [key, value] of Object.entries(next)) {
    if (Array.isArray(value)) for (const v of value) params.append(key, v);
    else params.set(key, String(value));
  }
  const qs = params.toString();
  return qs ? `?${qs}` : "";
}
