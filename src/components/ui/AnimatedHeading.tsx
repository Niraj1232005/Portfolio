"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/cn";
import { fadeInUp } from "@/components/ui/motion";

type AnimatedHeadingProps = {
  title: string;
  subtitle?: string;
  eyebrow?: string;
  align?: "left" | "center";
  level?: "h1" | "h2";
  gradientTitle?: boolean;
  className?: string;
  titleClassName?: string;
  subtitleClassName?: string;
};

export default function AnimatedHeading({
  title,
  subtitle,
  eyebrow,
  align = "left",
  level = "h2",
  gradientTitle = false,
  className,
  titleClassName,
  subtitleClassName,
}: AnimatedHeadingProps) {
  const Tag = level;

  return (
    <motion.div
      variants={fadeInUp}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.35 }}
      className={cn(align === "center" ? "text-center" : "text-left", className)}
    >
      {eyebrow ? (
        <p className="mb-3 text-xs font-medium uppercase tracking-[0.24em] text-slate-300/80">
          {eyebrow}
        </p>
      ) : null}
      <Tag
        className={cn(
          "text-3xl font-semibold tracking-tight sm:text-4xl lg:text-5xl",
          gradientTitle
            ? "bg-gradient-to-r from-slate-100 via-indigo-200 to-violet-200 bg-clip-text text-transparent"
            : "text-slate-100",
          titleClassName
        )}
      >
        {title}
      </Tag>
      {subtitle ? (
        <p
          className={cn(
            "mt-4 max-w-2xl text-sm leading-7 text-slate-300/90 sm:text-base",
            align === "center" ? "mx-auto" : "",
            subtitleClassName
          )}
        >
          {subtitle}
        </p>
      ) : null}
    </motion.div>
  );
}
