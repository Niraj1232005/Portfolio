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
    { href: "/?intro=0", matchPath: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/projects", label: "Projects" },
    { href: "/skills", label: "Skills" },
    { href: "/certificates", label: "Certificates" },
  ];

  const isActive = (href: string) => {
    if (href === "/") return pathname === "/";
    return pathname.startsWith(href);
  };

  return (
    <header className="fixed inset-x-0 top-0 z-50 px-4 pt-3 sm:px-6 sm:pt-4 lg:px-8">
      <div className="mx-auto flex w-full max-w-6xl items-center justify-between rounded-xl border border-white/14 bg-slate-900/60 px-3 py-2.5 backdrop-blur-xl shadow-[0_18px_46px_-32px_rgba(30,41,59,0.75)] sm:rounded-2xl sm:px-6 sm:py-3">
        <Link href="/?intro=1" className="flex items-center gap-2.5 sm:gap-3">
          <span className="relative flex h-8 w-8 items-center justify-center overflow-hidden rounded-full border border-slate-200/30 bg-gradient-to-br from-slate-300/14 via-indigo-300/18 to-violet-300/16 sm:h-9 sm:w-9">
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
                    isActive(item.matchPath ?? item.href)
                      ? "bg-white/12 text-slate-100 shadow-[0_0_20px_rgba(129,140,248,0.25)]"
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
                className="rounded-full border border-indigo-200/35 bg-gradient-to-r from-indigo-400/28 via-violet-400/22 to-slate-300/18 px-4 py-2 font-medium text-slate-100 transition hover:from-indigo-400/38 hover:to-slate-300/28"
              >
                Contact
              </Link>
            </li>
          </ul>
        </nav>

        <button
          type="button"
          className="grid h-9 w-9 place-content-center gap-1 rounded-lg border border-white/15 bg-white/5 text-slate-100 md:hidden"
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
            className="mx-auto mt-3 w-full max-w-6xl rounded-2xl border border-white/12 bg-slate-900/75 p-4 backdrop-blur-xl md:hidden"
          >
            <ul className="grid gap-2 text-sm">
              {navItems.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    onClick={() => setIsOpen(false)}
                    className={cn(
                      "block rounded-lg px-3 py-2 transition",
                      isActive(item.matchPath ?? item.href)
                        ? "bg-white/10 text-slate-100"
                        : "text-slate-300 hover:bg-white/8 hover:text-white"
                    )}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
              <li className="pt-1">
                <Link
                  href="/contact"
                  onClick={() => setIsOpen(false)}
                  className="inline-flex w-full items-center justify-center rounded-lg border border-indigo-200/35 bg-gradient-to-r from-indigo-400/28 via-violet-400/22 to-slate-300/18 px-3 py-2 font-medium text-slate-100 transition hover:from-indigo-400/38 hover:to-slate-300/28"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </motion.nav>
        ) : null}
      </AnimatePresence>
    </header>
  );
}
