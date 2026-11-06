import Image from "next/image";

import { site } from "@/lib/site";

const badges = {
  dark: "/images/appstore/Download_on_the_App_Store_Badge_US-UK_RGB_blk_092917.svg",
  light: "/images/appstore/Download_on_the_App_Store_Badge_US-UK_RGB_wht_092917.svg",
};

export function AppStoreBadge({ tone = "dark" }: { tone?: "dark" | "light" }) {
  return (
    <a
      href={site.appStoreUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-block transition-transform duration-300 hover:scale-[1.03] active:scale-[0.97]"
    >
      <Image
        src={badges[tone]}
        alt={`Download ${site.name} on the App Store`}
        width={180}
        height={60}
        className="h-[52px] w-auto"
      />
    </a>
  );
}
