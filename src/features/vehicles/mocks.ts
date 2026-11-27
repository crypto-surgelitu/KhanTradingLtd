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
