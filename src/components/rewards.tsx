"use client";

import { motion } from "framer-motion";
import { Check, Clock, Flame, Gift, Heart, Trophy, type LucideIcon } from "lucide-react";

const sizes = [
  { name: "Small", points: 1, example: "Buy bread" },
  { name: "Medium", points: 2, example: "Fold the laundry" },
  { name: "Big", points: 3, example: "Deep-clean the bathroom" },
];

const rewardIdeas = [
  "Pick the movie",
  "Breakfast in bed",
  "Skip one chore",
  "Choose dinner",
  "A lazy morning",
  "Dessert of your choice",
];

const awards: { title: string; hint: string; icon: LucideIcon }[] = [
  { title: "Most points", hint: "This week or month", icon: Trophy },
  { title: "On time", hint: "Tasks by their due date", icon: Clock },
  { title: "Helper", hint: "“Anyone” tasks picked up", icon: Heart },
  { title: "Streak", hint: "Days in a row", icon: Flame },
];

const CARD_SIZE = 10;
const CARD_FILLED = 7;

export function Rewards() {
  return (
    <section id="rewards" className="relative overflow-hidden bg-white py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mx-auto mb-14 max-w-2xl text-center"
        >
          <span className="text-sm font-bold uppercase tracking-wider text-tomato-700">
            Points & rewards
          </span>
          <h2 className="mt-3 font-display text-3xl font-extrabold tracking-tight text-ink sm:text-4xl lg:text-5xl">
            Chores that pay off
          </h2>
          <p className="mt-4 text-lg text-ink-600">
            A chore chart with a reward chart built in. Finished tasks give
            points, points fill stamp cards, and a full card earns something
            the household picked together.
          </p>
        </motion.div>

        <div className="grid gap-4 lg:grid-cols-3">
          <motion.article
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.45 }}
            className="flex flex-col rounded-[1.75rem] bg-paper p-7"
          >
            <h3 className="font-display text-2xl font-extrabold text-ink">
              Points for every task
            </h3>
            <p className="mt-2 text-[15px] leading-relaxed text-ink-600">
              Whoever finishes it gets the points, so picking up a big one is
              worth it.
            </p>
            <ul className="mt-auto space-y-2.5 pt-8">
              {sizes.map((size) => (
                <li
                  key={size.name}
                  className="flex items-center justify-between gap-3 rounded-2xl bg-white px-4 py-3"
                >
                  <span>
                    <span className="block text-[15px] font-bold text-ink">{size.name}</span>
                    <span className="block text-[13px] text-ink-500">{size.example}</span>
                  </span>
                  <span className="rounded-full bg-butter px-3 py-1 text-[13px] font-extrabold text-ink">
                    {size.points} pt{size.points === 1 ? "" : "s"}
                  </span>
                </li>
              ))}
            </ul>
          </motion.article>

          <motion.article
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.45, delay: 0.08 }}
            className="sketch-border flex flex-col rounded-[1.75rem] bg-butter p-7"
          >
            <h3 className="font-display text-2xl font-extrabold text-ink">
              Stamp cards
            </h3>
            <p className="mt-2 text-[15px] leading-relaxed text-ink-800">
              Cards of 5, 10 or 15 spots, the same for everyone. Turn them on
              for the household whenever you like.
            </p>
            <div
              className="mt-6 grid grid-cols-5 gap-2.5"
              role="img"
              aria-label={`A stamp card with ${CARD_FILLED} of ${CARD_SIZE} spots filled`}
            >
              {Array.from({ length: CARD_SIZE }, (_, i) => (
                <span
                  key={i}
                  className={`flex aspect-square items-center justify-center rounded-full ${
                    i < CARD_FILLED ? "bg-white ring-[2.5px] ring-ink" : "bg-white/45"
                  }`}
                >
                  {i < CARD_FILLED && (
                    <Check className="h-5 w-5 text-ink" strokeWidth={3.5} aria-hidden="true" />
                  )}
                </span>
              ))}
            </div>
            <p className="mt-auto pt-6 font-hand text-2xl font-bold text-ink">
              3 more and the movie is yours.
            </p>
          </motion.article>

          <motion.article
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.45, delay: 0.16 }}
            className="flex flex-col rounded-[1.75rem] bg-paper p-7"
          >
            <h3 className="font-display text-2xl font-extrabold text-ink">
              Rewards you choose
            </h3>
            <p className="mt-2 text-[15px] leading-relaxed text-ink-600">
              Write your own, or start from an idea. Everyone picks one for
              their own card.
            </p>
            <ul className="mt-auto flex flex-wrap gap-2 pt-8">
              {rewardIdeas.map((idea) => (
                <li
                  key={idea}
                  className="flex items-center gap-1.5 rounded-full bg-white px-3.5 py-2 text-[14px] font-semibold text-ink"
                >
                  <Gift className="h-4 w-4 text-tomato-600" aria-hidden="true" />
                  {idea}
                </li>
              ))}
            </ul>
          </motion.article>
        </div>

        <div className="mt-4 grid gap-4 lg:grid-cols-[1.4fr_1fr]">
          <motion.article
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.45 }}
            className="rounded-[1.75rem] bg-ink p-7 text-paper"
          >
            <h3 className="font-display text-2xl font-extrabold">
              Stats that only praise
            </h3>
            <p className="mt-2 max-w-lg text-[15px] leading-relaxed text-paper/70">
              Points this week and month, a graph of past weeks and each
              person&apos;s share. Awards go to whoever did best. Nobody gets
              called out for doing least.
            </p>
            <ul className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-4">
              {awards.map((award) => (
                <li key={award.title} className="rounded-2xl bg-paper/[0.08] p-4">
                  <award.icon className="h-6 w-6 text-butter" aria-hidden="true" />
                  <p className="mt-3 text-[15px] font-bold">{award.title}</p>
                  <p className="mt-0.5 text-[12px] leading-snug text-paper/60">{award.hint}</p>
                </li>
              ))}
            </ul>
          </motion.article>

          <motion.article
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.45, delay: 0.08 }}
            className="flex flex-col rounded-[1.75rem] bg-tomato p-7 text-ink"
          >
            <h3 className="font-display text-2xl font-extrabold">Say thanks</h3>
            <p className="mt-2 text-[15px] leading-relaxed text-ink-800">
              A household board of short thank-you notes, for a task or just
              because.
            </p>
            <figure className="mt-auto rounded-2xl rounded-bl-md bg-white p-4 shadow-lg shadow-tomato-700/20">
              <blockquote className="font-hand text-[26px] font-bold leading-tight">
                “Thanks for doing the dishes last night!”
              </blockquote>
              <figcaption className="mt-2 text-[13px] font-semibold text-ink-500">
                Sam to Alex · Empty the dishwasher
              </figcaption>
            </figure>
          </motion.article>
        </div>
      </div>
    </section>
  );
}
