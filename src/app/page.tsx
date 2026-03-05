"use client";

import { useEffect, useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import {
  FiArrowRight,
  FiGithub,
  FiMail,
  FiPhone,
  FiShield,
  FiZap,
} from "react-icons/fi";
import Intro from "@/components/Intro";
import AnimatedHeading from "@/components/ui/AnimatedHeading";
import Card from "@/components/ui/Card";
import ProjectCard from "@/components/ui/ProjectCard";
import SectionContainer from "@/components/ui/SectionContainer";
import SkillBadge from "@/components/ui/SkillBadge";
import { fadeInUp, staggerContainer } from "@/components/ui/motion";
import { certificates, contactMethods, projects, skillCategories } from "@/data/content";

const subtitleLines = [
  "Backend-Focused Software Engineer",
  "Cloud Systems and API Architecture",
  "Building Reliable Full-Stack Products",
];

const heroHighlights = [
  { label: "Projects Shipped", value: "10+", icon: <FiZap /> },
  { label: "Cloud Certifications", value: "3", icon: <FiShield /> },
  { label: "Open Source", value: "Active", icon: <FiGithub /> },
];

export default function Home() {
  const [showIntro, setShowIntro] = useState(true);
  const [subtitleIndex, setSubtitleIndex] = useState(0);

  useEffect(() => {
    const timer = window.setInterval(() => {
      setSubtitleIndex((prev) => (prev + 1) % subtitleLines.length);
    }, 2600);
    return () => window.clearInterval(timer);
  }, []);

  const heroParticles = useMemo(
    () =>
      Array.from({ length: 16 }, (_, idx) => ({
        id: idx,
        top: `${12 + (idx % 4) * 20}%`,
        left: `${8 + (idx * 11) % 86}%`,
        delay: idx * 0.12,
      })),
    []
  );

  if (showIntro) {
    return <Intro onFinish={() => setShowIntro(false)} />;
  }

  return (
    <div className="pb-24 pt-28 sm:pt-32">
      <SectionContainer className="pb-12 pt-8 sm:pt-12">
        <div className="relative overflow-hidden rounded-3xl border border-white/12 bg-slate-950/40 p-6 backdrop-blur-xl sm:p-8 lg:p-10">
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_18%_24%,rgba(99,102,241,0.3),transparent_36%),radial-gradient(circle_at_80%_26%,rgba(168,85,247,0.26),transparent_34%)]" />
          {heroParticles.map((particle) => (
            <motion.span
              key={particle.id}
              animate={{ y: [0, -8, 0], opacity: [0.25, 0.9, 0.25] }}
              transition={{
                duration: 3.2,
                repeat: Infinity,
                ease: "easeInOut",
                delay: particle.delay,
              }}
              className="pointer-events-none absolute h-1.5 w-1.5 rounded-full bg-indigo-200/80"
              style={{ top: particle.top, left: particle.left }}
            />
          ))}

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate="show"
            className="relative z-10 grid gap-10 lg:grid-cols-[1.25fr_0.75fr]"
          >
            <div className="space-y-6">
              <motion.p
                variants={fadeInUp}
                className="inline-flex rounded-full border border-indigo-300/30 bg-indigo-500/15 px-3 py-1 text-xs font-medium uppercase tracking-[0.2em] text-indigo-100/90"
              >
                Portfolio 2026
              </motion.p>

              <motion.h1
                variants={fadeInUp}
                className="text-4xl font-semibold tracking-tight text-slate-100 sm:text-5xl lg:text-6xl"
              >
                <span className="bg-gradient-to-r from-indigo-300 via-purple-300 to-blue-300 bg-clip-text text-transparent">
                  Niraj Rathod
                </span>
              </motion.h1>

              <motion.div variants={fadeInUp} className="h-8 overflow-hidden">
                <AnimatePresence mode="wait">
                  <motion.p
                    key={subtitleLines[subtitleIndex]}
                    initial={{ opacity: 0, y: 18 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -18 }}
                    transition={{ duration: 0.35, ease: "easeOut" }}
                    className="text-lg text-slate-200/95"
                  >
                    {subtitleLines[subtitleIndex]}
                  </motion.p>
                </AnimatePresence>
              </motion.div>

              <motion.p
                variants={fadeInUp}
                className="max-w-2xl text-sm leading-7 text-slate-300/90 sm:text-base"
              >
                Information Technology student at Vidyalankar Institute of
                Technology, focused on scalable backend systems, cloud-native
                architecture, and clean product experiences.
              </motion.p>

              <motion.div variants={fadeInUp} className="flex flex-wrap gap-3">
                <Link
                  href="/projects"
                  className="inline-flex items-center gap-2 rounded-full border border-indigo-300/35 bg-gradient-to-r from-indigo-500/30 via-purple-500/25 to-blue-500/30 px-5 py-2.5 text-sm font-medium text-indigo-100 transition hover:from-indigo-500/45 hover:to-blue-500/45"
                >
                  View Projects
                  <FiArrowRight />
                </Link>
                <Link
                  href="/contact"
                  className="rounded-full border border-white/15 bg-white/5 px-5 py-2.5 text-sm font-medium text-slate-200 transition hover:bg-white/10"
                >
                  Contact Me
                </Link>
              </motion.div>
            </div>

            <motion.div
              variants={staggerContainer}
              initial="hidden"
              animate="show"
              className="grid gap-3"
            >
              {heroHighlights.map((item) => (
                <motion.div key={item.label} variants={fadeInUp}>
                  <Card className="p-4" hover={false}>
                    <div className="flex items-center gap-4">
                      <span className="grid h-10 w-10 place-content-center rounded-full border border-indigo-200/30 bg-indigo-500/20 text-indigo-200">
                        {item.icon}
                      </span>
                      <div>
                        <p className="text-xl font-semibold text-slate-100">
                          {item.value}
                        </p>
                        <p className="text-sm text-slate-300/80">{item.label}</p>
                      </div>
                    </div>
                  </Card>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </SectionContainer>

      <SectionContainer className="py-10">
        <div className="mb-8 flex items-end justify-between gap-3">
          <AnimatedHeading
            title="Featured Projects"
            subtitle="Glass cards with gradient badges and smooth motion interactions."
            className="max-w-2xl"
          />
          <Link
            href="/projects"
            className="inline-flex items-center gap-1.5 text-sm text-indigo-200 transition hover:text-indigo-100"
          >
            All projects
            <FiArrowRight />
          </Link>
        </div>
        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {projects.map((project, index) => (
            <ProjectCard key={project.title} project={project} index={index} />
          ))}
        </div>
      </SectionContainer>

      <SectionContainer className="py-10">
        <div className="mb-8 flex items-end justify-between gap-3">
          <AnimatedHeading
            title="Skills"
            subtitle="Focused across backend engineering, cloud tooling, and modern frontend development."
            className="max-w-2xl"
          />
          <Link
            href="/skills"
            className="inline-flex items-center gap-1.5 text-sm text-indigo-200 transition hover:text-indigo-100"
          >
            Skills page
            <FiArrowRight />
          </Link>
        </div>
        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {skillCategories.map((category) => (
            <Card key={category.title}>
              <h3 className="text-sm font-semibold uppercase tracking-[0.15em] text-indigo-100/80">
                {category.title}
              </h3>
              <div className="mt-4 flex flex-wrap gap-2">
                {category.skills.slice(0, 5).map((skill) => (
                  <SkillBadge key={`${category.title}-${skill}`} label={skill} />
                ))}
              </div>
            </Card>
          ))}
        </div>
      </SectionContainer>

      <SectionContainer className="py-10">
        <div className="mb-8 flex items-end justify-between gap-3">
          <AnimatedHeading
            title="Certificates"
            subtitle="Validated knowledge in cloud computing and modern web development."
            className="max-w-2xl"
          />
          <Link
            href="/certificates"
            className="inline-flex items-center gap-1.5 text-sm text-indigo-200 transition hover:text-indigo-100"
          >
            View all
            <FiArrowRight />
          </Link>
        </div>
        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {certificates.map((certificate) => (
            <Card key={certificate.slug}>
              <p className="text-lg font-semibold text-slate-100">{certificate.title}</p>
              <p className="mt-2 text-sm text-slate-300/85">{certificate.issuer}</p>
              <Link
                href={`/certificates/${certificate.slug}`}
                className="mt-5 inline-flex items-center gap-1.5 text-sm text-indigo-200 transition hover:text-indigo-100"
              >
                View certificate
                <FiArrowRight />
              </Link>
            </Card>
          ))}
        </div>
      </SectionContainer>

      <SectionContainer className="py-10">
        <div className="mb-8 flex items-end justify-between gap-3">
          <AnimatedHeading
            title="Contact"
            subtitle="Available for internships, freelance collaboration, and backend engineering opportunities."
            className="max-w-2xl"
          />
          <Link
            href="/contact"
            className="inline-flex items-center gap-1.5 text-sm text-indigo-200 transition hover:text-indigo-100"
          >
            Contact page
            <FiArrowRight />
          </Link>
        </div>
        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {contactMethods.slice(0, 6).map((contact) => (
            <Card key={contact.label}>
              <a
                href={contact.href}
                target={contact.href.startsWith("http") ? "_blank" : undefined}
                rel={contact.href.startsWith("http") ? "noreferrer" : undefined}
                className="block"
              >
                <p className="text-sm uppercase tracking-[0.14em] text-indigo-100/70">
                  {contact.label}
                </p>
                <p className="mt-2 line-clamp-1 text-base font-medium text-slate-100">
                  {contact.value}
                </p>
              </a>
            </Card>
          ))}
        </div>
        <div className="mt-8 flex flex-wrap gap-3 text-sm text-slate-300/90">
          <a
            href="mailto:rathodniraj.com@gmail.com"
            className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-2 transition hover:bg-white/10"
          >
            <FiMail />
            Email
          </a>
          <a
            href="tel:+919309324120"
            className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-2 transition hover:bg-white/10"
          >
            <FiPhone />
            Call
          </a>
          <a
            href="https://github.com/Niraj1232005"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-2 transition hover:bg-white/10"
          >
            <FiGithub />
            GitHub
          </a>
        </div>
      </SectionContainer>
    </div>
  );
}
