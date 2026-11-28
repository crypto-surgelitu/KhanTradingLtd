"use client";

import { useState } from "react";
import Link from "next/link";
import {
  ArrowLeftRight,
  ArrowRight,
  Armchair,
  Banknote,
  Gauge,
  Image as ImageIcon,
  Lock,
  UploadCloud,
  X,
} from "lucide-react";
import { cn } from "@/lib/utils";
import {
  tradeInLogbookStatuses,
  tradeInMakes,
  tradeInUploads,
  tradeInUploadMax,
  tradeInYears,
  type TradeInOption,
  type TradeInUpload,
  type TradeInUploadIcon,
} from "@/features/trade-in/mocks";

// DESIGN.md Section 6, Screen 9 — Sell or Trade In valuation form. All form
// interactivity lives in this single client leaf. The form is presentational
// for now: TODO(trade-in) marks where the backend submission wiring goes
// (features/trade-in actions + Zod schema once the contract lands).

const inputClasses =
  "h-12 w-full rounded-sm border border-stone bg-white px-4 font-body text-body text-ink shadow-sm outline-none placeholder:text-mist focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ink";

const labelClasses = "mb-2 block font-body text-small font-medium text-ink";

const intentCardClasses =
  "relative flex cursor-pointer items-center gap-3 rounded-md bg-ivory p-4 shadow-sm transition-colors has-[:checked]:bg-ink has-[:checked]:text-white";

const chipClasses =
  "flex-1 cursor-pointer rounded-sm border border-stone bg-white px-3 py-2.5 text-center font-body text-button transition-colors has-[:checked]:border-ink has-[:checked]:bg-ink has-[:checked]:text-white";

const uploadIcons: Record<TradeInUploadIcon, typeof ImageIcon> = {
  image: ImageIcon,
  seat: Armchair,
  speed: Gauge,
};

function SectionBar({
  id,
  title,
  hint,
  hintTone = "accent",
}: {
  id: string;
  title: string;
  hint: string;
  hintTone?: "accent" | "muted";
}) {
  return (
    <div className="mb-6 flex flex-wrap items-center justify-between gap-2 rounded-sm bg-ivory px-4 py-3">
      <h2 id={id} className="font-body text-eyebrow font-semibold tracking-widest text-graphite uppercase">
        {title}
      </h2>
      <span
        className={cn(
          "font-body text-caption font-medium",
          hintTone === "accent" ? "text-champagne-dark" : "text-mist",
        )}
      >
        {hint}
      </span>
    </div>
  );
}

function OptionList({ options, placeholderValue = "" }: { options: TradeInOption[]; placeholderValue?: string }) {
  return options.map((option) => (
    <option key={option.value} value={option.value} disabled={option.value === placeholderValue}>
      {option.label}
    </option>
  ));
}

export function TradeInForm() {
  const [intent, setIntent] = useState<"cash" | "trade">("cash");
  const [uploads, setUploads] = useState<TradeInUpload[]>(tradeInUploads);

  return (
    <form
      className="space-y-10"
      onSubmit={(event) => {
        event.preventDefault();
        // TODO(trade-in): wire the valuation request submission to the backend
        // server action (features/trade-in/actions.ts, Zod-validated) once the
        // contract lands. No submission logic on purpose.
      }}
    >
      {/* Section A — Intent & Trade Preference */}
      <section aria-labelledby="trade-section-a">
        <SectionBar id="trade-section-a" title="Section A: Intent & Trade Preference" hint="Step 1 of 4" />
        <fieldset className="mb-5 border-0 p-0">
          <legend className="sr-only">Transaction intent</legend>
          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
            <label className={intentCardClasses}>
              <input
                type="radio"
                name="intent_type"
                value="cash"
                checked={intent === "cash"}
                onChange={() => setIntent("cash")}
                className="peer sr-only"
              />
              <Banknote aria-hidden="true" className="size-5 shrink-0 text-slate peer-checked:text-champagne" strokeWidth={1.5} />
              <span>
                <span className="block font-body text-body font-semibold text-inherit">Sell for Direct Cash</span>
                <span className="block font-body text-caption text-inherit opacity-80">Instant RTGS transfer to bank</span>
              </span>
            </label>
            <label className={intentCardClasses}>
              <input
                type="radio"
                name="intent_type"
                value="trade"
                checked={intent === "trade"}
                onChange={() => setIntent("trade")}
                className="peer sr-only"
              />
              <ArrowLeftRight aria-hidden="true" className="size-5 shrink-0 text-slate peer-checked:text-champagne" strokeWidth={1.5} />
              <span>
                <span className="block font-body text-body font-semibold text-inherit">Trade In for Another Vehicle</span>
                <span className="block font-body text-caption text-inherit opacity-80">Apply value toward showroom stock</span>
              </span>
            </label>
          </div>
        </fieldset>
        {intent === "trade" ? (
          <div className="rounded-md bg-champagne-tint/40 p-4">
            <label className={labelClasses} htmlFor="trade-target-input">
              Target Showroom Model or Stock ID (Optional)
            </label>
            <input
              id="trade-target-input"
              name="trade_target"
              type="text"
              placeholder="e.g. 2022 Lexus LX600 or Ref #KH-9042"
              className={inputClasses}
            />
          </div>
        ) : null}
      </section>

      {/* Section B — Vehicle Information */}
      <section aria-labelledby="trade-section-b">
        <SectionBar id="trade-section-b" title="Section B: Vehicle Information" hint="Specs & History" />
        <div className="mb-5 grid grid-cols-1 gap-5 sm:grid-cols-2">
          <div>
            <label className={labelClasses} htmlFor="veh-make">Make *</label>
            <select id="veh-make" name="make" required defaultValue="" className={`${inputClasses} cursor-pointer`}>
              <OptionList options={tradeInMakes} />
            </select>
          </div>
          <div>
            <label className={labelClasses} htmlFor="veh-model">Model &amp; Trim *</label>
            <input id="veh-model" name="model" type="text" required placeholder="e.g. Land Cruiser Prado TX-L" className={inputClasses} />
          </div>
          <div>
            <label className={labelClasses} htmlFor="veh-year">Year of Manufacture *</label>
            <select id="veh-year" name="year" required defaultValue="" className={`${inputClasses} cursor-pointer`}>
              <OptionList options={tradeInYears} />
            </select>
          </div>
          <div>
            <label className={labelClasses} htmlFor="veh-mileage">Verified Mileage (km) *</label>
            <div className="relative">
              <input id="veh-mileage" name="mileage_km" type="text" required inputMode="numeric" placeholder="44,500" className={`${inputClasses} pr-12`} />
              <span className="pointer-events-none absolute right-4 top-3 font-body text-caption text-slate">KM</span>
            </div>
          </div>
        </div>
        <div className="mb-5 grid grid-cols-1 gap-5 sm:grid-cols-2">
          <fieldset className="border-0 p-0">
            <legend className={labelClasses}>Transmission</legend>
            <div className="flex gap-2">
              <label className={chipClasses}>
                <input type="radio" name="transmission" value="automatic" defaultChecked className="sr-only" />
                Automatic
              </label>
              <label className={chipClasses}>
                <input type="radio" name="transmission" value="manual" className="sr-only" />
                Manual
              </label>
            </div>
          </fieldset>
          <fieldset className="border-0 p-0">
            <legend className={labelClasses}>Fuel Type</legend>
            <div className="flex gap-2">
              <label className={chipClasses}>
                <input type="radio" name="fuel" value="petrol" className="sr-only" />
                Petrol
              </label>
              <label className={chipClasses}>
                <input type="radio" name="fuel" value="diesel" defaultChecked className="sr-only" />
                Diesel
              </label>
              <label className={chipClasses}>
                <input type="radio" name="fuel" value="hybrid" className="sr-only" />
                Hybrid
              </label>
            </div>
          </fieldset>
        </div>

        <fieldset className="mb-5 border-0 p-0">
          <legend className={labelClasses}>Vehicle Condition Rating *</legend>
          <div className="grid grid-cols-1 gap-2 sm:grid-cols-2">
            <label className="flex cursor-pointer items-start gap-3 rounded-md border border-stone bg-white p-3 transition-colors has-[:checked]:border-ink has-[:checked]:bg-ivory">
              <input type="radio" name="condition" value="flawless" defaultChecked className="mt-1 size-4 accent-ink" />
              <span>
                <span className="block font-body text-small font-medium text-ink">Excellent / Flawless</span>
                <span className="block font-body text-caption text-slate">Original paint, full service history, no accidents.</span>
              </span>
            </label>
            <label className="flex cursor-pointer items-start gap-3 rounded-md border border-stone bg-white p-3 transition-colors has-[:checked]:border-ink has-[:checked]:bg-ivory">
              <input type="radio" name="condition" value="very-good" className="mt-1 size-4 accent-ink" />
              <span>
                <span className="block font-body text-small font-medium text-ink">Very Good (Minor wear)</span>
                <span className="block font-body text-caption text-slate">Minor stone chips, clean mechanical status.</span>
              </span>
            </label>
            <label className="flex cursor-pointer items-start gap-3 rounded-md border border-stone bg-white p-3 transition-colors has-[:checked]:border-ink has-[:checked]:bg-ivory">
              <input type="radio" name="condition" value="good" className="mt-1 size-4 accent-ink" />
              <span>
                <span className="block font-body text-small font-medium text-ink">Good (Daily driver)</span>
                <span className="block font-body text-caption text-slate">Normal mileage wear, regular maintenance kept.</span>
              </span>
            </label>
            <label className="flex cursor-pointer items-start gap-3 rounded-md border border-stone bg-white p-3 transition-colors has-[:checked]:border-ink has-[:checked]:bg-ivory">
              <input type="radio" name="condition" value="fair" className="mt-1 size-4 accent-ink" />
              <span>
                <span className="block font-body text-small font-medium text-ink">Fair (Needs touch-up)</span>
                <span className="block font-body text-caption text-slate">Cosmetic marks or overdue mechanical service.</span>
              </span>
            </label>
          </div>
        </fieldset>

        <div>
          <label className={labelClasses} htmlFor="logbook-status">Registration &amp; Logbook Status *</label>
          <select id="logbook-status" name="logbook_status" required defaultValue="in_hand" className={`${inputClasses} cursor-pointer`}>
            <OptionList options={tradeInLogbookStatuses} />
          </select>
        </div>
      </section>

      {/* Section C — Visual Proof & Photos */}
      <section aria-labelledby="trade-section-c">
        <SectionBar id="trade-section-c" title="Section C: Visual Proof & Photos" hint="Faster Appraisal" />
        <div className="mb-5 rounded-md bg-ivory p-8 text-center">
          <div className="mx-auto mb-3 flex size-12 items-center justify-center rounded-full bg-white text-champagne-dark shadow-sm">
            <UploadCloud aria-hidden="true" className="size-6" strokeWidth={1.5} />
          </div>
          <p className="mb-1 font-body text-body font-semibold text-ink">
            Upload exterior, interior, and dashboard photos
          </p>
          <p className="mb-4 font-body text-small text-slate">
            PNG, JPG up to 15MB each (minimum 4 photos recommended: Front 3/4,
            Rear, Interior Cabin, Odometer)
          </p>
          <label
            htmlFor="trade-photo-upload"
            className="inline-flex h-11 cursor-pointer items-center justify-center rounded-sm border border-stone bg-white px-5 font-body text-button text-ink shadow-sm transition-colors hover:bg-ivory focus-within:outline-2 focus-within:outline-offset-2 focus-within:outline-ink"
          >
            Browse Files
          </label>
          <input
            id="trade-photo-upload"
            name="photos"
            type="file"
            accept="image/png,image/jpeg"
            multiple
            className="sr-only"
          />
        </div>
        <div>
          <span className="mb-1 block font-body text-caption text-slate">
            Uploaded Assets ({uploads.length} of {tradeInUploadMax} max):
          </span>
          <ul className="space-y-2">
            {uploads.map((upload) => {
              const UploadIcon = uploadIcons[upload.icon];
              return (
                <li key={upload.id} className="flex items-center justify-between rounded-sm bg-ivory p-3">
                  <div className="flex items-center gap-3">
                    <span className="flex size-9 items-center justify-center rounded-sm bg-white text-champagne-dark">
                      <UploadIcon aria-hidden="true" className="size-5" strokeWidth={1.5} />
                    </span>
                    <div>
                      <p className="font-body text-small font-medium text-ink">{upload.name}</p>
                      <p className="font-body text-caption text-mist">{upload.meta}</p>
                    </div>
                  </div>
                  <button
                    type="button"
                    aria-label={`Remove ${upload.name}`}
                    className="flex size-11 items-center justify-center text-slate transition-colors hover:text-danger focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ink"
                    onClick={() => setUploads((current) => current.filter((item) => item.id !== upload.id))}
                  >
                    <X aria-hidden="true" className="size-5" strokeWidth={1.5} />
                  </button>
                </li>
              );
            })}
          </ul>
        </div>
      </section>

      {/* Section D — Expected Price (Optional) */}
      <section aria-labelledby="trade-section-d">
        <SectionBar id="trade-section-d" title="Section D: Expected Price (Optional)" hint="Estimate" hintTone="muted" />
        <label className={labelClasses} htmlFor="expected-price">
          Asking Price in KSh (Leave blank if you prefer our open market appraisal)
        </label>
        <div className="relative max-w-md">
          <span className="pointer-events-none absolute left-4 top-3 font-body text-body font-semibold text-slate">
            KSh
          </span>
          <input
            id="expected-price"
            name="expected_price"
            type="text"
            inputMode="numeric"
            placeholder="6,500,000"
            className={`${inputClasses} pl-16`}
          />
        </div>
        <p className="mt-2 font-body text-caption text-slate">
          Our appraisal is based on current Kenyan live market demand, verified
          Japanese/UK auction benchmarks, and KRA excise values.
        </p>
      </section>

      {/* Section E — Contact Details */}
      <section aria-labelledby="trade-section-e">
        <SectionBar id="trade-section-e" title="Section E: Contact Details" hint="Final Step" />
        <div className="mb-5 grid grid-cols-1 gap-5 sm:grid-cols-2">
          <div className="sm:col-span-2">
            <label className={labelClasses} htmlFor="owner-name">Full Name *</label>
            <input id="owner-name" name="owner_name" type="text" required placeholder="David Kariuki" className={inputClasses} />
          </div>
          <div>
            <label className={labelClasses} htmlFor="owner-phone">Phone Number *</label>
            <input id="owner-phone" name="owner_phone" type="tel" required placeholder="+254 700 000 000" className={inputClasses} />
          </div>
          <div>
            <label className={labelClasses} htmlFor="owner-email">Email Address *</label>
            <input id="owner-email" name="owner_email" type="email" required placeholder="david.kariuki@domain.com" className={inputClasses} />
          </div>
        </div>
        <fieldset className="border-0 p-0">
          <legend className={labelClasses}>Preferred Response Channel</legend>
          <div className="flex flex-wrap gap-3">
            <label className="cursor-pointer rounded-sm border border-stone bg-white px-4 py-2 font-body text-button transition-colors has-[:checked]:border-ink has-[:checked]:bg-ink has-[:checked]:text-white">
              <input type="radio" name="contact_method" value="whatsapp" defaultChecked className="sr-only" />
              WhatsApp
            </label>
            <label className="cursor-pointer rounded-sm border border-stone bg-white px-4 py-2 font-body text-button transition-colors has-[:checked]:border-ink has-[:checked]:bg-ink has-[:checked]:text-white">
              <input type="radio" name="contact_method" value="call" className="sr-only" />
              Direct Phone Call
            </label>
            <label className="cursor-pointer rounded-sm border border-stone bg-white px-4 py-2 font-body text-button transition-colors has-[:checked]:border-ink has-[:checked]:bg-ink has-[:checked]:text-white">
              <input type="radio" name="contact_method" value="email" className="sr-only" />
              Formal Email Quote
            </label>
          </div>
        </fieldset>
      </section>

      {/* Consent & Submission */}
      <div className="space-y-6 pt-4">
        <label className="flex cursor-pointer select-none items-start gap-3">
          <input type="checkbox" required className="mt-1 size-4 rounded-sm border-stone accent-ink" />
          <span className="font-body text-small text-slate">
            I agree to the processing of my details as described in the{" "}
            <Link
              href="/privacy"
              className="font-medium text-ink underline decoration-champagne underline-offset-4 hover:text-champagne-dark"
            >
              Privacy Policy
            </Link>
            .
          </span>
        </label>
        <div className="flex flex-col items-center gap-4 sm:flex-row">
          <button
            type="submit"
            className="inline-flex h-12 w-full items-center justify-center gap-2 rounded-sm bg-ink px-8 font-body text-button text-white transition-colors hover:bg-graphite focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ink motion-safe:active:scale-98 sm:w-auto"
          >
            <span>Request Valuation &amp; Offer</span>
            <ArrowRight aria-hidden="true" className="size-5" strokeWidth={1.5} />
          </button>
          <p className="flex items-center gap-2 font-body text-caption text-slate">
            <Lock aria-hidden="true" className="size-5 shrink-0 text-success" strokeWidth={1.5} />
            <span>No obligation · Free valuation within 24 business hours</span>
          </p>
        </div>
      </div>
    </form>
  );
}
