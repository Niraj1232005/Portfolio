"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useEffect } from "react";
import {
  FiAward,
  FiCode,
  FiFileText,
  FiFolder,
  FiHome,
  FiUser,
} from "react-icons/fi";
import { cn } from "@/lib/cn";
import ThemeToggle from "@/components/ThemeToggle";

export default function Navbar() {
  const pathname = usePathname();
  const router = useRouter();

  const navItems = [
    { href: "/?intro=0", matchPath: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/projects", label: "Projects" },
    { href: "/skills", label: "Skills" },
    { href: "/certificates", label: "Certificates" },
  ];

  const mobileNavItems = [
    { href: "/?intro=1", matchPath: "/", label: "Home", icon: FiHome },
    { href: "/about", label: "About", icon: FiUser },
    { href: "/projects", label: "Projects", icon: FiFolder },
    { href: "/skills", label: "Skills", icon: FiCode },
    { href: "/certificates", label: "Certificates", icon: FiAward },
  ];

  const isActive = (href: string) => {
    if (href === "/" || href === "/?intro=0") return pathname === "/";
    return pathname.startsWith(href);
  };

  useEffect(() => {
    const handleKeyPress = (e: KeyboardEvent) => {
      if (!e.shiftKey || e.ctrlKey || e.metaKey || e.altKey) return;

      if (e.key === "H") router.push("/?intro=0");
      if (e.key === "A") router.push("/about");
      if (e.key === "P") router.push("/projects");
      if (e.key === "S") router.push("/skills");
      if (e.key === "C") router.push("/certificates");
      if (e.key === "M") router.push("/contact");
    };

    window.addEventListener("keydown", handleKeyPress);
    return () => window.removeEventListener("keydown", handleKeyPress);
  }, [router]);

  return (
    <>
      {/* Desktop Global Navbar */}
      <header className="fixed inset-x-0 top-0 z-50 hidden justify-center px-6 pt-5 md:flex pointer-events-none">
        <div className="pointer-events-auto flex w-full max-w-5xl items-center justify-between px-6 py-2.5 transition-all duration-300 rounded-full border border-black/10 dark:border-white/[0.08] bg-white/80 dark:bg-[#070707]/85 backdrop-blur-xl shadow-sm dark:shadow-[0_10px_30px_rgba(0,0,0,0.6)]">
          <Link href="/?intro=1" className="group flex items-center gap-3">
            <span className="relative flex h-8 w-8 items-center justify-center overflow-hidden rounded-lg border border-black/10 dark:border-white/10 bg-black/[0.03] dark:bg-white/[0.03] transition duration-300 group-hover:border-black/40 dark:group-hover:border-white/40">
              <Image src="/logo_new.png" alt="NR logo" width={20} height={20} className="opacity-90" />
            </span>
            <span className="text-xs font-mono uppercase tracking-[0.2em] font-medium text-zinc-800 dark:text-zinc-300 group-hover:text-black dark:group-hover:text-white transition duration-300">
              Niraj Rathod
            </span>
          </Link>

          <nav>
            <ul className="flex items-center gap-1 text-xs font-mono">
              {navItems.map((item) => {
                const active = isActive(item.matchPath ?? item.href);
                return (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      className={cn(
                        "relative px-3 py-1.5 transition-colors duration-200 tracking-wider",
                        active
                          ? "text-black dark:text-white font-medium"
                          : "text-zinc-500 dark:text-zinc-400 hover:text-black dark:hover:text-zinc-100",
                      )}
                    >
                      {item.label}
                      {active && (
                        <motion.span
                          layoutId="navbar-indicator"
                          className="absolute -bottom-1 left-3 right-3 h-[1.5px] bg-black/70 dark:bg-white/70"
                          transition={{ type: "spring", stiffness: 380, damping: 30 }}
                        />
                      )}
                    </Link>
                  </li>
                );
              })}

              {/* Standout Global Resume Action Button */}
              <li className="ml-3 pl-3 border-l border-black/10 dark:border-white/[0.08]">
                <a
                  href="/nirajrathod_resume.pdf"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1.5 rounded-full px-4 py-1.5 text-xs font-medium transition duration-200 font-mono tracking-wider bg-black text-white dark:bg-white dark:text-black hover:opacity-85 shadow-sm"
                >
                  <FiFileText className="text-xs" />
                  <span>Resume</span>
                </a>
              </li>

              {/* Theme Toggle */}
              <li className="ml-1.5">
                <ThemeToggle className="rounded-full p-1.5 text-zinc-500 dark:text-zinc-400 hover:text-black dark:hover:text-white transition" />
              </li>
            </ul>
          </nav>
        </div>
      </header>

      {/* Mobile Global Navigation Bar */}
      <nav className="fixed bottom-5 left-1/2 z-50 -translate-x-1/2 md:hidden">
        <ul className="flex items-center gap-1 rounded-full p-2 backdrop-blur-2xl border border-black/10 dark:border-white/10 bg-white/90 dark:bg-[#070707]/90 shadow-[0_15px_35px_rgba(0,0,0,0.12)] dark:shadow-[0_15px_35px_rgba(0,0,0,0.8)]">
          {mobileNavItems.map((item) => {
            const Icon = item.icon;
            const active = isActive(item.matchPath ?? item.href);

            return (
              <li key={item.href}>
                <Link
                  href={item.href}
                  aria-label={item.label}
                  className={cn(
                    "grid h-10 w-10 place-content-center rounded-full text-base transition duration-200",
                    active
                      ? "bg-black text-white dark:bg-white dark:text-black font-semibold"
                      : "text-zinc-600 dark:text-zinc-400 hover:text-black dark:hover:text-white",
                  )}
                >
                  <Icon />
                  <span className="sr-only">{item.label}</span>
                </Link>
              </li>
            );
          })}

          {/* Mobile Resume Link */}
          <li>
            <a
              href="/nirajrathod_resume.pdf"
              target="_blank"
              rel="noreferrer"
              aria-label="Resume"
              className="grid h-10 w-10 place-content-center rounded-full text-base text-zinc-600 dark:text-zinc-400 hover:text-black dark:hover:text-white transition"
            >
              <FiFileText />
              <span className="sr-only">Resume</span>
            </a>
          </li>

          <li>
            <ThemeToggle className="grid h-10 w-10 place-content-center rounded-full text-base transition text-zinc-600 dark:text-zinc-400 hover:text-black dark:hover:text-white" />
          </li>
        </ul>
      </nav>
    </>
  );
}
