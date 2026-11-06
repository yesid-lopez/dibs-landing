import type { Metadata, Viewport } from "next";
import { Bricolage_Grotesque, Caveat, Inter } from "next/font/google";
import "./globals.css";

import { JsonLd } from "@/components/json-ld";
import { getDefaultMetadata, getSiteJsonLd } from "@/lib/seo";
import { site } from "@/lib/site";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const bricolage = Bricolage_Grotesque({
  variable: "--font-bricolage",
  subsets: ["latin"],
});

const caveat = Caveat({
  variable: "--font-caveat",
  subsets: ["latin"],
  weight: ["600", "700"],
});

export const metadata: Metadata = getDefaultMetadata();

export const viewport: Viewport = {
  themeColor: "#fbf7ef",
  colorScheme: "light",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang={site.language}>
      <body
        className={`${inter.variable} ${bricolage.variable} ${caveat.variable} font-sans antialiased`}
      >
        <JsonLd data={getSiteJsonLd()} />
        {children}
      </body>
    </html>
  );
}
