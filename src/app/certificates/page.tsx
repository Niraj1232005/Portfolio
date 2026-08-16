"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { FiArrowUpRight, FiAward } from "react-icons/fi";
import { certificates } from "@/data/content";

export default function CertificatesPage() {
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
          04 // Certifications Archive ({certificates.length})
        </span>
        <span className="font-mono text-xs text-zinc-400 dark:text-zinc-600">
          CREDENTIALS &amp; SPECIALIZATIONS
        </span>
      </motion.div>

      {/* Editorial Heading Statement */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
        className="max-w-2xl mb-14 space-y-4"
      >
        <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-[#0a0a0a] dark:text-[#f2f2f2]">
          Validated Milestones
        </h1>
        <p className="text-sm sm:text-base text-zinc-600 dark:text-zinc-400 font-light leading-relaxed">
          Professional certificates validating knowledge in cloud computing, blockchain systems, and computer architecture.
        </p>
      </motion.div>

      {/* Clean Chronological / Editorial Timeline List */}
      <div className="divide-y divide-black/[0.06] dark:divide-white/[0.06] border-y border-black/[0.06] dark:border-white/[0.06]">
        {certificates.map((cert, idx) => (
          <motion.div
            key={cert.slug}
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5, delay: idx * 0.08, ease: [0.16, 1, 0.3, 1] }}
          >
            <Link
              href={`/certificates/${cert.slug}`}
              className="group py-8 flex flex-col sm:flex-row sm:items-center justify-between gap-6 hover:bg-black/[0.015] dark:hover:bg-white/[0.015] px-4 rounded-xl transition duration-200"
            >
              <div className="flex items-start sm:items-center gap-6">
                <span className="font-mono text-sm tracking-widest text-zinc-400 dark:text-zinc-600 group-hover:text-black dark:group-hover:text-white transition">
                  0{idx + 1}
                </span>
                <div>
                  <h2 className="text-lg sm:text-xl font-medium text-zinc-900 dark:text-zinc-100 group-hover:text-black dark:group-hover:text-white transition">
                    {cert.title}
                  </h2>
                  <p className="mt-1 font-mono text-xs text-zinc-500 flex items-center gap-2">
                    <FiAward className="text-xs" />
                    <span>{cert.issuer}</span>
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-2 font-mono text-xs text-zinc-500 group-hover:text-black dark:group-hover:text-white transition self-end sm:self-auto">
                <span>View &amp; Verify</span>
                <FiArrowUpRight className="text-sm transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </div>
            </Link>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
