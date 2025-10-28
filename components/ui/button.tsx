import { forwardRef } from "react";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center rounded-md text-sm font-semibold transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 disabled:cursor-not-allowed disabled:opacity-60",
  {
    variants: {
      variant: {
        primary:
          "bg-brand-primary text-white focus-visible:outline-brand-primary hover:bg-brand-primary/90",
        secondary:
          "bg-brand-secondary text-brand-primary focus-visible:outline-brand-secondary hover:bg-brand-secondary/90",
        outline:
          "border border-slate-300 text-brand-primary focus-visible:outline-brand-primary hover:bg-slate-100",
        ghost:
          "text-brand-primary focus-visible:outline-brand-primary hover:bg-slate-100",
        destructive:
          "bg-red-600 text-white focus-visible:outline-red-600 hover:bg-red-700",
      },
      size: {
        sm: "h-8 px-3",
        md: "h-10 px-4",
        lg: "h-11 px-6",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "md",
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, ...props }, ref) => (
    <button
      ref={ref}
      className={cn(buttonVariants({ variant, size }), className)}
      {...props}
    />
  )
);
Button.displayName = "Button";

export { buttonVariants };
