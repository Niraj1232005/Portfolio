"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

export default function Navbar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  const linkClass = (path: string) =>
    pathname === path
      ? "text-white"
      : "text-gray-400 hover:text-white transition";

  return (
    <header className="fixed top-0 w-full bg-black z-50 py-5">
      <div className="max-w-5xl mx-auto flex justify-center items-center gap-10 relative">

        {/* LOGO */}
        <Link
  href="/"
  onClick={() => window.location.reload()}
  className="flex items-center"
>
          <Image src="/logo_new.png" alt="logo" width={32} height={32} />
        </Link>

        {/* NAV */}
        <nav className="hidden md:block">
          <ul className="flex gap-6 text-sm items-center">

            <motion.li whileHover={{ scale: 1.1 }}>
              <Link href="/" className={linkClass("/")}>Home</Link>
            </motion.li>

            <motion.li whileHover={{ scale: 1.1 }}>
              <Link href="/about" className={linkClass("/about")}>About</Link>
            </motion.li>

            <motion.li whileHover={{ scale: 1.1 }}>
              <Link href="/projects" className={linkClass("/projects")}>Projects</Link>
            </motion.li>

            <motion.li whileHover={{ scale: 1.1 }}>
              <Link href="/skills" className={linkClass("/skills")}>Skills</Link>
            </motion.li>

            <motion.li whileHover={{ scale: 1.1 }}>
              <Link href="/certificates" className={linkClass("/certificates")}>Certificates</Link>
            </motion.li>

            <li>
              <Link
                href="/contact"
                className="border px-4 py-1 rounded-full hover:bg-white hover:text-black transition"
              >
                Contact
              </Link>
            </li>

          </ul>
        </nav>

        {/* HAMBURGER */}
        <div
          className="md:hidden flex flex-col gap-1 cursor-pointer absolute right-5"
          onClick={() => setIsOpen(!isOpen)}
        >
          <span className="w-6 h-[2px] bg-white"></span>
          <span className="w-6 h-[2px] bg-white"></span>
          <span className="w-6 h-[2px] bg-white"></span>
        </div>
      </div>

      {/* MOBILE MENU */}
      {isOpen && (
        <motion.nav
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="absolute top-20 right-5 bg-[#111] p-5 rounded-lg md:hidden"
        >
          <ul className="flex flex-col gap-4 text-sm">
            <Link href="/" onClick={() => setIsOpen(false)}>Home</Link>
            <Link href="/about" onClick={() => setIsOpen(false)}>About</Link>
            <Link href="/projects" onClick={() => setIsOpen(false)}>Projects</Link>
            <Link href="/skills" onClick={() => setIsOpen(false)}>Skills</Link>
            <Link href="/certificates" onClick={() => setIsOpen(false)}>Certificates</Link>
            <Link href="/contact" onClick={() => setIsOpen(false)}>Contact</Link>
          </ul>
        </motion.nav>
      )}
    </header>
  );
}
