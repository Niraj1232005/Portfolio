"use client";

import { Suspense, useEffect, useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import {
  FiArrowRight,
  FiDownload,
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

const primaryButtonClass =
  "inline-flex w-full items-center justify-center gap-2 rounded-full border border-indigo-200/35 bg-gradient-to-r from-indigo-400/28 via-violet-400/22 to-slate-300/18 px-5 py-2.5 text-sm font-medium text-slate-100 transition hover:from-indigo-400/38 hover:to-slate-300/28 sm:w-auto";

const secondaryButtonClass =
  "inline-flex w-full items-center justify-center rounded-full border border-white/18 bg-white/7 px-5 py-2.5 text-sm font-medium text-slate-100 transition hover:bg-white/12 sm:w-auto";

const accentLinkClass =
  "inline-flex items-center gap-1.5 text-sm text-indigo-200/90 transition hover:text-violet-100";

export default function Home() {
  return (
    <Suspense fallback={null}>
      <HomeContent />
    </Suspense>
  );
}

function HomeContent() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const shouldShowIntro = searchParams.get("intro") === "1";

  const [showIntro, setShowIntro] = useState(shouldShowIntro);
  const [subtitleIndex, setSubtitleIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    setShowIntro(shouldShowIntro);
  }, [shouldShowIntro]);

  useEffect(() => {
    const timer = window.setInterval(() => {
      setSubtitleIndex((prev) => (prev + 1) % subtitleLines.length);
    }, 2600);
    return () => window.clearInterval(timer);
  }, []);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 639px)");
    const updateDeviceSize = () => setIsMobile(mediaQuery.matches);
    updateDeviceSize();
    mediaQuery.addEventListener("change", updateDeviceSize);
    return () => mediaQuery.removeEventListener("change", updateDeviceSize);
  }, []);

  const heroParticles = useMemo(
    () =>
      Array.from({ length: isMobile ? 8 : 16 }, (_, idx) => ({
        id: idx,
        top: `${
          (isMobile ? [8, 16, 84, 92] : [10, 24, 74, 88])[idx % 4]
        }%`,
        left: `${6 + ((idx * 13) % 88)}%`,
        delay: idx * 0.12,
      })),
    [isMobile]
  );

  if (showIntro) {
    return (
      <Intro
        onFinish={() => {
          setShowIntro(false);
          if (shouldShowIntro) {
            router.replace("/", { scroll: false });
          }
        }}
      />
    );
  }

  return (
    <div className="pb-16 pt-24 sm:pb-24 sm:pt-32">
      <SectionContainer className="pb-8 pt-6 sm:pb-12 sm:pt-12">
        <div className="relative overflow-hidden rounded-2xl border border-white/14 bg-slate-900/55 p-4 backdrop-blur-xl sm:rounded-3xl sm:p-8 lg:p-10">
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_18%_24%,rgba(129,140,248,0.2),transparent_36%),radial-gradient(circle_at_80%_26%,rgba(167,139,250,0.16),transparent_34%)]" />
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
              className="pointer-events-none absolute h-1.5 w-1.5 rounded-full bg-indigo-200/60"
              style={{ top: particle.top, left: particle.left }}
            />
          ))}

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate="show"
            className="relative z-10 grid gap-6 sm:gap-10 lg:grid-cols-[1.25fr_0.75fr]"
          >
            <div className="space-y-4 sm:space-y-6">
              <motion.p
                variants={fadeInUp}
                className="inline-flex rounded-full border border-indigo-200/25 bg-indigo-300/12 px-3 py-1 text-xs font-medium uppercase tracking-[0.2em] text-slate-100/90"
              >
                Portfolio
              </motion.p>

              <motion.h1
                variants={fadeInUp}
                className="text-4xl font-semibold tracking-tight text-slate-100 sm:text-5xl lg:text-6xl"
              >
                <span className="bg-gradient-to-r from-slate-100 via-indigo-200 to-violet-200 bg-clip-text text-transparent">
                  Niraj Rathod
                </span>
              </motion.h1>

              <motion.div variants={fadeInUp} className="h-7 overflow-hidden sm:h-8">
                <AnimatePresence mode="wait">
                  <motion.p
                    key={subtitleLines[subtitleIndex]}
                    initial={{ opacity: 0, y: 18 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -18 }}
                    transition={{ duration: 0.35, ease: "easeOut" }}
                    className="text-base text-slate-200/95 sm:text-lg"
                  >
                    {subtitleLines[subtitleIndex]}
                  </motion.p>
                </AnimatePresence>
              </motion.div>

              <motion.p
                variants={fadeInUp}
                className="max-w-2xl text-sm leading-6 text-slate-300/90 sm:text-base sm:leading-7"
              >
                Information Technology student at Vidyalankar Institute of
                Technology, focused on scalable backend systems, cloud-native
                architecture, and clean product experiences.
              </motion.p>

              <motion.div
                variants={fadeInUp}
                className="flex flex-col gap-2.5 sm:flex-row sm:flex-wrap sm:gap-3"
              >
                <Link href="/projects" className={primaryButtonClass}>
                  View Projects
                  <FiArrowRight />
                </Link>
                <Link href="/contact" className={secondaryButtonClass}>
                  Contact Me
                </Link>
              </motion.div>
            </div>

            <motion.div
              variants={staggerContainer}
              initial="hidden"
              animate="show"
              className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-1"
            >
              {heroHighlights.map((item) => (
                <motion.div key={item.label} variants={fadeInUp}>
                  <Card className="p-3.5 sm:p-4" hover={false}>
                    <div className="flex items-center gap-4">
                      <span className="grid h-9 w-9 place-content-center rounded-full border border-indigo-200/25 bg-indigo-300/14 text-slate-200 sm:h-10 sm:w-10">
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

      <SectionContainer className="py-6 sm:py-10">
        <div className="mb-6 flex flex-col items-start gap-2 sm:mb-8 sm:flex-row sm:items-end sm:justify-between sm:gap-3">
          <AnimatedHeading
            title="Featured Projects"
            subtitle="Glass cards with gradient badges and smooth motion interactions."
            className="max-w-2xl"
          />
          <Link href="/projects" className={accentLinkClass}>
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

      <SectionContainer className="py-6 sm:py-10">
        <div className="mb-6 flex flex-col items-start gap-2 sm:mb-8 sm:flex-row sm:items-end sm:justify-between sm:gap-3">
          <AnimatedHeading
            title="Skills"
            subtitle="Focused across backend engineering, cloud tooling, and modern frontend development."
            className="max-w-2xl"
          />
          <Link href="/skills" className={accentLinkClass}>
            Skills page
            <FiArrowRight />
          </Link>
        </div>
        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {skillCategories.map((category) => (
            <Card key={category.title}>
              <h3 className="text-sm font-semibold uppercase tracking-[0.15em] text-slate-300/80">
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

      <SectionContainer className="py-6 sm:py-10">
        <div className="mb-6 flex flex-col items-start gap-2 sm:mb-8 sm:flex-row sm:items-end sm:justify-between sm:gap-3">
          <AnimatedHeading
            title="Certificates"
            subtitle="Validated knowledge in cloud computing and modern web development."
            className="max-w-2xl"
          />
          <Link href="/certificates" className={accentLinkClass}>
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
                className={`${accentLinkClass} mt-5`}
              >
                View certificate
                <FiArrowRight />
              </Link>
            </Card>
          ))}
        </div>
      </SectionContainer>

      <SectionContainer className="py-6 sm:py-10">
        <div className="mb-6 sm:mb-8">
          <AnimatedHeading
            title="Resume"
            subtitle="Get a concise overview of my education, technical skills, projects, and backend-focused engineering experience."
            className="max-w-2xl"
          />
        </div>
        <Card hover={false} className="bg-slate-900/52">
          <div className="flex flex-col items-center gap-4 text-center sm:gap-5 md:flex-row md:items-center md:justify-between md:text-left">
            <p className="max-w-3xl text-sm leading-7 text-slate-300/90 sm:text-base">
              Download the latest version of my resume in PDF format.
            </p>
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noreferrer"
              download
              className={`${primaryButtonClass} max-w-xs shrink-0 sm:max-w-none`}
            >
              <FiDownload />
              Download Resume
            </a>
          </div>
        </Card>
      </SectionContainer>

      <SectionContainer className="py-6 sm:py-10">
        <div className="mb-6 flex flex-col items-start gap-2 sm:mb-8 sm:flex-row sm:items-end sm:justify-between sm:gap-3">
          <AnimatedHeading
            title="Contact"
            subtitle="Available for internships, freelance collaboration, and backend engineering opportunities."
            className="max-w-2xl"
          />
          <Link href="/contact" className={accentLinkClass}>
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
                <p className="text-sm uppercase tracking-[0.14em] text-slate-300/80">
                  {contact.label}
                </p>
                <p className="mt-2 line-clamp-1 text-base font-medium text-slate-100">
                  {contact.value}
                </p>
              </a>
            </Card>
          ))}
        </div>
        <div className="mt-8 flex flex-col gap-2.5 text-sm text-slate-300/90 sm:flex-row sm:flex-wrap sm:gap-3">
          <a
            href="mailto:rathodniraj.com@gmail.com"
            className="inline-flex w-full items-center justify-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-2 transition hover:bg-white/10 sm:w-auto"
          >
            <FiMail />
            Email
          </a>
          <a
            href="tel:+919309324120"
            className="inline-flex w-full items-center justify-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-2 transition hover:bg-white/10 sm:w-auto"
          >
            <FiPhone />
            Call
          </a>
          <a
            href="https://github.com/Niraj1232005"
            target="_blank"
            rel="noreferrer"
            className="inline-flex w-full items-center justify-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-2 transition hover:bg-white/10 sm:w-auto"
          >
            <FiGithub />
            GitHub
          </a>
        </div>
      </SectionContainer>
    </div>
  );
}
