"use client";

import { motion } from "framer-motion";
import {
  FiArrowUpRight,
  FiGithub,
  FiLinkedin,
  FiMail,
  FiPhone,
  FiUser,
} from "react-icons/fi";
import { contactMethods } from "@/data/content";

const methodIcons: Record<string, typeof FiMail> = {
  Phone: FiPhone,
  Email: FiMail,
  "College Email": FiUser,
  GitHub: FiGithub,
  LinkedIn: FiLinkedin,
  Peerlist: FiArrowUpRight,
};

export default function ContactPage() {
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
          05 // Direct Contact
        </span>
        <span className="font-mono text-xs text-zinc-400 dark:text-zinc-600">
          GET IN TOUCH
        </span>
      </motion.div>

      {/* Massive Editorial Closing Typography */}
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
        className="max-w-4xl space-y-6 mb-16"
      >
        <h1 className="text-5xl sm:text-7xl lg:text-8xl font-bold tracking-tighter text-[#0a0a0a] dark:text-[#f2f2f2] leading-[0.92]">
          Let&apos;s build
          <br />
          <span className="text-zinc-400 dark:text-zinc-600 hover:text-black dark:hover:text-white transition-colors duration-400">
            something useful.
          </span>
        </h1>
        <p className="text-base sm:text-lg text-zinc-600 dark:text-zinc-400 font-light max-w-xl leading-relaxed">
          Open to software engineering internships, backend architecture collaborations, and technical discussions.
        </p>
      </motion.div>

      {/* Clean Contact Channels Grid */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 border-t border-black/[0.08] dark:border-white/[0.08] pt-12"
      >
        {contactMethods.map((method) => {
          const Icon = methodIcons[method.label] || FiArrowUpRight;
          const isExternal = method.href.startsWith("http");

          return (
            <a
              key={method.label}
              href={method.href}
              target={isExternal ? "_blank" : undefined}
              rel={isExternal ? "noreferrer" : undefined}
              className="group p-5 rounded-xl border border-black/10 dark:border-white/10 hover:border-black/30 dark:hover:border-white/30 bg-black/[0.015] dark:bg-white/[0.015] hover:bg-black/[0.03] dark:hover:bg-white/[0.03] transition-all duration-200 flex items-center justify-between"
            >
              <div className="flex items-center gap-3.5">
                <span className="flex h-9 w-9 items-center justify-center rounded-lg border border-black/10 dark:border-white/10 text-zinc-600 dark:text-zinc-400 group-hover:text-black dark:group-hover:text-white transition">
                  <Icon className="text-sm" />
                </span>
                <div>
                  <span className="block font-mono text-[10px] uppercase tracking-widest text-zinc-400 dark:text-zinc-500">
                    {method.label}
                  </span>
                  <span className="block text-sm font-medium text-zinc-800 dark:text-zinc-200 group-hover:text-black dark:group-hover:text-white transition">
                    {method.value}
                  </span>
                </div>
              </div>
              <FiArrowUpRight className="text-zinc-400 dark:text-zinc-600 group-hover:text-black dark:group-hover:text-white transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
          );
        })}
      </motion.div>

      {/* Quick Direct Email Action */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
        className="mt-12 p-6 sm:p-8 rounded-2xl border border-black/10 dark:border-white/10 bg-black/[0.02] dark:bg-white/[0.02] flex flex-col sm:flex-row sm:items-center justify-between gap-6"
      >
        <div>
          <span className="font-mono text-xs uppercase tracking-widest text-zinc-500">
            Direct Reach
          </span>
          <p className="text-sm sm:text-base text-zinc-700 dark:text-zinc-300 font-light mt-1">
            Email is the quickest channel to discuss engineering roles and projects.
          </p>
        </div>

        <a
          href="mailto:rathodniraj.com@gmail.com"
          className="inline-flex items-center justify-center gap-2 rounded-full bg-black text-white dark:bg-white dark:text-black px-6 py-3 text-xs font-mono tracking-wider font-medium hover:opacity-85 transition shrink-0"
        >
          <FiMail />
          <span>rathodniraj.com@gmail.com</span>
        </a>
      </motion.div>
    </div>
  );
}
