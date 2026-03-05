"use client";

import { useCallback, useEffect, useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";

type Particle = {
  x: number;
  y: number;
  size: number;
  delay: number;
  duration: number;
};

function createParticles(count: number): Particle[] {
  return Array.from({ length: count }, () => {
    const angle = Math.random() * Math.PI * 2;
    const radius = 130 + Math.random() * 340;

    return {
      x: Math.cos(angle) * radius,
      y: Math.sin(angle) * radius,
      size: Math.random() * 2.4 + 1.2,
      delay: Math.random() * 1.6,
      duration: 2 + Math.random() * 1.6,
    };
  });
}

export default function Intro({ onFinish }: { onFinish: () => void }) {
  const [mounted, setMounted] = useState(false);
  const [isExiting, setIsExiting] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const particles = useMemo(() => {
    if (!mounted) return [];
    return createParticles(180);
  }, [mounted]);

  const handleFinish = useCallback(() => {
    if (isExiting) return;
    setIsExiting(true);
    window.setTimeout(onFinish, 800);
  }, [isExiting, onFinish]);

  useEffect(() => {
    if (!mounted) return;

    const timer = window.setTimeout(handleFinish, 4200);

    window.addEventListener("keydown", handleFinish);
    window.addEventListener("click", handleFinish);

    return () => {
      window.clearTimeout(timer);
      window.removeEventListener("keydown", handleFinish);
      window.removeEventListener("click", handleFinish);
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
          className="fixed inset-0 z-[120] flex cursor-none items-center justify-center overflow-hidden bg-slate-950"
        >
          {/* Background glow */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(79,70,229,0.38),transparent_40%),radial-gradient(circle_at_82%_18%,rgba(168,85,247,0.26),transparent_32%),radial-gradient(circle_at_50%_90%,rgba(59,130,246,0.26),transparent_40%)]" />

          {/* Grid */}
          <div className="absolute inset-0 opacity-[0.16] [background-image:linear-gradient(to_right,rgba(148,163,184,0.2)_1px,transparent_1px),linear-gradient(to_bottom,rgba(148,163,184,0.18)_1px,transparent_1px)] [background-size:42px_42px] [mask-image:radial-gradient(circle_at_center,black,transparent_78%)]" />

          {/* Pulsing energy sphere */}
          <motion.div
            animate={{ scale: [1, 1.16, 1], opacity: [0.3, 0.65, 0.3] }}
            transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut" }}
            className="absolute h-[24rem] w-[24rem] rounded-full bg-indigo-500/30 blur-[120px]"
          />

          {/* Particles */}
          <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
            {particles.map((particle, index) => (
              <motion.div
                key={index}
                initial={{ x: 0, y: 0, opacity: 0 }}
                animate={{
                  x: particle.x,
                  y: particle.y,
                  opacity: [0, 0.9, 0],
                }}
                transition={{
                  duration: particle.duration,
                  delay: particle.delay,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="absolute rounded-full bg-gradient-to-r from-indigo-300 to-blue-300 shadow-[0_0_14px_rgba(129,140,248,0.85)]"
                style={{ width: particle.size, height: particle.size }}
              />
            ))}
          </div>

          {/* Center Content */}
          <motion.div
            initial={{ opacity: 0, y: 18, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.85, ease: [0.22, 1, 0.36, 1] }}
            className="relative z-20 text-center"
          >
            <div className="relative mx-auto mb-8 flex h-28 w-28 items-center justify-center rounded-full border border-indigo-200/30 bg-gradient-to-br from-indigo-500/20 via-purple-500/20 to-blue-500/20 shadow-[0_0_40px_rgba(99,102,241,0.4)]">
              <Image
                src="/logo_new.png"
                alt="NR logo"
                width={66}
                height={66}
                priority
              />
            </div>

            <h2 className="bg-gradient-to-r from-indigo-300 via-purple-300 to-blue-300 bg-clip-text text-4xl font-bold tracking-tight text-transparent sm:text-5xl">
              Niraj Rathod
            </h2>

            <motion.p
              animate={{ opacity: [0.55, 1, 0.55] }}
              transition={{ duration: 2.4, repeat: Infinity, ease: "easeInOut" }}
              className="mt-3 text-sm tracking-[0.24em] text-indigo-100/80"
            >
              Backend Engineer Portfolio
            </motion.p>

            <p className="mt-8 text-xs uppercase tracking-[0.2em] text-slate-400">
              Click or press any key to continue
            </p>
          </motion.div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}