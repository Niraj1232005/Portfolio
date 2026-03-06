"use client";

import { useCallback, useEffect, useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";

type Particle = {
  top: number;
  left: number;
  size: number;
  delay: number;
  duration: number;
  floatY: number;
};

const INTRO_TOTAL_MS = 5000;
const EXIT_ANIMATION_MS = 800;

function createParticles(count: number): Particle[] {
  const particles: Particle[] = [];
  while (particles.length < count) {
    const top = Math.random() * 100;
    const left = Math.random() * 100;
    const isNearCenter = left > 33 && left < 67 && top > 28 && top < 74;

    if (isNearCenter) continue;

    particles.push({
      top,
      left,
      size: Math.random() * 1.8 + 1,
      delay: Math.random() * 2.2,
      duration: 7 + Math.random() * 4.5,
      floatY: 5 + Math.random() * 8,
    });
  }
  return particles;
}

export default function Intro({ onFinish }: { onFinish: () => void }) {
  const [mounted, setMounted] = useState(false);
  const [isExiting, setIsExiting] = useState(false);

  useEffect(() => {
    const frameId = window.requestAnimationFrame(() => setMounted(true));
    return () => window.cancelAnimationFrame(frameId);
  }, []);

  const particles = useMemo(() => {
    if (!mounted) return [];
    const isMobile = window.innerWidth < 640;
    return createParticles(isMobile ? 24 : 44);
  }, [mounted]);

  const handleFinish = useCallback(() => {
    if (isExiting) return;
    setIsExiting(true);
    window.setTimeout(onFinish, EXIT_ANIMATION_MS);
  }, [isExiting, onFinish]);

  useEffect(() => {
    if (!mounted) return;

    const timer = window.setTimeout(
      handleFinish,
      INTRO_TOTAL_MS - EXIT_ANIMATION_MS
    );

    window.addEventListener("keydown", handleFinish);
    window.addEventListener("pointerdown", handleFinish);

    return () => {
      window.clearTimeout(timer);
      window.removeEventListener("keydown", handleFinish);
      window.removeEventListener("pointerdown", handleFinish);
    };
  }, [handleFinish, mounted]);

  if (!mounted) return null;

  return (
    <AnimatePresence>
      {!isExiting ? (
        <motion.div
          key="intro-overlay"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="fixed inset-0 z-[120] flex items-center justify-center overflow-hidden bg-[#0a0a0f]"
        >
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_42%,rgba(99,102,241,0.16),transparent_36%),radial-gradient(circle_at_50%_45%,rgba(139,92,246,0.12),transparent_48%),linear-gradient(180deg,#0a0a0f_0%,#0a0a0f_100%)]" />

          <div className="absolute inset-0 opacity-[0.1] [background-image:radial-gradient(rgba(148,163,184,0.32)_0.8px,transparent_0.8px)] [background-size:28px_28px]" />

          <motion.div
            animate={{ scale: [1, 1.08, 1], opacity: [0.22, 0.34, 0.22] }}
            transition={{ duration: 4.4, repeat: Infinity, ease: "easeInOut" }}
            className="absolute h-56 w-56 rounded-full bg-gradient-to-r from-indigo-500/18 to-violet-500/18 blur-2xl sm:h-72 sm:w-72 sm:blur-3xl"
          />

          <div className="pointer-events-none absolute inset-0">
            {particles.map((particle, index) => (
              <motion.span
                key={index}
                initial={{ opacity: 0.04 }}
                animate={{
                  y: [0, -particle.floatY, 0],
                  opacity: [0.06, 0.22, 0.06],
                }}
                transition={{
                  duration: particle.duration,
                  delay: particle.delay,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="absolute rounded-full bg-white/70"
                style={{
                  top: `${particle.top}%`,
                  left: `${particle.left}%`,
                  width: particle.size,
                  height: particle.size,
                }}
              />
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 18, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.85, ease: [0.22, 1, 0.36, 1] }}
            className="relative z-20 px-6 text-center"
          >
            <motion.div
              animate={{
                scale: [1, 1.035, 1],
                boxShadow: [
                  "0 0 0 rgba(99,102,241,0.2)",
                  "0 0 34px rgba(99,102,241,0.34)",
                  "0 0 0 rgba(99,102,241,0.2)",
                ],
              }}
              transition={{ duration: 3.2, repeat: Infinity, ease: "easeInOut" }}
              className="relative mx-auto mb-8 flex h-24 w-24 items-center justify-center rounded-full border border-white/15 bg-white/[0.04] sm:h-28 sm:w-28"
            >
              <Image
                src="/logo_new.png"
                alt="NR logo"
                width={66}
                height={66}
                priority
              />
            </motion.div>

            <h2 className="bg-gradient-to-r from-white via-indigo-200 to-violet-200 bg-clip-text text-4xl font-bold tracking-tight text-transparent sm:text-5xl">
              Niraj Rathod
            </h2>

            <p className="mt-3 text-xs tracking-[0.2em] text-slate-300 sm:text-sm">
              {"Backend Engineer \u2022 Cloud Systems \u2022 Full Stack Developer"}
            </p>

            <p className="mt-8 text-xs uppercase tracking-[0.2em] text-slate-400">
              Press any key to enter
            </p>
          </motion.div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}
