# TASKS.md — shared task board

Handoffs between agents follow AGENTS.md Section 11 formats. Newest entries first.

---

NEEDS-BACKEND: Currency formatter casing ("Ksh" vs "KSh")
Screen / component: `src/lib/format.ts` (`formatCurrency`), used by VehicleCard prices on Home
Data needed: none
Actions needed: `formatCurrency(6850000)` must render exactly `KSh 6,850,000` (DESIGN.md Section 1) on every runtime. Current output on local Node ICU is `Ksh 6,850,000` (lowercase s): the `.replace('KES', 'KSh')` is a no-op when ICU already localises to `Ksh`/`KSh`, so casing is ICU-version dependent (local vs Vercel may differ).
Permissions: n/a (formatter)
Until ready: Home renders prices through `formatCurrency` as-is (may show `Ksh` locally). Fix suggestion: normalise with `.replace('Ksh', 'KSh').replace('KES', 'KSh')` or use `currencyDisplay: "code"` and replace the code.

NEEDS-BACKEND: Vehicle list URL search parameter contract
Screen / component: Home hero search form (`src/features/home/components/hero-section.tsx`), body-type tiles, "Browse by make" links, footer category links
Data needed: canonical URL search-param names and value formats for vehicle list filters (currently assumed: `make`, `model`, `max_price`, `body_type`, kebab/lowercase values)
Actions needed: confirm or correct the param names in `features/vehicles/schemas.ts`; frontend will align the form and links
Permissions: public read (published vehicles only)
Until ready: links point at `/vehicles?...` with the assumed names; no page exists yet to consume them

NEEDS-BACKEND: Featured and new-arrival vehicle queries
Screen / component: Home "Featured vehicles" (8) and "New arrivals" (4) grids (`src/app/(public)/page.tsx`)
Data needed: server-side query returning published vehicles flagged `is_featured` / `is_new_arrival`, fields matching `VehicleCardData` (slug, make, model, trim, year, price, status, image, imageAlt, mileageKm, transmission, fuelType, engineCc, photoCount)
Actions needed: `getFeaturedVehicles(limit)`, `getNewArrivals(limit)` in `features/vehicles/queries.ts`
Permissions: public read
Until ready: using typed mock in `src/features/vehicles/mocks.ts` (clearly labelled SAMPLE data, DESIGN.md Section 0.7)
