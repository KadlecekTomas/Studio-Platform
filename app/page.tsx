import type { Metadata } from "next";
import Link from "next/link";
import { SiteFooter, SiteHeader } from "../components/site-chrome";

export const metadata: Metadata = {
  title: "Studio Platform — Product systems for real operations",
  description: "We design and build internal systems, client portals and automation for organisations that have outgrown spreadsheets and disconnected tools.",
  alternates: {
    canonical: "/",
    languages: { en: "/", cs: "/cs", "x-default": "/" },
  },
};

const services = [
  { index: "01", title: "Discovery Sprint", text: "We uncover the workflow, risks, data and economics before expensive implementation begins." },
  { index: "02", title: "Core Build", text: "We design and build internal systems, client portals, administration tools and operational applications." },
  { index: "03", title: "Growth Retainer", text: "After launch, we measure, stabilise and evolve the system around real operational evidence." },
];

const process = ["Understand", "Validate", "Design", "Build", "Verify", "Launch", "Improve"];

export default function Home() {
  return (
    <main>
      <SiteHeader locale="en" />
      <section className="hero shell" id="top">
        <div className="eyebrow"><span /> Product studio for operationally critical software</div>
        <h1>Less chaos.<br /><em>More system.</em></h1>
        <div className="hero-grid">
          <p className="hero-copy">We design and build internal systems, portals and automation for organisations that have outgrown spreadsheets, email and disconnected tools.</p>
          <div className="hero-actions">
            <Link className="button button-primary" href="/contact">Start a Discovery Sprint</Link>
            <Link className="button button-secondary" href="/case-studies/ck-pragotour">Explore the case study</Link>
          </div>
        </div>
        <div className="signal" aria-label="Core principles">
          <span>Business workflow</span><span>Evidence-based delivery</span><span>Design with character</span><span>Safe launch</span>
        </div>
      </section>

      <section className="section shell" id="services">
        <div className="section-heading"><span className="kicker">How an engagement begins</span><h2>We do not sell hours.<br />We solve an operational problem.</h2></div>
        <div className="service-list">
          {services.map((service) => <article className="service" key={service.index}><span className="service-index">{service.index}</span><h3>{service.title}</h3><p>{service.text}</p><span className="service-arrow" aria-hidden="true">↗</span></article>)}
        </div>
      </section>

      <section className="method" id="method">
        <div className="shell method-inner">
          <div className="section-heading inverse"><span className="kicker">Studio Platform Method</span><h2>Every phase must create a decision or evidence.</h2><p>Development does not begin with a list of screens. It begins with people, workflows, data and risk. Working code is not automatically a finished product.</p></div>
          <ol className="process" aria-label="Seven stages of the delivery process">{process.map((step, index) => <li key={step}><span>{String(index + 1).padStart(2, "0")}</span><strong>{step}</strong></li>)}</ol>
        </div>
      </section>

      <section className="section shell proof" id="proof">
        <div className="proof-intro"><span className="kicker">Evidence over promises</span><h2>CK Pragotour</h2><p>A complex operational system for a travel company: catalogue, enquiries, orders, finance, documents, participant payments and administration.</p><Link className="text-link" href="/case-studies/ck-pragotour">Open the case study ↗</Link></div>
        <div className="proof-panel"><div className="proof-label">PROJECT / 001</div><div className="proof-metric"><strong>2,204</strong><span>legacy records migrated</span></div><div className="proof-metric"><strong>Immutable</strong><span>business snapshots</span></div><div className="proof-metric"><strong>Evidence</strong><span>tests tied to commit and environment</span></div><div className="proof-note">Public claims must remain connected to a verifiable source or explicit client confirmation.</div></div>
      </section>

      <section className="closing"><div className="shell closing-inner"><span className="kicker">Is your current system slowing operations down?</span><h2>Let us first determine<br />what is worth building.</h2><Link className="button button-light" href="/contact">Discuss a project ↗</Link></div></section>
      <SiteFooter locale="en" />
    </main>
  );
}
