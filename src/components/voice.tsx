"use client";

import { motion } from "framer-motion";
import {
  CalendarArrowUp,
  CircleCheck,
  Heart,
  Mic,
  Plus,
  UserRound,
  type LucideIcon,
} from "lucide-react";

const examples: { said: string; result: string; icon: LucideIcon; lang?: string }[] = [
  { said: "Buy oat milk today", result: "Added to Groceries, due today", icon: Plus },
  { said: "I took out the trash", result: "Marked done, points to you", icon: CircleCheck },
  { said: "Give the bathroom to Alex", result: "Assigned to Alex", icon: UserRound },
  { said: "Move groceries to Saturday", result: "Moved to Saturday", icon: CalendarArrowUp },
  { said: "Thank Alex for the dishes", result: "Thank-you note sent", icon: Heart },
  { said: "Pon la lavadora mañana", result: "Added to Laundry, due tomorrow", icon: Plus, lang: "es" },
];

export function Voice() {
  return (
    <section id="voice" className="relative overflow-hidden bg-butter py-16 lg:py-24">
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <span className="inline-flex items-center gap-2 text-sm font-bold uppercase tracking-wider text-ink/70">
            <Mic className="h-4 w-4" aria-hidden="true" />
            Voice
          </span>
          <h2 className="mt-3 font-display text-3xl font-extrabold tracking-tight text-ink sm:text-4xl lg:text-5xl">
            Hands full? Just say it.
          </h2>
          <p className="mt-4 max-w-md text-lg leading-relaxed text-ink-700">
            Tap the mic and talk like you would to your housemate. Dibs adds
            chores, ticks them off, hands them over, moves them or thanks
            someone, several at once if you like.
          </p>
          <p className="mt-4 max-w-md text-[15px] leading-relaxed text-ink-700">
            Speech is turned into text on your iPhone. Dibs understands it with
            Apple Intelligence when it is available, and from the plain words
            when it is not. In English and Spanish.
          </p>
        </motion.div>

        <ul className="grid gap-3 sm:grid-cols-2">
          {examples.map((example, index) => (
            <motion.li
              key={example.said}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.4, delay: index * 0.06 }}
              className="sketch-border flex flex-col gap-3 rounded-[1.5rem] bg-white p-5"
            >
              <p lang={example.lang} className="font-hand text-[26px] font-bold leading-tight text-ink">
                “{example.said}”
              </p>
              <p className="mt-auto flex items-center gap-2 text-[14px] font-semibold text-ink-600">
                <span className="flex h-6 w-6 items-center justify-center rounded-full bg-sage">
                  <example.icon className="h-3.5 w-3.5 text-ink" strokeWidth={2.6} aria-hidden="true" />
                </span>
                {example.result}
              </p>
            </motion.li>
          ))}
        </ul>
      </div>
    </section>
  );
}
