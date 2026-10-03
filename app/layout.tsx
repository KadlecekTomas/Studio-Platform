import type { Metadata } from "next";
import "./globals.css";
import "./routes.css";

export const metadata: Metadata = {
  title: "Knozi — weby, aplikace a interní systémy pro firmy a školy",
  description:
    "Navrhujeme a stavíme weby a software pro firmy a školy. Nejdřív pochopíme problém, potom postavíme řešení pro skutečný provoz.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="cs">
      <body>{children}</body>
    </html>
  );
}
