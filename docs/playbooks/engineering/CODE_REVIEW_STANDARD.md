# Code Review Standard

**Owner:** Engineering Lead
**Status:** Active v1

## Goal

Code review verifies correctness, maintainability, risk control, and supporting evidence. The author remains responsible for the change.

## Before review

The author must provide:

- the problem and intended outcome,
- a focused diff with one coherent purpose,
- affected workflows and data,
- verification results,
- known risks and limitations,
- rollout notes when operational behavior changes.

The author must also self-review the final diff and remove unrelated changes, temporary logging, and obsolete comments.

## Reviewer sequence

1. Confirm that the diff matches the stated requirement.
2. Check architecture, component boundaries, and data invariants.
3. Check validation, failure handling, and concurrent operations.
4. Verify that tests cover observable behavior.
5. Review migration, release, rollback, and monitoring implications.
6. Assess readability and future change cost.

## High-risk areas

Explicit review is required for:

- identity and role checks,
- money and calculated values,
- historical records,
- migrations and destructive operations,
- public links and tokens,
- retries and background work,
- imports, exports, PDFs, and email effects,
- shared test environments.

## Outcomes

- **APPROVE** — no blocking issue remains.
- **COMMENT** — questions or non-blocking improvements.
- **REQUEST CHANGES** — correctness, safety, scope, or evidence is insufficient.

## Comment quality

A useful review comment states the issue, why it matters, whether it blocks approval, and the expected outcome.

## AI assistance

AI may scan a diff and suggest risks or missing tests. A human validates the findings and remains accountable for approval.
