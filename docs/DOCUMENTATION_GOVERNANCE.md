# Studio Platform Documentation Governance

This standard governs how Studio Platform documentation is created, changed, reviewed, approved, maintained and retired.

## Purpose

The documentation system must remain usable under delivery pressure. It must not become a collection of contradictory, ownerless or obsolete files.

## Ownership

Every material document must have an accountable owner, either stated directly or established by the governing role and process.

The owner is responsible for:

- correctness and operational usefulness;
- review after relevant incidents, legal changes, project harvests or capability changes;
- resolving conflicts with related documents;
- marking superseded content;
- ensuring the document remains actionable by someone other than its author.

Ownership does not mean the owner may weaken cross-functional controls without the required approvers.

## Lifecycle states

Documents use one of these states:

- `DRAFT` — under development and not yet an approved operating rule.
- `ACTIVE` — approved and applicable.
- `UNDER_REVIEW` — still applicable, but reassessment is in progress.
- `SUPERSEDED` — replaced by a named document or decision.
- `RETIRED` — intentionally no longer applicable and retained only when historical context is needed.
- `ARCHIVED` — historical project evidence not intended as current guidance.

A document without an explicit state is treated as `ACTIVE` only when it is on `main`, is not marked as draft or historical and has not been superseded elsewhere.

## Mandatory document structure

A new standard, gate or playbook should make the following clear:

- purpose;
- scope and applicability;
- mandatory rules;
- roles and decision rights;
- required inputs and evidence;
- outputs or records;
- blocking conditions;
- exceptions and approvals;
- review triggers;
- related documents.

Templates should distinguish required fields from optional prompts and should not imply that filling every heading proves the underlying work was performed.

## Language

Use:

- **must** for mandatory controls;
- **must not** for prohibited behaviour;
- **should** for the expected default where justified exceptions may exist;
- **may** for permitted options;
- **example** only for non-binding illustration.

Avoid vague language such as “as needed”, “appropriate”, “soon”, “best practice” or “properly” unless the document defines who decides and by what criteria.

## Change classes

### Editorial change

Formatting, grammar, broken links or clarification that does not alter required behaviour.

Review requirement: one knowledgeable reviewer.

### Operational change

Changes a workflow, required evidence, owner, gate outcome or minimum control.

Review requirement: affected process owner plus at least one adjacent function.

### High-impact change

Weakens or materially alters security, privacy, legal, financial, release, evidence or client-commitment controls.

Review requirement: explicit approval from the relevant accountable owners. The PR must explain the risk and migration impact.

## Pull request requirements

Every documentation PR must state:

- what operational behaviour changes;
- why the current documentation is insufficient;
- which documents are added, changed, superseded or retired;
- who is affected;
- whether any control becomes weaker, stronger or differently owned;
- how links and consistency were checked;
- whether application code, deployment or production state changed.

A PR that only adds prose without defining its operational effect should not be merged as an operating-system change.

## Conflict resolution

When two documents conflict:

1. stop relying on informal interpretation;
2. identify the exact conflicting requirements;
3. apply the hierarchy in `docs/README.md`;
4. involve the accountable owners;
5. record the resolution in the relevant PR or decision record;
6. update or supersede the losing rule so the conflict does not persist.

## Review triggers

A document must be reviewed when:

- an incident exposes a missing or ineffective control;
- repeated project friction shows the process is impractical;
- legal, regulatory or contractual assumptions change;
- a new service, product or operating model falls outside current scope;
- a project harvest produces evidence that contradicts the document;
- ownership or tooling changes materially;
- the document has not been used for an extended period and may no longer reflect reality.

Calendar review alone is not sufficient; event-driven review is mandatory when the operating context changes.

## Superseding and retirement

Do not leave two active standards for the same decision without defining precedence.

A superseded or retired document must state:

- its state;
- replacement, if any;
- effective date or commit;
- reason;
- owner of the transition;
- any records that remain valid under the old version.

Delete obsolete content when historical retention has no value. Retain it only when it supports auditability, contractual evidence or important decision context.

## Quality checks before merge

- links resolve to intended repository paths;
- file names match the catalog;
- terms align with `GLOSSARY.md`;
- roles align with accountability standards;
- severities and gate outcomes are not redefined casually;
- templates match the standards they support;
- examples do not introduce hidden requirements;
- no secret, personal data or confidential client material is included;
- all affected navigation documents are updated.

## Completion rule

Documentation work is complete when the operating system becomes easier to apply, not merely larger.