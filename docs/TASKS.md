# TASKS.md — shared task board

Handoffs between agents follow AGENTS.md Section 11 formats. Newest entries first.

---

NEEDS-BACKEND: Admin dashboard data queries
Screen / component: `src/app/(admin)/admin/dashboard/page.tsx` + `src/features/admin/components/*` + `src/components/layout/admin-shell.tsx` (DESIGN.md Section 8 Admin Screen B)
Data needed: stat totals (vehicles, in stock, reserved, sold-this-month + gross volume), recent enquiries rows (customer, vehicle, timeline, note, status, suggested action), recently added vehicles, today's viewings agenda, arriving-soon shipments — exact shapes exported from `src/features/admin/mocks.ts`
Actions needed: read queries in the relevant feature `queries.ts` files (deals/enquiries/viewings/shipments/vehicles) composed by one dashboard query; sidebar/top-bar auth display (user name, role) behind `requireRole`
Permissions: owner, manager, accounts, sales (Costing row stays role-gated per DESIGN.md Section 7.4)
Until ready: typed SAMPLE mock in `src/features/admin/mocks.ts` (marked MOCK; presentational data only)

NEEDS-BACKEND: Admin login auth action + password reset
Screen / component: `src/app/(admin)/admin/login/page.tsx` + `src/components/shared/password-input.tsx` (DESIGN.md Section 8 Admin Screen A)
Data needed: none read; auth result shape `{ ok: true, data } | { ok: false, error: { code, message } }`
Actions needed: `signInStaff(input)` server action behind `requireAuth`/role guards in `src/server/auth`; real invalid-credentials error state (currently rendered as the designed preview state); a password-reset flow to replace the "Forgot password?" mailto link (it points at `siteConfig.supportEmail`, the design's `[systems@khanstrading.co.ke]` placeholder)
Permissions: owner, manager, accounts, sales (DESIGN.md Section 7.4)
Until ready: form is presentational markup with a `TODO(KHANS TRADING Ltd / backend)` comment at the submit boundary; show/hide password handled by the shared `PasswordInput` client leaf

NEEDS-BACKEND: Contact form submission action
Screen / component: `src/app/(public)/contact/page.tsx` + `src/features/contact/components/contact-form.tsx` (Screen 5)
Data needed: none (write-only enquiry). Fields: `name`, `phone`, `email`, `interest` (buying|selling|trade-in|finance|other), `vehicle`, `message`, `consent`
Actions needed: `submitContactEnquiry(input) -> { ok: true, data } | { ok: false, error }` in `features/contact/actions.ts` + Zod schema in `features/contact/schemas.ts`; phone validation copy assumes Kenyan format `+254 7XX XXX XXX`; also wire real validation states (the Phone error and the success-confirmation block are currently rendered as the designed preview states)
Permissions: public (rate limited, Turnstile per AGENTS.md Section 8)
Until ready: form is presentational markup with a `TODO(KHANS TRADING Ltd / backend)` comment at the submit boundary in `contact-form.tsx`; the consent line (DESIGN.md Section 4) is enforced client-side by `src/components/shared/consent-gate.tsx`

NEEDS-BACKEND: Vehicles list query and search-param contract
Screen / component: `src/app/(public)/vehicles/page.tsx` + `src/features/vehicles/components/*` (Screen 2, built on the typed mock in `src/features/vehicles/mocks.ts`)
Data needed: paginated vehicle list — `searchVehicleList(filters) -> { items, total, page, pageCount, rangeStart, rangeEnd }` (exact mock signature to replace in `queries.ts`); item fields = `VehicleCardData` (`slug, make, model, trim, year, price, status, image, imageAlt, mileageKm, transmission, fuelType, engineCc, photoCount, drive?`) plus `bodyType, modelFamily, fuelCategory, colourFamily, transmissionCategory, listedAt`. Page size 9.
Actions needed: confirm or correct the search-param names now consumed (Zod-validated in the mock via `vehicleListSearchSchema`): `make`, `model`, `body_type[]`, `status[]`, `transmission[]`, `fuel[]`, `colour[]`, `min_price`, `max_price`, `year_from`, `year_to`, `sort` (`newest|price-asc|price-desc|year-desc|mileage-asc`), `view` (`grid|list`), `page`. Real schema belongs in `features/vehicles/schemas.ts`.
Permissions: public read (published vehicles only)
Until ready: `searchVehicleList` / `parseVehicleListSearch` / `vehicleListSearchSchema` in `src/features/vehicles/mocks.ts` (marked MOCK). NOTE (contract change, not breaking): `VehicleCardData` gained an optional `drive?: string` (the Vehicles export draws drive as the 4th spec chip; engine size stays where `drive` is absent — Home unaffected).

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
