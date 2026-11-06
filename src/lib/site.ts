export const site = {
  name: "Dibs",
  /** Matches the App Store name. Keep both in sync (see ASO.md). */
  appStoreName: "Dibs: Household Chore Chart",
  tagline: "One shared to-do list for your home",
  /** ~56 chars. Default <title> (search results + browser tab). Leads with the head keyword. */
  title: "Dibs: Shared Chore App for Couples, Roommates & Families",
  titleTemplate: "%s | Dibs",
  /**
   * ~155 chars, benefit-led. Meta description + Open Graph.
   * Only claim features that ship in the app (see `appFeatures`).
   */
  description:
    "Dibs is the shared chore chart for iPhone. Split housework with your partner, roommates or family, add tasks by voice and earn rewards. Synced with iCloud.",
  privacyDescription:
    "Privacy policy for Dibs. No account, no ads, no analytics. Your household's tasks live in your own iCloud and we cannot see them.",
  keywords: [
    "chore app",
    "chore chart app",
    "shared chore list",
    "household chores app",
    "chore app for couples",
    "roommate chore app",
    "family chore chart",
    "shared to-do list",
    "cleaning schedule app",
    "chore tracker iPhone",
    "Dibs app",
  ],
  locale: "en_US",
  language: "en",
  category: "productivity",
  /**
   * Canonical origin. Override at build time with NEXT_PUBLIC_SITE_URL.
   * TODO: replace the fallback with the real production domain.
   */
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://getdibs.app",
  /** Square app icon, used in structured data. */
  logo: "/images/app-icon.png",
  ogImageAlt: "Dibs: the shared chore chart for couples, roommates and families",
  /** TODO: replace with the real App Store listing once the app is published. */
  appStoreUrl: "#",
  /**
   * Numeric App Store ID (e.g. "1234567890").
   * Leave empty until the listing is live. Do not invent an ID.
   * The Smart App Banner (`apple-itunes-app`) is only added once this is set.
   */
  appStoreId: "",
  /** TODO: confirm the price before launch. The app has no in-app purchases. */
  price: "0",
  minimumOs: "iOS 27",
  supportEmail: "saradrada@luloai.com",
  company: "Lulo",
} as const;

export const navLinks = [
  { href: "#features", label: "Features" },
  { href: "#voice", label: "Voice" },
  { href: "#rewards", label: "Rewards" },
  { href: "#how-it-works", label: "How It Works" },
] as const;

/** Only true, countable facts. No ratings until the App Store has some. */
export const stats = [
  { value: "1", label: "Shared list" },
  { value: "2", label: "Voice languages" },
  { value: "0", label: "Sign-ups" },
] as const;

/** True feature list for structured data and AI agents. Keep it in step with the app. */
export const appFeatures = [
  "One shared chore list for the whole household, synced between iPhones with iCloud",
  "Assign a task to someone, or to Anyone so whoever is free can call dibs",
  "Due dates and a Next up banner with your most urgent task",
  "Repeating chores: every day, week, 2 weeks, month or a custom interval",
  "Categories (Kitchen, Bathroom, Laundry, Groceries, Cleaning, Outside, or your own), guessed from the title",
  "Points for finished tasks: small 1, medium 2, big 3",
  "Optional stamp cards: points fill a card and a full card earns a reward the household picked",
  "Stats: points this week and month, past weeks, awards and each person's share",
  "Thanks board for short thank-you notes",
  "Voice: add, finish, assign or move tasks and thank someone, in English or Spanish",
  "Invite with a link or QR code",
  "Reminders for tasks due today, new tasks for you and thank-you notes",
  "Works offline",
  "No account, no ads, no analytics",
] as const;

export function absoluteUrl(path = "/"): string {
  const base = site.url.replace(/\/$/, "");
  if (!path || path === "/") {
    return `${base}/`;
  }
  return `${base}${path.startsWith("/") ? path : `/${path}`}`;
}

export function hasAppStoreId(): boolean {
  return site.appStoreId.length > 0;
}

export function hasAppStoreUrl(): boolean {
  return site.appStoreUrl.startsWith("http");
}
