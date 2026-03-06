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
      whileHover={hover ? { y: -4, scale: 1.015 } : undefined}
      transition={{ type: "spring", stiffness: 260, damping: 20 }}
      className={cn(
        "group relative overflow-hidden rounded-2xl border border-white/10",
        "bg-white/[0.03] p-4 backdrop-blur-md shadow-[0_18px_44px_-34px_rgba(0,0,0,0.9)] transition-colors duration-300 sm:p-6",
        hover ? "hover:border-white/20 hover:bg-white/[0.045]" : "",
        className
      )}
    >
      {hover ? (
        <div className="pointer-events-none absolute inset-0 rounded-[inherit] bg-gradient-to-br from-indigo-500/10 via-transparent to-violet-500/10 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
      ) : null}
      <div className="relative z-10">{children}</div>
    </motion.div>
  );
}
