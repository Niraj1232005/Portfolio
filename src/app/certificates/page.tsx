"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { FiArrowRight } from "react-icons/fi";
import AnimatedHeading from "@/components/ui/AnimatedHeading";
import Card from "@/components/ui/Card";
import SectionContainer from "@/components/ui/SectionContainer";
import { fadeInUp } from "@/components/ui/motion";
import { certificates } from "@/data/content";

export default function Certificates() {
  return (
    <SectionContainer className="pb-20 pt-36">
      <AnimatedHeading
        level="h1"
        eyebrow="Certificates"
        title="Verified Learning Milestones"
        subtitle="Professional certificates that validate cloud, frontend, and modern development knowledge."
        gradientTitle
        className="max-w-3xl"
      />

      <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
        {certificates.map((certificate, index) => (
          <motion.div
            key={certificate.slug}
            variants={fadeInUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.22 }}
            transition={{ delay: index * 0.07 }}
          >
            <Card className="h-full">
              <div className="overflow-hidden rounded-xl border border-white/10 bg-slate-900/35">
                <Image
                  src={certificate.image}
                  alt={certificate.title}
                  width={540}
                  height={320}
                  className="h-44 w-full object-cover transition duration-500 group-hover:scale-105"
                />
              </div>

              <h2 className="mt-5 text-lg font-semibold text-slate-100">
                {certificate.title}
              </h2>
              <p className="mt-2 text-sm text-slate-300/85">{certificate.issuer}</p>

              <Link
                href={`/certificates/${certificate.slug}`}
                className="mt-5 inline-flex items-center gap-1.5 text-sm text-indigo-200 transition hover:text-indigo-100"
              >
                View credential
                <FiArrowRight />
              </Link>
            </Card>
          </motion.div>
        ))}
      </div>
    </SectionContainer>
  );
}
