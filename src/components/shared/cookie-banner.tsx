"use client";

import { useEffect, useState } from "react";
import { X } from "lucide-react";
import { Button } from "@/components/ui/button";

const preferenceRows = [
  { id: "necessary", label: "Necessary", description: "Required for the site to work.", locked: true },
  { id: "analytics", label: "Analytics", description: "Helps us understand how the site is used.", locked: false },
  { id: "marketing", label: "Marketing", description: "Used to measure campaigns.", locked: false },
] as const;

// DESIGN.md Section 4 cookie banner: first-visit card (desktop bottom-left,
// mobile bottom sheet) with Accept all / Reject non-essential / Manage
// preferences. Preferences open a modal with Necessary (always on), Analytics
// and Marketing toggles. Never blocks the page.
export function CookieBanner() {
  const [visible, setVisible] = useState(true);
  const [preferencesOpen, setPreferencesOpen] = useState(false);
  const [analytics, setAnalytics] = useState(false);
  const [marketing, setMarketing] = useState(false);

  useEffect(() => {
    if (!preferencesOpen) return;
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setPreferencesOpen(false);
    };
    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [preferencesOpen]);

  if (!visible) return null;

  return (
    <>
      <div
        role="region"
        aria-label="Cookie consent"
        className="fixed inset-x-0 bottom-0 z-40 rounded-t-md border border-stone bg-white p-6 shadow-lg md:inset-x-auto md:bottom-6 md:left-6 md:max-w-banner md:rounded-md"
      >
        <p className="font-body text-small text-slate">
          We use cookies to keep the site working and to understand how it is
          used. You can change your choice at any time.
        </p>
        <div className="mt-4 flex flex-wrap items-center gap-3">
          <Button onClick={() => setVisible(false)}>Accept all</Button>
          <Button variant="secondary" onClick={() => setVisible(false)}>
            Reject non-essential
          </Button>
          <Button variant="link" size="link" onClick={() => setPreferencesOpen(true)}>
            Manage preferences
          </Button>
        </div>
      </div>

      {preferencesOpen ? (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-ink/50 p-4">
          <div
            role="dialog"
            aria-modal="true"
            aria-labelledby="cookie-preferences-title"
            className="w-full max-w-banner rounded-lg bg-white p-6 shadow-lg"
          >
            <div className="mb-4 flex items-start justify-between gap-4">
              <h2 id="cookie-preferences-title" className="font-heading text-h3">
                Cookie preferences
              </h2>
              <button
                type="button"
                aria-label="Close cookie preferences"
                onClick={() => setPreferencesOpen(false)}
                className="flex size-11 items-center justify-center rounded-full border border-stone bg-white text-ink transition-colors hover:bg-champagne-tint"
              >
                <X aria-hidden="true" className="size-5" strokeWidth={1.5} />
              </button>
            </div>
            <ul className="flex flex-col gap-4">
              {preferenceRows.map((row) => {
                const checked =
                  row.locked || (row.id === "analytics" ? analytics : marketing);
                return (
                  <li key={row.id} className="flex items-start justify-between gap-4">
                    <div>
                      <p className="font-body text-body font-medium">{row.label}</p>
                      <p className="font-body text-small text-slate">{row.description}</p>
                    </div>
                    <button
                      type="button"
                      role="switch"
                      aria-checked={checked}
                      aria-label={`${row.label} cookies`}
                      disabled={row.locked}
                      onClick={() => {
                        if (row.id === "analytics") setAnalytics(!analytics);
                        if (row.id === "marketing") setMarketing(!marketing);
                      }}
                      className={`flex h-6 w-11 flex-none items-center rounded-full border px-0.5 transition-colors ${
                        checked
                          ? "border-ink bg-ink"
                          : "border-stone bg-white"
                      } disabled:opacity-50`}
                    >
                      <span
                        className={`size-5 rounded-full transition-transform ${
                          checked
                            ? "translate-x-5 bg-white"
                            : "translate-x-0 bg-mist"
                        }`}
                      />
                    </button>
                  </li>
                );
              })}
            </ul>
            <div className="mt-6 flex justify-end">
              <Button onClick={() => setPreferencesOpen(false)}>Save preferences</Button>
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
}
