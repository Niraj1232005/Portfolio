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
        "inline-flex items-center gap-2 rounded-full border border-slate-200/20",
        "bg-gradient-to-r from-slate-300/12 via-indigo-300/12 to-violet-300/12 px-3.5 py-2",
        "text-xs font-medium text-slate-100 shadow-[0_0_24px_rgba(129,140,248,0.18)]",
        className
      )}
    >
      {icon ? <span className="text-sm text-slate-200">{icon}</span> : null}
      {label}
    </motion.span>
  );
}
