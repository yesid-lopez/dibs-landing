import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

import { getPageMetadata } from "@/lib/seo";
import { site } from "@/lib/site";

export const metadata: Metadata = getPageMetadata({
  title: "Privacy Policy",
  description: site.privacyDescription,
  path: "/privacy",
});

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-paper">
      <header className="border-b border-ink/[0.08] bg-paper/90 backdrop-blur-xl">
        <div className="mx-auto flex h-[68px] max-w-4xl items-center px-4 sm:px-6 lg:px-8">
          <Link href="/" className="group flex items-center gap-2.5">
            <Image
              src="/images/logo.png"
              alt=""
              width={36}
              height={36}
              className="h-9 w-9 rounded-xl ring-1 ring-ink/10 transition-transform duration-300 group-hover:-rotate-6"
            />
            <span className="font-display text-xl font-extrabold tracking-tight text-ink">
              {site.name}
            </span>
          </Link>
        </div>
      </header>

      <main className="mx-auto max-w-4xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
        <h1 className="mb-3 font-display text-3xl font-extrabold tracking-tight text-ink sm:text-4xl">
          Privacy Policy for {site.name}
        </h1>
        <p className="mb-10 text-sm text-ink-500">
          Last updated: November 6, 2026
        </p>

        <p className="mb-10 leading-relaxed text-ink-800">
          <strong>{site.name}</strong> helps the people you live with share
          household tasks. This policy explains what the app stores, where it
          is kept, and what control you have over it. The short version: there
          is no account, no ads and no analytics, and your household&apos;s
          data lives in your own iCloud, where we cannot see it.
        </p>

        <Section title="1. What the app stores">
          <p className="mb-3 leading-relaxed text-ink-800">
            To work, {site.name} keeps the information you and your household
            enter:
          </p>
          <List
            items={[
              "The household name and each member's first name",
              "Tasks: title, who it is for, size, category, due date, repeat setting, and who finished it and when",
              "Categories, points, stamp cards and rewards",
              "Thank-you notes",
            ]}
          />
          <p className="mt-4 leading-relaxed text-ink-800">
            Some settings, such as notification times, appearance and voice
            language, are saved only on your iPhone.
          </p>
        </Section>

        <Section title="2. Where it is kept: your iCloud">
          <List
            items={[
              <>
                The household is stored with Apple&apos;s{" "}
                <strong>CloudKit</strong> in the iCloud account of the person
                who created it, and shared through iCloud only with the people
                they invite.
              </>,
              "Each iPhone also keeps a local copy so the app works offline.",
              <>
                {site.company} does not run its own servers for {site.name} and{" "}
                <strong>cannot access your household&apos;s data</strong>.
              </>,
              "Apple's handling of iCloud data is described in Apple's Privacy Policy.",
            ]}
          />
        </Section>

        <Section title="3. What we do not collect">
          <List
            items={[
              "No account, email address or phone number is required",
              "No analytics, advertising or tracking tools are built into the app",
              "No data is sold or shared with third parties",
              "No location, contacts or photos are accessed",
            ]}
          />
        </Section>

        <Section title="4. Voice input">
          <p className="mb-3 leading-relaxed text-ink-800">
            Voice is optional and only starts when you tap the microphone.
            {" "}{site.name} asks for microphone and speech recognition
            permission the first time.
          </p>
          <List
            items={[
              "Your speech is turned into text on your iPhone by Apple's speech recognition.",
              "To understand what you meant, the text may be processed by Apple Intelligence on your iPhone or by Apple's Private Cloud Compute, which Apple designed so that requests are not stored or made available to Apple.",
              "Audio recordings are not saved and are never sent to us.",
            ]}
          />
        </Section>

        <Section title="5. Notifications">
          <p className="leading-relaxed text-ink-800">
            Reminders for tasks due today, new tasks for you and thank-you
            notes are optional and can be turned off in Settings. Apple&apos;s
            push service is used to tell your iPhone when the household changes
            so it can sync.
          </p>
        </Section>

        <Section title="6. Sharing with your household">
          <p className="leading-relaxed text-ink-800">
            Everyone in a household can see and edit its tasks, categories,
            points, rewards and thank-you notes. Anyone with an invite link can
            join, so only send it to people you trust.
          </p>
        </Section>

        <Section title="7. Deleting your data">
          <List
            items={[
              "Members who joined a household can leave it from Settings.",
              "The person who created the household can delete it, which removes it and all its tasks for everyone.",
              "Deleting the app removes the local copy from your iPhone.",
              "You can also manage the app's iCloud data in your iPhone's iCloud settings.",
            ]}
          />
        </Section>

        <Section title="8. Children's privacy">
          <p className="leading-relaxed text-ink-800">
            {site.name} is a household app and is not directed at children
            under 13. We do not knowingly collect personal information from
            children. If you believe a child has provided personal information,
            contact us and we will help remove it.
          </p>
        </Section>

        <Section title="9. Changes to this policy">
          <p className="leading-relaxed text-ink-800">
            We may update this policy from time to time. Changes will be posted
            on this page with a new date.
          </p>
        </Section>

        <Section title="10. Contact us">
          <p className="mb-3 leading-relaxed text-ink-800">
            If you have questions about this Privacy Policy, contact us at:
          </p>
          <p className="leading-relaxed text-ink-800">
            <strong>Email:</strong>{" "}
            <a
              href={`mailto:${site.supportEmail}`}
              className="text-tomato-700 underline underline-offset-2 hover:text-ink"
            >
              {site.supportEmail}
            </a>
          </p>
        </Section>
      </main>

      <footer className="border-t border-ink/[0.08] bg-paper">
        <div className="mx-auto flex max-w-4xl flex-col items-center justify-between gap-3 px-4 py-6 sm:flex-row sm:px-6 lg:px-8">
          <p className="text-xs text-ink-500">
            &copy; {new Date().getFullYear()} {site.company}. All rights
            reserved.
          </p>
          <Link
            href="/"
            className="text-sm font-semibold text-tomato-700 transition-colors hover:text-ink"
          >
            &larr; Back to home
          </Link>
        </div>
      </footer>
    </div>
  );
}

function Section({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section className="mb-10">
      <h2 className="mb-4 font-display text-xl font-bold text-ink">
        {title}
      </h2>
      {children}
    </section>
  );
}

function List({ items }: { items: React.ReactNode[] }) {
  return (
    <ul className="ml-2 list-inside list-disc space-y-2 leading-relaxed text-ink-800">
      {items.map((item, i) => (
        <li key={i}>{item}</li>
      ))}
    </ul>
  );
}
