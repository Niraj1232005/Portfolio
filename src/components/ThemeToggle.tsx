"use client";

import { useEffect, useState } from "react";
import { FiMoon, FiSun } from "react-icons/fi";

export default function ThemeToggle() {
  const [dark, setDark] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem("theme");
    if (saved === "dark") {
      document.documentElement.classList.add("dark");
      setDark(true);
    }
  }, []);

  const toggleTheme = () => {
    const root = document.documentElement;

    if (dark) {
      root.classList.remove("dark");
      localStorage.setItem("theme", "light");
    } else {
      root.classList.add("dark");
      localStorage.setItem("theme", "dark");
    }

    setDark(!dark);
  };

  return (
    <button
      onClick={toggleTheme}
  className="rounded-xl border border-[var(--surface-border)] bg-[var(--surface)] p-2 text-[var(--foreground)] hover:scale-105 transition"
    >
      {dark ? <FiSun /> : <FiMoon />}
    </button>
  );
}