import Image from "next/image";
import Link from "next/link";

import { navLinks, site } from "@/lib/site";

/** Apple's standard licence, used until the app has its own terms. */
const APPLE_EULA = "https://www.apple.com/legal/internet-services/itunes/dev/stdeula/";

const legalLinks = [
  { href: "/privacy", label: "Privacy Policy", external: false },
  { href: APPLE_EULA, label: "Terms of Use (EULA)", external: true },
];

const homeLinks = [
  { href: "#couples", label: "Chore app for couples" },
  { href: "#roommates", label: "Chore chart for roommates" },
  { href: "#families", label: "Family chore tracker" },
];

export function Footer() {
  return (
    <footer className="relative overflow-hidden bg-[#141415] text-paper">
      <div className="relative z-20 mx-auto max-w-7xl px-6 pt-14 md:px-12">
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-5">
          <div className="sm:col-span-2">
            <Link href="/" className="group mb-5 flex items-center gap-2.5">
              <Image
                src="/images/logo-dark.png"
                alt=""
                width={32}
                height={32}
                className="h-8 w-8 rounded-xl"
              />
              <span className="font-display text-xl font-extrabold">
                {site.name}
              </span>
            </Link>
            <p className="max-w-xs text-sm leading-relaxed text-paper/50">
              {site.tagline}. Shared chores, voice tasks, points and rewards for
              couples, roommates and families on iPhone.
            </p>
          </div>

          <FooterColumn title="App">
            {navLinks.map((link) => (
              <FooterLink key={link.href} href={link.href}>
                {link.label}
              </FooterLink>
            ))}
            <FooterLink href="#faq">FAQ</FooterLink>
          </FooterColumn>

          <FooterColumn title="For">
            {homeLinks.map((link) => (
              <FooterLink key={link.href} href={link.href}>
                {link.label}
              </FooterLink>
            ))}
          </FooterColumn>

          <FooterColumn title="More">
            {legalLinks.map((link) =>
              link.external ? (
                <FooterLink key={link.label} href={link.href} external>
                  {link.label}
                </FooterLink>
              ) : (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-paper/50 transition-colors hover:text-paper"
                  >
                    {link.label}
                  </Link>
                </li>
              ),
            )}
            <FooterLink href={`mailto:${site.supportEmail}`}>Support</FooterLink>
            <FooterLink href={site.appStoreUrl} external>
              App Store page
            </FooterLink>
          </FooterColumn>
        </div>

        <div className="relative mt-12 h-24 overflow-hidden sm:h-32 lg:h-44">
          <p
            aria-hidden="true"
            className="absolute bottom-[-0.75rem] select-none font-display text-[3.5rem] font-extrabold leading-none tracking-tighter text-paper/[0.07] sm:bottom-[-1rem] sm:text-[5rem] lg:bottom-[-2.5rem] lg:text-[11rem]"
          >
            dibs!
          </p>
          <p className="absolute bottom-6 right-0 max-w-[220px] text-right font-hand text-xl leading-snug text-paper/40 sm:bottom-10">
            Made for homes where someone always says “I&apos;ll do it later”.
          </p>
        </div>

        <div className="flex flex-col items-center justify-between gap-3 border-t border-paper/10 py-5 sm:flex-row">
          <p className="text-xs text-paper/40">
            &copy; {new Date().getFullYear()} {site.company}. All rights
            reserved. iPhone and iCloud are trademarks of Apple Inc.
          </p>
          <div className="flex items-center gap-1.5 text-sm font-bold">
            <span className="text-sage">share it,</span>
            <span className="text-butter">call</span>
            <span className="text-tomato">dibs</span>
          </div>
        </div>
      </div>
    </footer>
  );
}

function FooterColumn({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div>
      <p className="mb-4 font-display text-lg font-bold">{title}</p>
      <ul className="space-y-3">{children}</ul>
    </div>
  );
}

function FooterLink({
  href,
  external = false,
  children,
}: {
  href: string;
  external?: boolean;
  children: React.ReactNode;
}) {
  return (
    <li>
      <a
        href={href}
        {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
        className="text-sm text-paper/50 transition-colors hover:text-paper"
      >
        {children}
      </a>
    </li>
  );
}
