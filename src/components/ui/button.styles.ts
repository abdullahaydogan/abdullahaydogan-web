import { cn } from "@/utils/cn";

export type ButtonVariant = "primary" | "secondary" | "ghost";
export type ButtonSize = "sm" | "md" | "lg";

export interface GetButtonClassNameOptions {
  variant?: ButtonVariant;
  size?: ButtonSize;
  className?: string;
}

const baseStyles = [
  "inline-flex items-center justify-center gap-2",
  "rounded-pill font-medium",
  "transition-[color,background-color,border-color,box-shadow,transform]",
  "duration-200",
  "focus-visible:outline-2",
  "focus-visible:outline-offset-4",
  "focus-visible:outline-brand-500",
  "disabled:pointer-events-none",
  "disabled:opacity-50",
].join(" ");

const variantStyles: Record<ButtonVariant, string> = {
  primary: [
    "bg-brand-600 text-white shadow-soft",
    "hover:bg-brand-700",
    "active:translate-y-px",
  ].join(" "),

  secondary: [
    "border border-line bg-surface/85 text-ink shadow-soft",
    "hover:border-brand-300 hover:text-brand-700",
    "active:translate-y-px",
  ].join(" "),

  ghost: [
    "text-ink-soft",
    "hover:bg-surface-soft hover:text-ink",
    "active:translate-y-px",
  ].join(" "),
};

const sizeStyles: Record<ButtonSize, string> = {
  sm: "h-9 px-4 text-sm",
  md: "h-11 px-5 text-sm",
  lg: "h-12 px-6 text-base",
};

export function getButtonClassName({
  variant = "primary",
  size = "md",
  className,
}: GetButtonClassNameOptions = {}) {
  return cn(
    baseStyles,
    variantStyles[variant],
    sizeStyles[size],
    className,
  );
}