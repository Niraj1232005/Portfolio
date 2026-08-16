"use client";

import { useEffect, useState } from "react";
import { FiMoon, FiSun } from "react-icons/fi";
import { cn } from "@/lib/cn";

type ThemeToggleProps = {
  className?: string;
};

export default function ThemeToggle({ className }: ThemeToggleProps) {
  const [dark, setDark] = useState(true);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const saved = localStorage.getItem("theme");
    // Default to dark mode unless explicitly set to light
    const isDark = saved ? saved === "dark" : true;
    setDark(isDark);
    if (isDark) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, []);

  const toggleTheme = () => {
    const root = document.documentElement;
    const nextDark = !dark;

    if (nextDark) {
      root.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      root.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }

    setDark(nextDark);
  };

  if (!mounted) {
    return (
      <button
        aria-label="Toggle Theme"
        className={cn(
          "rounded-full p-2 text-zinc-500 dark:text-zinc-400 transition",
          className
        )}
      >
        <FiSun />
      </button>
    );
  }

  return (
    <button
      onClick={toggleTheme}
      aria-label="Toggle Theme"
      className={cn(
        "rounded-full p-2 text-zinc-600 dark:text-zinc-400 hover:text-black dark:hover:text-white transition",
        className
      )}
    >
      {dark ? <FiSun /> : <FiMoon />}
    </button>
  );
}