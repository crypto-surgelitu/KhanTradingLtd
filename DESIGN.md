# DESIGN.md — KHANS TRADING Ltd

Design system and screen specifications for the KHANS TRADING Ltd website: an elegant, sleek e-commerce site for buying vehicles, with an admin portal for managing stock.

---

## 0. AGENT OPERATING RULES (read first, obey strictly)

1. **Generate ONE screen at a time.** Never output more than one screen per response. After each screen, stop and wait for me to say `next`, `mobile`, or give feedback.
2. **Order of screens** is listed in Section 9. Start with Screen 1 only.
3. **Desktop first (1440px).** When I say `mobile`, produce the 390px mobile version of the same screen with identical content and the responsive behaviour defined here.
4. **Follow this file strictly.** Use only the colours, fonts, spacing, radii, components and layouts defined here. Do not invent new styles per screen.
5. **Header and footer must be identical on every public screen** (Home, Vehicles, Vehicle Detail, About, Contact, and all other public pages). The admin panel has its own shell (Section 8) that is identical on every admin screen.
6. **Do not hallucinate business facts.** No invented awards, statistics, customer counts, testimonials, years in business, addresses, phone numbers, emails or bank partners. Use clearly marked placeholders: `[PHONE]`, `[WHATSAPP]`, `[EMAIL]`, `[ADDRESS]`, `[YEAR FOUNDED]`.
7. **No lorem ipsum.** Write short, plausible, professional copy. Sample vehicles may use realistic make/model names and prices, but treat them as SAMPLE data.
8. **Do not copy** the layout of khushimotors.com, albacars.ae or porsche.com. The target is the same level of polish and usability with a distinct, more minimal identity.
9. **Never redraw the logo.** Use the supplied logo image. If none is attached, use a neutral placeholder box labelled `KHANS TRADING Ltd logo`.
10. **Logo placement is fixed:** top-left of the header on every public screen, built exactly as specified in Section 5.1 (Logo slot). The logo must never overflow, stretch, wrap, overlap the navigation, or change the header height. If a layout is tight, shrink the navigation spacing, never the logo.
11. Keep every screen realistic to build with Next.js, Tailwind CSS and shadcn/ui components.

---

## 1. BRAND

- **Business:** KHANS TRADING Ltd, a vehicle trading company selling vehicles online and in person.
- **Market assumption:** Kenya. Currency `KSh`, format `KSh 3,450,000`. Phone format `+254 7XX XXX XXX`.
- **Logo:** Black line-art car mark with the wordmark "KHANS / TRADING Ltd". It is a horizontal lockup with an aspect ratio of about 3:1 (width to height). Use `khans_logo_black_tight.png` on light backgrounds and `khans_logo_white_tight.png` on dark backgrounds. Both files are cropped tight to the artwork with no transparent padding, so the box you place is exactly the logo. Minimum height 36px anywhere; header height 48px desktop, 40px mobile (about 143px and 119px wide). Clear space on all sides equals the height of the "K".
- **Personality:** Refined, confident, calm, trustworthy. Premium without being flashy. Think private showroom, not car auction.
- **Tagline (editable placeholder):** "Premium vehicles. Honest dealing."
- **Tone of copy:** Short, plain, assured. No exclamation marks, no hype words, no emojis.

---

## 2. DESIGN PRINCIPLES

1. **The vehicle is the hero.** Large, clean photography; the interface stays quiet around it.
2. **Monochrome base, one restrained accent.** Black, ivory and grey carry the design. Champagne is a small highlight, never a fill for large areas.
3. **Space is luxury.** Generous whitespace, strong alignment, few elements per section.
4. **Commerce clarity.** Price, status, key specs and the next action are always obvious within 2 seconds.
5. **Mobile is the primary device.** Most buyers browse on phones. Design mobile-first, then scale up.
6. **Subtle motion only.** Motion supports clarity, never decoration.

### 2.1 Reference inspiration (borrow the qualities, never the layouts)

- **khushimotors.com:** practical e-commerce depth. Search first, status badges, saved and compare, stock categories, finance and trade-in.
- **albacars.ae:** premium used-car presentation. Clear Buy / Sell / Finance structure, trust signals, showroom details, WhatsApp always within reach.
- **porsche.com:** refined minimalism, cinematic imagery, precise typography.
- **lucidmotors.com:** calm, cinematic full-bleed imagery with very little text; a slim announcement bar above the header; a header with the logo top-left, a mega-menu for the vehicle range and utility links on the right; each product shown with a pair of clear actions (explore and act); a large editorial stories section; generous black and white space.

**Target:** Lucid's calm and polish, Khushi's functionality, Alba's trust. A distinct identity, not a copy of any of them.

---

## 3. DESIGN TOKENS

### 3.1 Colour

| Token | Hex | Use |
|---|---|---|
| `ink` | `#0B0B0C` | Primary text, primary buttons, footer, dark sections |
| `graphite` | `#1A1B1E` | Elevated dark surfaces, admin sidebar |
| `slate` | `#55585F` | Secondary text |
| `mist` | `#8A8D94` | Placeholder text, disabled |
| `stone` | `#E4E2DD` | Borders, dividers |
| `ivory` | `#F8F7F4` | Page background |
| `white` | `#FFFFFF` | Cards, inputs, header |
| `champagne` | `#B8975A` | Accent: icons, underlines, small highlights, accent on dark |
| `champagne-dark` | `#9F7F47` | Accent hover |
| `champagne-tint` | `#F3ECDD` | Subtle accent backgrounds, selected states |
| `success` | `#1E7F4F` | In Stock |
| `warning` | `#B7791F` | Reserved |
| `danger` | `#B42318` | Errors, delete |
| `info` | `#1F5FA8` | Incoming / awaiting shipment |

**Colour rules**
- Champagne on white fails text contrast. Use it only for icons, borders, underlines, and as text/fill on `ink` or `graphite` backgrounds.
- Primary buttons are `ink` with white text. On dark sections the primary button is `champagne` with `ink` text.
- No gradients except a subtle dark overlay on hero images to protect text legibility.
- No purple, neon, or saturated colours anywhere.

**Status badges:** `In Stock` (success tint bg, success text), `New Arrival` (ink bg, white text), `Reserved` (warning tint), `Sold` (stone bg, slate text), `Incoming` (info tint).

### 3.2 Typography

- **Headings and display:** `Jost` (Google Fonts), weights 400, 500, 600. Slight negative letter-spacing on large sizes.
- **Body and UI:** `Inter`, weights 400, 500, 600.
- **Prices and numbers:** Jost 600 with tabular numerals.
- **Eyebrow labels:** Inter 600, 12px, uppercase, letter-spacing 0.12em, colour `champagne-dark` on light or `champagne` on dark.

| Style | Desktop | Mobile |
|---|---|---|
| Display | Jost 500, 64/68 | 40/44 |
| H1 | Jost 500, 48/54 | 34/40 |
| H2 | Jost 500, 36/44 | 28/34 |
| H3 | Jost 500, 24/32 | 22/30 |
| Body L | Inter 400, 18/30 | 17/28 |
| Body | Inter 400, 16/26 | 16/26 |
| Small | Inter 400, 14/22 | 14/22 |
| Caption | Inter 500, 12/18 | 12/18 |

### 3.3 Spacing, grid, radius, elevation

- **Spacing scale (4px base):** 4, 8, 12, 16, 24, 32, 48, 64, 96.
- **Section vertical padding:** 96px desktop, 72px tablet, 56px mobile.
- **Container:** max width 1280px. Side padding 16px mobile, 24px tablet, 32px desktop.
- **Grid:** 12 columns desktop (gutter 24), 8 tablet (gutter 20), 4 mobile (gutter 16).
- **Breakpoints:** mobile 0–639, tablet 640–1023, desktop 1024–1279, wide 1280+.
- **Radius:** inputs and buttons 6px, cards 10px, modals and sheets 14px, pills 999px.
- **Elevation:** `sm` `0 1px 2px rgba(11,11,12,.06)`, `md` `0 8px 24px rgba(11,11,12,.08)`, `lg` `0 16px 40px rgba(11,11,12,.12)` (modals only). No heavy shadows.
- **Borders:** 1px `stone`. Prefer borders to shadows for resting cards.

### 3.4 Motion

- Duration 200–300ms, easing `cubic-bezier(0.22, 1, 0.36, 1)`.
- Allowed: fade-up on scroll (8px), card image zoom 1.03 on hover, drawer and sheet slide, button press scale 0.98.
- Respect `prefers-reduced-motion`. No parallax, no autoplaying carousels, no auto-playing audio.

### 3.5 Imagery

- Vehicle photos: 4:3 on cards, 16:9 or 3:2 in galleries, consistent crop. Clean, well-lit, neutral or dark backgrounds.
- Hero: one full-bleed high-quality vehicle image with a dark `ink` overlay (40–55%) for text legibility.
- Use placeholder images from a consistent premium automotive style. Do not mix styles. No cartoon cars, no illustrations of people, no clip-art.
- Icons: Lucide, 1.5px stroke, 20–24px. One icon family only.

---

## 4. COMPONENTS

**Buttons** (height 48px desktop, 44px minimum on mobile, padding 0 24px, Inter 600 15px)
- Primary: `ink` bg, white text, hover `graphite`.
- Secondary: transparent, 1px `ink` border, ink text, hover ink bg and white text.
- Accent (dark sections only): `champagne` bg, `ink` text, hover `champagne-dark`.
- Text link: ink, 1px `champagne` underline offset 4px.
- Icon buttons: 44×44, circular, white bg with `stone` border.

**Inputs and selects:** 48px height, white bg, 1px `stone` border, radius 6, label above in Small/500. Focus: 2px `ink` outline with 2px offset. Error: `danger` border and helper text below. Always show labels, not placeholder-only.

**Vehicle card** (the core component)
- Image 4:3 with radius 10 top. Status badge top-left, save (heart) icon button top-right, optional "1/8" photo counter bottom-right.
- Body (padding 16–20): make and model as H3 (one line, truncate), trim and year in Small `slate`, price in Jost 600 22px (or "Ask for price"), a divider, then a spec row of 4 items with icons: mileage, transmission, fuel, engine size.
- Footer actions: "View details" (secondary, full width on mobile) and a WhatsApp icon button.
- Hover (desktop): image zoom 1.03, border becomes `ink` at 12% opacity, shadow `md`.

**Spec chip:** icon + value, Small 14px, `slate`.

**Filter controls:** select dropdowns, dual-handle range slider (price, year, mileage), checkbox lists, toggle chips for body type, active-filter chips with remove icon. On mobile, filters live in a full-height bottom sheet with a sticky "Show N vehicles" button.

**Search bar (hero):** white card, radius 10, `lg` shadow, fields in one row on desktop (Make, Model, Max price, Body type, Search button), stacked 2×2 plus full-width button on mobile.

**Section header:** eyebrow label, H2, optional one-line description, optional "View all" text link aligned right.

**Modal and confirm dialog:** radius 14, `lg` shadow, `ink` 50% backdrop, destructive actions use `danger` button.

**Toast:** top-right desktop, bottom on mobile, `ink` bg, white text.

**Consent line (every form that collects personal data):** an unchecked checkbox with the text "I agree to the processing of my details as described in the Privacy Policy", where "Privacy Policy" is a link. The submit button stays disabled until it is checked. Small text, `slate`.

**Cookie banner:** appears on a visitor's first visit. Desktop: a card fixed bottom-left, max width 440px, white, border `stone`, shadow `lg`. Mobile: a bottom sheet. Text: one or two short sentences. Buttons: "Accept all" (primary), "Reject non-essential" (secondary), "Manage preferences" (text link). Preferences open a modal with toggles for Necessary (always on), Analytics and Marketing. Never block the page with a full-screen overlay. Show it once as a visible state on the Home screen.

**Breadcrumbs:** Small, `slate`, chevron separators.

**Empty states:** simple line icon, one sentence, one action.

---

## 5. GLOBAL LAYOUT (PUBLIC SITE)

### 5.1 Header (identical on every public screen)

**Optional announcement bar (above the header):** 40px, `ink` background, Small text in `champagne`, centred, dismissible with an X, scrolls away with the page (not sticky). Content placeholder: `[Announcement or current offer]`. Hide it entirely if empty.

**Header structure:** one fixed-height row inside the 1280px container, split into three flex zones: `[ Logo slot ] [ Primary navigation ] [ Actions ]`.
- Height: **80px desktop, 64px mobile.** It never grows, whatever the content.
- `position: sticky; top: 0; z-index: 50`. White background, 1px `stone` bottom border.
- On the Home hero the header may be transparent over the image using the white logo, becoming solid white with the black logo on scroll. Both logo versions have identical dimensions, so there is no layout shift.

**Logo slot (critical, follow exactly)**
- Position: top-left, vertically centred, with its left edge aligned to the container's left padding and to the page content below (no extra indent).
- Use a tightly cropped logo file with no transparent padding (`khans_logo_black_tight.png` / `khans_logo_white_tight.png`).
- Size by **height**, never by width: `height: 48px` desktop, `40px` mobile, `width: auto`, `object-fit: contain`. The ratio is about 3:1, so the logo is about 143px wide on desktop and 119px on mobile. Never stretch, crop, squash or recolour it.
- The slot is `flex: 0 0 auto`: it never shrinks, wraps, or overlaps the navigation. Leave at least 16px of vertical breathing room above and below on desktop.
- The logo is a link to `/` with the accessible label "KHANS TRADING Ltd home".
- Do not place text, tagline or badges next to the logo. The wordmark is already in the artwork.

**Primary navigation (centre zone)**
- `flex: 1 1 auto; min-width: 0; justify-content: center`. Links: Home, Vehicles, About, Contact. Gap 32px, `white-space: nowrap`, never wrap onto two lines.
- Active item: ink text with a 2px `champagne` underline.
- Between 1024px and 1180px: reduce the nav gap to 20px and show the WhatsApp button as an icon only. Never shrink the logo to make room.
- Below 1024px the navigation becomes a hamburger.

**Actions (right zone):** search icon button, saved vehicles (heart with count), and a "WhatsApp us" secondary button. `flex: 0 0 auto`, gap 12px, each icon button 44×44.

**Vehicles mega-menu (desktop):** hovering or focusing "Vehicles" opens a full-width panel under the header (white, 1px `stone` top border, shadow `md`) with four columns: By body type, Popular makes, By price (KSh bands, placeholders), and a featured vehicle card with an image. A "View all vehicles" link sits at the bottom. It closes on mouse leave, `Esc`, or focus loss. It never shifts the page below.

**Mobile header:** logo left (`flex: 0 0 auto`), then a right-aligned group of saved-heart and menu icon buttons (44×44 each). Total width at 360px is about 16 + 119 + 88 + 16 padding, which fits with room to spare. The menu opens a full-screen `ink` drawer with large Jost links, "Vehicles" as an accordion (body type, make, price), a primary contact button, and contact details at the bottom.

**Header QA (must pass at 360, 390, 768, 1024, 1280, 1440px):** logo fully visible and uncropped, nothing overlaps the logo, no horizontal scroll, header height unchanged, nav never wraps.

---

### 5.2 Footer (identical on every public screen)
- `ink` background, white text, `mist` secondary text.
- Top: white logo, one-sentence description, social icons (placeholders).
- Columns: Quick Links (Home, Vehicles, About, Contact, Track Your Purchase, Book a Viewing, Request a Vehicle, FAQ, How to Buy), Vehicle Categories (SUV, Sedan, Hatchback, Pickup, Van, Luxury), Contact (`[ADDRESS]`, `[PHONE]`, `[EMAIL]`, opening hours placeholder).
- Bottom bar: © KHANS TRADING Ltd, Privacy Policy, Terms of Service.
- Mobile: columns stack, Quick Links and Categories become accordions.

### 5.3 Floating elements
- WhatsApp floating button, bottom-right, 56px circle, `ink` bg with a white WhatsApp icon. On Vehicle Detail mobile it is replaced by the sticky action bar.

---

## 6. PUBLIC SCREENS

### Screen 1 — Home (`/`)
Sections in order:
1. **Hero:** cinematic full-bleed vehicle image (one static hero, no autoplay carousel), dark overlay. Eyebrow "KHANS TRADING Ltd". Display headline (e.g. "Find the vehicle that fits your life."), one-line subtext, two buttons (Accent "Browse vehicles", ghost-white "Sell or trade in"). Search bar overlaps the bottom edge of the hero.
2. **Trust strip:** 4 small items with icons and generic, number-free claims: Inspected vehicles, Transparent pricing, Documentation support, Finance and trade-in help.
3. **Browse by body type:** 6 tiles (SUV, Sedan, Hatchback, Pickup, Van, Luxury) with line icons or cropped images. Horizontal scroll on mobile.
4. **Featured vehicles:** 8 vehicle cards in a 4-column grid (2 on tablet, horizontal snap scroll or single column on mobile). "View all" link.
5. **Collection panels:** two large full-bleed image tiles side by side (stacked on mobile), for example "SUVs and Crossovers" and "Luxury Collection". Each has an eyebrow, an H2 over a dark overlay, and two buttons: Accent "Explore" and ghost-white "View inventory".
6. **Browse by make:** a row of make names or logos in muted grey, scrolling on mobile.
7. **How buying works:** 4 numbered steps (Browse, Enquire or reserve, Inspect and test drive, Drive home). Clean horizontal layout, vertical on mobile.
8. **Sell or trade in band:** `graphite` background, headline, short copy, Accent button.
9. **New arrivals:** 4 vehicle cards.
10. **Why choose us:** 3 columns of short statements (no statistics).
11. **FAQ:** 5 questions in an accordion.
12. **Visit us:** map placeholder beside `[ADDRESS]`, hours, phone and WhatsApp buttons.

### Screen 2 — Vehicles (`/vehicles`)
- Page header: breadcrumb, H1 "Vehicles", result count, sort dropdown (Newest, Price low–high, Price high–low, Year newest, Lowest mileage), grid/list toggle.
- **Desktop:** left sticky filter sidebar (280px) with Make, Model, Body type, Price range, Year range, Mileage, Transmission, Fuel type, Drive, Colour, Status. Right: vehicle grid, 3 columns.
- **Tablet:** 2 columns, filters in a collapsible sheet.
- **Mobile:** 1 column of large cards, sticky "Filter" and "Sort" pill bar under the header, filters in a bottom sheet.
- Active filter chips row above the grid with "Clear all".
- Pagination (numbered on desktop, "Load more" on mobile).
- Empty state when no results with "Clear filters" and "Request this vehicle" action.

### Screen 3 — Vehicle Detail (`/vehicles/[slug]`)
- Breadcrumb, then a two-column layout (desktop 8/4).
- **Left:** gallery with one large image, thumbnail strip, photo counter, fullscreen lightbox. On mobile it is a swipeable full-width carousel with dots.
- **Right (sticky on desktop):** status badge, H1 make/model/trim, year, price, key facts (mileage, transmission, fuel, engine), primary button "Reserve this vehicle", secondary "Book a viewing", text link "Enquire", WhatsApp and Call buttons, Save and Compare and Share icon buttons.
- **Below:** Overview (short description), Specifications table (two columns), Features (checklist grid), Documents and inspection notes (placeholder), optional finance estimate card, "Similar vehicles" row of 4 cards.
- **Mobile:** sticky bottom action bar with price on the left and "Reserve" plus a WhatsApp icon on the right.

### Screen 4 — About Us (`/about`)
1. Page hero (smaller, ink background): H1 "About KHANS TRADING Ltd" and one line.
2. Our story: two columns, text left, image right, using `[YEAR FOUNDED]` and generic copy.
3. What we stand for: 3–4 value cards (Quality, Transparency, Service, Trust).
4. How we source and inspect vehicles: simple 4-step process.
5. Team: grid of 3–4 placeholder cards labelled `[NAME] [ROLE]`.
6. CTA band: "Visit the showroom" with Browse and Contact buttons.

### Screen 5 — Contact Us (`/contact`)
- Page hero (compact).
- Two columns: **left** contact form (Full name, Phone, Email, I am interested in [Buying / Selling / Trade-in / Finance / Other], Vehicle of interest, Message, Send button); **right** contact cards (phone, WhatsApp, email, address, opening hours) and a map placeholder.
- Below: 4 quick FAQs and a WhatsApp CTA.
- Include form validation states and a success confirmation state.

### Screen 6 — Reserve Vehicle (`/vehicles/[slug]/reserve`)
- Stepper: Details, Deposit, Confirmation.
- Left: buyer form (name, phone, email, preferred viewing date, notes), then a deposit step. Vehicle purchases are mostly bank, finance and cash, so the deposit step offers these options as selectable cards:
  1. **Bank transfer:** shows Khans' bank details (`[BANK NAME]`, `[ACCOUNT NAME]`, `[ACCOUNT NUMBER]`, `[BRANCH]`), the payment reference to quote, and an "Upload proof of payment" button.
  2. **Pay at the showroom:** cash or card, with a hold-time note placeholder (for example, the reservation is held for `[X]` days).
  3. **Pay with finance:** short form for the preferred financier (bank or Sacco) and estimated deposit; the team follows up.
  4. **M-Pesa:** optional, for small reservation deposits only. Hidden unless enabled in Admin Settings.
- The reservation is confirmed by the team once the deposit is verified; say so clearly.
- Right: sticky order summary card (vehicle thumbnail, name, price, deposit amount placeholder, refundability note placeholder).
- Confirmation state with a reference number placeholder and next steps.

### Screen 6A — Track Your Purchase: Lookup (`/track`)
- Compact page hero: H1 "Track your purchase", one line of copy.
- Centred card (max 480px): Reference number field and phone number field, "Continue" primary button. A second step asks for a one-time code sent by SMS or WhatsApp. Include error states ("We couldn't find that reference") and a "Need help?" WhatsApp link.
- Short privacy note: documents and payment details are only shown after verification.
- Customers also receive this link automatically after they submit an enquiry or reservation.

### Screen 6B — Track Your Purchase: Detail (`/track/[reference]`)
A calm, reassuring progress screen. The client should understand in 3 seconds: where they are, what is needed from them, and what happens next.
1. **Summary header:** vehicle thumbnail, name, price, reference number, overall status badge, and the assigned team member with Call and WhatsApp buttons.
2. **Progress tracker:** horizontal stepper on desktop, vertical timeline on mobile, using the stages in Section 7.1. Completed steps show a check with a date, the current step is highlighted with `champagne`, future steps are muted.
3. **Current step card:** plain-language explanation of what is happening, what the client needs to do (if anything), who is responsible, and an expected date placeholder.
4. **Documents checklist:** each required document as a row with a status (Required, Uploaded, Under review, Approved, Needs attention). "Needs attention" shows the reason in plain language. Upload button per row (opens the camera or file picker on mobile). Download links for documents Khans has issued (sales agreement, receipts), shown as placeholders.
5. **Payments summary:** total price, deposit paid, balance due, a list of payments with date, method and payment reference, a Financing card when finance is used (financier, status Applied / Under review / Approved / Disbursed, approved amount), and a "How to pay the balance" button that expands Khans' bank details and the reference to quote, with an "Upload proof of payment" action.
6. **Updates feed:** reverse-chronological messages from Khans ("Your documents have been approved", "Your vehicle is ready for inspection"), each with a timestamp.
7. **Notification preferences:** toggles for SMS, WhatsApp and email updates.
8. **Help card:** contact details and a link to FAQ.
- Mobile: single column, sticky "Message us on WhatsApp" bar, upload-friendly large tap targets.
- States to include: loading skeleton, a step needing action (highlighted banner at the top), and a completed purchase with a thank-you message and a review prompt.

### Screen 6C — Book a Viewing or Test Drive (`/book-viewing`)
- Reached from the "Book a viewing" button on Vehicle Detail (vehicle prefilled), the header utilities, and the footer.
- Compact hero. Then a two-column layout: **left** a stepped form, **right** a sticky summary card (vehicle thumbnail, name, price, showroom `[ADDRESS]`, opening hours).
- Steps: 1) Choose type (Viewing or Test drive, segmented control). 2) Pick a date (next 14 days, unavailable days disabled) and a time slot (chips, only free slots shown). 3) Your details: full name, phone, email optional, notes. For test drives show a reminder: "Please bring your driving licence."
- Confirmation state: booking reference, date and time, address with a "Get directions" link, "Add to calendar" button, and a note that a confirmation is sent by WhatsApp or SMS. Include "Reschedule or cancel" link.
- Mobile: full-width single column, date as a horizontal scroller of day chips, sticky "Confirm booking" button.

### Screen 6D — Request a Vehicle (`/request-vehicle`)
- For buyers who cannot find what they want: "Tell us what you are looking for and we will source it."
- Hero with a short three-step explanation (Tell us, We search, We contact you).
- Form in clear groups: **Vehicle** (make, model optional, year from and to, body type, fuel, transmission, colour preference), **Budget** (min and max in KSh, finance interest toggle), **Preferences** (must-have features, whether importing is acceptable, timeline), **Contact** (name, phone, email, preferred contact method).
- Confirmation state with a reference number and what happens next.
- Also reachable from the empty state on the Vehicles page ("Request this vehicle", with the search filters carried over into the form).

### Screen 7 — Saved Vehicles (`/saved`)
Grid of saved vehicle cards with remove option, empty state, and a "Compare selected" action.

### Screen 8 — Compare (`/compare`)
Up to 3 vehicles side by side: image, name, price, then rows of specs. Highlight differences with a toggle. On mobile, use horizontal scroll with a sticky first column.

### Screen 9 — Sell or Trade In (`/sell`)
Hero, 3-step explanation, and a form (contact details, make, model, year, mileage, condition, photo upload, expected price optional). Success state.

### Screen 10 — FAQ and How to Buy (`/faq`)
Searchable accordion grouped by Buying, Financing, Trade-in, Documents and Delivery. Contact CTA at the bottom.

### Screen 11 — 404 (`/404`)
Minimal: large Display "404", one sentence, primary button "Back to home", secondary "Browse vehicles", and a small search field.

### Screen 12A — Privacy Policy (`/privacy`)
KHANS TRADING Ltd collects ID documents, KRA PINs, payment and finance details, so this page must feel clear and trustworthy, not like fine print.
- **Layout:** compact hero with H1 "Privacy Policy" and "Last updated: `[DATE]`". Below, two columns: a sticky table of contents on the left (on mobile it becomes an "On this page" accordion at the top) and a readable 720px text column on the right.
- **"In short" summary card** at the top, in plain language: what we collect, why we collect it, that we do not sell your data, that you can ask to see, correct or delete it, and how to contact us.
- **Sections, in order:**
  1. Who we are (KHANS TRADING Ltd as the data controller, `[ADDRESS]`, `[EMAIL]`)
  2. Information we collect (enquiries, viewing and test drive bookings, vehicle requests, documents uploaded for a purchase such as ID and KRA PIN, payment and finance information, device and usage data through cookies)
  3. How we use your information
  4. Our legal basis and your consent
  5. Who we share it with (financiers and Saccos, insurers, government agencies where required for registration and transfer, and service providers such as hosting and messaging; we do not sell personal data)
  6. How long we keep it
  7. How we protect it (secure storage and role-based access)
  8. Your rights (access, correction, deletion, objection, withdrawing consent, data portability)
  9. Cookies (with a "Manage cookie preferences" button)
  10. Children (our services are for people aged 18 and over)
  11. Where your data is processed and hosted
  12. Changes to this policy
  13. Contact and complaints (`[EMAIL]`, and the right to complain to the Office of the Data Protection Commissioner in Kenya)
- **Data request card** near the bottom: "Request access, correction or deletion of your data", with a small form (name, phone, request type select, details, consent line), a success state, and a note on expected response time (`[X]` days).
- Use realistic placeholder policy text. Do not put legal-review notes on the page.

### Screen 12B — Terms of Service and Cookie Policy (`/terms`, `/cookies`)
Same layout as the Privacy Policy: H1, last-updated line, sticky table of contents, 720px text column. The Cookie Policy page lists the cookie categories (Necessary, Analytics, Marketing) in a simple table with purpose and duration, plus a "Manage cookie preferences" button.

**Note for the team (not part of the UI):** the policy text is a template. Have it reviewed by a qualified legal professional and aligned with the Kenya Data Protection Act, 2019 (including any registration requirements) before launch.

---

## 7. VEHICLE DATA MODEL (for consistent content and later build)

`id`, `slug`, `title`, `make`, `model`, `trim`, `year`, `price` (nullable, null shows "Ask for price"), `negotiable` (boolean), `status` (in_stock, reserved, sold, incoming), `is_featured`, `is_new_arrival`, `body_type`, `mileage_km`, `transmission`, `fuel_type`, `engine_cc`, `drive` (2WD, 4WD, AWD), `colour`, `seats`, `doors`, `condition_notes`, `description`, `features[]`, `images[]` (first is cover), `created_at`, `updated_at`.

**Deal:** `id`, `reference`, `customer_id`, `vehicle_id`, `type` (local_stock, import), `stage`, `assigned_to`, `agreed_price`, `deposit_paid`, `balance_due`, `on_hold`, `created_at`, `updated_at`.
**Document:** `id`, `deal_id`, `type`, `status` (required, uploaded, under_review, approved, needs_attention), `reject_reason`, `file_url`, `uploaded_at`.
**Payment:** `id`, `deal_id`, `amount`, `method` (bank_transfer, cheque_rtgs, cash, finance_disbursement, trade_in_credit, mpesa), `reference`, `paid_at`, `status` (pending_verification, confirmed, failed, refunded), `proof_url`, `received_by`, `receipt_url`.
**Financing:** `id`, `deal_id`, `financier`, `requested_amount`, `approved_amount`, `status` (applied, under_review, approved, rejected, disbursed), `applied_at`, `decided_at`, `disbursed_at`, `documents[]`.
**DataRequest:** `id`, `customer_id`, `type` (access, correction, deletion), `status` (new, in_progress, completed), `requested_at`, `completed_at`.
**Update:** `id`, `deal_id`, `message`, `channel[]`, `visible_to_client`, `created_by`, `created_at`.
**Customer:** `id`, `name`, `phone`, `email`, `notification_prefs`, `source`, `tags[]`.
**Viewing:** `id`, `vehicle_id`, `customer_id`, `type` (viewing, test_drive), `starts_at`, `status` (requested, confirmed, completed, no_show, cancelled), `assigned_to`, `reminder_sent_at`.
**VehicleRequest:** `id`, `customer_id`, `make`, `model`, `year_from`, `year_to`, `budget_min`, `budget_max`, `body_type`, `fuel`, `transmission`, `must_haves`, `import_ok`, `timeline`, `status` (new, sourcing, found, closed).
**CostItem:** `id`, `vehicle_id`, `category`, `amount`, `currency`, `exchange_rate`, `incurred_on`, `note`, `receipt_url`.
**Shipment:** `id`, `vehicle_id`, `supplier_ref`, `vessel_or_container_ref`, `stage`, `eta`, `arrived_at`, `documents[]`.

### 7.1 Purchase pipeline stages (editable in Admin Settings)

Used by the client tracker (Screen 6B) and the admin pipeline (Screens G and H). Stage names and required documents are placeholders to be confirmed by KHANS TRADING Ltd.

**Local stock purchase**
1. Enquiry received
2. Vehicle reserved (deposit paid)
3. Documents submitted (for example ID, KRA PIN, proof of address)
4. Payment or financing (full payment, or bank or Sacco approval, then balance)
5. Ownership transfer and insurance
6. Final inspection and handover
7. Completed

**Import order (only if Khans sources vehicles from abroad):** the same stages with two added after step 3: Shipping in transit, and Customs clearance and registration.

**Client notifications:** sent automatically on every stage change, document approved or needing attention, payment received, and any message from the team, through the channels the client chose (SMS, WhatsApp, email).

### 7.2 Shipment stages (editable, for imported vehicles)
1. Purchased
2. Export documents processing
3. Shipped (in transit)
4. Arrived at port
5. Customs clearance
6. Registration and inspection
7. Delivered to showroom

### 7.3 Vehicle cost categories (editable)
Purchase price, Auction or agent fees, Freight and shipping, Insurance, Duty and taxes, Clearing and port charges, Transport to showroom, Repairs and reconditioning, Registration and licensing, Other.

### 7.4 Roles and permissions
- **Owner and Manager:** everything, including costing and profit.
- **Accounts:** payments, costing, customers (read), deals (read).
- **Sales:** inventory, enquiries, viewings, customers, deals. No access to costing or profit.

---

## 8. ADMIN PANEL (`/admin`)

Purpose: let KHANS TRADING Ltd staff add, edit, mark as sold, and remove vehicles without technical help.

**Admin shell (identical on every admin screen)**
- Desktop: left sidebar 260px, `graphite` bg, white logo, nav items with icons grouped under small eyebrow labels: **Sales** (Dashboard, Deals, Enquiries, Viewings, Customers), **Stock** (Inventory, Add Vehicle, Shipments, Costing), **Finance** (Payments), **System** (Settings), user menu and Log out at the bottom. Top bar with page title, global search, and a primary "Add vehicle" button.
- Mobile: top bar with menu button; the sidebar becomes a slide-in drawer. Tables become stacked cards.
- Content area `ivory` background, white cards, same tokens as the public site. Keep it calm and dense but readable.

### Admin Screen A — Login (`/admin/login`)
Centred card on `ivory`, logo, email and password, "Sign in" primary button, "Forgot password" link, error state. No public navigation.

### Admin Screen B — Dashboard (`/admin`)
- Stat cards: Total vehicles, In stock, Reserved, Sold this month (sample numbers).
- Recent enquiries list (name, vehicle, time, status).
- Recently added vehicles (thumbnail, name, status).
- Today's viewings and vehicles arriving soon (from Shipments).
- Quick actions: Add vehicle, New deal, View enquiries.

### Admin Screen C — Inventory (`/admin/vehicles`)
- Toolbar: search, status filter, make filter, sort, "Add vehicle" primary button.
- Table columns: checkbox, thumbnail, vehicle (title and year), price, status badge, featured toggle, date added, actions menu (Edit, Mark as sold, Duplicate, Delete).
- Bulk actions bar when rows are selected: Mark as sold, Feature, Delete.
- **Delete** opens a confirm dialog naming the vehicle, with a danger button "Delete vehicle". Offer "Mark as sold" as the safer alternative inside the dialog.
- Pagination, empty state, and loading skeleton.
- Mobile: each vehicle is a card with image, title, price, status and an actions menu.

### Admin Screen D — Add / Edit Vehicle (`/admin/vehicles/new`, `/admin/vehicles/[id]/edit`)
Single-page form in clearly separated cards, with a sticky action bar ("Save draft", "Publish", "Cancel"):
1. **Basic information:** make, model, trim, year, body type, price, "Price on request" toggle, negotiable toggle.
2. **Specifications:** mileage, transmission, fuel type, engine size, drive, colour, seats, doors.
3. **Status and visibility:** status select (In Stock, Reserved, Sold, Incoming), Featured toggle, New arrival toggle.
4. **Photos:** drag-and-drop multi-upload, thumbnails with drag-to-reorder, "Set as cover" action, remove icon per photo, upload progress states.
5. **Description and features:** rich-text-lite description, feature checkboxes with an "add custom feature" field.
6. Inline validation, unsaved-changes warning, success toast after save, and a live "Preview on site" link.

### Admin Screen E — Enquiries and Reservations (`/admin/enquiries`)
Tabs: Enquiries, Reservations, Vehicle requests. Table with customer name, phone, vehicle (or requested make and budget for vehicle requests), message preview, date, status (New, Contacted, Closed; vehicle requests use New, Sourcing, Found, Closed), and a detail drawer with one-tap Call and WhatsApp buttons. In the drawer: "Convert to deal", and for vehicle requests a "Match from stock" action that lists vehicles fitting the request.

### Admin Screen F — Settings (`/admin/settings`)
Business details (name, phone, WhatsApp, email, address, hours), team users and roles (Owner, Manager, Sales, Accounts, with permissions), viewing availability (opening hours, slot length, blocked dates, reminder timing), password change, pipeline stages and required-document lists (editable), notification templates for SMS, WhatsApp and email per stage, and **payments setup** (bank accounts shown to clients, enabled payment methods with M-Pesa off by default, reservation hold period, financing partners list). Simple form layout.

### Admin Screen G — Deals Pipeline (`/admin/deals`)
Every enquiry or reservation that becomes a purchase is a **deal**. This screen is the day-to-day operations hub.
- Summary strip: Open deals, Awaiting documents, Awaiting payment, Completed this month.
- Toolbar: search, filters (stage, assigned staff, overdue), Board/List toggle, "New deal" button.
- **Board view:** one column per stage (Section 7.1) with a count. Each deal card shows client name, vehicle thumbnail and title, price, days in stage (turns amber when overdue), documents progress (for example 3/5), balance due, and the assigned staff avatar. Dragging a card to another column opens a confirm dialog with an optional note and a "Notify client" toggle.
- **List view:** table with the same fields plus last update date.
- Mobile: a stage selector at the top, then a vertical list of deal cards.

### Admin Screen H — Deal Detail (`/admin/deals/[id]`)
- Header: reference number, client name, vehicle, stage badge, assigned staff select, primary "Move to next stage" button, overflow menu (Put on hold, Cancel deal).
- **Left column:**
  1. Stage timeline with timestamps, who changed it, and notes per stage.
  2. Documents: checklist with preview, Approve and Reject (reason required, sent to the client), "Request document" and "Upload on behalf of client".
  3. Payments ledger: deposit, instalments, balance. "Record payment" (method: Bank transfer, Cheque or RTGS, Cash, Finance disbursement, Trade-in credit, M-Pesa; amount; reference; proof upload) and receipt download. Cash payments record who received the cash.
  4. Financing: financier (bank or Sacco), requested and approved amounts, status (Applied, Under review, Approved, Rejected, Disbursed), key dates, and attached finance documents. Shown only when the deal uses finance.
  5. Send update: template select, channel chips (SMS, WhatsApp, Email), message preview, Send button, and a toggle "Notify client automatically when the stage changes".
- **Right column:** client card (Call and WhatsApp buttons), vehicle card (link to the listing), key dates, private internal notes, generated documents (sales agreement, receipt, handover form as placeholders), and an activity log (audit trail).
- Mobile: single column, sticky bottom bar with "Move to next stage".

### Admin Screen I — Viewings Calendar (`/admin/viewings`)
- Toolbar: Day, Week, Month and List toggle, staff filter, status filter, "Add booking" button, "Availability settings" link.
- Calendar shows booking blocks with vehicle, client name, type (Viewing or Test drive) and a status colour: Requested (warning), Confirmed (success), Completed (ink), No-show (danger), Cancelled (muted).
- Clicking a booking opens a side drawer: client details with Call and WhatsApp, vehicle card, assigned staff select, and actions Confirm, Reschedule, Cancel, Mark completed, Mark no-show. Show that a reminder is sent automatically 24 hours before.
- Mobile: day agenda list with a horizontal date strip.

### Admin Screen J — Customers (`/admin/customers`, `/admin/customers/[id]`)
- **List:** search, filters (source, has open deal, tag), table with name, phone, last activity, open deals count, total purchases, and tags. "Add customer" button and CSV export.
- **Detail:** profile header with Call and WhatsApp buttons and editable contact details; tabs for Overview, Deals, Payments, Enquiries and Viewings, Documents on file, and Notes. A single chronological activity timeline of every interaction. Preferences panel (notification channels, vehicle interests). A "Data requests" action to export or delete this customer's data on request.
- Mobile: list as cards, detail tabs as a horizontal scroller.

### Admin Screen K — Payments and Receipts (`/admin/payments`)
Vehicle payments are mostly bank transfers, finance disbursements and cash, so this screen is built around those. M-Pesa is supported but secondary.
- Tabs: **Payments** and **Financing**.
- Summary cards: Received this month, Pending verification, Bank and finance total, Cash total.
- **Payments tab table:** date, receipt number, customer, deal and vehicle, method (Bank transfer, Cheque or RTGS, Cash, Finance disbursement, Trade-in credit, M-Pesa), reference, amount, status (Confirmed, Pending verification, Failed, Refunded). Filters for date range, method and status, plus CSV export.
- **Unmatched deposits panel:** bank deposits not yet linked to a deal (entered manually or imported by uploading a bank statement CSV), each with an "Assign to deal" action. Pending proof-of-payment uploads from clients appear here for verification.
- **Cash handling:** cash entries require the receiving staff member and generate an auto-numbered receipt. A daily cash summary shows cash received and a "Mark as banked" action.
- **Financing tab:** table of finance cases with client, vehicle, financier, requested and approved amounts, status (Applied, Under review, Approved, Rejected, Disbursed) and expected disbursement date. Row opens the linked deal.
- Row drawer: full payment details, proof of payment preview, linked deal, and receipt actions (Download PDF, Send by WhatsApp, Send by email). "Record payment" button for manual entries (method, amount, reference, date, deal, proof upload).

### Admin Screen L — Vehicle Costing and Profit (`/admin/costing`)
Restricted to Owner, Manager and Accounts roles. Sales staff never see this screen.
- Summary cards: Total stock cost, Projected profit, Average margin, Profit on vehicles sold this month.
- Table: vehicle, days in stock, total cost, asking price, projected profit, margin percentage, status. Margin is colour-coded (healthy, thin, loss).
- **Cost sheet drawer or page per vehicle:** line items by category (Section 7.3), each with amount, date, note and receipt attachment, plus an exchange rate field for foreign-currency purchases. A live summary shows total cost, asking price, target margin and projected profit. When a vehicle is sold, add actual sale price and actual profit.
- Mobile: summary cards stack, table becomes cards, cost lines become a simple list.

### Admin Screen M — Shipments (`/admin/shipments`)
For vehicles being imported. Each shipment links to a vehicle with the status Incoming.
- View toggle: Board (one column per shipment stage from Section 7.2) or List.
- Card or row: vehicle, supplier or auction reference, vessel or container reference, ETA, current stage, and a delay flag when ETA has passed.
- Shipment detail drawer: stage timeline with dates and notes, documents (invoice, bill of lading, export certificate as placeholders), linked cost items, and a primary action "Mark arrived and add to stock", which opens the Add Vehicle form prefilled.
- Mobile: stage selector and vertical list.

---

## 9. SCREEN GENERATION ORDER

Generate strictly one at a time, in this order. Wait for my `next` after each.

**Required**
1. Home
2. Vehicles
3. Vehicle Detail
4. About Us
5. Contact Us
6. Admin: Login
7. Admin: Dashboard
8. Admin: Inventory
9. Admin: Add / Edit Vehicle

**Client tracking and operations (high priority)**
10. Reserve Vehicle
11. Track Your Purchase: Lookup
12. Track Your Purchase: Detail
13. Admin: Deals Pipeline
14. Admin: Deal Detail

**Bookings, sourcing and back-office**
15. Book a Viewing or Test Drive
16. Request a Vehicle
17. Admin: Viewings Calendar
18. Admin: Customers
19. Admin: Payments and Receipts
20. Admin: Vehicle Costing and Profit
21. Admin: Shipments

**Supporting**
22. Privacy Policy
23. 404
24. Saved Vehicles
25. Compare
26. Sell or Trade In
27. FAQ and How to Buy
28. Admin: Enquiries and Reservations
29. Admin: Settings
30. Terms of Service and Cookie Policy

After all screens, offer to produce the mobile version of any screen I choose.

---

## 10. RESPONSIVE RULES SUMMARY

| Element | Mobile | Tablet | Desktop |
|---|---|---|---|
| Navigation | Hamburger, full-screen drawer | Hamburger | Inline links with mega-menu |
| Header height / logo height | 64px / 40px | 64px / 40px | 80px / 48px |
| Vehicle grid | 1 column | 2 columns | 3–4 columns |
| Filters | Bottom sheet | Collapsible panel | Sticky sidebar |
| Vehicle Detail actions | Sticky bottom bar | Sidebar card | Sticky sidebar card |
| Tables (admin) | Stacked cards | Table, fewer columns | Full table |
| Section padding | 56px | 72px | 96px |
| Touch targets | 44px minimum | 44px minimum | 40px minimum |

Additional rules:
- No horizontal page scroll at any width. Only deliberate carousels and the compare table may scroll horizontally.
- Text never smaller than 14px, body 16px.
- Keep primary actions within thumb reach on mobile.
- Images use fixed aspect ratios to avoid layout shift.

---

## 11. ACCESSIBILITY AND QUALITY

- Text contrast at least 4.5:1 (see colour rules for champagne).
- Visible focus states on every interactive element.
- All images have meaningful alt text placeholders. Icon-only buttons have labels.
- Forms: labels always visible, errors in text and colour, never colour alone.
- Status is communicated by text as well as colour.

---

## 12. BUILD NOTES (for later development)

Tokens map directly to a Tailwind theme:

```css
:root {
  --ink: #0B0B0C;       --graphite: #1A1B1E;
  --slate: #55585F;     --mist: #8A8D94;
  --stone: #E4E2DD;     --ivory: #F8F7F4;
  --champagne: #B8975A; --champagne-dark: #9F7F47; --champagne-tint: #F3ECDD;
  --success: #1E7F4F;   --warning: #B7791F;
  --danger: #B42318;    --info: #1F5FA8;
  --radius-sm: 6px; --radius-md: 10px; --radius-lg: 14px;
}
```

- Logo in the header (prevents navbar breakage):

```css
.header { height: 80px; display: flex; align-items: center; gap: 24px; }
.header__logo { flex: 0 0 auto; display: block; }
.header__logo img { height: 48px; width: auto; display: block; }
.header__nav { flex: 1 1 auto; min-width: 0; display: flex; justify-content: center; gap: 32px; white-space: nowrap; }
.header__actions { flex: 0 0 auto; display: flex; align-items: center; gap: 12px; }
@media (max-width: 1023px) { .header { height: 64px; } .header__logo img { height: 40px; } }
```

- Fonts: Jost (headings) and Inter (body) via `next/font`.
- Components: shadcn/ui (Button, Input, Select, Dialog, Sheet, Table, Tabs, Accordion, Toast, Slider, Checkbox, Switch).
- Motion: Framer Motion, respecting reduced motion.
- Icons: Lucide.
