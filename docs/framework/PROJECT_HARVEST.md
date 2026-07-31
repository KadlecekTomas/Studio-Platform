# Project Harvest

**Úroveň:** L3 — Playbook  
**Stav:** v1.0  
**Vlastník:** Project Lead

## Purpose

Project Harvest proměňuje dokončený projekt v opakovatelnou hodnotu. Každý významný projekt musí vytvořit nejen software a výsledek pro klienta, ale také nové obchodní, produktové, technické a procesní know-how pro Studio Platform.

## When it happens

Harvest probíhá:

- po významném milníku,
- po produkčním launchi,
- po kritickém incidentu,
- při ukončení projektu,
- nejpozději do 14 dnů od události.

## Participants

Minimálně:

- Project Lead,
- technický vlastník,
- člověk odpovědný za vztah s klientem.

Podle potřeby také design, QA, support nebo klient.

## Inputs

- původní nabídka a scope,
- projektová ekonomika,
- backlog a změnové požadavky,
- ADR,
- incidenty a regresní chyby,
- zpětná vazba klienta,
- metriky použití,
- release poznámky,
- časové a rozpočtové odchylky.

## Harvest agenda

### 1. Business

- Jak klient přišel?
- Co rozhodlo o koupi?
- Které námitky se opakovaly?
- Byl projekt ziskový?
- Které práce nebyly správně naceněny?
- Je vhodný retainer nebo navazující produkt?

### 2. Product

- Jaký problém klient skutečně potřeboval vyřešit?
- Které původní předpoklady byly chybné?
- Které workflow vytvořilo největší hodnotu?
- Co uživatelé nepoužívají nebo nechápou?
- Jaké metriky potvrzují výsledek?

### 3. Engineering

- Které technické rozhodnutí fungovalo nejlépe?
- Které rozhodnutí bychom dnes změnili?
- Kde vznikl technický dluh?
- Co lze standardizovat nebo automatizovat?
- Jaké ADR musí vzniknout?

### 4. Delivery

- Kde jsme ztratili čas?
- Kde vznikl scope creep?
- Co nebylo jasné v odpovědnostech?
- Který gate nebo checklist chyběl?
- Která komunikace fungovala výborně?

### 5. Quality and operations

- Jaké chyby se dostaly nejdále?
- Které kritické workflow nebylo dostatečně ověřeno?
- Byl launch bezpečný a vratný?
- Fungovaly monitoring, zálohy a recovery?
- Co musí změnit Definition of Done?

### 6. Marketing and evidence

- Máme souhlas s referencí nebo case study?
- Jaký měřitelný výsledek lze zveřejnit?
- Jaké screenshoty, ukázky nebo příběhy máme?
- Jaké tvrzení lze nově podložit důkazem?
- Který segment klientů tento projekt osloví?

### 7. Knowledge

Každý Harvest musí vytvořit alespoň dva konkrétní výstupy z následujících kategorií:

- ADR,
- lesson learned,
- aktualizace playbooku,
- nový nebo upravený checklist,
- šablona,
- case study draft,
- položka Evidence Library,
- aktualizace Capability Map.

## Required output

```markdown
# Harvest: [Project / Milestone]

## Context
## Expected outcome
## Actual outcome
## What worked
## What failed
## Decisions to preserve
## Changes to the operating system
## Evidence created
## Follow-up actions
```

Každá follow-up akce musí mít vlastníka a termín nebo být vědomě odmítnuta.

## Quality test

Harvest není dokončen, pokud obsahuje jen obecné formulace typu:

- komunikovat lépe,
- více testovat,
- lépe plánovat.

Každý závěr musí být převeden do konkrétní změny chování, procesu, checklistu nebo rozhodnutí.

## Anti-patterns

- Harvest bez dat a konkrétních příkladů.
- Retrospektiva sloužící k hledání viníka.
- Sepsání poznatků bez změny systému.
- Automatické publikování interních nebo klientských informací.
- Vytvoření case study bez souhlasu klienta.
- Odložení Harvestu tak dlouho, že se ztratí kontext.

## Metrics

- podíl významných projektů s Harvestem do 14 dnů,
- počet přijatých procesních změn,
- počet opakovaně použitých výstupů,
- počet case studies a referencí,
- pokles opakujících se typů chyb,
- hodnota navazující práce vzniklé z projektu.

## AI support

AI může syntetizovat poznámky, seskupit opakující se vzory a navrhnout kandidáty na výstupy. Nesmí však publikovat klientská data, rozhodovat o vině ani nahrazovat společnou reflexi týmu.