# OPOR — Project Rules

## LPPM presentation

- Keep phase mapping in `lppm-stages.ts` and reuse `LppmPhaseStepper` across LPPM views; display grouping must not change stored stage transitions or Funding/general crowdfunding logic.

## Dev server & preview

- Restart only for changes hot reload cannot apply, such as import-time i18n setup. Restarts invalidate server-function IDs in open tabs; verify with a fresh page load before reporting a fix.

## Language

- Server-side rendering uses the app's primary language so the first paint matches what the user sees; a stored alternative preference is applied only after the page has finished loading, never during rendering.

## Event reminder emails

- Share reminder options and file validation between organizer and Super Admin forms to keep manual and scheduled reminder contents consistent.
- Store reminder files privately and generate expiring download links at send time because email attachments are unsupported.
- Persist the visible reminder draft before manual sending or previewing so participants receive the latest message.

## Classroom database

- Keep classroom database changes in separately tested additive migrations; classroom transitions and membership use permission-checked RPCs so direct table writes cannot bypass publication and ownership rules.
- Keep database permission regression tests in `tests/database` using isolated PostgreSQL fixtures; never grant classroom roles to real accounts for tests.
- Explicitly revoke inherited anonymous and excess authenticated table grants in classroom migrations; database default privileges can otherwise override the intended grant list.
- Keep classroom drafts owner-only at table level and expose teacher metadata through an explicit typed projection; Super private reads must insert an audit record before returning data.
- Keep classroom publication disabled through a database flag that app roles cannot enable; verified class payments use service-only atomic settlement with unique payment/order identities so webhook retries cannot duplicate contributions or counters, and activation remains separately approved.
- Share protected classroom views; RPCs enforce access. Invitations only read until a join click; roster reads project authorized names.
- Use ClassroomShell and scoped workspace styling for consistent classroom navigation without affecting other modules.
- Create a per-router QueryClient and share it with the root provider so classroom loader reads and component reads use the same cache without cross-request state.
- Use distinct route component references for pending and page states; reusing a split component import in both options can remove its runtime binding and break all SSR routes.
- Share role-safe task screens; never serialize student drafts to teachers. Invited graders use a separate submitted-only RPC/workspace, not the broad teacher predicate, to avoid management/private-discussion access; audit shared grades.
- Authorize and audit classroom private downloads through database RPCs before privileged URL signing; expose no storage SELECT policy that bypasses the audit boundary.
- Return Super submission drafts, files and versions together from the audited RPC so private history cannot bypass the audit boundary.
- Serialize classroom autosaves through the shared hook and share the discussion composer so retries retain pending attachments without duplicating messages.
- Keep classroom public moderation separate from donation approval: publication never enables donations, and donation approval requires an already-public project.
- Include public class projects in general crowdfunding through a publication-gated safe RPC, never by widening null-class campaign reads.
- Bind donation recommendations to the graded submission version and use a narrow publication-safe public project projection so private classroom work never enters public crowdfunding payloads.

- Keep optional classroom reference documents separate from student submission slots; ship phase recommendations as static classroom assets and authorize private teacher-example reads/signing through audited RPCs so LPPM remains unchanged.

## Email sender

- Use the configured delegated domain for sender lookup and preserve scaffolded display From; exclude promotional announcement types from email fanout to keep delivery limited to expected account activity.
- Emit teacher-access notices on actual role transitions; allow only direct-recipient classroom activity emails, never assignment/comment broadcast fanout, preserving preferences, suppression and retry safety.

## General crowdfunding

- Keep general campaign guards scoped to null class bindings; only verified, service-only atomic settlement records donations, and unique payment/order identities prevent retry inflation without changing classroom or LPPM flows.
- Protect review state and financial history at the database boundary; public crowdfunding reads use explicit safe projections and sandbox donations never increase real fundraising totals.
