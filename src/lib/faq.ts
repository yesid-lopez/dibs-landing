import { site } from "@/lib/site";

export interface FaqItem {
  question: string;
  answer: string;
}

/**
 * Written as the questions people type into search and ask AI assistants.
 * Also rendered as FAQPage structured data, so keep every answer true to the app.
 */
export function getFaqs(): FaqItem[] {
  return [
    {
      question: "What is the Dibs app?",
      answer:
        "Dibs is a shared chore chart for iPhone. Everyone in the household sees the same to-do list, assigns tasks, calls dibs on open ones and marks them done. Finished chores give points that can fill stamp cards and earn rewards.",
    },
    {
      question: "How do I share chores with my partner or roommates?",
      answer:
        "Create a household in Dibs, then invite people with a link or a QR code from Settings. Once they open it, every iPhone shows the same list and changes sync through iCloud within seconds.",
    },
    {
      question: "Do we need to create an account?",
      answer:
        "No. Dibs has no sign-up and no passwords. It uses the iCloud account already on each iPhone to keep the household in sync.",
    },
    {
      question: "Is Dibs free?",
      answer:
        "Yes. Dibs is free to download, with no subscription, no in-app purchases and no ads.",
    },
    {
      question: "Can I add chores by voice?",
      answer:
        "Yes. Tap the microphone and say things like “Buy oat milk today”, “I took out the trash”, “Give the bathroom to Alex” or “Thank Alex for the dishes”. Dibs understands English and Spanish, using Apple Intelligence when it is available.",
    },
    {
      question: "How do points, stamp cards and rewards work?",
      answer:
        "A finished task gives points to whoever did it: small 1, medium 2, big 3. If the household turns on stamp cards, points fill a card of 5, 10 or 15 spots, and a full card earns a reward you picked together, like choosing the movie or skipping a chore.",
    },
    {
      question: "Can chores repeat automatically?",
      answer:
        "Yes. A task can repeat every day, week, 2 weeks, month or on a custom interval. The next one is counted from the day it was actually done, so a late chore never piles up.",
    },
    {
      question: "Does Dibs work offline?",
      answer:
        "Yes. Every iPhone keeps its own copy of the list, so you can add and finish tasks without a connection. Changes sync when you are back online.",
    },
    {
      question: "Is my household's data private?",
      answer:
        "Your tasks, names and notes are stored in your own iCloud and shared only with the people you invite. Dibs has no analytics or tracking, and we cannot see your household.",
    },
    {
      question: "Is Dibs available on Android or the web?",
      answer: `No. Dibs is an iPhone app and needs ${site.minimumOs} or later. Everyone in the household needs an iPhone signed into iCloud.`,
    },
    {
      question: "Who makes Dibs?",
      answer: `Dibs is made by ${site.company}. For support, email ${site.supportEmail}.`,
    },
  ];
}
