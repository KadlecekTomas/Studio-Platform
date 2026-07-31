import type { Metadata } from "next";
import Link from "next/link";
import { SiteFooter, SiteHeader } from "../../../components/site-chrome";

export const metadata: Metadata = {
  title: "CK Pragotour — případová studie | Studio Platform",
  description: "Jak vznikal provozní systém pro cestovní kancelář CK Pragotour.",
};

const capabilities = [
  "katalog a veřejné poptávky",
  "objednávkový workflow a dokumenty",
  "finance a fakturační podklady",
  "platby jednotlivých účastníků",
  "administrační a provozní nástroje",
  "migrace legacy dat a auditní stopa",
];

const decisions = [
  ["Immutable business snapshots", "Potvrzené obchodní skutečnosti se nesmí zpětně měnit podle aktuálních dat katalogu."],
  ["Deterministická E2E data", "Kritický test musí vlastnit data, na kterých stojí, a nesmí záviset na stavu sdílené databáze."],
  ["Workflow před obrazovkami", "Složitost systému určují role, přechody, peníze a provozní riziko — ne počet stránek."],
];

export default function CaseStudyPage() {
  return (
    <main>
      <SiteHeader />
      <section className="case-hero shell">
        <div className="eyebrow"><span /> Case study / Project 001</div>
        <h1 className="page-title">CK<br /><em>Pragotour.</em></h1>
        <div className="case-lead">
          <p>Od katalogu zájezdů k propojenému provoznímu systému pro poptávky, objednávky, finance, dokumenty a platby účastníků.</p>
          <div className="case-status"><strong>STATUS</strong><span>Produkt v aktivním vývoji a provozním ověřování</span></div>
        </div>
      </section>

      <section className="case-band">
        <div className="shell case-facts">
          <div><strong>2 204</strong><span>legacy záznamů v migrační sadě</span></div>
          <div><strong>7+</strong><span>propojených provozních oblastí</span></div>
          <div><strong>Commit-bound</strong><span>testovací evidence</span></div>
          <div><strong>Safe change</strong><span>rollback a auditní principy</span></div>
        </div>
      </section>

      <section className="section shell case-grid">
        <div>
          <span className="kicker">Výchozí problém</span>
          <h2>Web nebyl jen web.</h2>
        </div>
        <div className="prose-stack">
          <p>Zakázka začala požadavkem na modernizaci veřejné prezentace. Skutečný provoz ale zahrnoval poptávky škol, individuální objednávky, termíny, ceny, dokumenty, komunikaci, finance a následné platby účastníků.</p>
          <p>Klíčové rozhodnutí bylo přestat projekt hodnotit podle počtu obrazovek a začít jej řídit podle business workflow, rolí a rizik.</p>
        </div>
      </section>

      <section className="section shell">
        <div className="section-heading">
          <span className="kicker">Rozsah systému</span>
          <h2>Jeden provoz.<br />Mnoho souvislostí.</h2>
        </div>
        <div className="capability-grid">
          {capabilities.map((item, index) => <div key={item}><span>{String(index + 1).padStart(2, "0")}</span><strong>{item}</strong></div>)}
        </div>
      </section>

      <section className="method case-decisions">
        <div className="shell">
          <div className="section-heading inverse-simple">
            <span className="kicker">Rozhodnutí, ne dekorace</span>
            <h2>Tři principy, které mění způsob delivery.</h2>
          </div>
          <div className="decision-list">
            {decisions.map(([title, text], index) => (
              <article key={title}><span>ADR / {String(index + 1).padStart(3, "0")}</span><h3>{title}</h3><p>{text}</p></article>
            ))}
          </div>
        </div>
      </section>

      <section className="section shell evidence-note">
        <span className="kicker">Evidence policy</span>
        <h2>Žádná vymyšlená čísla.</h2>
        <p>Veřejně uvádíme pouze tvrzení, která lze spojit s konkrétním zdrojem, verzí nebo klientským potvrzením. Kvalitativní výsledek zůstává kvalitativním výsledkem, dokud není změřen.</p>
      </section>

      <section className="closing">
        <div className="shell closing-inner">
          <span className="kicker">Řešíte podobně provázaný provoz?</span>
          <h2>Nezačínejme funkcemi.<br />Začněme systémem.</h2>
          <Link className="button button-light" href="/kontakt?source=ck-pragotour">Probrat projekt ↗</Link>
        </div>
      </section>
      <SiteFooter />
    </main>
  );
}
