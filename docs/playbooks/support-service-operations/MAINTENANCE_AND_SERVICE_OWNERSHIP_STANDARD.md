# Maintenance and Service Ownership Standard

## Purpose

This standard defines how Studio Platform keeps delivered systems supportable after launch. A product is not operationally safe merely because it worked on release day.

## Service ownership

Every supported product must have:

- accountable service owner,
- technical owner or escalation path,
- client operational contact,
- supported environments,
- repository and deployment location,
- monitoring and alert ownership,
- backup and restore ownership,
- dependency inventory,
- access and secret ownership,
- current support agreement,
- exit and handover plan.

Unknown ownership is itself an operational risk and must be recorded.

## Maintenance categories

Maintenance work includes:

- security updates,
- dependency and runtime upgrades,
- infrastructure lifecycle work,
- certificate and domain renewal,
- backup verification and restore testing,
- monitoring repair,
- database health and capacity work,
- data retention execution,
- removal of obsolete access,
- documentation refresh,
- recurring-defect prevention.

Maintenance must not be deferred indefinitely because it creates no visible feature.

## Maintenance register

Each maintained product should have a register containing:

- item and category,
- reason and risk,
- owner,
- target date,
- required client action,
- estimated effort,
- commercial treatment,
- verification evidence,
- status and deferral decision.

## Dependency lifecycle

Dependencies must be reviewed for:

- support status,
- security advisories,
- compatibility,
- licence status,
- replacement risk,
- operational ownership.

End-of-life components require an explicit migration, isolation, acceptance or retirement decision.

## Backup and recovery

Where Studio Platform owns or represents backup capability:

- scope and retention must be explicit,
- backup success must be monitored,
- restore capability must be tested at a risk-appropriate cadence,
- restoration evidence must identify the environment and date,
- untested backups must not be described as proven recovery capability.

## Maintenance windows

Planned disruptive maintenance requires:

- approved scope,
- risk assessment,
- rollback or recovery plan,
- client communication,
- defined window,
- post-change verification,
- closure record.

## Technical debt

Technical debt must be described through operational impact, not aesthetic dislike. Valid impact includes:

- slower safe change,
- increased defect probability,
- security exposure,
- unsupported technology,
- excessive recovery time,
- specialist dependency,
- recurring support cost.

Debt that materially threatens service quality must enter prioritisation and commercial discussion.

## Service exit

Support may end only with an explicit exit plan covering:

- final supported date,
- open requests and risks,
- credentials and ownership transfer,
- data export or deletion,
- documentation handover,
- third-party accounts,
- monitoring and backups,
- retained obligations,
- client acknowledgement.

Ending a commercial relationship does not justify silently abandoning operational ownership.
