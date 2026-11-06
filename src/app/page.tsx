import type { Metadata } from "next";

import { Navigation } from "@/components/navigation";
import { Hero } from "@/components/hero";
import { Features } from "@/components/features";
import { Voice } from "@/components/voice";
import { Categories } from "@/components/categories";
import { Rewards } from "@/components/rewards";
import { MadeFor } from "@/components/made-for";
import { HowItWorks } from "@/components/how-it-works";
import { Faq } from "@/components/faq";
import { DownloadCTA } from "@/components/download-cta";
import { Footer } from "@/components/footer";
import { getPageMetadata } from "@/lib/seo";
import { site } from "@/lib/site";

export const metadata: Metadata = getPageMetadata({
  title: site.title,
  description: site.description,
  path: "/",
  useTitleTemplate: false,
});

export default function Home() {
  return (
    <>
      <Navigation />
      <main>
        <Hero />
        <Features />
        <Voice />
        <Categories />
        <Rewards />
        <MadeFor />
        <HowItWorks />
        <Faq />
        <DownloadCTA />
      </main>
      <Footer />
    </>
  );
}
