"use client";

import { motion } from "framer-motion";

import { CategoryIcon } from "@/components/category-icon";
import { categoryNames, type CategoryId } from "@/lib/demo";

const categories: {
  id: CategoryId;
  chores: string[];
  bg: string;
  invert?: boolean;
}[] = [
  {
    id: "kitchen",
    chores: ["Empty the dishwasher", "Clean the oven", "Cook dinner"],
    bg: "bg-sage",
  },
  {
    id: "bathroom",
    chores: ["Scrub the shower", "Clean the toilet", "Restock towels"],
    bg: "bg-sky",
  },
  {
    id: "laundry",
    chores: ["Fold the laundry", "Change the sheets", "Do the ironing"],
    bg: "bg-lilac",
  },
  {
    id: "groceries",
    chores: ["Buy oat milk", "Weekly supermarket run", "Get fresh bread"],
    bg: "bg-butter",
  },
  {
    id: "cleaning",
    chores: ["Vacuum the living room", "Take out the recycling", "Mop the floors"],
    bg: "bg-ink",
    invert: true,
  },
  {
    id: "outside",
    chores: ["Mow the lawn", "Water the plants", "Wash the car"],
    bg: "bg-tomato",
  },
];

export function Categories() {
  return (
    <section id="categories" className="bg-paper py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-14 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between"
        >
          <div className="max-w-xl">
            <span className="text-sm font-bold uppercase tracking-wider text-tomato-700">
              Categories
            </span>
            <h2 className="mt-3 font-display text-3xl font-extrabold tracking-tight text-ink sm:text-4xl lg:text-5xl">
              Every room, every chore
            </h2>
          </div>
          <p className="max-w-sm text-base leading-relaxed text-ink-600 sm:pb-1">
            Type “Clean the oven” and Dibs files it under Kitchen for you. Add
            your own categories, like Kids room, Pets or Car.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {categories.map((category, index) => (
            <motion.article
              key={category.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.45, delay: index * 0.05 }}
              className={`relative flex min-h-[230px] flex-col overflow-hidden rounded-[1.75rem] p-6 ${
                category.invert ? "text-paper" : "text-ink"
              } ${category.bg}`}
            >
              <div className="flex items-start justify-between">
                <h3 className="font-display text-2xl font-extrabold">
                  {categoryNames[category.id]} chores
                </h3>
                <span
                  className={`flex h-11 w-11 items-center justify-center rounded-full ${
                    category.invert ? "bg-paper/15" : "bg-white/55"
                  }`}
                >
                  <CategoryIcon category={category.id} className="h-5 w-5" />
                </span>
              </div>
              <ul className="mt-auto space-y-2 pt-8">
                {category.chores.map((chore) => (
                  <li key={chore} className="flex items-center gap-2.5 text-[15px] font-semibold">
                    <span
                      className={`h-4 w-4 shrink-0 rounded-full border-2 ${
                        category.invert ? "border-paper/60" : "border-ink/50"
                      }`}
                      aria-hidden="true"
                    />
                    {chore}
                  </li>
                ))}
              </ul>
            </motion.article>
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.45, delay: 0.2 }}
          className="mt-10 text-center text-[15px] font-semibold text-ink-600"
        >
          Stats show where the effort goes, room by room. Rename, re-icon or
          delete any category; its tasks stay put.
        </motion.p>
      </div>
    </section>
  );
}
