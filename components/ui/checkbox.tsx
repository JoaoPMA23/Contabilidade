import { forwardRef } from "react";

import { cn } from "@/lib/utils";

type CheckboxProps = React.InputHTMLAttributes<HTMLInputElement>;

export const Checkbox = forwardRef<HTMLInputElement, CheckboxProps>(
  ({ className, ...props }, ref) => (
    <input
      ref={ref}
      type="checkbox"
      className={cn(
        "h-4 w-4 rounded border border-slate-300 text-brand-primary focus:ring-2 focus:ring-brand-primary/30",
        className
      )}
      {...props}
    />
  )
);
Checkbox.displayName = "Checkbox";
