import Image from "next/image";
import { Search } from "lucide-react";
import { buttonVariants } from "@/components/ui/button";
import { formatCurrency } from "@/lib/format";
import { searchOptions } from "@/features/vehicles/mocks";

// DESIGN.md Screen 1 section 1: cinematic hero with dark overlay, eyebrow,
// display headline, subtext, two actions, and a white search card at the
// bottom edge. Mobile first: buttons wrap, search fields stack 2x2 (Section 4).
export function HeroSection() {
  return (
    <section aria-labelledby="hero-title" className="relative bg-ink text-white">
      <Image
        src="/images/home/hero-showroom.webp"
        alt="A dark metallic luxury SUV parked in front of a modern minimalist concrete architectural showroom at dusk, warm golden ambient light reflecting off the sculpted bodywork, editorial automotive photography"
        fill
        priority
        sizes="100vw"
        className="object-cover"
      />
      <div aria-hidden="true" className="absolute inset-0 bg-ink/50" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 pt-20 pb-16 sm:px-6 lg:px-8 lg:pt-24 lg:pb-20">
        <div className="max-w-2xl space-y-6">
          <p className="font-body text-eyebrow uppercase text-champagne">
            KHANS TRADING Ltd
          </p>
          <h1
            id="hero-title"
            className="font-heading text-display text-white lg:text-display-lg"
          >
            Find the vehicle that fits your life.
          </h1>
          <p className="font-body text-body-l text-white/90 lg:text-body-l-lg">
            Premium vehicles. Honest dealing. Curated for Kenyan roads.
          </p>
          <div className="flex flex-wrap items-center gap-4 pt-2">
            <a href="/vehicles" className={buttonVariants({ variant: "accent" })}>
              Browse vehicles
            </a>
            <a href="/sell" className={buttonVariants({ variant: "ghostWhite" })}>
              Sell or trade in
            </a>
          </div>
        </div>

        {/* Search card, overlapping the bottom edge of the hero (Screen 1.1). */}
        <div className="mt-12 rounded-md bg-white p-6 text-ink shadow-lg lg:mt-16">
          <form
            action="/vehicles"
            method="get"
            aria-label="Search vehicles"
            className="grid grid-cols-2 items-end gap-4 lg:grid-cols-5"
          >
            <div>
              <label htmlFor="search-make" className="mb-1 block font-body text-small font-medium">
                Make
              </label>
              <select
                id="search-make"
                name="make"
                defaultValue=""
                className="h-12 w-full rounded-sm border border-stone bg-white px-3.5 font-body text-body text-ink focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ink"
              >
                <option value="">All makes</option>
                {searchOptions.makes.map((make) => (
                  <option key={make} value={make.toLowerCase()}>
                    {make}
                  </option>
                ))}
              </select>
            </div>
            <div>
              <label htmlFor="search-model" className="mb-1 block font-body text-small font-medium">
                Model
              </label>
              <select
                id="search-model"
                name="model"
                defaultValue=""
                className="h-12 w-full rounded-sm border border-stone bg-white px-3.5 font-body text-body text-ink focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ink"
              >
                <option value="">All models</option>
                {searchOptions.models.map((model) => (
                  <option key={model} value={model.toLowerCase()}>
                    {model}
                  </option>
                ))}
              </select>
            </div>
            <div>
              <label htmlFor="search-max-price" className="mb-1 block font-body text-small font-medium">
                Max price
              </label>
              <select
                id="search-max-price"
                name="max_price"
                defaultValue=""
                className="h-12 w-full rounded-sm border border-stone bg-white px-3.5 font-body text-body text-ink focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ink"
              >
                <option value="">Any price</option>
                {searchOptions.maxPrices.map((price) => (
                  <option key={price} value={price}>
                    Up to {formatCurrency(price)}
                  </option>
                ))}
              </select>
            </div>
            <div>
              <label htmlFor="search-body-type" className="mb-1 block font-body text-small font-medium">
                Body type
              </label>
              <select
                id="search-body-type"
                name="body_type"
                defaultValue=""
                className="h-12 w-full rounded-sm border border-stone bg-white px-3.5 font-body text-body text-ink focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ink"
              >
                <option value="">All types</option>
                {searchOptions.bodyTypes.map((type) => (
                  <option key={type} value={type.toLowerCase()}>
                    {type}
                  </option>
                ))}
              </select>
            </div>
            <button
              type="submit"
              className="col-span-2 inline-flex h-12 items-center justify-center gap-2 rounded-sm bg-ink px-6 font-body text-button text-white transition-colors hover:bg-graphite motion-safe:active:scale-98 lg:col-span-1"
            >
              <Search aria-hidden="true" className="size-5" strokeWidth={1.5} />
              Search
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
