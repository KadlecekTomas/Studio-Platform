import Link from "next/link";

export function SiteHeader() {
  return (
    <header className="site-header shell">
      <Link className="brand" href="/" aria-label="Knozi domů">
        <span className="brand-mark" aria-hidden="true">K</span>
        <span>KNOZI</span>
      </Link>
      <nav aria-label="Hlavní navigace">
        <Link href="/#work">Práce</Link>
        <Link href="/sluzby">Služby</Link>
        <Link href="/#method">Metoda</Link>
        <Link className="nav-cta" href="/kontakt">Probrat projekt</Link>
      </nav>
    </header>
  );
}

export function SiteFooter() {
  return (
    <footer className="site-footer shell">
      <Link className="brand" href="/" aria-label="Knozi domů">
        <span className="brand-mark" aria-hidden="true">K</span>
        <span>KNOZI</span>
      </Link>
      <p>Weby, aplikace a systémy pro skutečný provoz.</p>
      <span>© {new Date().getFullYear()}</span>
    </footer>
  );
}
