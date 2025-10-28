import { cn } from "@/lib/utils";

interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  variant?:
    | "default"
    | "lead"
    | "proposta"
    | "contrato"
    | "cliente"
    | "arquivado";
}

const variantStyles: Record<NonNullable<BadgeProps["variant"]>, string> = {
  default: "bg-slate-200 text-slate-700",
  lead: "bg-slate-200 text-slate-700",
  proposta: "bg-blue-100 text-blue-700",
  contrato: "bg-purple-100 text-purple-700",
  cliente: "bg-emerald-100 text-emerald-700",
  arquivado: "bg-red-100 text-red-700",
};

export function Badge({
  className,
  variant = "default",
  ...props
}: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full px-2 py-1 text-xs font-semibold uppercase tracking-wide",
        variantStyles[variant],
        className
      )}
      {...props}
    />
  );
}
