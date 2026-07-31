import type { Metadata } from "next";

export type SiteLocale = "en" | "cs";

const productionHost =
  process.env.NEXT_PUBLIC_SITE_URL ??
  process.env.VERCEL_PROJECT_PRODUCTION_URL ??
  process.env.VERCEL_URL ??
  "localhost:3000";

const productionProtocol = productionHost.startsWith("localhost") ? "http" : "https";

export const siteUrl = new URL(
  productionHost.startsWith("http") ? productionHost : `${productionProtocol}://${productionHost}`,
);

export const siteName = "Studio Platform";

const localeToOpenGraphLocale: Record<SiteLocale, string> = {
  en: "en_GB",
  cs: "cs_CZ",
};

type BuildMetadataInput = {
  title: string;
  description: string;
  path: string;
  locale: SiteLocale;
  alternates?: Partial<Record<SiteLocale, string>>;
  image?: string;
  type?: "website" | "article";
  noIndex?: boolean;
};

export function absoluteUrl(path: string): URL {
  return new URL(path, siteUrl);
}

export function buildMetadata({
  title,
  description,
  path,
  locale,
  alternates,
  image = "/opengraph-image",
  type = "website",
  noIndex = false,
}: BuildMetadataInput): Metadata {
  const canonical = absoluteUrl(path);
  const languageAlternates = alternates
    ? Object.fromEntries(
        Object.entries(alternates).map(([language, route]) => [language, absoluteUrl(route)]),
      )
    : undefined;

  return {
    title,
    description,
    metadataBase: siteUrl,
    alternates: {
      canonical,
      languages: languageAlternates
        ? { ...languageAlternates, "x-default": languageAlternates.en ?? canonical }
        : undefined,
    },
    robots: {
      index: !noIndex,
      follow: !noIndex,
      googleBot: {
        index: !noIndex,
        follow: !noIndex,
        "max-image-preview": "large",
        "max-snippet": -1,
        "max-video-preview": -1,
      },
    },
    openGraph: {
      type,
      locale: localeToOpenGraphLocale[locale],
      url: canonical,
      siteName,
      title,
      description,
      images: [{ url: absoluteUrl(image), width: 1200, height: 630, alt: title }],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [absoluteUrl(image)],
    },
  };
}
