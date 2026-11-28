import type { Metadata } from "next";
import Link from "next/link";
import {
  BadgeCheck,
  BellRing,
  CalendarDays,
  CheckCircle2,
  ChevronRight,
  GitBranch,
  Landmark,
  Lock,
  Store,
  UserCog,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { AdminShell } from "@/components/layout/admin-shell";
import { PaymentSettingsForm } from "@/features/admin/components/payment-settings-form";

export const metadata: Metadata = {
  title: "Settings — Payments Setup",
  description:
    "Configure bank accounts shown to clients, enabled payment methods, reservation and commitment policy, and financing partners for KHANS TRADING Ltd staff.",
  robots: { index: false, follow: false },
};

// DESIGN.md Section 8 Admin Screen F — Settings, Payments Setup panel
// (docs/design/admin-settings-payments.json). Server Component inside the
// shared admin shell; all form interactivity lives in the single client leaf
// features/admin/components/payment-settings-form.tsx. SAMPLE configuration
// content comes from features/admin/mocks.ts. The other settings domains are
// spec'd on the Settings screen (DESIGN.md Admin Screen F, /admin/settings)
// and keep their /admin/-prefixed targets here.

type SettingsNavItem = {
  href: string;
  label: string;
  icon: typeof Store;
  active?: boolean;
};

const settingsNav: SettingsNavItem[] = [
  { href: "/admin/settings#business", label: "Business details", icon: Store },
  { href: "/admin/settings#team", label: "Team and roles", icon: UserCog },
  { href: "/admin/settings#viewings", label: "Viewing availability", icon: CalendarDays },
  { href: "/admin/settings#pipeline", label: "Pipeline & documents", icon: GitBranch },
  { href: "/admin/settings#notifications", label: "Notification templates", icon: BellRing },
  { href: "/admin/settings/payments", label: "Payments setup", icon: Landmark, active: true },
  { href: "/admin/settings#security", label: "Security & Password", icon: Lock },
];

export default function AdminSettingsPaymentsPage() {
  return (
    <AdminShell current="/admin/settings">
      <div className="flex flex-col gap-4 pb-6">
        <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
          <nav aria-label="Breadcrumb" className="flex flex-wrap items-center gap-1.5 font-body text-small text-slate">
            <Link href="/admin/dashboard" className="transition-colors hover:text-ink">
              Admin
            </Link>
            <ChevronRight aria-hidden="true" className="size-4 text-mist" strokeWidth={1.5} />
            <span>System</span>
            <ChevronRight aria-hidden="true" className="size-4 text-mist" strokeWidth={1.5} />
            <span className="font-medium text-ink">Settings</span>
          </nav>
          <p className="inline-flex flex-wrap items-center gap-2 self-start rounded-full border border-stone bg-white px-4 py-1 font-body text-caption text-slate md:self-auto">
            <span aria-hidden="true" className="size-2 rounded-full bg-success motion-safe:animate-pulse" />
            <span>
              System Status: <strong className="font-medium text-ink">Online &amp; Synced</strong>
            </span>
            <span aria-hidden="true" className="text-mist">|</span>
            <span className="text-mist">v2.4.12-ke</span>
          </p>
        </div>

        <div className="flex flex-col gap-6 border-b border-stone pb-8 lg:flex-row lg:items-end lg:justify-between">
          <div className="flex max-w-3xl flex-col">
            <span className="mb-1 font-body text-eyebrow font-semibold tracking-widest text-champagne-dark uppercase">
              System Configuration &amp; Operational Policies
            </span>
            <h1 className="font-heading text-h2 text-ink lg:text-h2-lg">Settings</h1>
            <p className="mt-1 font-body text-body text-slate">
              Manage dealership profile, administrative access controls, viewing
              rules, purchase pipeline stages, notification templates, and client
              settlement channels.
            </p>
          </div>
          <div className="flex flex-wrap items-center gap-4">
            <button
              type="reset"
              form="payment-settings-form"
              className="inline-flex h-12 items-center rounded-sm px-6 font-body text-button text-slate transition-colors hover:bg-stone/40 hover:text-ink focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ink"
            >
              Revert Changes
            </button>
            <button
              type="submit"
              form="payment-settings-form"
              className="inline-flex h-12 items-center gap-2 rounded-sm bg-ink px-6 font-body text-button text-white shadow-sm transition-colors hover:bg-graphite focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ink motion-safe:active:scale-98"
            >
              <CheckCircle2 aria-hidden="true" className="size-5" strokeWidth={1.5} />
              <span>Save Changes</span>
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 items-start gap-6 lg:grid-cols-12">
          <aside className="lg:col-span-3">
            <nav aria-label="Settings sections" className="flex flex-col gap-1 lg:sticky lg:top-28">
              <span className="px-4 py-1 font-body text-caption tracking-wider text-mist uppercase">
                Configuration Domains
              </span>
              <ul className="flex flex-col gap-1">
                {settingsNav.map((item) => (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      aria-current={item.active ? "page" : undefined}
                      className={cn(
                        "flex items-center justify-between rounded-sm px-4 py-3 font-body text-small transition-colors",
                        item.active
                          ? "bg-ink text-white shadow-sm"
                          : "text-slate hover:bg-white hover:text-ink",
                      )}
                    >
                      <span className="flex items-center gap-3">
                        <item.icon
                          aria-hidden="true"
                          className={cn("size-5", item.active ? "text-champagne" : "text-mist")}
                          strokeWidth={1.5}
                        />
                        <span className={cn(item.active && "font-medium text-white")}>{item.label}</span>
                      </span>
                      {item.active ? (
                        <ChevronRight aria-hidden="true" className="size-4 text-champagne" strokeWidth={1.5} />
                      ) : null}
                    </Link>
                  </li>
                ))}
              </ul>
              <div className="mt-6 flex flex-col gap-2 rounded-md bg-stone/30 p-4">
                <div className="flex items-center gap-2 text-ink">
                  <BadgeCheck aria-hidden="true" className="size-5 shrink-0 text-champagne-dark" strokeWidth={1.5} />
                  <span className="font-body text-eyebrow font-semibold uppercase">Audit Logging Active</span>
                </div>
                <p className="font-body text-caption text-slate">
                  Modifications to fiscal settlement policies require Dual-Factor
                  Signoff and are logged to the KRA Tax Ledger archive.
                </p>
              </div>
            </nav>
          </aside>

          <div className="lg:col-span-9">
            <PaymentSettingsForm />
          </div>
        </div>
      </div>
    </AdminShell>
  );
}
