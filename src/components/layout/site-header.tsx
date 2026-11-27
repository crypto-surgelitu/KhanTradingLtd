"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Heart, MessageCircle, Search } from "lucide-react";
import { buttonVariants } from "@/components/ui/button";
import { siteConfig } from "@/config/site";
import { MobileNav } from "@/components/layout/mobile-nav";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/vehicles", label: "Vehicles" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

// DESIGN.md Section 5.1 header. Fixed 80px desktop / 64px mobile row with three
// flex zones: logo slot (flex 0 0 auto, height-sized logo), centred navigation,
// actions. "dark" is the Home hero treatment (white logo, white links); "light"
// is the standard public treatment (white bar, black logo). Without an explicit
// variant the treatment follows the route: dark over the Home hero, light on
// every other public screen.
type SiteHeaderProps = {
  variant?: "dark" | "light";
};

export function SiteHeader({ variant }: SiteHeaderProps = {}) {
  const pathname = usePathname();
  const dark = variant ? variant === "dark" : pathname === "/";

  return (
    <header
      className={`sticky top-0 z-50 border-b ${
        dark ? "border-graphite bg-ink" : "border-stone bg-white"
      }`}
    >
      <div className="mx-auto flex h-16 max-w-7xl items-center gap-4 px-4 sm:px-6 lg:h-20 lg:px-8">
        {/* Logo slot: never shrinks, sized by height only (Section 5.1). */}
        <Link
          href="/"
          aria-label="KHANS TRADING Ltd home"
          className="flex flex-none items-center"
        >
          <Image
            src={dark ? "/brand/logo-white.png" : "/brand/logo-black.png"}
            alt="KHANS TRADING Ltd"
            width={1600}
            height={537}
            className="h-10 w-auto object-contain lg:h-12"
          />
        </Link>

        {/* Primary navigation (desktop). */}
        <nav
          aria-label="Primary"
          className="hidden flex-1 items-center justify-center gap-5 whitespace-nowrap lg:flex xl:gap-8"
        >
          {navLinks.map((link) => {
            const active =
              link.href === "/" ? pathname === "/" : pathname.startsWith(link.href);
            return (
              <Link
                key={link.href}
                href={link.href}
                aria-current={active ? "page" : undefined}
                className={`font-body text-button transition-colors ${
                  active
                    ? `underline decoration-champagne decoration-2 underline-offset-8 ${
                        dark ? "text-white" : "text-ink"
                      }`
                    : dark
                      ? "text-mist hover:text-champagne"
                      : "text-slate hover:text-ink"
                }`}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        {/* Actions: search + saved on desktop, saved + menu on mobile (5.1). */}
        <div className="ml-auto flex flex-none items-center gap-3 lg:ml-0">
          <Link
            href="/vehicles"
            aria-label="Search vehicles"
            className={
              buttonVariants({
                variant: dark ? "iconDark" : "iconLight",
                size: "icon",
              }) + " hidden lg:inline-flex"
            }
          >
            <Search aria-hidden="true" className="size-5" strokeWidth={1.5} />
          </Link>
          <Link
            href="/saved"
            aria-label="Saved vehicles, 0 saved"
            className={
              buttonVariants({
                variant: dark ? "iconDark" : "iconLight",
                size: "icon",
              }) + " relative"
            }
          >
            <Heart aria-hidden="true" className="size-5" strokeWidth={1.5} />
            <span className="absolute -top-1 -right-1 flex h-4 min-w-4 items-center justify-center rounded-full bg-champagne px-1 font-body text-caption text-ink">
              0
            </span>
          </Link>
          {/* Between 1024px and 1180px the WhatsApp action is icon-only (5.1). */}
          <a
            href={siteConfig.links.whatsapp}
            aria-label="WhatsApp us"
            className={
              buttonVariants({
                variant: dark ? "iconDark" : "iconLight",
                size: "icon",
              }) + " hidden lg:inline-flex xl:hidden"
            }
          >
            <MessageCircle aria-hidden="true" className="size-5" strokeWidth={1.5} />
          </a>
          <a
            href={siteConfig.links.whatsapp}
            className={
              buttonVariants({ variant: dark ? "accent" : "secondary" }) +
              " hidden xl:inline-flex"
            }
          >
            WhatsApp us
          </a>
          <MobileNav navLinks={navLinks} />
        </div>
      </div>
    </header>
  );
}
