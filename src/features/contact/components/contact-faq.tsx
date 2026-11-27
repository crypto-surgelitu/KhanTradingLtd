import { ChevronDown } from "lucide-react";

// DESIGN.md Screen 5 quick FAQs: four zero-JS <details> accordions in the
// approved question order.

const faqs = [
  {
    question: "How do I book a viewing or test drive?",
    answer:
      "You can book a private viewing or test drive by submitting the enquiry form above, calling our showroom directly, or messaging us on WhatsApp. Please bring a valid Kenyan driving licence for test drives.",
  },
  {
    question: "Do you accept trade-ins?",
    answer:
      "Yes. We accept well-maintained trade-ins subject to a physical inspection and logbook verification at our Nairobi showroom. Share your current vehicle’s make, model, year, and mileage in the form above for an initial valuation.",
  },
  {
    question: "Can you source a specific vehicle?",
    answer:
      "Yes. If the exact specification or trim you are looking for is not currently in our showroom, our team can source verified units from Japan, the UK, or local networks with full inspection reports and transparent landed costings.",
  },
  {
    question: "What documents are needed for financing?",
    answer:
      "For bank or asset-finance applications, you will typically need your National ID or Passport, KRA PIN certificate, 6 months of certified bank statements, and proof of income (payslips or business registration).",
  },
];

export function ContactFaq() {
  return (
    <section className="bg-white py-14 sm:py-18 lg:py-24">
      <div className="mx-auto flex max-w-7xl flex-col gap-12 px-4 sm:px-6 lg:px-8">
        <div className="flex max-w-3xl flex-col gap-2">
          <span className="font-body text-eyebrow uppercase text-champagne-dark">
            Common Questions
          </span>
          <h2 className="font-heading text-h2 lg:text-h2-lg">Quick FAQs</h2>
          <p className="font-body text-body text-slate">
            Straightforward answers on viewings, trade-ins, sourcing, and
            financing.
          </p>
        </div>

        <div className="flex flex-col gap-3">
          {faqs.map((faq) => (
            <details
              key={faq.question}
              className="group rounded-md border border-stone bg-white"
            >
              <summary className="flex min-h-11 cursor-pointer list-none items-center justify-between gap-4 px-5 py-4">
                <h3 className="font-heading text-h3 lg:text-h3-lg">
                  {faq.question}
                </h3>
                <ChevronDown
                  aria-hidden="true"
                  className="accordion-chevron size-5 shrink-0 text-slate"
                  strokeWidth={1.5}
                />
              </summary>
              <p className="px-5 pb-5 font-body text-body text-slate">
                {faq.answer}
              </p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
