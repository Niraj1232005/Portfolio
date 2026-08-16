"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { FiArrowUpRight, FiCheck } from "react-icons/fi";
import { aboutParagraphs } from "@/data/content";

const coreInterests = [
  "Backend Engineering & Systems Architecture",
  "API Design & Distributed Services",
  "Data Structures, Algorithms & Scaling",
  "DevOps, Docker & Cloud Infrastructure",
  "Full-Stack Development with Next.js & TypeScript",
];

const educationDetails = {
  degree: "Bachelor of Engineering in Information Technology",
  institution: "Vidyalankar Institute of Technology, Mumbai",
  focus: "Distributed Systems, Backend Architecture, Cloud Computing",
};

export default function AboutPage() {
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
          01 // About &amp; Philosophy
        </span>
        <span className="font-mono text-xs text-zinc-400 dark:text-zinc-600">
          MUMBAI, INDIA
        </span>
      </motion.div>

      {/* Main Editorial Narrative Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
        {/* Left: Large Architectural Statement */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="lg:col-span-5 space-y-6"
        >
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-[#0a0a0a] dark:text-[#f2f2f2] leading-[1.05]">
            Engineering with{" "}
            <span className="text-zinc-400 dark:text-zinc-600 font-normal">clarity</span>,{" "}
            <span className="text-zinc-400 dark:text-zinc-600 font-normal">scale</span>, and purpose.
          </h1>
          <p className="text-sm sm:text-base text-zinc-600 dark:text-zinc-400 font-light leading-relaxed">
            I focus on backend systems, clean API contracts, and scalable services that solve real-world problems reliably.
          </p>
        </motion.div>

        {/* Right: Biography Paragraphs */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="lg:col-span-7 space-y-8 text-base sm:text-lg text-zinc-700 dark:text-zinc-300 font-light leading-relaxed"
        >
          {aboutParagraphs.map((paragraph, idx) => (
            <p key={idx} className="border-l border-black/10 dark:border-white/10 pl-6 hover:border-black/40 dark:hover:border-white/40 transition-colors duration-200">
              {paragraph}
            </p>
          ))}
        </motion.div>
      </div>

      {/* Core Interests & Education (Typography & Spacing, No Cards) */}
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
        className="mt-24 pt-16 border-t border-black/[0.08] dark:border-white/[0.08] grid grid-cols-1 md:grid-cols-12 gap-12"
      >
        {/* Core Interests */}
        <div className="md:col-span-7 space-y-6">
          <span className="font-mono text-xs uppercase tracking-widest text-zinc-500">
            Core Engineering Interests
          </span>
          <ul className="space-y-3 font-mono text-xs sm:text-sm text-zinc-800 dark:text-zinc-300">
            {coreInterests.map((interest) => (
              <li key={interest} className="flex items-center gap-3">
                <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-black/[0.04] dark:bg-white/[0.04] text-zinc-600 dark:text-zinc-400">
                  <FiCheck className="text-xs" />
                </span>
                <span>{interest}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Education Details */}
        <div className="md:col-span-5 space-y-6">
          <span className="font-mono text-xs uppercase tracking-widest text-zinc-500">
            Academic Background
          </span>
          <div className="space-y-2">
            <h2 className="text-lg font-semibold text-black dark:text-white">
              {educationDetails.degree}
            </h2>
            <p className="font-mono text-xs text-zinc-500 dark:text-zinc-400">
              {educationDetails.institution}
            </p>
            <p className="text-xs text-zinc-600 dark:text-zinc-500 pt-2 font-light">
              Focus: {educationDetails.focus}
            </p>
          </div>

          <div className="pt-6">
            <Link
              href="/projects"
              className="inline-flex items-center gap-2 font-mono text-xs text-black dark:text-white hover:underline transition"
            >
              <span>Explore Projects</span>
              <FiArrowUpRight />
            </Link>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
