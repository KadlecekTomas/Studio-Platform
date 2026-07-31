# AI Usage Standard

**Owner:** Founder / Engineering Lead  
**Status:** Active v1

## Purpose

AI is an accelerator, not an accountable owner. Studio Platform uses AI to improve analysis, design, implementation, testing and documentation while preserving human responsibility for correctness, security, legality and business outcomes.

## Core rules

1. Every AI-assisted output has a named human owner.
2. AI output is treated as an unverified proposal until reviewed and evidenced.
3. Sensitive data is only provided to approved tools and environments.
4. Critical decisions must be reproducible from durable project evidence, not only from chat history.
5. Speed never replaces test evidence, review or rollback readiness.

## Approved use cases

- research and option generation,
- specification and acceptance-criteria drafting,
- implementation scaffolding,
- test-case generation,
- code and document review,
- summarization and knowledge extraction,
- incident and log analysis with sanitized inputs.

## Restricted use cases

Additional human review is mandatory for:

- authentication and authorization,
- financial calculations and payments,
- personal or confidential data,
- migrations and destructive operations,
- legal or contractual claims,
- security controls,
- production changes,
- client-facing factual statements.

## Prohibited practices

- merging code solely because an AI claims tests pass,
- sharing secrets, credentials or production personal data,
- accepting invented citations, metrics or repository state,
- using AI output without understanding material behavior,
- hiding AI involvement when traceability is required,
- allowing an AI agent to bypass required approval gates.

## Required evidence

For material AI-assisted changes record:

- task and intended outcome,
- relevant input constraints,
- files or systems affected,
- human owner and reviewer,
- verification performed,
- unresolved uncertainty,
- final commit or artifact reference.

## Review cadence

This standard is reviewed quarterly and after any meaningful AI-related incident or tool change.