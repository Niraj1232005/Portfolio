"use client";

import { motion } from "framer-motion";
import { FiArrowUpRight, FiDownload } from "react-icons/fi";

export default function EditorialResume() {
  return (
    <section className="relative px-6 sm:px-12 lg:px-20 py-24 sm:py-32 bg-[#070709] border-t border-white/[0.06]">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-baseline justify-between gap-8">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="space-y-2"
          >
            <span className="font-mono text-xs uppercase tracking-[0.25em] text-zinc-500">
              06 // Curriculum Vitae
            </span>
            <h3 className="text-2xl sm:text-3xl font-light text-[#f2f2f2] tracking-tight">
              Education, experience, and engineering background.
            </h3>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-wrap items-center gap-4 font-mono text-xs"
          >
            <a
              href="/nirajrathod_resume.pdf"
              target="_blank"
              rel="noreferrer"
              className="group inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/[0.05] px-5 py-3 text-zinc-200 hover:border-white/40 hover:bg-white hover:text-black transition duration-300"
            >
              <span>View Resume</span>
              <FiArrowUpRight className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>

            <a
              href="/nirajrathod_resume.pdf"
              download="Niraj_Rathod_Resume.pdf"
              className="inline-flex items-center gap-2 rounded-full border border-white/10 px-5 py-3 text-zinc-400 hover:text-white hover:border-white/20 transition duration-300"
            >
              <FiDownload className="text-zinc-500" />
              <span>Download PDF</span>
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
