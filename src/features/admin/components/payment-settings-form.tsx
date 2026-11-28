"use client";

import { useState } from "react";
import {
  ArrowLeftRight,
  BadgeCheck,
  Banknote,
  Building2,
  ChevronDown,
  Info,
  Landmark,
  Loader2,
  Mail,
  Pencil,
  Plus,
  PlusCircle,
  Save,
  ShieldCheck,
  Smartphone,
  Trash2,
} from "lucide-react";
import { cn } from "@/lib/utils";
import {
  paymentSettingsBanks,
  paymentSettingsMethods,
  paymentSettingsPartners,
  paymentSettingsRefundWindows,
  type PaymentMethodIcon,
  type PaymentSettingsBank,
  type PaymentSettingsPartner,
} from "@/features/admin/mocks";

// DESIGN.md Section 8 Admin Screen F — Payments Setup form. All form
// interactivity (payment-method switches, save button loading state) lives in
// this single client leaf. Presentational for now: TODO(settings) marks where
// the backend settings-save wiring goes. The export contains no API key,
// secret or password fields, so none were invented (nothing to mask).

const methodIcons: Record<PaymentMethodIcon, typeof Banknote> = {
  transfer: ArrowLeftRight,
  cash: Banknote,
  finance: BadgeCheck,
  mobile: Smartphone,
};

function MethodSwitch({
  name,
  enabled,
  onToggle,
}: {
  name: string;
  enabled: boolean;
  onToggle: () => void;
}) {
  return (
    <button
      type="button"
      role="switch"
      aria-checked={enabled}
      aria-label={`${name} payment method`}
      onClick={onToggle}
      className={cn(
        "relative h-6 w-12 rounded-full p-0.5 transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ink",
        enabled ? "bg-ink" : "bg-stone",
      )}
    >
      <span
        className={cn(
          "block size-5 rounded-full bg-white shadow-sm transition-transform motion-reduce:transition-none",
          enabled ? "translate-x-6" : "translate-x-0",
        )}
      />
    </button>
  );
}

function BankAccountActions({ bank }: { bank: PaymentSettingsBank }) {
  return (
    <div className="flex w-full items-center justify-end gap-2 border-t border-stone/50 pt-3 md:w-auto md:border-t-0 md:pt-0">
      {bank.isDefault ? null : (
        <button
          type="button"
          className="inline-flex h-11 items-center rounded-sm border border-stone px-3 font-body text-caption font-medium text-slate transition-colors hover:bg-ivory hover:text-ink focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ink"
          onClick={() => {
            // TODO(settings): set the default settlement account with real state.
          }}
        >
          Set as Default
        </button>
      )}
      <button
        type="button"
        title={`Edit ${bank.bankName}`}
        aria-label={`Edit ${bank.bankName}`}
        className="flex size-11 items-center justify-center rounded-sm text-slate transition-colors hover:bg-ivory hover:text-ink focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ink"
        onClick={() => {
          // TODO(settings): open the bank account editor with real state.
        }}
      >
        <Pencil aria-hidden="true" className="size-5" strokeWidth={1.5} />
      </button>
      <button
        type="button"
        title={`Remove ${bank.bankName}`}
        aria-label={`Remove ${bank.bankName}`}
        className="flex size-11 items-center justify-center rounded-sm text-mist transition-colors hover:bg-danger/10 hover:text-danger focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ink"
        onClick={() => {
          // TODO(settings): remove the bank account with real state.
        }}
      >
        <Trash2 aria-hidden="true" className="size-5" strokeWidth={1.5} />
      </button>
    </div>
  );
}

function PartnerCard({ partner }: { partner: PaymentSettingsPartner }) {
  return (
    <div className="flex flex-col justify-between gap-4 rounded-md border border-stone bg-ivory/30 p-6">
      <div>
        <div className="flex items-start justify-between gap-2">
          <div>
            <h3 className="font-heading text-body font-medium text-ink">{partner.name}</h3>
            <span className="block font-body text-caption text-mist">{partner.category}</span>
          </div>
          {partner.tier ? (
            <span className="rounded-sm border border-champagne/30 bg-champagne-tint px-2 py-0.5 font-body text-caption font-semibold text-champagne-dark uppercase">
              {partner.tier}
            </span>
          ) : null}
        </div>
        <div className="mt-4 space-y-1.5 font-body text-caption">
          <p className="flex items-center gap-2 text-slate">
            <Mail aria-hidden="true" className="size-4 shrink-0 text-mist" strokeWidth={1.5} />
            <span>{partner.email}</span>
          </p>
          <p className="flex flex-wrap items-center gap-4 text-slate">
            <span>
              Max LTV: <strong className="font-medium text-ink">{partner.maxLtv}</strong>
            </span>
            <span>
              Turnaround: <strong className="font-medium text-ink">{partner.turnaround}</strong>
            </span>
          </p>
        </div>
      </div>
      <div className="flex items-center justify-between border-t border-stone pt-3">
        <span
          className={cn(
            "flex items-center gap-1 font-body text-caption",
            partner.integrationTone === "success" ? "text-success" : "text-slate",
          )}
        >
          <span
            aria-hidden="true"
            className={cn(
              "size-1.5 rounded-full",
              partner.integrationTone === "success" ? "bg-success" : "bg-mist",
            )}
          />
          {partner.integration}
        </span>
        <div className="flex items-center gap-2 font-body text-caption font-medium">
          <button
            type="button"
            className="min-h-11 text-slate transition-colors hover:text-ink focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ink"
            onClick={() => {
              // TODO(settings): open the financing partner editor with real state.
            }}
          >
            Edit
          </button>
          <span aria-hidden="true" className="text-stone">|</span>
          <button
            type="button"
            className="min-h-11 text-mist transition-colors hover:text-danger focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ink"
            onClick={() => {
              // TODO(settings): remove the financing partner with real state.
            }}
          >
            Remove
          </button>
        </div>
      </div>
    </div>
  );
}

export function PaymentSettingsForm() {
  const [methodEnabled, setMethodEnabled] = useState<Record<string, boolean>>(() =>
    Object.fromEntries(paymentSettingsMethods.map((method) => [method.id, method.enabled])),
  );
  const [saving, setSaving] = useState(false);

  return (
    <form
      id="payment-settings-form"
      className="flex flex-col gap-6"
      onSubmit={(event) => {
        event.preventDefault();
        setSaving(true);
        // TODO(settings): call the backend settings-save action here (Zod
        // validated server action, features/admin actions) and reset `saving`
        // when it settles. No fake timers or invented submission logic.
      }}
    >
      {/* Card A — Bank Accounts Shown to Clients */}
      <section aria-labelledby="banks-heading" className="rounded-md border border-stone bg-white p-6 shadow-sm lg:p-8">
        <div className="flex flex-col gap-4 border-b border-stone pb-6 sm:flex-row sm:items-start sm:justify-between">
          <div>
            <div className="flex items-center gap-2">
              <Landmark aria-hidden="true" className="size-5 shrink-0 text-ink" strokeWidth={1.5} />
              <h2 id="banks-heading" className="font-heading text-h3 text-ink lg:text-h3-lg">
                Bank Accounts Shown to Clients
              </h2>
            </div>
            <p className="mt-1 max-w-2xl font-body text-small text-slate">
              Bank accounts displayed to clients on invoices, sales agreements,
              and the Reserve Vehicle checkout screen. Transactions are verified
              prior to deal advancement.
            </p>
          </div>
          <button
            type="button"
            className="inline-flex h-11 shrink-0 items-center gap-2 rounded-sm border border-stone bg-white px-4 font-body text-button text-ink transition-colors hover:bg-ivory focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ink"
            onClick={() => {
              // TODO(settings): open the corporate bank account form with real state.
            }}
          >
            <Plus aria-hidden="true" className="size-5" strokeWidth={1.5} />
            <span>Add Corporate Bank Account</span>
          </button>
        </div>
        <ul className="mt-6 flex flex-col gap-4">
          {paymentSettingsBanks.map((bank) => (
            <li key={bank.id} className="flex flex-col gap-4 rounded-md border border-stone/80 bg-ivory/40 p-6 transition-colors hover:border-slate/50 md:flex-row md:items-center md:justify-between">
              <div className="flex items-start gap-4">
                <span className="flex size-12 shrink-0 items-center justify-center rounded-sm border border-stone bg-white text-ink">
                  <Landmark aria-hidden="true" className="size-6" strokeWidth={1.5} />
                </span>
                <div className="flex flex-col">
                  <div className="flex flex-wrap items-center gap-2">
                    <h3 className="font-heading text-body-l font-medium text-ink">{bank.bankName}</h3>
                    {bank.badge ? (
                      <span
                        className={cn(
                          "inline-flex items-center gap-1 rounded-full px-2.5 py-0.5 font-body text-caption font-semibold uppercase",
                          bank.badgeTone === "success" ? "bg-success/10 text-success" : "bg-stone text-slate",
                        )}
                      >
                        {bank.badgeTone === "success" ? (
                          <span aria-hidden="true" className="size-1.5 rounded-full bg-success" />
                        ) : null}
                        {bank.badge}
                      </span>
                    ) : null}
                  </div>
                  <dl className="mt-2 grid grid-cols-1 gap-x-8 gap-y-1 sm:grid-cols-3">
                    <div>
                      <dt className="block font-body text-caption text-mist uppercase">Account Name</dt>
                      <dd className="font-body text-small font-medium text-ink">{bank.accountName}</dd>
                    </div>
                    <div>
                      <dt className="block font-body text-caption text-mist uppercase">Account Number</dt>
                      <dd className="font-body text-small font-medium tracking-wider text-ink">{bank.accountNumber}</dd>
                    </div>
                    <div>
                      <dt className="block font-body text-caption text-mist uppercase">Branch &amp; Currency</dt>
                      <dd className="font-body text-small text-slate">{bank.branchCurrency}</dd>
                    </div>
                  </dl>
                </div>
              </div>
              <BankAccountActions bank={bank} />
            </li>
          ))}
        </ul>
      </section>

      {/* Card B — Enabled Payment Methods */}
      <section aria-labelledby="methods-heading" className="rounded-md border border-stone bg-white p-6 shadow-sm lg:p-8">
        <div className="border-b border-stone pb-4">
          <div className="flex items-center gap-2">
            <Banknote aria-hidden="true" className="size-5 shrink-0 text-ink" strokeWidth={1.5} />
            <h2 id="methods-heading" className="font-heading text-h3 text-ink lg:text-h3-lg">
              Enabled Payment Methods
            </h2>
          </div>
          <p className="mt-1 max-w-2xl font-body text-small text-slate">
            Configure settlement channels accepted for vehicle reservations and
            final handovers.
          </p>
        </div>
        <fieldset className="mt-6 divide-y divide-stone border-0 p-0">
          <legend className="sr-only">Settlement channels</legend>
          {paymentSettingsMethods.map((method) => {
            const MethodIcon = methodIcons[method.icon];
            const enabled = methodEnabled[method.id] ?? method.enabled;
            return (
              <div key={method.id} className="flex items-start justify-between gap-6 py-6 first:pt-0 last:pb-0">
                <div className={cn("flex items-start gap-4", method.policyRestricted && "opacity-60")}>
                  <span
                    className={cn(
                      "mt-0.5 flex size-10 shrink-0 items-center justify-center rounded-sm",
                      method.policyRestricted ? "bg-stone text-slate" : "bg-champagne-tint text-champagne-dark",
                    )}
                  >
                    <MethodIcon aria-hidden="true" className="size-5" strokeWidth={1.5} />
                  </span>
                  <div>
                    <div className="flex flex-wrap items-center gap-2">
                      <span className="font-body text-body font-medium text-ink">{method.name}</span>
                      {method.policyRestricted ? (
                        <span className="rounded-sm bg-stone px-2 py-0.5 font-body text-caption font-semibold text-slate uppercase">
                          Policy Restricted
                        </span>
                      ) : null}
                    </div>
                    <span className="mt-1 block max-w-2xl font-body text-small text-slate">
                      {method.description}
                    </span>
                  </div>
                </div>
                <div className="flex shrink-0 items-center gap-3">
                  <span
                    className={cn(
                      "hidden font-body text-caption font-medium sm:inline-block",
                      enabled ? "text-success" : "text-mist",
                    )}
                  >
                    {enabled ? "Active" : "Disabled"}
                  </span>
                  <MethodSwitch
                    name={method.name}
                    enabled={enabled}
                    onToggle={() =>
                      setMethodEnabled((current) => ({ ...current, [method.id]: !enabled }))
                    }
                  />
                </div>
              </div>
            );
          })}
        </fieldset>
      </section>

      {/* Card C — Vehicle Reservation & Commitment Policy */}
      <section aria-labelledby="policy-heading" className="rounded-md border border-stone bg-white p-6 shadow-sm lg:p-8">
        <div className="border-b border-stone pb-4">
          <div className="flex items-center gap-2">
            <ShieldCheck aria-hidden="true" className="size-5 shrink-0 text-ink" strokeWidth={1.5} />
            <h2 id="policy-heading" className="font-heading text-h3 text-ink lg:text-h3-lg">
              Vehicle Reservation &amp; Commitment Policy
            </h2>
          </div>
          <p className="mt-1 max-w-2xl font-body text-small text-slate">
            Configure dealership commitment boundaries, deposit quotas, and
            automatic expiration timelines.
          </p>
        </div>
        <fieldset className="mt-6 grid grid-cols-1 gap-6 border-0 p-0 md:grid-cols-2">
          <legend className="sr-only">Reservation and commitment settings</legend>
          <div className="flex flex-col gap-1.5">
            <label className="font-body text-small font-medium text-ink" htmlFor="hold-period">
              Default Reservation Hold Period (Days)
            </label>
            <div className="relative">
              <input
                id="hold-period"
                name="hold_period_days"
                type="number"
                min="1"
                max="30"
                defaultValue="5"
                className="h-12 w-full rounded-sm border border-stone bg-white px-3.5 pr-12 font-body text-small text-ink transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ink"
              />
              <span className="pointer-events-none absolute right-3.5 top-1/2 -translate-y-1/2 font-body text-caption text-mist uppercase">
                Days
              </span>
            </div>
            <span className="mt-1 font-body text-caption text-slate">
              Number of business days a vehicle remains on &quot;Reserved&quot;
              status before unverified deposit hold expires.
            </span>
          </div>
          <div className="flex flex-col gap-1.5">
            <label className="font-body text-small font-medium text-ink" htmlFor="commitment-deposit">
              Standard Commitment Deposit (KSh)
            </label>
            <div className="relative">
              <span className="pointer-events-none absolute left-3.5 top-1/2 -translate-y-1/2 font-body text-caption font-medium text-slate">
                KSh
              </span>
              <input
                id="commitment-deposit"
                name="commitment_deposit"
                type="text"
                inputMode="numeric"
                defaultValue="100,000"
                className="h-12 w-full rounded-sm border border-stone bg-white pl-14 pr-3.5 font-heading text-body-l font-semibold text-ink transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ink"
              />
            </div>
            <span className="mt-1 font-body text-caption text-slate">
              Recommended minimum initial commitment amount displayed on public
              reserve flow.
            </span>
          </div>
          <div className="flex flex-col gap-1.5 md:col-span-2">
            <label className="font-body text-small font-medium text-ink" htmlFor="refund-window">
              Refund Processing Window
            </label>
            <div className="relative">
              <select
                id="refund-window"
                name="refund_window"
                defaultValue="24h"
                className="h-12 w-full cursor-pointer appearance-none rounded-sm border border-stone bg-white px-3.5 pr-10 font-body text-small text-ink transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ink"
              >
                {paymentSettingsRefundWindows.map((option) => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </select>
              <ChevronDown aria-hidden="true" className="pointer-events-none absolute right-3 top-1/2 size-5 -translate-y-1/2 text-mist" strokeWidth={1.5} />
            </div>
            <span className="mt-1 font-body text-caption text-slate">
              Standard refund turnaround guarantee for cancelled inspection holds.
            </span>
          </div>
          <div className="pt-1 md:col-span-2">
            <label className="flex cursor-pointer items-start gap-3">
              <input
                type="checkbox"
                name="require_supervisor_extension"
                defaultChecked
                className="mt-0.5 size-4 rounded-sm border-stone accent-ink"
              />
              <span className="flex flex-col">
                <span className="font-body text-small font-medium text-ink">
                  Require supervisor authorization to extend hold period beyond 7 days
                </span>
                <span className="font-body text-caption text-slate">
                  Enforces secondary manager PIN confirmation if a sales associate
                  requests a lock period extension.
                </span>
              </span>
            </label>
          </div>
        </fieldset>
      </section>

      {/* Card D — Financing Partners (Banks & Saccos) */}
      <section aria-labelledby="partners-heading" className="rounded-md border border-stone bg-white p-6 shadow-sm lg:p-8">
        <div className="flex flex-col gap-4 border-b border-stone pb-6 sm:flex-row sm:items-start sm:justify-between">
          <div>
            <div className="flex items-center gap-2">
              <Building2 aria-hidden="true" className="size-5 shrink-0 text-ink" strokeWidth={1.5} />
              <h2 id="partners-heading" className="font-heading text-h3 text-ink lg:text-h3-lg">
                Financing Partners (Banks &amp; Saccos)
              </h2>
            </div>
            <p className="mt-1 max-w-2xl font-body text-small text-slate">
              Approved tier-1 banks and asset finance institutions integrated
              with Khans Trading deal processing for accelerated client
              pre-approvals.
            </p>
          </div>
          <button
            type="button"
            className="inline-flex h-11 shrink-0 items-center gap-2 rounded-sm border border-stone bg-white px-4 font-body text-button text-ink transition-colors hover:bg-ivory focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ink"
            onClick={() => {
              // TODO(settings): open the financing partner form with real state.
            }}
          >
            <PlusCircle aria-hidden="true" className="size-5" strokeWidth={1.5} />
            <span>Add Financing Partner</span>
          </button>
        </div>
        <ul className="mt-6 grid grid-cols-1 gap-4 md:grid-cols-2">
          {paymentSettingsPartners.map((partner) => (
            <li key={partner.id}>
              <PartnerCard partner={partner} />
            </li>
          ))}
        </ul>
      </section>

      {/* Bottom sticky action footer */}
      <div className="sticky bottom-6 z-30 flex flex-col gap-4 rounded-md bg-ink p-4 text-white shadow-lg sm:flex-row sm:items-center sm:justify-between">
        <div className="flex items-center gap-3">
          <Info aria-hidden="true" className="size-5 shrink-0 text-champagne" strokeWidth={1.5} />
          <p className="font-body text-caption leading-tight text-stone">
            Changes to payment methods and bank details take effect immediately
            across all client-facing invoice generators and the Reserve Vehicle
            flow.
          </p>
        </div>
        <div className="flex w-full items-center justify-end gap-3 sm:w-auto">
          <button
            type="reset"
            className="inline-flex h-11 items-center rounded-sm px-4 font-body text-small text-mist transition-colors hover:bg-graphite hover:text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
          >
            Cancel
          </button>
          <button
            type="submit"
            disabled={saving}
            className="inline-flex h-11 items-center gap-2 rounded-sm bg-champagne px-4 font-body text-button text-ink transition-colors hover:bg-champagne-dark focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white motion-safe:active:scale-98 disabled:pointer-events-none disabled:opacity-50"
          >
            {saving ? (
              <>
                <Loader2 aria-hidden="true" className="size-4 animate-spin motion-reduce:animate-none" strokeWidth={1.5} />
                <span>Saving</span>
              </>
            ) : (
              <>
                <Save aria-hidden="true" className="size-4" strokeWidth={1.5} />
                <span>Save Settings</span>
              </>
            )}
          </button>
        </div>
      </div>
    </form>
  );
}
