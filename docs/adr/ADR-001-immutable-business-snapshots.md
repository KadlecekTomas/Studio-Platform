# ADR-001: Immutable business snapshots

- Status: Accepted
- Source project: CK Pragotour
- Decision type: Product and architecture

## Context

Objednávka nebo jiný potvrzený obchodní dokument odkazuje na data, která se mohou později změnit: název, termín, cena, popis, účastníci nebo podmínky. Pouhý odkaz na aktuální katalogový záznam může zpětně změnit význam již potvrzené objednávky.

## Decision

Při potvrzení obchodně významného kroku uložíme immutable snapshot všech údajů potřebných pro pozdější interpretaci, komunikaci, PDF a fakturaci.

Snapshot je zdrojem pravdy pro historický stav. Aktuální katalogová data lze zobrazit odděleně, ale nesmí nepozorovaně přepsat potvrzený obchodní fakt.

## Consequences

### Positive

- historická konzistence,
- důvěryhodné e-maily a PDF,
- bezpečnější fakturace,
- jednodušší audit změn,
- menší riziko sporů.

### Costs

- duplicita vybraných dat,
- nutnost explicitně definovat okamžik snapshotu,
- migrace při změně struktury snapshotu,
- potřeba rozlišit opravu chyby od nové obchodní změny.

## Guardrails

- Snapshot obsahuje pouze údaje potřebné pro obchodní interpretaci.
- Každá změna po potvrzení musí být explicitní a auditovatelná.
- Generované dokumenty používají snapshot, ne živá katalogová data.
- Testy ověřují, že pozdější editace katalogu nezmění starší objednávku.

## Applicability

Použít pro objednávky, nabídky, fakturační podklady, potvrzené rezervace, cenové dohody a další artefakty, jejichž význam musí zůstat stabilní v čase.