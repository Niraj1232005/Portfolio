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
      whileHover={{ scale: 1.04, y: -2 }}
      transition={{ type: "spring", stiffness: 280, damping: 18 }}
      className={cn(
        "inline-flex items-center gap-2 rounded-full border border-indigo-300/25",
        "bg-gradient-to-r from-indigo-500/20 via-purple-500/15 to-blue-500/20 px-3.5 py-2",
        "text-xs font-medium text-indigo-100 shadow-[0_0_28px_rgba(99,102,241,0.24)]",
        className
      )}
    >
      {icon ? <span className="text-sm text-indigo-200">{icon}</span> : null}
      {label}
    </motion.span>
  );
}
