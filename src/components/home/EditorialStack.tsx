"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { FiArrowUpRight } from "react-icons/fi";
import { skillCategories } from "@/data/content";

const techColors: Record<string, { dot: string; hoverText: string; hoverBg: string }> = {
  Java: { dot: "bg-[#EA580C]", hoverText: "hover:text-[#EA580C]", hoverBg: "hover:bg-[#EA580C]/10" },
  Python: { dot: "bg-[#38BDF8]", hoverText: "hover:text-[#38BDF8]", hoverBg: "hover:bg-[#38BDF8]/10" },
  JavaScript: { dot: "bg-[#FACC15]", hoverText: "hover:text-[#FACC15]", hoverBg: "hover:bg-[#FACC15]/10" },
  TypeScript: { dot: "bg-[#60A5FA]", hoverText: "hover:text-[#60A5FA]", hoverBg: "hover:bg-[#60A5FA]/10" },
  HTML: { dot: "bg-[#F97316]", hoverText: "hover:text-[#F97316]", hoverBg: "hover:bg-[#F97316]/10" },
  CSS: { dot: "bg-[#38BDF8]", hoverText: "hover:text-[#38BDF8]", hoverBg: "hover:bg-[#38BDF8]/10" },
  React: { dot: "bg-[#22D3EE]", hoverText: "hover:text-[#22D3EE]", hoverBg: "hover:bg-[#22D3EE]/10" },
  "Next.js": { dot: "bg-zinc-400", hoverText: "hover:text-white dark:hover:text-white", hoverBg: "hover:bg-white/10" },
  "Framer Motion": { dot: "bg-[#C084FC]", hoverText: "hover:text-[#C084FC]", hoverBg: "hover:bg-[#C084FC]/10" },
  "Node.js": { dot: "bg-[#4ADE80]", hoverText: "hover:text-[#4ADE80]", hoverBg: "hover:bg-[#4ADE80]/10" },
  Express: { dot: "bg-zinc-400", hoverText: "hover:text-zinc-200", hoverBg: "hover:bg-zinc-500/10" },
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
  GitHub: { dot: "bg-zinc-400", hoverText: "hover:text-white", hoverBg: "hover:bg-white/10" },
  Postman: { dot: "bg-[#FB923C]", hoverText: "hover:text-[#FB923C]", hoverBg: "hover:bg-[#FB923C]/10" },
  Linux: { dot: "bg-[#FACC15]", hoverText: "hover:text-[#FACC15]", hoverBg: "hover:bg-[#FACC15]/10" },
  "VS Code": { dot: "bg-[#60A5FA]", hoverText: "hover:text-[#60A5FA]", hoverBg: "hover:bg-[#60A5FA]/10" },
};

export default function EditorialStack() {
  return (
    <section className="relative px-6 sm:px-12 lg:px-20 py-24 sm:py-32 bg-[#fafafa] dark:bg-[#09090b] border-t border-black/[0.06] dark:border-white/[0.06] transition-colors duration-300">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="flex items-center justify-between border-b border-black/[0.08] dark:border-white/[0.08] pb-6 mb-12">
          <span className="font-mono text-xs uppercase tracking-[0.25em] text-zinc-500">
            02 // Tech Stack
          </span>
          <Link
            href="/skills"
            className="group flex items-center gap-1 font-mono text-xs text-zinc-600 dark:text-zinc-400 hover:text-black dark:hover:text-white transition"
          >
            <span>All Skills</span>
            <FiArrowUpRight className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </Link>
        </div>

        {/* Compact Editorial Matrix */}
        <div className="divide-y divide-black/[0.05] dark:divide-white/[0.05] border-y border-black/[0.05] dark:border-white/[0.05]">
          {skillCategories.map((category, idx) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: idx * 0.06, ease: [0.16, 1, 0.3, 1] }}
              className="grid grid-cols-1 md:grid-cols-12 gap-2 md:gap-8 py-5 items-baseline hover:bg-black/[0.015] dark:hover:bg-white/[0.015] px-2 rounded-lg transition-colors"
            >
              {/* Category Column */}
              <div className="md:col-span-3">
                <span className="font-mono text-xs uppercase tracking-widest text-zinc-400 dark:text-zinc-500">
                  {category.title}
                </span>
              </div>

              {/* Technologies List with Subtle Tasteful Tech Accents */}
              <div className="md:col-span-9 flex flex-wrap items-center gap-x-4 gap-y-2">
                {category.skills.map((skill, sIdx) => {
                  const colorConfig = techColors[skill] || {
                    dot: "bg-zinc-400",
                    hoverText: "hover:text-white",
                    hoverBg: "hover:bg-white/10",
                  };

                  return (
                    <span
                      key={skill}
                      className={`group inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md text-sm font-medium text-zinc-700 dark:text-zinc-300 transition-all duration-200 cursor-default select-none ${colorConfig.hoverText} ${colorConfig.hoverBg}`}
                    >
                      <span
                        className={`inline-block h-1.5 w-1.5 rounded-full ${colorConfig.dot} opacity-70 group-hover:opacity-100 transition-opacity`}
                      />
                      <span>{skill}</span>
                      {sIdx < category.skills.length - 1 && (
                        <span className="text-zinc-300 dark:text-zinc-700 ml-1 text-xs select-none">
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
    </section>
  );
}
