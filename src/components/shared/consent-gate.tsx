"use client";

import { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

// DESIGN.md Section 4 consent line: the submit button stays disabled until the
// visitor opts in. This is the single interactive leaf for the contact form;
// the form itself stays a Server Component.

export function ConsentGate() {
  const [agreed, setAgreed] = useState(false);

  return (
    <div className="flex flex-col gap-4">
      <label
        htmlFor="contact-consent"
        className="flex min-h-11 cursor-pointer items-start gap-2 font-body text-small text-slate"
      >
        <input
          id="contact-consent"
          name="consent"
          type="checkbox"
          required
          checked={agreed}
          onChange={(event) => setAgreed(event.target.checked)}
          className="mt-1 size-4 rounded border-stone accent-ink"
        />
        <span>
          I agree to the processing of my details as described in the{" "}
          <Link
            href="/privacy"
            className="text-ink underline decoration-champagne decoration-1 underline-offset-4"
          >
            Privacy Policy
          </Link>
          .
        </span>
      </label>
      <Button type="submit" variant="primary" disabled={!agreed}>
        Send message
      </Button>
    </div>
  );
}
