"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { FiArrowUpRight } from "react-icons/fi";
import { aboutParagraphs } from "@/data/content";

const coreFocusAreas = [
  "Backend Engineering & Systems",
  "API Design & Cloud Architecture",
  "Data Structures & Scaling",
];

export default function EditorialAbout() {
  return (
    <section className="relative px-6 sm:px-12 lg:px-20 py-28 sm:py-36 bg-[#0a0a0c] border-t border-white/[0.06]">
      <div className="max-w-6xl mx-auto">
        {/* Section Marker */}
        <div className="flex items-center justify-between border-b border-white/[0.08] pb-6 mb-16">
          <span className="font-mono text-xs uppercase tracking-[0.25em] text-zinc-500">
            01 // About
          </span>
          <Link
            href="/about"
            className="group flex items-center gap-1 font-mono text-xs text-zinc-400 hover:text-white transition"
          >
            <span>Full Bio</span>
            <FiArrowUpRight className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </Link>
        </div>

        {/* Editorial Two-Column Flow */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left: Oversized Statement */}
          <div className="lg:col-span-6 space-y-6">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="text-3xl sm:text-4xl lg:text-5xl font-light tracking-tight text-[#f2f2f2] leading-[1.2]"
            >
              Engineering robust software with{" "}
              <span className="text-zinc-500 font-normal">clarity</span>,{" "}
              <span className="text-zinc-500 font-normal">resilience</span>, and practical purpose.
            </motion.h2>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.8, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
              className="pt-6 space-y-3"
            >
              <p className="font-mono text-xs uppercase tracking-widest text-zinc-500">
                Primary Interests
              </p>
              <ul className="space-y-2 text-sm font-mono text-zinc-300">
                {coreFocusAreas.map((area) => (
                  <li key={area} className="flex items-center gap-3">
                    <span className="h-1 w-1 rounded-full bg-zinc-400" />
                    <span>{area}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>

          {/* Right: Narrative Paragraphs */}
          <div className="lg:col-span-6 space-y-6 text-base sm:text-lg text-zinc-400 font-light leading-relaxed">
            {aboutParagraphs.map((p, idx) => (
              <motion.p
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.8, delay: idx * 0.1, ease: [0.16, 1, 0.3, 1] }}
              >
                {p}
              </motion.p>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
