import type { MetadataRoute } from "next";
import { absoluteUrl } from "../lib/seo";

const routes = [
  { path: "/", priority: 1, changeFrequency: "weekly" },
  { path: "/cs", priority: 1, changeFrequency: "weekly" },
  { path: "/services", priority: 0.9, changeFrequency: "monthly" },
  { path: "/cs/sluzby", priority: 0.9, changeFrequency: "monthly" },
  { path: "/contact", priority: 0.8, changeFrequency: "yearly" },
  { path: "/cs/kontakt", priority: 0.8, changeFrequency: "yearly" },
  { path: "/case-studies/ck-pragotour", priority: 0.8, changeFrequency: "monthly" },
  { path: "/cs/pripadove-studie/ck-pragotour", priority: 0.8, changeFrequency: "monthly" },
  { path: "/sluzby/discovery-sprint", priority: 0.7, changeFrequency: "monthly" },
  { path: "/sluzby/core-build", priority: 0.7, changeFrequency: "monthly" },
  { path: "/sluzby/growth-retainer", priority: 0.7, changeFrequency: "monthly" },
] as const;

export default function sitemap(): MetadataRoute.Sitemap {
  return routes.map((route) => ({
    url: absoluteUrl(route.path).toString(),
    changeFrequency: route.changeFrequency,
    priority: route.priority,
  }));
}
