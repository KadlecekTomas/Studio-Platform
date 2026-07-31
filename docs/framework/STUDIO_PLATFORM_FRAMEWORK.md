# Studio Platform Framework

**Úroveň:** L1 — Principle  
**Stav:** v1.0  
**Vlastník:** Founder / Delivery Lead

## 1. Purpose

Tento dokument definuje jednotný způsob, jakým Studio Platform převádí nejasný provozní problém do bezpečně nasazeného a dlouhodobě udržitelného systému.

Framework není marketingová dekorace. Je to rozhodovací a delivery model používaný v nabídce, discovery, projektovém řízení, vývoji, akceptaci i následném rozvoji.

## 2. Core model

Každý projekt prochází sedmi fázemi:

1. **Understand** — pochopit realitu klienta.
2. **Validate** — ověřit, že řešíme správný problém správným rozsahem.
3. **Design** — navrhnout workflow, systém a způsob dodání.
4. **Build** — implementovat v malých ověřitelných krocích.
5. **Verify** — prokázat funkčnost kritických workflow.
6. **Launch** — bezpečně převést systém do provozu.
7. **Improve** — měřit, učit se a rozvíjet.

Žádná fáze není automaticky formální. Hloubka se přizpůsobuje riziku projektu, nikoli velikosti ega dodavatele.

---

## 3. Understand

### Cíl

Pochopit, jak organizace skutečně funguje, ne pouze jak svůj proces popisuje.

### Povinné otázky

- Jaký provozní problém dnes vzniká?
- Kdo je jím zasažen?
- Jak se problém řeší nyní?
- Kde vznikají chyby, čekání, duplicity nebo ruční přepisování?
- Co se stane, když se nic nezmění?
- Jak poznáme zlepšení?

### Výstupy

- mapa stakeholderů,
- stručná mapa současného workflow,
- seznam problémů a jejich dopadu,
- cílové metriky,
- známé závislosti a omezení.

### Gate U1

Do další fáze nelze přejít, pokud neumíme jednou větou popsat:

> Kdo má jaký problém, v jaké situaci a s jakým dopadem.

---

## 4. Validate

### Cíl

Ověřit, že navrhované řešení má smysl produktově, provozně i ekonomicky.

### Povinné činnosti

- oddělit potřeby od přání,
- určit nejmenší hodnotný rozsah,
- identifikovat nejrizikovější předpoklady,
- ověřit rozhodovací pravomoc a rozpočet,
- stanovit hlavní trade-offy,
- pojmenovat, co se vědomě nedělá.

### Výstupy

- definice problému,
- cílový rozsah,
- seznam mimo scope,
- rizikový registr,
- předběžná ekonomika,
- rozhodnutí: pokračovat / upravit / zastavit.

### Gate V1

Projekt pokračuje pouze tehdy, pokud:

- existuje reálný vlastník problému,
- očekávaná hodnota ospravedlňuje investici,
- největší rizika jsou známá,
- klient přijímá kompromisy rozsahu.

---

## 5. Design

### Cíl

Převést ověřený problém do srozumitelného návrhu systému a delivery plánu.

### Oblasti návrhu

- uživatelské workflow,
- informační architektura,
- datový model,
- oprávnění a role,
- integrace,
- technická architektura,
- bezpečnost,
- migrace dat,
- monitoring a provoz,
- rollout a rollback.

### Výstupy

- cílové workflow,
- prototyp nebo přesná funkční specifikace,
- architektonická rozhodnutí,
- akceptační kritéria,
- projektový plán,
- release strategie.

### Gate D1

Vývoj nezačíná, dokud:

- jsou jasná kritická workflow,
- existuje Definition of Done,
- jsou vyřešeny zásadní nejistoty,
- jsou známé odpovědnosti klienta i Studio Platform.

---

## 6. Build

### Cíl

Dodávat ověřitelné části systému bez vytváření skrytého technického nebo provozního dluhu.

### Principy

- malé změny před velkými skoky,
- vertikální řezy před izolovanými vrstvami,
- průběžná validace s uživateli,
- explicitní trade-offy,
- žádné tajné rozšiřování scope,
- AI urychluje práci, ale nenese odpovědnost.

### Povinné artefakty

- průběžně aktualizovaný backlog,
- akceptační kritéria,
- relevantní testy,
- rozhodnutí formou ADR,
- release poznámky pro významné změny.

### Gate B1

Funkce není hotová pouze proto, že kód funguje lokálně. Musí splnit projektovou Definition of Done.

---

## 7. Verify

### Cíl

Prokázat, že systém funguje v podmínkách blízkých realitě a že kritická rizika jsou pod kontrolou.

### Ověřujeme zejména

- kritická uživatelská workflow,
- oprávnění a přístup k datům,
- integritu dat,
- chybové stavy,
- migrace,
- deployment a rollback,
- e-mailové a integrační toky,
- provozní připravenost.

### Evidence

Každé kritické tvrzení musí mít důkaz:

- automatizovaný test,
- scénář z reálného prohlížeče,
- checklist,
- log,
- screenshot,
- auditní záznam,
- potvrzenou akceptaci.

### Gate V2

Launch je zakázán, pokud existuje neakceptované kritické riziko bez vlastníka a plánu.

---

## 8. Launch

### Cíl

Převést řešení do provozu tak, aby změna byla vratná, sledovatelná a organizačně zvládnutelná.

### Povinné položky

- potvrzené release okno,
- záloha a migrační plán,
- rollback postup,
- monitoring,
- odpovědnosti během nasazení,
- komunikační plán,
- předání přístupů a dokumentace,
- známé limity systému.

### Gate L1

Launch končí až tehdy, když je ověřena produkční funkčnost, nikoli odesláním deployment příkazu.

---

## 9. Improve

### Cíl

Proměnit provozní data a zkušenosti z projektu v další hodnotu pro klienta i Studio Platform.

### Povinné činnosti

- projektová retrospektiva,
- kontrola metrik úspěchu,
- evidence otevřených rizik,
- návrh dalšího rozvoje,
- Project Harvest,
- aktualizace playbooků, šablon a standardů.

### Výstupy

- lessons learned,
- relevantní ADR,
- zlepšené checklisty,
- kandidát na case study,
- doporučení pro další období.

---

## 10. Tailoring rules

Framework se nepoužívá mechanicky.

### Malý strategický web

Může mít krátký Understand a Validate, ale stále musí mít jasný cíl, scope, akceptaci a bezpečný launch.

### Pilot interního systému

Klade důraz na Validate, Design a měření reálného použití.

### Provozně kritický systém

Vyžaduje hlubší Verify, explicitní rollback, audit oprávnění, monitoring a provozní dokumentaci.

## 11. Anti-patterns

Studio Platform nikdy:

- nezačíná vývoj pouze na základě vágního seznamu funkcí,
- nepředstírá jistotu tam, kde existují neověřené předpoklady,
- nepovažuje merge za dokončení práce,
- nepouští změny do produkce bez ověření kritických toků,
- nekončí projekt bez retrospektivy a Harvestu,
- nepoužívá proces jako náhradu úsudku.

## 12. Metrics

Framework funguje, pokud dlouhodobě roste:

- podíl projektů dokončených bez kritického produkčního incidentu,
- přesnost odhadu rozsahu a ekonomiky,
- podíl akceptovaných výstupů bez zásadního přepracování,
- podíl opakovaných zakázek a doporučení,
- množství prakticky využitých poznatků z Harvestu.

## 13. AI support

AI může pomoci s:

- syntézou poznámek,
- hledáním nejasností a rizik,
- generováním variant řešení,
- kontrolou konzistence,
- návrhem testovacích scénářů,
- přípravou dokumentace.

AI nesmí sama rozhodnout o:

- přijetí projektu,
- ekonomické smysluplnosti,
- bezpečnostním riziku,
- produkční připravenosti,
- akceptaci klientem.

Za každé rozhodnutí odpovídá konkrétní člověk.