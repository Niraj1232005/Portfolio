"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { FiArrowUpRight } from "react-icons/fi";
import { certificates } from "@/data/content";

export default function EditorialCertificates() {
  const featuredCerts = certificates.slice(0, 2);

  return (
    <section className="relative px-6 sm:px-12 lg:px-20 py-24 sm:py-32 bg-[#f4f4f5] dark:bg-[#070709] border-t border-black/[0.06] dark:border-white/[0.06] transition-colors duration-300">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="flex items-center justify-between border-b border-black/[0.08] dark:border-white/[0.08] pb-6 mb-10">
          <span className="font-mono text-xs uppercase tracking-[0.25em] text-zinc-500">
            03 // Certifications
          </span>
          <Link
            href="/certificates"
            className="group flex items-center gap-1 font-mono text-xs text-zinc-600 dark:text-zinc-400 hover:text-black dark:hover:text-white transition"
          >
            <span>View all ({certificates.length})</span>
            <FiArrowUpRight className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </Link>
        </div>

        {/* 2 Featured Certificate Entries in Clean Compact Format */}
        <div className="divide-y divide-black/[0.06] dark:divide-white/[0.06]">
          {featuredCerts.map((cert, idx) => (
            <motion.div
              key={cert.slug}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: idx * 0.08, ease: [0.16, 1, 0.3, 1] }}
            >
              <Link
                href={`/certificates/${cert.slug}`}
                className="group py-6 flex flex-col sm:flex-row sm:items-baseline justify-between gap-4 transition duration-200"
              >
                <div className="flex items-baseline gap-4 sm:gap-6">
                  <span className="font-mono text-xs text-zinc-400 dark:text-zinc-600 group-hover:text-zinc-800 dark:group-hover:text-zinc-300 transition">
                    0{idx + 1}
                  </span>
                  <h3 className="text-base sm:text-lg font-medium text-zinc-800 dark:text-zinc-200 group-hover:text-black dark:group-hover:text-white transition">
                    {cert.title}
                  </h3>
                </div>

                <div className="flex items-center gap-3 text-xs font-mono text-zinc-500 pl-8 sm:pl-0">
                  <span>{cert.issuer}</span>
                  <FiArrowUpRight className="text-zinc-400 dark:text-zinc-600 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-black dark:group-hover:text-white" />
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
