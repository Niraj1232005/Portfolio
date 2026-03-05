"use client";

import { motion } from "framer-motion";
import AnimatedHeading from "@/components/ui/AnimatedHeading";
import SectionContainer from "@/components/ui/SectionContainer";
import { fadeInUp } from "@/components/ui/motion";

export default function About() {
  return (
    <SectionContainer className="pb-14 pt-24 sm:pb-20 sm:pt-36">
      <AnimatedHeading
        level="h1"
        eyebrow="About"
        title="Engineering With Clarity and Scale"
        subtitle="Building dependable software with a strong backend and cloud-first mindset."
        gradientTitle
        className="max-w-3xl"
      />

      <motion.div
        variants={fadeInUp}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
        className="relative mt-8 overflow-hidden rounded-2xl border border-white/14 bg-slate-900/55 p-5 backdrop-blur-xl sm:mt-10 sm:rounded-3xl sm:p-10"
      >
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_16%_14%,rgba(129,140,248,0.14),transparent_38%),radial-gradient(circle_at_86%_18%,rgba(167,139,250,0.1),transparent_36%)]" />
        <div className="relative z-10 space-y-4 text-sm leading-7 text-slate-200/90 sm:space-y-5 sm:text-base sm:leading-8">
          <p>
            I am an Information Technology student at Vidyalankar Institute of
            Technology, focused on building dependable products with clean
            engineering fundamentals.
          </p>
          <p>
            My core interest is backend systems and scalable architecture. I
            enjoy designing APIs, structuring services, and creating cloud-ready
            systems that remain maintainable as they grow.
          </p>
          <p>
            I am continuously improving through Data Structures and Algorithms,
            system design practice, and DevOps learning so I can deliver
            complete solutions from development to deployment.
          </p>
        </div>
      </motion.div>
    </SectionContainer>
  );
}
