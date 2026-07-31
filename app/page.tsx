import Link from "next/link";
import { SiteFooter, SiteHeader } from "../components/site-chrome";

const services = [
  { index: "01", title: "Discovery Sprint", text: "Rozkryjeme proces, rizika, data a ekonomiku dřív, než se začne draze implementovat." },
  { index: "02", title: "Core Build", text: "Navrhneme a postavíme interní systém, klientský portál, administraci nebo provozní aplikaci." },
  { index: "03", title: "Growth Retainer", text: "Po launchi systém měříme, stabilizujeme a rozvíjíme podle skutečného provozu." },
];

const process = ["Understand", "Validate", "Design", "Build", "Verify", "Launch", "Improve"];

export default function Home() {
  return (
    <main>
      <SiteHeader />
      <section className="hero shell" id="top">
        <div className="eyebrow"><span /> Produktové studio pro provozně důležitý software</div>
        <h1>Méně chaosu.<br /><em>Více systému.</em></h1>
        <div className="hero-grid">
          <p className="hero-copy">Navrhujeme a stavíme interní systémy, portály a automatizace pro organizace, které už přerostly tabulky, e-maily a nespojené nástroje.</p>
          <div className="hero-actions">
            <Link className="button button-primary" href="/kontakt">Začít Discovery Sprint</Link>
            <Link className="button button-secondary" href="/case-studies/ck-pragotour">Prozkoumat case study</Link>
          </div>
        </div>
        <div className="signal" aria-label="Klíčové principy">
          <span>Business workflow</span><span>Evidence-based delivery</span><span>Design with character</span><span>Safe launch</span>
        </div>
      </section>

      <section className="section shell" id="services">
        <div className="section-heading"><span className="kicker">Jak spolupráce začíná</span><h2>Neprodáváme hodiny.<br />Řešíme provozní problém.</h2></div>
        <div className="service-list">
          {services.map((service) => <article className="service" key={service.index}><span className="service-index">{service.index}</span><h3>{service.title}</h3><p>{service.text}</p><span className="service-arrow" aria-hidden="true">↗</span></article>)}
        </div>
      </section>

      <section className="method" id="method">
        <div className="shell method-inner">
          <div className="section-heading inverse"><span className="kicker">Studio Platform Method</span><h2>Každá fáze musí vytvořit rozhodnutí nebo důkaz.</h2><p>Vývoj nezačíná seznamem obrazovek. Začíná pochopením lidí, workflow, dat a rizika. Funkční kód není automaticky hotový produkt.</p></div>
          <ol className="process" aria-label="Sedm fází delivery procesu">{process.map((step, index) => <li key={step}><span>{String(index + 1).padStart(2, "0")}</span><strong>{step}</strong></li>)}</ol>
        </div>
      </section>

      <section className="section shell proof" id="proof">
        <div className="proof-intro"><span className="kicker">Důkaz místo slibů</span><h2>CK Pragotour</h2><p>Komplexní provozní systém pro cestovní kancelář: katalog, poptávky, objednávky, finance, dokumenty, platby účastníků a administrace.</p><Link className="text-link" href="/case-studies/ck-pragotour">Otevřít případovou studii ↗</Link></div>
        <div className="proof-panel"><div className="proof-label">PROJECT / 001</div><div className="proof-metric"><strong>2 204</strong><span>legacy záznamů migrováno</span></div><div className="proof-metric"><strong>Immutable</strong><span>business snapshoty</span></div><div className="proof-metric"><strong>Evidence</strong><span>testy vázané na commit a prostředí</span></div><div className="proof-note">Veřejná tvrzení musí zůstat propojená s ověřitelným zdrojem nebo klientským potvrzením.</div></div>
      </section>

      <section className="closing"><div className="shell closing-inner"><span className="kicker">Máte systém, který už brzdí provoz?</span><h2>Pojďme nejdřív zjistit,<br />co má smysl stavět.</h2><Link className="button button-light" href="/kontakt">Probrat projekt ↗</Link></div></section>
      <SiteFooter />
    </main>
  );
}
