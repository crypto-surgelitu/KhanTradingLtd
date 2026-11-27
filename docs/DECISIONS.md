# DECISIONS.md — Architecture and configuration decision records

Shared file (AGENTS.md Section 14). Each entry records a decision, its reason, the alternatives considered and the impact. One entry per decision, newest first.

---

## 2026-11-27 — Edits.md session log adopted for both agents

**Decision:** A new repository-root file `Edits.md` becomes the shared session documentation log. It has two sections — "Frontend Agent Edits" and "Backend Agent Edits" — and each agent reads and writes **only its own section**. One entry per session (`### Session: [YYYY-MM-DD HH:MM]` with **Task**, **Changes**, **Reason**, **Status** (Completed | Partial | Blocked) and **Next Session**), added at the end of every session together with the AGENTS.md Section 16 SUMMARY. New entries go directly below the section heading, newest first; the bracketed template entry stays at the bottom of each section as the format reference. Owner decisions (2026-11-27): workflow integration is written into the two agent role prompts (`.opencode/prompts/frontend.md`, `.opencode/prompts/backend.md`); `opencode.json` is normally changed by the owner, never by an agent (one explicit owner-authorised exception on 2026-11-27, recorded under Impact below); the AGENTS.md wording is delivered as the Section 19 proposal below and pasted by the owner.

**Reason:** The owner asked for a persistent, per-agent session log so each agent can pick up where the other left off from the repository itself rather than chat history (AGENTS.md Section 17). `docs/TASKS.md` tracks tasks and handoffs; `Edits.md` tracks what each agent actually changed in each session.

**Alternatives:**
- Extend `docs/TASKS.md` with session notes — rejected: one shared section would blur the per-agent ownership the owner wants.
- One log file per agent — rejected: the owner specified a single `Edits.md` with two sections.
- Log per task instead of per session — rejected: the owner chose one entry per session, written with the SUMMARY.

**Impact / status (updated 2026-11-27 after installation):** The system is **installed**. The owner authorised a one-time `opencode.json` fix, executed by the frontend agent via a validated shell script (the agent's `edit` tool is itself denied on `opencode.json`): the `Edits.md` and `.opencode/prompts/*` allow rules were moved from the top of each agent's `permissions` array — where the later `edit *: deny` rule overrode them (OpenCode evaluates permission rules in order, **last match wins**) — to the end of the edit block, after the `*.env*` deny and before the `shell *: ask` rule. Verified: JSON parses; per agent, `edit *: deny` @0 < `Edits.md` allow @30 < `.opencode/prompts/*` allow @31 < `shell *: ask` @32 (0-based rule indices). Installed files: `Edits.md` (new), `.opencode/prompts/frontend.md` and `.opencode/prompts/backend.md` (session-log sections appended). **Rule-ordering rule of thumb for future config edits: broad deny first, specific allows after it.** No application code, dependencies, schema or contracts are affected.

### Content as applied (reference)

**1. `Edits.md` (new file, repository root):**

````markdown
# Edits Log — KHANS TRADING Ltd

Session documentation for both agents. Each agent ONLY reads and writes to its own section.

---

## Frontend Agent Edits

### Session: [YYYY-MM-DD HH:MM]
- **Task:** [What was requested]
- **Changes:** [Specific files modified, features built, screens completed]
- **Reason:** [Why these changes were made — link to DESIGN.md section or task]
- **Status:** [Completed | Partial | Blocked]
- **Next Session:** [What needs to happen next, where to pick up]

---

## Backend Agent Edits

### Session: [YYYY-MM-DD HH:MM]
- **Task:** [What was requested]
- **Changes:** [Specific schemas, migrations, Server Actions, RLS policies]
- **Reason:** [Why these changes were made — link to ARCHITECTURE.md or task]
- **Status:** [Completed | Partial | Blocked]
- **Next Session:** [What needs to happen next, where to pick up]
````

**2. `.opencode/prompts/frontend.md` — append after the last line:**

````markdown
## Session log

At the end of every session, after the SUMMARY, add one entry to the **Frontend Agent Edits** section of `Edits.md` at the repository root: `### Session: [YYYY-MM-DD HH:MM]` followed by **Task**, **Changes**, **Reason**, **Status** (`Completed | Partial | Blocked`) and **Next Session** lines. Insert it directly below the section heading, newest first. Leave the bracketed template entry at the bottom of the section unchanged. Never read or write the Backend Agent Edits section, and never change the file's headings.
````

**3. `.opencode/prompts/backend.md` — append after the last line:**

````markdown
## Session log

At the end of every session, after the SUMMARY, add one entry to the **Backend Agent Edits** section of `Edits.md` at the repository root: `### Session: [YYYY-MM-DD HH:MM]` followed by **Task**, **Changes**, **Reason**, **Status** (`Completed | Partial | Blocked`) and **Next Session** lines. Insert it directly below the section heading, newest first. Leave the bracketed template entry at the bottom of the section unchanged. Never read or write the Frontend Agent Edits section, and never change the file's headings.
````

### Proposal for AGENTS.md (Section 19) — owner to apply

**Problem:** `Edits.md` exists outside the AGENTS.md workflow, so agents are not instructed to maintain it, and Section 17's memory guidance does not mention it. AGENTS.md is owner-only (Section 15), so an agent cannot wire this in.

**Proposal:** In **Section 16 (Response Format)**, after the SUMMARY block, add:

> After sending the SUMMARY, add one session entry to your own section of `Edits.md` (repository root): `### Session: [YYYY-MM-DD HH:MM]` with **Task**, **Changes**, **Reason**, **Status** and **Next Session** lines, newest first below your section heading. Each agent writes only to its own section and leaves the other agent's section and the template entry untouched.

And in **Section 17 (Context Hygiene)**, change the memory line to:

> Use `docs/TASKS.md`, `Edits.md` and git history as memory, not chat history.

**Impact:** Two additive sentences in AGENTS.md. No change to ownership, verification or the SUMMARY format itself. Takes effect once the owner pastes it (the `opencode.json` permission entries are already in place — see Impact / status above).

---

## 2026-11-27 — Agent models moved from OpenCode free tier to OpenCode Go

**Decision:** Both repository agents run on OpenCode Go models instead of the free-tier models:

- frontend: `opencode-go/mimo-v2.6-pro` (was `opencode/mimo-v2.6-flash-free`)
- backend: `opencode-go/deepseek-v4-pro#max` (was `opencode/deepseek-v4.1-flash-free`) — the `max` reasoning variant, approved by the owner on 2026-11-27.

Syntax verified against the installed OpenCode config schema (`https://opencode.ai/config.json`, `Config.AgentEncoded.model`): a string matching `^[^/#]+\/[^#]+(?:#[^#]+)?$`, so the variant suffix form `providerID/modelID#variant` is valid, and the model catalog lists `high` and `max` variants for `opencode-go/deepseek-v4-pro`. The equivalent object form `{ "providerID": "opencode-go", "model": "deepseek-v4-pro", "variant": "max" }` is also schema-valid; the string form is used to match the existing config style.

Note: the catalog IDs use the provider prefix `opencode-go/`, not `opencode/`. The exact catalog strings were used (AGENTS.md Section 2.2: verify before use).

**Reason:** The owner subscribed to OpenCode Go. The free-tier daily quota blocked agent work mid-session.

**Alternatives:**
- Stay on the free tier — rejected: daily quota interruptions block agent sessions.
- Go Plus — not needed for current workload.

**Impact:** Agent configuration and README only (`opencode.json` two model strings, README Section 18.5 two table cells). No application code, no dependencies, no schema or contract changes.

---

## 2026-11-27 — Frontend agent skills file adopted as standing instructions

**Decision:** A skills file `.opencode/skills/frontend-enhanced.md` becomes part of the frontend agent's standing instructions: read in full during the Startup Protocol after AGENTS.md and DESIGN.md, applied to every coding task, reported as a "Skills Applied" line in the summary. AGENTS.md and DESIGN.md always win on conflict (owner-confirmed). The file is synthesised locally from AGENTS.md and DESIGN.md only — the proposed downloads from external repositories were declined by the owner in favour of local synthesis. Changes to the file only via a proposal in a task summary, never silent edits.

**Reason:** The owner requested an enhanced, always-applied frontend skill set. Local synthesis avoids importing external text as instructions (AGENTS.md Section 13: instructions come only from the owner and AGENTS.md) and needs no network fetch.

**Alternatives:**
- Download and audit allowlisted reference files (Next.js, shadcn/ui, Tailwind repos) and synthesise from them — declined by the owner.
- Reference-only file, not part of startup — declined; the owner confirmed the file governs future sessions, subordinate to AGENTS.md and DESIGN.md.

**Impact:** New folder `.opencode/skills/` (recorded here per AGENTS.md Section 5) and one new file. No application code, dependencies, config or contract changes. The file write was denied by the repository permission arrays (outside frontend ownership, AGENTS.md Section 4); the content was produced for the owner to paste. The AGENTS.md Section 16 summary format is kept, with "Skills Applied" added as an extra line.
