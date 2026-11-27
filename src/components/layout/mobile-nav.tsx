"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { ChevronDown, Menu, Phone, X } from "lucide-react";
import { buttonVariants } from "@/components/ui/button";
import { siteConfig } from "@/config/site";

type MobileNavProps = {
  navLinks: Array<{ href: string; label: string }>;
};

// DESIGN.md Section 5.1: below 1024px the navigation is a full-screen ink
// drawer with large Jost links, a "Vehicles" accordion (body type, make,
// price), a primary contact button, and contact details at the bottom.
export function MobileNav({ navLinks }: MobileNavProps) {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) return;
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [open]);

  return (
    <>
      <button
        type="button"
        aria-label="Open menu"
        aria-expanded={open}
        onClick={() => setOpen(true)}
        className="flex size-11 items-center justify-center rounded-full bg-graphite text-white transition-colors hover:bg-champagne hover:text-ink lg:hidden"
      >
        <Menu aria-hidden="true" className="size-5" strokeWidth={1.5} />
      </button>

      {open ? (
        <div
          role="dialog"
          aria-modal="true"
          aria-label="Site menu"
          className="fixed inset-0 z-50 flex flex-col overflow-y-auto bg-ink text-white"
        >
          <div className="flex h-16 items-center justify-between px-4">
            <span className="font-heading text-h3">Menu</span>
            <button
              type="button"
              aria-label="Close menu"
              onClick={() => setOpen(false)}
              className="flex size-11 items-center justify-center rounded-full bg-graphite text-white transition-colors hover:bg-champagne hover:text-ink"
            >
              <X aria-hidden="true" className="size-5" strokeWidth={1.5} />
            </button>
          </div>

          <nav aria-label="Mobile" className="flex flex-col gap-2 px-4 pb-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="py-2 font-heading text-h2 text-white transition-colors hover:text-champagne"
              >
                {link.label}
              </Link>
            ))}
            <details className="border-t border-graphite pt-2">
              <summary className="flex cursor-pointer list-none items-center justify-between py-2 font-heading text-h2 text-white">
                Vehicles
                <ChevronDown
                  aria-hidden="true"
                  className="accordion-chevron size-6"
                  strokeWidth={1.5}
                />
              </summary>
              <div className="flex flex-col gap-4 pb-4 font-body text-body text-mist">
                <div>
                  <p className="mb-1 font-body text-eyebrow uppercase text-champagne">
                    By body type
                  </p>
                  <p>SUV · Sedan · Hatchback · Pickup · Van · Luxury</p>
                </div>
                <div>
                  <p className="mb-1 font-body text-eyebrow uppercase text-champagne">
                    By make
                  </p>
                  <p>Toyota · Lexus · Mercedes-Benz · Land Rover · BMW · Mazda</p>
                </div>
                <div>
                  <p className="mb-1 font-body text-eyebrow uppercase text-champagne">
                    By price
                  </p>
                  <p>[PRICE BAND] · [PRICE BAND] · [PRICE BAND]</p>
                </div>
                <Link
                  href="/vehicles"
                  onClick={() => setOpen(false)}
                  className="font-body text-button text-white underline decoration-champagne underline-offset-4"
                >
                  View all vehicles
                </Link>
              </div>
            </details>
          </nav>

          <div className="mt-auto flex flex-col gap-4 border-t border-graphite px-4 py-8">
            <a
              href={siteConfig.links.whatsapp}
              className={buttonVariants({ variant: "accent" })}
            >
              Contact us on WhatsApp
            </a>
            <div className="flex flex-col gap-2 font-body text-small text-mist">
              <a
                href={siteConfig.links.phone}
                className="inline-flex items-center gap-2 transition-colors hover:text-champagne"
              >
                <Phone aria-hidden="true" className="size-5" strokeWidth={1.5} />
                {siteConfig.phone}
              </a>
              <p>{siteConfig.address}</p>
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
}
