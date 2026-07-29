"use client";

import { motion, useReducedMotion } from "framer-motion";
import type { ComponentPropsWithoutRef, ElementType, ReactNode } from "react";

import { cn } from "@/lib/utils";

const MOTION_ELEMENTS = {
  div: motion.div,
  section: motion.section,
  article: motion.article,
  aside: motion.aside,
  header: motion.header,
  footer: motion.footer,
  main: motion.main,
  nav: motion.nav,
} as const;

type SectionRevealElement = keyof typeof MOTION_ELEMENTS;

type SectionRevealProps = {
  children: ReactNode;
  as?: SectionRevealElement;
  className?: string;
  distance?: number;
  duration?: number;
  delay?: number;
  amount?: number;
  once?: boolean;
} & Omit<ComponentPropsWithoutRef<"div">, "children" | "className">;

export function SectionReveal({
  children,
  as = "div",
  className,
  distance = 48,
  duration = 0.65,
  delay = 0,
  amount = 0.15,
  once = true,
  ...props
}: SectionRevealProps) {
  const prefersReducedMotion = useReducedMotion();

  const StaticComponent = as as ElementType;
  const MotionComponent = MOTION_ELEMENTS[as] as ElementType;

  if (prefersReducedMotion) {
    return (
      <StaticComponent className={cn(className)} {...props}>
        {children}
      </StaticComponent>
    );
  }

  return (
    <MotionComponent
      initial={{ y: distance }}
      whileInView={{ y: 0 }}
      viewport={{
        once,
        amount,
      }}
      transition={{
        duration,
        delay,
        ease: [0.16, 1, 0.3, 1],
      }}
      className={cn(className)}
      {...props}
    >
      {children}
    </MotionComponent>
  );
}
