import type { Metadata } from "next";
import { ContactCta } from "@/features/contact/components/contact-cta";
import { ContactDetails } from "@/features/contact/components/contact-details";
import { ContactFaq } from "@/features/contact/components/contact-faq";
import { ContactForm } from "@/features/contact/components/contact-form";
import { ContactHero } from "@/features/contact/components/contact-hero";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Speak with our Nairobi showroom team regarding vehicle enquiries, viewings, financing, or trade-ins.",
};

// DESIGN.md Screen 5 — Contact Us. Server Component (the only interactive leaf
// is the shared ConsentGate); the <main> landmark comes from the (public)
// layout. Sections follow the approved Stitch export: hero, form + contact
// cards and map block, quick FAQs, immediate-assistance CTA.

export default function ContactPage() {
  return (
    <>
      <ContactHero />

      <section className="bg-ivory py-14 sm:py-18 lg:py-24">
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
          <ContactForm />
          <ContactDetails />
        </div>
      </section>

      <ContactFaq />
      <ContactCta />
    </>
  );
}
