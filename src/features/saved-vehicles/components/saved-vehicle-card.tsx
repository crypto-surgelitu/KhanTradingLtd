import Image from "next/image";
import Link from "next/link";
import { Fuel, Gauge, MessageCircle, Settings2, Wrench } from "lucide-react";
import { formatCurrency } from "@/lib/format";
import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button";
import { StatusBadge } from "@/components/shared/status-badge";
import { siteConfig } from "@/config/site";
import { CompareToggle } from "@/features/saved-vehicles/components/compare-toggle";
import { RemoveSavedButton } from "@/features/saved-vehicles/components/remove-saved-button";
import type { SavedVehicle } from "@/features/saved-vehicles/mocks";

type SavedVehicleCardProps = {
  vehicle: SavedVehicle;
};

const specItems = (vehicle: SavedVehicle) => [
  { icon: Gauge, value: `${vehicle.mileageKm.toLocaleString("en-KE")} km`, label: "Mileage" },
  { icon: Settings2, value: vehicle.transmission, label: "Transmission" },
  { icon: Fuel, value: vehicle.fuelType, label: "Fuel type" },
  { icon: Wrench, value: `${vehicle.engineCc.toLocaleString("en-KE")} cc`, label: "Engine size" },
];

// DESIGN.md Section 4 vehicle card adapted for the saved shortlist: 4:3 media,
// status badge, remove-from-saved action, compare toggle, stock number, spec
// grid and the card footer actions.
export function SavedVehicleCard({ vehicle }: SavedVehicleCardProps) {
  return (
    <article className="group flex w-full flex-col overflow-hidden rounded-md border border-stone bg-white transition-all hover:border-ink/12 hover:shadow-md motion-reduce:transition-none">
      <div className="relative aspect-card overflow-hidden bg-ivory">
        <Image
          src={vehicle.image}
          alt={vehicle.imageAlt}
          fill
          sizes="(min-width: 1024px) 400px, (min-width: 768px) 50vw, calc(100vw - 32px)"
          className="object-cover motion-safe:transition-transform motion-safe:duration-300 motion-safe:ease-design motion-safe:group-hover:scale-103"
        />
        <StatusBadge
          status={vehicle.isNewArrival ? "new_arrival" : vehicle.status}
          className="absolute top-3 left-3 shadow-sm"
        />
        <RemoveSavedButton vehicleTitle={vehicle.title} />
        <CompareToggle vehicleTitle={vehicle.title} defaultChecked={vehicle.isCompareSelected} />
        <span className="absolute right-3 bottom-3 rounded-sm bg-ink/70 px-2 py-0.5 font-body text-caption text-white">
          Stock #{vehicle.stockNumber}
        </span>
      </div>

      <div className="flex flex-1 flex-col p-4 lg:p-5">
        <div className="flex flex-wrap items-center justify-between gap-2 font-body text-small text-slate">
          <span>{vehicle.modelLine}</span>
          <span
            className={cn(
              vehicle.metaNoteTone === "warning" ? "font-medium text-warning" : "text-mist",
            )}
          >
            {vehicle.metaNote}
          </span>
        </div>

        <h3 className="mt-2 font-heading text-h3 text-ink lg:text-h3-lg">{vehicle.title}</h3>
        <p className="mt-1 font-body text-small text-slate">{vehicle.summary}</p>

        <p className="pt-3 font-heading text-price font-semibold text-ink">
          {formatCurrency(vehicle.price)}
        </p>

        <div className="mt-5 rounded-sm bg-ivory p-3">
          <ul className="grid grid-cols-2 gap-x-3 gap-y-2">
            {specItems(vehicle).map((spec) => (
              <li key={spec.label} className="flex items-center gap-2 font-body text-small text-slate">
                <spec.icon aria-hidden="true" className="size-5 shrink-0" strokeWidth={1.5} />
                <span>
                  <span className="sr-only">{spec.label}: </span>
                  {spec.value}
                </span>
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-auto flex items-center gap-2 pt-5">
          <Link
            href={`/vehicles/${vehicle.slug}`}
            className={buttonVariants({ variant: "secondary", className: "flex-1" })}
          >
            View details
          </Link>
          <a
            href={siteConfig.links.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`Enquire about ${vehicle.title} on WhatsApp`}
            className={buttonVariants({ variant: "iconLight", size: "icon" })}
          >
            <MessageCircle aria-hidden="true" className="size-5" strokeWidth={1.5} />
          </a>
        </div>
      </div>
    </article>
  );
}
