import type { Metadata } from "next";
import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { RequestConfirmation } from "@/features/request/components/request-confirmation";
import { RequestForm } from "@/features/request/components/request-form";
import { RequestGuarantee } from "@/features/request/components/request-guarantee";
import { RequestProtocols } from "@/features/request/components/request-protocols";
import { RequestRecent } from "@/features/request/components/request-recent";

export const metadata: Metadata = {
  title: "Request a Vehicle",
  description:
    "Tell us what you are looking for and our global acquisition team will source a verified, clean-title vehicle for you.",
};

// DESIGN.md Screen 6D — Request a Vehicle. Server Component (the <main>
// landmark comes from the (public) layout); form interactivity lives in the
// single client leaf RequestForm. SAMPLE confirmation and showcase data come
// from features/request/mocks.ts.

export default function RequestVehiclePage() {
  return (
    <div className="mx-auto max-w-7xl px-4 pb-0 pt-8 sm:px-6 lg:px-8">
      <nav aria-label="Breadcrumb" className="flex flex-wrap items-center gap-1.5 pb-6 font-body text-small text-slate">
        <Link href="/" className="transition-colors hover:text-ink">
          Home
        </Link>
        <ChevronRight aria-hidden="true" className="size-4 text-mist" strokeWidth={1.5} />
        <Link href="/vehicles" className="transition-colors hover:text-ink">
          Vehicles
        </Link>
        <ChevronRight aria-hidden="true" className="size-4 text-mist" strokeWidth={1.5} />
        <span className="font-medium text-ink">Request a Vehicle</span>
      </nav>

      <div className="flex flex-col gap-2 pb-12">
        <span className="font-body text-eyebrow uppercase text-champagne-dark">
          Bespoke Vehicle Sourcing
        </span>
        <h1 className="font-heading text-h1 lg:text-h1-lg">
          Tell us what you are looking for.
        </h1>
        <p className="max-w-3xl font-body text-body-l text-slate lg:text-body-l-lg">
          Cannot find your ideal vehicle in our local stock? Our global
          acquisition team sources verified, clean-title vehicles directly from
          premier Japan, UK, and regional dealer networks with institutional
          transparency.
        </p>
      </div>

      <RequestProtocols />
      <RequestForm />
      <div className="pt-12">
        <RequestConfirmation />
      </div>
      <RequestGuarantee />
      <RequestRecent />
    </div>
  );
}
