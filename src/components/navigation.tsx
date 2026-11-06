"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";

import { Button } from "@/components/ui/button";
import { navLinks, site } from "@/lib/site";

export function Navigation() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const observers = navLinks.map((link) => {
      const id = link.href.replace("#", "");
      const el = document.getElementById(id);
      if (!el) return null;
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) setActiveSection(link.href);
        },
        { rootMargin: "-40% 0px -55% 0px" }
      );
      observer.observe(el);
      return observer;
    });

    return () => observers.forEach((observer) => observer?.disconnect());
  }, []);

  return (
    <nav
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled || mobileMenuOpen
          ? "border-b border-ink/[0.08] bg-paper/90 shadow-sm shadow-ink/[0.04] backdrop-blur-xl"
          : "border-b border-transparent bg-transparent"
      }`}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-[68px] items-center justify-between">
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

          <div className="hidden items-center gap-1 md:flex">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className={`rounded-full px-4 py-2 text-[15px] font-bold tracking-tight transition-colors duration-200 ${
                  activeSection === link.href
                    ? "text-ink"
                    : "text-ink/55 hover:text-ink"
                }`}
              >
                {link.label}
              </a>
            ))}
            <div className="ml-4">
              <Button asChild variant="tomato">
                <a
                  href={site.appStoreUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <AppleIcon />
                  Get the App
                </a>
              </Button>
            </div>
          </div>

          <motion.button
            type="button"
            aria-label="Toggle menu"
            aria-expanded={mobileMenuOpen}
            className="rounded-xl p-2.5 text-ink transition-colors hover:bg-ink/5 md:hidden"
            onClick={() => setMobileMenuOpen((open) => !open)}
            whileTap={{ scale: 0.92 }}
          >
            <AnimatePresence mode="wait" initial={false}>
              <motion.span
                key={mobileMenuOpen ? "close" : "menu"}
                initial={{ rotate: mobileMenuOpen ? -90 : 90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: mobileMenuOpen ? 90 : -90, opacity: 0 }}
                transition={{ duration: 0.15 }}
                className="block"
              >
                {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
              </motion.span>
            </AnimatePresence>
          </motion.button>
        </div>

        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.25, ease: "easeInOut" }}
              className="overflow-hidden md:hidden"
            >
              <div className="border-t border-ink/[0.08] pb-5 pt-2">
                <div className="mt-3 flex flex-col gap-1">
                  {navLinks.map((link, i) => (
                    <motion.a
                      key={link.href}
                      href={link.href}
                      initial={{ opacity: 0, x: -12 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.05 + 0.1 }}
                      onClick={() => setMobileMenuOpen(false)}
                      className={`rounded-xl px-4 py-2.5 text-[15px] font-bold tracking-tight transition-colors ${
                        activeSection === link.href
                          ? "text-ink"
                          : "text-ink/55 hover:text-ink"
                      }`}
                    >
                      {link.label}
                    </motion.a>
                  ))}
                  <motion.div
                    initial={{ opacity: 0, x: -12 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.3 }}
                    className="mt-2 px-4"
                  >
                    <Button asChild variant="tomato" className="w-full">
                      <a
                        href={site.appStoreUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        <AppleIcon />
                        Get the App
                      </a>
                    </Button>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
}

function AppleIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      className="h-4 w-4 fill-current"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
    </svg>
  );
}
