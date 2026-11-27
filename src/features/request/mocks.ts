// MOCK: Request a Vehicle screen sample data — clearly labelled placeholder
// content per DESIGN.md Section 0.7 and AGENTS.md Section 2.4, mirroring the
// approved Stitch export (docs/design/request-vehicle.json). Replace with the
// vehicle-request contract when the backend lands.

export const requestConfirmation = {
  trackingCode: "REQ-2024-SRC-449",
  nextSteps: [
    {
      number: "1",
      eyebrow: "Concierge Allocation",
      title: "Alex Kariuki",
      description: "Senior Global Acquisition Specialist assigned to review spec tolerances.",
    },
    {
      number: "2",
      eyebrow: "24-Hour Matching",
      title: "Auction & Local Audit",
      description: "Live inventory check across Tokyo, Yokohama, London, and bonded depots.",
    },
    {
      number: "3",
      eyebrow: "Dossier Dispatch",
      title: "WhatsApp Notification",
      description: "Comprehensive photos, auction sheet translation, and landed CIF quote.",
    },
  ],
} as const;

export const requestRecentSourced = [
  {
    title: "2021 Land Cruiser LC300 ZX",
    source: "Sourced from Tokyo Auction • Grade 5A",
    delivery: "Delivered to Karen, NBO",
    image: "/images/request-vehicle/vehicle-lc300-zx.webp",
    imageAlt: "Glossy black 2021 Toyota Land Cruiser 300 ZX parked in a modern minimalist architectural showroom with warm ambient light, high dynamic range automotive photography, showing pristine metallic paintwork.",
  },
  {
    title: "2020 Range Rover Sport HSE",
    source: "Sourced from UK Franchise • 1 Owner",
    delivery: "Delivered to Muthaiga, NBO",
    image: "/images/request-vehicle/vehicle-range-rover-sport.webp",
    imageAlt: "Carpathian Grey 2020 Range Rover Sport HSE Dynamic with stealth black pack and panoramic roof parked against an executive glass office building in Westlands Nairobi, professional lighting.",
  },
] as const;
