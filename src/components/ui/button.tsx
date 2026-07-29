import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  [
    "inline-flex items-center justify-center whitespace-nowrap rounded-[20px]",
    "text-sm font-medium",
    "transition-[background-color,border-color,color,box-shadow,transform]",
    "duration-300 ease-[cubic-bezier(0.16,1,0.3,1)]",
    "focus-visible:outline-none",
    "focus-visible:ring-2 focus-visible:ring-accent",
    "focus-visible:ring-offset-2 focus-visible:ring-offset-background",
    "disabled:pointer-events-none disabled:opacity-50",
    "motion-safe:hover:-translate-y-0.5",
    "motion-safe:active:translate-y-0 motion-safe:active:scale-[0.985]",
    "motion-reduce:transform-none motion-reduce:transition-none",
  ].join(" "),
  {
    variants: {
      variant: {
        primary:
          "bg-primary text-primary-foreground shadow-[0_10px_28px_rgba(0,0,0,0.14)] hover:bg-slate-800 hover:shadow-[0_14px_34px_rgba(0,0,0,0.18)]",
        secondary:
          "border border-border bg-surface text-foreground shadow-[0_8px_24px_rgba(0,0,0,0.08)] hover:border-white/15 hover:bg-surface-muted hover:shadow-[0_12px_30px_rgba(0,0,0,0.12)]",
        ghost: "bg-transparent text-foreground hover:bg-surface-muted",
      },
      size: {
        sm: "h-10 px-4",
        md: "h-12 px-6",
        lg: "h-14 px-8 text-base",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "md",
    },
  },
);

export interface ButtonProps
  extends
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, type = "button", ...props }, ref) => (
    <button
      ref={ref}
      type={type}
      className={cn(buttonVariants({ variant, size }), className)}
      {...props}
    />
  ),
);

Button.displayName = "Button";

export { Button, buttonVariants };
