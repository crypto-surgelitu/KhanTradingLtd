"use client";

import { useState } from "react";
import Link from "next/link";
import {
  AlertCircle,
  ArrowLeft,
  ArrowRight,
  Car,
  Lock,
  MessageCircle,
  Receipt,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { siteConfig } from "@/config/site";

// DESIGN.md Screen 6A — Track Your Purchase lookup. The single client leaf
// for this screen: the identification form (step 1) and the security
// verification form (step 2) exactly as drawn in the approved export, with
// the designed error and OTP-dispatch states. All values are the export's
// SAMPLE demo state.
// TODO(KHANS TRADING Ltd / backend): wire to the purchase-lookup + OTP
// verification actions in features/tracking/actions.ts (docs/TASKS.md).

const inputClasses =
  "h-12 w-full rounded-sm border border-stone bg-white px-4 font-body text-body text-ink shadow-sm transition-colors placeholder:text-mist focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ink";

const labelClasses = "font-body text-small font-medium text-ink";

export function TrackForm() {
  const [code, setCode] = useState("");

  return (
    <div className="mx-auto flex w-full max-w-md flex-col gap-8">
      <section
        aria-label="Step 1: identification"
        className="flex flex-col gap-6 rounded-md border border-stone bg-white p-6 lg:p-8"
      >
        <div className="flex flex-col gap-2">
          <div className="flex flex-wrap items-center gap-2">
            <p className="font-body text-caption font-medium text-champagne-dark">
              Step 1 of 2 · Identification
            </p>
            <span className="inline-flex items-center rounded-full bg-stone/40 px-2.5 py-1 font-body text-caption text-slate">
              Initial Step
            </span>
          </div>
          <h2 className="font-heading text-h2 lg:text-h2-lg">
            Enter purchase credentials
          </h2>
          <p className="font-body text-small text-slate">
            Enter the reference code provided on your reservation voucher or
            proforma invoice.
          </p>
        </div>

        <form className="flex flex-col gap-6" noValidate>
          <div className="flex flex-col gap-2">
            <label htmlFor="track-reference" className={labelClasses}>
              Purchase Reference Number
            </label>
            <div className="relative">
              <input
                id="track-reference"
                name="reference"
                type="text"
                required
                aria-invalid="true"
                aria-describedby="track-reference-error"
                className={`${inputClasses} border-danger pr-12`}
              />
              <Receipt
                aria-hidden="true"
                className="pointer-events-none absolute right-4 top-1/2 size-5 -translate-y-1/2 text-mist"
                strokeWidth={1.5}
              />
            </div>
            <p
              id="track-reference-error"
              className="flex items-start gap-2 font-body text-small text-danger"
            >
              <AlertCircle aria-hidden="true" className="size-5 shrink-0" strokeWidth={1.5} />
              <span>
                We couldn&apos;t find that reference. Please check your reference
                format (e.g., KH-2024-XXX) or verify the phone number matches
                your reservation.
              </span>
            </p>
          </div>

          <div className="flex flex-col gap-2">
            <label htmlFor="track-phone" className={labelClasses}>
              Registered Phone Number
            </label>
            <div className="relative">
              <span
                aria-hidden="true"
                className="absolute left-4 top-1/2 -translate-y-1/2 font-body text-body text-slate"
              >
                +254
              </span>
              <input
                id="track-phone"
                name="phone"
                type="tel"
                autoComplete="tel"
                required
                className={`${inputClasses} pl-16`}
              />
            </div>
          </div>

          <Button type="submit" variant="primary" className="w-full">
            Continue
            <ArrowRight aria-hidden="true" className="ml-2 size-5" strokeWidth={1.5} />
          </Button>
        </form>

        <div className="flex flex-wrap items-center gap-2 border-t border-stone pt-4">
          <MessageCircle aria-hidden="true" className="size-5 text-champagne" strokeWidth={1.5} />
          <p className="font-body text-small text-slate">
            Need help finding your reference?
          </p>
          <a
            href={siteConfig.links.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="font-body text-small font-medium text-ink underline decoration-champagne decoration-1 underline-offset-4 transition-colors hover:text-champagne-dark"
          >
            Chat with Concierge
          </a>
        </div>

        <p className="flex items-start gap-2 rounded-md bg-ivory p-3 font-body text-caption text-slate">
          <Lock aria-hidden="true" className="size-5 shrink-0 text-champagne" strokeWidth={1.5} />
          <span>
            Confidentiality note: In accordance with our security protocol,
            sensitive ownership documents and payment accounts are only
            accessible following two-factor verification.
          </span>
        </p>
      </section>

      <section
        aria-label="Step 2: security verification"
        className="flex flex-col gap-6 rounded-md border border-stone bg-white p-6 lg:p-8"
      >
        <div className="flex flex-col gap-2">
          <div className="flex flex-wrap items-center gap-2">
            <p className="font-body text-caption font-medium text-champagne-dark">
              Step 2 of 2 · Security Verification
            </p>
            <span className="inline-flex items-center rounded-full bg-success/10 px-2.5 py-1 font-body text-caption text-success">
              OTP Dispatched
            </span>
          </div>
          <h2 className="font-heading text-h2 lg:text-h2-lg">
            Verify your phone number
          </h2>
          <p className="font-body text-small text-slate">
            We sent a 6-digit verification code to{" "}
            <span className="font-medium text-ink">+254 712 345 ***</span> via
            WhatsApp and SMS.
          </p>
        </div>

        <p className="flex items-center gap-2 rounded-md bg-ivory p-3 font-body text-small text-ink">
          <Car aria-hidden="true" className="size-5 shrink-0 text-champagne" strokeWidth={1.5} />
          Ref: KH-2019-PRD-882 (2019 Land Cruiser Prado TZ-G)
        </p>

        <form className="flex flex-col gap-6" noValidate>
          <div className="flex flex-col gap-2">
            <label htmlFor="track-code" className={labelClasses}>
              Authentication Code
            </label>
            <input
              id="track-code"
              name="code"
              type="text"
              inputMode="numeric"
              autoComplete="one-time-code"
              maxLength={6}
              value={code}
              onChange={(event) => setCode(event.target.value)}
              className={`${inputClasses} tabular-nums`}
            />
            <p className="flex flex-wrap items-center gap-2 font-body text-caption text-slate">
              Didn&apos;t receive the code?
              <a
                href={siteConfig.links.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="font-body text-caption font-medium text-ink underline decoration-champagne decoration-1 underline-offset-4 transition-colors hover:text-champagne-dark"
              >
                Resend via WhatsApp
              </a>
              <span aria-hidden="true" className="text-mist">(0:42)</span>
              <span aria-hidden="true">·</span>
              <button
                type="button"
                className="font-body text-caption font-medium text-ink underline decoration-champagne decoration-1 underline-offset-4 transition-colors hover:text-champagne-dark"
              >
                SMS
              </button>
            </p>
          </div>

          <Button type="submit" variant="primary" className="w-full">
            Verify &amp; View Purchase
            <ArrowRight aria-hidden="true" className="ml-2 size-5" strokeWidth={1.5} />
          </Button>
        </form>

        <Link
          href="/track"
          className="inline-flex min-h-11 items-center gap-2 font-body text-small font-medium text-ink underline decoration-champagne decoration-1 underline-offset-4 transition-colors hover:text-champagne-dark"
        >
          <ArrowLeft aria-hidden="true" className="size-5" strokeWidth={1.5} />
          Use a different reference number
        </Link>
      </section>
    </div>
  );
}
