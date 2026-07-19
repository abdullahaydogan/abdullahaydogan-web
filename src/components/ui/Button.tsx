import type {
  ButtonHTMLAttributes,
  ReactNode,
} from "react";

import {
  getButtonClassName,
  type ButtonSize,
  type ButtonVariant,
} from "@/components/ui/button.styles";

interface ButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  variant?: ButtonVariant;
  size?: ButtonSize;
}

function Button({
  className,
  variant = "primary",
  size = "md",
  type = "button",
  children,
  ...props
}: ButtonProps) {
  return (
    <button
      type={type}
      className={getButtonClassName({
        variant,
        size,
        className,
      })}
      {...props}
    >
      {children}
    </button>
  );
}

export default Button;