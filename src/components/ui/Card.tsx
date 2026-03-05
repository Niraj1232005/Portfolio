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
        "group relative overflow-hidden rounded-xl border border-white/14 sm:rounded-2xl",
        "bg-white/[0.05] p-4 backdrop-blur-xl shadow-[0_22px_56px_-36px_rgba(30,41,59,0.7)] sm:p-6",
        className
      )}
    >
      <div className="pointer-events-none absolute -inset-px rounded-[inherit] bg-gradient-to-r from-slate-300/0 via-indigo-300/35 to-violet-300/0 opacity-0 blur-sm transition-opacity duration-300 group-hover:opacity-100" />
      <div className="relative z-10">{children}</div>
    </motion.div>
  );
}
