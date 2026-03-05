"use client";

import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { cn } from "@/lib/cn";

export default function Navbar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/projects", label: "Projects" },
    { href: "/skills", label: "Skills" },
    { href: "/certificates", label: "Certificates" },
    { href: "/contact", label: "Contact" },
  ];

  const isActive = (href: string) => {
    if (href === "/") return pathname === "/";
    return pathname.startsWith(href);
  };

  return (
    <header className="fixed inset-x-0 top-0 z-50 px-4 pt-4 sm:px-6">
      <div className="mx-auto flex w-full max-w-6xl items-center justify-between rounded-2xl border border-white/10 bg-slate-950/55 px-4 py-3 backdrop-blur-xl shadow-[0_20px_45px_-30px_rgba(56,189,248,0.4)] sm:px-6">
        <Link href="/" className="flex items-center gap-3">
          <span className="relative flex h-9 w-9 items-center justify-center overflow-hidden rounded-full border border-indigo-200/30 bg-gradient-to-br from-indigo-500/25 via-purple-500/25 to-blue-500/25">
            <Image src="/logo_new.png" alt="NR logo" width={26} height={26} />
          </span>
          <span className="hidden text-sm font-semibold tracking-wide text-slate-200 sm:inline">
            Niraj Rathod
          </span>
        </Link>

        <nav className="hidden md:block">
          <ul className="flex items-center gap-1 text-sm">
            {navItems.map((item) => (
              <motion.li key={item.href} whileHover={{ y: -1 }}>
                <Link
                  href={item.href}
                  className={cn(
                    "rounded-full px-3 py-2 transition",
                    isActive(item.href)
                      ? "bg-white/10 text-slate-100 shadow-[0_0_20px_rgba(99,102,241,0.35)]"
                      : "text-slate-300 hover:bg-white/8 hover:text-white"
                  )}
                >
                  {item.label}
                </Link>
              </motion.li>
            ))}
            <li className="ml-1">
              <Link
                href="/contact"
                className="rounded-full border border-indigo-300/40 bg-gradient-to-r from-indigo-500/30 via-purple-500/25 to-blue-500/30 px-4 py-2 font-medium text-indigo-100 transition hover:from-indigo-500/40 hover:to-blue-500/40"
              >
                Contact
              </Link>
            </li>
          </ul>
        </nav>

        <button
          type="button"
          className="grid h-10 w-10 place-content-center gap-1 rounded-lg border border-white/15 bg-white/5 text-slate-100 md:hidden"
          onClick={() => setIsOpen(!isOpen)}
        >
          <span className="h-0.5 w-5 bg-current" />
          <span className="h-0.5 w-5 bg-current" />
          <span className="h-0.5 w-5 bg-current" />
        </button>
      </div>

      <AnimatePresence>
        {isOpen ? (
          <motion.nav
            initial={{ opacity: 0, y: -14 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -14 }}
            transition={{ duration: 0.2 }}
            className="mx-auto mt-3 w-full max-w-6xl rounded-2xl border border-white/10 bg-slate-950/80 p-4 backdrop-blur-xl md:hidden"
          >
            <ul className="grid gap-2 text-sm">
              {navItems.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    onClick={() => setIsOpen(false)}
                    className={cn(
                      "block rounded-lg px-3 py-2 transition",
                      isActive(item.href)
                        ? "bg-white/10 text-slate-100"
                        : "text-slate-300 hover:bg-white/8 hover:text-white"
                    )}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.nav>
        ) : null}
      </AnimatePresence>
    </header>
  );
}
