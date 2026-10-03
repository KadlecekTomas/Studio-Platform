import type { Metadata } from "next";
import "./globals.css";
import "./routes.css";

export const metadata: Metadata = {
  title: "Knozi — weby, aplikace a systémy, které dávají smysl",
  description:
    "Knozi navrhuje a staví weby, digitální produkty a interní systémy, které lidé pochopí bez návodu.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="cs">
      <body>{children}</body>
    </html>
  );
}
