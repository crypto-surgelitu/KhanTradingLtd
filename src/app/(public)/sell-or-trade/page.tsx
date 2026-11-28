import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  Award,
  Banknote,
  Car,
  CheckCircle2,
  ClipboardCheck,
  Home,
  Landmark,
  MapPin,
  MessageCircle,
  Phone,
  Shield,
  TrendingUp,
} from "lucide-react";
import { siteConfig } from "@/config/site";
import { TradeInForm } from "@/features/trade-in/components/trade-in-form";

export const metadata: Metadata = {
  title: "Sell or Trade In",
  description:
    "Receive a competitive, transparent valuation from Khans Trading Ltd. Upgrade effortlessly to our curated showroom inventory or secure instant RTGS bank settlement with absolute institutional security.",
};

const steps = [
  {
    icon: Car,
    label: "Step 01",
    title: "Tell Us About Your Vehicle",
    body: "Share your vehicle's make, year, mileage, and condition along with clear exterior and cabin photos.",
  },
  {
    icon: CheckCircle2,
    label: "Step 02",
    title: "We Evaluate & Inspect",
    body: "Our automotive appraisal desk validates documentation and current Kenyan market pricing within 24 hours.",
  },
  {
    icon: Banknote,
    label: "Step 03",
    title: "Direct Payout or Trade-In",
    body: "Choose direct RTGS wire settlement, or apply vehicle equity toward any verified showroom luxury model.",
  },
] as const;

const benefits = [
  {
    icon: Landmark,
    title: "Direct Bank Settlement",
    body: "Instant RTGS wire transfer confirmed before you release the vehicle and keys.",
  },
  {
    icon: ClipboardCheck,
    title: "Guaranteed Lien Clearance",
    body: "Still under bank financing? We coordinate directly with tier-1 lenders for prompt debt payoff.",
  },
  {
    icon: Shield,
    title: "Zero Advertising Hassle",
    body: "Eliminate unsafe home test drives, predatory low-ballers, and unvetted online brokers.",
  },
  {
    icon: TrendingUp,
    title: "Premium Trade-In Credit",
    body: "Receive elevated trade-in valuation when trading into our verified inventory.",
  },
] as const;

// DESIGN.md Section 6, Screen 9 — Sell or Trade In. Server Component (the
// <main> landmark comes from the (public) layout); all form interactivity
// lives in the single client leaf features/trade-in/components/trade-in-form.
// SAMPLE copy and options come from the Stitch export (form is presentational).
export default function SellOrTradePage() {
  return (
    <div className="w-full">
      <section aria-labelledby="sell-heading" className="pt-8 pb-12">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <nav aria-label="Breadcrumb" className="mb-8 flex flex-wrap items-center gap-2 font-body text-small text-slate">
            <Link href="/" className="flex items-center gap-1.5 transition-colors hover:text-ink">
              <Home aria-hidden="true" className="size-4" strokeWidth={1.5} />
              <span>Home</span>
            </Link>
            <span aria-hidden="true" className="text-stone">/</span>
            <span className="font-medium text-ink">Sell or Trade In</span>
          </nav>

          <div className="max-w-3xl">
            <p className="mb-3 flex items-center gap-2">
              <span aria-hidden="true" className="size-1.5 rounded-full bg-champagne" />
              <span className="font-body text-eyebrow font-semibold tracking-widest text-champagne-dark uppercase">
                Fair Appraisal &amp; Liquidity
              </span>
            </p>
            <h1 id="sell-heading" className="mb-4 font-heading text-h1 text-ink lg:text-h1-lg">
              Sell or Trade In Your Vehicle
            </h1>
            <p className="font-body text-body-l leading-relaxed text-slate lg:text-body-l-lg">
              Receive a competitive, transparent valuation from Khans Trading
              Ltd. Upgrade effortlessly to our curated showroom inventory or
              secure instant RTGS bank settlement with absolute institutional
              security.
            </p>
          </div>

          <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-3">
            {steps.map((step) => (
              <div key={step.label} className="rounded-md bg-white p-6 shadow-sm transition-shadow hover:shadow-md">
                <div className="mb-4 flex size-10 items-center justify-center rounded-sm bg-champagne-tint text-champagne-dark">
                  <step.icon aria-hidden="true" className="size-5" strokeWidth={1.5} />
                </div>
                <span className="mb-1 block font-body text-caption font-semibold tracking-wider text-champagne-dark uppercase">
                  {step.label}
                </span>
                <h2 className="mb-2 font-heading text-h3 text-ink">{step.title}</h2>
                <p className="font-body text-small text-slate">{step.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section aria-label="Valuation request" className="pb-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 items-start gap-8 lg:grid-cols-12">
            <div className="rounded-md bg-white p-8 shadow-sm lg:col-span-8 lg:p-10">
              <TradeInForm />
            </div>

            <aside aria-label="Valuation information" className="space-y-6 lg:col-span-4 lg:sticky lg:top-28">
              <div className="rounded-md bg-white p-6 shadow-sm">
                <h2 className="mb-5 flex items-center gap-2 font-heading text-h3 text-ink">
                  <Award aria-hidden="true" className="size-5 shrink-0 text-champagne-dark" strokeWidth={1.5} />
                  <span>Why Transact with Khans?</span>
                </h2>
                <ul className="space-y-5">
                  {benefits.map((benefit) => (
                    <li key={benefit.title} className="flex items-start gap-3">
                      <span className="flex size-8 shrink-0 items-center justify-center rounded-sm bg-champagne-tint text-champagne-dark">
                        <benefit.icon aria-hidden="true" className="size-5" strokeWidth={1.5} />
                      </span>
                      <div>
                        <h3 className="font-body text-body font-semibold text-ink">{benefit.title}</h3>
                        <p className="font-body text-small text-slate">{benefit.body}</p>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="rounded-md bg-ink p-6 text-white shadow-sm">
                <span className="mb-2 block font-body text-eyebrow font-semibold tracking-widest text-champagne uppercase">
                  Live Valuation Desk
                </span>
                <h2 className="mb-3 font-heading text-h3">Speak with Chief Appraiser</h2>
                <p className="mb-6 font-body text-small text-mist">
                  Need immediate clearance for high-value executive fleets or
                  luxury imports? Reach our senior desk directly.
                </p>
                <ul className="mb-6 space-y-3 font-body text-small text-stone">
                  <li className="flex items-center gap-2">
                    <Phone aria-hidden="true" className="size-5 shrink-0 text-champagne" strokeWidth={1.5} />
                    <a href={siteConfig.links.phone} className="hover:text-white">{siteConfig.phone}</a>
                  </li>
                  <li className="flex items-center gap-2">
                    <MessageCircle aria-hidden="true" className="size-5 shrink-0 text-champagne" strokeWidth={1.5} />
                    <span>{siteConfig.whatsapp}</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <MapPin aria-hidden="true" className="size-5 shrink-0 text-champagne" strokeWidth={1.5} />
                    <span>{siteConfig.address}</span>
                  </li>
                </ul>
                <a
                  href={siteConfig.links.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex h-12 w-full items-center justify-center gap-2 rounded-sm bg-champagne font-body text-button text-ink shadow-sm transition-colors hover:bg-champagne-dark focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white motion-safe:active:scale-98"
                >
                  <MessageCircle aria-hidden="true" className="size-5" strokeWidth={1.5} />
                  <span>WhatsApp Appraiser</span>
                </a>
              </div>
            </aside>
          </div>
        </div>
      </section>

      {/* DESIGN.md Screen 9 success state, shipped as the export's preview of
          the valuation-request confirmation (SAMPLE reference data). */}
      <section aria-labelledby="confirmation-preview-heading" className="bg-stone/30 py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-8 flex flex-wrap items-center justify-between gap-4">
            <div>
              <span className="mb-1 block font-body text-eyebrow font-semibold tracking-widest text-champagne-dark uppercase">
                Reference Demonstration
              </span>
              <h2 id="confirmation-preview-heading" className="font-heading text-h2 text-ink lg:text-h2-lg">
                Preview: Valuation Request Confirmation State
              </h2>
            </div>
            <span className="inline-flex items-center rounded-full bg-success/10 px-3 py-1 font-body text-caption font-medium text-success">
              Simulated Response
            </span>
          </div>

          <div className="mx-auto max-w-4xl rounded-md bg-white p-8 shadow-md lg:p-12">
            <div className="mb-8 flex flex-col gap-5 sm:flex-row sm:items-start">
              <div className="flex size-14 shrink-0 items-center justify-center rounded-full bg-champagne-tint text-champagne-dark">
                <CheckCircle2 aria-hidden="true" className="size-8" strokeWidth={1.5} />
              </div>
              <div>
                <span className="mb-1 block font-body text-caption tracking-wider text-slate uppercase">
                  Reference: #VAL-2024-884
                </span>
                <h3 className="mb-2 font-heading text-h2 text-ink lg:text-h2-lg">
                  Valuation Request Received
                </h3>
                <p className="font-body text-body text-slate">
                  Thank you, David. Our vehicle acquisition desk in Nairobi has
                  received your submission for the{" "}
                  <strong className="font-semibold text-ink">2019 Toyota Land Cruiser Prado</strong>.
                </p>
              </div>
            </div>

            <dl className="mb-8 grid grid-cols-2 gap-4 rounded-md bg-ivory p-5 md:grid-cols-4">
              <div>
                <dt className="block font-body text-caption text-mist">Target Vehicle</dt>
                <dd className="font-body text-small font-semibold text-ink">2019 Toyota Prado</dd>
              </div>
              <div>
                <dt className="block font-body text-caption text-mist">Mileage</dt>
                <dd className="font-body text-small font-semibold text-ink">44,500 km</dd>
              </div>
              <div>
                <dt className="block font-body text-caption text-mist">Intended Action</dt>
                <dd className="font-body text-small font-semibold text-ink">Cash Direct Sale</dd>
              </div>
              <div>
                <dt className="block font-body text-caption text-mist">Status</dt>
                <dd className="flex items-center gap-1.5 font-body text-caption font-semibold text-info">
                  <span aria-hidden="true" className="size-2 rounded-full bg-info motion-safe:animate-pulse" />
                  Desk Assessment
                </dd>
              </div>
            </dl>

            <div className="mb-10">
              <h3 className="mb-4 font-body text-eyebrow font-semibold tracking-widest text-graphite uppercase">
                Next Steps in the Khans Process
              </h3>
              <ol className="space-y-4">
                <li className="flex items-start gap-4">
                  <span className="mt-0.5 flex size-6 shrink-0 items-center justify-center rounded-full bg-ink font-body text-caption text-white">1</span>
                  <p className="font-body text-small text-slate">
                    <strong className="text-ink">Preliminary Market Range:</strong>{" "}
                    Our team reviews live duty metrics and communicates an
                    appraisal band via WhatsApp within 24 business hours.
                  </p>
                </li>
                <li className="flex items-start gap-4">
                  <span className="mt-0.5 flex size-6 shrink-0 items-center justify-center rounded-full bg-ink font-body text-caption text-white">2</span>
                  <p className="font-body text-small text-slate">
                    <strong className="text-ink">Physical Verification:</strong>{" "}
                    Brief 20-minute mechanical and logbook check at our Nairobi
                    showroom or concierge appraisal at your premises.
                  </p>
                </li>
                <li className="flex items-start gap-4">
                  <span className="mt-0.5 flex size-6 shrink-0 items-center justify-center rounded-full bg-ink font-body text-caption text-white">3</span>
                  <p className="font-body text-small text-slate">
                    <strong className="text-ink">Instant Settlement &amp; Transfer:</strong>{" "}
                    Instant bank RTGS payout and complete logbook ownership
                    transfer on TIMS / NTSA.
                  </p>
                </li>
              </ol>
            </div>

            <div className="flex flex-col items-center gap-4 pt-4 sm:flex-row">
              <Link
                href="/track"
                className="inline-flex h-12 w-full items-center justify-center gap-2 rounded-sm bg-ink px-6 font-body text-button text-white transition-colors hover:bg-graphite focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ink motion-safe:active:scale-98 sm:w-auto"
              >
                <span>Track Valuation Status</span>
                <ArrowRight aria-hidden="true" className="size-5" strokeWidth={1.5} />
              </Link>
              <Link
                href="/vehicles"
                className="inline-flex h-12 w-full items-center justify-center rounded-sm border border-stone bg-white px-6 font-body text-button text-ink transition-colors hover:bg-ivory focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ink sm:w-auto"
              >
                Browse Showroom Inventory
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
