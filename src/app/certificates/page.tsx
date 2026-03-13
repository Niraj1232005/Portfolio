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
    <SectionContainer className="pb-12 pt-16 sm:pb-16 sm:pt-24 md:pt-28">
      <div className="relative overflow-hidden rounded-[2rem] border border-[#d8ccb8] bg-[#fffaf1]/95 p-5 shadow-[0_28px_68px_-50px_rgba(31,26,20,0.4)] sm:p-8">
        <div className="pointer-events-none absolute inset-0 opacity-45 [background-image:linear-gradient(rgba(216,204,184,0.58)_1px,transparent_1px),linear-gradient(90deg,rgba(216,204,184,0.58)_1px,transparent_1px)] [background-size:32px_32px]" />
        <AnimatedHeading
          level="h1"
          eyebrow="Certificates"
          title="Verified Learning Milestones"
          subtitle="Professional certificates that validate cloud, frontend, and modern development knowledge."
          gradientTitle
          className="relative z-10 max-w-3xl"
        />

        <div className="relative z-10 mt-8 grid gap-6 sm:mt-10 md:grid-cols-2 xl:grid-cols-3">
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
                <div className="overflow-hidden rounded-2xl border border-[#d8ccb8] bg-[#fff6e7]">
                  <Image
                    src={certificate.image}
                    alt={certificate.title}
                    width={540}
                    height={320}
                    className="h-44 w-full object-cover transition duration-500 group-hover:scale-105"
                  />
                </div>

                <h2 className="mt-5 text-lg font-semibold text-[#1f1a14]">
                  {certificate.title}
                </h2>
                <p className="mt-2 text-sm text-[#665e51]">{certificate.issuer}</p>

                <Link
                  href={`/certificates/${certificate.slug}`}
                  className="mt-5 inline-flex items-center gap-1.5 text-sm text-[#665e51] transition hover:text-[#ff7a1a]"
                >
                  View credential
                  <FiArrowRight />
                </Link>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </SectionContainer>
  );
}

