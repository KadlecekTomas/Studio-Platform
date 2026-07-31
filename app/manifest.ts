import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Studio Platform",
    short_name: "Studio Platform",
    description: "Product systems for real operations.",
    start_url: "/",
    display: "standalone",
    background_color: "#f5f3eb",
    theme_color: "#b8d94f",
    lang: "en",
  };
}
