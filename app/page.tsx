import Link from "next/link";
import { SiteFooter, SiteHeader } from "../components/site-chrome";

const capabilities = [
  {
    index: "01",
    title: "Weby, které prodávají myšlenku",
    text: "Ne katalog sekcí. Jasná pozice, silný první dojem a cesta k akci bez tření.",
  },
  {
    index: "02",
    title: "Interní systémy",
    text: "Místo tabulek, přepisování a improvizace vznikne jedno místo, které odpovídá reálnému provozu.",
  },
  {
    index: "03",
    title: "Portály a digitální produkty",
    text: "Produkty pro zákazníky, zaměstnance i partnery — navržené tak, aby se daly pochopit bez školení.",
  },
  {
    index: "04",
    title: "Education",
    text: "Výukové produkty, školní nástroje a prostředí, kde technologie učiteli ubírá práci místo toho, aby ji přidávala.",
  },
];

const method = [
  { index: "01", title: "Pochopit", text: "Nejdřív proces, lidi, data a skutečný problém." },
  { index: "02", title: "Postavit", text: "Pak teprve rozhraní, logiku a produkt." },
  { index: "03", title: "Ověřit", text: "Nakonec provoz, data a důkaz, že to opravdu funguje." },
];

export default function Home() {
  return (
    <main>
      <SiteHeader />

      <section className="home-hero" id="top">
        <div className="shell home-hero-inner">
          <div className="home-hero-meta" aria-label="Knozi zaměření">
            <span>Digital products / web / systems</span>
            <span>Prague · CZ / works everywhere</span>
          </div>

          <div className="home-hero-grid">
            <div className="home-hero-copy">
              <h1>
                Váš problém
                <br />
                <em>může být složitý.</em>
                <br />
                <span>Výsledek nesmí.</span>
              </h1>

              <div className="home-hero-bottom">
                <p>
                  Navrhujeme weby, aplikace a interní systémy, které lidé pochopí
                  dřív, než začnou hledat návod.
                </p>
                <div className="home-hero-actions">
                  <Link className="button button-primary" href="/kontakt">
                    Ukažte nám problém ↗
                  </Link>
                  <Link className="home-text-link" href="#work">
                    Vybraná práce ↓
                  </Link>
                </div>
              </div>
            </div>

            <div className="chaos-stage" aria-hidden="true">
              <div className="stage-grid" />
              <div className="chaos-card chaos-card-a">
                <span>EXCEL</span>
                <strong>final_v7_oprava.xlsx</strong>
                <i>37 listů · 4 majitelé</i>
              </div>
              <div className="chaos-card chaos-card-b">
                <span>MAIL</span>
                <strong>Re: Re: Re: objednávka</strong>
                <i>+ 18 dalších vláken</i>
              </div>
              <div className="chaos-card chaos-card-c">
                <span>TODO</span>
                <strong>Přepsat ručně</strong>
                <i>„hlavně na to nezapomeň“</i>
              </div>

              <div className="system-card">
                <div className="system-card-top">
                  <span>KNOZI / LIVE</span>
                  <span className="system-status">● READY</span>
                </div>
                <div className="system-card-title">Jeden systém.</div>
                <div className="system-card-ui">
                  <div>
                    <span />
                    <span />
                    <span />
                  </div>
                  <strong>12 481</strong>
                  <small>záznamů pod kontrolou</small>
                </div>
                <div className="system-card-flow">
                  <span>INPUT</span>
                  <b>→</b>
                  <span>LOGIKA</span>
                  <b>→</b>
                  <span>HOTOVO</span>
                </div>
              </div>

              <div className="stage-caption">
                <span>CHAOS</span>
                <b>→</b>
                <span className="stage-caption-knozi">KNOZI</span>
                <b>→</b>
                <span>FUNKČNÍ PRODUKT</span>
              </div>
            </div>
          </div>
        </div>

        <div className="home-marquee" aria-hidden="true">
          <div>
            <span>WEB</span><i>✳</i><span>PRODUCT</span><i>✳</i><span>SYSTEM</span><i>✳</i>
            <span>EDUCATION</span><i>✳</i><span>WEB</span><i>✳</i><span>PRODUCT</span><i>✳</i>
            <span>SYSTEM</span><i>✳</i><span>EDUCATION</span><i>✳</i>
          </div>
        </div>
      </section>

      <section className="home-proof shell" id="work">
        <div className="home-proof-heading">
          <span className="kicker">01 / Důkaz místo pitch decku</span>
          <h2>
            CK Pragotour.
            <br />
            <em>Z provozního chaosu jeden systém.</em>
          </h2>
        </div>

        <div className="home-proof-grid">
          <div className="home-proof-copy">
            <p>
              Katalog, poptávky, objednávky, finance, dokumenty a platby účastníků
              v jednom provozním produktu.
            </p>
            <Link className="button button-secondary" href="/case-studies/ck-pragotour">
              Otevřít case study ↗
            </Link>
          </div>

          <div className="home-proof-board">
            <div className="proof-board-head">
              <span>PROJECT / 001</span>
              <span>CK PRAGOTOUR</span>
            </div>
            <div className="proof-board-metric proof-board-main">
              <strong>2 204</strong>
              <span>legacy záznamů migrováno</span>
            </div>
            <div className="proof-board-metric">
              <strong>01</strong>
              <span>provozní systém</span>
            </div>
            <div className="proof-board-metric">
              <strong>LIVE</strong>
              <span>reálný provoz, ne koncept</span>
            </div>
          </div>
        </div>
      </section>

      <section className="home-capabilities">
        <div className="shell">
          <div className="home-section-intro">
            <span className="kicker">02 / Co děláme</span>
            <h2>Nejsme „firma na weby“.<br />Stavíme věci, které mají něco změnit.</h2>
          </div>

          <div className="home-capability-list">
            {capabilities.map((capability) => (
              <article className="home-capability" key={capability.index}>
                <span>{capability.index}</span>
                <h3>{capability.title}</h3>
                <p>{capability.text}</p>
                <i aria-hidden="true">↗</i>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="home-method" id="method">
        <div className="shell">
          <div className="home-section-intro home-section-intro-inverse">
            <span className="kicker">03 / Jak pracujeme</span>
            <h2>Tři kroky. Žádné procesní divadlo.</h2>
          </div>

          <div className="home-method-grid">
            {method.map((step) => (
              <article key={step.index}>
                <span>{step.index}</span>
                <h3>{step.title}</h3>
                <p>{step.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="home-closing">
        <div className="shell home-closing-inner">
          <span className="kicker">Máte problém, který už nejde zalepit další tabulkou?</span>
          <h2>
            Ukažte nám ho.
            <br />
            <em>My začneme otázkami.</em>
          </h2>
          <Link className="button home-closing-button" href="/kontakt">
            Probrat projekt ↗
          </Link>
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}
