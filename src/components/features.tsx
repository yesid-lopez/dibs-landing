"use client";

import { motion } from "framer-motion";
import {
  BellRing,
  CalendarClock,
  Hand,
  House,
  Repeat,
  WifiOff,
  type LucideIcon,
} from "lucide-react";

const features: {
  title: string;
  description: string;
  icon: LucideIcon;
  tone: string;
}[] = [
  {
    title: "One shared list",
    description:
      "Everyone in the house sees the same chores. Changes sync between iPhones through iCloud, so the list is right on every phone.",
    icon: House,
    tone: "bg-sage",
  },
  {
    title: "Call dibs",
    description:
      "Give a task to someone, or leave it for Anyone and let whoever is free claim it. No more “I thought you were doing it”.",
    icon: Hand,
    tone: "bg-tomato",
  },
  {
    title: "Repeating chores",
    description:
      "Every day, week, 2 weeks, month or your own interval. The next one is counted from the day it was actually done.",
    icon: Repeat,
    tone: "bg-butter",
  },
  {
    title: "Next up",
    description:
      "Your most urgent task sits at the top. Filter by Mine or All, and by today, this week or this month.",
    icon: CalendarClock,
    tone: "bg-sky",
  },
  {
    title: "Gentle reminders",
    description:
      "A nudge at your time for tasks due today, plus a heads-up when someone gives you a task or says thanks.",
    icon: BellRing,
    tone: "bg-lilac",
  },
  {
    title: "Works offline",
    description:
      "Every phone keeps its own copy, so the list opens instantly and works on the train. It syncs when you are back.",
    icon: WifiOff,
    tone: "bg-paper-300",
  },
];

export function Features() {
  return (
    <section id="features" className="relative overflow-hidden bg-white py-16 lg:py-24">
      <div className="relative mx-auto grid max-w-7xl items-start gap-12 px-4 sm:px-6 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="lg:sticky lg:top-28"
        >
          <span className="text-sm font-bold uppercase tracking-wider text-tomato-700">
            Features
          </span>
          <h2 className="mt-3 font-display text-3xl font-extrabold tracking-tight text-ink sm:text-4xl lg:text-5xl">
            A chore app the whole house{" "}
            <span className="font-hand text-[1.15em] text-tomato-600">actually</span>{" "}
            uses
          </h2>
          <p className="mt-4 max-w-sm text-base leading-relaxed text-ink-600">
            Simple enough for everyone at home, so the shared to-do list stays
            the one place chores live. No account to create, nothing to set up.
          </p>
        </motion.div>

        <div className="grid gap-4 sm:grid-cols-2">
          {features.map((feature, index) => (
            <motion.article
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.45, delay: (index % 2) * 0.08 }}
              className="flex flex-col gap-4 rounded-[1.75rem] bg-paper p-6"
            >
              <div
                className={`${feature.tone} flex h-14 w-14 items-center justify-center rounded-2xl`}
              >
                <feature.icon className="h-7 w-7 text-ink" strokeWidth={2.2} aria-hidden="true" />
              </div>
              <div>
                <h3 className="font-display text-2xl font-extrabold text-ink">
                  {feature.title}
                </h3>
                <p className="mt-2 text-[15px] leading-relaxed text-ink-600">
                  {feature.description}
                </p>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
