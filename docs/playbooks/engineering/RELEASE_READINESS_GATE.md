# Release Readiness Gate

**Level:** L3 Playbook  
**Owner:** Engineering Lead  
**Status:** Active v1

## Purpose

Release není hotový ve chvíli, kdy kód funguje lokálně. Je hotový až tehdy, když lze změnu bezpečně nasadit, ověřit, provozovat a v případě potřeby vrátit zpět.

## Functional readiness

- [ ] Akceptační kritéria jsou splněna.
- [ ] Kritická workflow byla ověřena end-to-end.
- [ ] Výjimky a chybové stavy mají definované chování.
- [ ] Role a oprávnění byly ověřeny.

## Data readiness

- [ ] Migrace je zkontrolovaná a opakovatelná.
- [ ] Existuje plán pro chybu nebo částečné provedení migrace.
- [ ] Potvrzené obchodní skutečnosti zůstávají konzistentní.
- [ ] Záloha a obnova odpovídají riziku změny.

## Test readiness

- [ ] Automatizované testy prošly na aktuálním HEAD.
- [ ] Kritické E2E scénáře vlastní deterministická data.
- [ ] Výsledek starého běhu není používán jako důkaz pro nový commit.
- [ ] Flaky test není bez analýzy pouze znovu spuštěn.

## Operational readiness

- [ ] Deployment postup je známý.
- [ ] Rollback je konkrétní a proveditelný.
- [ ] Monitoring nebo provozní kontrola zachytí hlavní selhání.
- [ ] Je určeno, kdo po release reaguje na problém.
- [ ] Klient ví o dopadu, odstávce nebo změně workflow.

## Evidence

Release record musí obsahovat:

- commit nebo tag,
- seznam změn,
- výsledky relevantních kontrol,
- migrace,
- deployment čas,
- rollback postup,
- známá omezení,
- odpovědnou osobu.

## Decision

- **READY** — všechny povinné kontroly odpovídající riziku jsou splněny.
- **READY WITH ACCEPTED RISK** — výjimka je explicitně zdokumentovaná a schválená.
- **NOT READY** — chybí důkaz, rollback, vlastník nebo kritická kontrola.

## Anti-patterns

- release podle pocitu,
- důkaz z předchozího commitu,
- ruční oprava produkčních dat bez záznamu,
- migrace bez návratového nebo recovery postupu,
- nasazení kritické změny bez ověření hlavního workflow,
- považování zeleného CI za jediný důkaz kvality.

## Metrics

- change failure rate,
- počet rollbacků,
- čas detekce a obnovy,
- incidenty uniklé přes release gate,
- podíl releasů s kompletním evidence recordem.
