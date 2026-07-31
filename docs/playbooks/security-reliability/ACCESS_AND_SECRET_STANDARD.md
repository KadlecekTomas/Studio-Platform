# Access and Secret Standard

## Purpose

Define how Studio Platform grants, uses, reviews and removes access to source code, infrastructure, data, third-party services and production systems.

Access is a business capability with operational risk. It is never an informal convenience.

## Core principles

- least privilege by default,
- named human or service identity,
- no shared personal credentials,
- no secrets in source code, tickets, chat or screenshots,
- production access is exceptional and auditable,
- access ends when the need ends,
- emergency access creates mandatory follow-up evidence.

## Access classes

### Standard

Access needed for routine work with limited impact.

Examples:

- read access to documentation,
- development repositories,
- non-sensitive test environments.

### Elevated

Access capable of changing shared systems or viewing sensitive information.

Examples:

- CI/CD configuration,
- cloud consoles,
- shared databases,
- billing systems.

### Privileged

Access capable of changing production, security controls, identity configuration or critical data.

Privileged access requires:

- explicit owner approval,
- documented purpose,
- time limitation where supported,
- multi-factor authentication,
- activity evidence,
- periodic review.

## Secret handling

Secrets include passwords, API keys, tokens, private keys, signing material and recovery codes.

Secrets must:

- live in an approved secret manager or protected platform setting,
- be scoped to the minimum required permissions,
- be separate across environments,
- have an identified owner,
- be rotated after suspected exposure,
- be revoked when no longer needed.

Never place secrets in:

- repository files,
- Git history,
- issue or PR text,
- AI prompts,
- email or chat,
- screenshots or recordings.

## Access lifecycle

Every elevated or privileged access grant records:

- identity,
- system,
- role or permission,
- purpose,
- approver,
- start date,
- expected review or expiry date.

Removal is mandatory after:

- role change,
- project completion,
- contract termination,
- loss of device or credential,
- security concern.

## Review cadence

Privileged access is reviewed at least quarterly and after each material incident.

The review confirms:

- the identity still exists,
- the business need remains valid,
- permissions are still minimal,
- unused accounts and tokens are removed,
- MFA and recovery methods remain controlled.

## Emergency access

Emergency access may bypass the normal lead time, but not accountability.

Within one business day, record:

- why emergency access was required,
- who approved or retrospectively reviewed it,
- actions performed,
- evidence retained,
- credentials rotated or access removed.

## Exit criteria

Access management is healthy when every elevated capability has a current owner, explicit purpose and revocation path.