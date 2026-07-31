import type { Metadata } from "next";
import "./globals.css";
import "./routes.css";
import "./i18n.css";

export const metadata: Metadata = {
  title: "Studio Platform — Product systems for real operations",
  description:
    "Studio Platform designs and builds operational software, client portals and internal systems for organisations that have outgrown spreadsheets and disconnected tools.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
