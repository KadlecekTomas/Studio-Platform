# Studio Platform Design Principles

## Purpose

Studio Platform products must feel intentional, distinctive and trustworthy. Functional correctness is necessary, but it is not sufficient. Design is part of the product's credibility, usability and commercial value.

## Core position

We do not decorate generic software. We create clear operational products with character.

Every interface must achieve four outcomes:

1. users understand what matters,
2. important actions feel obvious,
3. the product feels coherent and deliberate,
4. the visual result is recognisable rather than template-like.

## Principles

### 1. Character before decoration

A product needs a clear visual idea, not a pile of effects. Before choosing colours, gradients or illustrations, define the intended character in three to five concrete attributes.

Examples:

- precise, calm, authoritative,
- energetic, optimistic, educational,
- warm, local, trustworthy.

Avoid empty labels such as modern, clean or premium unless they are translated into specific design decisions.

### 2. Hierarchy is the interface

Users should recognise the primary task, current state and next action within seconds. Hierarchy is created through scale, spacing, contrast, grouping and sequence—not through adding more boxes.

### 3. Fewer surfaces, stronger composition

Do not solve every grouping problem with a card. Prefer clear page composition, sections, typography, dividers and whitespace. Cards are reserved for genuinely independent or actionable units.

### 4. Operational clarity over visual novelty

Distinctive design must never obscure state, ownership, errors, pricing, deadlines or destructive consequences. Critical workflow information is explicit.

### 5. One memorable move

Each important product or public page should contain one controlled visual signature: a composition, interaction, typographic gesture, illustration system or spatial pattern that makes it recognisable. It must support the product story and remain maintainable.

### 6. Density follows the job

Administrative and operational screens may be dense, but never chaotic. Marketing and explanation screens may be spacious, but never empty. Density is chosen according to task frequency, decision complexity and user expertise.

### 7. Design systems enable quality; they do not replace judgement

Tokens and components prevent inconsistency. They do not justify generic output. Every screen still requires composition, hierarchy and content judgement.

### 8. Accessibility is a quality constraint

Contrast, focus states, keyboard access, readable typography, reduced motion and understandable error communication are part of the design—not post-production fixes.

### 9. Content is visual material

Vague headings, long labels and filler copy damage the interface. Design review includes wording, information architecture and empty-state communication.

### 10. Polish is deliberate work

The final quality pass is planned. Alignment, rhythm, responsive behaviour, loading, empty, error, success and edge states must be reviewed before release.

## Anti-patterns

Studio Platform does not ship:

- generic dashboard templates with a new colour,
- excessive rounded cards and shadows,
- gradients without a visual concept,
- tiny grey text used to simulate sophistication,
- decorative motion that delays work,
- inconsistent icon styles,
- hero sections that say little and occupy the whole viewport,
- interfaces that look polished only with ideal demo data,
- desktop-only compositions compressed onto mobile,
- inaccessible contrast justified by brand aesthetics.

## Decision test

A design decision is valid when it improves at least one of these dimensions without materially harming the others:

- comprehension,
- task completion,
- trust,
- recognisability,
- accessibility,
- maintainability.

## Ownership

Every significant product must have a named design owner. AI may generate options, but it cannot establish final taste, approve its own output or replace user and visual review.