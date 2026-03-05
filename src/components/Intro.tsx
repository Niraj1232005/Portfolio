"use client";

import { useEffect, useState, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

type Particle = { x: number; y: number; delay: number; size: number; duration: number };

export default function Intro({ onFinish }: { onFinish: () => void }) {
  const [particles, setParticles] = useState<Particle[]>([]);
  const [isExiting, setIsExiting] = useState(false);

  const handleFinish = useCallback(() => {
    if (isExiting) return;
    setIsExiting(true);
    setTimeout(onFinish, 1200); // Small buffer for exit animation
  }, [onFinish, isExiting]);

  useEffect(() => {
    // Generate cinematic ash/fire particles
    const generatedParticles = Array.from({ length: 150 }, () => {
      const angle = Math.random() * Math.PI * 2;
      const distance = 200 + Math.random() * 600;
      return {
        x: Math.cos(angle) * distance,
        y: Math.sin(angle) * distance,
        delay: Math.random() * 2,
        size: Math.random() * 3 + 1,
        duration: 2 + Math.random() * 2,
      };
    });

    setParticles(generatedParticles);

    const timer = setTimeout(handleFinish, 6000);
    window.addEventListener("keydown", handleFinish);
    window.addEventListener("click", handleFinish);

    return () => {
      clearTimeout(timer);
      window.removeEventListener("keydown", handleFinish);
      window.removeEventListener("click", handleFinish);
    };
  }, [handleFinish]);

  return (
    <AnimatePresence>
      {!isExiting && (
        <motion.div
          key="intro-container"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
          className="fixed inset-0 bg-black flex items-center justify-center overflow-hidden z-[9999] cursor-none"
        >
          {/* 1. Deep Ambient Background */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-red-950/40 via-black to-black" />

          {/* 2. Animated Grid Floor (Futuristic Feel) */}
          <div
            className="absolute inset-0 opacity-[0.15]"
            style={{
              backgroundImage: `linear-gradient(#ff0000 1px, transparent 1px), linear-gradient(90deg, #ff0000 1px, transparent 1px)`,
              backgroundSize: '50px 50px',
              maskImage: 'radial-gradient(ellipse at center, black, transparent 80%)'
            }}
          />

          {/* 3. Central Energy Core (The Glow behind Logo) */}
          <motion.div
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.3, 0.6, 0.3],
            }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="absolute w-[400px] h-[400px] bg-red-600/20 rounded-full blur-[120px]"
          />

          {/* 4. Explosion/Ash Particles */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            {particles.map((p, i) => (
              <motion.div
                key={i}
                initial={{ x: 0, y: 0, opacity: 0 }}
                animate={{
                  x: isExiting ? p.x * 1.5 : p.x,
                  y: isExiting ? p.y * 1.5 : p.y,
                  opacity: isExiting ? 0 : [0, 1, 0]
                }}
                transition={{
                  duration: p.duration,
                  repeat: isExiting ? 0 : Infinity,
                  delay: p.delay,
                  ease: "easeOut",
                }}
                className="absolute bg-gradient-to-t from-red-600 to-orange-400 rounded-full shadow-[0_0_10px_rgba(255,50,0,0.8)]"
                style={{ width: p.size, height: p.size }}
              />
            ))}
          </div>

          {/* 5. Main Brand Presentation */}
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
            className="relative z-10 flex flex-col items-center"
          >
            <div className="relative group">
              {/* Decorative Rings */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="absolute -inset-8 border border-red-500/20 rounded-full border-dashed"
              />
              <motion.div
                animate={{ rotate: -360 }}
                transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                className="absolute -inset-12 border border-white/5 rounded-full"
              />

              {/* Logo Container - Circle shape with centered 'NR' logo */}
              <div className="w-48 h-48 rounded-full border border-white/10 flex items-center justify-center relative overflow-hidden shadow-[0_0_50px_rgba(220,38,38,0.3)] p-6">
                <Image
                  src="/logo_new.png" // Ensure this path is correct in your public folder
                  alt="Logo"
                  width={250} // Large width to ensure it fills the circle area
                  height={250} // Large height to ensure it fills the circle area
                  className="object-contain z-10 w-full h-full"
                  priority
                />
                {/* Internal Lens Flare */}
                <div className="absolute inset-0 bg-gradient-to-tr from-red-600/20 to-transparent" />
              </div>
            </div>

            {/* Text Reveal */}
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="mt-12 text-center"
            >
              <h2 className="text-white text-3xl font-black tracking-[0.4em] uppercase italic">
                Niraj<span className="text-red-600 underline decoration-red-600/50 underline-offset-8">Rathod</span>
              </h2>
              <div className="mt-4 h-[1px] w-12 bg-red-600 mx-auto" />
              <p className="mt-4 text-gray-500 text-xs tracking-[0.2em] font-light">
                SYSTEMS READY // PRESS ANY KEY
              </p>
            </motion.div>
          </motion.div>

          {/* 6. Scanline Effect Overlay */}
          <div className="absolute inset-0 pointer-events-none bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.25)_50%),linear-gradient(90deg,rgba(255,0,0,0.06),rgba(0,255,0,0.02),rgba(0,0,255,0.06))] z-20 bg-[length:100%_2px,3px_100%]" />
        </motion.div>
      )}
    </AnimatePresence>
  );
}