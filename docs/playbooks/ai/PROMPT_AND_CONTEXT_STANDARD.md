# Prompt and Context Standard

**Owner:** Engineering Lead  
**Status:** Active v1

## Purpose

High-quality AI work depends on controlled context. This standard defines what must be supplied, what must be excluded and what must remain durable outside a chat session.

## Minimum task context

A material task should state:

- objective and expected user or business outcome,
- repository, branch or artifact scope,
- constraints and explicit non-goals,
- relevant architecture and domain rules,
- acceptance criteria,
- required verification,
- prohibited actions such as merge or deployment,
- expected final evidence.

## Context hierarchy

Use sources in this order:

1. current repository and executable state,
2. approved specifications and decision records,
3. current client or project evidence,
4. reusable Studio Platform playbooks,
5. AI inference, clearly marked as inference.

AI must not override higher-trust evidence with plausible narrative.

## Durable records

Chat history is not the system of record. Material outputs must be transferred into one or more durable artifacts:

- code and tests,
- issue or pull-request description,
- ADR,
- project brief,
- test evidence,
- operating playbook,
- project harvest.

## Data minimization

Provide only the context required for the task. Remove or mask credentials, personal data, private client information and unrelated proprietary content.

## Prompt quality checks

Before execution confirm:

- the requested action is unambiguous,
- current branch and environment are known,
- success and failure conditions are explicit,
- verification belongs to the current output,
- destructive actions require explicit authorization,
- the model is not asked to claim actions it cannot verify.

## Anti-patterns

- vague requests such as “make it production ready” without criteria,
- pasting uncontrolled production data,
- relying on undocumented facts from earlier chats,
- asking AI to choose scope and approve its own work,
- treating generated summaries as evidence of execution.