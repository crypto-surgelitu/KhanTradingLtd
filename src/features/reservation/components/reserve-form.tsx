"use client";

import { useState } from "react";
import Link from "next/link";
import { useParams } from "next/navigation";
import { BadgeCheck, CloudUpload, Landmark, Store, Wallet } from "lucide-react";
import { Button } from "@/components/ui/button";
import { siteConfig } from "@/config/site";
import { lendingInstitutions, reservationReferenceTag } from "@/features/reservation/mocks";

// DESIGN.md Screen 6 — Reserve Vehicle deposit step (Step 2 of 3). The single
// client leaf for this screen: deposit-method selection, proof-of-payment
// upload UI, lending select and the terms checkbox gating the submit button.
// TODO(KHANS TRADING Ltd / backend): wire to the reservation server action in
// features/reservation/actions.ts (docs/TASKS.md). No submit logic yet.

const methodCardClasses =
  "flex cursor-pointer flex-col gap-3 rounded-md border border-stone bg-white p-6 transition-colors peer-checked:border-ink peer-checked:ring-1 peer-checked:ring-ink peer-focus-visible:outline-2 peer-focus-visible:outline-offset-2 peer-focus-visible:outline-ink";

const inputClasses =
  "h-12 w-full rounded-sm border border-stone bg-white px-4 font-body text-body text-ink shadow-sm transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ink";

export function ReserveForm() {
  const [agreed, setAgreed] = useState(false);
  const params = useParams<{ id: string }>();

  return (
    <form className="flex flex-col gap-8" noValidate>
      <div className="flex flex-col gap-2">
        <p className="font-body text-caption font-medium text-champagne-dark">
          Step 2 of 3
        </p>
        <h2 className="font-heading text-h2 lg:text-h2-lg">
          Deposit Payment Method
        </h2>
        <p className="max-w-2xl font-body text-body text-slate">
          Choose how you would like to secure this vehicle. A verified deposit
          locks the chassis allocation in your name and immediately prevents
          competing bookings.
        </p>
      </div>

      <fieldset className="flex flex-col gap-4">
        <legend className="sr-only">Deposit payment method</legend>

        <label className="relative">
          <input
            type="radio"
            name="deposit_method"
            value="bank_transfer"
            defaultChecked
            className="peer sr-only"
          />
          <div className={methodCardClasses}>
            <div className="flex flex-wrap items-center gap-3">
              <Landmark aria-hidden="true" className="size-6 text-champagne" strokeWidth={1.5} />
              <p className="font-heading text-h3 lg:text-h3-lg">
                Direct Bank Transfer (EFT / RTGS / Cheque)
              </p>
              <span className="inline-flex items-center rounded-full bg-champagne-tint px-2.5 py-1 font-body text-caption font-medium text-champagne-dark">
                Recommended
              </span>
            </div>
            <p className="font-body text-small text-slate">
              Direct corporate clearance into KHANS TRADING verified treasury
              accounts. Same-day settlement verification.
            </p>

            <div className="flex flex-col gap-3 rounded-md bg-ivory p-4">
              <div className="flex flex-wrap items-center justify-between gap-2">
                <p className="font-body text-small font-semibold text-ink">
                  Settlement Account Coordinates
                </p>
                <span className="inline-flex items-center rounded-full bg-success/10 px-2.5 py-1 font-body text-caption text-success">
                  Verified Active
                </span>
              </div>
              <dl className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                <div>
                  <dt className="font-body text-caption text-mist">Bank Name</dt>
                  <dd className="font-body text-small text-ink">{siteConfig.bankName}</dd>
                </div>
                <div>
                  <dt className="font-body text-caption text-mist">Branch</dt>
                  <dd className="font-body text-small text-ink">{siteConfig.branch}</dd>
                </div>
                <div>
                  <dt className="font-body text-caption text-mist">Account Name</dt>
                  <dd className="font-body text-small text-ink">{siteConfig.name}</dd>
                </div>
                <div>
                  <dt className="font-body text-caption text-mist">Account Number</dt>
                  <dd className="font-body text-small text-ink">{siteConfig.accountNumber}</dd>
                </div>
              </dl>
              <div>
                <p className="font-body text-caption text-mist">
                  Mandatory Reference Tag
                </p>
                <p className="font-heading text-h3 tabular-nums lg:text-h3-lg">
                  {reservationReferenceTag}
                </p>
                <p className="font-body text-caption text-slate">
                  Must be quoted on transfer slip
                </p>
              </div>
            </div>

            <div className="flex flex-col gap-2">
              <p className="font-body text-small font-medium text-ink">
                Upload Proof of Payment
              </p>
              <label className="flex min-h-11 cursor-pointer items-center justify-center gap-2 rounded-sm border-2 border-dashed border-stone px-4 py-4 font-body text-small text-ink transition-colors hover:border-slate/60">
                <CloudUpload aria-hidden="true" className="size-5 text-slate" strokeWidth={1.5} />
                Upload Proof of Payment
                <input type="file" name="proof" accept=".pdf,.png,.jpg" className="sr-only" />
              </label>
              <p className="font-body text-caption text-mist">
                Supports PDF, PNG, JPG (Maximum 10MB file size)
              </p>
            </div>
          </div>
        </label>

        <label className="relative">
          <input type="radio" name="deposit_method" value="showroom" className="peer sr-only" />
          <div className={methodCardClasses}>
            <div className="flex flex-wrap items-center gap-3">
              <Store aria-hidden="true" className="size-6 text-champagne" strokeWidth={1.5} />
              <p className="font-heading text-h3 lg:text-h3-lg">
                Pay at Showroom (Card, Banker&apos;s Cheque or Cash)
              </p>
            </div>
            <p className="font-body text-small text-slate">
              Complete your reservation physically at our premier Nairobi
              showroom with our accounts team.
            </p>
            <p className="font-body text-small text-slate">
              <span className="font-medium text-ink">Reservation hold policy:</span>{" "}
              A provisional reservation is held for{" "}
              <span className="font-medium text-ink">[X] days</span> while you
              schedule your showroom visit. The vehicle will automatically be
              released back to the market if the verified deposit is not lodged
              within this window.
            </p>
          </div>
        </label>

        <label className="relative">
          <input type="radio" name="deposit_method" value="finance" className="peer sr-only" />
          <div className={methodCardClasses}>
            <div className="flex flex-wrap items-center gap-3">
              <Wallet aria-hidden="true" className="size-6 text-champagne" strokeWidth={1.5} />
              <p className="font-heading text-h3 lg:text-h3-lg">
                Financed Purchase (Bank Asset Finance or Sacco)
              </p>
            </div>
            <p className="font-body text-small text-slate">
              Financing through an institutional asset lender? We issue proforma
              invoices directly to all accredited financial institutions.
            </p>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <div className="flex flex-col gap-2">
                <label htmlFor="reserve-lender" className="font-body text-small font-medium text-ink">
                  Preferred Lending Institution
                </label>
                <select id="reserve-lender" name="lender" className={inputClasses}>
                  {lendingInstitutions.map((institution) => (
                    <option key={institution} value={institution}>
                      {institution}
                    </option>
                  ))}
                </select>
              </div>
              <div className="flex flex-col gap-2">
                <label htmlFor="reserve-equity" className="font-body text-small font-medium text-ink">
                  Estimated Client Equity Deposit
                </label>
                <input
                  id="reserve-equity"
                  name="equity"
                  type="text"
                  defaultValue="20% Approx."
                  className={inputClasses}
                />
              </div>
            </div>
          </div>
        </label>
      </fieldset>

      <div className="flex items-start gap-3 rounded-md bg-champagne-tint p-4">
        <BadgeCheck aria-hidden="true" className="size-6 shrink-0 text-champagne-dark" strokeWidth={1.5} />
        <p className="font-body text-small text-slate">
          <span className="font-medium text-ink">Official Reservation Procedure</span>{" "}
          The reservation is confirmed by the team once the deposit is verified
          in Khans&apos; client trust ledger. Digital reservation voucher and
          verified CarVX inspection sheet issued within 2 hours.
        </p>
      </div>

      <label
        htmlFor="reserve-consent"
        className="flex min-h-11 cursor-pointer items-start gap-2 font-body text-small text-slate"
      >
        <input
          id="reserve-consent"
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
          </Link>{" "}
          and confirm my intent to hold this chassis under standard dealership
          escrow terms.
        </span>
      </label>

      <div className="flex flex-wrap items-center gap-3">
        <Link
          href={`/vehicles/${params.id}`}
          className="inline-flex h-11 items-center justify-center rounded-sm border border-ink bg-transparent px-6 font-body text-button text-ink transition-colors hover:bg-ink hover:text-white lg:h-12"
        >
          Back to vehicle details
        </Link>
        <Button type="submit" variant="primary" disabled={!agreed}>
          Reserve Vehicle
        </Button>
      </div>
    </form>
  );
}
