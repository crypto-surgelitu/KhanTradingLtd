"use client";

import Image from "next/image";
import {
  Bold,
  Car,
  ChevronDown,
  Eraser,
  Eye,
  GripVertical,
  Images,
  Italic,
  List,
  ListPlus,
  PenLine,
  Plus,
  SlidersHorizontal,
  Star,
  Trash2,
  Upload,
  UploadCloud,
  X,
} from "lucide-react";
import { Button } from "@/components/ui/button";

// DESIGN.md Section 8 Admin Screen D — Add Vehicle form. The single client
// leaf for this screen: file-upload UI, selects and dynamic fields. The page
// around it stays a Server Component. All state below is the export's
// designed demo state (SAMPLE) — no data is submitted anywhere yet.
// TODO(KHANS TRADING Ltd / backend): wire to the vehicle create/update
// server action in features/vehicles/actions.ts (docs/TASKS.md).

const inputClasses =
  "h-12 w-full rounded-sm border border-stone bg-white px-4 font-body text-body text-ink shadow-sm transition-colors placeholder:text-mist focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ink";

const labelClasses = "font-body text-small font-medium text-ink";

function Field({
  label,
  htmlFor,
  required = false,
  children,
  className = "",
}: {
  label: string;
  htmlFor: string;
  required?: boolean;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div className={`flex flex-col gap-2 ${className}`}>
      <label htmlFor={htmlFor} className={labelClasses}>
        {label}
        {required ? <span aria-hidden="true" className="text-danger"> *</span> : null}
      </label>
      {children}
    </div>
  );
}

function SelectField({
  label,
  id,
  options,
  required = false,
  defaultValue,
  className = "",
}: {
  label: string;
  id: string;
  options: readonly string[];
  required?: boolean;
  defaultValue?: string;
  className?: string;
}) {
  return (
    <Field label={label} htmlFor={id} required={required} className={className}>
      <div className="relative">
        <select
          id={id}
          name={id}
          defaultValue={defaultValue ?? options[0]}
          className={`${inputClasses} appearance-none pr-10`}
        >
          {options.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
        <ChevronDown
          aria-hidden="true"
          className="pointer-events-none absolute right-3 top-1/2 size-5 -translate-y-1/2 text-slate"
          strokeWidth={1.5}
        />
      </div>
    </Field>
  );
}

function ToggleRow({
  id,
  title,
  description,
  icon: Icon,
  defaultChecked = false,
}: {
  id: string;
  title: string;
  description: string;
  icon?: React.ElementType;
  defaultChecked?: boolean;
}) {
  return (
    <div className="flex items-start justify-between gap-4 rounded-md border border-stone bg-white p-4">
      <div className="flex flex-col gap-1">
        <label htmlFor={id} className="flex items-center gap-2 font-body text-small font-medium text-ink">
          {Icon ? <Icon aria-hidden="true" className="size-5 text-champagne" strokeWidth={1.5} /> : null}
          {title}
        </label>
        <p className="font-body text-caption text-slate">{description}</p>
      </div>
      <input
        id={id}
        name={id}
        type="checkbox"
        role="switch"
        defaultChecked={defaultChecked}
        className="mt-1 size-5 shrink-0 rounded-full border-stone accent-ink"
      />
    </div>
  );
}

function SectionCard({
  icon: Icon,
  title,
  description,
  aside,
  children,
}: {
  icon: React.ElementType;
  title: string;
  description: string;
  aside?: React.ReactNode;
  children: React.ReactNode;
}) {
  return (
    <section className="flex flex-col gap-6 rounded-md border border-stone bg-white p-6 lg:p-8">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <div className="flex items-start gap-3">
          <Icon aria-hidden="true" className="size-6 shrink-0 text-champagne" strokeWidth={1.5} />
          <div className="flex flex-col gap-1">
            <h2 className="font-heading text-h3 lg:text-h3-lg">{title}</h2>
            <p className="font-body text-small text-slate">{description}</p>
          </div>
        </div>
        {aside}
      </div>
      {children}
    </section>
  );
}

// Designed demo gallery state from the export (SAMPLE).
const demoPhotos = [
  {
    src: "/images/admin-add-vehicle/prado-front.webp",
    alt: "Prestigious white Toyota Land Cruiser Prado front three quarter luxury studio photography, pristine clean reflections, dramatic architectural rim lighting, neutral studio floor, professional automotive catalog asset",
    cover: true,
  },
  {
    src: "/images/admin-add-vehicle/prado-rear.webp",
    alt: "Rear profile three quarter view of white luxury SUV showing clean taillights and badging in sharp focus with subtle ambient lighting, professional showroom photography",
    cover: false,
  },
  {
    src: "/images/admin-add-vehicle/interior-cabin.webp",
    alt: "Interior luxury cabin view focusing on black stitched leather dashboard, central touch infotainment display, fine wood trim and steering wheel, high resolution editorial car interior",
    cover: false,
  },
  {
    src: "/images/admin-add-vehicle/alloy-wheel.webp",
    alt: "Close up macro shot of dual-tone multi-spoke alloy wheel with high performance tire and visible pristine brake calliper, clean studio lighting",
    cover: false,
  },
];

const featureOptions = [
  "Sunroof / Panoramic Roof",
  "Leather Upholstery",
  "360-Degree Camera System",
  "Apple CarPlay & Android Auto",
  "Adaptive Cruise Control",
  "Heated & Ventilated Seats",
  "Keyless Entry & Push Start",
  "Third Row Power Folding",
  "LED Matrix Headlights",
  "Premium Audio (JBL / Burmester)",
  "Lane Departure Warning",
  "Tow Hitch & Roof Rails",
];

export function AddVehicleForm() {
  return (
    <form className="flex flex-col gap-8" noValidate>
      <SectionCard
        icon={Car}
        title="Basic Information"
        description="Core identity, naming, and customer-facing pricing."
      >
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          <SelectField
            label="Make"
            id="vehicle-make"
            required
            options={["Toyota", "Land Rover", "Mercedes-Benz", "BMW", "Porsche", "Audi", "Lexus"]}
          />
          <Field label="Model" htmlFor="vehicle-model" required>
            <input id="vehicle-model" name="model" type="text" required className={inputClasses} />
          </Field>
          <Field label="Trim / Edition" htmlFor="vehicle-trim">
            <input id="vehicle-trim" name="trim" type="text" className={inputClasses} />
          </Field>
          <SelectField
            label="Year of Manufacture"
            id="vehicle-year"
            required
            options={["2024", "2023", "2022", "2021", "2020", "2019", "2018"]}
          />
          <SelectField
            label="Body Type"
            id="vehicle-body-type"
            required
            options={["SUV", "Sedan", "Hatchback", "Pickup", "Van", "Luxury Saloon"]}
          />
          <Field label="Asking Price (KSh)" htmlFor="vehicle-price" required>
            <div className="relative">
              <span
                aria-hidden="true"
                className="absolute left-4 top-1/2 -translate-y-1/2 font-body text-body text-slate"
              >
                KSh
              </span>
              <input
                id="vehicle-price"
                name="price"
                type="text"
                inputMode="numeric"
                required
                aria-invalid="true"
                aria-describedby="vehicle-price-error"
                className={`${inputClasses} border-danger pl-14`}
              />
            </div>
            <p id="vehicle-price-error" className="flex flex-col gap-1 font-body text-small text-danger">
              <span className="font-medium">Invalid amount</span>
              Please enter a valid asking price greater than KSh 500,000 or
              toggle &quot;Price on request&quot;.
            </p>
          </Field>
        </div>

        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          <ToggleRow
            id="vehicle-price-on-request"
            title="Price on request"
            description="Hides numeric price and displays 'Ask for price' to customers"
          />
          <ToggleRow
            id="vehicle-negotiable"
            title="Negotiable"
            description="Indicates price flexibility in vehicle details"
          />
        </div>
      </SectionCard>

      <SectionCard
        icon={SlidersHorizontal}
        title="Technical Specifications"
        description="Verified mechanical parameters and physical configuration."
      >
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          <Field label="Mileage (km)" htmlFor="vehicle-mileage">
            <input id="vehicle-mileage" name="mileage" type="text" inputMode="numeric" className={inputClasses} />
          </Field>
          <SelectField
            label="Transmission"
            id="vehicle-transmission"
            options={["Automatic", "Manual", "Dual-Clutch / PDK", "CVT"]}
          />
          <SelectField
            label="Fuel Type"
            id="vehicle-fuel"
            options={["Diesel", "Petrol", "Hybrid", "Electric"]}
          />
          <Field label="Engine Size (cc)" htmlFor="vehicle-engine">
            <input id="vehicle-engine" name="engine" type="text" inputMode="numeric" className={inputClasses} />
          </Field>
          <SelectField
            label="Drivetrain"
            id="vehicle-drivetrain"
            options={["4WD", "AWD", "2WD (RWD)", "2WD (FWD)"]}
          />
          <Field label="Exterior Colour" htmlFor="vehicle-colour">
            <input id="vehicle-colour" name="colour" type="text" className={inputClasses} />
          </Field>
          <SelectField
            label="Number of Seats"
            id="vehicle-seats"
            options={["2 Seats", "4 Seats", "5 Seats", "7 Seats", "8 Seats"]}
          />
          <SelectField
            label="Number of Doors"
            id="vehicle-doors"
            options={["2 Doors", "4 Doors", "5 Doors"]}
          />
        </div>
      </SectionCard>

      <SectionCard
        icon={Eye}
        title="Status & Public Visibility"
        description="Manage inventory state, catalog placement, and highlight tags."
      >
        <SelectField
          label="Listing Status"
          id="vehicle-status"
          options={[
            "In Stock (Available for Viewing & Sale)",
            "Reserved (Deposit Received)",
            "Sold (Archived Deal)",
            "Incoming (In Transit / High Seas)",
          ]}
        />
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          <ToggleRow
            id="vehicle-featured"
            icon={Star}
            title="Featured on Homepage"
            description="Showcase in the curated 8-vehicle carousel on the main landing page"
          />
          <ToggleRow
            id="vehicle-new-arrival"
            title="New Arrival Badge"
            description="Display high-contrast 'New Arrival' badge across listings for 14 days"
          />
        </div>
      </SectionCard>

      <SectionCard
        icon={Images}
        title="Photos & Documentation"
        description="High-resolution 4:3 exterior, interior, and detail shots. Minimum 12 photos recommended."
        aside={
          <span className="inline-flex items-center rounded-full bg-stone/40 px-2.5 py-1 font-body text-caption text-slate">
            5 of 12 uploaded
          </span>
        }
      >
        <div className="flex flex-col items-center gap-2 rounded-md border-2 border-dashed border-stone px-6 py-10 text-center">
          <UploadCloud aria-hidden="true" className="size-8 text-mist" strokeWidth={1.5} />
          <p className="font-body text-body text-ink">
            Drag &amp; drop high-res photos here, or{" "}
            <button
              type="button"
              className="font-body text-body font-medium text-ink underline decoration-champagne decoration-1 underline-offset-4 transition-colors hover:text-champagne-dark"
            >
              browse files
            </button>
          </p>
          <p className="font-body text-caption text-slate">
            Supports JPG, PNG, WEBP up to 25MB each. First photo will be
            assigned as primary cover.
          </p>
        </div>

        <ul className="grid grid-cols-2 gap-4 md:grid-cols-4">
          {demoPhotos.map((photo) => (
            <li key={photo.src} className="relative overflow-hidden rounded-md border border-stone">
              <div className="relative aspect-card">
                <Image
                  src={photo.src}
                  alt={photo.alt}
                  fill
                  sizes="(min-width: 768px) 25vw, 50vw"
                  className="object-cover"
                />
                <span
                  aria-hidden="true"
                  className="absolute left-2 top-2 flex size-8 items-center justify-center rounded-full bg-white/90 text-slate"
                >
                  <GripVertical className="size-4" strokeWidth={1.5} />
                </span>
                <button
                  type="button"
                  aria-label={`Remove ${photo.alt.split(" ").slice(0, 3).join(" ")} photo`}
                  className="absolute right-2 top-2 flex size-8 items-center justify-center rounded-full bg-white/90 text-slate transition-colors hover:text-danger"
                >
                  <Trash2 aria-hidden="true" className="size-4" strokeWidth={1.5} />
                </button>
              </div>
              <div className="p-2">
                {photo.cover ? (
                  <span className="inline-flex items-center rounded-full bg-ink px-2.5 py-1 font-body text-caption text-white">
                    Cover
                  </span>
                ) : (
                  <button
                    type="button"
                    className="min-h-11 rounded-sm border border-ink px-3 font-body text-caption font-medium text-ink transition-colors hover:bg-ink hover:text-white"
                  >
                    Set as cover
                  </button>
                )}
              </div>
            </li>
          ))}

          <li className="flex flex-col justify-between gap-2 rounded-md border border-stone p-3">
            <div className="flex items-start justify-between gap-2">
              <p className="truncate font-body text-caption text-ink">engine_bay...05.jpg</p>
              <button
                type="button"
                aria-label="Cancel upload"
                className="flex size-8 shrink-0 items-center justify-center rounded-full text-slate transition-colors hover:text-danger"
              >
                <X aria-hidden="true" className="size-4" strokeWidth={1.5} />
              </button>
            </div>
            <div className="flex flex-col gap-1">
              <p className="font-body text-caption text-slate">Uploading... 68%</p>
              <div className="h-2 w-full overflow-hidden rounded-full bg-stone">
                <div className="h-full w-2/3 rounded-full bg-ink" />
              </div>
              <p className="font-body text-caption text-mist">4.2 MB / 6.1 MB</p>
            </div>
          </li>
        </ul>

        <Button type="button" variant="secondary" className="self-start">
          <Plus aria-hidden="true" className="mr-2 size-5" strokeWidth={1.5} />
          Add photos
        </Button>
      </SectionCard>

      <SectionCard
        icon={PenLine}
        title="Editorial Description & Key Features"
        description="Detailed vehicle provenance, condition notes, and factory options."
      >
        <div className="flex flex-col gap-2">
          <label htmlFor="vehicle-overview" className={labelClasses}>
            Vehicle Overview &amp; Highlights
          </label>
          <div className="flex items-center gap-1 rounded-sm border border-stone bg-ivory p-1">
            {[
              { icon: Bold, label: "Bold" },
              { icon: Italic, label: "Italic" },
              { icon: List, label: "Bulleted list" },
              { icon: Eraser, label: "Clear formatting" },
            ].map((tool) => (
              <button
                key={tool.label}
                type="button"
                aria-label={tool.label}
                className="flex size-11 items-center justify-center rounded-sm text-slate transition-colors hover:bg-white hover:text-ink lg:size-10"
              >
                <tool.icon aria-hidden="true" className="size-5" strokeWidth={1.5} />
              </button>
            ))}
          </div>
          <textarea
            id="vehicle-overview"
            name="overview"
            rows={8}
            defaultValue="Immaculate condition Japanese auction grade 4.5B import with verified mileage, full service logs, panoramic glass sunroof, adaptive cruise control, and clean customs inspection certification. Exceptionally maintained one-owner executive utility vehicle ready for immediate registration and showroom delivery."
            className="w-full rounded-sm border border-stone bg-white px-4 py-3 font-body text-body text-ink shadow-sm transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ink"
          />
          <p className="self-end font-body text-caption text-mist">248 characters</p>
        </div>

        <fieldset className="flex flex-col gap-3">
          <legend className={labelClasses}>Factory &amp; Optional Features</legend>
          <div className="grid grid-cols-1 gap-2 sm:grid-cols-2 lg:grid-cols-3">
            {featureOptions.map((feature) => (
              <label
                key={feature}
                className="flex min-h-11 cursor-pointer select-none items-center gap-2 font-body text-small text-ink"
              >
                <input type="checkbox" name="features" value={feature} className="size-4 rounded border-stone accent-ink" />
                <span>{feature}</span>
              </label>
            ))}
          </div>
          <Button type="button" variant="secondary" className="self-start">
            <ListPlus aria-hidden="true" className="mr-2 size-5" strokeWidth={1.5} />
            Add
          </Button>
        </fieldset>
      </SectionCard>

      <div className="sticky bottom-0 z-30 flex flex-wrap items-center justify-between gap-3 border-t border-stone bg-white px-6 py-4 shadow-sm">
        <p className="flex flex-wrap items-center gap-1 font-body text-caption text-slate">
          <span className="font-medium text-ink">Unsaved changes:</span>
          Draft automatically saved 1 minute ago
        </p>
        <div className="flex flex-wrap items-center gap-3">
          <Button type="button" variant="secondary">
            Cancel
          </Button>
          <Button type="button" variant="secondary">
            Save draft
          </Button>
          <Button type="submit" variant="primary">
            <Upload aria-hidden="true" className="mr-2 size-5" strokeWidth={1.5} />
            Publish vehicle
          </Button>
        </div>
      </div>
    </form>
  );
}
