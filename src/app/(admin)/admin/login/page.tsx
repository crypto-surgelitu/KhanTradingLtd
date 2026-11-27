import type { Metadata } from "next";
import Image from "next/image";
import { AlertCircle, ArrowRight, Mail, ShieldCheck } from "lucide-react";
import { Button } from "@/components/ui/button";
import { PasswordInput } from "@/components/shared/password-input";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: "Admin Login",
  description:
    "Internal staff portal for KHANS TRADING Ltd dealership operations.",
  robots: { index: false, follow: false },
};

// DESIGN.md Section 8 Admin Screen A — Login. Centred card on ivory with the
// logo, credentials form, the designed invalid-credentials state and the SSO
// notice. No public navigation. Server Component; the only interactive leaf
// is the shared PasswordInput (show/hide).

const inputClasses =
  "h-12 w-full rounded-sm border border-stone bg-white px-4 font-body text-body text-ink shadow-sm transition-colors placeholder:text-mist focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ink";

const labelClasses = "font-body text-small font-medium text-ink";

export default function AdminLoginPage() {
  return (
    <main className="flex min-h-screen flex-col bg-ivory">
      <div className="flex flex-1 flex-col items-center justify-center px-4 py-12 sm:px-6">
        <Image
          src="/brand/logo-black.png"
          alt="KHANS TRADING Ltd."
          width={1600}
          height={537}
          className="h-10 w-auto object-contain sm:h-12"
          priority
        />

        <div className="mt-8 w-full max-w-md rounded-md border border-stone bg-white p-6 shadow-md lg:p-8">
          <span className="font-body text-eyebrow uppercase text-champagne-dark">
            Internal Portal
          </span>
          <h1 className="pt-2 font-heading text-h2 lg:text-h2-lg">
            Sign in to your dashboard
          </h1>
          <p className="pt-2 font-body text-body text-slate">
            Access inventory, sales pipeline, and dealership operations.
          </p>

          <div
            role="alert"
            className="mt-6 flex items-start gap-2 rounded-sm bg-danger/10 p-3"
          >
            <AlertCircle
              aria-hidden="true"
              className="size-5 shrink-0 text-danger"
              strokeWidth={1.5}
            />
            <p className="font-body text-small text-danger">
              Invalid credentials. Please verify your email and password, or
              contact your system administrator.
            </p>
          </div>

          {/* TODO(KHANS TRADING Ltd / backend): wire this form to the admin
              auth server action (src/server/auth) and the password-reset
              flow — see docs/TASKS.md. Markup and designed states only. */}
          <form className="flex flex-col gap-6 pt-6" noValidate>
            <div className="flex flex-col gap-2">
              <div className="flex items-center justify-between gap-2">
                <label htmlFor="login-email" className={labelClasses}>
                  Staff email address
                </label>
                <span className="inline-flex items-center rounded-full bg-success/10 px-2.5 py-1 font-body text-caption text-success">
                  Domain verified
                </span>
              </div>
              <div className="relative">
                <input
                  id="login-email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  className={`${inputClasses} pr-12`}
                />
                <Mail
                  aria-hidden="true"
                  className="pointer-events-none absolute right-4 top-1/2 size-5 -translate-y-1/2 text-mist"
                  strokeWidth={1.5}
                />
              </div>
            </div>

            <div className="flex flex-col gap-2">
              <label htmlFor="login-password" className={labelClasses}>
                Password
              </label>
              <PasswordInput id="login-password" name="password" autoComplete="current-password" />
            </div>

            <a
              href={`mailto:${siteConfig.supportEmail}`}
              target="_blank"
              rel="noopener noreferrer"
              className="self-end font-body text-small font-medium text-ink underline decoration-champagne decoration-1 underline-offset-4 transition-colors hover:text-champagne-dark"
            >
              Forgot password?
            </a>

            <label
              htmlFor="login-remember"
              className="flex min-h-11 cursor-pointer items-center gap-2 font-body text-small text-slate"
            >
              <input
                id="login-remember"
                name="remember"
                type="checkbox"
                defaultChecked
                className="size-4 rounded border-stone accent-ink"
              />
              Remember this device for 30 days
            </label>

            <Button type="submit" variant="primary" className="w-full">
              Sign in
              <ArrowRight aria-hidden="true" className="ml-2 size-5" strokeWidth={1.5} />
            </Button>
          </form>

          <div className="mt-8 flex items-start gap-3 border-t border-stone pt-6">
            <ShieldCheck
              aria-hidden="true"
              className="size-6 shrink-0 text-champagne"
              strokeWidth={1.5}
            />
            <div className="flex flex-col gap-1">
              <h2 className="font-heading text-h3 lg:text-h3-lg">
                Hardware Enforced SSO
              </h2>
              <p className="font-body text-small text-slate">
                Protected by enterprise two-factor authentication. Unauthorized
                access attempts are monitored and logged.
              </p>
            </div>
          </div>
        </div>
      </div>

      <footer className="px-4 pb-8 sm:px-6">
        <Image
          src="/brand/logo-black.png"
          alt="KHANS TRADING Ltd."
          width={1600}
          height={537}
          className="mx-auto h-12 w-auto object-contain"
        />
        <p className="pt-4 text-center font-body text-small text-slate">
          KHANS TRADING <span aria-hidden="true">•</span> Dealership Management
          System <span aria-hidden="true">•</span> Support:{" "}
          {siteConfig.supportEmail}
        </p>
        <p className="pt-2 text-center font-body text-caption text-mist">
          © 2025 KHANS TRADING Ltd. All rights reserved. Authorized staff only.
        </p>
      </footer>
    </main>
  );
}
