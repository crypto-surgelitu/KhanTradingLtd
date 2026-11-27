"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { trackNotificationChannels } from "@/features/tracking/mocks";

// DESIGN.md Screen 6B notification preferences. The single interactive leaf
// for this screen (channel toggles + save). TODO(KHANS TRADING Ltd / backend):
// wire to the notification-preferences action in features/tracking (docs/TASKS.md).

export function AlertSettings() {
  const [channels, setChannels] = useState<Record<string, boolean>>(() =>
    Object.fromEntries(
      trackNotificationChannels.map((channel) => [channel.id, channel.defaultChecked]),
    ),
  );

  return (
    <section aria-label="Alert settings" className="pb-12">
      <div className="rounded-md border border-stone bg-white p-6 lg:p-8">
        <div className="flex flex-col gap-1 pb-6">
          <h2 className="font-heading text-h2 lg:text-h2-lg">Alert Settings</h2>
          <p className="font-body text-small text-slate">Notification Channels</p>
        </div>

        <div className="flex flex-col gap-4">
          {trackNotificationChannels.map((channel) => (
            <div
              key={channel.id}
              className="flex items-start justify-between gap-4 rounded-md border border-stone p-4"
            >
              <div className="flex flex-col gap-1">
                <label
                  htmlFor={channel.id}
                  className="font-body text-small font-medium text-ink"
                >
                  {channel.title}
                </label>
                <p className="font-body text-caption text-slate">
                  {channel.description}
                </p>
              </div>
              <input
                id={channel.id}
                name={channel.id}
                type="checkbox"
                role="switch"
                checked={channels[channel.id]}
                onChange={(event) =>
                  setChannels((current) => ({
                    ...current,
                    [channel.id]: event.target.checked,
                  }))
                }
                className="mt-1 size-5 shrink-0 rounded-full border-stone accent-ink"
              />
            </div>
          ))}
        </div>

        <Button type="button" variant="primary" className="mt-6">
          Save Preferences
        </Button>
      </div>
    </section>
  );
}
