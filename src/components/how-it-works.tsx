"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const steps = [
  {
    title: "Create a household",
    description:
      "Give it a name and add your first name. That's the whole setup: no account, no email, no password.",
    bg: "bg-butter",
  },
  {
    title: "Invite your people",
    description:
      "Send a link or show a QR code. They open it on their iPhone and see the same list, synced through iCloud.",
    bg: "bg-sage",
  },
  {
    title: "Call dibs",
    description:
      "Add chores by typing or talking, claim the open ones, tick them off and watch the points add up.",
    bg: "bg-tomato",
  },
];

export function HowItWorks() {
  return (
    <section id="how-it-works" className="relative overflow-hidden bg-white py-16 lg:py-24">
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mx-auto mb-16 max-w-2xl text-center"
        >
          <span className="text-sm font-bold uppercase tracking-wider text-tomato-700">
            How it works
          </span>
          <h2 className="mt-3 font-display text-3xl font-extrabold tracking-tight text-ink sm:text-4xl lg:text-5xl">
            Shared in under a minute
          </h2>
          <p className="mt-4 text-lg text-ink-600">
            Everyone needs an iPhone signed into iCloud. That&apos;s it.
          </p>
        </motion.div>

        <ol className="grid gap-4 md:grid-cols-[1fr_auto_1fr_auto_1fr] md:items-stretch">
          {steps.map((step, index) => (
            <li key={step.title} className="contents">
              {index > 0 && (
                <div
                  aria-hidden="true"
                  className="hidden items-center justify-center md:flex"
                >
                  <span className="flex h-12 w-12 items-center justify-center rounded-full bg-ink text-paper">
                    <ArrowRight className="h-5 w-5" />
                  </span>
                </div>
              )}
              <motion.article
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: index * 0.12 }}
                className={`${step.bg} flex min-h-[240px] flex-col rounded-[1.75rem] p-7 text-ink`}
              >
                <span className="font-hand text-4xl font-bold leading-none text-ink/70">
                  {index + 1}.
                </span>
                <h3 className="mt-2 font-display text-2xl font-extrabold">
                  {step.title}
                </h3>
                <p className="mt-auto pt-8 text-[15px] leading-relaxed text-ink-800">
                  {step.description}
                </p>
              </motion.article>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
