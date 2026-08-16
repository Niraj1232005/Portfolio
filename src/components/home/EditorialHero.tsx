"use client";

import { useEffect, useState, useTransition } from "react";
import { AnimatePresence, motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import Link from "next/link";
import { FiArrowDownRight, FiArrowUpRight, FiGithub, FiMail } from "react-icons/fi";

const subtitleLines = [
  "Backend-Focused Software Engineer",
  "Cloud Systems and API Architecture",
  "Building Reliable Full-Stack Products",
];

export default function EditorialHero() {
  const [subtitleIndex, setSubtitleIndex] = useState(0);
  const [, startTransition] = useTransition();

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const smoothX = useSpring(mouseX, { damping: 30, stiffness: 100 });
  const smoothY = useSpring(mouseY, { damping: 30, stiffness: 100 });

  const textShiftX = useTransform(smoothX, [-400, 400], [-8, 8]);
  const textShiftY = useTransform(smoothY, [-400, 400], [-6, 6]);

  useEffect(() => {
    const timer = window.setInterval(() => {
      startTransition(() => {
        setSubtitleIndex((prev) => (prev + 1) % subtitleLines.length);
      });
    }, 3600);
    return () => window.clearInterval(timer);
  }, []);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - (rect.left + rect.width / 2);
    const y = e.clientY - (rect.top + rect.height / 2);
    mouseX.set(x);
    mouseY.set(y);
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  return (
    <section
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="relative min-h-[100dvh] flex flex-col justify-between px-6 sm:px-12 lg:px-20 pt-24 pb-8 sm:pt-28 sm:pb-10 bg-[#fafafa] dark:bg-[#050505] transition-colors duration-300"
    >
      {/* Top Quiet Label & Location */}
      <motion.div
        initial={{ opacity: 0, y: -8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        className="flex items-center justify-between text-xs font-mono tracking-[0.25em] text-zinc-500 dark:text-zinc-500 uppercase"
      >
        <span className="flex items-center gap-2">
          <span className="inline-block h-1.5 w-1.5 rounded-full bg-zinc-700 dark:bg-zinc-400" />
          Interactive Portfolio
        </span>
        <span className="hidden sm:inline text-zinc-400 dark:text-zinc-600">Mumbai, India</span>
      </motion.div>

      {/* Main Hero Centerpiece */}
      <div className="my-auto py-4 sm:py-6 max-w-6xl w-full">
        {/* Name in Massive, Clean Typography */}
        <motion.div
          style={{ x: textShiftX, y: textShiftY }}
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.85, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
        >
          <h1 className="text-5xl sm:text-7xl md:text-8xl lg:text-[7.5rem] xl:text-[8.75rem] font-bold tracking-tighter text-[#0a0a0a] dark:text-[#f2f2f2] leading-[0.9] select-none">
            Niraj
            <br />
            <span className="text-zinc-400 dark:text-zinc-600 hover:text-black dark:hover:text-white transition-colors duration-400">
              Rathod
            </span>
          </h1>
        </motion.div>

        {/* Dynamic Positioning Statement & Description */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.22, ease: [0.16, 1, 0.3, 1] }}
          className="mt-6 sm:mt-8 grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-8 items-start border-t border-black/[0.08] dark:border-white/[0.08] pt-5 sm:pt-6"
        >
          <div className="md:col-span-6 h-7 overflow-hidden">
            <AnimatePresence mode="wait">
              <motion.p
                key={subtitleLines[subtitleIndex]}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -12 }}
                transition={{ duration: 0.3, ease: "easeOut" }}
                className="font-mono text-sm sm:text-base font-medium text-zinc-800 dark:text-zinc-300 tracking-wide"
              >
                — {subtitleLines[subtitleIndex]}
              </motion.p>
            </AnimatePresence>
          </div>

          <div className="md:col-span-6">
            <p className="text-sm sm:text-base text-zinc-600 dark:text-zinc-400 font-light leading-relaxed">
              Information Technology student at Vidyalankar Institute of Technology,
              focused on cloud-ready architecture, reliable APIs, and modern engineering.
            </p>
          </div>
        </motion.div>

        {/* Primary Actions */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.32, ease: [0.16, 1, 0.3, 1] }}
          className="mt-6 flex flex-wrap items-center gap-4 text-xs font-mono"
        >
          <Link
            href="/projects"
            className="group inline-flex items-center gap-2 rounded-full border border-black/20 dark:border-white/20 bg-black text-white dark:bg-white dark:text-black px-5 py-2.5 font-medium hover:opacity-85 transition duration-200"
          >
            <span>View Projects</span>
            <FiArrowUpRight className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </Link>

          <a
            href="mailto:rathodniraj.com@gmail.com"
            className="inline-flex items-center gap-2 rounded-full border border-black/10 dark:border-white/10 bg-black/[0.03] dark:bg-white/[0.04] px-4 py-2.5 text-zinc-700 dark:text-zinc-300 hover:border-black/30 dark:hover:border-white/30 hover:text-black dark:hover:text-white transition duration-200"
          >
            <FiMail className="text-zinc-500 dark:text-zinc-400" />
            <span>Email</span>
          </a>

          <a
            href="https://github.com/Niraj1232005"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-black/10 dark:border-white/10 bg-transparent px-4 py-2.5 text-zinc-600 dark:text-zinc-400 hover:border-black/30 dark:hover:border-white/30 hover:text-black dark:hover:text-white transition duration-200"
          >
            <FiGithub className="text-zinc-500 dark:text-zinc-400" />
            <span>GitHub</span>
          </a>
        </motion.div>
      </div>

      {/* Bottom Minimal Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.4 }}
        className="flex items-center justify-between pt-4 border-t border-black/[0.06] dark:border-white/[0.06] text-xs font-mono text-zinc-500"
      >
        <span className="tracking-widest uppercase text-[10px]">SELECTED WORK BELOW</span>
        <div className="flex items-center gap-1.5 tracking-widest text-[10px]">
          <span>SCROLL</span>
          <FiArrowDownRight className="text-zinc-500" />
        </div>
      </motion.div>
    </section>
  );
}
