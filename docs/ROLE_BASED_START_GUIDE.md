# Studio Platform Role-Based Start Guide

This guide gives each role the smallest useful path into the operating system. It is not a substitute for reading the standards that govern a specific decision.

## Everyone

Read first:

1. `docs/README.md`
2. `docs/framework/OPERATING_MANUAL.md`
3. `docs/PROJECT_LIFECYCLE_MAP.md`
4. `docs/playbooks/people-capability/ROLE_AND_ACCOUNTABILITY_STANDARD.md`
5. `docs/playbooks/knowledge-evidence/KNOWLEDGE_LIFECYCLE_STANDARD.md`

Know these universal rules:

- important work has an accountable owner;
- important claims require evidence;
- material commitments do not live only in chat;
- AI output requires human ownership and verification;
- scope, support and defects are not interchangeable;
- serious unresolved risk can block progression even when schedule pressure exists.

## Founder or studio lead

Primary responsibility: strategy, capability, major commitments, priority and risk acceptance.

Minimum reading:

- strategy documents
- Leadership OS
- Sales OS
- Finance and Commercial OS
- People and Capability OS
- Legal and Compliance OS
- `framework/CAPABILITY_MAP.md`
- `framework/MATURITY_MODEL.md`

Key recurring records:

- operating review;
- decision record;
- project financial control;
- capability review;
- obligation register where applicable.

## Sales or account owner

Primary responsibility: qualified opportunities and commitments the studio can actually deliver.

Minimum reading:

- positioning and ideal client profile;
- Sales OS;
- Discovery Gate;
- Pricing Guardrails;
- Contract and Obligation Standard;
- Commercial Change Control Standard;
- Client Communication Standard.

Never:

- promise dates, features, support levels or ownership terms outside approved authority;
- present estimates as measured results;
- hide delivery uncertainty to make a proposal appear stronger;
- accept client urgency as proof of priority or feasibility.

## Delivery or project lead

Primary responsibility: translating commitments into controlled execution and acceptance.

Minimum reading:

- Project Lifecycle Map;
- Client Delivery OS;
- Leadership priority and capacity standard;
- Change Request Gate;
- Engineering and Design gates;
- Release Readiness Gate;
- Knowledge Harvest Gate.

Core records:

- kickoff record;
- decision records;
- scope and commercial change records;
- acceptance and handover record;
- project harvest.

## Product designer

Primary responsibility: useful, coherent and recognisable product behaviour.

Minimum reading:

- Design OS;
- Discovery Gate and brief;
- Client Communication Standard;
- Data Privacy and Retention Standard;
- Design-related Definition of Done criteria.

Required evidence should cover:

- critical journeys;
- responsive behaviour;
- accessibility;
- loading, empty, error, permission and partial-data states;
- current visual direction;
- unresolved design findings.

## Engineer

Primary responsibility: implementing approved behaviour safely and maintainably.

Minimum reading:

- Engineering OS;
- Security and Reliability OS;
- AI OS when AI is used;
- Data Privacy and Retention Standard;
- IP, Licence and Third-Party Standard;
- Release Readiness Gate.

Before implementation:

- confirm the requirement and acceptance model;
- identify data and permission impact;
- identify destructive or privileged actions;
- establish the current branch, commit and environment;
- surface scope conflicts rather than silently resolving them in code.

## Reviewer or verifier

Primary responsibility: independent assessment of claims, risk and evidence.

Minimum reading:

- Code Review Standard;
- Test Evidence Standard;
- Evidence and Claim Standard;
- Design Review Gate where UI is affected;
- High-Risk Change Gate where applicable;
- Release Readiness Gate.

A reviewer verifies the actual diff and evidence. Approval is not a reward for effort and must not be inferred from old tests or a successful build alone.

## Security, privacy or legal reviewer

Primary responsibility: independent review of risk that delivery roles may not be authorised to accept.

Minimum reading:

- Security and Reliability OS;
- Legal and Compliance OS;
- Knowledge and Evidence OS;
- project contract, obligation register and data-flow context;
- relevant high-risk change records.

Review outcomes must identify:

- facts and assumptions;
- applicable obligations;
- residual risk;
- required controls;
- owner and expiry for any exception.

## Finance or commercial owner

Primary responsibility: project economics, invoicing, collection and commercially material change.

Minimum reading:

- Finance and Commercial OS;
- Pricing Guardrails;
- Proposal Gate;
- Contract and Obligation Standard;
- Acceptance and Handover Standard.

Do not allow delivery progress to obscure:

- unapproved scope;
- deteriorating margin;
- overdue client dependencies;
- missing acceptance evidence;
- invoice conditions that have not been met.

## Support or service owner

Primary responsibility: stable service after launch and clear boundaries around ongoing work.

Minimum reading:

- Support and Service Operations OS;
- Incident Response Standard;
- Acceptance and Handover Standard;
- Access and Secret Standard;
- Commercial Change Control Standard;
- Knowledge Lifecycle Standard.

Support must remain traceable, impact-based and commercially classified. Informal requests must be converted into durable cases before work disappears into private messages.

## New contributor onboarding path

A new contributor should be able to answer these questions before receiving broad responsibility:

- What outcome do I own?
- What am I allowed to decide?
- Which gate controls my next major step?
- Where are commitments, decisions and evidence stored?
- Which risks require escalation?
- What does complete work look like?
- What must be handed over if I become unavailable?

Their role profile and onboarding record should link directly to the relevant documents rather than copying and gradually diverging from them.