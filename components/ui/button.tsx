import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-lg text-sm font-semibold transition-all duration-300 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:ring-2 focus-visible:ring-gold/50 active:scale-95",
  {
    variants: {
      variant: {
        default: "bg-gradient-to-r from-deep-blue to-royal-blue text-white shadow-lg shadow-deep-blue/20 hover:shadow-deep-blue/40 hover:-translate-y-0.5",
        gold: "bg-gradient-to-r from-gold via-[#F1D279] to-gold text-navy shadow-lg shadow-gold/20 hover:shadow-gold/40 hover:-translate-y-0.5",
        destructive:
          "bg-destructive text-white hover:bg-destructive/90",
        outline:
          "border-2 border-deep-blue/20 bg-transparent text-deep-blue hover:bg-deep-blue/5 hover:border-deep-blue/40",
        secondary:
          "bg-mist-white text-deep-blue hover:bg-sky-blue/20 border border-deep-blue/10",
        ghost:
          "hover:bg-deep-blue/5 hover:text-deep-blue",
        link: "text-deep-blue underline-offset-4 hover:underline",
      },
      size: {
        default: "h-11 px-6 py-2",
        sm: "h-9 rounded-md px-4",
        lg: "h-13 rounded-xl px-8 text-base",
        icon: "size-10",
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
  const Comp = asChild ? Slot : "button"

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
