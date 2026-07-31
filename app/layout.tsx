import type { Metadata } from "next";
import { siteName, siteUrl } from "../lib/seo";
import "./globals.css";
import "./routes.css";
import "./i18n.css";

export const metadata: Metadata = {
  metadataBase: siteUrl,
  applicationName: siteName,
  title: {
    default: "Studio Platform — Product systems for real operations",
    template: "%s | Studio Platform",
  },
  description:
    "Studio Platform designs and builds operational software, client portals and internal systems for organisations that have outgrown spreadsheets and disconnected tools.",
  manifest: "/manifest.webmanifest",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
