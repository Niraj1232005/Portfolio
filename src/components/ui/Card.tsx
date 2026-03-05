"use client";

import { ReactNode } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/cn";

type CardProps = {
  children: ReactNode;
  className?: string;
  hover?: boolean;
};

export default function Card({
  children,
  className,
  hover = true,
}: CardProps) {
  return (
    <motion.div
      whileHover={hover ? { y: -6, scale: 1.01 } : undefined}
      transition={{ type: "spring", stiffness: 280, damping: 22 }}
      className={cn(
        "group relative overflow-hidden rounded-2xl border border-white/12",
        "bg-white/[0.04] p-6 backdrop-blur-xl shadow-[0_24px_60px_-36px_rgba(76,81,191,0.55)]",
        className
      )}
    >
      <div className="pointer-events-none absolute -inset-px rounded-[inherit] bg-gradient-to-r from-indigo-500/0 via-purple-400/35 to-blue-500/0 opacity-0 blur-sm transition-opacity duration-300 group-hover:opacity-100" />
      <div className="relative z-10">{children}</div>
    </motion.div>
  );
}
