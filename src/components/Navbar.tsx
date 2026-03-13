"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import {
  FiAward,
  FiCode,
  FiFolder,
  FiHome,
  FiMail,
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
    { href: "/contact", label: "Contact", icon: FiMail },
  ];

  const isActive = (href: string) => {
    if (href === "/") return pathname === "/";
    return pathname.startsWith(href);
  };

  useEffect(() => {
    const handleKeyPress = (e: KeyboardEvent) => {
      const key = e.key.toLowerCase();

      if (key === "h") router.push("/?intro=0");
      if (key === "a") router.push("/about");
      if (key === "p") router.push("/projects");
      if (key === "s") router.push("/skills");
      if (key === "c") router.push("/certificates");
      if (key === "m") router.push("/contact");
    };

    window.addEventListener("keydown", handleKeyPress);
    return () => window.removeEventListener("keydown", handleKeyPress);
  }, [router]);

  return (
    <>
      <header className="fixed inset-x-0 top-4 z-50 hidden justify-center px-4 md:flex">
        <div className="flex w-full max-w-6xl items-center justify-between rounded-2xl border border-[var(--surface-border)] bg-[var(--surface)]/88 px-4 py-2.5 shadow-[0_22px_58px_-38px_rgba(31,26,20,0.45)] dark:shadow-none backdrop-blur sm:px-6">
          <Link href="/?intro=1" className="group flex items-center gap-3">
            <span className="relative flex h-9 w-9 items-center justify-center overflow-hidden rounded-xl border border-[var(--surface-border)] bg-[var(--surface-border)]/30 transition group-hover:-rotate-6 group-hover:scale-105">
              <Image src="/logo_new.png" alt="NR logo" width={24} height={24} />
            </span>
            <span className="hidden text-sm font-semibold tracking-wide text-[var(--foreground)] sm:inline">
              Niraj Rathod
            </span>
          </Link>

          <nav>
            <ul className="flex items-center gap-1.5 text-sm">
              {navItems.map((item) => (
                <motion.li key={item.href} whileHover={{ y: -2 }}>
                  <Link
                    href={item.href}
                    className={cn(
                      "rounded-xl border border-transparent px-3 py-2 transition duration-200",
                      isActive(item.matchPath ?? item.href)
                        ? "border-[#ff7a1a]/45 bg-[var(--surface-border)]/30 text-[var(--foreground)] shadow-[0_18px_36px_-24px_rgba(255,122,26,0.65)] dark:shadow-[0_18px_36px_-24px_rgba(255,122,26,0.2)]"
                        : "text-[var(--foreground)]/70 hover:border-[var(--surface-border)] hover:bg-[var(--surface-border)]/30 hover:text-[var(--foreground)]"
                    )}
                  >
                    {item.label}
                  </Link>
                </motion.li>
              ))}
              <li className="ml-1">
                <Link
                  href="/contact"
                  className="rounded-xl bg-gradient-to-r from-[#ff7a1a] via-[#ff9f1c] to-[#ff4f4f] px-4 py-2 font-medium text-[var(--foreground)] transition hover:translate-y-[-1px] hover:shadow-[0_18px_36px_-24px_rgba(255,79,79,0.7)] dark:hover:shadow-[0_18px_36px_-24px_rgba(255,79,79,0.3)]"
                >
                  Contact
                </Link>
              </li>
              {/* Theme Toggle */}
              <li className="ml-2">
                <ThemeToggle />
              </li>
            </ul>
          </nav>
        </div>
      </header>

      <nav className="fixed bottom-4 left-1/2 z-50 -translate-x-1/2 md:hidden">
        <ul className="flex items-center gap-1 rounded-2xl border border-[var(--surface-border)] bg-[var(--surface)]/92 p-1.5 shadow-[0_22px_50px_-28px_rgba(31,26,20,0.45)] dark:shadow-none backdrop-blur">
          {mobileNavItems.map((item) => {
            const Icon = item.icon;
            const active = isActive(item.matchPath ?? item.href);

            return (
              <li key={item.href}>
                <motion.div whileHover={{ y: -1 }} whileTap={{ scale: 0.94 }}>
                  <Link
                    href={item.href}
                    aria-label={item.label}
                    className={cn(
                      "grid h-10 w-10 place-content-center rounded-xl border border-transparent text-base transition",
                      active
                        ? "bg-gradient-to-r from-[#ff7a1a] to-[#ff4f4f] text-[var(--foreground)] shadow-[0_14px_28px_-20px_rgba(255,79,79,0.75)] dark:shadow-[0_14px_28px_-20px_rgba(255,79,79,0.2)]"
                        : "text-[var(--foreground)]/70 hover:border-[var(--surface-border)] hover:bg-[var(--surface-border)]/30 hover:text-[var(--foreground)]"
                    )}
                  >
                    <Icon />
                    <span className="sr-only">{item.label}</span>
                  </Link>
                </motion.div>
              </li>
            );
          })}
          <li>
            <motion.div whileHover={{ y: -1 }} whileTap={{ scale: 0.94 }}>
              <ThemeToggle className="grid h-10 w-10 place-content-center rounded-xl border border-transparent text-base transition text-[var(--foreground)]/70 hover:border-[var(--surface-border)] hover:bg-[var(--surface-border)]/30 hover:text-[var(--foreground)]" />
            </motion.div>
          </li>
        </ul>
      </nav>
    </>
  );
}

