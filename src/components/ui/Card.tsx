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
      whileHover={hover ? { y: -8, scale: 1.01, rotate: -0.45 } : undefined}
      transition={{ type: "spring", stiffness: 280, damping: 22 }}
      className={cn(
        "group relative overflow-hidden rounded-3xl border border-[#d8ccb8]",
        "bg-[#fffaf1]/95 p-4 shadow-[0_18px_42px_-28px_rgba(31,26,20,0.24)] transition-colors duration-300 sm:p-6",
        hover ? "hover:border-[#ff7a1a]/50 hover:bg-[#fff8ee]" : "",
        className
      )}
    >
      {hover ? (
        <div className="pointer-events-none absolute inset-0 rounded-[inherit] bg-gradient-to-br from-[#ff7a1a]/18 via-transparent to-[#9ad122]/14 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
      ) : null}
      <div className="pointer-events-none absolute -right-10 -top-10 h-24 w-24 rounded-full bg-[#ff4f4f]/10 blur-xl" />
      <div className="relative z-10">{children}</div>
    </motion.div>
  );
}

