"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { FiArrowUpRight } from "react-icons/fi";
import { skillCategories } from "@/data/content";

export default function EditorialSkills() {
  return (
    <section className="relative px-6 sm:px-12 lg:px-20 py-28 sm:py-36 bg-[#0c0c0e] border-t border-white/[0.06]">
      <div className="max-w-6xl mx-auto">
        {/* Section Marker */}
        <div className="flex items-center justify-between border-b border-white/[0.08] pb-6 mb-16">
          <span className="font-mono text-xs uppercase tracking-[0.25em] text-zinc-500">
            03 // Capabilities &amp; Stack
          </span>
          <Link
            href="/skills"
            className="group flex items-center gap-1 font-mono text-xs text-zinc-400 hover:text-white transition"
          >
            <span>All Skills</span>
            <FiArrowUpRight className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </Link>
        </div>

        {/* Typography-Driven Flowing Field */}
        <div className="space-y-12">
          {skillCategories.map((cat, idx) => (
            <motion.div
              key={cat.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, delay: idx * 0.08, ease: [0.16, 1, 0.3, 1] }}
              className="grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-8 items-baseline border-b border-white/[0.04] pb-8"
            >
              {/* Category Label */}
              <div className="md:col-span-3">
                <span className="font-mono text-xs uppercase tracking-widest text-zinc-500">
                  {cat.title}
                </span>
              </div>

              {/* Flowing Word List */}
              <div className="md:col-span-9 flex flex-wrap gap-x-6 gap-y-3">
                {cat.skills.map((skill) => (
                  <span
                    key={skill}
                    className="text-xl sm:text-2xl lg:text-3xl font-light text-zinc-400 hover:text-white hover:underline underline-offset-8 decoration-white/30 transition-all duration-200 cursor-default select-none"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
