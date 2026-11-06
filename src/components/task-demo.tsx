"use client";

import { useEffect, useRef, useState } from "react";
import { AnimatePresence, MotionConfig, motion } from "framer-motion";
import { Check, Gift, Hand, Mic, Repeat, RotateCcw } from "lucide-react";

import { CategoryIcon } from "@/components/category-icon";
import {
  categoryNames,
  demoHousehold,
  demoTasks,
  demoVoiceNotes,
  type DemoTask,
} from "@/lib/demo";
import { cn } from "@/lib/utils";

const LISTEN_MS = 1400;
const TOAST_MS = 2200;

/** A playable copy of the Dibs task list: finish tasks, call dibs, fill the stamp card. */
export function TaskDemo() {
  const [tasks, setTasks] = useState<DemoTask[]>(demoTasks);
  const [points, setPoints] = useState(demoHousehold.startingPoints);
  const [rewardsUsed, setRewardsUsed] = useState(0);
  const [voiceIndex, setVoiceIndex] = useState(0);
  const [listening, setListening] = useState<string | null>(null);
  const [toast, setToast] = useState<string | null>(null);
  const toastTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const listenTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(
    () => () => {
      if (toastTimer.current) clearTimeout(toastTimer.current);
      if (listenTimer.current) clearTimeout(listenTimer.current);
    },
    [],
  );

  const showToast = (message: string) => {
    if (toastTimer.current) clearTimeout(toastTimer.current);
    setToast(message);
    toastTimer.current = setTimeout(() => setToast(null), TOAST_MS);
  };

  const size = demoHousehold.cardSize;
  const available = Math.max(0, points - rewardsUsed * size);
  const rewardReady = available >= size;
  const filled = rewardReady ? size : available % size;

  const open = tasks.filter((task) => !task.done);
  const done = tasks.filter((task) => task.done);
  const voiceLeft = voiceIndex < demoVoiceNotes.length;

  const toggle = (task: DemoTask) => {
    setTasks((current) =>
      current.map((t) => (t.id === task.id ? { ...t, done: !t.done } : t)),
    );
    if (task.done) {
      setPoints((p) => Math.max(rewardsUsed * size, p - task.points));
    } else {
      setPoints((p) => p + task.points);
      const willFill = available < size && available + task.points >= size;
      showToast(
        willFill
          ? "Card full! Reward ready"
          : `+${task.points} ${task.points === 1 ? "point" : "points"}`,
      );
    }
  };

  const callDibs = (task: DemoTask) => {
    setTasks((current) =>
      current.map((t) => (t.id === task.id ? { ...t, assignee: "you" } : t)),
    );
    showToast("Dibs! It's yours");
  };

  const listen = () => {
    if (listening || !voiceLeft) return;
    const note = demoVoiceNotes[voiceIndex];
    setListening(note.said);
    listenTimer.current = setTimeout(() => {
      setTasks((current) => [note.task, ...current]);
      setVoiceIndex((i) => i + 1);
      setListening(null);
      showToast("Added by voice");
    }, LISTEN_MS);
  };

  const redeemReward = () => {
    setRewardsUsed((r) => r + 1);
    showToast(`Enjoy: ${demoHousehold.reward}`);
  };

  const reset = () => {
    setTasks(demoTasks);
    setPoints(demoHousehold.startingPoints);
    setRewardsUsed(0);
    setVoiceIndex(0);
    showToast("Fresh week, fresh list");
  };

  return (
    <MotionConfig reducedMotion="user">
      <div className="relative flex h-[580px] flex-col bg-paper-50 px-3.5 pb-4 pt-10 text-ink">
        <div className="flex items-end justify-between px-1">
          <div>
            <p className="text-[11px] font-bold uppercase tracking-wider text-ink-500">
              {demoHousehold.name} · {demoHousehold.members.length} people
            </p>
            <p className="font-display text-[26px] font-extrabold leading-tight">
              Tasks
            </p>
          </div>
          <span className="mb-1 rounded-full bg-ink px-2.5 py-1 text-[11px] font-bold text-paper">
            Mine · All
          </span>
        </div>

        <StampCard
          filled={filled}
          size={size}
          rewardReady={rewardReady}
          onUseReward={redeemReward}
        />

        <div
          className="no-scrollbar -mx-1 mt-3 flex-1 overflow-y-auto px-1"
          role="list"
          aria-label="Household tasks"
        >
          <AnimatePresence initial={false}>
            {open.map((task) => (
              <TaskRow
                key={task.id}
                task={task}
                onToggle={() => toggle(task)}
                onDibs={() => callDibs(task)}
              />
            ))}
          </AnimatePresence>

          {open.length === 0 && (
            <motion.div
              initial={{ opacity: 0, y: 6 }}
              animate={{ opacity: 1, y: 0 }}
              className="my-3 rounded-2xl bg-sage-100 p-3 text-center"
            >
              <p className="font-display text-[15px] font-extrabold">
                All done. Nice teamwork.
              </p>
              <button
                type="button"
                onClick={reset}
                className="mt-2 inline-flex items-center gap-1.5 rounded-full bg-ink px-3 py-1.5 text-[12px] font-bold text-paper"
              >
                <RotateCcw className="h-3.5 w-3.5" aria-hidden="true" />
                Reset demo
              </button>
            </motion.div>
          )}

          {done.length > 0 && (
            <p className="mb-1 mt-3 px-1 text-[11px] font-bold uppercase tracking-wider text-ink-400">
              Done
            </p>
          )}
          <AnimatePresence initial={false}>
            {done.map((task) => (
              <TaskRow
                key={task.id}
                task={task}
                onToggle={() => toggle(task)}
                onDibs={() => callDibs(task)}
              />
            ))}
          </AnimatePresence>
          <div className="h-14" />
        </div>

        <div aria-live="polite" className="pointer-events-none absolute inset-x-0 bottom-5 flex justify-start px-4">
          <AnimatePresence>
            {toast && !listening && (
              <motion.p
                key={toast}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 6 }}
                className="rounded-full bg-ink px-3.5 py-2 text-[12px] font-bold text-paper shadow-lg"
              >
                {toast}
              </motion.p>
            )}
          </AnimatePresence>
        </div>

        <AnimatePresence>
          {listening && (
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 8 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="absolute bottom-[76px] right-4 max-w-[210px] rounded-2xl rounded-br-md bg-white p-3 shadow-xl ring-1 ring-ink/10"
            >
              <p className="text-[10px] font-bold uppercase tracking-wider text-tomato-700">
                Listening…
              </p>
              <p className="mt-1 text-[14px] font-semibold leading-snug">
                “{listening}”
              </p>
            </motion.div>
          )}
        </AnimatePresence>

        <motion.button
          type="button"
          onClick={listen}
          disabled={!voiceLeft && !listening}
          whileTap={{ scale: 0.92 }}
          aria-label={
            voiceLeft ? "Add a task by voice" : "Voice demo finished"
          }
          className={cn(
            "absolute bottom-4 right-4 flex h-12 w-12 items-center justify-center rounded-full shadow-lg transition-colors",
            listening ? "bg-tomato-500 text-ink" : "bg-ink text-paper",
            !voiceLeft && !listening && "opacity-40",
          )}
        >
          {listening && (
            <span className="absolute inset-0 animate-ping rounded-full bg-tomato-400/60" />
          )}
          <Mic className="relative h-5 w-5" aria-hidden="true" />
        </motion.button>
      </div>
    </MotionConfig>
  );
}

function StampCard({
  filled,
  size,
  rewardReady,
  onUseReward,
}: {
  filled: number;
  size: number;
  rewardReady: boolean;
  onUseReward: () => void;
}) {
  return (
    <div className="mt-3 rounded-2xl bg-butter-100 p-3 ring-1 ring-butter-600/30">
      <div className="flex items-center justify-between">
        <p className="text-[12px] font-bold">
          {rewardReady ? "Reward ready" : "Your card"}
        </p>
        <p className="text-[12px] font-bold text-ink-600">
          {rewardReady ? demoHousehold.reward : `${filled}/${size} points`}
        </p>
      </div>
      {rewardReady ? (
        <button
          type="button"
          onClick={onUseReward}
          className="mt-2 flex w-full items-center justify-center gap-1.5 rounded-xl bg-ink py-2 text-[12px] font-bold text-paper"
        >
          <Gift className="h-3.5 w-3.5" aria-hidden="true" />
          Use reward
        </button>
      ) : (
        <div
          className="mt-2 grid grid-cols-10 gap-1"
          role="img"
          aria-label={`${filled} of ${size} stamps`}
        >
          {Array.from({ length: size }, (_, i) => (
            <motion.span
              key={i}
              animate={{ scale: i < filled ? 1 : 0.85 }}
              className={cn(
                "flex aspect-square items-center justify-center rounded-full",
                i < filled
                  ? "bg-butter-500 ring-2 ring-ink"
                  : "bg-white/70 ring-1 ring-ink/20",
              )}
            >
              {i < filled && <Check className="h-2.5 w-2.5" strokeWidth={4} aria-hidden="true" />}
            </motion.span>
          ))}
        </div>
      )}
    </div>
  );
}

function TaskRow({
  task,
  onToggle,
  onDibs,
}: {
  task: DemoTask;
  onToggle: () => void;
  onDibs: () => void;
}) {
  const isAnyone = task.assignee === "anyone";
  const who =
    task.assignee === "you" ? "You" : isAnyone ? "Anyone" : task.assignee;

  return (
    <motion.div
      layout
      role="listitem"
      initial={{ opacity: 0, y: -8 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, height: 0, marginBottom: 0 }}
      transition={{ duration: 0.25 }}
      className={cn(
        "mb-2 flex items-center gap-2.5 rounded-2xl bg-white p-2.5 shadow-sm ring-1 ring-ink/[0.06]",
        task.done && "bg-white/60 shadow-none",
      )}
    >
      <button
        type="button"
        role="checkbox"
        aria-checked={!!task.done}
        aria-label={`${task.done ? "Not done" : "Done"}: ${task.title}`}
        onClick={onToggle}
        className={cn(
          "flex h-7 w-7 shrink-0 items-center justify-center rounded-full border-2 transition-colors",
          task.done
            ? "border-sage-700 bg-sage-500"
            : "border-ink/30 hover:border-ink hover:bg-sage-50",
        )}
      >
        {task.done && <Check className="h-4 w-4" strokeWidth={3.5} aria-hidden="true" />}
      </button>

      <div className="min-w-0 flex-1">
        <p
          className={cn(
            "truncate text-[14px] font-semibold leading-tight",
            task.done && "text-ink-400 line-through",
          )}
        >
          {task.title}
        </p>
        <p className="mt-0.5 flex items-center gap-1 truncate text-[11px] font-medium text-ink-500">
          <CategoryIcon category={task.category} className="h-3 w-3 shrink-0" />
          <span>{categoryNames[task.category]}</span>
          <span aria-hidden="true">·</span>
          <span className={cn(isAnyone && !task.done && "font-bold text-tomato-700")}>
            {who}
          </span>
          {task.due && (
            <>
              <span aria-hidden="true">·</span>
              <span>{task.due}</span>
            </>
          )}
          {task.repeats && (
            <Repeat className="h-3 w-3 shrink-0" aria-label={`Repeats ${task.repeats.toLowerCase()}`} />
          )}
        </p>
      </div>

      {isAnyone && !task.done ? (
        <motion.button
          type="button"
          whileTap={{ scale: 0.9 }}
          onClick={onDibs}
          className="flex shrink-0 items-center gap-1 rounded-full bg-tomato-500 px-2.5 py-1.5 text-[11px] font-extrabold text-ink"
          aria-label={`Call dibs on ${task.title}`}
        >
          <Hand className="h-3 w-3" aria-hidden="true" />
          Dibs
        </motion.button>
      ) : (
        <span className="shrink-0 rounded-full bg-butter-100 px-2 py-1 text-[10px] font-extrabold text-ink-700">
          {task.points} pt{task.points === 1 ? "" : "s"}
        </span>
      )}
    </motion.div>
  );
}
