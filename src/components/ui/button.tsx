import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { Slot } from "radix-ui"

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-semibold transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 aria-invalid:border-destructive",
  {
    variants: {
      variant: {
        default:
          "bg-ink text-paper rounded-full hover:bg-ink-700 hover:shadow-lg hover:shadow-ink/20 active:scale-[0.97]",
        tomato:
          "bg-tomato-500 text-ink rounded-full hover:bg-tomato-400 hover:shadow-lg hover:shadow-tomato-500/40 active:scale-[0.97]",
        butter:
          "bg-butter-500 text-ink rounded-full hover:bg-butter-400 hover:shadow-lg hover:shadow-butter-500/40 active:scale-[0.97]",
        sage:
          "bg-sage-500 text-ink rounded-full hover:bg-sage-400 hover:shadow-lg hover:shadow-sage-500/30 active:scale-[0.97]",
        destructive:
          "bg-destructive text-white rounded-full hover:bg-destructive/90 focus-visible:ring-destructive/20",
        outline:
          "border border-ink-200 bg-transparent rounded-full hover:bg-ink/5 active:scale-[0.97]",
        secondary:
          "bg-secondary text-secondary-foreground rounded-full hover:bg-secondary/80",
        ghost: "hover:bg-accent hover:text-accent-foreground rounded-full",
        link: "text-tomato-700 underline-offset-4 hover:underline",
      },
      size: {
        default: "h-10 px-5 py-2.5 has-[>svg]:px-4",
        xs: "h-6 gap-1 px-2 text-xs has-[>svg]:px-1.5 [&_svg:not([class*='size-'])]:size-3",
        sm: "h-8 gap-1.5 px-3 has-[>svg]:px-2.5",
        lg: "h-12 px-8 has-[>svg]:px-6 text-base",
        icon: "size-9",
        "icon-xs": "size-6 [&_svg:not([class*='size-'])]:size-3",
        "icon-sm": "size-8",
        "icon-lg": "size-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

function Button({
  className,
  variant = "default",
  size = "default",
  asChild = false,
  ...props
}: React.ComponentProps<"button"> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean
  }) {
  const Comp = asChild ? Slot.Root : "button"

  return (
    <Comp
      data-slot="button"
      data-variant={variant}
      data-size={size}
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    />
  )
}

export { Button, buttonVariants }
