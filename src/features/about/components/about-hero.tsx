// DESIGN.md Screen 4 compact page hero: ink band with a champagne eyebrow,
// the H1 and one line of copy.

export function AboutHero() {
  return (
    <section className="border-b border-graphite bg-ink py-14 sm:py-16">
      <div className="mx-auto flex max-w-7xl flex-col items-start gap-2 px-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-2">
          <span aria-hidden="true" className="block size-2 rounded-full bg-champagne" />
          <span className="font-body text-eyebrow uppercase text-champagne">
            Our Heritage &amp; Mission
          </span>
        </div>
        <h1 className="font-heading text-h1 text-white lg:text-h1-lg">
          About KHANS TRADING Ltd
        </h1>
        <p className="max-w-3xl pt-1 font-body text-body-l text-mist lg:text-body-l-lg">
          Curating exceptional motor vehicles with uncompromising standards of
          provenance, inspection, and client integrity.
        </p>
      </div>
    </section>
  );
}
