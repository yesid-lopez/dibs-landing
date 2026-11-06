import {
  Leaf,
  ShoppingCart,
  ShowerHead,
  Sparkles,
  UtensilsCrossed,
  WashingMachine,
  type LucideIcon,
} from "lucide-react";

import type { CategoryId } from "@/lib/demo";

/** Same pictures the app uses for its built-in categories (SF Symbols → Lucide). */
export const categoryIcons: Record<CategoryId, LucideIcon> = {
  kitchen: UtensilsCrossed,
  bathroom: ShowerHead,
  laundry: WashingMachine,
  groceries: ShoppingCart,
  cleaning: Sparkles,
  outside: Leaf,
};

export function CategoryIcon({
  category,
  className,
}: {
  category: CategoryId;
  className?: string;
}) {
  const Icon = categoryIcons[category];
  return <Icon className={className} aria-hidden="true" />;
}
