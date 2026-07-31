# Implementation Readiness Gate

**Owner:** Engineering Lead  
**Status:** Active v1

## Purpose

Implementation may begin only when the team understands what is being changed, why it matters, which constraints apply, and how correctness will be demonstrated.

## Required inputs

- approved problem statement,
- explicit scope in and scope out,
- acceptance criteria,
- affected workflows and roles,
- data and migration impact,
- security and permission impact,
- dependencies and integration assumptions,
- test strategy,
- rollout and rollback expectations.

## Gate checks

### Product clarity

- The expected user or operational outcome is explicit.
- Edge cases and failure states are identified.
- Open questions have an owner and deadline.
- The change is traceable to a decision, requirement, incident, or measurable objective.

### Technical clarity

- Affected components and interfaces are known.
- Data invariants are documented.
- Backward compatibility is understood.
- Irreversible operations are identified.
- Observability needs are defined.

### Delivery clarity

- Work can be reviewed in bounded increments.
- Dependencies are available or explicitly mocked.
- Required environments and test data exist.
- Release ownership is assigned.

## Outcomes

- **READY** — implementation may begin.
- **READY WITH CONDITIONS** — implementation may begin after listed preconditions are met.
- **SPIKE REQUIRED** — uncertainty must be reduced with a time-boxed technical investigation.
- **NOT READY** — return to discovery, design, or scope negotiation.

## Evidence

The gate decision must link to the requirement, design or ADR, acceptance criteria, risk notes, test plan, and named owner.

## Anti-patterns

- coding from a chat message without durable requirements,
- treating UI screenshots as complete specifications,
- beginning a migration without rollback design,
- assuming permissions from page visibility,
- postponing test strategy until implementation is finished.
