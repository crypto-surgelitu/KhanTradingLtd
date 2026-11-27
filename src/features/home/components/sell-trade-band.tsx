import { buttonVariants } from "@/components/ui/button";

// DESIGN.md Screen 1 section 8: graphite band with headline, short copy and
// an accent action.
export function SellTradeBand() {
  return (
    <section className="bg-graphite py-14 text-white sm:py-18 lg:py-24">
      <div className="mx-auto flex max-w-7xl flex-col items-start gap-8 px-4 sm:px-6 lg:flex-row lg:items-center lg:justify-between lg:px-8">
        <div className="max-w-2xl">
          <p className="mb-3 font-body text-eyebrow uppercase text-champagne">
            Part Exchange &amp; Direct Purchase
          </p>
          <h2 className="font-heading text-h2 lg:text-h2-lg">
            Sell or trade in your vehicle.
          </h2>
          <p className="mt-4 font-body text-body-l text-mist lg:text-body-l-lg">
            Receive a fair, transparent valuation based on current Kenyan market
            conditions with zero obligation.
          </p>
        </div>
        <a href="/sell" className={buttonVariants({ variant: "accent" })}>
          Get a valuation
        </a>
      </div>
    </section>
  );
}
