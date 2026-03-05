"use client";

import { motion } from "framer-motion";
import AnimatedHeading from "@/components/ui/AnimatedHeading";
import Card from "@/components/ui/Card";
import SectionContainer from "@/components/ui/SectionContainer";
import { fadeInUp, staggerContainer } from "@/components/ui/motion";
import { aboutParagraphs } from "@/data/content";

export default function About() {
  return (
    <SectionContainer className="pb-20 pt-36">
      <AnimatedHeading
        level="h1"
        eyebrow="About"
        title="Engineering With Clarity and Scale"
        subtitle="I focus on backend reliability, cloud-first thinking, and product experiences that stay fast and maintainable."
        gradientTitle
        className="max-w-3xl"
      />

      <motion.div
        variants={staggerContainer}
        initial="hidden"
        animate="show"
        className="mt-10 grid gap-5"
      >
        {aboutParagraphs.map((paragraph) => (
          <motion.div key={paragraph} variants={fadeInUp}>
            <Card hover={false}>
              <p className="text-sm leading-7 text-slate-200/90 sm:text-base">
                {paragraph}
              </p>
            </Card>
          </motion.div>
        ))}
      </motion.div>
    </SectionContainer>
  );
}
