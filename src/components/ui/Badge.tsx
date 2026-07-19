import type { ComponentPropsWithoutRef } from "react";

import { cn } from "@/utils/cn";

type BadgeProps = ComponentPropsWithoutRef<"span">;

function Badge({
  className,
  children,
  ...props
}: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center",
        "rounded-pill border border-brand-200",
        "bg-brand-50 px-3 py-1",
        "text-xs font-medium text-brand-700",
        className,
      )}
      {...props}
    >
      {children}
    </span>
  );
}

export default Badge;