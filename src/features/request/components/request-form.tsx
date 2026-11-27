"use client";

import { useState } from "react";
import Link from "next/link";
import {
  ArrowRight,
  CalendarDays,
  ChevronDown,
  Landmark,
  Lock,
  MessageCircle,
  Ship,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

// DESIGN.md Screen 6D sourcing-request form. The single client leaf for this
// screen: the four step sections, direct-import and timeline selectors and
// the terms checkbox gating the submit button.
// TODO(KHANS TRADING Ltd / backend): wire to the vehicle-request server
// action in features/requests/actions.ts (docs/TASKS.md). No submit logic yet.

const inputClasses =
  "h-12 w-full rounded-sm border border-stone bg-white px-4 font-body text-body text-ink shadow-sm transition-colors placeholder:text-mist focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ink";

const labelClasses = "font-body text-small font-medium text-ink";

function Field({
  label,
  htmlFor,
  hint,
  required = false,
  children,
}: {
  label: string;
  htmlFor: string;
  hint?: string;
  required?: boolean;
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col gap-2">
      <label htmlFor={htmlFor} className={labelClasses}>
        {label}
        {required ? <span aria-hidden="true" className="text-danger"> *</span> : null}
      </label>
      {children}
      {hint ? <p className="font-body text-caption text-mist">{hint}</p> : null}
    </div>
  );
}

function SelectField({
  label,
  htmlFor,
  options,
  hint,
  required = false,
  withCalendar = false,
  placeholder,
}: {
  label: string;
  htmlFor: string;
  options: readonly string[];
  hint?: string;
  required?: boolean;
  withCalendar?: boolean;
  placeholder?: string;
}) {
  return (
    <Field label={label} htmlFor={htmlFor} hint={hint} required={required}>
      <div className="relative">
        <select
          id={htmlFor}
          name={htmlFor}
          defaultValue={placeholder ?? options[0]}
          className={cn(inputClasses, "appearance-none pr-10")}
        >
          {placeholder ? <option value={placeholder}>{placeholder}</option> : null}
          {options.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
        {withCalendar ? (
          <CalendarDays
            aria-hidden="true"
            className="pointer-events-none absolute right-3 top-1/2 size-5 -translate-y-1/2 text-slate"
            strokeWidth={1.5}
          />
        ) : (
          <ChevronDown
            aria-hidden="true"
            className="pointer-events-none absolute right-3 top-1/2 size-5 -translate-y-1/2 text-slate"
            strokeWidth={1.5}
          />
        )}
      </div>
    </Field>
  );
}

function StepHeading({
  number,
  title,
  stepLabel,
}: {
  number: string;
  title: string;
  stepLabel: string;
}) {
  return (
    <div className="flex flex-wrap items-center gap-3">
      <span
        aria-hidden="true"
        className="flex size-8 items-center justify-center rounded-full bg-ink font-body text-caption text-white"
      >
        {number}
      </span>
      <h2 className="font-heading text-h2 lg:text-h2-lg">{title}</h2>
      <span className="inline-flex items-center rounded-full bg-stone/40 px-2.5 py-1 font-body text-caption text-slate">
        {stepLabel}
      </span>
    </div>
  );
}

export function RequestForm() {
  const [agreed, setAgreed] = useState(false);

  return (
    <form className="flex flex-col gap-10" noValidate>
      <section aria-label="Vehicle specification" className="flex flex-col gap-6">
        <StepHeading number="1" title="Vehicle Specification" stepLabel="Step 1 of 4" />
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          <SelectField
            label="Target Make"
            htmlFor="request-make"
            required
            hint="Required"
            placeholder="Select marque (e.g. Toyota, Mercedes)"
            options={["Toyota", "Mercedes-Benz", "Land Rover / Range Rover", "Lexus", "BMW", "Porsche", "Audi", "Other Exclusive Marque"]}
          />
          <Field label="Model or Trim" htmlFor="request-model" hint="Optional">
            <input id="request-model" name="model" type="text" className={inputClasses} />
          </Field>
          <SelectField
            label="Year (Minimum)"
            htmlFor="request-year-min"
            withCalendar
            options={["2018 (Max 8-Year Kenyan Import Law)", "2019", "2020", "2021", "2022", "2023", "2024", "2025 (Brand New)"]}
          />
          <SelectField
            label="Year (Maximum)"
            htmlFor="request-year-max"
            withCalendar
            options={["2021", "2022", "2023", "2024", "2025 (Current Year)"]}
          />
          <SelectField
            label="Body Architecture"
            htmlFor="request-body"
            options={["SUV / 4WD", "Executive Sedan", "Hatchback / Compact", "Pickup / Commercial", "Luxury Van / MPV", "Coupe / GT"]}
          />
          <SelectField
            label="Powertrain / Fuel"
            htmlFor="request-powertrain"
            options={["Petrol", "Diesel", "Hybrid / PHEV", "Full EV"]}
          />
          <SelectField
            label="Transmission"
            htmlFor="request-transmission"
            options={["Auto", "Manual", "Any"]}
          />
          <Field label="Colour Preferences" htmlFor="request-colour">
            <input id="request-colour" name="colour" type="text" className={inputClasses} />
          </Field>
        </div>
      </section>

      <section aria-label="Budget and financing" className="flex flex-col gap-6">
        <StepHeading number="2" title="Budget & Financing Structure" stepLabel="Step 2 of 4" />
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          <Field
            label="Minimum Budget Target (KSh)"
            htmlFor="request-budget-min"
            hint="Equivalent to approx. $35,000 USD landed"
          >
            <div className="relative">
              <span aria-hidden="true" className="absolute left-4 top-1/2 -translate-y-1/2 font-body text-body text-slate">
                KSh
              </span>
              <input id="request-budget-min" name="budget_min" type="text" inputMode="numeric" className={`${inputClasses} pl-14`} />
            </div>
          </Field>
          <Field
            label="Maximum Budget Ceiling (KSh)"
            htmlFor="request-budget-max"
            hint="Inclusive of all Kenyan port, duty, and registration costs"
          >
            <div className="relative">
              <span aria-hidden="true" className="absolute left-4 top-1/2 -translate-y-1/2 font-body text-body text-slate">
                KSh
              </span>
              <input id="request-budget-max" name="budget_max" type="text" inputMode="numeric" className={`${inputClasses} pl-14`} />
            </div>
          </Field>
        </div>

        <label className="flex cursor-pointer items-start gap-3 rounded-md border border-stone bg-white p-4">
          <input type="checkbox" name="asset_finance" className="mt-1 size-4 rounded border-stone accent-ink" />
          <span>
            <span className="flex items-center gap-2 font-body text-small font-medium text-ink">
              <Landmark aria-hidden="true" className="size-5 text-champagne" strokeWidth={1.5} />
              Asset Finance Assistance
            </span>
            <span className="font-body text-small text-slate">
              Fast-tracked bank pre-approval via authorized partners: NCBA,
              Stanbic Bank, and I&amp;M Bank.
            </span>
          </span>
        </label>
      </section>

      <section aria-label="Sourcing scope and timeline" className="flex flex-col gap-6">
        <StepHeading number="3" title="Sourcing Scope & Timeline" stepLabel="Step 3 of 4" />
        <Field
          label="Must-Have Packages & Specific Factory Options"
          htmlFor="request-must-haves"
        >
          <textarea
            id="request-must-haves"
            name="must_haves"
            rows={4}
            className="w-full rounded-sm border border-stone bg-white px-4 py-3 font-body text-body text-ink shadow-sm transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ink"
          />
        </Field>

        <label className="flex cursor-pointer items-start gap-3 rounded-md border border-ink bg-champagne-tint p-4">
          <input type="checkbox" name="import_ok" defaultChecked className="mt-1 size-4 rounded border-stone accent-ink" />
          <span>
            <span className="flex items-center gap-2 font-body text-small font-medium text-ink">
              <Ship aria-hidden="true" className="size-5 text-champagne-dark" strokeWidth={1.5} />
              Direct Import Acceptance (Recommended)
            </span>
            <span className="font-body text-small text-slate">
              Unlocks access to 15,000+ weekly Japan &amp; UK auction units.
              KHANS handles CIF logistics, Mombasa port clearance, KRA customs
              duty, and NTSA number plates (45–60 days delivery).
            </span>
          </span>
        </label>

        <fieldset className="flex flex-col gap-3">
          <legend className={labelClasses}>Target Acquisition Window</legend>
          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
            {[
              { title: "Under 2 Weeks", note: "Local Stock Priority", checked: true },
              { title: "Within 1 Month", note: "Fast-track vessel", checked: false },
              { title: "2 – 3 Months", note: "Japan / UK Ocean route", checked: false },
              { title: "Flexible", note: "Wait for rare spec", checked: false },
            ].map((option) => (
              <label key={option.title} className="flex cursor-pointer items-start gap-3 rounded-md border border-stone bg-white p-4 transition-colors has-[:checked]:border-ink has-[:checked]:ring-1 has-[:checked]:ring-ink">
                <input
                  type="radio"
                  name="timeline"
                  value={option.title}
                  defaultChecked={option.checked}
                  className="mt-1 size-4 border-stone accent-ink"
                />
                <span>
                  <span className="block font-body text-small font-medium text-ink">
                    {option.title}
                  </span>
                  <span className="font-body text-caption text-slate">{option.note}</span>
                </span>
              </label>
            ))}
          </div>
        </fieldset>
      </section>

      <section aria-label="Contact details" className="flex flex-col gap-6">
        <StepHeading number="4" title="Contact & Delivery Concierge" stepLabel="Final Step" />
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          <Field label="Full Legal Name" htmlFor="request-name" required>
            <input id="request-name" name="name" type="text" autoComplete="name" required className={inputClasses} />
          </Field>
          <Field label="Phone Number" htmlFor="request-phone" required hint="WhatsApp Enabled">
            <div className="relative">
              <span aria-hidden="true" className="absolute left-4 top-1/2 -translate-y-1/2 font-body text-body text-slate">
                +254
              </span>
              <input id="request-phone" name="phone" type="tel" autoComplete="tel" required className={`${inputClasses} pl-16 pr-12`} />
              <MessageCircle
                aria-hidden="true"
                className="pointer-events-none absolute right-4 top-1/2 size-5 -translate-y-1/2 text-mist"
                strokeWidth={1.5}
              />
            </div>
          </Field>
          <Field label="Email Address" htmlFor="request-email">
            <input id="request-email" name="email" type="email" autoComplete="email" className={inputClasses} />
          </Field>
          <fieldset className="flex flex-col gap-3">
            <legend className={labelClasses}>Preferred Communication</legend>
            <div className="flex flex-wrap gap-3">
              {[
                { value: "whatsapp", label: "WhatsApp", checked: true },
                { value: "call", label: "Direct Call", checked: false },
                { value: "email", label: "Email", checked: false },
              ].map((option) => (
                <label key={option.value} className="inline-flex min-h-11 cursor-pointer items-center">
                  <input
                    type="radio"
                    name="contact_method"
                    value={option.value}
                    defaultChecked={option.checked}
                    className="peer sr-only"
                  />
                  <span className="rounded-full border border-stone bg-white px-4 py-2 font-body text-small text-slate transition-colors peer-checked:border-ink peer-checked:bg-ink peer-checked:text-white">
                    {option.label}
                  </span>
                </label>
              ))}
            </div>
          </fieldset>
        </div>
      </section>

      <label
        htmlFor="request-consent"
        className="flex min-h-11 cursor-pointer items-start gap-2 font-body text-small text-slate"
      >
        <input
          id="request-consent"
          name="consent"
          type="checkbox"
          required
          checked={agreed}
          onChange={(event) => setAgreed(event.target.checked)}
          className="mt-1 size-4 rounded border-stone accent-ink"
        />
        <span>
          I agree to the processing of my details as described in the{" "}
          <Link
            href="/privacy"
            className="text-ink underline decoration-champagne decoration-1 underline-offset-4"
          >
            Privacy Policy
          </Link>
          .
        </span>
      </label>

      <div className="flex flex-wrap items-center gap-4">
        <Button type="submit" variant="primary" disabled={!agreed}>
          Submit Sourcing Request
          <ArrowRight aria-hidden="true" className="ml-2 size-5" strokeWidth={1.5} />
        </Button>
        <p className="flex items-center gap-2 font-body text-caption text-slate">
          <Lock aria-hidden="true" className="size-5 text-champagne" strokeWidth={1.5} />
          No upfront commitment required. Confidential dealership consultation.
        </p>
      </div>
    </form>
  );
}
