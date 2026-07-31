# Change Request Gate

**Level:** L3 Playbook  
**Owner:** Project Lead  
**Status:** Active v1

## Purpose

Změna požadavku není automaticky drobná jen proto, že je snadno popsatelná. Gate chrání scope, termín, marži i kvalitu systému.

## Trigger

Gate se použije, když požadavek:

- nebyl v potvrzeném scope,
- mění workflow nebo business pravidla,
- zasahuje data, oprávnění, e-maily, PDF, integrace nebo finance,
- vyžaduje nové testy či migraci,
- mění akceptační kritéria,
- vytváří další provozní odpovědnost.

## Assessment

U každé změny odpověz:

1. Jaký problém řeší?
2. Pro koho vytváří hodnotu?
3. Je nutná pro původní výsledek projektu?
4. Jaké části systému ovlivní?
5. Jaké nové riziko přináší?
6. Jaké testy, migrace, dokumentace a provozní kroky vyžaduje?
7. Co se musí odložit, pokud termín zůstává stejný?

## Classification

- **Clarification** — nemění potvrzený rozsah ani náročnost.
- **Contained change** — malá, izolovaná a bezpečně odhadnutelná změna.
- **Scope change** — mění výstupy, workflow, termín nebo cenu.
- **New phase** — samostatná schopnost s vlastním discovery a akceptací.

## Decision

Každá změna musí skončit jedním rozhodnutím:

- přijato bez dopadu,
- přijato s úpravou ceny,
- přijato s úpravou termínu,
- vyměněno za jinou část scope,
- přesunuto do další fáze,
- odmítnuto.

## Required record

- popis změny,
- důvod a očekávaná hodnota,
- klasifikace,
- dopad na cenu, termín, riziko a testy,
- schvalující osoba,
- datum rozhodnutí.

## Anti-patterns

- „je to jen jedno pole“,
- neformální souhlas bez záznamu,
- opakované drobnosti zdarma,
- zachování stejného termínu i scope bez trade-offu,
- implementace před rozhodnutím decision makera.

## Metric

Sleduj podíl neplánované práce, změny marže a počet incidentů způsobených pozdními změnami.
