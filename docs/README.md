# Studio Platform Documentation

This directory is the operating system for Studio Platform. It defines how the studio selects work, makes decisions, designs products, delivers software, verifies claims, manages risk, supports clients and improves its own capability.

The documentation is not a library of optional advice. A document becomes operational when it changes a decision, gate, template, review or required evidence.

## Start here

1. Read [`framework/OPERATING_MANUAL.md`](framework/OPERATING_MANUAL.md) for the overall operating model.
2. Use [`PROJECT_LIFECYCLE_MAP.md`](PROJECT_LIFECYCLE_MAP.md) to identify the required gates and records for a project phase.
3. Use [`ROLE_BASED_START_GUIDE.md`](ROLE_BASED_START_GUIDE.md) to find the minimum reading set for your role.
4. Use [`OS_CATALOG.md`](OS_CATALOG.md) to locate a specific standard or template.
5. Follow [`DOCUMENTATION_GOVERNANCE.md`](DOCUMENTATION_GOVERNANCE.md) whenever documentation is created, changed, superseded or retired.
6. Use [`GLOSSARY.md`](GLOSSARY.md) when a term, severity, role or lifecycle state is unclear.

## Operating hierarchy

When documents overlap, apply them in this order:

1. legal, contractual and regulatory obligations;
2. security, privacy and safety controls;
3. approved decision records and explicit project commitments;
4. Studio Platform gates and standards;
5. project-specific plans and working agreements;
6. templates, examples and informal guidance.

A lower-level document cannot silently weaken a higher-level obligation. Any exception must identify the conflicting rule, owner, rationale, risk, approval and expiry or review trigger.

## Documentation types

- **Framework:** explains the overall system and lifecycle.
- **Standard:** defines mandatory rules and minimum controls.
- **Gate:** defines evidence required before proceeding.
- **Playbook:** defines a repeatable way of working.
- **Template:** provides a structured record; completing a template does not itself prove compliance.
- **Decision record:** preserves a consequential choice, context and trade-offs.
- **Evidence record:** ties a claim to a specific version, environment, method and result.
- **Harvest:** converts project experience into durable capability.

## Core operating rule

> No important decision should depend only on memory, chat history or a person being available.

Important commitments, approvals, exceptions, findings and evidence must be captured in the durable system of record linked from the relevant project or operating review.

## What “done” means for documentation

Documentation is complete only when:

- its purpose and scope are explicit;
- an accountable owner is named or inferable from the governing process;
- mandatory language is distinguishable from guidance;
- inputs, outputs and decision rights are clear;
- related standards and templates are linked;
- review triggers and retirement conditions are defined;
- examples do not contradict the rule;
- the document can be applied by someone other than its author.

## Repository discipline

Documentation changes use the same review discipline as product changes:

- one coherent concern per branch and pull request;
- clear description of what operational behaviour changes;
- no silent weakening of controls;
- links checked before merge;
- superseded documents explicitly marked or removed;
- major changes recorded in an appropriate decision record;
- documentation-only work must not claim application deployment or runtime validation.

## Status

The repository contains the complete initial Studio Platform operating-system documentation baseline. Future work should primarily refine documents from real project evidence, rather than add parallel standards for the same concern.