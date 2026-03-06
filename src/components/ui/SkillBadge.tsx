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
        "inline-flex items-center gap-2 rounded-full border border-white/12",
        "bg-white/[0.04] px-3.5 py-2 text-xs font-medium text-slate-300 transition",
        "hover:border-white/20 hover:bg-gradient-to-r hover:from-purple-500/18 hover:to-blue-500/18 hover:text-white",
        className
      )}
    >
      {icon ? <span className="text-sm text-slate-300">{icon}</span> : null}
      {label}
    </motion.span>
  );
}
