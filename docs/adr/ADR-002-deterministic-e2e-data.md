# ADR-002: Deterministic E2E test data

- Status: Accepted
- Source project: CK Pragotour
- Decision type: Engineering quality

## Context

End-to-end scénáře selhávaly nebo dávaly zavádějící výsledky, pokud předpokládaly konkrétní obsah sdílené E2E databáze. Pořadí záznamů, existující data nebo změny z jiných testů nesmí ovlivnit výsledek scénáře.

## Decision

Každý kritický E2E scénář musí vytvořit, označit nebo jednoznačně dohledat vlastní testovací data. Test nesmí záviset na pořadí, názvu ani počtu předem existujících sdílených záznamů.

Sdílený E2E stack se během jednotlivého scénáře neshazuje. Cleanup smí odstranit pouze data, která scénář vlastní a dokáže bezpečně identifikovat.

## Required properties

- unikátní test run identifier,
- explicitní setup preconditions,
- idempotentní nebo bezpečně opakovatelný setup,
- selektory založené na vlastních datech,
- žádný předpoklad prázdné databáze,
- izolovaný cleanup,
- opakování celé regresní matice po změně setupu.

## Consequences

### Positive

- méně flaky testů,
- důvěryhodnější CI,
- snazší reprodukce selhání,
- bezpečné paralelní běhy,
- jasnější rozlišení produktové a testovací chyby.

### Costs

- delší a přesnější setup,
- potřeba factory nebo API helperů,
- správa cleanup strategie,
- možné zpomalení testů bez vhodné architektury.

## Guardrail

Produktový kód se nemění jen proto, aby vyhověl křehkému testu, pokud bylo empiricky potvrzeno, že produktové chování je správné. Nejprve se opravuje izolace a determinismus testu.