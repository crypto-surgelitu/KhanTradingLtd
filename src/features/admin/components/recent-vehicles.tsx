import Image from "next/image";
import { AdminSectionHeader } from "@/features/admin/components/admin-section-header";
import { StatusBadge } from "@/components/shared/status-badge";
import { recentVehicles } from "@/features/admin/mocks";

// DESIGN.md Screen B recently added vehicles: showroom update cards with the
// real photography from the approved export.

export function RecentVehicles() {
  return (
    <section aria-label="Recently added vehicles" className="pb-12">
      <AdminSectionHeader
        title="Recently added vehicles"
        caption="Showroom updates"
        viewAllHref="/admin/vehicles"
        viewAllLabel="Inventory catalog"
      />

      <ul className="grid grid-cols-1 gap-6 sm:grid-cols-2 xl:grid-cols-4">
        {recentVehicles.map((vehicle) => (
          <li key={vehicle.title}>
            <article className="group h-full overflow-hidden rounded-md border border-stone bg-white">
              <div className="relative aspect-video overflow-hidden">
                <Image
                  src={vehicle.image}
                  alt={vehicle.imageAlt}
                  fill
                  sizes="(min-width: 1280px) 240px, (min-width: 640px) 45vw, calc(100vw - 32px)"
                  className="object-cover motion-safe:transition-transform motion-safe:duration-300 motion-safe:ease-design motion-safe:group-hover:scale-103"
                />
              </div>
              <div className="flex flex-col gap-2 p-4">
                <h3 className="font-heading text-h3 lg:text-h3-lg">{vehicle.title}</h3>
                <p className="font-body text-small text-slate">
                  {vehicle.specs.join(" • ")}
                </p>
                <p className="font-heading text-price tabular-nums text-ink">
                  {vehicle.price}
                </p>
                <p className="font-body text-caption text-mist">{vehicle.note}</p>
                <StatusBadge status={vehicle.status} className="self-start" />
              </div>
            </article>
          </li>
        ))}
      </ul>
    </section>
  );
}
