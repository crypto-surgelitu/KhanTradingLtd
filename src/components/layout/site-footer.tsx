import Image from "next/image";
import Link from "next/link";
import { ChevronDown, Clock, Globe, Mail, MapPin, Phone, Share2 } from "lucide-react";
import { siteConfig } from "@/config/site";

const quickLinks = [
  { href: "/", label: "Home" },
  { href: "/vehicles", label: "Vehicles" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
  { href: "/track", label: "Track Your Purchase" },
  { href: "/book-viewing", label: "Book a Viewing" },
  { href: "/request-vehicle", label: "Request a Vehicle" },
  { href: "/faq", label: "FAQ" },
  { href: "/faq#how-to-buy", label: "How to Buy" },
];

const categories = [
  { href: "/vehicles?body_type=suv", label: "SUV" },
  { href: "/vehicles?body_type=sedan", label: "Sedan" },
  { href: "/vehicles?body_type=hatchback", label: "Hatchback" },
  { href: "/vehicles?body_type=pickup", label: "Pickup" },
  { href: "/vehicles?body_type=van", label: "Van" },
  { href: "/vehicles?body_type=luxury", label: "Luxury" },
];

const socialLinks = [
  { href: "#", label: "[SOCIAL LINK]", icon: Share2 },
  { href: "#", label: "[SOCIAL LINK]", icon: Globe },
  { href: siteConfig.links.email, label: "[SOCIAL LINK]", icon: Mail },
];

type FooterLink = { href: string; label: string };

// DESIGN.md Section 5.2: mobile columns stack as accordions; desktop shows the
// lists. Rendered as a mobile <details> plus a desktop list (zero JS).
function FooterLinkColumn({
  heading,
  links,
}: {
  heading: string;
  links: FooterLink[];
}) {
  return (
    <div>
      <details className="lg:hidden">
        <summary className="flex cursor-pointer list-none items-center justify-between py-2 font-body text-eyebrow uppercase text-champagne">
          {heading}
          <ChevronDown
            aria-hidden="true"
            className="accordion-chevron size-5"
            strokeWidth={1.5}
          />
        </summary>
        <ul className="flex flex-col gap-2 pb-2">
          {links.map((link) => (
            <li key={link.label}>
              <Link
                href={link.href}
                className="font-body text-small text-mist transition-colors hover:text-white"
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </details>
      <div className="hidden lg:block">
        <h3 className="mb-4 font-body text-eyebrow uppercase text-champagne">
          {heading}
        </h3>
        <ul className="flex flex-col gap-2">
          {links.map((link) => (
            <li key={link.label}>
              <Link
                href={link.href}
                className="font-body text-small text-mist transition-colors hover:text-white"
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

// DESIGN.md Section 5.2 footer: ink background, white logo, description,
// social icons (placeholders), three link columns and a bottom bar.
export function SiteFooter() {
  return (
    <footer className="bg-ink text-white">
      <div className="mx-auto max-w-7xl px-4 pt-12 pb-6 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-4">
          <div>
            <Image
              src="/brand/logo-white.png"
              alt="KHANS TRADING Ltd"
              width={1600}
              height={537}
              className="mb-4 h-10 w-auto object-contain lg:h-12"
            />
            <p className="mb-4 font-body text-body text-mist">{siteConfig.tagline}</p>
            <div className="flex items-center gap-3">
              {socialLinks.map((social, index) => (
                <a
                  key={`${social.label}-${index}`}
                  href={social.href}
                  aria-label={social.label}
                  className="flex size-11 items-center justify-center rounded-full border border-graphite text-white transition-colors hover:border-champagne hover:text-champagne"
                >
                  <social.icon aria-hidden="true" className="size-5" strokeWidth={1.5} />
                </a>
              ))}
            </div>
          </div>

          <FooterLinkColumn heading="Quick Links" links={quickLinks} />
          <FooterLinkColumn heading="Vehicle Categories" links={categories} />

          <div>
            <h3 className="mb-4 font-body text-eyebrow uppercase text-champagne">
              Contact
            </h3>
            <ul className="flex flex-col gap-2 font-body text-small text-mist">
              <li className="flex items-start gap-2">
                <MapPin aria-hidden="true" className="mt-0.5 size-5 shrink-0" strokeWidth={1.5} />
                {siteConfig.address}
              </li>
              <li>
                <a
                  href={siteConfig.links.phone}
                  className="inline-flex items-center gap-2 transition-colors hover:text-white"
                >
                  <Phone aria-hidden="true" className="size-5 shrink-0" strokeWidth={1.5} />
                  {siteConfig.phone}
                </a>
              </li>
              <li>
                <a
                  href={siteConfig.links.email}
                  className="inline-flex items-center gap-2 transition-colors hover:text-white"
                >
                  <Mail aria-hidden="true" className="size-5 shrink-0" strokeWidth={1.5} />
                  {siteConfig.email}
                </a>
              </li>
              <li className="flex items-start gap-2">
                <Clock aria-hidden="true" className="mt-0.5 size-5 shrink-0" strokeWidth={1.5} />
                {siteConfig.openingHours}
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-10 flex flex-col gap-3 border-t border-graphite pt-6 font-body text-small text-mist sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} KHANS TRADING Ltd. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <Link href="/privacy" className="transition-colors hover:text-white">
              Privacy Policy
            </Link>
            <Link href="/terms" className="transition-colors hover:text-white">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
