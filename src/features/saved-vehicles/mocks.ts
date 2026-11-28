import type { VehicleStatus } from "@/components/shared/status-badge";

// MOCK: remove when backend ready — SAMPLE saved-list data replicating the
// Stitch export (Saved Vehicles screen). No fetching or persistence lives
// here on purpose: the real saved-list wiring (account sync / queries) goes
// in features/vehicles queries + actions once the backend contract lands
// (docs/TASKS.md, NEEDS-BACKEND: saved vehicles list).

export type SavedVehicle = {
  id: string;
  slug: string;
  title: string;
  modelLine: string;
  metaNote: string;
  metaNoteTone: "mist" | "warning";
  summary: string;
  price: number;
  status: VehicleStatus;
  isNewArrival: boolean;
  stockNumber: string;
  image: string;
  imageAlt: string;
  thumb: string;
  thumbAlt: string;
  mileageKm: number;
  transmission: string;
  fuelType: string;
  engineCc: number;
  compareLabel: string;
  isCompareSelected: boolean;
};

export const savedVehicles: SavedVehicle[] = [
  {
    id: "kt-7182",
    slug: "toyota-land-cruiser-prado-tz-g-2019",
    title: "2019 Toyota Land Cruiser Prado TZ-G",
    modelLine: "2019 Model",
    metaNote: "[KRA Verified]",
    metaNoteTone: "mist",
    summary: "2.8L Turbo Diesel · Full Leather Interior",
    price: 7650000,
    status: "in_stock",
    isNewArrival: false,
    stockNumber: "KT-7182",
    image: "/images/saved-vehicles/vehicle-1.webp",
    imageAlt:
      "Pearl white 2019 Toyota Land Cruiser Prado TZ-G SUV parked in a minimalist showroom with soft architectural lighting and dark gloss flooring",
    thumb: "/images/saved-vehicles/thumb-1.webp",
    thumbAlt:
      "Close-up of a pearl white 2019 Toyota Land Cruiser Prado TZ-G front end with LED headlights on",
    mileageKm: 44500,
    transmission: "Automatic",
    fuelType: "Diesel",
    engineCc: 2755,
    compareLabel: "2019 Prado TZ-G",
    isCompareSelected: true,
  },
  {
    id: "kt-3008",
    slug: "toyota-land-cruiser-300-zx-2021",
    title: "2021 Land Cruiser 300 ZX",
    modelLine: "2021 Model",
    metaNote: "Executive Flagship",
    metaNoteTone: "mist",
    summary: "3.3L Twin-Turbo Diesel · JBL Sound System",
    price: 19800000,
    status: "in_stock",
    isNewArrival: false,
    stockNumber: "KT-3008",
    image: "/images/saved-vehicles/vehicle-2.webp",
    imageAlt:
      "Metallic black 2021 Toyota Land Cruiser 300 ZX under moody studio floodlights with dramatic highlights along the side body",
    thumb: "/images/saved-vehicles/thumb-2.webp",
    thumbAlt:
      "Front quarter view of a metallic black 2021 Toyota Land Cruiser 300 ZX",
    mileageKm: 18200,
    transmission: "10-Speed Auto",
    fuelType: "Diesel",
    engineCc: 3346,
    compareLabel: "2021 Land Cruiser 300 ZX",
    isCompareSelected: true,
  },
  {
    id: "kt-9011",
    slug: "mercedes-benz-gle-300d-amg-line-2020",
    title: "2020 Mercedes-Benz GLE 300d",
    modelLine: "2020 Model",
    metaNote: "Deposit pending",
    metaNoteTone: "warning",
    summary: "AMG Line 4MATIC · Premium Plus Package",
    price: 10200000,
    status: "reserved",
    isNewArrival: false,
    stockNumber: "KT-9011",
    image: "/images/saved-vehicles/vehicle-3.webp",
    imageAlt:
      "Obsidian black 2020 Mercedes-Benz GLE 300d AMG Line luxury SUV angled outdoors against an upscale modern glass pavilion",
    thumb: "/images/saved-vehicles/vehicle-3.webp",
    thumbAlt: "Obsidian black 2020 Mercedes-Benz GLE 300d AMG Line luxury SUV",
    mileageKm: 32000,
    transmission: "9G-Tronic",
    fuelType: "Diesel",
    engineCc: 1950,
    compareLabel: "2020 Mercedes-Benz GLE 300d",
    isCompareSelected: false,
  },
  {
    id: "kt-5701",
    slug: "lexus-lx570-v8-2020",
    title: "2020 Lexus LX570 V8",
    modelLine: "2020 Model",
    metaNote: "[Direct Japan Import]",
    metaNoteTone: "mist",
    summary: "5.7L Petrol V8 · Mark Levinson Reference Audio",
    price: 18200000,
    status: "in_stock",
    isNewArrival: false,
    stockNumber: "KT-5701",
    image: "/images/saved-vehicles/vehicle-4.webp",
    imageAlt:
      "White pearl 2020 Lexus LX570 V8 in an architectural courtyard with warm golden hour reflections on the spindle grille",
    thumb: "/images/saved-vehicles/vehicle-4.webp",
    thumbAlt: "White pearl 2020 Lexus LX570 V8 luxury SUV",
    mileageKm: 26400,
    transmission: "8-Speed Auto",
    fuelType: "Petrol",
    engineCc: 5663,
    compareLabel: "2020 Lexus LX570 V8",
    isCompareSelected: false,
  },
  {
    id: "kt-2180",
    slug: "toyota-harrier-g-leather-2021",
    title: "2021 Toyota Harrier G Leather",
    modelLine: "2021 Model",
    metaNote: "Self-Charging Hybrid",
    metaNoteTone: "mist",
    summary: "2.5L Hybrid E-Four · Digital Rearview Mirror",
    price: 5200000,
    status: "in_stock",
    isNewArrival: true,
    stockNumber: "KT-2180",
    image: "/images/saved-vehicles/vehicle-5.webp",
    imageAlt:
      "Deep navy blue 2021 Toyota Harrier G Leather Package crossover in a minimalist presentation garage with soft overhead downlights",
    thumb: "/images/saved-vehicles/vehicle-5.webp",
    thumbAlt: "Deep navy blue 2021 Toyota Harrier G Leather crossover",
    mileageKm: 19800,
    transmission: "e-CVT",
    fuelType: "Hybrid",
    engineCc: 2487,
    compareLabel: "2021 Toyota Harrier G Leather",
    isCompareSelected: false,
  },
  {
    id: "kt-9914",
    slug: "porsche-cayenne-turbo-2018",
    title: "2018 Porsche Cayenne Turbo",
    modelLine: "2018 Model",
    metaNote: "[Inspection Complete]",
    metaNoteTone: "mist",
    summary: "4.0L V8 Twin-Turbo · Chrono Sports Package",
    price: 9250000,
    status: "in_stock",
    isNewArrival: false,
    stockNumber: "KT-9914",
    image: "/images/saved-vehicles/vehicle-6.webp",
    imageAlt:
      "Dolomite silver 2018 Porsche Cayenne Turbo in a clean architectural gallery showroom with 21-inch RS Spyder wheels",
    thumb: "/images/saved-vehicles/vehicle-6.webp",
    thumbAlt: "Dolomite silver 2018 Porsche Cayenne Turbo luxury SUV",
    mileageKm: 51000,
    transmission: "8-Speed Tiptronic",
    fuelType: "Petrol",
    engineCc: 3996,
    compareLabel: "2018 Porsche Cayenne Turbo",
    isCompareSelected: false,
  },
];
