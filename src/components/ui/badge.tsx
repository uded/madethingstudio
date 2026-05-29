import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "../../lib/utils";

const badgeVariants = cva(
  "inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium tracking-wide uppercase",
  {
    variants: {
      variant: {
        default: "bg-(--color-bg-elevated) text-(--color-fg-muted) border border-(--color-border)",
        grafana: "bg-(--color-grafana)/15 text-(--color-grafana) border border-(--color-grafana)/30",
        pro: "bg-(--color-pro)/15 text-(--color-pro) border border-(--color-pro)/30",
        success: "bg-(--color-success)/15 text-(--color-success) border border-(--color-success)/30",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
);

export interface BadgeProps
  extends React.HTMLAttributes<HTMLSpanElement>,
    VariantProps<typeof badgeVariants> {}

function Badge({ className, variant, ...props }: BadgeProps) {
  return <span className={cn(badgeVariants({ variant }), className)} {...props} />;
}

export { Badge, badgeVariants };
