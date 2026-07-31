# Acceptance and Handover Standard

**Level:** L3 Playbook  
**Owner:** Delivery Lead / Technical Owner  
**Status:** Active v1

## Purpose

Projekt není dokončený okamžikem nasazení. Dokončení vyžaduje ověřenou akceptaci, provozní vlastnictví, dokumentaci a jasné oddělení záručních vad od nového scope.

## Acceptance readiness

Před akceptací musí existovat:

- aktuální seznam dohodnutých výstupů,
- akceptační kritéria navázaná na konkrétní verzi,
- test evidence pro daný commit a prostředí,
- seznam známých omezení a přijatých výjimek,
- stav migrace a kontrol dat,
- potvrzený rollback nebo recovery postup,
- návod pro klíčové uživatelské workflow.

## Acceptance process

1. Studio Platform předá release candidate a evidence.
2. Klient testuje podle dohodnutých kritérií, nikoli podle nových očekávání.
3. Připomínka je klasifikována jako:
   - defect,
   - chybějící dohodnutý výstup,
   - usability improvement,
   - change request,
   - training nebo documentation need.
4. Každá položka má ownera, závažnost a rozhodnutí.
5. Akceptace je písemně potvrzena nebo odmítnuta s konkrétní evidencí.

## Handover package

Předání obsahuje podle charakteru projektu:

- produkční a provozní architekturu,
- seznam účtů, rolí a odpovědností,
- deployment a rollback postup,
- backup a restore postup,
- monitoring a alerting ownership,
- provozní runbook,
- známá omezení,
- open risks a technical debt,
- uživatelskou dokumentaci,
- podporu, SLA a eskalační kontakty,
- datum začátku a konce záručního období.

## Warranty boundary

Za záruční vadu se považuje odchylka od schváleného scope nebo akceptačních kritérií. Za nový scope se považuje zejména:

- nové workflow,
- nová role nebo oprávnění,
- nová integrace,
- změna potvrzeného obchodního pravidla,
- rozšíření provozních nebo reportingových potřeb,
- změna vyvolaná novými externími podmínkami.

Sporné položky procházejí Change Request Gate.

## Closure gate

Projekt lze uzavřít pouze pokud:

- akceptace je potvrzená,
- kritické vady jsou uzavřené nebo explicitně přijaté,
- provozní owner převzal odpovědnost,
- přístupy a tajemství mají správné vlastníky,
- fakturační milník je doložitelný,
- další práce je přesunuta do supportu nebo nového scope,
- je naplánován Project Harvest.

## Anti-patterns

- nasazení označené za akceptaci,
- neurčitá věta „vypadá to dobře“ jako jediný důkaz,
- nekonečný seznam připomínek bez klasifikace,
- předání bez rollbacku a provozního vlastníka,
- záruční podpora používaná pro bezplatný rozvoj,
- uzavření projektu bez lessons learned.