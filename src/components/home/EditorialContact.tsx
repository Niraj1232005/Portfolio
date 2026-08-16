"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { FiArrowUp, FiArrowUpRight } from "react-icons/fi";
import { contactMethods } from "@/data/content";

export default function EditorialContact() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <section className="relative px-6 sm:px-12 lg:px-20 pt-28 sm:pt-36 pb-16 bg-[#fafafa] dark:bg-[#050505] border-t border-black/[0.06] dark:border-white/[0.06] transition-colors duration-300">
      <div className="max-w-6xl mx-auto">
        {/* Section Marker */}
        <div className="flex items-center justify-between border-b border-black/[0.08] dark:border-white/[0.08] pb-6 mb-14">
          <span className="font-mono text-xs uppercase tracking-[0.25em] text-zinc-500">
            04 // Contact
          </span>
          <Link
            href="/contact"
            className="group flex items-center gap-1 font-mono text-xs text-zinc-600 dark:text-zinc-400 hover:text-black dark:hover:text-white transition"
          >
            <span>Message Form</span>
            <FiArrowUpRight className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </Link>
        </div>

        {/* Massive Editorial Closing Typography */}
        <div className="py-8 sm:py-12">
          <motion.h2
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-tighter text-[#0a0a0a] dark:text-[#f2f2f2] leading-[0.92]"
          >
            Let&apos;s build
            <br />
            <span className="text-zinc-400 dark:text-zinc-600 hover:text-black dark:hover:text-white transition-colors duration-400">
              something useful.
            </span>
          </motion.h2>

          <p className="mt-6 text-sm sm:text-base text-zinc-600 dark:text-zinc-400 font-light max-w-xl">
            Available for engineering internships, backend architecture, and technical discussions.
          </p>
        </div>

        {/* Minimal Contact Channels List */}
        <div className="mt-8 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6 pt-10 border-t border-black/[0.06] dark:border-white/[0.06] font-mono text-xs">
          {contactMethods.map((method) => {
            const isExternal = method.href.startsWith("http");

            return (
              <a
                key={method.label}
                href={method.href}
                target={isExternal ? "_blank" : undefined}
                rel={isExternal ? "noreferrer" : undefined}
                className="group flex flex-col gap-1 transition duration-200"
              >
                <span className="text-zinc-400 dark:text-zinc-500 uppercase tracking-widest text-[10px]">
                  {method.label}
                </span>
                <span className="text-zinc-800 dark:text-zinc-300 group-hover:text-black dark:group-hover:text-white group-hover:underline underline-offset-4 transition flex items-center gap-1">
                  <span>{method.label === "Phone" ? "Call" : method.label}</span>
                  <FiArrowUpRight className="text-zinc-400 dark:text-zinc-600 group-hover:text-black dark:group-hover:text-white text-xs" />
                </span>
              </a>
            );
          })}
        </div>

        {/* Minimal Footer */}
        <div className="mt-24 pt-8 border-t border-black/[0.06] dark:border-white/[0.06] flex flex-col sm:flex-row items-center justify-between gap-4 font-mono text-xs text-zinc-500 dark:text-zinc-600">
          <div>
            <span>&copy; {new Date().getFullYear()} NIRAJ RATHOD</span>
          </div>

          <button
            onClick={scrollToTop}
            className="group flex items-center gap-2 text-zinc-600 dark:text-zinc-500 hover:text-black dark:hover:text-white transition"
          >
            <span>BACK TO TOP</span>
            <FiArrowUp className="transition-transform group-hover:-translate-y-0.5" />
          </button>
        </div>
      </div>
    </section>
  );
}
