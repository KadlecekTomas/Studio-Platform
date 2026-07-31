import Link from "next/link";
import { alternateLocale, localeLabels, localizedHref, type Locale } from "../lib/i18n";

const copy = {
  en: {
    homeLabel: "Studio Platform home",
    navigationLabel: "Primary navigation",
    services: "Services",
    method: "Method",
    caseStudy: "Case study",
    contact: "Discuss a project",
    footer: "Product systems for real operations.",
    switchLabel: "Switch language to Czech",
  },
  cs: {
    homeLabel: "Studio Platform domů",
    navigationLabel: "Hlavní navigace",
    services: "Služby",
    method: "Metoda",
    caseStudy: "Případová studie",
    contact: "Probrat projekt",
    footer: "Produktové systémy pro skutečný provoz.",
    switchLabel: "Přepnout jazyk do angličtiny",
  },
} as const;

export function SiteHeader({ locale = "cs" }: { locale?: Locale }) {
  const text = copy[locale];
  const targetLocale = alternateLocale(locale);

  return (
    <header className="site-header shell">
      <Link className="brand" href={localizedHref(locale, "home")} aria-label={text.homeLabel}>
        <span className="brand-mark" aria-hidden="true">SP</span>
        <span>Studio Platform</span>
      </Link>
      <nav aria-label={text.navigationLabel}>
        <Link href={localizedHref(locale, "services")}>{text.services}</Link>
        <Link href={localizedHref(locale, "method")}>{text.method}</Link>
        <Link href={localizedHref(locale, "caseStudy")}>{text.caseStudy}</Link>
        <Link href={localizedHref(targetLocale, "home")} hrefLang={targetLocale} lang={targetLocale} aria-label={text.switchLabel}>
          {localeLabels[targetLocale]}
        </Link>
        <Link className="nav-cta" href={localizedHref(locale, "contact")}>{text.contact}</Link>
      </nav>
    </header>
  );
}

export function SiteFooter({ locale = "cs" }: { locale?: Locale }) {
  return (
    <footer className="site-footer shell">
      <Link className="brand" href={localizedHref(locale, "home")}>
        <span className="brand-mark">SP</span>
        <span>Studio Platform</span>
      </Link>
      <p>{copy[locale].footer}</p>
      <span>© {new Date().getFullYear()}</span>
    </footer>
  );
}
