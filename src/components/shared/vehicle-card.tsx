import Image from "next/image";
import Link from "next/link";
import { Fuel, Gauge, Heart, MessageCircle, Settings2, Wrench } from "lucide-react";
import { formatCurrency } from "@/lib/format";
import { cn } from "@/lib/utils";
import { Button, buttonVariants } from "@/components/ui/button";
import { StatusBadge, type VehicleStatus } from "@/components/shared/status-badge";

// Data shape for the card. The backend contract (features/vehicles/types.ts)
// replaces this once the schema lands; kept minimal on purpose.
export type VehicleCardData = {
  slug: string;
  make: string;
  model: string;
  trim: string;
  year: number;
  price: number;
  status: VehicleStatus;
  image: string;
  imageAlt: string;
  mileageKm: number;
  transmission: string;
  fuelType: string;
  engineCc: number;
  photoCount: number;
};

type VehicleCardProps = {
  vehicle: VehicleCardData;
  priority?: boolean;
};

const specItems = (vehicle: VehicleCardData) => [
  { icon: Gauge, value: `${vehicle.mileageKm.toLocaleString("en-KE")} km`, label: "Mileage" },
  { icon: Settings2, value: vehicle.transmission, label: "Transmission" },
  { icon: Fuel, value: vehicle.fuelType, label: "Fuel type" },
  { icon: Wrench, value: `${vehicle.engineCc.toLocaleString("en-KE")} cc`, label: "Engine size" },
];

// DESIGN.md Section 4 vehicle card: 4:3 media, status badge top-left, save
// button top-right, photo counter bottom-right, spec row, card footer actions.
export function VehicleCard({ vehicle, priority = false }: VehicleCardProps) {
  return (
    <article className="group flex flex-col overflow-hidden rounded-md border border-stone bg-white transition-all hover:border-ink/12 hover:shadow-md motion-reduce:transition-none">
      <div className="relative aspect-card overflow-hidden">
        <Image
          src={vehicle.image}
          alt={vehicle.imageAlt}
          fill
          priority={priority}
          sizes="(min-width: 1280px) 296px, (min-width: 768px) 45vw, calc(100vw - 32px)"
          className="object-cover motion-safe:transition-transform motion-safe:duration-300 motion-safe:ease-design motion-safe:group-hover:scale-103"
        />
        <StatusBadge
          status={vehicle.status}
          className="absolute top-3 left-3 shadow-sm"
        />
        <Button
          variant="iconLight"
          size="icon"
          aria-label={`Save ${vehicle.make} ${vehicle.model}`}
          className="absolute top-3 right-3"
        >
          <Heart aria-hidden="true" className="size-5" strokeWidth={1.5} />
        </Button>
        <span className="absolute right-3 bottom-3 rounded-full bg-ink/70 px-2 py-0.5 font-body text-caption text-white">
          1/{vehicle.photoCount}
        </span>
      </div>

      <div className="flex flex-1 flex-col gap-3 p-4 lg:p-5">
        <div>
          <h3 className="truncate font-heading text-h3 lg:text-h3-lg">
            {vehicle.make} {vehicle.model}
          </h3>
          <p className="font-body text-small text-slate">
            {vehicle.trim} · {vehicle.year}
          </p>
        </div>
        <p className="font-heading text-price tabular-nums">
          {formatCurrency(vehicle.price)}
        </p>
        <div className="grid grid-cols-2 gap-x-4 gap-y-2 border-t border-stone pt-3">
          {specItems(vehicle).map((spec) => (
            <p
              key={spec.label}
              className="flex items-center gap-2 font-body text-small text-slate"
            >
              <spec.icon
                aria-hidden="true"
                className="size-5 shrink-0 text-mist"
                strokeWidth={1.5}
              />
              {spec.value}
            </p>
          ))}
        </div>
        <div className="mt-auto flex items-center gap-2 pt-2">
          <Link
            href={`/vehicles/${vehicle.slug}`}
            className={buttonVariants({ variant: "secondary" }) + " flex-1"}
          >
            View details
          </Link>
          <a
            href="https://wa.me/[WHATSAPP]"
            aria-label={`Enquire about ${vehicle.make} ${vehicle.model} on WhatsApp`}
            className={cn(
              buttonVariants({ variant: "primary", size: "icon" }),
              "rounded-sm",
            )}
          >
            <MessageCircle aria-hidden="true" className="size-5" strokeWidth={1.5} />
          </a>
        </div>
      </div>
    </article>
  );
}
