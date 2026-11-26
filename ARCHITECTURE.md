# ARCHITECTURE.md: KHANS TRADING Ltd

How the system is built, how data moves, and why. Agents must read this before any work (AGENTS.md Section 1). Approved libraries are in `docs/STACK.md`, third-party services in `docs/INTEGRATIONS.md`.

Status: **proposed by the owner's research, v1.0.** Changes go through `docs/DECISIONS.md`.

---

## 1. System at a glance

```
                          Cloudflare (DNS, proxy, Turnstile, Web Analytics)
                                         |
        Browser (public site, admin panel, purchase tracker)
                                         |
                              Vercel (Next.js App Router)
        ┌────────────────────────────────┼────────────────────────────────┐
        │ Server Components              │ Server Actions / Route Handlers │
        │ (render + read data)           │ (mutations, uploads, webhooks)  │
        └───────┬────────────────────────┴───────────────┬────────────────┘
                │                                        │
        Supabase                                  Cloudflare R2
        Postgres + Auth + RLS                     public bucket  (vehicle photos)
        (all business data, staff logins,         private bucket (client documents)
         roles, audit log)                                 |
                                                   Cloudflare CDN (media.[DOMAIN])
                │
        Resend (transactional email)      Zoho Mail (staff mailboxes only)
```

There is **no separate always-on backend server.** The backend is TypeScript running as serverless functions inside the Next.js app on Vercel, plus the Supabase database. Nothing "sleeps" except a Supabase **Free** project (see Section 9).

---

## 2. Languages and runtimes

| Layer | Language |
|---|---|
| Frontend and backend application code | **TypeScript** (strict) |
| UI | React (via Next.js) with Tailwind CSS |
| Database, migrations, RLS policies, SQL functions | **SQL (PostgreSQL, PL/pgSQL where needed)** |
| Config and docs | JSON, Markdown |

No other languages. No separate Express, Python or PHP service.

---

## 3. Environments

| Environment | Hosting | Supabase project | Notes |
|---|---|---|---|
| Local | `pnpm dev` | Local Supabase (CLI) | Fake seed data only |
| Preview | Vercel preview deployments | `khans-dev` (hosted) | Never contains real customer data |
| Production | Vercel production | `khans-prod` (hosted) | Real data, backups on, never reset |

Rules: separate Supabase projects and separate R2 buckets per environment. Production secrets exist only in Vercel and the owner's password manager.

---

## 4. Rendering and caching strategy

| Area | Strategy |
|---|---|
| Public pages (Home, Vehicles, Vehicle Detail, About, FAQ, legal) | Server Components, cached, **tag-based revalidation** when a vehicle is created, edited, sold or deleted |
| Vehicle search and filters | Server-side, URL search params (shareable, no client state), server-side pagination |
| Admin panel | Dynamic rendering, never cached, protected by middleware **and** server guards |
| Purchase tracker (`/track/*`) | Dynamic, never cached, `noindex`, requires verified session |
| Forms | Server Actions with Zod validation, optimistic UI only where safe |

---

## 5. Authentication and roles

**Staff (employees)**
- Supabase Auth, email and password, **invite-only** (public sign-up disabled).
- An Owner or Manager invites a staff member from Admin Settings. The server generates the invite link and sends it through Resend (do not rely on Supabase's built-in auth emails).
- Roles: `owner`, `manager`, `accounts`, `sales` (matrix in `DESIGN.md` Section 7.4), stored in a `profiles` table and exposed to RLS and the app through a verified JWT claim.
- **TOTP multi-factor authentication required** for `owner`, `manager`, `accounts`.
- Central guard `requireRole()` in `src/server/auth`. Every server action and route handler calls it. Middleware is only a first line.
- Deactivating a staff member (soft) revokes access immediately; their audit history stays.

**Customers**
- No customer accounts. They use the tracker: **reference number plus phone number, then a one-time code**.
- Codes are hashed, expire in minutes, allow limited attempts, and errors never reveal whether a reference exists.
- A successful check creates a short-lived, signed, HTTP-only session scoped to that single deal.

---

## 6. Data and file flows

**Reads:** Server Components call `features/*/queries.ts`, which use the Supabase server client. RLS is always on, so a bug in the app cannot expose another role's data.

**Mutations:** Client calls a Server Action in `features/*/actions.ts`, which authenticates, authorises (`requireRole()`), validates with Zod, writes in a transaction (including the audit entry), revalidates tags, and returns a typed result.

**Vehicle photo upload (admin)**
1. Admin selects photos. The browser compresses and converts them to WebP (max 2000px).
2. The browser asks a Server Action for a **presigned upload URL** (role checked).
3. The browser uploads directly to the **R2 public bucket**.
4. A server step validates the file (type, size, signature) and creates the size variants (about 400, 800, 1600px WebP) with `sharp`.
5. The database stores only keys and metadata. Photos are served from `media.[DOMAIN]` through the Cloudflare CDN with long cache headers.

**Client documents (ID, KRA PIN, finance documents, proofs of payment)**
- Stored in the **R2 private bucket**, never public.
- Access only through **short-lived signed URLs** generated by the server **after** a role check or tracker-session check, and each access is written to the audit log.
- Document metadata and status live in Postgres under RLS.

**Notifications**
- Stage changes, document decisions and payment events write a row to a notifications outbox in the same transaction. A sender delivers email through the provider interface in `src/server/notifications`. Failures are retried. Channels (email now, SMS and WhatsApp later) plug in behind the same interface.

---

## 7. Security layers

1. Cloudflare proxy and SSL (Full strict), HSTS, Turnstile on public forms and tracker lookup.
2. Rate limiting for OTP, lookup and form endpoints (Postgres-based limiter to avoid another vendor).
3. Zod validation at every boundary; no raw SQL concatenation.
4. Supabase Auth with MFA for privileged roles; RLS default deny on every table.
5. Service role key server-only; R2 credentials server-only; no secrets in the client bundle.
6. Private documents only via short-lived signed URLs; access audited.
7. Audit log for stage changes, payments, document decisions, role changes, data requests, exports.
8. Security headers (CSP, frame, referrer, permissions policy) set in `next.config.*` after approval.
9. Dependabot and secret scanning on the repository.

Privacy follows the Kenya Data Protection Act, 2019 and the Privacy Policy screen (data requests, minimisation, retention, no personal data in logs).

---

## 8. Observability

- Error tracking: Sentry (free plan) once the first public pages are live.
- Uptime: a free uptime monitor pinging the public site and a health route (also keeps a Free Supabase project active during development).
- Analytics: Cloudflare Web Analytics (cookie-free). Add consent handling before any analytics that sets cookies.
- Logs: no personal data, no secrets.

---

## 9. Free-tier realities (read before launch)

| Item | Reality |
|---|---|
| Vercel **Hobby** | Restricted to non-commercial personal use. A live business site needs **Vercel Pro** (about $20 per seat per month). Hobby is acceptable only for development and previews. |
| Supabase **Free** | 500 MB database, 1 GB file storage, 5 GB bandwidth, 50,000 monthly active users, **project pauses after 7 days of inactivity**, no daily backups. Use it for development. Production runs on **Supabase Pro** (about $25 per month): no pausing, backups, 8 GB database. |
| Photos and documents | Kept in **Cloudflare R2** (10 GB free, zero egress fees), not in Supabase Storage, so image traffic does not consume Supabase bandwidth. |
| Zoho Mail **Free** | Staff mailboxes only: up to 5 users, 5 GB each, web and mobile apps, **no IMAP, POP or SMTP**, and a 6th user forces every user onto a paid plan. It cannot send email from the website. |
| Resend **Free** | 3,000 emails per month with a 100 per day cap and 1 verified domain. Enough for notifications at launch; watch the daily cap. |

Pricing was checked in November 2026 and changes often. Re-verify before committing the client to a price.

### Cost summary (approximate)

| Stage | Monthly cost |
|---|---|
| Development | $0 (Vercel Hobby for previews, Supabase Free, R2 free, Resend free) |
| **Production (recommended)** | **about $45** (Vercel Pro $20 + Supabase Pro $25; R2, Resend, Turnstile, Cloudflare DNS, Zoho free) |
| Lower-cost production alternative | about $30 (Cloudflare Workers via OpenNext, paid Workers plan $5, plus Supabase Pro $25). Commercial use is allowed on Cloudflare, but the free Workers plan has a 3 MiB worker size limit and the adapter has gaps (see `INTEGRATIONS.md`). Decide in `DECISIONS.md`. |

---

## 10. Scaling and change paths

- Database grows: Supabase compute add-ons, then read replicas.
- Photos grow: R2 beyond 10 GB is about $0.015 per GB per month, no egress fees.
- Email grows: Resend Pro or move to a higher plan; keep the provider interface.
- SMS and WhatsApp: add providers behind `src/server/notifications` without touching features.
- Hosting move: the app is standard Next.js; moving between Vercel and Cloudflare is an adapter and config change, not a rewrite.

---

## 11. Open questions for the owner

1. Final domain name and where the DNS lives (Cloudflare, planned).
2. Staff headcount (Zoho Free allows 5 mailboxes).
3. Bank account details to show clients (placeholders until supplied).
4. SMS provider and budget; WhatsApp Business API or click-to-chat links only.
5. Whether Khans pays Vercel and Supabase directly or the cost is billed through the developer.
