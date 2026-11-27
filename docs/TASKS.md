# TASKS.md — shared task board

Handoffs between agents follow AGENTS.md Section 11 formats. Newest entries first.

---

NEEDS-BACKEND: Vehicle create/update action + photo upload
Screen / component: `src/app/(admin)/admin/add-vehicle/page.tsx` + `src/features/admin/components/add-vehicle-form.tsx` (DESIGN.md Section 8 Admin Screen D)
Data needed: none read; vehicle create/update payload = the form fields (make, model, trim, year, body type, price / price-on-request / negotiable, mileage, transmission, fuel, engine cc, drivetrain, colour, seats, doors, listing status, featured, new-arrival, photos[], overview text, features[])
Actions needed: `createVehicle(input)` / `updateVehicle(id, input)` in `features/vehicles/actions.ts` (Zod schema in `schemas.ts`), photo upload endpoint with server-side type/size/signature validation (AGENTS.md Section 8), draft save, publish; real field validation (the Asking Price error and the "248 characters" counter are the designed preview states)
Permissions: owner, manager, sales (role matrix, DESIGN.md Section 7.4)
Until ready: form is a presentational client leaf with a `TODO(KHANS TRADING Ltd / backend)` comment at the submit boundary; the demo gallery/upload progress is the export's designed SAMPLE state

NEEDS-BACKEND: Inventory list query + mutations (bulk actions, feature toggle, delete, CSV export)
Screen / component: `src/app/(admin)/admin/inventory/page.tsx` + `src/features/admin/components/inventory-*` (DESIGN.md Section 8 Admin Screen C)
Data needed: paginated inventory rows (the `InventoryRow` shape in `src/features/admin/mocks.ts`) with search/status/make/sort/page_size filters and the summary counts
Actions needed: `markVehiclesSold(ids)`, `setVehiclesFeatured(ids, featured)`, `deleteVehicle(id)` (soft-delete rules per AGENTS.md Section 8), `exportInventoryCsv(filters)`; row actions menu (Edit, Mark as sold, Duplicate, Delete) behind `requireRole`
Permissions: owner, manager, sales (delete restricted per role matrix, DESIGN.md Section 7.4)
Until ready: labelled SAMPLE rows/counts in `src/features/admin/mocks.ts`; table form and bulk bar are presentational with TODO comments (the deletion dialog is a working UI leaf in `inventory-delete-dialog.tsx`)

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
