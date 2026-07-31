import type { Metadata } from "next";
import { ProjectEnquiryForm } from "../../components/project-enquiry-form";
import { SiteFooter, SiteHeader } from "../../components/site-chrome";

export const metadata: Metadata = {
  title: "Probrat projekt | Studio Platform",
  description: "Kvalifikovaná poptávka pro interní systémy, portály a provozní software.",
};

export default function ContactPage() {
  return (
    <main>
      <SiteHeader />
      <section className="contact-hero shell">
        <div className="eyebrow"><span /> Nový projekt</div>
        <h1 className="page-title">Nejdřív<br /><em>pochopit.</em></h1>
        <div className="contact-intro">
          <p>Nejlepší první krok není cenová nabídka naslepo. Potřebujeme pochopit současný proces, riziko, rozhodovatele a výsledek, který má software vytvořit.</p>
          <aside>
            <strong>Dáváme smysl, když</strong>
            <ul>
              <li>provoz přerostl tabulky a e-maily,</li>
              <li>více rolí pracuje nad stejnými daty,</li>
              <li>chyby nebo ruční práce stojí čas a peníze,</li>
              <li>potřebujete partnera pro návrh i realizaci.</li>
            </ul>
          </aside>
        </div>
      </section>

      <section className="contact-section shell">
        <div className="form-heading">
          <span className="kicker">Project enquiry / 01</span>
          <h2>Dejte nám kontext,<br />ne jen seznam funkcí.</h2>
        </div>
        <ProjectEnquiryForm />
      </section>
      <SiteFooter />
    </main>
  );
}
