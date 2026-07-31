# Test Evidence Standard

**Owner:** Engineering Lead
**Status:** Active v1

## Principle

A passing test is evidence only for the exact code, configuration, environment, and data against which it ran. Evidence from an older commit cannot prove a newer commit.

## Evidence record

For every material change, record:

- commit SHA,
- command or workflow name,
- environment,
- relevant data setup,
- execution time,
- result,
- artifact or log location,
- known exclusions.

## Test layers

Use the smallest layer that reliably proves the behavior:

- static checks for type and structural errors,
- unit tests for isolated rules,
- integration tests for boundaries and persistence,
- browser tests for critical user workflows,
- smoke tests for deployed availability,
- manual verification only where automation is not yet economical.

## Critical workflow requirements

Critical workflows must have:

- deterministic test data,
- explicit preconditions,
- assertions on business outcomes,
- cleanup or isolated ownership of created data,
- coverage of at least one relevant failure path,
- repeatability on the same commit.

## Shared environment rule

Tests using shared data must not depend on the current database contents. The scenario must create, reserve, or reset the records it needs.

## Failure handling

A failing test is not dismissed as flaky without evidence. Record the failure, reproduce it, identify whether the cause is product code, test code, infrastructure, or data, and fix or quarantine it with an owner and deadline.

## Release evidence minimum

Before release, provide current evidence for the required checks, the critical workflows affected by the change, migration behavior when relevant, and the production smoke plan.

## Anti-patterns

- citing a previous pipeline run after changing the code,
- using screenshots without commit context,
- rerunning until green without diagnosing failures,
- tests that pass only because shared data happens to exist,
- verifying only the happy path for a financially or operationally critical flow.
