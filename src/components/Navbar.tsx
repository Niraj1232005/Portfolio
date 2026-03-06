"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  FiAward,
  FiCode,
  FiFolder,
  FiHome,
  FiMail,
  FiUser,
} from "react-icons/fi";
import { cn } from "@/lib/cn";

export default function Navbar() {
  const pathname = usePathname();

  const navItems = [
    { href: "/?intro=0", matchPath: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/projects", label: "Projects" },
    { href: "/skills", label: "Skills" },
    { href: "/certificates", label: "Certificates" },
  ];

  const mobileNavItems = [
    { href: "/?intro=0", matchPath: "/", label: "Home", icon: FiHome },
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

  return (
    <>
      <header className="fixed left-0 right-0 top-4 z-50 hidden justify-center px-4 md:flex">
        <div className="flex w-full max-w-5xl items-center justify-between rounded-full border border-white/10 bg-black/50 px-4 py-2 backdrop-blur-xl shadow-[0_8px_30px_rgba(0,0,0,0.35)] sm:px-6 sm:py-3">
          <Link href="/?intro=1" className="flex items-center gap-2.5 sm:gap-3">
            <span className="relative flex h-8 w-8 items-center justify-center overflow-hidden rounded-full border border-white/15 bg-white/[0.04] shadow-[0_0_18px_rgba(99,102,241,0.2)] sm:h-9 sm:w-9">
              <Image src="/logo_new.png" alt="NR logo" width={26} height={26} />
            </span>
            <span className="hidden text-sm font-semibold tracking-wide text-white sm:inline">
              Niraj Rathod
            </span>
          </Link>

          <nav>
            <ul className="flex items-center gap-1 text-sm">
              {navItems.map((item) => (
                <motion.li key={item.href} whileHover={{ y: -1 }}>
                  <Link
                    href={item.href}
                    className={cn(
                      "rounded-full border border-transparent px-3 py-2 transition duration-200",
                      isActive(item.matchPath ?? item.href)
                        ? "border-white/15 bg-white/[0.08] text-white shadow-[0_0_18px_rgba(99,102,241,0.22)]"
                        : "text-slate-300 hover:border-white/10 hover:bg-white/[0.05] hover:text-white"
                    )}
                  >
                    {item.label}
                  </Link>
                </motion.li>
              ))}
              <li className="ml-1">
                <Link
                  href="/contact"
                  className="rounded-full bg-gradient-to-r from-indigo-500 to-violet-500 px-4 py-2 font-medium text-white transition hover:from-indigo-400 hover:to-violet-400"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </header>

      <nav className="fixed bottom-4 left-1/2 z-50 -translate-x-1/2 md:hidden">
        <ul className="flex items-center gap-1 rounded-full border border-white/10 bg-black/60 p-1.5 backdrop-blur-xl shadow-[0_14px_34px_-20px_rgba(0,0,0,0.9)]">
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
                      "grid h-10 w-10 place-content-center rounded-full border border-transparent text-base transition",
                      active
                        ? "bg-gradient-to-r from-indigo-500 to-violet-500 text-white shadow-[0_0_18px_rgba(99,102,241,0.42)]"
                        : "text-slate-300 hover:border-white/10 hover:bg-white/[0.06] hover:text-white"
                    )}
                  >
                    <Icon />
                    <span className="sr-only">{item.label}</span>
                  </Link>
                </motion.div>
              </li>
            );
          })}
        </ul>
      </nav>
    </>
  );
}
