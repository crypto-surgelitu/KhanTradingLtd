"use client";

import { useState } from "react";
import { ChevronDown, FileText, Shield, UserPlus } from "lucide-react";

// DESIGN.md Screen J detail actions dropdown (Convert to Deal / Create
// Invoice / Data Requests). One of the small interactive leaves for this
// screen. TODO(KHANS TRADING Ltd / backend): wire the menu actions to their
// server actions (docs/TASKS.md).

const menuItems = [
  { label: "Convert to Deal", icon: UserPlus },
  { label: "Create Invoice", icon: FileText },
  { label: "Data Requests", icon: Shield },
] as const;

export function CustomerActions() {
  const [open, setOpen] = useState(false);

  return (
    <div className="relative">
      <button
        type="button"
        aria-expanded={open}
        aria-haspopup="menu"
        onClick={() => setOpen((current) => !current)}
        className="inline-flex min-h-11 items-center gap-2 rounded-sm border border-ink px-4 font-body text-button text-ink transition-colors hover:bg-ink hover:text-white"
      >
        Actions
        <ChevronDown aria-hidden="true" className="size-5" strokeWidth={1.5} />
      </button>

      {open ? (
        <ul
          role="menu"
          className="absolute right-0 z-10 mt-1 min-w-full rounded-sm border border-stone bg-white py-1 shadow-md"
        >
          {menuItems.map((item) => (
            <li key={item.label} role="none">
              <button
                type="button"
                role="menuitem"
                onClick={() => setOpen(false)}
                className="flex min-h-11 w-full items-center gap-2 whitespace-nowrap px-4 font-body text-small text-ink transition-colors hover:bg-champagne-tint"
              >
                <item.icon aria-hidden="true" className="size-5 text-champagne" strokeWidth={1.5} />
                {item.label}
              </button>
            </li>
          ))}
        </ul>
      ) : null}
    </div>
  );
}
