"use client";

import { motion } from "framer-motion";
import AnimatedHeading from "@/components/ui/AnimatedHeading";
import SectionContainer from "@/components/ui/SectionContainer";
import { fadeInUp } from "@/components/ui/motion";

export default function About() {
  return (
    <SectionContainer className="pb-12 pt-16 sm:pb-16 sm:pt-24 md:pt-28">
      <AnimatedHeading
        level="h1"
        eyebrow="About"
        title="Engineering With Clarity and Scale"
        subtitle="I enjoy blending reliable backend architecture with playful user experiences."
        gradientTitle
        className="max-w-3xl"
      />

      <motion.div
        variants={fadeInUp}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
        className="relative mt-8 overflow-hidden rounded-[2rem] border border-[var(--surface-border)] bg-[var(--surface)]/95 p-6 shadow-[0_30px_68px_-50px_rgba(31,26,20,0.4)] sm:mt-10 sm:p-10 dark:shadow-none"
      >
        <div className="pointer-events-none absolute inset-0 opacity-45 [background-image:linear-gradient(var(--grid)_1px,transparent_1px),linear-gradient(90deg,var(--grid)_1px,transparent_1px)] [background-size:30px_30px]" />
        <div className="pointer-events-none absolute -right-8 top-8 h-14 w-14 rounded-full border-2 border-dashed border-[#ff4f4f]/45 bg-[#ffe2df]/65 animate-float-slow dark:bg-[#ffe2df]/10" />
        <div className="pointer-events-none absolute -left-5 bottom-8 h-12 w-12 rounded-xl border border-[var(--surface-border)] bg-[#ecfccb]/75 animate-drift-spin dark:bg-[#ecfccb]/10" />
        <div className="relative z-10 grid gap-8 ">
          <div className="space-y-4 text-sm leading-7 text-[var(--foreground)]/80 sm:space-y-5 sm:text-base sm:leading-8">
            <p>
              I am an Information Technology student at Vidyalankar Institute
              of Technology, focused on building dependable products with clean
              engineering fundamentals.
            </p>
            <p>
              My core interest is backend systems and scalable architecture. I
              enjoy designing APIs, structuring services, and creating
              cloud-ready systems that remain maintainable as they grow.
            </p>
            <p>
              I am continuously improving through Data Structures and
              Algorithms, system design practice, and DevOps learning so I can
              deliver complete solutions from development to deployment.
            </p>
          </div>
          {/* <div className="grid gap-3 self-start sm:grid-cols-2 lg:grid-cols-1">
            <div className="rounded-2xl border border-[#d8ccb8] bg-[#fff5e2] p-4">
              <p className="text-xs uppercase tracking-[0.16em] text-[#a65713]">Current Focus</p>
              <p className="mt-1 text-sm font-semibold text-[#1f1a14]">Cloud-native backend systems</p>
            </div>
            <div className="rounded-2xl border border-[#d8ccb8] bg-[#fff5e2] p-4">
              <p className="text-xs uppercase tracking-[0.16em] text-[#a65713]">Workflow</p>
              <p className="mt-1 text-sm font-semibold text-[#1f1a14]">Design, build, test, ship</p>
            </div>
          </div> */}
        </div>
      </motion.div>
    </SectionContainer>
  );
}

