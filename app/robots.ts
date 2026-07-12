import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: "https://coventrymobiletyres.co.uk/sitemap.xml",
    host: "https://coventrymobiletyres.co.uk",
  };
}
