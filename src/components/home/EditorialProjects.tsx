"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { FiArrowUpRight, FiExternalLink, FiGithub } from "react-icons/fi";
import { projects, Project } from "@/data/content";

export default function EditorialProjects() {
  const [activeIndex, setActiveIndex] = useState(0);
  const featuredProjects = projects.slice(0, 3);
  const activeProject: Project = featuredProjects[activeIndex] || featuredProjects[0];

  return (
    <section className="relative px-6 sm:px-12 lg:px-20 py-24 sm:py-32 bg-[#f4f4f5] dark:bg-[#060608] border-t border-black/[0.06] dark:border-white/[0.06] transition-colors duration-300">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="flex items-center justify-between border-b border-black/[0.08] dark:border-white/[0.08] pb-6 mb-14">
          <span className="font-mono text-xs uppercase tracking-[0.25em] text-zinc-500">
            01 // Selected Works
          </span>
          <Link
            href="/projects"
            className="group flex items-center gap-1 font-mono text-xs text-zinc-600 dark:text-zinc-400 hover:text-black dark:hover:text-white transition"
          >
            <span>All Projects</span>
            <FiArrowUpRight className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </Link>
        </div>

        {/* Interactive Layout: Clean Project Selector List & Compact Preview */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          {/* Left: Minimal Interactive Project List */}
          <div className="lg:col-span-5 space-y-3">
            {featuredProjects.map((project, idx) => {
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
                      className={`text-2xl sm:text-3xl font-medium tracking-tight transition-transform duration-300 ${
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

          {/* Right: Elegant Designated Project Preview Area */}
          <div className="lg:col-span-7">
            <div className="relative rounded-2xl border border-black/10 dark:border-white/10 bg-white dark:bg-[#0c0c0e] p-5 sm:p-6 shadow-sm dark:shadow-none transition-colors duration-300">
              {/* Preview Image Container */}
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

              {/* Active Project Details */}
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeProject.title + "-meta"}
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -8 }}
                  transition={{ duration: 0.25 }}
                  className="mt-5 space-y-3"
                >
                  <div className="flex flex-wrap items-baseline justify-between gap-2">
                    <h3 className="text-lg font-semibold text-black dark:text-white">
                      {activeProject.title}
                    </h3>
                    <div className="flex flex-wrap gap-1.5 font-mono text-[11px] text-zinc-500">
                      {activeProject.tech.slice(0, 4).map((t) => (
                        <span
                          key={t}
                          className="px-2 py-0.5 rounded-md bg-black/[0.04] dark:bg-white/[0.04] border border-black/5 dark:border-white/5"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>

                  <p className="text-xs sm:text-sm text-zinc-600 dark:text-zinc-400 font-light leading-relaxed line-clamp-2">
                    {activeProject.description}
                  </p>

                  <div className="flex items-center gap-4 pt-2 font-mono text-xs">
                    <a
                      href={activeProject.github}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-1.5 text-zinc-700 dark:text-zinc-300 hover:text-black dark:hover:text-white transition"
                    >
                      <FiGithub className="text-sm" />
                      <span>Source Code</span>
                    </a>
                    {activeProject.live && (
                      <a
                        href={activeProject.live}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-1.5 text-black dark:text-white font-medium hover:underline transition"
                      >
                        <FiExternalLink className="text-sm" />
                        <span>Live Demo</span>
                      </a>
                    )}
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
