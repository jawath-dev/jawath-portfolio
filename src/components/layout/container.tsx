import type { ComponentPropsWithoutRef, ElementType, ReactNode } from "react";

import { cn } from "@/lib/utils";

type ContainerElement =
  | "div"
  | "section"
  | "main"
  | "header"
  | "footer"
  | "nav"
  | "article"
  | "aside";

type ContainerProps<T extends ContainerElement = "div"> = {
  as?: T;
  children: ReactNode;
  className?: string;
} & Omit<ComponentPropsWithoutRef<T>, "as" | "children" | "className">;

export function Container<T extends ContainerElement = "div">({
  as,
  children,
  className,
  ...props
}: ContainerProps<T>) {
  const Component = (as ?? "div") as ElementType;

  return (
    <Component
      className={cn(
        "mx-auto w-full min-w-0 max-w-[88rem] px-4 xs:px-5 sm:px-6 md:px-7 lg:px-8 xl:px-10 2xl:px-12",
        className,
      )}
      {...props}
    >
      {children}
    </Component>
  );
}
