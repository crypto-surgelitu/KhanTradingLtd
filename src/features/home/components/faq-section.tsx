import { ChevronDown } from "lucide-react";

const faqs = [
  {
    question: "Do you offer bank financing?",
    answer:
      "Yes. We work with leading Kenyan commercial banks and asset finance partners to help structure competitive financing tailored to your needs.",
  },
  {
    question: "Can I trade in my current vehicle?",
    answer:
      "Yes. We accept well-maintained vehicles as part exchange. Bring your vehicle for a physical inspection and a transparent market valuation.",
  },
  {
    question: "Are all vehicles inspected before sale?",
    answer:
      "Every vehicle is inspected for mechanical integrity, chassis condition, and verified mileage. Independent pre-purchase inspections are also welcome.",
  },
  {
    question: "How do I book a viewing or test drive?",
    answer:
      "You can book a private viewing directly through our website or message us on WhatsApp to confirm a convenient time at our showroom.",
  },
  {
    question: "Do you handle NTSA logbook transfers?",
    answer:
      "Yes. Our documentation team manages the complete NTSA TIMS transfer process so ownership is updated cleanly and promptly.",
  },
];

// DESIGN.md Screen 1 section 11: five questions in a clean accordion.
// Zero-JS native <details>; chevrons rotate via globals.css.
export function FaqSection() {
  return (
    <section className="bg-ivory py-14 sm:py-18 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-8 text-center lg:mb-12">
          <p className="mb-2 font-body text-eyebrow uppercase text-champagne-dark">
            Questions
          </p>
          <h2 className="font-heading text-h2 lg:text-h2-lg">
            Frequently asked questions
          </h2>
        </div>
        <div className="mx-auto flex max-w-3xl flex-col gap-4">
          {faqs.map((faq) => (
            <details key={faq.question} className="rounded-md border border-stone bg-white">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 px-6 py-5 font-heading text-h3">
                {faq.question}
                <ChevronDown
                  aria-hidden="true"
                  className="accordion-chevron size-6 shrink-0 text-slate"
                  strokeWidth={1.5}
                />
              </summary>
              <p className="px-6 pb-5 font-body text-body text-slate">{faq.answer}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
