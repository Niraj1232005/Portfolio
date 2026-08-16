"use client";

import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export default function EditorialCanvas({
  children,
}: {
  children: React.ReactNode;
}) {
  const [mounted, setMounted] = useState(false);
  const mouseX = useMotionValue(-1000);
  const mouseY = useMotionValue(-1000);

  const springConfig = { damping: 35, stiffness: 180 };
  const smoothX = useSpring(mouseX, springConfig);
  const smoothY = useSpring(mouseY, springConfig);

  useEffect(() => {
    setMounted(true);
    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [mouseX, mouseY]);

  return (
    <div className="relative min-h-screen bg-[#fafafa] dark:bg-[#050505] text-[#0a0a0a] dark:text-[#f2f2f2] font-sans antialiased overflow-hidden transition-colors duration-300">
      {/* Dynamic, subtle mouse ambient glow */}
      {mounted && (
        <motion.div
          aria-hidden
          className="pointer-events-none fixed inset-0 z-0 overflow-hidden"
        >
          <motion.div
            className="absolute h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-black/[0.02] dark:bg-white/[0.025] blur-[140px]"
            style={{
              left: smoothX,
              top: smoothY,
            }}
          />
        </motion.div>
      )}

      {/* Subtle fine film texture */}
      <div
        aria-hidden
        className="pointer-events-none fixed inset-0 z-0 opacity-[0.03] dark:opacity-[0.025] [background-image:radial-gradient(currentColor_1px,transparent_1px)] [background-size:24px_24px]"
      />

      {/* Continuous page content */}
      <div className="relative z-10">{children}</div>
    </div>
  );
}
