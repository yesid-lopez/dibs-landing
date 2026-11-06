"use client";

import { motion } from "framer-motion";

const homes = [
  {
    id: "couples",
    title: "Couples",
    heading: "A chore app for couples",
    description:
      "Split the housework without keeping score in your head. See who did what this week, and say thanks for the little things.",
    note: "“Your turn” → “I called dibs”",
    bg: "bg-tomato",
  },
  {
    id: "roommates",
    title: "Roommates",
    heading: "A chore chart for roommates",
    description:
      "Trash, bathroom, groceries: put them on repeat, leave them for Anyone, and let whoever is free claim them. No group-chat nagging.",
    note: "Flatshare peace, finally",
    bg: "bg-sky",
  },
  {
    id: "families",
    title: "Families",
    heading: "A family chore tracker",
    description:
      "Everyone with an iPhone joins with a link or QR code. Teens earn points toward rewards the family agreed on together.",
    note: "Screen time? Fill your card.",
    bg: "bg-sage",
  },
];

export function MadeFor() {
  return (
    <section id="made-for" className="bg-paper py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-14 max-w-2xl"
        >
          <span className="text-sm font-bold uppercase tracking-wider text-tomato-700">
            Made for every home
          </span>
          <h2 className="mt-3 font-display text-3xl font-extrabold tracking-tight text-ink sm:text-4xl lg:text-5xl">
            However you share the place
          </h2>
        </motion.div>

        <div className="grid gap-4 md:grid-cols-3">
          {homes.map((home, index) => (
            <motion.article
              key={home.id}
              id={home.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.45, delay: index * 0.08 }}
              className={`${home.bg} flex min-h-[300px] scroll-mt-24 flex-col rounded-[1.75rem] p-7 text-ink`}
            >
              <p className="text-[12px] font-extrabold uppercase tracking-[0.18em] text-ink/60">
                {home.title}
              </p>
              <h3 className="mt-2 font-display text-2xl font-extrabold">
                {home.heading}
              </h3>
              <p className="mt-3 text-[15px] leading-relaxed text-ink-800">
                {home.description}
              </p>
              <p className="mt-auto pt-8 font-hand text-[26px] font-bold leading-tight">
                {home.note}
              </p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
