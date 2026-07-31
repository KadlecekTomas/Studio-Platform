# Studio Platform — Service Architecture

## 1. Princip

Nabídka Studio Platform musí být jednoduchá na pochopení, ale nesmí zjednodušovat realitu delivery.

Veřejně komunikujeme maximálně tři hlavní kategorie. Interně je rozpadáme do přesných produktů a pravidel.

## 2. Tři hlavní kategorie

### 2.1 Systémy a portály

Pro klienty, kteří potřebují nový provozní nástroj.

Typické výstupy:

- interní informační systém,
- klientský nebo partnerský portál,
- administrační aplikace,
- rezervační a objednávkový systém,
- SaaS aplikace,
- samoobslužná zóna.

Hodnota:

- jedno místo pro práci,
- řízené workflow,
- role a oprávnění,
- méně ručních kroků,
- lepší zkušenost uživatelů.

### 2.2 Automatizace a integrace

Pro klienty, kteří mají funkční nástroje, ale data a práce mezi nimi neproudí.

Typické výstupy:

- propojení banky, účetnictví, CRM a e-mailů,
- importy a exporty,
- automatická tvorba dokumentů,
- notifikace,
- synchronizace dat,
- AI asistence v konkrétním workflow.

Hodnota:

- méně přepisování,
- menší chybovost,
- rychlejší průchod procesu,
- lepší dohledatelnost.

### 2.3 Produktový rozvoj

Pro klienty, kteří již aplikaci mají, ale potřebují ji stabilizovat, převzít nebo rozvíjet.

Typické výstupy:

- audit aplikace,
- převzetí zanedbaného projektu,
- modernizace architektury,
- UX redesign kritických cest,
- testovací strategie,
- provozní hardening,
- dlouhodobý rozvoj.

Hodnota:

- snížení rizika,
- návrat schopnosti bezpečně dodávat,
- odstranění nejdražšího technického a produktového dluhu.

## 3. Povinná vstupní vrstva

Větší realizace nesmí začít neurčitým „udělejte nám systém“.

Vstupem je jedna z možností:

1. placený Discovery Sprint,
2. existující dostatečně kvalitní zadání,
3. malý jasně ohraničený pilot,
4. audit existující aplikace.

Bez vyjasnění cíle, rozsahu, rizik a odpovědností nesmí být slíben pevný rozpočet ani termín.

## 4. Delivery ladder

### Úroveň A — Diagnostika

- problém,
- uživatelé,
- proces,
- data,
- rizika,
- ekonomika,
- doporučení dalšího kroku.

### Úroveň B — Pilot nebo prototyp

- ověření nejrizikovější části,
- omezený rozsah,
- skutečné workflow,
- rozhodnutí go / revise / stop.

### Úroveň C — Core Build

- prioritizované moduly,
- průběžné demo,
- testování kritických cest,
- dokumentovaný scope,
- bezpečné nasazení.

### Úroveň D — Growth & Care

- rozvoj,
- monitoring,
- opravy,
- optimalizace,
- bezpečnost,
- produktové vyhodnocování.

## 5. Strategické malé projekty

Landing page, menší web nebo redesign přijmeme pouze tehdy, když:

- rozsah je přesně omezen,
- časová náročnost je předvídatelná,
- marže je zdravá,
- klient akceptuje omezený počet revizí,
- projekt má referenční, vztahovou nebo segmentovou hodnotu,
- nevytlačí významně hodnotnější práci.

Malý projekt nesmí být skrytý velký projekt bez rozpočtu.

## 6. Co není samostatná služba

Veřejně neprodáváme jako izolované hlavní služby:

- React vývoj,
- Node.js vývoj,
- databáze,
- DevOps,
- AI integrace bez konkrétního problému,
- UX design bez návaznosti na produkt,
- testování jako marketingové heslo.

Tyto schopnosti jsou součástí řešení, ne důvodem, proč si klient kupuje projekt.

## 7. Rozhodovací strom

- Neví klient přesně, co potřebuje? → Discovery.
- Je největší nejistota technická nebo uživatelská? → Pilot/prototyp.
- Má kvalitní zadání a jasný ownership? → Core Build.
- Má existující problematickou aplikaci? → Audit a stabilization plan.
- Potřebuje průběžný rozvoj? → Growth Retainer.
- Chce jen malý web? → Strategic Small Project scorecard.

## 8. Hranice odpovědnosti

Studio Platform odpovídá za:

- odborné doporučení,
- transparentní rizika,
- dohodnutý scope,
- kvalitu implementace,
- ověření dohodnutých kritických cest,
- jasné předání stavu.

Klient odpovídá za:

- dostupnost rozhodovatele,
- pravdivé podklady,
- včasnou zpětnou vazbu,
- přístup k uživatelům,
- právní a obchodní rozhodnutí ve své doméně,
- schválení priorit.

## 9. Cíl architektury nabídky

Klient musí během jedné schůzky pochopit, jaký je jeho nejbližší bezpečný krok. Nemusí si sám vybírat technologii ani přesný typ smlouvy.