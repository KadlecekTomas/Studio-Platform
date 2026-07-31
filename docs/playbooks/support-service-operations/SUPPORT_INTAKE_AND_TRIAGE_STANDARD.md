# Support Intake and Triage Standard

## Purpose

This standard defines how Studio Platform receives, records, classifies and prioritises post-launch requests. Support must not depend on private messages, memory or whoever happens to be available.

## Core rule

Every support request must enter a durable queue before work begins, except when immediate containment is required to prevent material harm.

## Required intake data

Each request must include, where applicable:

- client and product,
- reporter and contact channel,
- date and time observed,
- affected environment,
- affected user role or workflow,
- expected behaviour,
- actual behaviour,
- business impact,
- reproducibility,
- screenshots, logs or other evidence,
- known workaround,
- data sensitivity,
- current owner.

Missing information may reduce confidence, but must not be used to ignore a potentially severe issue.

## Request classification

Each item is classified as one of:

- **Incident** — active loss or serious degradation of a production capability.
- **Defect** — delivered behaviour does not meet an accepted requirement.
- **Support question** — guidance about intended behaviour or operation.
- **Service request** — operational action within an agreed service scope.
- **Maintenance item** — dependency, infrastructure or lifecycle work needed to preserve service health.
- **Change request** — new or materially changed behaviour outside accepted scope.
- **Client dependency** — blocked by missing client action, data, approval or access.

Classification may change as evidence improves. Every reclassification must be recorded.

## Priority model

### P1 — Critical

Material business operation is unavailable, data integrity or security may be at risk, or no acceptable workaround exists.

### P2 — High

Important workflow is substantially degraded, multiple users are affected, or a time-sensitive obligation is threatened.

### P3 — Normal

Limited impact, workaround exists, or the request affects a non-critical workflow.

### P4 — Low

Cosmetic issue, minor inconvenience, informational request or improvement opportunity.

Priority is determined by impact, urgency and reach—not by message volume, seniority of the reporter or emotional pressure.

## Triage workflow

1. Confirm receipt through the agreed channel.
2. Capture the request in the support queue.
3. Establish the current facts and unknowns.
4. Classify type and priority.
5. Assign an accountable owner.
6. Decide the next action: investigate, contain, request evidence, schedule, reclassify or close.
7. Set the next communication point.
8. Link related incidents, changes, releases and knowledge records.

## Emergency intake

For P1 or suspected security/data incidents:

- containment may begin before the full record exists,
- the incident response standard takes precedence,
- a durable record must be created as soon as operationally safe,
- all emergency actions must later be reconciled into the record.

## Queue hygiene

Every open item must have:

- an owner,
- a current classification,
- a next action,
- a next review or communication date,
- links to relevant evidence.

Items without these fields are not considered actively managed.

## Closure criteria

A support item may close only when:

- the requested outcome is delivered, declined or transferred,
- the client or internal owner has been informed,
- evidence of resolution or decision is attached,
- follow-up work is represented elsewhere,
- reusable knowledge has been captured when appropriate.

Silence, inactivity or loss of context does not constitute closure.
