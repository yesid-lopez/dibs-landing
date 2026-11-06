import type { MetadataRoute } from "next";

import { absoluteUrl, site } from "@/lib/site";

const aiCrawlers = [
  "GPTBot",
  "ChatGPT-User",
  "Google-Extended",
  "anthropic-ai",
  "PerplexityBot",
  "ClaudeBot",
  "Applebot",
  "Applebot-Extended",
  "CCBot",
  "meta-externalagent",
] as const;

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
      },
      ...aiCrawlers.map((userAgent) => ({
        userAgent,
        allow: "/" as const,
      })),
    ],
    sitemap: absoluteUrl("/sitemap.xml"),
    host: new URL(site.url).host,
  };
}
