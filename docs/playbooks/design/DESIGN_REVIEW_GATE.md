# Design Review Gate

## Purpose

No significant user-facing work is complete until it passes a structured design review. Functional acceptance does not automatically imply design acceptance.

## When this gate applies

Use this gate for:

- new products and major features,
- public websites and landing pages,
- core workflow redesigns,
- new design-system patterns,
- high-visibility client deliverables,
- changes that materially affect hierarchy, navigation or interaction.

## Required review passes

### 1. Product and content pass

Verify that the interface communicates the product promise, uses understandable language and supports the intended workflow.

### 2. Composition pass

Review hierarchy, rhythm, density, alignment, grouping, whitespace and visual focus. Remove unnecessary containers and competing emphasis.

### 3. System pass

Verify token use, typography, colour semantics, component consistency, iconography and reusable patterns.

### 4. State pass

Review realistic loading, empty, error, success, partial-data, permission and destructive states.

### 5. Responsive pass

Review representative mobile, tablet and desktop sizes. Confirm that hierarchy and actions adapt intentionally.

### 6. Accessibility pass

Check contrast, focus, keyboard flow, labels, target sizes, reduced motion and non-colour communication.

### 7. Polish pass

Inspect spacing, optical alignment, truncation, wrapping, transitions, scroll behaviour, sticky elements, imagery quality and browser rendering.

## Mandatory questions

- Is the primary task obvious within five seconds?
- Does the product have a recognisable visual idea?
- Is any visual treatment generic or copied by habit?
- Does every card, border, shadow and colour have a purpose?
- Does the design survive realistic and ugly data?
- Are critical states explicit and recoverable?
- Is the mobile composition genuinely designed?
- Can the interface be used without a mouse?
- Is there anything that feels unfinished, accidental or visually weak?

## Evidence

The review record must identify:

- reviewed commit or build,
- environment,
- routes and workflows,
- viewport coverage,
- screenshots or recordings,
- accessibility evidence,
- findings and severity,
- design owner verdict.

Old screenshots are not evidence for a changed implementation.

## Finding severity

- **D1 — Release blocker:** broken critical workflow, inaccessible critical action, severe trust or brand failure.
- **D2 — Major:** confusing hierarchy, incomplete state, serious responsive defect or visible inconsistency.
- **D3 — Moderate:** polish, rhythm or component issue that materially lowers quality.
- **D4 — Minor:** small refinement with limited user impact.

## Verdicts

- `PASS` — no unresolved D1 or D2 findings; remaining findings are explicitly accepted.
- `CONDITIONAL PASS` — narrowly scoped follow-up is owned and does not undermine launch quality.
- `FAIL` — the experience is not ready to represent Studio Platform or the client.

## Non-negotiable rule

Deadlines do not convert design debt into quality. Any conscious compromise must be documented with impact, owner and correction date.