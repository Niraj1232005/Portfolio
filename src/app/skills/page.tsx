"use client";

import { motion } from "framer-motion";
import { skillCategories } from "@/data/content";

const techColors: Record<string, { dot: string; hoverText: string; hoverBg: string }> = {
  Java: { dot: "bg-[#EA580C]", hoverText: "hover:text-[#EA580C]", hoverBg: "hover:bg-[#EA580C]/10" },
  Python: { dot: "bg-[#38BDF8]", hoverText: "hover:text-[#38BDF8]", hoverBg: "hover:bg-[#38BDF8]/10" },
  JavaScript: { dot: "bg-[#FACC15]", hoverText: "hover:text-[#FACC15]", hoverBg: "hover:bg-[#FACC15]/10" },
  TypeScript: { dot: "bg-[#60A5FA]", hoverText: "hover:text-[#60A5FA]", hoverBg: "hover:bg-[#60A5FA]/10" },
  HTML: { dot: "bg-[#F97316]", hoverText: "hover:text-[#F97316]", hoverBg: "hover:bg-[#F97316]/10" },
  CSS: { dot: "bg-[#38BDF8]", hoverText: "hover:text-[#38BDF8]", hoverBg: "hover:bg-[#38BDF8]/10" },
  React: { dot: "bg-[#22D3EE]", hoverText: "hover:text-[#22D3EE]", hoverBg: "hover:bg-[#22D3EE]/10" },
  "Next.js": { dot: "bg-zinc-400", hoverText: "hover:text-black dark:hover:text-white", hoverBg: "hover:bg-black/10 dark:hover:bg-white/10" },
  "Framer Motion": { dot: "bg-[#C084FC]", hoverText: "hover:text-[#C084FC]", hoverBg: "hover:bg-[#C084FC]/10" },
  "Node.js": { dot: "bg-[#4ADE80]", hoverText: "hover:text-[#4ADE80]", hoverBg: "hover:bg-[#4ADE80]/10" },
  Express: { dot: "bg-zinc-400", hoverText: "hover:text-zinc-700 dark:hover:text-zinc-200", hoverBg: "hover:bg-zinc-500/10" },
  "REST APIs": { dot: "bg-[#FB923C]", hoverText: "hover:text-[#FB923C]", hoverBg: "hover:bg-[#FB923C]/10" },
  Authentication: { dot: "bg-[#A78BFA]", hoverText: "hover:text-[#A78BFA]", hoverBg: "hover:bg-[#A78BFA]/10" },
  PostgreSQL: { dot: "bg-[#60A5FA]", hoverText: "hover:text-[#60A5FA]", hoverBg: "hover:bg-[#60A5FA]/10" },
  MySQL: { dot: "bg-[#38BDF8]", hoverText: "hover:text-[#38BDF8]", hoverBg: "hover:bg-[#38BDF8]/10" },
  Firestore: { dot: "bg-[#FBBF24]", hoverText: "hover:text-[#FBBF24]", hoverBg: "hover:bg-[#FBBF24]/10" },
  Supabase: { dot: "bg-[#34D399]", hoverText: "hover:text-[#34D399]", hoverBg: "hover:bg-[#34D399]/10" },
  "Google Cloud": { dot: "bg-[#60A5FA]", hoverText: "hover:text-[#60A5FA]", hoverBg: "hover:bg-[#60A5FA]/10" },
  Docker: { dot: "bg-[#38BDF8]", hoverText: "hover:text-[#38BDF8]", hoverBg: "hover:bg-[#38BDF8]/10" },
  "CI/CD": { dot: "bg-[#818CF8]", hoverText: "hover:text-[#818CF8]", hoverBg: "hover:bg-[#818CF8]/10" },
  "Cloud Run": { dot: "bg-[#38BDF8]", hoverText: "hover:text-[#38BDF8]", hoverBg: "hover:bg-[#38BDF8]/10" },
  Dataflow: { dot: "bg-[#60A5FA]", hoverText: "hover:text-[#60A5FA]", hoverBg: "hover:bg-[#60A5FA]/10" },
  Git: { dot: "bg-[#F97316]", hoverText: "hover:text-[#F97316]", hoverBg: "hover:bg-[#F97316]/10" },
  GitHub: { dot: "bg-zinc-400", hoverText: "hover:text-black dark:hover:text-white", hoverBg: "hover:bg-black/10 dark:hover:bg-white/10" },
  Postman: { dot: "bg-[#FB923C]", hoverText: "hover:text-[#FB923C]", hoverBg: "hover:bg-[#FB923C]/10" },
  Linux: { dot: "bg-[#FACC15]", hoverText: "hover:text-[#FACC15]", hoverBg: "hover:bg-[#FACC15]/10" },
  "VS Code": { dot: "bg-[#60A5FA]", hoverText: "hover:text-[#60A5FA]", hoverBg: "hover:bg-[#60A5FA]/10" },
};

export default function SkillsPage() {
  return (
    <div className="min-h-screen px-6 sm:px-12 lg:px-20 pt-32 sm:pt-40 pb-24 max-w-6xl mx-auto">
      {/* Header Section Marker */}
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className="flex items-center justify-between border-b border-black/[0.08] dark:border-white/[0.08] pb-6 mb-16"
      >
        <span className="font-mono text-xs uppercase tracking-[0.25em] text-zinc-500">
          03 // Capabilities &amp; Technical Index
        </span>
        <span className="font-mono text-xs text-zinc-400 dark:text-zinc-600">
          TOOLKIT &amp; PLATFORMS
        </span>
      </motion.div>

      {/* Editorial Heading Statement */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
        className="max-w-2xl mb-16 space-y-4"
      >
        <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-[#0a0a0a] dark:text-[#f2f2f2]">
          Technologies &amp; Architecture Tools
        </h1>
        <p className="text-sm sm:text-base text-zinc-600 dark:text-zinc-400 font-light leading-relaxed">
          Languages, frameworks, databases, and DevOps utilities applied in production development.
        </p>
      </motion.div>

      {/* Clean Editorial Technical Index (No Card Boxes) */}
      <div className="divide-y divide-black/[0.06] dark:divide-white/[0.06] border-y border-black/[0.06] dark:border-white/[0.06]">
        {skillCategories.map((category, idx) => (
          <motion.div
            key={category.title}
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5, delay: idx * 0.06, ease: [0.16, 1, 0.3, 1] }}
            className="grid grid-cols-1 md:grid-cols-12 gap-3 md:gap-8 py-8 items-baseline hover:bg-black/[0.015] dark:hover:bg-white/[0.015] px-3 rounded-xl transition-colors"
          >
            {/* Category Column */}
            <div className="md:col-span-3">
              <span className="font-mono text-xs uppercase tracking-widest text-zinc-500 font-semibold">
                {category.title}
              </span>
            </div>

            {/* Technologies Flow */}
            <div className="md:col-span-9 flex flex-wrap items-center gap-x-5 gap-y-3">
              {category.skills.map((skill, sIdx) => {
                const colorConfig = techColors[skill] || {
                  dot: "bg-zinc-400",
                  hoverText: "hover:text-black dark:hover:text-white",
                  hoverBg: "hover:bg-black/10 dark:hover:bg-white/10",
                };

                return (
                  <span
                    key={skill}
                    className={`group inline-flex items-center gap-2 px-3 py-1.5 rounded-lg text-sm font-medium text-zinc-700 dark:text-zinc-300 transition-all duration-200 cursor-default select-none ${colorConfig.hoverText} ${colorConfig.hoverBg}`}
                  >
                    <span
                      className={`inline-block h-1.5 w-1.5 rounded-full ${colorConfig.dot} opacity-70 group-hover:opacity-100 transition-opacity`}
                    />
                    <span>{skill}</span>
                    {sIdx < category.skills.length - 1 && (
                      <span className="text-zinc-300 dark:text-zinc-700 ml-1.5 text-xs select-none">
                        ·
                      </span>
                    )}
                  </span>
                );
              })}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
