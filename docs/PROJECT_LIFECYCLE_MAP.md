# Studio Platform Project Lifecycle Map

This map translates the Studio Platform operating system into a single project flow. It shows which decisions, gates and records are expected as work moves from opportunity to long-term service.

The lifecycle is risk-based. Small, low-risk work may use shorter records, but it may not silently skip a control that is relevant to the risk.

## Stage 0 — Opportunity

**Goal:** decide whether the opportunity deserves discovery effort.

Required outcomes:

- client and problem are understood at qualification level;
- fit with positioning and capability is assessed;
- obvious legal, data, security and commercial risks are surfaced;
- next step, owner and pipeline state are explicit.

Primary documents:

- Sales lead qualification gate and template
- Pipeline stage definitions
- Pricing guardrails
- Capability Map

Exit decision: `QUALIFY`, `NURTURE`, `REFER` or `DECLINE`.

## Stage 1 — Discovery

**Goal:** understand the real operational problem before committing to a solution.

Required outcomes:

- current workflow and pain are documented;
- users, roles, permissions and decision rights are identified;
- data, integrations and migration constraints are known;
- success measures and evidence method are defined;
- in-scope, out-of-scope and assumptions are explicit;
- material uncertainty has an owner and resolution plan.

Primary documents:

- Discovery Gate
- Discovery Brief Template
- Contract and Obligation Standard
- Data Privacy and Retention Standard
- Decision Standard

Exit decision: `VALIDATE`, `PROPOSE`, `MORE_DISCOVERY` or `STOP`.

## Stage 2 — Proposal and commitment

**Goal:** create a commercially and operationally credible commitment.

Required outcomes:

- scope matches discovery evidence;
- acceptance model is explicit;
- price, payment, margin and contingency are reviewed;
- client dependencies and change mechanism are defined;
- IP, licence, privacy, support and handover assumptions are visible;
- no material commitment exists only in chat or meeting memory.

Primary documents:

- Proposal Gate and Proposal Review Template
- Pricing Guardrails
- Commercial Change Control Standard
- Project Financial Control Standard
- Legal Review Record when triggered
- Obligation Register when required

Exit decision: `SEND`, `REVISE`, `ESCALATE` or `DECLINE`.

## Stage 3 — Kickoff and activation

**Goal:** make the project executable before implementation begins.

Required outcomes:

- accountable owners and decision rights are named;
- communication and escalation paths are agreed;
- environments, access and data handling are safe;
- milestones, dependencies and review cadence are set;
- risks, obligations and financial baseline are active;
- project records have a durable home.

Primary documents:

- Project Kickoff Gate and Template
- Role and Accountability Standard
- Access and Secret Standard
- Project Financial Control Template
- Client Communication Standard

Exit decision: `START`, `START_WITH_ACTIONS` or `BLOCKED`.

## Stage 4 — Design

**Goal:** define a product that is useful, coherent, recognisable and implementable.

Required outcomes:

- user journeys and critical states are designed;
- visual direction and product character are explicit;
- responsive and accessibility behaviour is considered;
- edge states, permissions, errors and partial data are covered;
- feasibility and scope alignment are reviewed;
- design evidence is linked to the current version.

Primary documents:

- Design Principles
- Visual Direction Standard and Brief
- UX and Interaction Standard
- Design Review Gate and Record
- Change Request Gate for emerging scope

Exit decision: `ACCEPT`, `ACCEPT_WITH_ACTIONS`, `REVISE` or `STOP`.

## Stage 5 — Implementation

**Goal:** build the approved behaviour without losing operational intent.

Required outcomes:

- implementation readiness is confirmed;
- change scope and risk are clear;
- code review covers behaviour, safety, maintainability and evidence;
- AI-assisted work has human ownership and review;
- changes in assumptions or scope are routed through the right gate;
- no privileged or destructive action proceeds without controls.

Primary documents:

- Implementation Readiness Gate
- Engineering Change Brief
- Code Review Standard
- AI Usage Standard and AI Review Gate
- High-Risk Change Gate
- Commercial Change Control Standard

Exit decision: `READY_FOR_VERIFICATION`, `REWORK` or `BLOCKED`.

## Stage 6 — Verification

**Goal:** prove the intended product works for the current commit and environment.

Required outcomes:

- critical workflows are tested with representative data;
- evidence identifies commit, environment, method and result;
- accessibility, design and operational states are reviewed;
- security, privacy, migration and recovery risks are covered as applicable;
- known findings are classified and owned;
- old evidence is not reused as proof for changed behaviour.

Primary documents:

- Test Evidence Standard and Record
- Design Review Gate and Record
- Evidence and Claim Standard
- High-Risk Change Gate
- Release Readiness Gate

Exit decision: `RELEASE_CANDIDATE`, `CONDITIONAL` or `REJECT`.

## Stage 7 — Launch

**Goal:** release with controlled risk and operational ownership.

Required outcomes:

- release scope and exact version are known;
- rollback or recovery strategy is executable;
- monitoring, ownership and escalation are active;
- data migration and irreversible actions are controlled;
- client communication and acceptance path are ready;
- unresolved severe findings block launch unless an authorised exception exists.

Primary documents:

- Release Readiness Gate
- High-Risk Change Record
- Incident Response Standard
- Acceptance and Handover Standard
- Service Level and Communication Standard

Exit decision: `GO`, `GO_WITH_CONTROLS` or `NO-GO`.

## Stage 8 — Acceptance and handover

**Goal:** transfer a usable, supportable and contractually complete outcome.

Required outcomes:

- acceptance evidence matches the agreed criteria;
- client ownership, access and documentation are transferred;
- remaining findings and limitations are explicit;
- support, warranty and new-scope boundaries are clear;
- financial, legal, data and IP obligations are reconciled;
- operational knowledge does not depend on the delivery team remaining available.

Primary documents:

- Acceptance and Handover Standard and Template
- Invoicing and Collection Standard
- Obligation Register
- Maintenance and Service Ownership Standard
- Knowledge Lifecycle Standard

Exit decision: `ACCEPTED`, `CONDITIONAL_ACCEPTANCE` or `NOT_ACCEPTED`.

## Stage 9 — Support and improvement

**Goal:** operate the product responsibly and learn from real use.

Required outcomes:

- support enters a durable queue;
- priority reflects impact, urgency and reach;
- service communication follows actual commitments;
- defects, support and new scope remain commercially distinct;
- dependencies, backups, certificates and access are maintained;
- service performance and recurring failure patterns are reviewed.

Primary documents:

- Support Intake and Triage Standard
- Support Case Template
- Service Level and Communication Standard
- Maintenance and Service Ownership Standard
- Service Operations Review Template

Exit decision for each case: `RESOLVED`, `CHANGE_REQUEST`, `KNOWN_LIMITATION`, `DUPLICATE` or `CLOSED_WITH_REASON`.

## Stage 10 — Project harvest

**Goal:** convert project experience into stronger Studio Platform capability.

Required outcomes:

- outcomes and claims are separated from estimates and anecdotes;
- important decisions and failure modes are preserved;
- reusable assets are identified and assigned;
- playbooks, templates, tests or positioning are improved where evidence supports it;
- sensitive client material is handled appropriately;
- the harvest is not considered complete until at least one durable asset or decision changes.

Primary documents:

- Project Knowledge Harvest Gate
- Project Harvest Template
- Knowledge Record Template
- Evidence Record Template
- Capability Review Template

Exit decision: `HARVESTED`, `PARTIAL_WITH_ACTIONS` or `NOT_READY`.

## Exception rule

Skipping a lifecycle stage requires an explicit record of:

- why the stage does not apply;
- who accepted the resulting risk;
- which controls remain mandatory;
- when the exception expires or must be reviewed.

Convenience, schedule pressure or client urgency alone are not sufficient reasons to remove a relevant control.