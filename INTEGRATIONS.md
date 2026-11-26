# INTEGRATIONS.md: Third-party services

Every external service the system uses: purpose, plan, limits, environment variables, setup notes and the trap to avoid. Prices and limits were checked in November 2026 and change often, so re-verify before launch. Items marked **UNVERIFIED** were not checked.

All secrets live in environment variables (names in `.env.example`). Never commit a value.

---

## 1. Vercel (hosting)

- **Purpose:** hosts the Next.js app (public site, admin, serverless server code).
- **Plan:** Hobby for development and previews only. **Production requires Pro (about $20 per seat per month).** Vercel's fair-use rules limit Hobby to non-commercial personal use.
- **Setup:** connect the GitHub repo, set environment variables per environment, add the production domain, enable preview deployments.
- **Trap:** putting the live business site on Hobby breaks the terms of service.
- **Alternative:** Cloudflare Workers through the OpenNext adapter. Commercial use is allowed, but the free Workers plan has a 3 MiB compressed worker limit, a 10 ms CPU limit, and Node.js middleware is not yet supported by the adapter. Needs a decision in `DECISIONS.md` before use.

## 2. Supabase (database and auth)

- **Purpose:** Postgres, Auth, RLS. All business data and staff accounts.
- **Plan:** Free for development (500 MB database, 1 GB file storage, 5 GB bandwidth, 50,000 monthly active users, **pauses after 7 days of inactivity**, no daily backups, 2 free projects). **Production on Pro (about $25 per month):** no pausing, daily backups with 7-day retention, 8 GB database.
- **Projects:** `khans-dev` and `khans-prod`, never shared.
- **Setup:** disable public sign-up; enable TOTP MFA; create `profiles` and role mapping via migrations; expose the role as a JWT claim using a custom access token hook (verify the current Supabase docs for the exact mechanism); never use the service role key in client code.
- **Staff emails:** generate invite and reset links on the server and send them through Resend. Do not depend on Supabase's built-in email sender.
- **Keep-alive (development only):** a free uptime monitor or scheduled job pinging the dev project prevents a pause. Not a substitute for Pro in production.
- **Env:** `NEXT_PUBLIC_SUPABASE_URL`, `NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY` (the older name is "anon key"; check the current naming), `SUPABASE_SERVICE_ROLE_KEY` (server only).

## 3. Cloudflare

### 3.1 DNS and proxy
- **Purpose:** DNS for the domain, proxy and SSL, basic DDoS protection.
- **Plan:** Free.
- **Setup:** SSL mode Full (strict); always HTTPS; HSTS after testing; add records for Vercel, Zoho Mail (MX, SPF, DKIM) and Resend (on a `send.` subdomain) so they do not conflict.

### 3.2 R2 (images and documents)
- **Purpose:** vehicle photos (public bucket) and client documents (private bucket).
- **Plan:** Free tier of 10 GB storage per month, 1 million Class A operations, 10 million Class B operations, and **no egress fees**. Beyond that, storage is about $0.015 per GB-month.
- **Buckets:** `khans-media-[env]` (public, served from `media.[DOMAIN]` through the CDN) and `khans-private-[env]` (never public).
- **Setup:** S3 API token scoped to the two buckets; CORS for presigned uploads from the site origin only; cache headers on public objects.
- **Trap:** private documents must never be placed in the public bucket. Access only through short-lived signed URLs after a permission check.
- **Env:** `R2_ACCOUNT_ID`, `R2_ACCESS_KEY_ID`, `R2_SECRET_ACCESS_KEY`, `R2_BUCKET_PUBLIC`, `R2_BUCKET_PRIVATE`, `R2_PUBLIC_BASE_URL`.

### 3.3 Turnstile (bot protection)
- **Purpose:** protects contact, enquiry, booking, request, sell and tracker forms.
- **Plan:** Free.
- **Rule:** always verify the token on the server.
- **Env:** `NEXT_PUBLIC_TURNSTILE_SITE_KEY`, `TURNSTILE_SECRET_KEY`.

### 3.4 Web Analytics
- **Purpose:** privacy-friendly traffic stats without cookies.
- **Plan:** Free. Add a consent step before adding any analytics that sets cookies.

## 4. Zoho Mail (staff mailboxes)

- **Purpose:** staff addresses like `info@[DOMAIN]`.
- **Plan:** Forever Free. **Up to 5 users, 5 GB each, web access and mobile apps, one domain. IMAP, POP and ActiveSync are not included, and SMTP is not available.** A 6th user requires paid licences for the whole organisation (paid plans start around $1 per user per month).
- **Setup:** verify the domain, add MX, SPF and DKIM records in Cloudflare DNS (DNS only, not proxied), create mailboxes.
- **Trap:** the website cannot send email through Zoho Free. Transactional email goes through Resend. Set `Reply-To` to a Zoho mailbox so customer replies reach staff.

## 5. Resend (transactional email)

- **Purpose:** tracker updates, one-time codes, staff invites, enquiry confirmations, receipts.
- **Plan:** Free: 3,000 emails per month, **100 per day cap**, 1 verified domain, 30-day logs. Pro is $20 per month for 50,000.
- **Setup:** verify a sending subdomain (for example `send.[DOMAIN]`) with SPF and DKIM; add DMARC; from-address `no-reply@send.[DOMAIN]`; reply-to a Zoho mailbox.
- **Fallback:** Brevo free allows 300 emails per day. Keep sending behind the provider interface so it can be swapped.
- **Env:** `RESEND_API_KEY`, `EMAIL_FROM`, `EMAIL_REPLY_TO`.

## 6. Stitch MCP (design access for the frontend agent)

- **Purpose:** lets the frontend agent read the approved Stitch screens (HTML and screenshots) instead of guessing.
- **Get a key:** open Stitch, profile icon, Stitch Settings, API Keys, Create Key.
- **Official endpoint:** `https://stitch.googleapis.com/mcp`, authenticated with an `X-Goog-Api-Key` header.
- **Community option:** the `@_davideast/stitch-mcp` proxy (run with `npx`), which adds convenience tools such as `get_screen_code` and `get_screen_image` and reads `STITCH_API_KEY` from the environment.
- **OpenCode config (shape only, verify against the installed OpenCode version's docs):**

```json
{
  "mcp": {
    "stitch": {
      "type": "remote",
      "url": "https://stitch.googleapis.com/mcp",
      "headers": { "X-Goog-Api-Key": "{env:STITCH_API_KEY}" },
      "enabled": true
    }
  }
}
```

- **Safer workflow (required):** do not depend on the live MCP for every task. Export each approved screen once and commit it:
  - `docs/design/<screen-name>/code.html` (Stitch's HTML)
  - `docs/design/<screen-name>/desktop.png` and `mobile.png` (screenshots)
  The agent builds from these files and `DESIGN.md`. The HTML is a **visual and structural reference only**: the agent rebuilds it with project components and tokens, never pastes it in.
- **Check:** confirm the chosen frontend model can call MCP tools and whether it accepts images. If it cannot read screenshots, rely on the HTML plus `DESIGN.md`.
- **Env (local dev only, not used by the app):** `STITCH_API_KEY`. Never commit it.

## 7. GitHub

- Repository, pull requests, **Dependabot** and secret scanning (free), optional GitHub Actions for lint, typecheck, test and build.

## 8. Sentry (optional, after launch of public pages)

- Error tracking. Free plan. Verify current limits. Keep server instrumentation light if hosting on Cloudflare (worker size limit).
- **Env:** `SENTRY_DSN`.

## 9. Uptime monitoring (optional)

- Any free uptime monitor pinging the site and a `/api/health` route. Also keeps a Free Supabase dev project active.

## 10. Maps

- Showroom location: a plain map embed (no API key) or Leaflet with OpenStreetMap. Do not use the Google Maps JavaScript API (billing required).

## 11. Not free or UNVERIFIED (decide later)

| Service | Purpose | Status |
|---|---|---|
| Africa's Talking | SMS notifications and OTP | Pay per SMS. **UNVERIFIED** current rates |
| WhatsApp Business Cloud API (Meta) | Automated WhatsApp updates | Per-message pricing and template approval. **UNVERIFIED**. Until decided, use free click-to-chat (`wa.me`) links |
| M-Pesa Daraja | Optional small reservation deposits | Disabled by default; most payments are bank, finance and cash |
| Domain registration | The site domain | Paid yearly by the client |

## 12. Environment variables

Defined in `src/lib/env.ts` (validated with Zod) and listed by name in `.env.example`. A missing required variable must fail the build with a clear message.

| Variable | Scope | Required | Notes |
|---|---|---|---|
| `NEXT_PUBLIC_SITE_URL` | public | yes | Canonical URL |
| `NEXT_PUBLIC_SUPABASE_URL` | public | yes | |
| `NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY` | public | yes | Previously "anon key" |
| `SUPABASE_SERVICE_ROLE_KEY` | server | yes | Never exposed |
| `R2_ACCOUNT_ID` `R2_ACCESS_KEY_ID` `R2_SECRET_ACCESS_KEY` | server | yes | |
| `R2_BUCKET_PUBLIC` `R2_BUCKET_PRIVATE` | server | yes | |
| `R2_PUBLIC_BASE_URL` | public | yes | `https://media.[DOMAIN]` |
| `RESEND_API_KEY` `EMAIL_FROM` `EMAIL_REPLY_TO` | server | yes | |
| `NEXT_PUBLIC_TURNSTILE_SITE_KEY` `TURNSTILE_SECRET_KEY` | public / server | yes | |
| `TRACKER_SESSION_SECRET` | server | yes | Signs tracker sessions |
| `CRON_SECRET` | server | when cron is used | Protects scheduled endpoints |
| `SENTRY_DSN` | server | no | |
| `STITCH_API_KEY` | local only | no | Design access for the agent |
