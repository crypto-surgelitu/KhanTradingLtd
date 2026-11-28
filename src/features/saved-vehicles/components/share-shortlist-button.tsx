"use client";

import { Share2 } from "lucide-react";

// Shares the shortlist URL through the Web Share API when available, falling
// back to copying the link. No app data leaves the browser.
export function ShareShortlistButton() {
  const handleShare = async () => {
    const url = window.location.href;
    try {
      if (typeof navigator.share === "function") {
        await navigator.share({ title: "Saved vehicles — KHANS TRADING Ltd", url });
        return;
      }
      await navigator.clipboard.writeText(url);
    } catch {
      // Share dismissed or clipboard blocked: nothing to do.
    }
  };

  return (
    <button
      type="button"
      className="inline-flex h-11 items-center gap-2 rounded-sm border border-stone bg-white px-4 font-body text-button text-ink transition-colors hover:bg-ivory focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ink motion-safe:active:scale-98"
      onClick={handleShare}
    >
      <Share2 aria-hidden="true" className="size-5" strokeWidth={1.5} />
      <span>Share shortlist</span>
    </button>
  );
}
