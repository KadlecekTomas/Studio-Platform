# High-Risk Change Gate

## Purpose

Prevent changes with disproportionate security, data, financial or operational impact from entering implementation or production without explicit controls.

## A change is high risk when it can

- delete, corrupt or expose important data,
- change authentication, authorization or identity flows,
- alter billing, payments, invoices or financial calculations,
- modify infrastructure, networking, DNS, certificates or secrets,
- change migrations, backups or restore behavior,
- affect many users without a safe isolation mechanism,
- weaken monitoring, auditability or rollback,
- introduce a critical third-party dependency.

## Mandatory gate inputs

Before approval, document:

- exact change and intended outcome,
- affected systems and data,
- threat and failure scenarios,
- permissions required,
- migration or deployment sequence,
- rollback or containment path,
- monitoring signals,
- test evidence tied to the current commit,
- accountable implementer and approver.

## Required controls

### Separation of duties

The author must not be the only approver for a privileged or destructive production change.

### Reversibility

Prefer:

- feature flags,
- phased rollout,
- backward-compatible migrations,
- additive schema changes,
- tested rollback or forward-fix procedures.

A change without a credible rollback requires an explicit exception and stronger containment.

### Data protection

Before destructive or irreversible data operations:

- identify affected records,
- validate backup or snapshot availability,
- test restore or compensating action,
- define verification queries,
- limit execution scope.

### Production execution

The execution plan includes:

- maintenance window if needed,
- exact commands or automated workflow,
- stop conditions,
- live observer for critical changes,
- communication owner,
- post-change verification.

## Gate decisions

### APPROVED

All controls are adequate and evidence is current.

### APPROVED WITH CONDITIONS

Specific conditions are named, owned and verified before execution.

### BLOCKED

Risk, ownership, evidence, rollback or monitoring is insufficient.

### EMERGENCY EXCEPTION

Only for an active incident where delay creates greater harm. The exception must be reviewed and documented afterward.

## Post-change requirement

Within the agreed verification window, record:

- actual execution time,
- resulting commit or release,
- health signals,
- unexpected behavior,
- rollback status,
- follow-up actions.

## Principle

Urgency can change the sequence of controls, but it cannot remove accountability.