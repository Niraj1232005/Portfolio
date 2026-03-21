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
} from "react-icons/fi";
import Intro from "@/components/Intro";
import AnimatedHeading from "@/components/ui/AnimatedHeading";
import Card from "@/components/ui/Card";
import ProjectCard from "@/components/ui/ProjectCard";
import SectionContainer from "@/components/ui/SectionContainer";
import SkillBadge from "@/components/ui/SkillBadge";
import { fadeInUp, staggerContainer } from "@/components/ui/motion";
import { certificates, projects, skillCategories } from "@/data/content";

const subtitleLines = [
  "Backend-Focused Software Engineer",
  "Cloud Systems and API Architecture",
  "Building Reliable Full-Stack Products",
];

const primaryButtonClass =
  "inline-flex w-full items-center justify-center gap-2 rounded-2xl border border-[#f3a35f] bg-gradient-to-r from-[#ff7a1a] via-[#ff9f1c] to-[#ff4f4f] px-5 py-3 text-sm font-semibold text-[#1f1a14] transition hover:-translate-y-0.5 hover:shadow-[0_20px_34px_-22px_rgba(255,79,79,0.78)] sm:w-auto";

const secondaryButtonClass =
  "inline-flex w-full items-center justify-center gap-2 rounded-2xl border border-[var(--surface-border)] bg-[var(--surface)] px-5 py-3 text-sm font-medium text-[var(--foreground)]/80 transition hover:-translate-y-0.5 hover:border-[#ff7a1a]/55 hover:bg-[var(--surface-border)]/30 hover:text-[var(--foreground)] sm:w-auto";

const accentLinkClass =
  "inline-flex items-center gap-1.5 text-sm font-medium text-[var(--foreground)]/80 transition hover:text-[#ff7a1a]";

const sectionPanelClass =
  "relative overflow-hidden rounded-[2rem] border border-[var(--surface-border)] bg-[var(--surface)]/95 p-5 shadow-[0_28px_72px_-52px_rgba(31,26,20,0.42)] sm:p-8 dark:shadow-none";

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
      Array.from({ length: isMobile ? 10 : 18 }, (_, idx) => ({
        id: idx,
        top: `${
          (isMobile ? [8, 20, 80, 90] : [8, 20, 32, 68, 80, 92])[idx % 6]
        }%`,
        left: `${5 + ((idx * 11) % 90)}%`,
        delay: idx * 0.12,
      })),
    [isMobile],
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
    <div className="pb-12 pt-8 sm:pb-16 sm:pt-14 md:pt-20">
      <SectionContainer className="pb-8 pt-8 sm:pb-12 sm:pt-14">
        <div className={`${sectionPanelClass} lg:p-10`}>
          <div className="pointer-events-none absolute inset-0 opacity-45 [background-image:linear-gradient(var(--grid)_1px,transparent_1px),linear-gradient(90deg,var(--grid)_1px,transparent_1px)] [background-size:28px_28px]" />
          <div className="pointer-events-none absolute -left-10 top-8 h-20 w-20 rounded-2xl border border-[var(--surface-border)] bg-[#ecfccb]/75 animate-sway-tilt dark:bg-[#ecfccb]/10" />
          <div className="pointer-events-none absolute right-8 top-10 h-14 w-14 rounded-full border-2 border-dashed border-[#ff4f4f]/45 bg-[#ffd9d9]/50 animate-float-medium dark:bg-[#ffd9d9]/10" />
          <div className="pointer-events-none absolute bottom-8 right-12 hidden h-12 w-12 rotate-12 rounded-lg border border-[var(--surface-border)] bg-[#fff1de] animate-drift-spin sm:block dark:bg-[#fff1de]/10" />

          {heroParticles.map((particle) => (
            <motion.span
              key={particle.id}
              animate={{
                y: [0, -8, 0],
                opacity: [0.08, 0.24, 0.08],
                rotate: [0, 20, 0],
              }}
              transition={{
                duration: 5.4,
                repeat: Infinity,
                ease: "easeInOut",
                delay: particle.delay,
              }}
              className="pointer-events-none absolute h-2 w-2 rounded-[2px] bg-[#a65713]/45 dark:bg-[var(--accent)]/45"
              style={{ top: particle.top, left: particle.left }}
            />
          ))}

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate="show"
            className="relative z-10 grid items-center gap-10 lg:grid-cols-[1.1fr_0.9fr]"
          >
            {/* LEFT TEXT */}
            <div className="space-y-6 text-left">
              <motion.p variants={fadeInUp} className="text-sm text-[var(--foreground)]/80">
                Interactive Developer Portfolio
              </motion.p>

              <motion.h1
                variants={fadeInUp}
                className="text-5xl font-bold tracking-tight text-[var(--foreground)] sm:text-6xl lg:text-7xl"
              >
                Niraj Rathod
              </motion.h1>

              <motion.div
                variants={fadeInUp}
                className="h-7 overflow-hidden sm:h-8"
              >
                <AnimatePresence mode="wait">
                  <motion.p
                    key={subtitleLines[subtitleIndex]}
                    initial={{ opacity: 0, y: 18 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -18 }}
                    transition={{ duration: 0.35, ease: "easeOut" }}
                    className="text-base font-medium text-[var(--foreground)]/80 sm:text-lg"
                  >
                    {subtitleLines[subtitleIndex]}
                  </motion.p>
                </AnimatePresence>
              </motion.div>

              <motion.p
                variants={fadeInUp}
                className="max-w-2xl text-sm leading-7 text-[var(--foreground)]/80 sm:text-base"
              >
                Information Technology student at Vidyalankar Institute of
                Technology, focused on cloud-ready architecture, reliable APIs,
                and delightful digital experiences.
              </motion.p>

              <motion.div variants={fadeInUp} className="flex flex-wrap gap-3">
                <Link href="/projects" className={primaryButtonClass}>
                  View Projects
                  <FiArrowRight />
                </Link>

                <a
                  href="mailto:rathodniraj.com@gmail.com"
                  className={secondaryButtonClass}
                >
                  <FiMail />
                  Email Contact
                </a>

                <a
                  href="https://github.com/Niraj1232005"
                  target="_blank"
                  rel="noreferrer"
                  className={secondaryButtonClass}
                >
                  <FiGithub />
                  GitHub Profile
                </a>
              </motion.div>
            </div>

            {/* RIGHT VISUAL CARD */}
            <motion.div
              variants={fadeInUp}
              className="flex justify-center lg:justify-end"
            >
              <div className="relative w-full max-w-sm">
                <div className="rounded-3xl border border-[var(--surface-border)] bg-[var(--surface)] p-6 shadow-[0_26px_50px_-36px_rgba(31,26,20,0.44)] dark:shadow-none">
                  <p className="text-xs uppercase tracking-[0.14em] text-[var(--foreground)]/60">
                    Focus
                  </p>

                  <p className="mt-2 text-lg font-semibold text-[var(--foreground)]">
                    Backend Engineering
                  </p>

                  <div className="mt-5 space-y-3">
                    <div className="rounded-xl border border-[var(--surface-border)] bg-[var(--surface)] px-4 py-3">
                      <p className="text-sm font-medium text-[var(--foreground)]">
                        Cloud Architecture
                      </p>
                    </div>

                    <div className="rounded-xl border border-[var(--surface-border)] bg-[var(--surface)] px-4 py-3">
                      <p className="text-sm font-medium text-[var(--foreground)]">
                        API Systems
                      </p>
                    </div>

                    <div className="rounded-xl border border-[var(--surface-border)] bg-[var(--surface)] px-4 py-3">
                      <p className="text-sm font-medium text-[var(--foreground)]">
                        Full Stack Products
                      </p>
                    </div>
                  </div>
                </div>

                {/* floating decorative shapes */}
                <div className="pointer-events-none absolute -bottom-5 -left-6 h-16 w-16 rounded-2xl border border-[var(--surface-border)] bg-[#ecfccb]/70 animate-float-fast dark:bg-[#ecfccb]/10" />

                <div className="pointer-events-none absolute -right-5 -top-5 h-12 w-12 rounded-full border-2 border-dashed border-[#ff7a1a]/45 bg-[#ffe2cc] animate-float-medium dark:bg-[#ffe2cc]/10" />
              </div>
            </motion.div>
          </motion.div>
        </div>
      </SectionContainer>

      <SectionContainer className="py-8 sm:py-10">
        <div className={sectionPanelClass}>
          <div className="mb-6 flex flex-col items-start gap-2 sm:mb-8 sm:flex-row sm:items-end sm:justify-between sm:gap-3">
            <AnimatedHeading
              title="Featured Projects"
              subtitle="A curated set of backend and full-stack work with expressive interaction design."
              className="max-w-2xl"
            />
            <Link href="/projects" className={accentLinkClass}>
              All projects
              <FiArrowRight />
            </Link>
          </div>
          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {projects.slice(0, 3).map((project, index) => (
              <ProjectCard
                key={project.title}
                project={project}
                index={index}
              />
            ))}
          </div>
        </div>
      </SectionContainer>

      <SectionContainer className="py-8 sm:py-10">
        <div className={sectionPanelClass}>
          <div className="mb-6 flex flex-col items-start gap-2 sm:mb-8 sm:flex-row sm:items-end sm:justify-between sm:gap-3">
            <AnimatedHeading
              title="Skills"
              subtitle="Backend engineering, cloud workflows, and modern frontend tooling in one toolkit."
              className="max-w-2xl"
            />
            <Link href="/skills" className={accentLinkClass}>
              Skills page
              <FiArrowRight />
            </Link>
          </div>
          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {skillCategories.map((category) => (
              <Card key={category.title}>
                <h3 className="text-sm font-semibold uppercase tracking-[0.15em] text-[var(--foreground)]/60">
                  {category.title}
                </h3>
                <div className="mt-4 flex flex-wrap gap-2">
                  {category.skills.slice(0, 5).map((skill) => (
                    <SkillBadge
                      key={`${category.title}-${skill}`}
                      label={skill}
                    />
                  ))}
                </div>
              </Card>
            ))}
          </div>
        </div>
      </SectionContainer>

      <SectionContainer className="py-8 sm:py-10">
        <div className={sectionPanelClass}>
          <div className="mb-6 flex flex-col items-start gap-2 sm:mb-8 sm:flex-row sm:items-end sm:justify-between sm:gap-3">
            <AnimatedHeading
              title="Certificates"
              subtitle="Validated progress in cloud computing, backend architecture, and modern web engineering."
              className="max-w-2xl"
            />
            <Link href="/certificates" className={accentLinkClass}>
              View all
              <FiArrowRight />
            </Link>
          </div>
          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {certificates.map((certificate) => (
              <Card key={certificate.slug}>
                <p className="text-lg font-semibold text-[var(--foreground)]">
                  {certificate.title}
                </p>
                <p className="mt-2 text-sm text-[var(--foreground)]/80">
                  {certificate.issuer}
                </p>
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
        </div>
      </SectionContainer>

      <SectionContainer className="py-8 sm:py-10">
        <div className={sectionPanelClass}>
          <div className="mb-6 sm:mb-8">
            <AnimatedHeading
              title="Resume"
              subtitle="Grab a concise overview of education, engineering projects, and backend-first experience."
              className="max-w-2xl"
            />
          </div>
          <Card hover={false} className="bg-[var(--surface)]">
            <div className="flex flex-col items-center gap-4 text-center sm:gap-5 md:flex-row md:items-center md:justify-between md:text-left">
              <p className="max-w-3xl text-sm leading-7 text-[var(--foreground)]/80 sm:text-base">
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
        </div>
      </SectionContainer>

      <SectionContainer className="py-8 sm:py-10">
        <div className={sectionPanelClass}>
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
          <Card hover={false} className="bg-[var(--surface)]">
            <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
              <p className="max-w-2xl text-sm leading-7 text-[var(--foreground)]/80 sm:text-base">
                Quick ways to reach me for internships, freelance work, and
                backend engineering collaborations.
              </p>
              <div className="flex flex-col gap-2.5 text-sm text-[var(--foreground)]/80 sm:flex-row sm:flex-wrap sm:gap-3">
                <a
                  href="mailto:rathodniraj.com@gmail.com"
                  className={secondaryButtonClass}
                >
                  <FiMail />
                  Email
                </a>
                <a href="tel:+919309324120" className={secondaryButtonClass}>
                  <FiPhone />
                  Call
                </a>
                <a
                  href="https://github.com/Niraj1232005"
                  target="_blank"
                  rel="noreferrer"
                  className={secondaryButtonClass}
                >
                  <FiGithub />
                  GitHub
                </a>
              </div>
            </div>
          </Card>
        </div>
      </SectionContainer>
    </div>
  );
}
