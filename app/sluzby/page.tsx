import type { Metadata } from "next";
import Link from "next/link";
import { SiteFooter, SiteHeader } from "../../components/site-chrome";

export const metadata: Metadata = {
  title: "Služby | Studio Platform",
  description: "Discovery, realizace a dlouhodobý rozvoj provozně důležitého softwaru.",
};

const offers = [
  {
    index: "01",
    slug: "discovery-sprint",
    title: "Discovery Sprint",
    price: "od 35 000 Kč",
    duration: "1–3 týdny",
    text: "Zmapujeme současný provoz, rizika, role, data a ekonomiku. Výsledkem je rozhodnutelný plán, ne další neurčitá prezentace.",
  },
  {
    index: "02",
    slug: "core-build",
    title: "Core Build",
    price: "typicky od 100 000 Kč",
    duration: "od 6 týdnů",
    text: "Navrhneme a postavíme interní systém, portál nebo provozní aplikaci včetně ověření kritických workflow a bezpečného předání.",
  },
  {
    index: "03",
    slug: "growth-retainer",
    title: "Growth Retainer",
    price: "dle kapacity a odpovědnosti",
    duration: "měsíční spolupráce",
    text: "Po spuštění produkt stabilizujeme, měříme a rozvíjíme podle skutečného provozu, priorit a nových důkazů.",
  },
] as const;

export default function ServicesPage() {
  return (
    <main>
      <SiteHeader />
      <section className="offer-hero shell">
        <div className="eyebrow"><span /> Nabídka / Jak spolupracujeme</div>
        <h1 className="page-title">Kupujete<br /><em>výsledek.</em></h1>
        <div className="offer-intro">
          <p>Neprodáváme anonymní hodiny ani seznam technologií. Každá forma spolupráce má jasný účel, hranice, výstupy a rozhodnutí, které má umožnit.</p>
          <aside><strong>Princip</strong><span>Nejdřív snižujeme nejistotu. Potom teprve zvyšujeme rychlost.</span></aside>
        </div>
      </section>

      <section className="section shell offer-list">
        {offers.map((offer) => (
          <article className="offer-card" key={offer.slug}>
            <div className="offer-number">{offer.index}</div>
            <div>
              <h2>{offer.title}</h2>
              <p>{offer.text}</p>
            </div>
            <dl>
              <div><dt>Investice</dt><dd>{offer.price}</dd></div>
              <div><dt>Časování</dt><dd>{offer.duration}</dd></div>
            </dl>
            <Link className="button button-secondary" href={`/sluzby/${offer.slug}`}>Detail služby ↗</Link>
          </article>
        ))}
      </section>

      <section className="closing">
        <div className="shell closing-inner">
          <span className="kicker">Nevíte, kde začít?</span>
          <h2>Začněme problémem,<br />ne balíčkem.</h2>
          <Link className="button button-light" href="/kontakt?source=services">Popsat situaci ↗</Link>
        </div>
      </section>
      <SiteFooter />
    </main>
  );
}
