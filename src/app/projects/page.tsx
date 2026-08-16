"use client";

import { useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { FiExternalLink, FiGithub } from "react-icons/fi";
import { projects, Project } from "@/data/content";

export default function ProjectsPage() {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeProject: Project = projects[activeIndex] || projects[0];

  return (
    <div className="min-h-screen px-6 sm:px-12 lg:px-20 pt-32 sm:pt-40 pb-24 max-w-6xl mx-auto">
      {/* Header Section Marker */}
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className="flex items-center justify-between border-b border-black/[0.08] dark:border-white/[0.08] pb-6 mb-14"
      >
        <span className="font-mono text-xs uppercase tracking-[0.25em] text-zinc-500">
          02 // Project Archive ({projects.length})
        </span>
        <span className="font-mono text-xs text-zinc-400 dark:text-zinc-600">
          SELECTED ENGINEERING WORKS
        </span>
      </motion.div>

      {/* Main Archive Grid: Interactive Project List + Dynamic Preview */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
        {/* Left: Scalable Project Rows */}
        <div className="lg:col-span-5 space-y-3">
          {projects.map((project, idx) => {
            const isSelected = activeIndex === idx;

            return (
              <button
                key={project.title}
                type="button"
                onClick={() => setActiveIndex(idx)}
                onMouseEnter={() => setActiveIndex(idx)}
                className={`w-full text-left py-5 px-4 rounded-xl transition-all duration-300 flex items-center justify-between ${
                  isSelected
                    ? "bg-black/[0.05] dark:bg-white/[0.05] border border-black/10 dark:border-white/15"
                    : "border border-transparent hover:bg-black/[0.02] dark:hover:bg-white/[0.02] opacity-60 hover:opacity-100"
                }`}
              >
                <div className="flex items-baseline gap-4">
                  <span className="font-mono text-xs text-zinc-500">
                    0{idx + 1}
                  </span>
                  <span
                    className={`text-xl sm:text-2xl font-medium tracking-tight transition-transform duration-300 ${
                      isSelected
                        ? "text-black dark:text-white translate-x-1"
                        : "text-zinc-700 dark:text-zinc-400"
                    }`}
                  >
                    {project.title}
                  </span>
                </div>

                <span
                  className={`font-mono text-xs transition-colors duration-300 ${
                    isSelected
                      ? "text-black dark:text-white"
                      : "text-zinc-400 dark:text-zinc-600"
                  }`}
                >
                  {project.tech[0]}
                </span>
              </button>
            );
          })}
        </div>

        {/* Right: Sticky Dynamic Project Inspection & Preview Area */}
        <div className="lg:col-span-7 lg:sticky lg:top-32">
          <div className="relative rounded-2xl border border-black/10 dark:border-white/10 bg-white dark:bg-[#0c0c0e] p-5 sm:p-7 shadow-sm dark:shadow-none transition-colors duration-300">
            {/* Preview Image */}
            <div className="relative aspect-[16/10] w-full overflow-hidden rounded-xl bg-zinc-100 dark:bg-zinc-950 border border-black/5 dark:border-white/5">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeProject.title}
                  initial={{ opacity: 0, scale: 0.98 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 1.02 }}
                  transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                  className="relative h-full w-full"
                >
                  <Image
                    src={activeProject.image}
                    alt={activeProject.title}
                    fill
                    priority
                    sizes="(max-width: 1024px) 100vw, 45vw"
                    className="object-cover"
                  />
                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Active Project Meta & Full Tech Badges */}
            <AnimatePresence mode="wait">
              <motion.div
                key={activeProject.title + "-meta"}
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.25 }}
                className="mt-6 space-y-4"
              >
                <div className="flex flex-wrap items-baseline justify-between gap-2 border-b border-black/[0.06] dark:border-white/[0.06] pb-3">
                  <h2 className="text-xl font-bold text-black dark:text-white">
                    {activeProject.title}
                  </h2>
                  <span className="font-mono text-xs text-zinc-500">
                    STATUS: PRODUCTION
                  </span>
                </div>

                <p className="text-sm text-zinc-600 dark:text-zinc-400 font-light leading-relaxed">
                  {activeProject.description}
                </p>

                {/* All Tech Badges */}
                <div className="flex flex-wrap gap-1.5 pt-1">
                  {activeProject.tech.map((t) => (
                    <span
                      key={t}
                      className="px-2.5 py-1 rounded-md bg-black/[0.04] dark:bg-white/[0.04] border border-black/5 dark:border-white/5 font-mono text-xs text-zinc-700 dark:text-zinc-300"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                {/* Action Links */}
                <div className="flex items-center gap-4 pt-3 border-t border-black/[0.06] dark:border-white/[0.06] font-mono text-xs">
                  <a
                    href={activeProject.github}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1.5 rounded-full border border-black/15 dark:border-white/15 bg-black/[0.04] dark:bg-white/[0.04] px-4 py-2 text-zinc-800 dark:text-zinc-200 hover:border-black/30 dark:hover:border-white/30 hover:text-black dark:hover:text-white transition"
                  >
                    <FiGithub className="text-sm" />
                    <span>View Repository</span>
                  </a>
                  {activeProject.live && (
                    <a
                      href={activeProject.live}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-1.5 rounded-full bg-black text-white dark:bg-white dark:text-black px-4 py-2 font-medium hover:opacity-85 transition"
                    >
                      <FiExternalLink className="text-sm" />
                      <span>Live Deployment</span>
                    </a>
                  )}
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </div>
  );
}
