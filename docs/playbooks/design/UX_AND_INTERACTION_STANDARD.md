# UX and Interaction Standard

## Purpose

This standard ensures that visually ambitious products remain understandable, efficient and safe in real use.

## Workflow first

Design begins with the user's job, not with screens. For each critical workflow define:

- actor,
- trigger,
- desired outcome,
- required information,
- decisions and branches,
- failure modes,
- recovery path,
- evidence of completion.

## State completeness

Every relevant component and workflow must consider:

- default,
- hover and focus,
- active and selected,
- loading,
- empty,
- partial data,
- validation error,
- system error,
- success,
- disabled or unavailable,
- permission denied,
- destructive confirmation.

Ideal demo data is not sufficient design evidence.

## Interaction rules

- Primary actions are visually and spatially consistent.
- Destructive actions communicate consequence and recovery.
- Forms preserve entered data when recoverable errors occur.
- Validation appears close to the cause and explains resolution.
- Optimistic UI is used only when failure can be handled safely.
- Progressive disclosure reduces complexity without hiding critical facts.
- Repeated expert tasks support keyboard and efficient navigation where valuable.
- Mobile behaviour is designed intentionally rather than produced by shrinking desktop.

## Information architecture

Navigation, labels and grouping must reflect the user's mental model and business workflow. Internal database or implementation terms are not automatically suitable UI language.

## Feedback and status

The system must show what happened, whether it succeeded, what remains and who owns the next action. Long-running work must provide durable status rather than transient animation alone.

## Accessibility

Critical workflows must be operable with keyboard, visible focus, sensible reading order and understandable labels. Motion respects reduced-motion preferences. Colour is never the sole carrier of meaning.

## Friction test

Intentional friction is allowed for:

- destructive or irreversible actions,
- financial commitments,
- permission escalation,
- publication or release,
- sensitive data export.

Routine work should not inherit confirmation steps merely because they feel safe.

## Review evidence

UX approval requires:

- critical workflow walkthroughs,
- responsive review,
- state inventory,
- keyboard and focus check,
- realistic content and edge data,
- documented unresolved risks.

A screen is not approved solely because it matches a static mockup.