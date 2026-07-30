# Studio Platform — Master Roadmap

> Tento dokument je řídicí systém pro vybudování firmy, která dokáže dlouhodobě získávat kvalitní zakázky, růst bez chaosu a postupně nahradit příjem z učitelství.

## 0. Jak tuto roadmapu používat

Roadmapa není seznam nápadů. Je to pořadí rozhodnutí.

Každá fáze má:

- obchodní cíl,
- konkrétní výstupy,
- rozhodovací bránu,
- měřitelné KPI,
- doporučený prompt pro ChatGPT,
- jasný zákaz, co v dané fázi ještě nedělat.

Základní pravidlo:

> Nezačínáme další fázi jen proto, že nás láká. Začínáme ji až tehdy, když předchozí fáze splnila svou rozhodovací bránu.

---

# North Star

## Hlavní cíl

Vybudovat Studio Platform jako profitabilní produktové a vývojové studio, které:

1. získává zakázky bez závislosti na náhodných doporučeních,
2. dodává projekty s vysokou důvěrou a kvalitou,
3. vytváří opakované příjmy,
4. postupně snižuje závislost zakladatele na příjmu z učitelství,
5. dlouhodobě rozvíjí vlastní produkty.

## Finanční brána pro omezení učitelství

Učitelství se neomezuje podle pocitu, optimismu ani jednoho velkého projektu.

Bezpečná brána:

- minimálně 6 měsíců po sobě má Studio Platform čistý měsíční příjem pokrývající osobní životní náklady,
- existuje hotovostní rezerva minimálně na 6 měsíců osobních nákladů,
- nejméně 30 % očekávaných příjmů na příštích 6 měsíců pochází z podepsaných smluv, retainerů nebo opakovaných plateb,
- žádný jediný klient netvoří více než 50 % očekávaných ročních příjmů.

Dokud tato brána není splněna, Studio Platform má růst vedle učitelství, ne místo něj.

---

# Fáze 1 — Strategický základ

## Cíl

Rozhodnout, komu Studio Platform pomáhá, jaké problémy řeší a proč mu má klient důvěřovat.

## Výstupy

- `00_MANIFEST.md`
- `02_POSITIONING.md`
- `03_IDEAL_CLIENT_PROFILE.md`
- `04_SERVICE_ARCHITECTURE.md`
- `05_PROJECT_ACCEPTANCE_SCORECARD.md`
- `06_PRICING_PRINCIPLES.md`
- `07_BUSINESS_MODEL.md`
- `08_COMPETITIVE_LANDSCAPE.md`
- `09_BRAND_FOUNDATIONS.md`

## Rozhodnutí, která musí padnout

- hlavní typ klienta,
- hlavní typ problému,
- primární nabídka,
- cenové minimum,
- výjimky pro menší zakázky,
- hranice mezi službou, produktem a experimentem,
- důvody, proč klient zvolí Studio Platform místo freelancera nebo větší agentury.

## KPI

- jasné vysvětlení nabídky do 20 sekund,
- maximálně 3 hlavní kategorie služeb,
- každý typ zakázky má minimální ekonomická kritéria,
- positioning je konkrétní a neplatí pro libovolnou agenturu.

## Rozhodovací brána

Fáze je hotová, když nezávislý člověk po přečtení dokumentů dokáže správně odpovědět:

- co firma dělá,
- pro koho to dělá,
- jaký výsledek prodává,
- proč není zaměnitelná s jinou agenturou.

## Co ještě nedělat

- vizuální design,
- animace,
- implementace webu,
- AI konzultant,
- cenová kalkulačka.

## Prompt pro pokračování

> Pokračuj ve fázi 1 Studio Platform. Vytvoř `docs/02_POSITIONING.md`. Buď kritický, porovnej positioning s reálnou konkurencí a navrhni pouze jeden hlavní směr. Zapiš výsledek do samostatné větve a otevři draft PR.

---

# Fáze 2 — Nabídka, pricing a obchodní ekonomika

## Cíl

Vytvořit nabídku, která se dobře prodává, dobře dodává a má zdravou marži.

## Výstupy

- produktizované vstupní služby,
- architektura hlavních zakázek,
- pricing model,
- pravidla záloh a milníků,
- change request policy,
- servisní a rozvojové retainery,
- kapacitní model,
- jednoduchý finanční model firmy.

Doporučené dokumenty:

- `10_OFFER_LADDER.md`
- `11_DISCOVERY_PRODUCT.md`
- `12_CORE_PROJECT_OFFER.md`
- `13_RETAINER_MODEL.md`
- `14_PRICING_AND_MARGIN_MODEL.md`
- `15_SCOPE_CHANGE_POLICY.md`
- `16_CAPACITY_MODEL.md`
- `17_FINANCIAL_REPLACEMENT_PLAN.md`

## Doporučená nabídka

### A. Discovery Sprint

Placená analýza problému, procesů, rozsahu, rizik a návrhu řešení.

Cíl: zabránit bezplatnému konzultování, odhalit špatné klienty a snížit riziko fixních cen.

### B. Core Build

Návrh a vývoj interního systému, portálu, administrace, rezervačního systému nebo SaaS aplikace.

### C. Growth Retainer

Dlouhodobý rozvoj, monitoring, optimalizace, bezpečnost a produktová práce.

### D. Strategic Small Project

Landing page nebo menší web pouze tehdy, když splní alespoň jedno z následujícího:

- vysoká marže,
- silná reference,
- přístup k cílovému segmentu,
- reálná navazující zakázka,
- možnost standardizace a opakovaného prodeje.

## KPI

- cílová hrubá marže je definovaná,
- každá nabídka má vstup, výstup a hranice,
- žádná větší realizace nezačíná bez placené analýzy nebo dostatečně přesného zadání,
- existuje minimální cena zakázky a výjimkový mechanismus.

## Rozhodovací brána

Musíme umět během jedné obchodní schůzky doporučit klientovi správný produkt, vysvětlit cenu a odmítnout nevýhodný scope.

## Prompt pro pokračování

> Pokračuj ve fázi 2 Studio Platform. Navrhni produktizovaný Discovery Sprint pro české malé a střední firmy. Urči rozsah, výstupy, cenu, časovou náročnost, obchodní argumentaci a pravidla, kdy jej neprodávat. Zapiš do repozitáře a otevři draft PR.

---

# Fáze 3 — Důkaz a případové studie

## Cíl

Převést existující práci na přesvědčivý důkaz, že Studio Platform umí zvládnout složitý projekt.

## Priorita

První případová studie: CK Pragotour.

Nejdříve důkaz, potom efekty.

## Výstupy

- detailní case study CK Pragotour,
- stručná obchodní verze,
- technická verze pro CTO,
- ověřitelná čísla,
- klientská reference,
- screenshoty a video,
- před/po,
- popis rozhodnutí a trade-offů,
- bezpečně anonymizovaná architektura,
- seznam skutečných přínosů klientovi.

Doporučené dokumenty:

- `case-studies/CKPRAGOTOUR_MASTER.md`
- `case-studies/CKPRAGOTOUR_EVIDENCE.md`
- `case-studies/CKPRAGOTOUR_STORY.md`
- `case-studies/CKPRAGOTOUR_TECHNICAL.md`
- `case-studies/CKPRAGOTOUR_ASSETS.md`
- `case-studies/CASE_STUDY_TEMPLATE.md`

## Kritické pravidlo

Nevymýšlet metriky. Pokud něco není změřené, označit to jako kvalitativní výsledek nebo začít měřit.

## KPI

- návštěvník pochopí problém, řešení a výsledek bez technických znalostí,
- technický rozhodovatel vidí důkazy kvalitního procesu,
- case study obsahuje alespoň jednu konkrétní klientskou citaci,
- každé tvrzení má zdroj nebo interní evidenci.

## Rozhodovací brána

Případová studie je použitelná na obchodní schůzce a dokáže odpovědět na otázku:

> Proč bych měl věřit, že Studio Platform zvládne i můj systém?

## Prompt pro pokračování

> Pokračuj ve fázi 3. Proveď důkazní audit projektu CK Pragotour. Vytvoř seznam tvrzení, která můžeme veřejně doložit, tvrzení vyžadujících potvrzení klienta a tvrzení, která nesmíme používat. Nic si nevymýšlej. Výsledek zapiš do `docs/case-studies/CKPRAGOTOUR_EVIDENCE.md`.

---

# Fáze 4 — Prodejní cesta a obsahová architektura

## Cíl

Navrhnout portfolio jako prodejní systém, který dovede správného návštěvníka k relevantnímu důkazu a ke kvalifikované poptávce.

## Výstupy

- mapy návštěvníků,
- informační architektura,
- messaging hierarchy,
- homepage specification,
- case study template,
- service pages,
- contact flow,
- lead qualification,
- CTA strategy,
- objections library.

Doporučené dokumenty:

- `ux/01_AUDIENCE_JOURNEYS.md`
- `ux/02_INFORMATION_ARCHITECTURE.md`
- `ux/03_MESSAGING_HIERARCHY.md`
- `ux/04_CTA_STRATEGY.md`
- `ux/05_LEAD_QUALIFICATION.md`
- `ux/06_OBJECTIONS.md`
- `pages/HOME.md`
- `pages/CASE_STUDY.md`
- `pages/SERVICES.md`
- `pages/PROCESS.md`
- `pages/CONTACT.md`

## Doporučená primární cesta

1. návštěvník rozpozná svůj problém,
2. vidí relevantní výsledek,
3. otevře případovou studii,
4. pochopí proces a rizika,
5. získá jasný další krok,
6. vyplní kvalifikační formulář nebo rezervuje konzultaci.

## KPI

- primární CTA je jednoznačné,
- každá stránka má konkrétní obchodní účel,
- formulář filtruje nekvalitní poptávky,
- žádná sekce neexistuje jen kvůli estetice.

## Rozhodovací brána

Kompletní klikací wireflow lze otestovat bez finálního vizuálu a alespoň 5 testujících správně pochopí nabídku i další krok.

## Prompt pro pokračování

> Pokračuj ve fázi 4. Vytvoř `docs/ux/01_AUDIENCE_JOURNEYS.md` pro tři prioritní návštěvníky: majitel firmy bez interního IT, provozní manažer s chaotickými procesy a technický rozhodovatel. U každého popiš obavy, důkazy, cestu a konverzní bod.

---

# Fáze 5 — Designový systém a prototyp

## Cíl

Vytvořit vizuální a interakční systém, který vyjadřuje přesnost, charakter a produktové myšlení bez samoúčelných efektů.

## Výstupy

- brand direction,
- typografie,
- barvy,
- grid a spacing,
- komponentový systém,
- motion principles,
- responzivní prototyp,
- design QA checklist.

Doporučené dokumenty:

- `design/01_DESIGN_DIRECTION.md`
- `design/02_DESIGN_TOKENS.md`
- `design/03_COMPONENT_SYSTEM.md`
- `design/04_MOTION.md`
- `design/05_ACCESSIBILITY.md`
- `design/06_RESPONSIVE_RULES.md`
- `design/07_DESIGN_QA.md`

## Principy

- portfolio musí působit jako důkaz produktové kompetence,
- originalita nesmí snížit srozumitelnost,
- motion vysvětluje, neodvádí pozornost,
- design musí fungovat i bez animací,
- mobilní verze není zmenšený desktop.

## KPI

- LCP a interakce nejsou obětované efektům,
- všechny klíčové flow fungují klávesnicí,
- kontrast a čitelnost splňují WCAG AA,
- design lze konzistentně implementovat z tokenů.

## Rozhodovací brána

Prototyp úspěšně projde testem s cílovými návštěvníky a obsah je pochopitelný bez vysvětlování autora.

## Prompt pro pokračování

> Pokračuj ve fázi 5. Navrhni jeden designový směr Studio Platform, který kombinuje důvěryhodnost B2B konzultingu s precizností produktové aplikace. Nevytvářej více variant. Zdůvodni typografii, layout, motion a rizika.

---

# Fáze 6 — MVP implementace

## Cíl

Spustit rychlý, důvěryhodný a měřitelný web, který začne získávat poptávky.

## MVP scope

- homepage,
- jedna špičková případová studie,
- služby,
- proces spolupráce,
- kontakt a kvalifikace,
- analytika,
- SEO základ,
- accessibility,
- performance budget,
- bezpečné nasazení,
- monitoring.

## Záměrně mimo MVP

- AI konzultant,
- adaptivní personalizace,
- složité 3D,
- veřejná demo administrace,
- živá data z GitHubu,
- rozsáhlý blog,
- efektní funkce bez potvrzené obchodní hodnoty.

## Technické dokumenty

- `technical/01_ARCHITECTURE.md`
- `technical/02_STACK_DECISION.md`
- `technical/03_CONTENT_MODEL.md`
- `technical/04_ANALYTICS.md`
- `technical/05_SEO.md`
- `technical/06_PERFORMANCE_BUDGET.md`
- `technical/07_SECURITY.md`
- `technical/08_TEST_STRATEGY.md`
- `technical/09_DEPLOYMENT.md`

## KPI

- měření odeslaných a kvalifikovaných poptávek,
- Core Web Vitals v zeleném pásmu,
- žádná kritická accessibility chyba,
- error monitoring a uptime monitoring,
- obsah lze upravit bez zásahu do komponent.

## Rozhodovací brána

Web je v produkci, měří reálné chování a je použitelný při osobním networkingu i studeném oslovení.

## Prompt pro pokračování

> Pokračuj ve fázi 6. Připrav technickou architekturu MVP Studio Platform. Minimalizuj provozní zátěž a overengineering. Definuj stack, content model, testy, deployment, monitoring a performance budget.

---

# Fáze 7 — Go-to-market a DigiSemestr

## Cíl

Použít Studio Platform jako konkrétní obchodní systém, ne jako pasivní vizitku.

## Výstupy

- networking pitch,
- stručné představení firmy,
- QR landing flow,
- follow-up zpráva po setkání,
- discovery call script,
- CRM pipeline,
- seznam cílových segmentů,
- outreach experimenty,
- obsah pro LinkedIn,
- DigiSemestr launch kit.

Doporučené dokumenty:

- `gtm/01_GO_TO_MARKET.md`
- `gtm/02_DIGISEMESTR_PLAN.md`
- `gtm/03_ELEVATOR_PITCH.md`
- `gtm/04_DISCOVERY_CALL.md`
- `gtm/05_CRM_PIPELINE.md`
- `gtm/06_OUTREACH.md`
- `gtm/07_FOLLOW_UP.md`
- `gtm/08_CONTENT_STRATEGY.md`

## DigiSemestr minimum

Před prvním relevantním networkingovým momentem musí existovat:

- profesionální homepage,
- mobilně perfektní case study,
- QR kód vedoucí na cílenou stránku,
- jasná věta, co Studio Platform dělá,
- připravený follow-up,
- jednoduché CRM,
- nabídka dalšího kroku.

## KPI

- počet relevantních rozhovorů,
- počet follow-upů do 24 hodin,
- počet discovery callů,
- počet kvalifikovaných příležitostí,
- hodnota pipeline,
- konverze z kontaktu na další krok.

## Rozhodovací brána

Studio Platform dokáže aktivně vytvořit obchodní příležitosti a nezávisí pouze na tom, zda někdo náhodou přijde na web.

## Prompt pro pokračování

> Pokračuj ve fázi 7. Připrav kompletní DigiSemestr launch kit: positioning sentence, 30sekundový pitch, QR landing page, follow-up zprávu, kvalifikační otázky a CRM pipeline. Zapiš jej do `docs/gtm/02_DIGISEMESTR_PLAN.md`.

---

# Fáze 8 — Validace a konverzní optimalizace

## Cíl

Nahradit názory daty a rozhovory s reálnými klienty.

## Výstupy

- analytický dashboard,
- funnel definice,
- rozhovory s návštěvníky,
- objection tracking,
- experiment backlog,
- měsíční business review.

## KPI

- kvalifikované leady,
- booking rate,
- case study completion rate,
- CTA click rate,
- win rate,
- průměrná hodnota zakázky,
- sales cycle,
- podíl odmítnutých nevýhodných poptávek.

## Pravidlo experimentů

Neoptimalizujeme barvu tlačítka při nízké návštěvnosti. Nejprve optimalizujeme:

1. kvalitu návštěvnosti,
2. relevanci nabídky,
3. důvěryhodnost důkazů,
4. tření v dalším kroku.

## Rozhodovací brána

Každá zásadní úprava webu nebo nabídky vychází z dat, obchodních rozhovorů nebo jasné strategické hypotézy.

## Prompt pro pokračování

> Proveď měsíční business review Studio Platform. Vyhodnoť pipeline, zdroje leadů, konverze, průměrnou hodnotu zakázky, kapacitu a nízko-ROI práci. Navrhni pouze tři nejdůležitější zásahy na další měsíc.

---

# Fáze 9 — Delivery Operating System

## Cíl

Zajistit, aby růst počtu zakázek nezničil kvalitu, termíny ani zakladatele.

## Výstupy

- lead-to-project handoff,
- discovery šablony,
- proposal template,
- contract checklist,
- project kickoff,
- scope management,
- weekly reporting,
- QA gates,
- deployment gates,
- handover,
- support model,
- postmortem.

Doporučené dokumenty:

- `operations/01_LEAD_TO_PROJECT.md`
- `operations/02_DISCOVERY_PROCESS.md`
- `operations/03_PROPOSAL_STANDARD.md`
- `operations/04_PROJECT_KICKOFF.md`
- `operations/05_DELIVERY_STANDARD.md`
- `operations/06_QUALITY_GATES.md`
- `operations/07_CLIENT_COMMUNICATION.md`
- `operations/08_HANDOVER.md`
- `operations/09_SUPPORT.md`
- `operations/10_POSTMORTEM.md`

## KPI

- dodržení milníků,
- scope variance,
- efektivní hodinová sazba,
- hrubá marže,
- počet regresí po nasazení,
- spokojenost klienta,
- počet neplacených hodin.

## Rozhodovací brána

Projekt lze řídit podle systému, nikoli pouze podle paměti a improvizace zakladatele.

## Prompt pro pokračování

> Pokračuj ve fázi 9. Vytvoř minimální Delivery Operating System pro Studio Platform od podepsané nabídky po post-launch review. Zaměř se na ochranu scope, marže, kvality a komunikace.

---

# Fáze 10 — Opakované příjmy

## Cíl

Snížit závislost na jednorázových projektech.

## Možnosti

- growth retainer,
- maintenance a bezpečnostní balíček,
- monitoring a SLA,
- produktová analytika,
- konverzní optimalizace,
- čtvrtletní technologický audit,
- hosting a provozní správa,
- licencované moduly,
- produktizované integrace.

## Kritické upozornění

Retainer nesmí být neurčitý balík hodin. Musí mít jasnou hodnotu, rytmus, priorizaci a reporting.

## KPI

- MRR,
- podíl opakovaných příjmů,
- retainer churn,
- hrubá marže retainerů,
- počet klientů s dlouhodobou spoluprací.

## Rozhodovací brána

Opakované příjmy pokrývají významnou část fixních osobních a firemních nákladů.

## Prompt pro pokračování

> Navrhni Growth Retainer Studio Platform pro klienty po dokončení Core Build. Definuj tři jasné výsledkové oblasti, měsíční rytmus, reporting, cenové principy a hranice scope. Neprodávej pouze hodiny.

---

# Fáze 11 — Tým a delegování

## Cíl

Odstranit zakladatele jako úzké hrdlo bez ztráty standardu.

## Pořadí delegování

1. účetnictví a administrativa,
2. rutinní QA,
3. produkční design nebo frontend podle bottlenecku,
4. projektová koordinace,
5. specializovaný backend/DevOps,
6. obchodní podpora až po ověření nabídky.

## Pravidlo

Nenabírat zaměstnance kvůli prestiži. Delegovat konkrétní opakující se bottleneck s jasnou ekonomikou.

## KPI

- podíl práce, kterou musí osobně udělat zakladatel,
- vytížení,
- revenue per contributor,
- kvalita dodávek,
- čas zakladatele na obchod a strategii.

## Rozhodovací brána

Nový člověk má opakovatelný proces, jasný standard, odpovědnost a ekonomický důvod.

## Prompt pro pokračování

> Proveď bottleneck audit Studio Platform a navrhni první práci k delegování. Porovnej úsporu času, riziko kvality, náklady a dopad na tržby. Doporuč pouze jednu nejlepší další roli.

---

# Fáze 12 — Vlastní produkty

## Cíl

Budovat dlouhodobě škálovatelnou hodnotu bez ohrožení cash flow studia.

## Pravidla

- zakázková část financuje experimenty, ne nekonečný vývoj bez validace,
- každý produkt musí mít samostatnou hypotézu, segment, metriku a stop podmínku,
- vlastní produkt nesmí spotřebovat kapacitu potřebnou pro závazky klientům,
- validace problému před rozsáhlou implementací.

## KPI

- aktivní uživatelé,
- retence,
- ochota platit,
- CAC,
- MRR,
- čas do validace,
- investovaná kapacita versus vytvořená hodnota.

## Rozhodovací brána

Produkt dostává další investici pouze tehdy, když vykazuje ověřenou poptávku nebo strategickou hodnotu.

## Prompt pro pokračování

> Proveď investiční review vlastního produktu. Odděl ego a FOMO od ověřené poptávky. Vyhodnoť důkazy problému, používání, ochotu platit, náklady příležitosti a jasnou stop podmínku.

---

# Prioritní backlog dokumentace

## P0 — nutné před designem a implementací

1. `02_POSITIONING.md`
2. `03_IDEAL_CLIENT_PROFILE.md`
3. `04_SERVICE_ARCHITECTURE.md`
4. `05_PROJECT_ACCEPTANCE_SCORECARD.md`
5. `06_PRICING_PRINCIPLES.md`
6. `08_COMPETITIVE_LANDSCAPE.md`
7. `case-studies/CKPRAGOTOUR_EVIDENCE.md`
8. `case-studies/CKPRAGOTOUR_MASTER.md`
9. `ux/01_AUDIENCE_JOURNEYS.md`
10. `ux/02_INFORMATION_ARCHITECTURE.md`
11. `pages/HOME.md`
12. `gtm/02_DIGISEMESTR_PLAN.md`

## P1 — nutné před produkčním spuštěním

1. design direction,
2. design tokens,
3. content model,
4. analytics,
5. SEO,
6. performance budget,
7. test strategy,
8. deployment,
9. contact qualification,
10. CRM pipeline.

## P2 — po prvních datech a poptávkách

1. AI konzultant,
2. project estimator,
3. adaptivní portfolio,
4. interaktivní architektura,
5. live demo,
6. personalizované segmentové landing pages,
7. obsahový engine.

---

# Jak zadávat práci ChatGPT

Používej tento formát:

```md
Repo: KadlecekTomas/Studio-Platform
Fáze: [číslo a název]
Úkol: [jeden jasný výstup]
Cíl: [jaké rozhodnutí nebo obchodní výsledek má výstup umožnit]
Vstupy: [odkazy, fakta, omezení]
Režim: [research / strategy / writing / implementation / audit]
Git pravidla: vytvoř větev, commitni, otevři draft PR, nic nemerguj
Kritéria hotovo: [ověřitelné podmínky]
```

## Doporučený univerzální prompt

> Pracuj v repozitáři `KadlecekTomas/Studio-Platform`. Najdi aktuální roadmapu a relevantní existující dokumenty. Vyřeš pouze následující úkol: **[ÚKOL]**. Výsledek musí podporovat hlavní cíl firmy: získávat kvalitní zakázky, chránit marži a postupně vytvořit stabilní příjem nahrazující učitelství. Buď kritický; škrtni nápady s nízkou návratností. Vytvoř samostatnou větev, proveď změny, ověř konzistenci s ostatní dokumentací, commitni a otevři draft PR. Nic nemerguj ani nenasazuj. Na konci uveď rozhodnutí, změněné soubory, rizika a doporučený další jediný krok.

---

# Týdenní řídicí rytmus

## Pondělí — Revenue

- stav pipeline,
- nejbližší obchodní kroky,
- follow-upy,
- kapacita,
- cash flow.

## Středa — Delivery

- projekty v riziku,
- scope,
- blokery,
- kvalita,
- neplacená práce.

## Pátek — Strategy

- co vytvořilo hodnotu,
- co spálilo čas bez návratnosti,
- jedno rozhodnutí na další týden,
- aktualizace roadmapy.

## Měsíční review

- tržby,
- marže,
- pipeline,
- opakované příjmy,
- klientská koncentrace,
- využití času,
- stav přechodu od učitelství,
- stop/start/continue.

---

# Nejbližší doporučený postup

1. dokončit positioning,
2. definovat ideální klienty,
3. vytvořit scorecard pro přijímání zakázek,
4. navrhnout nabídku a pricing,
5. provést důkazní audit CK Pragotour,
6. vytvořit hlavní případovou studii,
7. připravit prodejní cestu,
8. navrhnout DigiSemestr launch kit,
9. teprve poté designovat a implementovat MVP.

## Nejbližší jediný krok

Vytvořit `docs/02_POSITIONING.md` na základě poctivé analýzy konkurence, vlastních důkazů a ekonomického cíle Studio Platform.

---

# Závěrečný princip

> Studio Platform se nestane jednou z nejlepších firem tím, že bude mít nejvíce funkcí, nejhezčí animace nebo nejvíce odpracovaných hodin. Stane se jí pouze tehdy, pokud bude opakovaně dělat lepší rozhodnutí než konkurence, dodávat důvěryhodné výsledky a chránit svou schopnost dlouhodobě růst.
