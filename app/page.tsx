import Link from "next/link";
import { SiteFooter, SiteHeader } from "../components/site-chrome";

const capabilities = [
  {
    index: "01",
    title: "Weby",
    text: "Web nemá být katalog sekcí. Musí rychle vysvětlit nabídku a dostat správného člověka k další akci.",
  },
  {
    index: "02",
    title: "Interní systémy",
    text: "Když provoz stojí na tabulkách, e-mailech, přepisování a věcech, které „někdo ví“, převedeme ho do systému odpovídajícího skutečné práci.",
  },
  {
    index: "03",
    title: "Portály a aplikace",
    text: "Produkty pro zákazníky, zaměstnance nebo partnery. Nejdřív řešíme jejich úkol. Až potom obrazovky a funkce.",
  },
  {
    index: "04",
    title: "Education",
    text: "Pro školy stavíme vlastní výukové produkty. Technologie má učiteli ubrat práci, ne vytvořit další systém, který musí spravovat.",
  },
];

const method = [
  {
    index: "01",
    title: "Pochopit",
    text: "Zjistíme, jak dnes práce skutečně probíhá, kde vzniká zbytečná práce a co má vůbec smysl měnit.",
  },
  {
    index: "02",
    title: "Postavit",
    text: "Navrhneme a vyvineme řešení kolem skutečného používání. Ne kolem seznamu obrazovek.",
  },
  {
    index: "03",
    title: "Ověřit",
    text: "Nestačí, že kód funguje. Produkt musí obstát s reálnými lidmi, daty a provozem.",
  },
];

export default function Home() {
  return (
    <main>
      <SiteHeader />

      <section className="home-hero" id="top">
        <div className="shell home-hero-inner">
          <div className="home-hero-meta" aria-label="Knozi zaměření">
            <span>Weby / aplikace / interní systémy</span>
            <span>KNOZI / Praha</span>
          </div>

          <div className="home-hero-grid">
            <div className="home-hero-copy">
              <h1>
                Váš problém
                <br />
                <em>může být složitý.</em>
                <br />
                <span>Produkt musí být jasný.</span>
              </h1>

              <div className="home-hero-bottom">
                <p>
                  Navrhujeme a stavíme weby a software pro firmy a školy.
                  Nezačínáme seznamem funkcí. Nejdřív pochopíme problém a potom
                  postavíme jen to, co ho skutečně řeší.
                </p>
                <div className="home-hero-actions">
                  <Link className="button button-primary" href="/kontakt">
                    Ukázat nám problém ↗
                  </Link>
                  <Link className="home-text-link" href="#work">
                    Podívat se na naši práci ↓
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
                  <strong>KNOZI</strong>
                  <small>od problému k produktu</small>
                </div>
                <div className="system-card-flow">
                  <span>PROBLÉM</span>
                  <b>→</b>
                  <span>ŘEŠENÍ</span>
                  <b>→</b>
                  <span>PROVOZ</span>
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
          <span className="kicker">01 / Nejdřív práce. Potom sliby.</span>
          <h2>
            CK Pragotour.
            <br />
            <em>Jeden systém pro skutečný provoz.</em>
          </h2>
        </div>

        <div className="home-proof-grid">
          <div className="home-proof-copy">
            <p>
              Katalog, poptávky, objednávky, finance, dokumenty a platby účastníků
              jsme spojili do jednoho provozního produktu.
            </p>
            <Link className="button button-secondary" href="/case-studies/ck-pragotour">
              Otevřít případovou studii ↗
            </Link>
          </div>

          <div className="home-proof-board">
            <div className="proof-board-head">
              <span>PROJECT / 001</span>
              <span>CK PRAGOTOUR</span>
            </div>
            <div className="proof-board-metric proof-board-main">
              <strong>2 204</strong>
              <span>migrovaných historických záznamů</span>
            </div>
            <div className="proof-board-metric">
              <strong>01</strong>
              <span>provozní systém</span>
            </div>
            <div className="proof-board-metric">
              <strong>LIVE</strong>
              <span>produkt v reálném provozu</span>
            </div>
          </div>
        </div>
      </section>

      <section className="home-capabilities">
        <div className="shell">
          <div className="home-section-intro">
            <span className="kicker">02 / Co děláme</span>
            <h2>Stavíme digitální produkty<br />pro konkrétní problém.</h2>
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
            <span className="kicker">03 / Od problému k provozu</span>
            <div>
              <h2>Nestačí, že kód funguje.<br />Musí fungovat i produkt.</h2>
              <p className="home-method-positioning">
                Návrh, vývoj a provoz neřešíme odděleně. Každé rozhodnutí musí dávat
                smysl člověku, který bude výsledný produkt skutečně používat.
              </p>
            </div>
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
          <span className="kicker">
            Máte proces, web nebo systém, který vás začíná brzdit?
          </span>
          <h2>
            Nezačínejte zadáním.
            <br />
            <em>Ukažte nám problém.</em>
          </h2>
          <p className="home-closing-copy">
            Popište nám, co dnes nefunguje, co děláte ručně nebo kde zbytečně
            ztrácíte čas. Technické řešení je naše práce.
          </p>
          <Link className="button home-closing-button" href="/kontakt">
            Ukázat nám problém ↗
          </Link>
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}
