"use client";

import { motion } from "framer-motion";

import { AppStoreBadge } from "@/components/app-store-badge";
import { site, stats } from "@/lib/site";

export function DownloadCTA() {
  return (
    <section className="relative overflow-hidden bg-ink py-16 lg:py-24">
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute left-[12%] top-0 h-[500px] w-[500px] rounded-full bg-sage-500/25 blur-[130px]" />
        <div className="absolute bottom-0 right-[8%] h-[420px] w-[420px] rounded-full bg-tomato-500/25 blur-[130px]" />
        <div className="absolute left-1/2 top-1/2 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-butter-500/[0.12] blur-[140px]" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-2xl text-center"
        >
          <span className="text-sm font-bold uppercase tracking-wider text-butter-300">
            Get started
          </span>
          <h2 className="mt-3 font-display text-3xl font-extrabold tracking-tight text-paper sm:text-4xl lg:text-5xl">
            Call <span className="text-butter-500">dibs</span> on a calmer home
          </h2>
          <p className="mt-4 text-lg text-paper/70">
            {site.name} is free, has no ads and needs no account. Create a
            household, send the link, and the chores sort themselves out. Well,
            almost.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ delay: 0.15, duration: 0.5 }}
          className="mt-9 flex justify-center"
        >
          <AppStoreBadge tone="light" />
        </motion.div>

        <motion.dl
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ delay: 0.25, duration: 0.5 }}
          className="mt-14 flex items-center justify-center gap-8 sm:gap-14"
        >
          {stats.map((stat, i) => (
            <div key={stat.label} className="flex items-center gap-8 sm:gap-14">
              {i > 0 && <div className="h-10 w-px bg-paper/15" />}
              <div className="flex flex-col-reverse text-center">
                <dt className="mt-1 text-sm text-paper/60">{stat.label}</dt>
                <dd className="font-display text-2xl font-extrabold text-paper sm:text-3xl">
                  {stat.value}
                </dd>
              </div>
            </div>
          ))}
        </motion.dl>
      </div>
    </section>
  );
}
