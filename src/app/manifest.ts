import type { MetadataRoute } from "next";

import { site } from "@/lib/site";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: site.appStoreName,
    short_name: site.name,
    description: site.description,
    start_url: "/",
    display: "browser",
    background_color: "#fbf7ef",
    theme_color: "#fbf7ef",
    icons: [
      { src: "/icon.png", sizes: "512x512", type: "image/png" },
      { src: "/apple-icon.png", sizes: "180x180", type: "image/png" },
    ],
    ...(site.appStoreId
      ? {
          related_applications: [
            { platform: "itunes", url: site.appStoreUrl, id: site.appStoreId },
          ],
          prefer_related_applications: true,
        }
      : {}),
  };
}
