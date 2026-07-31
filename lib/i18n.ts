export const locales = ["en", "cs"] as const;

export type Locale = (typeof locales)[number];

export const defaultLocale: Locale = "en";

export const localeLabels: Record<Locale, string> = {
  en: "English",
  cs: "Čeština",
};

const routeMap = {
  home: { en: "/", cs: "/cs" },
  services: { en: "/services", cs: "/cs/sluzby" },
  method: { en: "/#method", cs: "/cs#method" },
  caseStudy: {
    en: "/case-studies/ck-pragotour",
    cs: "/cs/pripadove-studie/ck-pragotour",
  },
  contact: { en: "/contact", cs: "/cs/kontakt" },
} as const satisfies Record<string, Record<Locale, string>>;

export type RouteKey = keyof typeof routeMap;

export function localizedHref(locale: Locale, route: RouteKey): string {
  return routeMap[route][locale];
}

export function alternateLocale(locale: Locale): Locale {
  return locale === "en" ? "cs" : "en";
}
