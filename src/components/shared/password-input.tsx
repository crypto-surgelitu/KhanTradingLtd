"use client";

import { useState } from "react";
import { Eye, EyeOff } from "lucide-react";

// DESIGN.md Screen A password field: the designed show/hide affordance. This
// is the single interactive leaf for the admin login screen; the page itself
// stays a Server Component.

type PasswordInputProps = {
  id: string;
  name: string;
  autoComplete?: string;
};

export function PasswordInput({ id, name, autoComplete }: PasswordInputProps) {
  const [visible, setVisible] = useState(false);

  return (
    <div className="relative">
      <input
        id={id}
        name={name}
        type={visible ? "text" : "password"}
        autoComplete={autoComplete}
        required
        className="h-12 w-full rounded-sm border border-stone bg-white pl-4 pr-12 font-body text-body text-ink shadow-sm transition-colors placeholder:text-mist focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ink"
      />
      <button
        type="button"
        aria-label={visible ? "Hide password" : "Show password"}
        onClick={() => setVisible((current) => !current)}
        className="absolute right-1 top-1/2 flex size-11 -translate-y-1/2 items-center justify-center rounded-sm text-slate transition-colors hover:text-ink focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ink"
      >
        {visible ? (
          <Eye aria-hidden="true" className="size-5" strokeWidth={1.5} />
        ) : (
          <EyeOff aria-hidden="true" className="size-5" strokeWidth={1.5} />
        )}
      </button>
    </div>
  );
}
