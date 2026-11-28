# TASKS.md — shared task board

Handoffs between agents follow AGENTS.md Section 11 formats. Newest entries first.

---

NEEDS-BACKEND: Customer detail record + activity + preferences + data requests
Screen / component: `src/app/(admin)/admin/customers/[id]/page.tsx` + `src/features/admin/components/customer-*` (DESIGN.md Section 8 Admin Screen J detail)
Data needed: customer profile (identity, contact, KRA verification state, stats, tab counts), in-flight deal card, chronological activity timeline with categories, preferences (notification channels, vehicle interests), assigned executive, DPA consent date. SAMPLE shapes live in `src/features/admin/mocks.ts` (`customerDetailProfile`, `customerDetailDeal`, `customerDetailTimeline`, `customerDetailPreferences`, `customerDetailDpa`)
Actions needed: `getCustomerDetail(id)`, `postCustomerActivity(...)`, `updateCustomerPreferences(...)`, `reassignExecutive(...)`, and the Kenya DPA 2019 data-subject actions (`exportCustomerData`, `logDataSubjectRequest`, `requestCustomerDeletion`) — audit-logged, role-gated, no personal data in logs (AGENTS.md Section 8); the tab panels for Deals/Payments/Enquiries/Documents/Notes currently render empty states and need their data sections
Permissions: owner, manager, sales (accounts read-only)
Until ready: presentational detail over the labelled SAMPLE mock; two small client leaves (`customer-tabs`, `customer-actions`) with TODO comments; Call/WhatsApp/mailto actions use `siteConfig` placeholders

NEEDS-BACKEND: Customers directory query + CRUD + data requests
Screen / component: `src/app/(admin)/admin/customers/page.tsx` + `src/features/admin/components/{customers-toolbar,customers-table}` (DESIGN.md Section 8 Admin Screen J list)
Data needed: paginated customer rows (identity, contact, attribution source, latest activity, open deals, lifetime value, tags) + summary stats; SAMPLE shapes live in `src/features/admin/mocks.ts` (`customersStats`, `customerRows`, `customersFilterOptions`). Customer detail screen (tabs, activity timeline, preferences, data requests) comes with the detail route
Actions needed: `createCustomer(input)`, `updateCustomer(id, input)`, `exportCustomersCsv(filters)`, and per Kenya Data Protection Act 2019 the export/delete data-request actions (audit-logged, role-gated per AGENTS.md Section 8)
Permissions: owner, manager, sales (accounts read-only); costing fields excluded for sales (DESIGN.md Section 7.4)
Until ready: presentational directory over the labelled SAMPLE mock; search/filters/pagination are native controls with a TODO comment; row Call/WhatsApp actions use `siteConfig` placeholders

NEEDS-BACKEND: Viewings calendar query + booking actions
Screen / component: `src/app/(admin)/admin/viewings/page.tsx` + `src/features/admin/components/{viewings-toolbar,viewings-calendar,viewings-drawer}` (DESIGN.md Section 8 Admin Screen I)
Data needed: bookings for a date range (id, day/hour placement, time label, type, status, vehicle, client, assigned concierge), availability settings (opening hours, slot length, blocked dates), booking detail (reminder state, client particulars, notes, allocated inventory, route, audit trail). SAMPLE shapes live in `src/features/admin/mocks.ts` (`viewingsStats`, `viewingsDays`, `viewingsHours`, `viewingsEvents`, `viewingsLegend`, `viewingsDetail`, `viewingsToolbarOptions`)
Actions needed: `confirmViewing(id)`, `rescheduleViewing(id, slot)`, `markNoShow(id)`, `cancelViewing(id)`, `markViewingCompleted(id)` (audit + client notification per AGENTS.md Section 8), `createViewing(input)`, availability CRUD behind `requireRole`
Permissions: owner, manager, sales
Until ready: presentational week grid + designed open drawer over the labelled SAMPLE mock; controls (range nav, view switcher, filters) are native elements with a TODO comment; the drawer renders the export's designed open state for the Today booking

NEEDS-BACKEND: Vehicle request submission action
Screen / component: `src/app/(public)/request-vehicle/page.tsx` + `src/features/request/components/*` (DESIGN.md Screen 6D)
Data needed: none read; submission payload = the four form sections (make, model/trim, year min/max, body, powertrain, transmission, colour, budget min/max, asset-finance flag, must-haves, import acceptance, timeline window, name, phone, email, preferred channel, consent). SAMPLE confirmation/showcase shapes live in `src/features/request/mocks.ts`
Actions needed: `submitVehicleRequest(input)` in `features/requests/actions.ts` (Zod schema in `schemas.ts`; status lifecycle new|sourcing|found|closed per DESIGN.md Section 7), tracking-code issuance, rate limiting + Turnstile (AGENTS.md Section 8); "Match from stock" admin action later
Permissions: public (customer record created server-side)
Until ready: presentational client leaf `request-form.tsx` with a `TODO(KHANS TRADING Ltd / backend)` comment; the confirmation card renders the export's designed state; the timeline/import/contact chips are UI state only

NEEDS-BACKEND: Viewing booking action + availability query
Screen / component: `src/app/(public)/vehicles/[id]/book/page.tsx` + `src/features/booking/components/{booking-form,booking-confirmation,booking-summary}` (DESIGN.md Screen 6C)
Data needed: viewing availability (next-14-days day chips with Available/Booked, free time slots per day) and the vehicle summary; SAMPLE shapes live in `src/features/booking/mocks.ts` (`bookingDaySlots`, `bookingMorningSlots`, `bookingAfternoonSlots`, `bookingVehicleSummary`, `bookingConfirmation`)
Actions needed: `submitViewingBooking(input)` in `features/viewings/actions.ts` (type viewing|test_drive, date, slot, name, phone, email, notes, consent; Zod schema in `schemas.ts`), availability query behind it, rate limiting + Turnstile (AGENTS.md Section 8), confirmation voucher + reminder scheduling (24h before)
Permissions: public (customer record created server-side)
Until ready: presentational client leaf `booking-form.tsx` with a `TODO(KHANS TRADING Ltd / backend)` comment; the confirmation card renders the export's designed state; the day/slot pickers and consent-gated submit work as UI state only

NEEDS-BACKEND: Deals pipeline board query + stage mutations
Screen / component: `src/app/(admin)/admin/deals/page.tsx` + `src/features/admin/components/{deals-summary,deals-toolbar,deal-card,deals-board}` (DESIGN.md Section 8 Admin Screen G)
Data needed: board columns (stage, count, portfolio value) with deal cards — the SAMPLE shapes live in `src/features/admin/mocks.ts` (`dealsStatCards`, `dealsBoard`, `dealsStageOptions`, `dealsConciergeOptions`); summary strip metrics
Actions needed: `moveDealStage(id, stage, note, notifyClient)` (transaction + audit + notification per AGENTS.md Section 8), `createDeal(input)`, row actions menu (put on hold, cancel); stage list editable in Admin Settings
Permissions: owner, manager, sales (accounts read-only)
Until ready: presentational board over the labelled SAMPLE mock; filters and view toggles are native controls with a TODO comment; drag-and-drop deferred (stage moves will use the confirm dialog flow from DESIGN.md Screen G)

NEEDS-BACKEND: Verified tracker session data + client actions (uploads, notifications)
Screen / component: `src/app/(public)/track/[id]/page.tsx` + `src/features/tracking/components/*` (DESIGN.md Screen 6B)
Data needed: verified-session read model — deal summary, stage timeline with timestamps, current-step explanation fields, document checklist with statuses/reject reasons, issued documents (signed URLs), updates feed, payments ledger + financing, notification prefs. The SAMPLE shapes live in `src/features/tracking/mocks.ts` (`trackSummary`, `trackStages`, `trackCurrentStep`, `trackDocuments`, `trackIssuedDocuments`, `trackUpdates`, `trackPayments`, `trackNotificationChannels`)
Actions needed: `getTrackerDetail(reference)` (session-gated), `uploadClientDocument(...)`, `uploadProofOfPayment(...)`, `saveNotificationPrefs(...)`; hashed OTP session, expiry, no user enumeration (AGENTS.md Section 8); personal data handling per the Kenya Data Protection Act
Permissions: the verified tracker session only (role checks inside the actions)
Until ready: presentational page over the labelled SAMPLE mock; `alert-settings.tsx` is the client leaf with a `TODO(KHANS TRADING Ltd / backend)` comment; uploads/downloads are designed-state buttons

NEEDS-BACKEND: Purchase lookup + OTP verification
Screen / component: `src/app/(public)/track/page.tsx` + `src/features/tracking/components/track-form.tsx` (DESIGN.md Screen 6A)
Data needed: none read before verification (privacy rule: documents/payment details only after two-factor verification)
Actions needed: `lookupPurchase(reference, phone)` returning a masked-vehicle hint + dispatching the OTP (`sendPurchaseOtp`), and `verifyPurchaseOtp(reference, phone, code)` issuing the tracker session — hashed codes, short expiry, limited attempts, no user-enumeration errors (AGENTS.md Section 8); rate limiting + Turnstile
Permissions: public lookup; full deal data only for the verified session (Screen 6B)
Until ready: the two-step lookup is a presentational client leaf with a `TODO(KHANS TRADING Ltd / backend)` comment; the error state, masked phone, ref and countdown are the export's designed SAMPLE state

NEEDS-BACKEND: Vehicle reservation submit action
Screen / component: `src/app/(public)/vehicles/[id]/reserve/page.tsx` + `src/features/reservation/components/{reserve-form,reserve-summary}` (DESIGN.md Screen 6)
Data needed: reservation read model for the summary card (vehicle title/specs/price, holding deposit, balance due, ref) and the buyer summary of step 1; `src/features/reservation/mocks.ts` exports the SAMPLE shapes to replace
Actions needed: `submitReservation(input)` in `features/reservation/actions.ts` (Zod schema in `schemas.ts`): deposit method (bank_transfer | showroom | finance), proof-of-payment upload with server-side validation, lending institution + equity for finance, consent flag; rate limiting + Turnstile per AGENTS.md Section 8; also the step-1 details/edit flow and the step-3 confirmation state
Permissions: public (authenticated-or-anonymous enquiry path; role checks inside the action)
Until ready: presentational client leaf `reserve-form.tsx` with a `TODO(KHANS TRADING Ltd / backend)` comment at the submit boundary; bank coordinates render from `src/config/site.ts` placeholders; buyer/vehicle data are the labelled SAMPLE mock

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
