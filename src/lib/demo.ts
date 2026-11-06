/** Sample household used by the playable list in the hero. Mirrors what the app shows. */

export type CategoryId =
  | "kitchen"
  | "bathroom"
  | "laundry"
  | "groceries"
  | "cleaning"
  | "outside";

export type Size = 1 | 2 | 3;

export interface DemoTask {
  id: string;
  title: string;
  category: CategoryId;
  /** "you", "anyone" or another member's name. */
  assignee: string;
  points: Size;
  due?: string;
  repeats?: string;
  done?: boolean;
}

export const categoryNames: Record<CategoryId, string> = {
  kitchen: "Kitchen",
  bathroom: "Bathroom",
  laundry: "Laundry",
  groceries: "Groceries",
  cleaning: "Cleaning",
  outside: "Outside",
};

export const demoHousehold = {
  name: "Home",
  members: ["You", "Alex", "Sam"],
  cardSize: 10,
  /** Points already on your card, so the demo can fill it in a few taps. */
  startingPoints: 6,
  reward: "Pick the movie",
};

export const demoTasks: DemoTask[] = [
  {
    id: "dishwasher",
    title: "Empty the dishwasher",
    category: "kitchen",
    assignee: "you",
    points: 1,
    due: "Today",
    repeats: "Daily",
  },
  {
    id: "bathroom",
    title: "Clean the bathroom",
    category: "bathroom",
    assignee: "anyone",
    points: 3,
    due: "Today",
  },
  {
    id: "milk",
    title: "Buy oat milk",
    category: "groceries",
    assignee: "anyone",
    points: 1,
    due: "Tomorrow",
  },
  {
    id: "recycling",
    title: "Take out the recycling",
    category: "cleaning",
    assignee: "Alex",
    points: 1,
    due: "Tomorrow",
    repeats: "Weekly",
  },
  {
    id: "lawn",
    title: "Mow the lawn",
    category: "outside",
    assignee: "Sam",
    points: 2,
    due: "Saturday",
  },
];

/** What the mic button "hears" in the demo, one per tap. */
export const demoVoiceNotes: { said: string; task: DemoTask }[] = [
  {
    said: "Fold the laundry tonight",
    task: {
      id: "voice-laundry",
      title: "Fold the laundry",
      category: "laundry",
      assignee: "you",
      points: 2,
      due: "Today",
    },
  },
  {
    said: "Water the plants on Sunday",
    task: {
      id: "voice-plants",
      title: "Water the plants",
      category: "outside",
      assignee: "anyone",
      points: 1,
      due: "Sunday",
    },
  },
  {
    said: "Wipe the kitchen counters",
    task: {
      id: "voice-counters",
      title: "Wipe the kitchen counters",
      category: "kitchen",
      assignee: "you",
      points: 1,
      due: "Today",
    },
  },
];
