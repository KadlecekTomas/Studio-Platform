# Definition of Done

**Úroveň:** L2 — Policy  
**Stav:** v1.0  
**Vlastník:** Delivery Lead

## Purpose

Definition of Done stanovuje minimální podmínky, za kterých může Studio Platform označit práci za dokončenou. Chrání klienta, tým i budoucí provoz před falešným pocitem hotové práce.

## Universal rule

Práce není hotová, když:

- je napsaný kód,
- funguje lokálně,
- je otevřený pull request,
- je změna mergnutá,
- nebo proběhl deployment.

Práce je hotová až tehdy, když splňuje relevantní funkční, produktové, technické, provozní, bezpečnostní a znalostní podmínky.

## 1. Functional completion

- Akceptační kritéria jsou splněna.
- Kritické uživatelské scénáře fungují od začátku do konce.
- Chybové a prázdné stavy jsou záměrně ošetřeny.
- Výsledek odpovídá schválenému scope.
- Známá omezení jsou explicitně popsána.

## 2. Product completion

- Funkce řeší původně definovaný problém.
- Copy, hierarchie a interakce jsou srozumitelné cílovému uživateli.
- Nezvyšujeme zbytečně počet kroků nebo provozní složitost.
- Byly zohledněny reálné role a pracovní kontext uživatelů.
- Případný kompromis je vědomý a zdokumentovaný.

## 3. Engineering completion

- Změna prošla relevantní kontrolou kódu.
- Kód je čitelný a odpovídá standardům projektu.
- Nevznikla zbytečná duplicita nebo skrytá vazba.
- Datové změny mají bezpečný migrační postup.
- Byly přidány testy odpovídající riziku.
- Nezůstávají nevyřešené kritické TODO poznámky.
- Závislosti a konfigurace jsou reprodukovatelné.

## 4. Security and data completion

- Oprávnění jsou ověřena pro relevantní role.
- Citlivá data nejsou dostupná neoprávněným uživatelům.
- Vstupy jsou validovány na správné vrstvě.
- Tajné hodnoty nejsou součástí repozitáře ani logů.
- Auditní stopa existuje tam, kde je provozně nutná.
- Rizikové změny mají explicitní bezpečnostní kontrolu.

## 5. Verification completion

- Kritická workflow mají důkaz o ověření.
- Regrese souvisejících oblastí byla rozumně prověřena.
- Testy běží proti relevantní verzi změny.
- Výsledek starého testovacího běhu se nepoužívá jako důkaz pro nový HEAD.
- Nestabilní test není ignorován bez vlastníka a rozhodnutí.
- Manuální ověření je zaznamenáno, pokud automatizace není přiměřená.

## 6. Operational completion

- Změnu lze bezpečně nasadit.
- Je znám rollback nebo jiný recovery postup.
- Produkční konfigurace je připravena.
- Monitoring a logování umožňují rozpoznat selhání.
- Zálohy a migrace byly zohledněny.
- Podpora ví, co se změnilo, pokud je to relevantní.
- Byla ověřena funkčnost po nasazení.

## 7. Client completion

- Klient rozumí výsledku a jeho omezením.
- Potřebné rozhodnutí nebo akceptace je zachycena.
- Předání obsahuje relevantní přístupy a instrukce.
- Změny mimo scope nejsou skrytě zamíchány do dodávky.
- Otevřené body mají vlastníka a další krok.

## 8. Knowledge completion

U významné práce platí alespoň jedno:

- vzniklo nebo bylo aktualizováno ADR,
- vznikla lesson learned,
- zlepšil se checklist nebo playbook,
- byla aktualizována provozní dokumentace,
- byl zaznamenán nový opakovatelný postup.

## Risk-based tailoring

Ne každá změna potřebuje stejnou hloubku. Rozsah Definition of Done se upravuje podle:

- dopadu selhání,
- citlivosti dat,
- počtu uživatelů,
- vratnosti změny,
- míry nejistoty,
- kritičnosti workflow.

Nižší rozsah musí být výsledkem vědomého rozhodnutí, nikoli pohodlnosti.

## Release gate

Produkční release je blokován, pokud:

- není ověřeno kritické workflow,
- existuje neakceptované kritické bezpečnostní riziko,
- není jasný stav datové migrace,
- není znám recovery postup u nevratné změny,
- testy se vztahují k jinému commitu než k vydávané verzi,
- neexistuje odpovědná osoba pro launch.

## Anti-patterns

- „Na mém počítači to funguje.“
- „Mergnuto znamená hotovo.“
- „Klient si toho asi nevšimne.“
- „Testy pustíme později.“
- „Rollback nepotřebujeme.“
- „Dokumentaci dopíšeme někdy.“
- „AI říká, že je to správně.“

## Metrics

Sledujeme zejména:

- počet produkčních regresí,
- podíl release s ověřeným rollbackem,
- počet změn vrácených kvůli nesplněným kritériím,
- dobu od merge do skutečné akceptace,
- opakující se typy chyb,
- podíl významných projektů s dokončeným Harvestem.

## AI support

AI může:

- kontrolovat checklist proti diffu,
- navrhovat testovací scénáře,
- hledat nezdokumentovaná rizika,
- porovnávat akceptační kritéria s implementací.

AI nemůže sama potvrdit Definition of Done. Finální odpovědnost nese člověk určený pro konkrétní oblast.