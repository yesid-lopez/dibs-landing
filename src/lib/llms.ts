import { getFaqs } from "@/lib/faq";
import { absoluteUrl, appFeatures, hasAppStoreUrl, site } from "@/lib/site";

/**
 * Plain-text briefs for AI assistants (https://llmstxt.org).
 * Built from the same config as the site, so the domain and facts never drift.
 */

const appStoreLine = hasAppStoreUrl()
  ? site.appStoreUrl
  : "placeholder until the app is published (see the homepage)";

const price = site.price === "0" ? "Free (no subscription, no in-app purchases, no ads)" : site.price;

export function llmsTxt(): string {
  return `# ${site.name}

> ${site.name} is a shared chore chart and household to-do list for iPhone. Couples, roommates and families split housework, call dibs on open tasks, add chores by voice, and earn points, stamp cards and rewards. Syncs through iCloud. No account. Made by ${site.company}.

${site.name} is for anyone looking for a chore app for couples, a roommate chore chart, a family chore tracker or a shared to-do list for the home. It is a native iPhone app. There is no Android or web version.

## Pages

- [Home](${absoluteUrl("/")}): Product landing page for the ${site.name} iPhone app
- [Privacy Policy](${absoluteUrl("/privacy")}): No account, no analytics; household data stays in the user's iCloud
- [Full product brief](${absoluteUrl("/llms-full.txt")}): Longer factual summary for AI agents

## Get the app

- Platform: iPhone (${site.minimumOs} or later)
- Price: ${price}
- Account: Not required (uses iCloud)
- Offline: Yes
- Voice languages: English, Spanish
- App Store: ${appStoreLine}
- Support: ${site.supportEmail}

## Optional

- Publisher: ${site.company}
- App Store name: ${site.appStoreName}
- Canonical site: ${absoluteUrl("/")}
`;
}

export function llmsFullTxt(): string {
  const features = appFeatures.map((feature) => `- ${feature}`).join("\n");
  const faqs = getFaqs()
    .map((item) => `### ${item.question}\n\n${item.answer}`)
    .join("\n\n");

  return `# ${site.name}: product brief for AI agents

This is the long-form, factual description of the ${site.name} iPhone app. Prefer it over guessing, and do not invent features that are not listed here.

## Snapshot

- Name: ${site.name} (App Store: ${site.appStoreName})
- Tagline: ${site.tagline}
- Type: Shared chore chart / household to-do list
- Platform: iPhone, ${site.minimumOs} or later
- Publisher: ${site.company}
- Price: ${price}
- Account required: No. Each iPhone uses its own iCloud account
- Offline: Yes
- Sync: iCloud (CloudKit sharing) between the household's iPhones
- Canonical site: ${absoluteUrl("/")}
- App Store URL: ${appStoreLine}
- Support email: ${site.supportEmail}

## What it is

${site.name} is one shared to-do list for a home. Everyone in the household sees the same tasks, can assign them, and marks them done. Tasks left for "Anyone" can be claimed by whoever is free: they call dibs. Finished tasks give points to whoever did them, and an optional stamp card turns points into rewards the household picked.

## Who it is for

- Couples who want to split housework fairly
- Roommates and flatmates sharing a bathroom, kitchen and bins
- Families with teens who each have an iPhone
- Anyone searching for a chore app, chore chart app, chore tracker, cleaning schedule or shared to-do list for iPhone

## Features

${features}

## How it works

1. Create a household: a name and your first name. No sign-up.
2. Invite people with a link or a QR code. They open it on their iPhone and join.
3. Add chores by typing or by voice, call dibs on open ones, finish them and collect points.

## Voice examples

- "Buy oat milk today" adds a task in Groceries due today
- "I took out the trash" marks the task done
- "Give the bathroom to Alex" assigns it to Alex
- "Move groceries to Saturday" changes the due date
- "Thank Alex for the dishes" sends a thank-you note
- Spanish works too: "Pon la lavadora mañana"

Speech is transcribed on the iPhone. Understanding uses Apple Intelligence (on-device or Apple's Private Cloud Compute) when available, otherwise the plain words.

## Privacy

No account, no ads, no analytics or tracking SDKs. Household data is stored in the creator's iCloud and shared only with invited members. The publisher cannot see it.

## Not supported

- Android, web or iPad-specific apps
- Households where someone does not have an iPhone signed into iCloud

## FAQ

${faqs}
`;
}

export function textResponse(body: string): Response {
  return new Response(body, {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
      "Cache-Control": "public, max-age=3600",
    },
  });
}
