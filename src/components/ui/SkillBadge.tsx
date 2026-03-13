"use client";

import { ReactNode } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/cn";

type SkillBadgeProps = {
  label: string;
  icon?: ReactNode;
  className?: string;
};

export default function SkillBadge({ label, icon, className }: SkillBadgeProps) {
  return (
    <motion.span
      whileHover={{ scale: 1.05, y: -3, rotate: -0.8 }}
      transition={{ type: "spring", stiffness: 320, damping: 18 }}
      className={cn(
        "inline-flex items-center gap-2 rounded-full border border-[#d8ccb8]",
        "bg-[#f6efdf] px-3.5 py-2 text-xs font-medium text-[#665e51] transition",
        "hover:border-[#ff7a1a]/55 hover:bg-gradient-to-r hover:from-[#ffedd5] hover:to-[#ecfccb] hover:text-[#1f1a14]",
        className
      )}
    >
      {icon ? <span className="text-sm text-[#a65713]">{icon}</span> : null}
      {label}
    </motion.span>
  );
}

