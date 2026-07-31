# CK Pragotour — Engineering and Delivery

## Engineering context

Systém propojuje veřejný web, administraci, poptávky, objednávky, finance, platby, e-maily, PDF a importy. Chyba v jednom kroku může změnit data, komunikaci nebo finanční výsledek v dalších částech workflow.

## Lessons learned

### 1. Critical workflow testing must be end-to-end

Jednotkové testy nestačí pro scénáře, kde se data vytvářejí v administraci, zobrazují veřejně, mění přes token a následně generují e-mail nebo PDF. Kritické cesty musí být ověřené přes reálný browser a backend.

### 2. Shared E2E data is a source of nondeterminism

Playwright scénáře nesmí předpokládat konkrétní pořadí nebo existenci záznamů ve sdílené databázi. Setup musí vytvořit nebo jednoznačně identifikovat vlastní data a cleanup nesmí shazovat sdílený stack.

### 3. Persisted business facts need snapshots

Objednávka nesmí zpětně změnit význam jen proto, že se později upravil katalog, cena nebo obsah. Potvrzené obchodní údaje musí být uložené jako snapshot a změny musí být explicitní.

### 4. Money workflows require concurrency control

Platby účastníků, párování transakcí a změny finančních stavů musí používat databázové constrainty, transakce a zámky tam, kde hrozí dvojí zápis nebo závod.

### 5. Preview and production must have explicit boundaries

Draft obsah nesmí být veřejně dostupný. Náhledy musí používat ověřený preview mechanismus, nikoli obcházení publikačních pravidel.

### 6. Deployment safety is part of delivery

Hotový kód bez ověřeného deploymentu, rollbacku a provozní kontroly není hotová dodávka. Deployment lock musí být diagnostikovatelný a nesmí vést k neověřenému ručnímu obcházení.

## Delivery lessons

- Každá větší změna musí mít vlastní scope a acceptance criteria.
- Po změně autosave, validace nebo setupu se musí zopakovat celý relevantní scénář, ne pouze poslední selhávající krok.
- Produktový kód se nemění jen proto, aby prošel křehký test; nejprve se ověřuje testovací setup.
- Backend diff a citlivé oblasti je vhodné kontrolovat samostatně před merge.
- Stav „funguje u mě“ není evidence pro produkční připravenost.

## Reusable quality gates

Před merge provozně důležité změny ověřit:

1. přesný scope diffu,
2. databázové invariants,
3. oprávnění a role,
4. happy path,
5. chybové a opakované akce,
6. e-mailové a dokumentové výstupy,
7. regresní scénáře,
8. deployment readiness,
9. rollback možnost,
10. auditní stopu významných změn.

## Resulting rule

Studio Platform testuje podle rizika a celého workflow. Neoptimalizuje pouze na zelené CI, ale na důvěryhodný provozní výsledek.