import Link from "next/link";

export function SiteHeader() {
  return (
    <header className="site-header shell">
      <Link className="brand" href="/" aria-label="Studio Platform domů">
        <span className="brand-mark" aria-hidden="true">SP</span>
        <span>Studio Platform</span>
      </Link>
      <nav aria-label="Hlavní navigace">
        <Link href="/sluzby">Služby</Link>
        <Link href="/#method">Metoda</Link>
        <Link href="/case-studies/ck-pragotour">Case study</Link>
        <Link className="nav-cta" href="/kontakt">Probrat projekt</Link>
      </nav>
    </header>
  );
}

export function SiteFooter() {
  return (
    <footer className="site-footer shell">
      <Link className="brand" href="/">
        <span className="brand-mark">SP</span>
        <span>Studio Platform</span>
      </Link>
      <p>Product systems for real operations.</p>
      <span>© {new Date().getFullYear()}</span>
    </footer>
  );
}
