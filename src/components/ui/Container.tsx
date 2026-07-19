import type { ComponentPropsWithoutRef } from "react";

import { cn } from "@/utils/cn";

type ContainerProps = ComponentPropsWithoutRef<"div">;

function Container({
  className,
  children,
  ...props
}: ContainerProps) {
  return (
    <div
      className={cn(
        "mx-auto w-full max-w-7xl px-5 sm:px-6 lg:px-8",
        className,
      )}
      {...props}
    >
      {children}
    </div>
  );
}

export default Container;