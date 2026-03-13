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
        <p className="mb-3 inline-flex items-center rounded-full border border-[var(--surface-border)] bg-[#fff4e0] dark:bg-[#fff4e0]/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.2em] text-[#a65713] dark:text-[var(--accent)]">
          {eyebrow}
        </p>
      ) : null}
      <Tag
        className={cn(
          "text-3xl font-semibold tracking-tight sm:text-4xl lg:text-5xl",
          gradientTitle
            ? "bg-gradient-to-r from-[var(--foreground)] via-[#ff7a1a] to-[#ff4f4f] bg-clip-text text-transparent"
            : "text-[var(--foreground)]",
          titleClassName
        )}
      >
        {title}
      </Tag>
      {subtitle ? (
        <p
          className={cn(
            "mt-4 max-w-2xl text-sm leading-7 text-[var(--foreground)]/80 sm:text-base",
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

