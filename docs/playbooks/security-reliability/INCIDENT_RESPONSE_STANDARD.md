# Incident Response Standard

## Purpose

Provide a repeatable response to security, availability, data integrity and operational incidents.

The first goal is to reduce harm. The second is to restore trustworthy service. The third is to convert the event into durable prevention.

## Incident classes

### SEV-1 Critical

Material production outage, confirmed sensitive-data exposure, uncontrolled financial impact, or active compromise.

### SEV-2 Major

Severe degradation, limited data integrity risk, major workflow failure, or security weakness with credible exploitation risk.

### SEV-3 Moderate

Contained malfunction, minor degradation, or issue with workaround and limited impact.

### SEV-4 Minor

Low-impact defect or operational concern handled through normal delivery.

## Required roles

For SEV-1 and SEV-2 assign:

- incident commander,
- technical lead,
- communication owner,
- scribe or evidence owner.

One person may hold multiple roles in a small team, but responsibilities must remain explicit.

## Response sequence

### 1. Detect and declare

Record:

- detection time,
- declaring person,
- initial severity,
- affected service and users,
- current evidence.

### 2. Contain

Prefer actions that limit harm without destroying evidence:

- disable affected functionality,
- revoke credentials,
- isolate systems,
- stop deployments,
- rate-limit or block traffic,
- switch to a safe operational mode.

### 3. Investigate

Build a timestamped timeline. Separate confirmed facts from hypotheses. Preserve logs, commands, configuration state and relevant identifiers.

### 4. Recover

Recovery requires:

- identified recovery action,
- current test or verification evidence,
- decision owner,
- rollback or alternative path,
- heightened monitoring.

### 5. Validate

Do not close based only on apparent recovery. Confirm:

- primary user workflow,
- data integrity,
- security state,
- background processing,
- monitoring and alerting,
- no continuing unauthorized access.

### 6. Communicate

Updates include:

- current impact,
- confirmed actions,
- known unknowns,
- next update point,
- required stakeholder action.

Avoid unsupported root-cause claims during active response.

## Post-incident review

SEV-1 and SEV-2 require a written review covering:

- impact and duration,
- timeline,
- root and contributing causes,
- detection quality,
- response strengths and gaps,
- corrective actions with owners and dates,
- process, test, monitoring or architecture changes.

The review is blameless but accountable. Human error is not a sufficient root cause.

## Closure criteria

An incident closes only when:

- service is stable,
- security and data state are understood,
- stakeholder communication is complete,
- temporary mitigations are tracked,
- follow-up actions have owners,
- retained evidence is linked.