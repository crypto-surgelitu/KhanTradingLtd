import { CheckCircle } from "lucide-react";
import { ConsentGate } from "@/components/shared/consent-gate";

// DESIGN.md Screen 5 contact form: labelled fields with the designed
// validation state on Phone and the success-confirmation state preview.
// Business details never appear here — they live in src/config/site.ts.

const inputClasses =
  "h-12 w-full rounded-sm border border-stone bg-white px-4 font-body text-body text-ink shadow-sm transition-colors placeholder:text-mist focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ink";

const labelClasses = "font-body text-small font-medium text-ink";

export function ContactForm() {
  return (
    <div className="flex flex-col gap-4">
      <span className="font-body text-eyebrow uppercase text-champagne-dark">
        Direct Enquiry
      </span>
      <h2 className="font-heading text-h2 lg:text-h2-lg">Send us a message</h2>

      {/* TODO(KHANS TRADING Ltd / backend): wire this form to the contact
          server action in features/contact/actions.ts (see the NEEDS-BACKEND
          entry in docs/TASKS.md). Markup and states are complete; no submit
          logic is connected yet. */}
      <form className="flex flex-col gap-6 pt-2" noValidate>
        <div className="flex flex-col gap-2">
          <label htmlFor="contact-name" className={labelClasses}>
            Full name
          </label>
          <input
            id="contact-name"
            name="name"
            type="text"
            autoComplete="name"
            required
            className={inputClasses}
          />
        </div>

        <div className="flex flex-col gap-2">
          <label htmlFor="contact-phone" className={labelClasses}>
            Phone
          </label>
          <input
            id="contact-phone"
            name="phone"
            type="tel"
            autoComplete="tel"
            required
            aria-invalid="true"
            aria-describedby="contact-phone-error"
            className={`${inputClasses} border-danger`}
          />
          <p id="contact-phone-error" className="font-body text-small text-danger">
            Please enter a valid Kenyan phone number (e.g. +254 7XX XXX XXX).
          </p>
        </div>

        <div className="flex flex-col gap-2">
          <label htmlFor="contact-email" className={labelClasses}>
            Email
          </label>
          <input
            id="contact-email"
            name="email"
            type="email"
            autoComplete="email"
            className={inputClasses}
          />
        </div>

        <div className="flex flex-col gap-2">
          <label htmlFor="contact-interest" className={labelClasses}>
            I am interested in
          </label>
          <select id="contact-interest" name="interest" className={inputClasses}>
            <option value="buying">Buying</option>
            <option value="selling">Selling</option>
            <option value="trade-in">Trade-in</option>
            <option value="finance">Finance</option>
            <option value="other">Other</option>
          </select>
        </div>

        <div className="flex flex-col gap-2">
          <label htmlFor="contact-vehicle" className={labelClasses}>
            Vehicle of interest
          </label>
          <input id="contact-vehicle" name="vehicle" type="text" className={inputClasses} />
        </div>

        <div className="flex flex-col gap-2">
          <label htmlFor="contact-message" className={labelClasses}>
            Message
          </label>
          <textarea
            id="contact-message"
            name="message"
            rows={5}
            className="w-full rounded-sm border border-stone bg-white px-4 py-3 font-body text-body text-ink shadow-sm transition-colors placeholder:text-mist focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ink"
          />
        </div>

        <ConsentGate />
      </form>

      <article className="mt-2 flex items-start gap-3 rounded-md border border-stone bg-white p-4">
        <CheckCircle aria-hidden="true" className="size-6 shrink-0 text-success" strokeWidth={1.5} />
        <div className="flex flex-col gap-1">
          <p className="font-body text-eyebrow uppercase text-slate">
            Form Confirmation State Preview
          </p>
          <p className="font-body text-small text-slate">
            Message received — thank you. Our team will respond within one
            business day via your preferred channel.
          </p>
        </div>
      </article>
    </div>
  );
}
