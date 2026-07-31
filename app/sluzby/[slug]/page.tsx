import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { SiteFooter, SiteHeader } from "../../../components/site-chrome";

const services = {
  "discovery-sprint": {
    index: "01",
    title: "Discovery Sprint",
    subtitle: "Rozhodnutí před implementací.",
    price: "od 35 000 Kč",
    duration: "1–3 týdny",
    suitable: ["provoz je roztříštěný mezi tabulky, e-maily a lidi", "není jasné, co má být v první verzi", "potřebujete podklad pro rozpočet a rozhodnutí"],
    outputs: ["mapa současného a cílového workflow", "role, oprávnění a kritické business stavy", "rizika, předpoklady a otevřené otázky", "prioritizovaný scope a realizační roadmapa", "doporučení dalšího komerčního kroku"],
    excluded: ["produkční implementace", "garance ceny řešení bez ověřených vstupů", "grafický redesign bez vazby na provoz"],
  },
  "core-build": {
    index: "02",
    title: "Core Build",
    subtitle: "Provozně použitelný produkt.",
    price: "typicky od 100 000 Kč",
    duration: "od 6 týdnů",
    suitable: ["scope má vlastníka a známý business výsledek", "řešení propojuje více rolí, dat nebo workflow", "potřebujete partnera pro návrh, vývoj i verifikaci"],
    outputs: ["architektura a implementační plán", "průběžně nasaditelné produktové inkrementy", "automatizované testy kritických cest", "provozní dokumentace a bezpečné předání", "launch gate a plán následné péče"],
    excluded: ["neomezený scope za fixní cenu", "rychlé zásahy do cizího systému bez auditu", "produkce bez odpovědného vlastníka a rollbacku"],
  },
  "growth-retainer": {
    index: "03",
    title: "Growth Retainer",
    subtitle: "Produkt, který nezůstane stát.",
    price: "dle kapacity a odpovědnosti",
    duration: "měsíční spolupráce",
    suitable: ["produkt už používají skuteční lidé", "potřebujete pravidelně prioritizovat změny", "stabilita, bezpečnost a rychlost mají jednoho partnera"],
    outputs: ["pravidelný provozní a produktový review", "prioritizovaný backlog podle evidence", "maintenance, dependency a security práce", "měření výsledků a řízené experimenty", "transparentní kapacita, rozhodnutí a rizika"],
    excluded: ["neřízený seznam ad-hoc požadavků", "24/7 pohotovost bez samostatné dohody", "odpovědnost bez přístupu k potřebným datům a systémům"],
  },
} as const;

type ServiceSlug = keyof typeof services;

export function generateStaticParams() {
  return Object.keys(services).map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const service = services[slug as ServiceSlug];
  if (!service) return {};
  return { title: `${service.title} | Studio Platform`, description: service.subtitle };
}

export default async function ServiceDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const service = services[slug as ServiceSlug];
  if (!service) notFound();

  return (
    <main>
      <SiteHeader />
      <section className="service-detail-hero shell">
        <div className="eyebrow"><span /> Služba / {service.index}</div>
        <h1 className="page-title">{service.title.split(" ")[0]}<br /><em>{service.title.split(" ").slice(1).join(" ")}.</em></h1>
        <div className="service-detail-lead">
          <p>{service.subtitle}</p>
          <dl>
            <div><dt>Investice</dt><dd>{service.price}</dd></div>
            <div><dt>Časování</dt><dd>{service.duration}</dd></div>
          </dl>
        </div>
      </section>

      <section className="section shell service-detail-grid">
        <div><span className="kicker">Dává smysl, když</span><h2>Správný vstupní bod.</h2></div>
        <ol>{service.suitable.map((item) => <li key={item}>{item}</li>)}</ol>
      </section>

      <section className="method service-output-section">
        <div className="shell">
          <div className="section-heading inverse-simple"><span className="kicker">Konkrétní výstupy</span><h2>Co po spolupráci skutečně zůstane.</h2></div>
          <div className="service-output-grid">{service.outputs.map((item, index) => <div key={item}><span>{String(index + 1).padStart(2, "0")}</span><strong>{item}</strong></div>)}</div>
        </div>
      </section>

      <section className="section shell service-boundaries">
        <div><span className="kicker">Hranice nabídky</span><h2>Co do této služby nepatří.</h2></div>
        <ul>{service.excluded.map((item) => <li key={item}>{item}</li>)}</ul>
      </section>

      <section className="closing">
        <div className="shell closing-inner">
          <span className="kicker">Odpovídá to vašemu problému?</span>
          <h2>Pošlete kontext.<br />Ověříme fit.</h2>
          <Link className="button button-light" href={`/kontakt?source=${slug}`}>Probrat {service.title} ↗</Link>
        </div>
      </section>
      <SiteFooter />
    </main>
  );
}
