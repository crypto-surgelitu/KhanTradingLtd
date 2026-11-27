# DECISIONS.md — Architecture and configuration decision records

Shared file (AGENTS.md Section 14). Each entry records a decision, its reason, the alternatives considered and the impact. One entry per decision, newest first.

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
