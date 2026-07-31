# AI Review Gate

**Owner:** Engineering Lead / Artifact Owner  
**Status:** Active v1

## Purpose

The gate determines whether an AI-assisted artifact is safe and sufficiently verified to enter review, delivery or production.

## Gate questions

### Ownership

- Is a human owner named?
- Can the owner explain the material behavior and trade-offs?

### Inputs

- Were secrets and sensitive data excluded or handled in an approved environment?
- Are assumptions and missing context explicit?

### Correctness

- Was the output checked against source material, repository state or executable evidence?
- Were factual claims and calculations independently verified?

### Risk

- Does the change affect security, permissions, money, data integrity, contracts or production?
- Has review depth been increased according to risk?

### Evidence

- Are tests or other verification tied to the current commit and environment?
- Are known limitations and unresolved issues recorded?

### Delivery

- Is rollback or safe rejection possible?
- Has the final artifact been reviewed as a whole rather than as isolated generated fragments?

## Outcomes

### PASS

Evidence is sufficient and the responsible human accepts ownership.

### PASS WITH CONDITIONS

The artifact may proceed only with explicit limitations, monitoring or follow-up tasks.

### REWORK

Material uncertainty or missing evidence requires another implementation or verification cycle.

### REJECT

The output is unsafe, unverifiable, outside approved use or not understood by its owner.

## Mandatory escalation

Human specialist review is mandatory for high-risk security, legal, financial, privacy and destructive changes.