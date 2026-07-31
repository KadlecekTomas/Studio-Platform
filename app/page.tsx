const services = [
  {
    index: "01",
    title: "Discovery Sprint",
    text: "Rozkryjeme proces, rizika, data a ekonomiku dřív, než se začne draze implementovat.",
  },
  {
    index: "02",
    title: "Core Build",
    text: "Navrhneme a postavíme interní systém, klientský portál, administraci nebo provozní aplikaci.",
  },
  {
    index: "03",
    title: "Growth Retainer",
    text: "Po launchi systém měříme, stabilizujeme a rozvíjíme podle skutečného provozu.",
  },
];

const process = ["Understand", "Validate", "Design", "Build", "Verify", "Launch", "Improve"];

export default function Home() {
  return (
    <main>
      <header className="site-header shell">
        <a className="brand" href="#top" aria-label="Studio Platform domů">
          <span className="brand-mark" aria-hidden="true">SP</span>
          <span>Studio Platform</span>
        </a>
        <nav aria-label="Hlavní navigace">
          <a href="#services">Služby</a>
          <a href="#method">Metoda</a>
          <a href="#proof">Důkaz</a>
          <a className="nav-cta" href="mailto:hello@studioplatform.cz?subject=Nový projekt">Probrat projekt</a>
        </nav>
      </header>

      <section className="hero shell" id="top">
        <div className="eyebrow"><span /> Produktové studio pro provozně důležitý software</div>
        <h1>
          Méně chaosu.<br />
          <em>Více systému.</em>
        </h1>
        <div className="hero-grid">
          <p className="hero-copy">
            Navrhujeme a stavíme interní systémy, portály a automatizace pro organizace,
            které už přerostly tabulky, e-maily a nespojené nástroje.
          </p>
          <div className="hero-actions">
            <a className="button button-primary" href="mailto:hello@studioplatform.cz?subject=Discovery%20Sprint">Začít Discovery Sprint</a>
            <a className="button button-secondary" href="#proof">Podívat se na způsob práce</a>
          </div>
        </div>
        <div className="signal" aria-label="Klíčové principy">
          <span>Business workflow</span>
          <span>Evidence-based delivery</span>
          <span>Design with character</span>
          <span>Safe launch</span>
        </div>
      </section>

      <section className="section shell" id="services">
        <div className="section-heading">
          <span className="kicker">Jak spolupráce začíná</span>
          <h2>Neprodáváme hodiny.<br />Řešíme provozní problém.</h2>
        </div>
        <div className="service-list">
          {services.map((service) => (
            <article className="service" key={service.index}>
              <span className="service-index">{service.index}</span>
              <h3>{service.title}</h3>
              <p>{service.text}</p>
              <span className="service-arrow" aria-hidden="true">↗</span>
            </article>
          ))}
        </div>
      </section>

      <section className="method" id="method">
        <div className="shell method-inner">
          <div className="section-heading inverse">
            <span className="kicker">Studio Platform Method</span>
            <h2>Každá fáze musí vytvořit rozhodnutí nebo důkaz.</h2>
            <p>
              Vývoj nezačíná seznamem obrazovek. Začíná pochopením lidí, workflow,
              dat a rizika. Funkční kód není automaticky hotový produkt.
            </p>
          </div>
          <ol className="process" aria-label="Sedm fází delivery procesu">
            {process.map((step, index) => (
              <li key={step}>
                <span>{String(index + 1).padStart(2, "0")}</span>
                <strong>{step}</strong>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="section shell proof" id="proof">
        <div className="proof-intro">
          <span className="kicker">Důkaz místo slibů</span>
          <h2>CK Pragotour</h2>
          <p>
            Komplexní provozní systém pro cestovní kancelář: katalog, poptávky,
            objednávky, finance, dokumenty, platby účastníků a administrace.
          </p>
        </div>
        <div className="proof-panel">
          <div className="proof-label">PROJECT / 001</div>
          <div className="proof-metric"><strong>2 204</strong><span>legacy záznamů migrováno</span></div>
          <div className="proof-metric"><strong>Immutable</strong><span>business snapshoty</span></div>
          <div className="proof-metric"><strong>Evidence</strong><span>testy vázané na commit a prostředí</span></div>
          <div className="proof-note">Case study bude zveřejněna pouze s ověřenými tvrzeními a klientským souhlasem.</div>
        </div>
      </section>

      <section className="closing">
        <div className="shell closing-inner">
          <span className="kicker">Máte systém, který už brzdí provoz?</span>
          <h2>Pojďme nejdřív zjistit,<br />co má smysl stavět.</h2>
          <a className="button button-light" href="mailto:hello@studioplatform.cz?subject=Chci%20probrat%20projekt">Probrat projekt ↗</a>
        </div>
      </section>

      <footer className="site-footer shell">
        <div className="brand"><span className="brand-mark">SP</span><span>Studio Platform</span></div>
        <p>Product systems for real operations.</p>
        <span>© {new Date().getFullYear()}</span>
      </footer>
    </main>
  );
}
