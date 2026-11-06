"use client";

import { motion } from "framer-motion";

import { AppStoreBadge } from "@/components/app-store-badge";
import { PhoneFrame } from "@/components/phone-frame";
import { TaskDemo } from "@/components/task-demo";
import { stats } from "@/lib/site";

export function Hero() {
  return (
    <section className="relative flex min-h-screen items-center overflow-hidden bg-paper pt-16">
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -left-24 top-10 h-[480px] w-[480px] rounded-full bg-sage/40 blur-[120px]" />
        <div className="absolute -right-28 bottom-0 h-[420px] w-[420px] rounded-full bg-tomato/25 blur-[120px]" />
        <div className="absolute left-[48%] top-16 h-[240px] w-[240px] rounded-full bg-butter/40 blur-[90px]" />
      </div>

      <Doodle className="absolute left-[10%] top-28 hidden h-8 w-8 text-ink/70 lg:block" />
      <Heart className="absolute right-[16%] top-36 hidden h-7 w-7 rotate-12 text-tomato-600 lg:block" />
      <Doodle className="absolute bottom-28 left-[7%] hidden h-6 w-6 -rotate-12 text-sage-700 lg:block" />

      <div className="relative z-10 mx-auto w-full max-w-7xl px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
        <div className="grid grid-cols-1 items-center gap-16 lg:grid-cols-[1.1fr_0.9fr] lg:gap-8">
          <div className="text-center lg:text-left">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              className="font-display text-[3.25rem] font-extrabold leading-[0.95] tracking-tight text-ink sm:text-6xl lg:text-[4.75rem]"
            >
              <span className="mb-5 block font-sans text-sm font-bold uppercase tracking-[0.18em] text-tomato-700 sm:text-[15px]">
                The shared chore chart for iPhone
              </span>{" "}
              Call{" "}
              <span className="relative inline-block">
                <span className="relative z-10">dibs</span>
                <svg
                  className="absolute -bottom-1 left-[-4%] z-0 w-[108%]"
                  viewBox="0 0 200 24"
                  fill="none"
                  preserveAspectRatio="none"
                  aria-hidden="true"
                >
                  <path
                    d="M3 15C40 7 150 5 197 12"
                    stroke="#FFDC6E"
                    strokeWidth="14"
                    strokeLinecap="round"
                  />
                </svg>
              </span>{" "}
              on the{" "}
              <br className="hidden sm:block" />
              chores.
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.25, duration: 0.6 }}
              className="mx-auto mt-7 max-w-lg text-lg leading-relaxed text-ink-600 sm:text-xl lg:mx-0"
            >
              Dibs is one shared to-do list for your home. Split the housework
              with your partner, roommates or family, add chores by voice, and
              turn finished tasks into points and rewards.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="mt-9 flex flex-wrap items-center justify-center gap-5 lg:justify-start"
            >
              <AppStoreBadge />
              <a
                href="#how-it-works"
                className="text-[15px] font-bold text-ink underline decoration-tomato decoration-2 underline-offset-4 transition-colors hover:text-tomato-700"
              >
                See how it works
              </a>
            </motion.div>

            <motion.dl
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.55, duration: 0.6 }}
              className="mt-12 flex items-center justify-center gap-8 lg:justify-start"
            >
              {stats.map((stat, i) => (
                <div key={stat.label} className="flex items-center gap-8">
                  {i > 0 && <div className="h-9 w-px bg-ink/15" />}
                  <div className="flex flex-col-reverse">
                    <dt className="mt-0.5 text-[13px] font-semibold text-ink-500">
                      {stat.label}
                    </dt>
                    <dd className="font-display text-2xl font-extrabold text-ink">
                      {stat.value}
                    </dd>
                  </div>
                </div>
              ))}
            </motion.dl>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="relative flex justify-center lg:justify-end"
          >
            <div className="absolute -left-4 top-6 z-30 hidden -rotate-6 rounded-xl bg-butter px-4 py-2 font-hand text-2xl font-bold text-ink shadow-xl shadow-ink/10 lg:block">
              Try it! Tap a circle ↘
            </div>

            <PhoneFrame className="w-[300px] rotate-[-2deg] animate-float sm:w-[320px] lg:rotate-[-3deg]">
              <TaskDemo />
            </PhoneFrame>

            <div className="absolute -left-10 top-[44%] z-30 hidden rotate-3 rounded-xl bg-tomato px-4 py-2 font-hand text-2xl font-bold text-ink shadow-xl shadow-tomato/30 lg:block">
              Open chore? Call dibs! →
            </div>

            <div className="absolute -bottom-10 right-24 z-30 hidden -rotate-3 rounded-xl bg-sage px-4 py-2 font-hand text-2xl font-bold text-ink shadow-xl shadow-sage/40 lg:block">
              …or just tap the mic ↗
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function Doodle({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.2"
      strokeLinecap="round"
      aria-hidden="true"
    >
      <path d="M12 2.5v5M12 16.5v5M2.5 12h5M16.5 12h5M5.3 5.3l3.2 3.2M15.5 15.5l3.2 3.2M5.3 18.7l3.2-3.2M15.5 8.5l3.2-3.2" />
    </svg>
  );
}

function Heart({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.4"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M12.2 20.3c-4.6-3.4-8.9-7-8.6-11 .2-2.6 2.2-4.6 4.6-4.5 1.7.1 3 1.2 3.8 2.7.9-1.6 2.3-2.8 4.1-2.8 2.5 0 4.4 2.1 4.3 4.7-.2 4-4.3 7.5-8.2 10.9z" />
    </svg>
  );
}
