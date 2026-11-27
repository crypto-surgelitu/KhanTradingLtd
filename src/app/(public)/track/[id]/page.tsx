import type { Metadata } from "next";
import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { AlertSettings } from "@/features/tracking/components/alert-settings";
import { TrackCurrentStep } from "@/features/tracking/components/track-current-step";
import { TrackDocuments } from "@/features/tracking/components/track-documents";
import { TrackPayments } from "@/features/tracking/components/track-payments";
import { TrackProgress } from "@/features/tracking/components/track-progress";
import { TrackSummaryHeader } from "@/features/tracking/components/track-summary-header";
import { TrackSupport } from "@/features/tracking/components/track-support";
import { TrackUpdates } from "@/features/tracking/components/track-updates";
import { trackSummary } from "@/features/tracking/mocks";

export const metadata: Metadata = {
  title: "Track Your Purchase",
  description:
    "Live purchase progress, documents, payments and handover timeline for your KHANS TRADING Ltd vehicle.",
};

// DESIGN.md Screen 6B — Track Your Purchase: Detail. Server Component (the
// <main> landmark comes from the (public) layout); the only interactive leaf
// is AlertSettings. All deal data is the labelled SAMPLE mock in
// features/tracking/mocks.ts and is meant to render only for a verified
// tracker session (AGENTS.md Section 8).

export default function TrackDetailPage() {
  return (
    <div className="mx-auto max-w-7xl px-4 pt-8 sm:px-6 lg:px-8">
      <nav aria-label="Breadcrumb" className="flex flex-wrap items-center gap-1.5 pb-6 font-body text-small text-slate">
        <Link href="/" className="transition-colors hover:text-ink">
          Home
        </Link>
        <ChevronRight aria-hidden="true" className="size-4 text-mist" strokeWidth={1.5} />
        <Link href="/track" className="transition-colors hover:text-ink">
          Track Your Purchase
        </Link>
        <ChevronRight aria-hidden="true" className="size-4 text-mist" strokeWidth={1.5} />
        <span className="font-medium text-ink">{trackSummary.ref}</span>
      </nav>

      <TrackSummaryHeader />
      <TrackProgress />
      <TrackCurrentStep />
      <TrackDocuments />
      <TrackUpdates />
      <TrackPayments />
      <AlertSettings />
      <TrackSupport />
    </div>
  );
}
